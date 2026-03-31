// page/frontend/Partners/PartnerResourcesSection/PartnerResourcesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineDocumentText,
    HiOutlineVideoCamera,
    HiOutlineAcademicCap,
    HiOutlineTemplate,
    HiOutlineChartBar,
    HiOutlineUsers,
    HiOutlineGlobe,
    HiOutlineCalendar,
    HiOutlineTag,
    HiArrowRight,
    HiOutlineCheckCircle,
    HiOutlineClock,
    HiOutlineEye,
    HiOutlineBell,
    HiOutlineDownload,
    HiOutlinePlay,
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
    HiOutlineMicrophone,
    HiOutlineNewspaper,
    HiOutlineBriefcase,
    HiOutlineLocationMarker,
    HiOutlineCreditCard,
    HiOutlineChartPie,
    HiOutlineTemplate as HiOutlineTemplateIcon,
    HiOutlineBadgeCheck,
    HiOutlinePhone,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineHeart,
    HiOutlineCloudUpload
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';


const PartnerResourcesSection1 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedResource, setExpandedResource] = useState(null);
    const [savedResources, setSavedResources] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            document: <HiOutlineDocumentText className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            template: <HiOutlineTemplate className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            users: <HiOutlineUsers className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            tag: <HiOutlineTag className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            clock: <HiOutlineClock className={className} />,
            eye: <HiOutlineEye className={className} />,
            bell: <HiOutlineBell className={className} />,
            download: <HiOutlineDownload className={className} />,
            play: <HiOutlinePlay className={className} />,
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
            microphone: <HiOutlineMicrophone className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            briefcase: <HiOutlineBriefcase className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            templateIcon: <HiOutlineTemplateIcon className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            phone: <HiOutlinePhone className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            heart: <HiOutlineHeart className={className} />
        };
        return icons[iconName] || <HiOutlineDocumentText className={className} />;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'training': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'academic', label: 'Training & Certification' },
            'marketing': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'chart', label: 'Marketing & Sales' },
            'technical': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'code', label: 'Technical Resources' },
            'sales': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'briefcase', label: 'Sales Enablement' },
            'collateral': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'document', label: 'Sales Collateral' },
            'events': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'calendar', label: 'Events & Webinars' }
        };
        return configs[category] || configs.training;
    };

    // Get resource type configuration
    const getTypeConfig = (type) => {
        const configs = {
            'guide': { color: 'bg-blue-100 text-blue-700', icon: 'document', label: 'Guide' },
            'video': { color: 'bg-purple-100 text-purple-700', icon: 'play', label: 'Video' },
            'template': { color: 'bg-green-100 text-green-700', icon: 'template', label: 'Template' },
            'webinar': { color: 'bg-orange-100 text-orange-700', icon: 'video', label: 'Webinar' },
            'case-study': { color: 'bg-red-100 text-red-700', icon: 'newspaper', label: 'Case Study' },
            'whitepaper': { color: 'bg-indigo-100 text-indigo-700', icon: 'document', label: 'Whitepaper' }
        };
        return configs[type] || { color: 'bg-gray-100 text-gray-700', icon: 'document', label: type };
    };

    // Handle save resource
    const handleSaveResource = (resourceId) => {
        if (savedResources.includes(resourceId)) {
            setSavedResources(savedResources.filter(id => id !== resourceId));
        } else {
            setSavedResources([...savedResources, resourceId]);
        }
    };

    // Toggle expanded resource
    const toggleExpanded = (resourceId) => {
        setExpandedResource(expandedResource === resourceId ? null : resourceId);
    };

    // Filter resources
    const getFilteredResources = () => {
        let resources = config?.resources || [];

        if (searchQuery) {
            resources = resources.filter(r =>
                r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            resources = resources.filter(r => r.category === selectedCategory);
        }

        if (selectedType !== 'all') {
            resources = resources.filter(r => r.type === selectedType);
        }

        return resources;
    };

    const filteredResources = getFilteredResources();
    const categories = config?.categories || [
        { id: 'all', label: 'All Resources', icon: 'document' },
        { id: 'training', label: 'Training & Certification', icon: 'academic' },
        { id: 'marketing', label: 'Marketing & Sales', icon: 'chart' },
        { id: 'technical', label: 'Technical Resources', icon: 'code' },
        { id: 'sales', label: 'Sales Enablement', icon: 'briefcase' },
        { id: 'collateral', label: 'Sales Collateral', icon: 'document' }
    ];

    const resourceTypes = [
        { id: 'all', label: 'All Types' },
        { id: 'guide', label: 'Guides' },
        { id: 'video', label: 'Videos' },
        { id: 'template', label: 'Templates' },
        { id: 'webinar', label: 'Webinars' },
        { id: 'case-study', label: 'Case Studies' },
        { id: 'whitepaper', label: 'Whitepapers' }
    ];

    // Featured resource
    const featuredResource = config?.featuredResource || filteredResources[0];

    // Stats
    const stats = config?.stats || [
        { value: "100+", label: "Training Modules", icon: "academic" },
        { value: "50+", label: "Sales Tools", icon: "briefcase" },
        { value: "25+", label: "Case Studies", icon: "newspaper" },
        { value: "1000+", label: "Active Partners", icon: "users" }
    ];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Partner Resources Section"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineDocumentText className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Partner Resources"}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Tools &"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Resources"}</span> {config?.title?.suffix || "for Partners"}
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Access a comprehensive library of training materials, sales tools, technical documentation, and marketing resources to help you succeed."}
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
                        placeholder={config?.searchPlaceholder || "Search resources by title, category, or topic..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search resources"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Resource Type Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {resourceTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedType === type.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>

                {/* Featured Resource */}
                {featuredResource && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                                Featured Resource
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(featuredResource.category).color}`}>
                                                    {getCategoryConfig(featuredResource.category).label}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeConfig(featuredResource.type).color}`}>
                                                {getTypeConfig(featuredResource.type).label}
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>{featuredResource.readTime || '15 min read'}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {featuredResource.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredResource.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            <a
                                                href={featuredResource.link}
                                                download={featuredResource.downloadable}
                                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                {featuredResource.downloadable ? (
                                                    <>
                                                        <HiOutlineDownload className="w-4 h-4" />
                                                        Download Resource
                                                    </>
                                                ) : (
                                                    <>
                                                        Access Resource
                                                        <HiArrowRight className="w-4 h-4" />
                                                    </>
                                                )}
                                            </a>
                                            <button
                                                onClick={() => handleSaveResource(featuredResource.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedResources.includes(featuredResource.id)
                                                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedResources.includes(featuredResource.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                                        <img
                                            src={featuredResource.image}
                                            alt={featuredResource.title}
                                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                                            loading="lazy"
                                        />
                                        {featuredResource.type === 'video' && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                                                    <HiOutlinePlay className="w-8 h-8 text-blue-600 ml-1" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredResources.map((resource) => {
                        const categoryConfig = getCategoryConfig(resource.category);
                        const typeConfig = getTypeConfig(resource.type);
                        const isExpanded = expandedResource === resource.id;
                        const isSaved = savedResources.includes(resource.id);

                        return (
                            <div
                                key={resource.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                            {categoryConfig.label}
                                        </span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${typeConfig.color}`}>
                                            {typeConfig.label}
                                        </span>
                                    </div>
                                    {resource.downloadable && (
                                        <div className="absolute top-3 right-3">
                                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                                                Downloadable
                                            </span>
                                        </div>
                                    )}
                                    {resource.type === 'video' && (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                                <HiOutlinePlay className="w-6 h-6 text-blue-600 ml-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <div className="flex items-center gap-1">
                                            <HiOutlineClock className="w-4 h-4" />
                                            <span>{resource.readTime || '5 min read'}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineEye className="w-4 h-4" />
                                            <span>{resource.views || '1.2k'} views</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        <a href={resource.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {resource.title}
                                        </a>
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {resource.description}
                                    </p>

                                    {/* Expandable Content */}
                                    {resource.content && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => toggleExpanded(resource.id)}
                                                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Show less' : 'Preview content'}
                                                <HiArrowRight className="w-4 h-4" />
                                            </button>

                                            {isExpanded && (
                                                <div className="mt-3">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {resource.content}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {resource.tags && resource.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {resource.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <button
                                            onClick={() => handleSaveResource(resource.id)}
                                            className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                        >
                                            <HiOutlineBookmark className="w-4 h-4" />
                                        </button>
                                        <a
                                            href={resource.link}
                                            download={resource.downloadable}
                                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            {resource.downloadable ? 'Download' : 'Access'}
                                            {resource.downloadable ? <HiOutlineDownload className="w-4 h-4" /> : <HiArrowRight className="w-4 h-4" />}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredResources.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineDocumentText className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No resources found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setSelectedType('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Partner Portal CTA */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
                    <HiOutlineCloudUpload className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {config?.portalTitle || "Access Partner Portal"}
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        {config?.portalDescription || "Get exclusive access to all partner resources, training materials, and sales tools. Login to your partner account to unlock premium content."}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/partner-portal"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Login to Partner Portal
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/become-partner"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            Become a Partner
                            <HiOutlineExternalLink className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Get Resource Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive notifications about new resources, training opportunities, and partner updates."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email for resource updates"
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

export default PartnerResourcesSection1;