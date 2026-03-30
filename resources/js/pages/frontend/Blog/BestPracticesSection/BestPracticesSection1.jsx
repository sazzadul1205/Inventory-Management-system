// page/frontend/Blog/BestPracticesSection/BestPracticesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineLightBulb,
    HiOutlineChartBar,
    HiOutlineTruck,
    HiOutlineCube,
    HiOutlineShieldCheck,
    HiOutlineClock,
    HiOutlineUsers,
    HiOutlineGlobe,
    HiOutlineTrendingUp,
    HiOutlineCheckCircle,
    HiOutlineXCircle,
    HiOutlineArrowRight,
    HiOutlineStar,
    HiOutlineEye,
    HiOutlineCalendar,
    HiOutlineTag,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineDownload,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineSparkles,
    HiOutlineRocket,
    HiOutlineFire,
    HiOutlineAcademicCap,
    HiOutlineDocumentText,
    HiOutlinePresentationChartLine,
    HiOutlineClipboardList,
    HiOutlineScale,
    HiOutlineCurrencyDollar,
    HiOutlineRefresh,
    HiOutlineCog
} from 'react-icons/hi';

const BestPracticesSection1 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedPractice, setExpandedPractice] = useState(null);
    const [savedPractices, setSavedPractices] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            lightbulb: <HiOutlineLightBulb className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            truck: <HiOutlineTruck className={className} />,
            cube: <HiOutlineCube className={className} />,
            shield: <HiOutlineShieldCheck className={className} />,
            clock: <HiOutlineClock className={className} />,
            users: <HiOutlineUsers className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            xcircle: <HiOutlineXCircle className={className} />,
            star: <HiOutlineStar className={className} />,
            eye: <HiOutlineEye className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            tag: <HiOutlineTag className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            download: <HiOutlineDownload className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            rocket: <HiOutlineRocket className={className} />,
            fire: <HiOutlineFire className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            presentation: <HiOutlinePresentationChartLine className={className} />,
            clipboard: <HiOutlineClipboardList className={className} />,
            scale: <HiOutlineScale className={className} />,
            dollar: <HiOutlineCurrencyDollar className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            cog: <HiOutlineCog className={className} />
        };
        return icons[iconName] || <HiOutlineLightBulb className={className} />;
    };

    // Format date helper
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
        return `${Math.floor(diffDays / 365)} years ago`;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'inventory': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'cube', label: 'Inventory Management' },
            'warehouse': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cube', label: 'Warehouse Operations' },
            'transportation': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'truck', label: 'Transportation' },
            'fulfillment': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'check', label: 'Order Fulfillment' },
            'sustainability': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Sustainability' },
            'technology': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Technology & Automation' },
            'risk': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Risk Management' },
            'people': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'People & Culture' }
        };
        return configs[category] || configs.inventory;
    };

    // Handle save practice
    const handleSavePractice = (practiceId) => {
        if (savedPractices.includes(practiceId)) {
            setSavedPractices(savedPractices.filter(id => id !== practiceId));
        } else {
            setSavedPractices([...savedPractices, practiceId]);
        }
    };

    // Toggle expanded practice
    const toggleExpanded = (practiceId) => {
        setExpandedPractice(expandedPractice === practiceId ? null : practiceId);
    };

    // Filter practices
    const getFilteredPractices = () => {
        let practices = config?.practices || [];

        if (searchQuery) {
            practices = practices.filter(p =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
                p.benefits?.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            practices = practices.filter(p => p.category === selectedCategory);
        }

        return practices;
    };

    const filteredPractices = getFilteredPractices();
    const categories = config?.categories || [
        { id: 'all', label: 'All Practices', icon: 'sparkles' },
        { id: 'inventory', label: 'Inventory', icon: 'cube' },
        { id: 'warehouse', label: 'Warehouse', icon: 'cube' },
        { id: 'transportation', label: 'Transportation', icon: 'truck' },
        { id: 'fulfillment', label: 'Fulfillment', icon: 'check' },
        { id: 'technology', label: 'Technology', icon: 'cog' }
    ];

    // Featured practice
    const featuredPractice = config?.featuredPractice || filteredPractices[0];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Best Practices Section"
            itemScope
            itemType="https://schema.org/Article"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
            <div className="absolute top-40 left-0 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div className="inline-flex items-center bg-green-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-green-100 dark:border-gray-700">
                        <HiOutlineLightBulb className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
                        <span className="text-sm font-medium text-green-700 dark:text-green-300">
                            {config?.badge || "Industry Best Practices"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Proven"} <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Best Practices"}</span> {config?.title?.suffix || "for Supply Chain Excellence"}
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Discover proven strategies and expert-recommended approaches to optimize your supply chain operations, reduce costs, and improve efficiency."}
                    </p>
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
                        placeholder={config?.searchPlaceholder || "Search best practices by topic, benefit, or keyword..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search best practices"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            aria-label={`Show ${category.label} practices`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Featured Practice */}
                {featuredPractice && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl" aria-hidden="true"></div>

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    {/* Featured Content */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                                                Featured Best Practice
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>{featuredPractice.readTime || '10 min read'}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {featuredPractice.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredPractice.description}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={featuredPractice.author?.avatar}
                                                    alt={featuredPractice.author?.name}
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {featuredPractice.author?.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineCalendar className="w-4 h-4" />
                                                <span>{formatDate(featuredPractice.date)}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineEye className="w-4 h-4" />
                                                <span>{featuredPractice.views || '2.5k'} views</span>
                                            </div>
                                        </div>

                                        {/* Impact Stats */}
                                        {featuredPractice.impact && (
                                            <div className="grid grid-cols-3 gap-4 mb-6">
                                                {featuredPractice.impact.map((stat, idx) => (
                                                    <div key={idx} className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl">
                                                        <div className="text-xl font-bold text-green-600 dark:text-green-400">{stat.value}</div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={featuredPractice.link}
                                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                Read Full Practice
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleSavePractice(featuredPractice.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedPractices.includes(featuredPractice.id)
                                                        ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-green-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedPractices.includes(featuredPractice.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Featured Image */}
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-green-600/20 rounded-2xl blur-2xl" aria-hidden="true"></div>
                                        <img
                                            src={featuredPractice.image}
                                            alt={featuredPractice.title}
                                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Practices Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredPractices.map((practice) => {
                        const categoryConfig = getCategoryConfig(practice.category);
                        const isExpanded = expandedPractice === practice.id;
                        const isSaved = savedPractices.includes(practice.id);

                        return (
                            <div
                                key={practice.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                {/* Practice Header */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className={`p-2 rounded-xl ${categoryConfig.color.replace('text', 'bg').replace('dark:text', 'dark:bg')} bg-opacity-20`}>
                                            {getIcon(categoryConfig.icon, "w-6 h-6")}
                                        </div>
                                        <button
                                            onClick={() => handleSavePractice(practice.id)}
                                            className="text-gray-400 hover:text-yellow-500 transition-colors"
                                            aria-label="Save practice"
                                        >
                                            <HiOutlineBookmark className={`w-5 h-5 ${isSaved ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                                        </button>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {practice.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {practice.description}
                                    </p>

                                    {/* Key Benefits Preview */}
                                    {practice.benefits && practice.benefits.length > 0 && (
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {practice.benefits.slice(0, 2).map((benefit, idx) => (
                                                    <span key={idx} className="text-xs bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                                                        {benefit}
                                                    </span>
                                                ))}
                                                {practice.benefits.length > 2 && (
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                                        +{practice.benefits.length - 2} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Expandable Content */}
                                    {practice.details && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => toggleExpanded(practice.id)}
                                                className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 font-medium hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Show less' : 'Read key insights'}
                                                <HiOutlineArrowRight className="w-4 h-4" />
                                            </button>

                                            {isExpanded && (
                                                <div className="mt-3 space-y-3">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {practice.details}
                                                    </p>
                                                    {practice.implementation && (
                                                        <div className="p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Implementation Steps:</p>
                                                            <ul className="space-y-1">
                                                                {practice.implementation.slice(0, 3).map((step, idx) => (
                                                                    <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                                                                        <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                                        <span>{step}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {practice.tags && practice.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {practice.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={practice.author?.avatar}
                                                alt={practice.author?.name}
                                                className="w-6 h-6 rounded-full object-cover"
                                            />
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {practice.author?.name}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            {practice.impactValue && (
                                                <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                                                    {practice.impactValue}
                                                </span>
                                            )}
                                            <Link
                                                href={practice.link}
                                                className="text-green-600 dark:text-green-400 font-semibold text-sm hover:underline"
                                            >
                                                Learn More →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredPractices.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineLightBulb className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No practices found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="mt-4 text-green-600 dark:text-green-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Downloadable Resources Banner */}
                {config?.showResources && (
                    <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                                    <HiOutlineDownload className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Download Best Practices Toolkit</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Get templates, checklists, and implementation guides</p>
                                </div>
                            </div>
                            <Link
                                href={config?.resourcesLink || "/resources/best-practices"}
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                Download Free Toolkit
                                <HiOutlineDownload className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                )}

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-linear-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 rounded-3xl p-8 md:p-12 text-white text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            {config?.newsletter?.title || "Get Weekly Best Practices"}
                        </h3>
                        <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive curated best practices, expert insights, and implementation guides delivered to your inbox."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Email for best practices newsletter"
                            />
                            <button
                                type="submit"
                                className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-green-100 mt-4">
                            {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. Get 1-2 emails per week."}
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

export default BestPracticesSection1;