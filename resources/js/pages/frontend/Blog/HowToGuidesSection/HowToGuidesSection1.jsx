// page/frontend/Blog/HowToGuidesSection/HowToGuidesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineAcademicCap,
    HiOutlineBookOpen,
    HiOutlineClock,
    HiOutlinePlay,
    HiArrowRight,
    HiOutlineStar,
    HiOutlineSearch,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineBookmark,
    HiOutlineEye,
    HiOutlineCalendar,
    HiOutlineTemplate,
    HiOutlineVideoCamera,
} from 'react-icons/hi';

const HowToGuidesSection1 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedGuide, setExpandedGuide] = useState(null);
    const [savedGuides, setSavedGuides] = useState([]);

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

    // Get difficulty badge configuration
    const getDifficultyConfig = (level) => {
        const configs = {
            beginner: { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', label: 'Beginner', icon: 'star' },
            intermediate: { color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', label: 'Intermediate', icon: 'star' },
            advanced: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', label: 'Advanced', icon: 'rocket' }
        };
        return configs[level] || configs.beginner;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'getting-started': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'rocket', label: 'Getting Started' },
            'warehouse': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cog', label: 'Warehouse' },
            'fulfillment': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'check', label: 'Fulfillment' },
            'analytics': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'chart', label: 'Analytics' },
            'api': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'code', label: 'API & Integration' },
            'security': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Security' }
        };
        return configs[category] || configs['getting-started'];
    };

    // Handle save guide
    const handleSaveGuide = (guideId) => {
        if (savedGuides.includes(guideId)) {
            setSavedGuides(savedGuides.filter(id => id !== guideId));
        } else {
            setSavedGuides([...savedGuides, guideId]);
        }
    };

    // Toggle expanded guide
    const toggleExpanded = (guideId) => {
        setExpandedGuide(expandedGuide === guideId ? null : guideId);
    };

    // Filter guides
    const getFilteredGuides = () => {
        let guides = config?.guides || [];

        if (searchQuery) {
            guides = guides.filter(g =>
                g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                g.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                g.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            guides = guides.filter(g => g.category === selectedCategory);
        }

        return guides;
    };

    const filteredGuides = getFilteredGuides();
    const categories = config?.categories || [
        { id: 'all', label: 'All Guides' },
        { id: 'getting-started', label: 'Getting Started' },
        { id: 'warehouse', label: 'Warehouse' },
        { id: 'fulfillment', label: 'Fulfillment' },
        { id: 'analytics', label: 'Analytics' },
        { id: 'api', label: 'API & Integration' }
    ];

    // Featured guide (first in list or specific featured)
    const featuredGuide = config?.featuredGuide || filteredGuides[0];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="How-to Guides Section"
            itemScope
            itemType="https://schema.org/HowTo"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineAcademicCap className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Step-by-Step Tutorials"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "How-to"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Guides"}</span> {config?.title?.suffix || ""}
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Master supply chain operations with our comprehensive step-by-step guides. From setup to advanced optimization, we've got you covered."}
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-12">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={config?.searchPlaceholder || "Search guides by title, topic, or keyword..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search guides"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            aria-label={`Show ${category.label} guides`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Featured Guide */}
                {featuredGuide && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true"></div>

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    {/* Featured Content */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                                Featured Guide
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>{featuredGuide.readTime || '10 min read'}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {featuredGuide.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredGuide.description}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={featuredGuide.author?.avatar}
                                                    alt={featuredGuide.author?.name}
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {featuredGuide.author?.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineCalendar className="w-4 h-4" />
                                                <span>{formatDate(featuredGuide.date)}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineEye className="w-4 h-4" />
                                                <span>{featuredGuide.views || '1.2k'} views</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={featuredGuide.link}
                                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                Start Guide
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleSaveGuide(featuredGuide.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedGuides.includes(featuredGuide.id)
                                                        ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedGuides.includes(featuredGuide.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Featured Image */}
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl" aria-hidden="true"></div>
                                        <img
                                            src={featuredGuide.image}
                                            alt={featuredGuide.title}
                                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                                            loading="lazy"
                                        />
                                        {featuredGuide.videoUrl && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
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

                {/* Guides Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredGuides.map((guide) => {
                        const difficultyConfig = getDifficultyConfig(guide.difficulty);
                        const categoryConfig = getCategoryConfig(guide.category);
                        const isExpanded = expandedGuide === guide.id;
                        const isSaved = savedGuides.includes(guide.id);

                        return (
                            <div
                                key={guide.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                {/* Guide Image */}
                                <Link href={guide.link} className="block overflow-hidden relative">
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                            {categoryConfig.label}
                                        </span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${difficultyConfig.color}`}>
                                            {difficultyConfig.label}
                                        </span>
                                    </div>
                                    {guide.videoUrl && (
                                        <div className="absolute bottom-3 right-3 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center">
                                            <HiOutlinePlay className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </Link>

                                <div className="p-6">
                                    {/* Metadata */}
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <div className="flex items-center gap-1">
                                            <HiOutlineClock className="w-4 h-4" />
                                            <span>{guide.readTime || '8 min read'}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineStar className="w-4 h-4" />
                                            <span>{guide.difficulty === 'beginner' ? 'Easy' : guide.difficulty === 'intermediate' ? 'Medium' : 'Advanced'}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        <Link href={guide.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {guide.title}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {guide.description}
                                    </p>

                                    {/* Steps Preview */}
                                    {guide.steps && guide.steps.length > 0 && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => toggleExpanded(guide.id)}
                                                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Hide steps' : `Show ${guide.steps.length} steps`}
                                                {isExpanded ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
                                            </button>

                                            {isExpanded && (
                                                <ul className="mt-3 space-y-2">
                                                    {guide.steps.slice(0, 4).map((step, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                                            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                                                {idx + 1}
                                                            </span>
                                                            <span className="text-gray-700 dark:text-gray-300">{step}</span>
                                                        </li>
                                                    ))}
                                                    {guide.steps.length > 4 && (
                                                        <li className="text-sm text-gray-500 dark:text-gray-400 pl-7">
                                                            + {guide.steps.length - 4} more steps
                                                        </li>
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {guide.tags && guide.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {guide.tags.slice(0, 3).map((tag, idx) => (
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
                                                src={guide.author?.avatar}
                                                alt={guide.author?.name}
                                                className="w-6 h-6 rounded-full object-cover"
                                            />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {guide.author?.name}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleSaveGuide(guide.id)}
                                                className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                                                    }`}
                                                aria-label="Save guide"
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                            </button>
                                            <Link
                                                href={guide.link}
                                                className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
                                            >
                                                Read Guide →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredGuides.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineBookOpen className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No guides found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* View All Button */}
                {config?.showViewAll && filteredGuides.length < (config?.guides?.length || 0) && (
                    <div className="text-center">
                        <Link
                            href={config?.viewAllLink || "/guides"}
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        >
                            View All Guides
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}

                {/* Resource Hub Banner */}
                {config?.showResourceHub && (
                    <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <HiOutlineVideoCamera className="w-6 h-6" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Resource Hub</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    {config?.resourceHub?.title || "Need more help?"}
                                </h3>
                                <p className="text-blue-100 mb-6">
                                    {config?.resourceHub?.description || "Explore our comprehensive library of video tutorials, templates, and downloadable resources."}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        href={config?.resourceHub?.videoLink || "/videos"}
                                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                                    >
                                        <HiOutlinePlay className="w-4 h-4" />
                                        Watch Tutorials
                                    </Link>
                                    <Link
                                        href={config?.resourceHub?.templateLink || "/templates"}
                                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                                    >
                                        <HiOutlineTemplate className="w-4 h-4" />
                                        Download Templates
                                    </Link>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {config?.resourceHub?.stats?.map((stat, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                                        <div className="text-sm text-blue-100">{stat.label}</div>
                                    </div>
                                ))}
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

export default HowToGuidesSection1;