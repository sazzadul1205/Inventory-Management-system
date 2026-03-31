// page/frontend/GlobalPresence/LanguageSupportSection/LanguageSupportSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

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
    HiOutlineMicrophone
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import {
    MdOutlineHeadphones as HiOutlineHeadphones,
} from "react-icons/md";

const LanguageSupportSection1 = ({ config }) => {
    const [selectedLanguage] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedLanguage, setExpandedLanguage] = useState(null);
    const [savedLanguages, setSavedLanguages] = useState([]);

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
            microphone: <HiOutlineMicrophone className={className} />
        };
        return icons[iconName] || <HiOutlineTranslate className={className} />;
    };

    // Get language configuration
    const getLanguageConfig = (language) => {
        const configs = {
            'english': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'globe', label: 'English', flag: '🇺🇸', code: 'en', nativeName: 'English', speakers: '1.5B+' },
            'spanish': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'globe', label: 'Spanish', flag: '🇪🇸', code: 'es', nativeName: 'Español', speakers: '500M+' },
            'french': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'globe', label: 'French', flag: '🇫🇷', code: 'fr', nativeName: 'Français', speakers: '300M+' },
            'german': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'globe', label: 'German', flag: '🇩🇪', code: 'de', nativeName: 'Deutsch', speakers: '200M+' },
            'mandarin': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'globe', label: 'Mandarin', flag: '🇨🇳', code: 'zh', nativeName: '中文', speakers: '1.2B+' },
            'japanese': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'globe', label: 'Japanese', flag: '🇯🇵', code: 'ja', nativeName: '日本語', speakers: '125M+' },
            'arabic': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Arabic', flag: '🇦🇪', code: 'ar', nativeName: 'العربية', speakers: '400M+' },
            'portuguese': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'globe', label: 'Portuguese', flag: '🇧🇷', code: 'pt', nativeName: 'Português', speakers: '250M+' },
            'italian': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'globe', label: 'Italian', flag: '🇮🇹', code: 'it', nativeName: 'Italiano', speakers: '85M+' },
            'korean': { color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400', icon: 'globe', label: 'Korean', flag: '🇰🇷', code: 'ko', nativeName: '한국어', speakers: '80M+' },
            'dutch': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'globe', label: 'Dutch', flag: '🇳🇱', code: 'nl', nativeName: 'Nederlands', speakers: '30M+' },
            'polish': { color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400', icon: 'globe', label: 'Polish', flag: '🇵🇱', code: 'pl', nativeName: 'Polski', speakers: '40M+' }
        };
        return configs[language] || { color: 'bg-gray-100 text-gray-700', icon: 'globe', label: language, flag: '🌐', nativeName: language };
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { color: 'bg-blue-100 text-blue-700', label: 'North America', flag: '🇺🇸' },
            'europe': { color: 'bg-purple-100 text-purple-700', label: 'Europe', flag: '🇪🇺' },
            'asia-pacific': { color: 'bg-green-100 text-green-700', label: 'Asia Pacific', flag: '🌏' },
            'latin-america': { color: 'bg-orange-100 text-orange-700', label: 'Latin America', flag: '🌎' },
            'middle-east': { color: 'bg-red-100 text-red-700', label: 'Middle East', flag: '🕌' },
            'africa': { color: 'bg-emerald-100 text-emerald-700', label: 'Africa', flag: '🌍' }
        };
        return configs[region] || { color: 'bg-gray-100 text-gray-700', label: region, flag: '🌐' };
    };

    // Handle save language
    const handleSaveLanguage = (languageId) => {
        if (savedLanguages.includes(languageId)) {
            setSavedLanguages(savedLanguages.filter(id => id !== languageId));
        } else {
            setSavedLanguages([...savedLanguages, languageId]);
        }
    };

    // Filter languages
    const getFilteredLanguages = () => {
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

        return languages;
    };

    const filteredLanguages = getFilteredLanguages();
    const languagesList = config?.languages || [
        { id: 'english', name: 'English', nativeName: 'English', flag: '🇺🇸', code: 'en', regions: ['north-america', 'europe', 'asia-pacific', 'africa'], supportLevel: 'Full', responseTime: '< 1 hour', teamSize: 50 },
        { id: 'spanish', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', code: 'es', regions: ['europe', 'latin-america'], supportLevel: 'Full', responseTime: '< 1 hour', teamSize: 35 },
        { id: 'french', name: 'French', nativeName: 'Français', flag: '🇫🇷', code: 'fr', regions: ['europe', 'africa'], supportLevel: 'Full', responseTime: '< 1 hour', teamSize: 30 },
        { id: 'german', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', code: 'de', regions: ['europe'], supportLevel: 'Full', responseTime: '< 1 hour', teamSize: 25 },
        { id: 'mandarin', name: 'Mandarin', nativeName: '中文', flag: '🇨🇳', code: 'zh', regions: ['asia-pacific'], supportLevel: 'Full', responseTime: '< 2 hours', teamSize: 40 },
        { id: 'japanese', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', code: 'ja', regions: ['asia-pacific'], supportLevel: 'Full', responseTime: '< 1 hour', teamSize: 20 },
        { id: 'arabic', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', code: 'ar', regions: ['middle-east', 'africa'], supportLevel: 'Full', responseTime: '< 2 hours', teamSize: 25 },
        { id: 'portuguese', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', code: 'pt', regions: ['europe', 'latin-america'], supportLevel: 'Full', responseTime: '< 1 hour', teamSize: 20 }
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

    // Stats
    const stats = config?.stats || [
        { value: "15+", label: "Languages Supported", icon: "translate" },
        { value: "24/7", label: "Global Support", icon: "clock" },
        { value: "30min", label: "Avg Response Time", icon: "clock" },
        { value: "98%", label: "Customer Satisfaction", icon: "star" }
    ];

    // Featured language
    const featuredLanguage = config?.featuredLanguage || languagesList[0];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Language Support"
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
                        <HiOutlineTranslate className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Language Support"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Support in Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Language"}</span> {config?.title?.suffix || ""}
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Get personalized support in your preferred language. Our multilingual team is ready to assist you with native-level fluency."}
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
                        placeholder={config?.searchPlaceholder || "Search by language name, native name, or region..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search languages"
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

                {/* Featured Language */}
                {featuredLanguage && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                                Featured Language
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLanguageConfig(featuredLanguage.id).color}`}>
                                                    {getLanguageConfig(featuredLanguage.id).label}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-5xl">{featuredLanguage.flag}</span>
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                                    {featuredLanguage.name}
                                                </h3>
                                                <p className="text-gray-500">{featuredLanguage.nativeName}</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            Get dedicated support in {featuredLanguage.name}. Our native-speaking support team is available 24/7 to assist you with any questions or issues.
                                        </p>

                                        <div className="flex flex-wrap gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <HiOutlineUsers className="w-4 h-4" />
                                                <span>{featuredLanguage.teamSize || 50}+ support specialists</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>Response time: {featuredLanguage.responseTime || '< 1 hour'}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={`/support/${featuredLanguage.code}`}
                                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                Get Support in {featuredLanguage.name}
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleSaveLanguage(featuredLanguage.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedLanguages.includes(featuredLanguage.id)
                                                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedLanguages.includes(featuredLanguage.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl">
                                            <div className="flex items-center gap-3 mb-4">
                                                <HiOutlineHeadphones className="w-6 h-6 text-blue-600" />
                                                <h4 className="font-semibold text-gray-900 dark:text-white">Available Support Channels</h4>
                                            </div>
                                            <ul className="space-y-3">
                                                <li className="flex items-center gap-3">
                                                    <HiOutlinePhone className="w-5 h-5 text-green-500" />
                                                    <span className="text-gray-600 dark:text-gray-400">Phone Support in {featuredLanguage.name}</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <HiOutlineChat className="w-5 h-5 text-blue-500" />
                                                    <span className="text-gray-600 dark:text-gray-400">Live Chat with Native Speakers</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <HiOutlineMail className="w-5 h-5 text-purple-500" />
                                                    <span className="text-gray-600 dark:text-gray-400">Email Support in {featuredLanguage.name}</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <HiOutlineDocumentText className="w-5 h-5 text-orange-500" />
                                                    <span className="text-gray-600 dark:text-gray-400">Documentation in {featuredLanguage.name}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Languages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredLanguages.map((language) => {
                        const langConfig = getLanguageConfig(language.id);
                        const isExpanded = expandedLanguage === language.id;
                        const isSaved = savedLanguages.includes(language.id);

                        return (
                            <div
                                key={language.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-12 h-12 rounded-xl ${langConfig.color} flex items-center justify-center text-2xl`}>
                                                {language.flag}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                    {language.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">{language.nativeName}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleSaveLanguage(language.id)}
                                            className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                        >
                                            <HiOutlineBookmark className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${langConfig.color}`}>
                                            {langConfig.label}
                                        </span>
                                        <span className="text-xs text-gray-500">{langConfig.speakers} speakers</span>
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
                                            <span className="text-gray-500">Support Level:</span>
                                            <span className="font-medium text-green-600">{language.supportLevel || 'Full'}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500">Response Time:</span>
                                            <span className="font-medium text-blue-600">{language.responseTime || '< 1 hour'}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500">Support Team:</span>
                                            <span className="font-medium text-purple-600">{language.teamSize || '25'}+ specialists</span>
                                        </div>
                                    </div>

                                    {/* Expandable Details */}
                                    {language.supportChannels && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => setExpandedLanguage(isExpanded ? null : language.id)}
                                                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Show less' : 'View support channels'}
                                                <HiArrowRight className="w-4 h-4" />
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
                                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            Get Support
                                            <HiArrowRight className="w-4 h-4" />
                                        </Link>
                                        {language.docsLink && (
                                            <a
                                                href={language.docsLink}
                                                className="text-gray-400 hover:text-blue-600 transition-colors"
                                                aria-label="View documentation"
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
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedRegion('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Translation Services Banner */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineTranslate className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {config?.translationTitle || "Need Translation Services?"}
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        {config?.translationDescription || "We offer professional translation services for documentation, training materials, and support resources in all supported languages."}
                    </p>
                    <Link
                        href="/translation-services"
                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Learn More
                        <HiArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
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

export default LanguageSupportSection1;