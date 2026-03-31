// page/frontend/Partners/SolutionPartnersSection/SolutionPartnersSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineBriefcase,
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
    HiOutlineLocationMarker,
    HiOutlineCreditCard,
    HiOutlineChartPie,
    HiOutlineTemplate,
    HiOutlineBadgeCheck,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice } from 'react-icons/hi2';


const SolutionPartnersSection1 = ({ config }) => {
    const [selectedIndustry, setSelectedIndustry] = useState('all');
    const [selectedSolution, setSelectedSolution] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedPartner, setExpandedPartner] = useState(null);
    const [savedPartners, setSavedPartners] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            briefcase: <HiOutlineBriefcase className={className} />,
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
            location: <HiOutlineLocationMarker className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            template: <HiOutlineTemplate className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            phone: <HiOutlinePhone className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />
        };
        return icons[iconName] || <HiOutlineBriefcase className={className} />;
    };

    // Get industry configuration
    const getIndustryConfig = (industry) => {
        const configs = {
            'retail': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'building', label: 'Retail' },
            'manufacturing': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cog', label: 'Manufacturing' },
            'healthcare': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'shield', label: 'Healthcare' },
            'logistics': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'globe', label: 'Logistics' },
            'automotive': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'bolt', label: 'Automotive' },
            'consumer-goods': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'gift', label: 'Consumer Goods' }
        };
        return configs[industry] || configs.retail;
    };

    // Get solution configuration
    const getSolutionConfig = (solution) => {
        const configs = {
            'inventory': { color: 'bg-blue-100 text-blue-700', icon: 'database', label: 'Inventory Optimization' },
            'warehouse': { color: 'bg-purple-100 text-purple-700', icon: 'building', label: 'Warehouse Management' },
            'transportation': { color: 'bg-green-100 text-green-700', icon: 'globe', label: 'Transportation Management' },
            'analytics': { color: 'bg-orange-100 text-orange-700', icon: 'chart', label: 'Supply Chain Analytics' },
            'procurement': { color: 'bg-red-100 text-red-700', icon: 'credit', label: 'Procurement Solutions' },
            'planning': { color: 'bg-indigo-100 text-indigo-700', icon: 'calendar', label: 'Supply Chain Planning' }
        };
        return configs[solution] || { color: 'bg-gray-100 text-gray-700', label: solution };
    };

    // Handle save partner
    const handleSavePartner = (partnerId) => {
        if (savedPartners.includes(partnerId)) {
            setSavedPartners(savedPartners.filter(id => id !== partnerId));
        } else {
            setSavedPartners([...savedPartners, partnerId]);
        }
    };

    // Filter partners
    const getFilteredPartners = () => {
        let partners = config?.partners || [];

        if (searchQuery) {
            partners = partners.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedIndustry !== 'all') {
            partners = partners.filter(p => p.industry === selectedIndustry);
        }

        if (selectedSolution !== 'all') {
            partners = partners.filter(p => p.solutionAreas?.includes(selectedSolution));
        }

        if (selectedRegion !== 'all') {
            partners = partners.filter(p => p.region === selectedRegion);
        }

        return partners;
    };

    const filteredPartners = getFilteredPartners();
    const industries = config?.industries || [
        { id: 'all', label: 'All Industries', icon: 'globe' },
        { id: 'retail', label: 'Retail', icon: 'building' },
        { id: 'manufacturing', label: 'Manufacturing', icon: 'cog' },
        { id: 'healthcare', label: 'Healthcare', icon: 'shield' },
        { id: 'logistics', label: 'Logistics', icon: 'globe' },
        { id: 'automotive', label: 'Automotive', icon: 'bolt' }
    ];

    const solutionAreas = [
        { id: 'all', label: 'All Solutions' },
        { id: 'inventory', label: 'Inventory Optimization' },
        { id: 'warehouse', label: 'Warehouse Management' },
        { id: 'transportation', label: 'Transportation Management' },
        { id: 'analytics', label: 'Supply Chain Analytics' },
        { id: 'procurement', label: 'Procurement Solutions' },
        { id: 'planning', label: 'Supply Chain Planning' }
    ];

    const regions = config?.regions || [
        { id: 'all', label: 'All Regions' },
        { id: 'north-america', label: 'North America' },
        { id: 'europe', label: 'Europe' },
        { id: 'asia-pacific', label: 'Asia Pacific' },
        { id: 'latin-america', label: 'Latin America' }
    ];

    // Featured partner
    const featuredPartner = config?.featuredPartner || filteredPartners[0];

    // Stats
    const stats = config?.stats || [
        { value: "100+", label: "Solution Partners", icon: "briefcase" },
        { value: "50+", label: "Industries Served", icon: "globe" },
        { value: "500+", label: "Successful Deployments", icon: "trophy" },
        { value: "95%", label: "Customer Satisfaction", icon: "star" }
    ];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Solution Partners Section"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center bg-green-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-green-100 dark:border-gray-700">
                        <HiOutlineBriefcase className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
                        <span className="text-sm font-medium text-green-700 dark:text-green-300">
                            {config?.badge || "Solution Partners"}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Expert"} <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Solution Partners"}</span> {config?.title?.suffix || ""}
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Partner with industry-leading solution providers who deliver end-to-end supply chain transformations. Our solution partners bring deep expertise and proven methodologies."}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                {getIcon(stat.icon, "w-5 h-5 text-green-600")}
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
                        placeholder={config?.searchPlaceholder || "Search partners by name, industry, or solution area..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search solution partners"
                    />
                </div>

                {/* Industry Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {industries.map((industry) => (
                        <button
                            key={industry.id}
                            onClick={() => setSelectedIndustry(industry.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedIndustry === industry.id
                                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {getIcon(industry.icon, "w-4 h-4")}
                            {industry.label}
                        </button>
                    ))}
                </div>

                {/* Solution Area and Region Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
                        <HiOutlineCog className="w-4 h-4 text-gray-500" />
                        <select
                            value={selectedSolution}
                            onChange={(e) => setSelectedSolution(e.target.value)}
                            className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
                            aria-label="Filter by solution area"
                        >
                            {solutionAreas.map(area => (
                                <option key={area.id} value={area.id}>{area.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
                        <HiOutlineGlobe className="w-4 h-4 text-gray-500" />
                        <select
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                            className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
                            aria-label="Filter by region"
                        >
                            {regions.map(region => (
                                <option key={region.id} value={region.id}>{region.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Featured Partner */}
                {featuredPartner && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl" aria-hidden="true" />

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                                                Featured Solution Partner
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getIndustryConfig(featuredPartner.industry).color}`}>
                                                    {getIndustryConfig(featuredPartner.industry).label}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 mb-4">
                                            {featuredPartner.logo && (
                                                <img src={featuredPartner.logo} alt={featuredPartner.name} className="h-12 w-auto object-contain" />
                                            )}
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                                {featuredPartner.name}
                                            </h3>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredPartner.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {featuredPartner.solutionAreas?.map((area, idx) => (
                                                <span key={idx} className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                                                    {getSolutionConfig(area).label}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={featuredPartner.link}
                                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                Learn More
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleSavePartner(featuredPartner.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedPartners.includes(featuredPartner.id)
                                                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-green-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedPartners.includes(featuredPartner.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-green-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                                        <img
                                            src={featuredPartner.image}
                                            alt={featuredPartner.name}
                                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredPartners.map((partner) => {
                        const industryConfig = getIndustryConfig(partner.industry);
                        const isExpanded = expandedPartner === partner.id;
                        const isSaved = savedPartners.includes(partner.id);

                        return (
                            <div
                                key={partner.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            {partner.logo ? (
                                                <img src={partner.logo} alt={partner.name} className="h-10 w-auto object-contain" />
                                            ) : (
                                                <div className={`w-10 h-10 rounded-xl ${industryConfig.color} flex items-center justify-center`}>
                                                    {getIcon(industryConfig.icon, "w-5 h-5")}
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                    {partner.name}
                                                </h3>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${industryConfig.color}`}>
                                                    {industryConfig.label}
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleSavePartner(partner.id)}
                                            className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                        >
                                            <HiOutlineBookmark className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {partner.description}
                                    </p>

                                    {/* Solution Areas */}
                                    {partner.solutionAreas && partner.solutionAreas.length > 0 && (
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {partner.solutionAreas.slice(0, 3).map((area, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                        {getSolutionConfig(area).label}
                                                    </span>
                                                ))}
                                                {partner.solutionAreas.length > 3 && (
                                                    <button
                                                        onClick={() => setExpandedPartner(isExpanded ? null : partner.id)}
                                                        className="text-xs text-green-600 hover:underline"
                                                    >
                                                        +{partner.solutionAreas.length - 3} more
                                                    </button>
                                                )}
                                            </div>

                                            {isExpanded && partner.solutionAreas.length > 3 && (
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {partner.solutionAreas.slice(3).map((area, idx) => (
                                                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                            {getSolutionConfig(area).label}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Location */}
                                    {partner.location && (
                                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                            <HiOutlineLocationMarker className="w-4 h-4" />
                                            <span>{partner.location}</span>
                                            {partner.region && <span className="text-xs">({partner.region})</span>}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {partner.tags && partner.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {partner.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Success Metrics */}
                                    {partner.successMetrics && (
                                        <div className="grid grid-cols-3 gap-2 mb-4 p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                            {partner.successMetrics.map((metric, idx) => (
                                                <div key={idx} className="text-center">
                                                    <div className="text-sm font-bold text-green-600 dark:text-green-400">{metric.value}</div>
                                                    <div className="text-xs text-gray-500">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <Link
                                            href={partner.link}
                                            className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            Learn More
                                            <HiArrowRight className="w-4 h-4" />
                                        </Link>
                                        {partner.contactEmail && (
                                            <a
                                                href={`mailto:${partner.contactEmail}`}
                                                className="text-gray-400 hover:text-green-600 transition-colors"
                                                aria-label="Contact partner"
                                            >
                                                <HiOutlineMail className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredPartners.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineBriefcase className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No solution partners found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedIndustry('all');
                                setSelectedSolution('all');
                                setSelectedRegion('all');
                            }}
                            className="mt-4 text-green-600 dark:text-green-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Become a Solution Partner CTA */}
                <div className="mt-12 bg-linear-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 rounded-3xl p-8 md:p-12 text-white text-center">
                    <HiOutlineBriefcase className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {config?.ctaTitle || "Become a Solution Partner"}
                    </h3>
                    <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                        {config?.ctaDescription || "Join our network of solution partners delivering transformative supply chain solutions. Leverage our platform to drive customer success."}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/become-solution-partner"
                            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Apply Now
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/partner-program"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            Learn About Program
                            <HiOutlineExternalLink className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-green-600 dark:text-green-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Solution Partner Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive updates on new solution partners, success stories, and industry insights."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                aria-label="Email for solution partner updates"
                            />
                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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

export default SolutionPartnersSection1;