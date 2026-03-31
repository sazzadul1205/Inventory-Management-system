// page/frontend/GlobalPresence/LanguageSupportSection/LanguageSupportSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

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
    HiOutlineChevronRight,
    HiOutlineLibrary,
    HiOutlineNewspaper,
    HiOutlineVideoCamera,
    HiOutlineMicrophone as HiOutlineMicrophoneIcon,
    HiOutlineZoomIn,
    HiOutlineVolumeUp as HiOutlineVolumeUpIcon,
    HiOutlineQrcode,
    HiOutlinePrinter,
    HiOutlineCalendar as HiOutlineCalendarIcon,
    HiOutlineChatAlt,
    HiOutlinePhoneIncoming,
    HiOutlineMailOpen,
    HiOutlineVideoCamera as HiOutlineVideoCameraIcon,
    HiOutlineUserCircle
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import {
    MdOutlineHeadphones as HiOutlineHeadphones,
    MdOutlineFullscreen as HiOutlineFullscreen,
    MdOutlineClosedCaption as HiOutlineClosedCaption,
} from "react-icons/md";

const LanguageSupportSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedLanguage, setSelectedLanguage] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLanguageData, setSelectedLanguageData] = useState(null);
    const [showLanguageModal, setShowLanguageModal] = useState(false);
    const [favoriteLanguages, setFavoriteLanguages] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [hoveredMarker, setHoveredMarker] = useState(null);
    const [activeTranslator, setActiveTranslator] = useState(null);
    const [translationText, setTranslationText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const carouselRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('favoriteLanguages');
        if (saved) setFavoriteLanguages(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteLanguages', JSON.stringify(favoriteLanguages));
    }, [favoriteLanguages]);

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
            calendarIcon: <HiOutlineCalendarIcon className={className} />,
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
            volumeUp: <HiOutlineVolumeUpIcon className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            microphoneIcon: <HiOutlineMicrophoneIcon className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            library: <HiOutlineLibrary className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            videoCamera: <HiOutlineVideoCameraIcon className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            fullscreen: <HiOutlineFullscreen className={className} />,
            caption: <HiOutlineClosedCaption className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            printer: <HiOutlinePrinter className={className} />,
            chatAlt: <HiOutlineChatAlt className={className} />,
            phoneIncoming: <HiOutlinePhoneIncoming className={className} />,
            mailOpen: <HiOutlineMailOpen className={className} />,
            userCircle: <HiOutlineUserCircle className={className} />
        };
        return icons[iconName] || <HiOutlineTranslate className={className} />;
    };

    // Get language configuration
    const getLanguageConfig = (language) => {
        const configs = {
            'english': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'globe', label: 'English', flag: '🇺🇸', code: 'en', nativeName: 'English', speakers: '1.5B+', gradient: 'from-blue-500 to-blue-600', coordinates: { x: 750, y: 250 } },
            'spanish': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'globe', label: 'Spanish', flag: '🇪🇸', code: 'es', nativeName: 'Español', speakers: '500M+', gradient: 'from-purple-500 to-purple-600', coordinates: { x: 480, y: 240 } },
            'french': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'globe', label: 'French', flag: '🇫🇷', code: 'fr', nativeName: 'Français', speakers: '300M+', gradient: 'from-green-500 to-green-600', coordinates: { x: 510, y: 200 } },
            'german': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'globe', label: 'German', flag: '🇩🇪', code: 'de', nativeName: 'Deutsch', speakers: '200M+', gradient: 'from-orange-500 to-orange-600', coordinates: { x: 490, y: 190 } },
            'mandarin': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'globe', label: 'Mandarin', flag: '🇨🇳', code: 'zh', nativeName: '中文', speakers: '1.2B+', gradient: 'from-red-500 to-red-600', coordinates: { x: 980, y: 310 } },
            'japanese': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'globe', label: 'Japanese', flag: '🇯🇵', code: 'ja', nativeName: '日本語', speakers: '125M+', gradient: 'from-pink-500 to-pink-600', coordinates: { x: 1020, y: 330 } },
            'arabic': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Arabic', flag: '🇦🇪', code: 'ar', nativeName: 'العربية', speakers: '400M+', gradient: 'from-emerald-500 to-emerald-600', coordinates: { x: 470, y: 340 } },
            'portuguese': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'globe', label: 'Portuguese', flag: '🇧🇷', code: 'pt', nativeName: 'Português', speakers: '250M+', gradient: 'from-amber-500 to-amber-600', coordinates: { x: 320, y: 440 } }
        };
        return configs[language] || { color: 'bg-gray-100 text-gray-700', icon: 'globe', label: language, flag: '🌐', nativeName: language, speakers: 'N/A' };
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { color: 'bg-blue-100 text-blue-700', label: 'North America', flag: '🇺🇸', gradient: 'from-blue-500 to-blue-600' },
            'europe': { color: 'bg-purple-100 text-purple-700', label: 'Europe', flag: '🇪🇺', gradient: 'from-purple-500 to-purple-600' },
            'asia-pacific': { color: 'bg-green-100 text-green-700', label: 'Asia Pacific', flag: '🌏', gradient: 'from-green-500 to-green-600' },
            'latin-america': { color: 'bg-orange-100 text-orange-700', label: 'Latin America', flag: '🌎', gradient: 'from-orange-500 to-orange-600' },
            'middle-east': { color: 'bg-red-100 text-red-700', label: 'Middle East', flag: '🕌', gradient: 'from-red-500 to-red-600' },
            'africa': { color: 'bg-emerald-100 text-emerald-700', label: 'Africa', flag: '🌍', gradient: 'from-emerald-500 to-emerald-600' }
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

    // Open language modal
    const openLanguageModal = (language) => {
        setSelectedLanguageData(language);
        setShowLanguageModal(true);
    };

    // Handle translation
    const handleTranslate = () => {
        if (!translationText.trim()) return;
        // Simulate translation
        setTimeout(() => {
            setTranslatedText(`[Translated to ${activeTranslator?.name}]: ${translationText}`);
        }, 500);
    };

    // Carousel navigation for language features
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.languageFeatures?.length || 1));
    }, [config?.languageFeatures?.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + (config?.languageFeatures?.length || 1)) % (config?.languageFeatures?.length || 1));
    }, [config?.languageFeatures?.length]);

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.languageFeatures?.length > 1 && activeTab === 'features') {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.languageFeatures?.length, activeTab, nextSlide]);

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

        if (activeTab === 'favorites') {
            languages = languages.filter(l => favoriteLanguages.includes(l.id));
        } else if (activeTab === 'featured') {
            languages = languages.filter(l => l.isFeatured);
        }

        return languages;
    }, [config?.languages, searchQuery, selectedLanguage, selectedRegion, activeTab, favoriteLanguages]);

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

    const tabs = [
        { id: 'all', label: 'All Languages', icon: 'globe' },
        { id: 'map', label: 'Language Map', icon: 'map' },
        { id: 'translator', label: 'Translator', icon: 'translate' },
        { id: 'features', label: 'Features', icon: 'star' },
        { id: 'favorites', label: 'Favorites', icon: 'heart' }
    ];

    const languageFeatures = config?.languageFeatures || [
        { title: "Real-time Translation", description: "Instant translation for support conversations", icon: "translate", gradient: "from-blue-500 to-blue-600" },
        { title: "Native Speaking Agents", description: "Support in your preferred language", icon: "microphone", gradient: "from-green-500 to-green-600" },
        { title: "Localized Documentation", description: "Documentation in 15+ languages", icon: "document", gradient: "from-purple-500 to-purple-600" },
        { title: "24/7 Multilingual Support", description: "Round-the-clock assistance", icon: "clock", gradient: "from-orange-500 to-orange-600" }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "15+", label: "Languages Supported", icon: "translate" },
        { value: "24/7", label: "Global Support", icon: "clock" },
        { value: "35min", label: "Avg Response Time", icon: "clock" },
        { value: "98%", label: "Customer Satisfaction", icon: "star" }
    ];

    // Active filters count
    const activeFiltersCount = [selectedLanguage !== 'all', selectedRegion !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedLanguage('all');
        setSelectedRegion('all');
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Language Support Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-language" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-language)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineTranslate className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Language Support"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Support in Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Language"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Get personalized support in your preferred language. Our multilingual team is ready to assist you with native-level fluency."}
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
                            {tab.id === 'favorites' && favoriteLanguages.length > 0 && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoriteLanguages.length}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Language Map Tab */}
                {activeTab === 'map' && (
                    <div className="mb-12">
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="relative aspect-video bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                                {/* Zoom Controls */}
                                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                                    <button
                                        onClick={() => setZoomLevel(Math.min(zoomLevel + 0.2, 2))}
                                        className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                                    >
                                        <HiOutlineZoomIn className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setZoomLevel(Math.max(zoomLevel - 0.2, 0.5))}
                                        className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                                    >
                                        <HiOutlineZoomIn className="w-4 h-4 rotate-180" />
                                    </button>
                                </div>

                                <svg
                                    className="w-full h-full transition-transform duration-300"
                                    viewBox="0 0 1200 600"
                                    preserveAspectRatio="none"
                                    style={{ transform: `scale(${zoomLevel})` }}
                                >
                                    <rect width="1200" height="600" fill="url(#map-gradient-language)" className="opacity-30" />
                                    <defs>
                                        <linearGradient id="map-gradient-language" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                                        </linearGradient>
                                    </defs>

                                    {/* Continent outlines */}
                                    <path d="M200,150 L280,120 L350,140 L380,180 L350,220 L280,240 L200,220 L170,180 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                    <path d="M500,180 L600,150 L700,160 L750,200 L720,240 L620,250 L520,230 L480,200 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                    <path d="M900,200 L1000,180 L1080,200 L1100,240 L1050,270 L950,260 L880,240 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                    <path d="M300,350 L400,330 L480,340 L520,380 L480,420 L380,430 L280,410 L260,380 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                    <path d="M700,400 L780,380 L850,400 L880,440 L820,470 L730,460 L680,430 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />

                                    {/* Language markers */}
                                    {filteredLanguages.map((language) => {
                                        const langConfig = getLanguageConfig(language.id);
                                        const isHovered = hoveredMarker === language.id;
                                        const isFavorited = favoriteLanguages.includes(language.id);
                                        return (
                                            <g
                                                key={language.id}
                                                className="cursor-pointer transition-all duration-300"
                                                onMouseEnter={() => setHoveredMarker(language.id)}
                                                onMouseLeave={() => setHoveredMarker(null)}
                                                onClick={() => openLanguageModal(language)}
                                            >
                                                <circle
                                                    cx={langConfig.coordinates?.x || 500}
                                                    cy={langConfig.coordinates?.y || 250}
                                                    r={isHovered ? 14 : 10}
                                                    fill={langConfig.color.split(' ')[0].replace('bg-', '') === 'blue' ? '#3B82F6' :
                                                        langConfig.color.split(' ')[0].replace('bg-', '') === 'purple' ? '#8B5CF6' : '#10B981'}
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    className="transition-all duration-300"
                                                />
                                                {isHovered && (
                                                    <>
                                                        <circle cx={langConfig.coordinates?.x || 500} cy={langConfig.coordinates?.y || 250} r="22" fill={langConfig.color.split(' ')[0].replace('bg-', '') === 'blue' ? '#3B82F6' : '#8B5CF6'} fillOpacity="0.2" />
                                                        <text x={langConfig.coordinates?.x || 500} y={(langConfig.coordinates?.y || 250) - 18} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                                                            {language.name}
                                                        </text>
                                                    </>
                                                )}
                                                {isFavorited && (
                                                    <circle cx={(langConfig.coordinates?.x || 500) + 12} cy={(langConfig.coordinates?.y || 250) - 12} r="6" fill="#F59E0B" stroke="white" strokeWidth="1.5" />
                                                )}
                                            </g>
                                        );
                                    })}
                                </svg>

                                {/* Map Legend */}
                                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-md">
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-blue-500" />
                                            <span className="text-xs text-gray-600">Primary Languages</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-orange-500" />
                                            <span className="text-xs text-gray-600">Favorites</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Translator Tab */}
                {activeTab === 'translator' && (
                    <div className="mb-12">
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="text-center mb-8">
                                <HiOutlineTranslate className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Instant Translation Tool</h2>
                                <p className="text-gray-600 dark:text-gray-400">Translate your text to any supported language</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Target Language</label>
                                    <select
                                        value={activeTranslator?.id || ''}
                                        onChange={(e) => {
                                            const lang = languagesList.find(l => l.id === e.target.value);
                                            setActiveTranslator(lang);
                                        }}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                                    >
                                        <option value="">Select a language</option>
                                        {languagesList.map(lang => (
                                            <option key={lang.id} value={lang.id}>{lang.flag} {lang.name}</option>
                                        ))}
                                    </select>
                                    <textarea
                                        value={translationText}
                                        onChange={(e) => setTranslationText(e.target.value)}
                                        placeholder="Enter text to translate..."
                                        rows="6"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        onClick={handleTranslate}
                                        disabled={!activeTranslator || !translationText}
                                        className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                                    >
                                        Translate
                                    </button>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Translation</label>
                                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 min-h-40 border border-gray-200 dark:border-gray-600">
                                        {translatedText ? (
                                            <p className="text-gray-800 dark:text-gray-200">{translatedText}</p>
                                        ) : (
                                            <p className="text-gray-400 text-center mt-12">Translation will appear here</p>
                                        )}
                                    </div>
                                    {activeTranslator && (
                                        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                <span className="font-semibold">Powered by:</span> {activeTranslator.name} translation engine
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Language Features Tab - Carousel */}
                {activeTab === 'features' && languageFeatures.length > 0 && (
                    <div className="relative mb-12">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {languageFeatures.map((feature, idx) => (
                                    <div key={idx} className="w-full shrink-0">
                                        <div className={`bg-linear-to-br ${feature.gradient} rounded-3xl p-12 text-white text-center`}>
                                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                {getIcon(feature.icon, "w-10 h-10 text-white")}
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h2>
                                            <p className="text-white/90 text-xl max-w-2xl mx-auto">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {languageFeatures.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                                    >
                                        <HiOutlineChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                                    >
                                        <HiOutlineChevronRight className="w-6 h-6" />
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {languageFeatures.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentSlide(idx)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* All Languages / Favorites Tab */}
                {(activeTab === 'all' || activeTab === 'favorites') && (
                    <>
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
                                    placeholder="Search by language name, native name, or region..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Search languages"
                                />
                            </div>

                            <div className="flex gap-2">
                                <select
                                    value={selectedLanguage}
                                    onChange={(e) => setSelectedLanguage(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Languages</option>
                                    {languagesList.map(lang => (
                                        <option key={lang.id} value={lang.id}>{lang.name}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {regions.map(region => (
                                        <option key={region.id} value={region.id}>{region.label}</option>
                                    ))}
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

                        {/* Results Count */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredLanguages.length}</span> languages
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        </div>

                        {/* Languages Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {filteredLanguages.map((language) => {
                                const langConfig = getLanguageConfig(language.id);
                                const isFavorite = favoriteLanguages.includes(language.id);
                                return (
                                    <div
                                        key={language.id}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                        onClick={() => openLanguageModal(language)}
                                    >
                                        <div className={`p-5 bg-linear-to-r ${langConfig.gradient} text-white`}>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-4xl">{language.flag}</span>
                                                    <div>
                                                        <h3 className="font-bold text-lg">{language.name}</h3>
                                                        <p className="text-sm text-white/80">{language.nativeName}</p>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleFavoriteLanguage(language.id); }}
                                                    className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-white/70 hover:text-red-500'}`}
                                                >
                                                    <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <HiOutlineUsers className="w-4 h-4 text-blue-500" />
                                                <span className="text-sm text-gray-600">{langConfig.speakers} speakers</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1 mb-3">
                                                {language.regions?.map((region, idx) => {
                                                    const regConfig = getRegionConfig(region);
                                                    return (
                                                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1">
                                                            <span>{regConfig.flag}</span>
                                                            {regConfig.label}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 mb-3">
                                                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                    <div className="text-sm font-bold text-green-600">{language.responseTime} min</div>
                                                    <div className="text-xs text-gray-500">Response Time</div>
                                                </div>
                                                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                    <div className="text-sm font-bold text-blue-600">{language.teamSize}+</div>
                                                    <div className="text-xs text-gray-500">Support Specialists</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <span className="text-xs text-green-600 font-semibold">{language.supportLevel} Support</span>
                                                <span className="text-blue-600 text-xs font-semibold hover:underline">View Details →</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                {/* No Results */}
                {(activeTab === 'all' || activeTab === 'favorites') && filteredLanguages.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineTranslate className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No languages found</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {activeTab === 'favorites' ? "You haven't added any favorite languages yet." : "Try adjusting your search or filter criteria"}
                        </p>
                        {activeTab === 'favorites' && (
                            <button onClick={() => setActiveTab('all')} className="mt-4 text-blue-600 hover:underline">
                                Browse All Languages
                            </button>
                        )}
                        {activeFiltersCount > 0 && (
                            <button onClick={clearAllFilters} className="mt-4 text-blue-600 hover:underline ml-4">
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {/* Language Detail Modal */}
                {showLanguageModal && selectedLanguageData && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowLanguageModal(false)}>
                        <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className={`p-6 bg-linear-to-r ${getLanguageConfig(selectedLanguageData.id).gradient} text-white`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-4xl">{selectedLanguageData.flag}</span>
                                        <div>
                                            <h2 className="text-2xl font-bold">{selectedLanguageData.name}</h2>
                                            <p className="text-sm text-white/80">{selectedLanguageData.nativeName}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setShowLanguageModal(false)} className="text-white/80 hover:text-white">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                        <div className="text-xl font-bold text-blue-600">{getLanguageConfig(selectedLanguageData.id).speakers}</div>
                                        <div className="text-xs text-gray-500">Speakers</div>
                                    </div>
                                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                        <div className="text-xl font-bold text-green-600">{selectedLanguageData.responseTime} min</div>
                                        <div className="text-xs text-gray-500">Avg Response</div>
                                    </div>
                                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                        <div className="text-xl font-bold text-purple-600">{selectedLanguageData.teamSize}+</div>
                                        <div className="text-xs text-gray-500">Support Team</div>
                                    </div>
                                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                        <div className="text-xl font-bold text-yellow-600">{selectedLanguageData.supportLevel}</div>
                                        <div className="text-xs text-gray-500">Support Level</div>
                                    </div>
                                </div>
                                {selectedLanguageData.regions && (
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 mb-2">Regions Served</p>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedLanguageData.regions.map((region, idx) => {
                                                const regConfig = getRegionConfig(region);
                                                return (
                                                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">
                                                        <span>{regConfig.flag}</span>
                                                        {regConfig.label}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                                <div className="flex gap-3 pt-4 border-t border-gray-100">
                                    <Link
                                        href={`/support/${selectedLanguageData.code}`}
                                        className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        Get Support
                                    </Link>
                                    <button
                                        onClick={() => handleFavoriteLanguage(selectedLanguageData.id)}
                                        className={`px-4 py-2 rounded-lg transition-colors ${favoriteLanguages.includes(selectedLanguageData.id) ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-600'}`}
                                    >
                                        <HiOutlineHeart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
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
            </div>

            <style>{`
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

export default LanguageSupportSection3; 