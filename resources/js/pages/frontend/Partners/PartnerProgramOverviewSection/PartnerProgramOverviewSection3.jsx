// page/frontend/Partners/PartnerProgramOverviewSection/PartnerProgramOverviewSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineUserGroup,
    HiOutlineGlobe,
    HiOutlineChip,
    HiOutlineCloudUpload,
    HiOutlineShieldCheck,
    HiOutlineLightningBolt,
    HiOutlineChartBar,
    HiOutlineUsers,
    HiOutlineCalendar,
    HiOutlineTag,
    HiArrowRight,
    HiOutlineCheckCircle,
    HiOutlineClock,
    HiOutlineEye,
    HiOutlineBell,
    HiOutlineDownload,
    HiOutlinePlay,
    HiOutlineDocumentText,
    HiOutlineCode,
    HiOutlineCog,
    HiOutlineRefresh,
    HiOutlineStar,
    HiOutlineFlag,
    HiOutlineGift,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineExternalLink,
    HiOutlineMail,
    HiOutlineThumbUp,
    HiOutlineChat,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlineNewspaper,
    HiOutlineAcademicCap,
    HiOutlineBriefcase,
    HiOutlineLocationMarker,
    HiOutlineCreditCard,
    HiOutlineChartPie,
    HiOutlineTemplate,
    HiOutlineBadgeCheck,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineHeart,
    HiOutlineTrendingUp,
    HiOutlineFire,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineLibrary,
    HiOutlineNewspaper as HiOutlineNewspaperAlt,
    HiOutlineVideoCamera as HiOutlineVideoCameraAlt,
    HiOutlineMicrophone as HiOutlineMicrophoneAlt,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineRefresh as HiOutlineRefreshAlt,
    HiOutlineClipboardCheck,
    HiOutlineZoomIn,
    HiOutlineVolumeUp,
    HiOutlineQrcode,
    HiOutlinePrinter
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineCloud } from 'react-icons/hi2';
import {
    MdOutlineFullscreen as HiOutlineFullscreen,
    MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const PartnerProgramOverviewSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedProgram, setSelectedProgram] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showPartnerModal, setShowPartnerModal] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [favoritePartners, setFavoritePartners] = useState([]);
    const carouselRef = useRef(null);
    const videoRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('favoritePartners');
        if (saved) setFavoritePartners(JSON.parse(saved));
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('favoritePartners', JSON.stringify(favoritePartners));
    }, [favoritePartners]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            usergroup: <HiOutlineUserGroup className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            chip: <HiOutlineChip className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
            shield: <HiOutlineShieldCheck className={className} />,
            bolt: <HiOutlineLightningBolt className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            users: <HiOutlineUsers className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            tag: <HiOutlineTag className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            clock: <HiOutlineClock className={className} />,
            eye: <HiOutlineEye className={className} />,
            bell: <HiOutlineBell className={className} />,
            download: <HiOutlineDownload className={className} />,
            play: <HiOutlinePlay className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            code: <HiOutlineCode className={className} />,
            cog: <HiOutlineCog className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            star: <HiOutlineStar className={className} />,
            flag: <HiOutlineFlag className={className} />,
            gift: <HiOutlineGift className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            mail: <HiOutlineMail className={className} />,
            'thumbs-up': <HiOutlineThumbUp className={className} />,
            chat: <HiOutlineChat className={className} />,
            quote: <HiOutlineQuote className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            briefcase: <HiOutlineBriefcase className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            template: <HiOutlineTemplate className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            phone: <HiOutlinePhone className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            heart: <HiOutlineHeart className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            library: <HiOutlineLibrary className={className} />,
            newspaperAlt: <HiOutlineNewspaperAlt className={className} />,
            videoAlt: <HiOutlineVideoCameraAlt className={className} />,
            microphoneAlt: <HiOutlineMicrophoneAlt className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            refreshAlt: <HiOutlineRefreshAlt className={className} />,
            clipboardCheck: <HiOutlineClipboardCheck className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            fullscreen: <HiOutlineFullscreen className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            caption: <HiOutlineClosedCaption className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            printer: <HiOutlinePrinter className={className} />
        };
        return icons[iconName] || <HiOutlineUserGroup className={className} />;
    };

    // Get partner program configuration
    const getProgramConfig = (program) => {
        const configs = {
            'technology': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'chip', label: 'Technology Partner', gradient: 'from-blue-500 to-blue-600' },
            'consulting': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'briefcase', label: 'Consulting Partner', gradient: 'from-purple-500 to-purple-600' },
            'reseller': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'globe', label: 'Reseller Partner', gradient: 'from-green-500 to-green-600' },
            'alliance': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'users', label: 'Strategic Alliance', gradient: 'from-orange-500 to-orange-600' },
            'solution': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Solution Partner', gradient: 'from-indigo-500 to-indigo-600' }
        };
        return configs[program] || configs.technology;
    };

    // Get partner tier configuration
    const getTierConfig = (tier) => {
        const configs = {
            'platinum': { color: 'bg-gray-800 text-white dark:bg-gray-700 dark:text-white', icon: 'trophy', label: 'Platinum', badge: '🏆 Platinum', gradient: 'from-gray-700 to-gray-800' },
            'gold': { color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400', icon: 'star', label: 'Gold', badge: '⭐ Gold', gradient: 'from-yellow-500 to-amber-500' },
            'silver': { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300', icon: 'badge', label: 'Silver', badge: '🥈 Silver', gradient: 'from-gray-400 to-gray-500' },
            'registered': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'check', label: 'Registered', badge: '📝 Registered', gradient: 'from-blue-500 to-blue-600' }
        };
        return configs[tier] || configs.registered;
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { label: 'North America', flag: '🇺🇸', color: 'bg-blue-100 text-blue-700' },
            'europe': { label: 'Europe', flag: '🇪🇺', color: 'bg-purple-100 text-purple-700' },
            'asia-pacific': { label: 'Asia Pacific', flag: '🌏', color: 'bg-green-100 text-green-700' },
            'latin-america': { label: 'Latin America', flag: '🌎', color: 'bg-orange-100 text-orange-700' },
            'middle-east': { label: 'Middle East', flag: '🕌', color: 'bg-red-100 text-red-700' },
            'africa': { label: 'Africa', flag: '🌍', color: 'bg-emerald-100 text-emerald-700' }
        };
        return configs[region] || { label: region, flag: '🌐', color: 'bg-gray-100 text-gray-700' };
    };

    // Handle favorite partner
    const handleFavoritePartner = (partnerId) => {
        setFavoritePartners(prev =>
            prev.includes(partnerId)
                ? prev.filter(id => id !== partnerId)
                : [...prev, partnerId]
        );
    };

    // Open partner modal
    const openPartnerModal = (partner) => {
        setSelectedPartner(partner);
        setShowPartnerModal(true);
    };

    // Carousel navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.featuredPartners?.length || 1));
    }, [config?.featuredPartners?.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + (config?.featuredPartners?.length || 1)) % (config?.featuredPartners?.length || 1));
    }, [config?.featuredPartners?.length]);

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.featuredPartners?.length > 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.featuredPartners?.length, nextSlide]);

    // Filter partners
    const getFilteredPartners = useCallback(() => {
        let partners = config?.partners || [];

        if (searchQuery) {
            partners = partners.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedProgram !== 'all') {
            partners = partners.filter(p => p.program === selectedProgram);
        }

        if (selectedRegion !== 'all') {
            partners = partners.filter(p => p.region === selectedRegion);
        }

        if (activeTab === 'featured') {
            partners = partners.filter(p => p.isFeatured);
        } else if (activeTab === 'favorites') {
            partners = partners.filter(p => favoritePartners.includes(p.id));
        }

        return partners;
    }, [config?.partners, searchQuery, selectedProgram, selectedRegion, activeTab, favoritePartners]);

    const filteredPartners = getFilteredPartners();
    const programTypes = config?.programTypes || [
        { id: 'all', label: 'All Partners', icon: 'usergroup' },
        { id: 'technology', label: 'Technology', icon: 'chip' },
        { id: 'consulting', label: 'Consulting', icon: 'briefcase' },
        { id: 'reseller', label: 'Reseller', icon: 'globe' },
        { id: 'alliance', label: 'Alliance', icon: 'users' },
        { id: 'solution', label: 'Solution', icon: 'cog' }
    ];

    const tabs = [
        { id: 'overview', label: 'Program Overview', icon: 'library' },
        { id: 'benefits', label: 'Benefits', icon: 'gift' },
        { id: 'partners', label: 'Find a Partner', icon: 'usergroup' },
        { id: 'resources', label: 'Resources', icon: 'document' }
    ];

    const partnerTabs = [
        { id: 'all', label: 'All Partners', icon: 'usergroup' },
        { id: 'featured', label: 'Featured', icon: 'star' },
        { id: 'favorites', label: 'Favorites', icon: 'heart' }
    ];

    const regions = config?.regions || [
        { id: 'all', label: 'All Regions', flag: '🌐' },
        { id: 'north-america', label: 'North America', flag: '🇺🇸' },
        { id: 'europe', label: 'Europe', flag: '🇪🇺' },
        { id: 'asia-pacific', label: 'Asia Pacific', flag: '🌏' }
    ];

    const featuredPartners = config?.featuredPartners || [];

    // Program benefits
    const programBenefits = config?.programBenefits || [
        { title: "Exclusive Training & Certification", description: "Access to comprehensive training programs and certifications to enhance your expertise.", icon: "academic", gradient: "from-blue-500 to-blue-600" },
        { title: "Marketing & Sales Support", description: "Co-marketing opportunities, sales enablement resources, and lead generation programs.", icon: "chart", gradient: "from-green-500 to-green-600" },
        { title: "Technical Support", description: "Priority technical support and dedicated partner success managers.", icon: "shield", gradient: "from-purple-500 to-purple-600" },
        { title: "Revenue Sharing", description: "Competitive commission structures and revenue sharing models.", icon: "credit", gradient: "from-orange-500 to-orange-600" },
        { title: "Co-innovation Opportunities", description: "Collaborate on product development and joint solutions.", icon: "chip", gradient: "from-indigo-500 to-indigo-600" },
        { title: "Global Recognition", description: "Showcase your expertise through our partner directory and events.", icon: "trophy", gradient: "from-yellow-500 to-amber-500" }
    ];

    // Partner resources
    const partnerResources = config?.partnerResources || [
        { title: "Partner Portal", description: "Access training, marketing materials, and sales tools.", icon: "cloud", link: "/partner-portal" },
        { title: "Certification Program", description: "Become a certified SupplyChainPro expert.", icon: "certificate", link: "/certification" },
        { title: "Marketing Toolkit", description: "Co-branded materials and campaign templates.", icon: "template", link: "/marketing-toolkit" },
        { title: "Sales Enablement", description: "Product demos, battle cards, and pitch decks.", icon: "presentation", link: "/sales-enablement" }
    ];

    // Upcoming partner events
    const partnerEvents = config?.partnerEvents || [];

    // Active filters count
    const activeFiltersCount = [selectedProgram !== 'all', selectedRegion !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedProgram('all');
        setSelectedRegion('all');
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Partner Program Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-partner" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-partner)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineUserGroup className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Partner Program"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Grow with"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "SupplyChainPro"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Join our global partner ecosystem and accelerate your business growth. We provide the tools, resources, and support you need to succeed."}
                    </p>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link
                            href="/become-partner"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                        >
                            Become a Partner
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/partner-directory"
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 transition-all duration-300"
                        >
                            Find a Partner
                            <HiOutlineSearch className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Main Tabs */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
                    <div className="flex flex-wrap gap-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-4 px-2 font-medium transition-all duration-300 flex items-center gap-2 border-b-2 ${activeTab === tab.id
                                    ? 'text-blue-600 dark:text-blue-400 border-blue-600'
                                    : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700'
                                    }`}
                            >
                                {getIcon(tab.icon, "w-5 h-5")}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <>
                        {/* Featured Partners Carousel */}
                        {featuredPartners.length > 0 && (
                            <div className="relative mb-16">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Partners</h2>
                                <div className="relative overflow-hidden rounded-3xl">
                                    <div
                                        className="flex transition-transform duration-500 ease-out"
                                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                        ref={carouselRef}
                                    >
                                        {featuredPartners.map((partner) => {
                                            const programConfig = getProgramConfig(partner.program);
                                            const tierConfig = getTierConfig(partner.tier);
                                            return (
                                                <div key={partner.id} className="w-full shrink-0 cursor-pointer" onClick={() => openPartnerModal(partner)}>
                                                    <div className="relative h-96 rounded-3xl overflow-hidden">
                                                        <img
                                                            src={partner.image}
                                                            alt={partner.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                            <div className="flex flex-wrap gap-2 mb-3">
                                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${programConfig.color}`}>
                                                                    {programConfig.label}
                                                                </span>
                                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tierConfig.color}`}>
                                                                    {tierConfig.badge}
                                                                </span>
                                                            </div>
                                                            <h2 className="text-3xl md:text-4xl font-bold mb-2">{partner.name}</h2>
                                                            <p className="text-white/80 mb-4 max-w-2xl line-clamp-2">{partner.description}</p>
                                                            <div className="flex items-center gap-4">
                                                                <div className="flex items-center gap-2 text-sm">
                                                                    <span>{getRegionConfig(partner.region).flag}</span>
                                                                    <span>{getRegionConfig(partner.region).label}</span>
                                                                </div>
                                                                {partner.expertise && (
                                                                    <div className="flex gap-2">
                                                                        {partner.expertise.slice(0, 2).map((exp, idx) => (
                                                                            <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full">{exp}</span>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {featuredPartners.length > 1 && (
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
                                                {featuredPartners.map((_, idx) => (
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

                        {/* Program Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                            {config?.stats?.map((stat, idx) => (
                                <div key={idx} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Partner Program Tiers */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Partner Program Tiers</h2>
                            <div className="grid md:grid-cols-4 gap-6">
                                {config?.partnerTiers?.map((tier) => {
                                    const tierConfig = getTierConfig(tier.id);
                                    return (
                                        <div key={tier.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300">
                                            <div className={`w-16 h-16 rounded-full bg-linear-to-r ${tierConfig.gradient} mx-auto mb-4 flex items-center justify-center`}>
                                                {getIcon(tierConfig.icon, "w-8 h-8 text-white")}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{tierConfig.label}</h3>
                                            <p className="text-sm text-gray-500 mb-4">{tier.description}</p>
                                            <ul className="text-left space-y-2">
                                                {tier.benefits?.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                        <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Become Partner CTA */}
                        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
                            <h3 className="text-2xl font-bold mb-4">Ready to Grow with Us?</h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                Join our partner program today and unlock new opportunities for your business.
                            </p>
                            <Link href="/become-partner" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                                Apply Now
                                <HiArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </>
                )}

                {/* Benefits Tab */}
                {activeTab === 'benefits' && (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {programBenefits.map((benefit, idx) => (
                                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                    <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${benefit.gradient} mb-4 flex items-center justify-center`}>
                                        {getIcon(benefit.icon, "w-6 h-6 text-white")}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Partner Success Metrics */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 mb-12">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Partner Success Metrics</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {config?.successMetrics?.map((metric, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{metric.value}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Find a Partner Tab */}
                {activeTab === 'partners' && (
                    <>
                        {/* Partner Tabs */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            {partnerTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                        }`}
                                >
                                    {getIcon(tab.icon, "w-4 h-4")}
                                    {tab.label}
                                    {tab.id === 'favorites' && favoritePartners.length > 0 && (
                                        <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoritePartners.length}</span>
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
                                    placeholder="Search partners by name, expertise, or location..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex gap-2">
                                <select
                                    value={selectedProgram}
                                    onChange={(e) => setSelectedProgram(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Program Types</option>
                                    {programTypes.filter(p => p.id !== 'all').map(type => (
                                        <option key={type.id} value={type.id}>{type.label}</option>
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
                                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredPartners.length}</span> partners
                            </p>
                        </div>

                        {/* Partners Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {filteredPartners.map((partner) => {
                                const programConfig = getProgramConfig(partner.program);
                                const tierConfig = getTierConfig(partner.tier);
                                const regionConfig = getRegionConfig(partner.region);
                                const isFavorite = favoritePartners.includes(partner.id);

                                return (
                                    <div
                                        key={partner.id}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                        onClick={() => openPartnerModal(partner)}
                                    >
                                        <div className="p-5">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    {partner.logo ? (
                                                        <img src={partner.logo} alt={partner.name} className="h-10 w-auto object-contain" />
                                                    ) : (
                                                        <div className={`w-10 h-10 rounded-xl ${programConfig.color} flex items-center justify-center`}>
                                                            {getIcon(programConfig.icon, "w-5 h-5")}
                                                        </div>
                                                    )}
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 dark:text-white">{partner.name}</h3>
                                                        <div className="flex items-center gap-1 text-xs">
                                                            <span className={`px-2 py-0.5 rounded-full ${programConfig.color}`}>
                                                                {programConfig.label}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleFavoritePartner(partner.id); }}
                                                    className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                                >
                                                    <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                                                </button>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{partner.description}</p>

                                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                                <span>{regionConfig.flag}</span>
                                                <span>{regionConfig.label}</span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                                <span className={`px-2 py-0.5 rounded-full ${tierConfig.color}`}>{tierConfig.badge}</span>
                                            </div>

                                            {partner.expertise && partner.expertise.length > 0 && (
                                                <div className="flex flex-wrap gap-1 mb-3">
                                                    {partner.expertise.slice(0, 2).map((exp, idx) => (
                                                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{exp}</span>
                                                    ))}
                                                    {partner.expertise.length > 2 && (
                                                        <span className="text-xs text-gray-400">+{partner.expertise.length - 2}</span>
                                                    )}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <div className="flex items-center gap-2">
                                                    {partner.certified && (
                                                        <HiOutlineBadgeCheck className="w-4 h-4 text-green-500" />
                                                    )}
                                                    {partner.successStories && (
                                                        <span className="text-xs text-blue-600">{partner.successStories} success stories</span>
                                                    )}
                                                </div>
                                                <span className="text-blue-600 text-sm font-semibold hover:underline">Learn More →</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* No Results */}
                        {filteredPartners.length === 0 && (
                            <div className="text-center py-12">
                                <HiOutlineUserGroup className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No partners found</h3>
                                <button onClick={clearAllFilters} className="mt-4 text-blue-600 hover:underline">Clear all filters</button>
                            </div>
                        )}
                    </>
                )}

                {/* Resources Tab */}
                {activeTab === 'resources' && (
                    <>
                        {/* Partner Resources Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {partnerResources.map((resource, idx) => (
                                <Link key={idx} href={resource.link} className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {getIcon(resource.icon, "w-6 h-6 text-blue-600")}
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                                    <p className="text-sm text-gray-500">{resource.description}</p>
                                </Link>
                            ))}
                        </div>

                        {/* Upcoming Partner Events */}
                        {partnerEvents.length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Partner Events</h2>
                                <div className="space-y-4">
                                    {partnerEvents.map((event, idx) => (
                                        <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700">
                                            <div className="flex flex-wrap items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-sm font-semibold text-blue-600">{event.date}</span>
                                                        <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">{event.type}</span>
                                                    </div>
                                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{event.title}</h3>
                                                    <p className="text-sm text-gray-500">{event.description}</p>
                                                </div>
                                                <Link href={event.link} className="text-blue-600 text-sm font-semibold hover:underline">Register →</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Partner Portal CTA */}
                        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
                            <HiOutlineCloud className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Access Partner Portal</h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                Get exclusive access to training, marketing materials, and sales tools.
                            </p>
                            <Link href="/partner-portal" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                                Login to Portal
                                <HiArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </>
                )}

                {/* Partner Detail Modal */}
                {showPartnerModal && selectedPartner && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowPartnerModal(false)}>
                        <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className="relative h-48 overflow-hidden">
                                <img src={selectedPartner.image} alt={selectedPartner.name} className="w-full h-full object-cover" />
                                <button onClick={() => setShowPartnerModal(false)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
                                    <HiOutlineX className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    {selectedPartner.logo && <img src={selectedPartner.logo} alt={selectedPartner.name} className="h-12 w-auto" />}
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedPartner.name}</h2>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedPartner.description}</p>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Program Type</p>
                                        <p className="text-gray-900 dark:text-white">{getProgramConfig(selectedPartner.program).label}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Tier</p>
                                        <p className="text-gray-900 dark:text-white">{getTierConfig(selectedPartner.tier).label}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Region</p>
                                        <p className="text-gray-900 dark:text-white">{getRegionConfig(selectedPartner.region).label}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Certified</p>
                                        <p className="text-gray-900 dark:text-white">{selectedPartner.certified ? 'Yes' : 'No'}</p>
                                    </div>
                                </div>
                                {selectedPartner.expertise && (
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-500 mb-2">Expertise</p>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedPartner.expertise.map((exp, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{exp}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <Link href={selectedPartner.link} className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        View Partner Page
                                    </Link>
                                    <button
                                        onClick={() => handleFavoritePartner(selectedPartner.id)}
                                        className={`px-4 py-2 rounded-lg transition-colors ${favoritePartners.includes(selectedPartner.id) ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-600'}`}
                                    >
                                        <HiOutlineHeart className="w-5 h-5" />
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

export default PartnerProgramOverviewSection3;
