// page/frontend/Blog/ProductUpdatesSection/ProductUpdatesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineSparkles,
    HiOutlineChip,
    HiOutlineCloudUpload,
    HiOutlineShieldCheck,
    HiOutlineLightningBolt,
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
    HiOutlineDocumentText,
    HiOutlineCode,
    HiOutlineCog,
    HiOutlineRefresh,
    HiOutlineStar,
    HiOutlineFlag,
    HiOutlineGift
    HiOutlineTrendingUp,
} from 'react-icons/hi';

const ProductUpdatesSection1 = ({ config }) => {
    const [activeVersion, setActiveVersion] = useState(config?.versions?.[0]?.version || 'latest');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showAllUpdates, setShowAllUpdates] = useState(false);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        switch (iconName) {
            case 'rocket':
                return <HiOutlineTrendingUp className={className} />;
            case 'sparkles':
                return <HiOutlineSparkles className={className} />;
            case 'chip':
                return <HiOutlineChip className={className} />;
            case 'cloud':
                return <HiOutlineCloudUpload className={className} />;
            case 'shield':
                return <HiOutlineShieldCheck className={className} />;
            case 'bolt':
                return <HiOutlineLightningBolt className={className} />;
            case 'chart':
                return <HiOutlineChartBar className={className} />;
            case 'users':
                return <HiOutlineUsers className={className} />;
            case 'globe':
                return <HiOutlineGlobe className={className} />;
            case 'calendar':
                return <HiOutlineCalendar className={className} />;
            case 'tag':
                return <HiOutlineTag className={className} />;
            case 'check':
                return <HiOutlineCheckCircle className={className} />;
            case 'clock':
                return <HiOutlineClock className={className} />;
            case 'eye':
                return <HiOutlineEye className={className} />;
            case 'bell':
                return <HiOutlineBell className={className} />;
            case 'download':
                return <HiOutlineDownload className={className} />;
            case 'play':
                return <HiOutlinePlay className={className} />;
            case 'document':
                return <HiOutlineDocumentText className={className} />;
            case 'code':
                return <HiOutlineCode className={className} />;
            case 'cog':
                return <HiOutlineCog className={className} />;
            case 'refresh':
                return <HiOutlineRefresh className={className} />;
            case 'star':
                return <HiOutlineStar className={className} />;
            case 'flag':
                return <HiOutlineFlag className={className} />;
            case 'gift':
                return <HiOutlineGift className={className} />;
            default:
                return <HiOutlineSparkles className={className} />;
        }
    };

    // Format date helper
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    };

    // Get status badge color
    const getStatusColor = (status) => {
        switch (status) {
            case 'live':
                return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
            case 'beta':
                return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'coming-soon':
                return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
            case 'planned':
                return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
            default:
                return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
        }
    };

    // Filter updates based on selected category
    const getFilteredUpdates = () => {
        let updates = config?.updates || [];
        if (selectedCategory !== 'all') {
            updates = updates.filter(update => update.category === selectedCategory);
        }
        if (!showAllUpdates) {
            updates = updates.slice(0, config?.initialDisplayCount || 6);
        }
        return updates;
    };

    const filteredUpdates = getFilteredUpdates();
    const categories = ['all', 'new', 'improvement', 'fix', 'security'];

    // Get unique categories from updates
    const updateCategories = [...new Set(config?.updates?.map(u => u.category) || [])];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Product Updates Section"
            itemScope
            itemType="https://schema.org/Product"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div
                        className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-50 dark:bg-gray-800'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-100 dark:border-gray-700'}`}
                        aria-label="Section badge"
                    >
                        {config?.badge?.showPulse && (
                            <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                        )}
                        <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
                            {config?.badge?.text || "What's New"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                        itemProp="name"
                    >
                        {config?.title?.prefix}{' '}
                        <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                            {config?.title?.highlightedText || "Product Updates"}
                        </span>{' '}
                        {config?.title?.suffix}
                    </h2>

                    {/* Section Description */}
                    <p
                        className="text-xl text-gray-600 dark:text-gray-400"
                        itemProp="description"
                    >
                        {config?.description || "Stay up to date with our latest features, improvements, and product enhancements. We're constantly working to make your experience better."}
                    </p>
                </div>

                {/* Version Selector */}
                {config?.showVersionSelector && (
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {config?.versions?.map((version) => (
                            <button
                                key={version.version}
                                onClick={() => setActiveVersion(version.version)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeVersion === version.version
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                aria-label={`Show version ${version.version} updates`}
                                aria-pressed={activeVersion === version.version}
                            >
                                {version.label || version.version}
                                {version.isLatest && (
                                    <span className="ml-2 px-1.5 py-0.5 bg-white/20 rounded-full text-xs">
                                        Latest
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                )}

                {/* Feature Highlights - Hero Cards */}
                {config?.featureHighlights && (
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {config.featureHighlights.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                            >
                                <div className={`w-12 h-12 rounded-xl ${feature.bgColor || 'bg-blue-100 dark:bg-blue-900/30'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {getIcon(feature.icon, "w-6 h-6 text-blue-600 dark:text-blue-400")}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{feature.description}</p>
                                <div className="flex items-center gap-2">
                                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(feature.status)}`}>
                                        {feature.status === 'live' ? 'Now Live' : feature.status === 'beta' ? 'Beta' : 'Coming Soon'}
                                    </span>
                                    {feature.link && (
                                        <Link href={feature.link} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                            Learn more →
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Release Badge */}
                {config?.latestRelease && (
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 rounded-full px-4 py-2 border border-blue-100 dark:border-blue-800">
                            <HiOutlineCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Latest Release: {config.latestRelease.version} • {formatDate(config.latestRelease.date)}
                            </span>
                            <Link href={config.latestRelease.link} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline ml-2">
                                View release notes
                            </Link>
                        </div>
                    </div>
                )}

                {/* Category Filters */}
                {config?.showCategories && updateCategories.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${selectedCategory === cat
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                aria-label={`Show ${cat} updates`}
                            >
                                {cat === 'all' ? 'All Updates' : cat}
                            </button>
                        ))}
                    </div>
                )}

                {/* Timeline Updates */}
                <div className="relative mb-12">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

                    <div className="space-y-8">
                        {filteredUpdates.map((update, index) => (
                            <div
                                key={update.id}
                                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

                                {/* Date Badge (Mobile) */}
                                <div className="md:hidden flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                        <HiOutlineCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        {formatDate(update.date)}
                                    </span>
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                        {/* Date Badge (Desktop) */}
                                        <div className="hidden md:flex items-center gap-2 mb-3">
                                            <HiOutlineCalendar className="w-4 h-4 text-gray-400" />
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {formatDate(update.date)}
                                            </span>
                                        </div>

                                        {/* Title and Status */}
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {update.title}
                                            </h3>
                                            <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(update.status)}`}>
                                                {update.status === 'live' ? 'Now Live' : update.status === 'beta' ? 'Beta' : update.status === 'coming-soon' ? 'Coming Soon' : 'Planned'}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {update.description}
                                        </p>

                                        {/* Feature List */}
                                        {update.features && update.features.length > 0 && (
                                            <ul className="space-y-2 mb-4">
                                                {update.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-0.5 shrink-0" />
                                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Tags */}
                                        {update.tags && update.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {update.tags.map((tag, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Action Links */}
                                        <div className="flex flex-wrap items-center gap-4 pt-2">
                                            {update.link && (
                                                <Link
                                                    href={update.link}
                                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-2 transition-all duration-300 group"
                                                >
                                                    Learn more
                                                    <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4" />
                                                </Link>
                                            )}
                                            {update.demoLink && (
                                                <Link
                                                    href={update.demoLink}
                                                    className="inline-flex items-center text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    <HiOutlinePlay className="w-4 h-4 mr-1" />
                                                    Watch demo
                                                </Link>
                                            )}
                                            {update.docsLink && (
                                                <Link
                                                    href={update.docsLink}
                                                    className="inline-flex items-center text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    <HiOutlineDocumentText className="w-4 h-4 mr-1" />
                                                    Documentation
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty spacer for alignment */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                {config?.showViewMore && filteredUpdates.length < (config?.updates?.length || 0) && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setShowAllUpdates(true)}
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        >
                            View All Updates
                            <HiArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Roadmap Preview */}
                {config?.showRoadmap && config?.roadmap && (
                    <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <HiOutlineFlag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Product Roadmap</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {config.roadmap.description || "See what's coming next in our product journey"}
                                </p>
                            </div>
                            <Link
                                href={config.roadmap.link || "/roadmap"}
                                className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
                            >
                                View full roadmap →
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4">
                            {config.roadmap.quarters?.map((quarter, idx) => (
                                <div key={idx} className="relative">
                                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                                        {quarter.name}
                                    </div>
                                    <div className="space-y-3">
                                        {quarter.items?.map((item, itemIdx) => (
                                            <div key={itemIdx} className="flex items-start gap-2">
                                                <div className={`w-2 h-2 rounded-full mt-1.5 ${item.status === 'in-progress' ? 'bg-yellow-500' : item.status === 'completed' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.status}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Newsletter/Notification Subscription */}
                {config?.showNotification && (
                    <div className="mt-12 text-center">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                            <div className="flex items-center gap-2">
                                <HiOutlineBell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                <span className="text-gray-700 dark:text-gray-300 font-medium">
                                    {config?.notificationText || "Get updates delivered to your inbox"}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Email for product updates"
                                />
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
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

export default ProductUpdatesSection1;


