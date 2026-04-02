// page/frontend/Careers/BenefitsAndPerksSection/BenefitsAndPerksSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineHeart,
    HiOutlineGlobe,
    HiOutlineCurrencyDollar,
    HiOutlineAcademicCap,
    HiOutlineCalendar,
    HiOutlineClock,
    HiOutlineOfficeBuilding,
    HiOutlineUsers,
    HiOutlineChip,
    HiOutlineCloudUpload,
    HiOutlineShieldCheck,
    HiOutlineLightBulb,
    HiOutlineStar,
    HiOutlineTrendingUp,
    HiOutlineFire,
    HiOutlineBriefcase,
    HiOutlineCreditCard,
    HiOutlineChartBar,
    HiOutlineLocationMarker,
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineBell,
    HiOutlineSparkles,
    HiOutlineGift,
    HiOutlineWifi,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineBookOpen,
    HiOutlineUsers as HiOutlineUsersIcon,
    HiOutlineCheckCircle,
    HiOutlineSearch
} from 'react-icons/hi';
import {
    HiArrowRight,
    HiOutlineTrophy,
    HiOutlineRocketLaunch as HiOutlineRocket,
    HiOutlineBookmark,
} from 'react-icons/hi2';
import {
    MdOutlineCoffee as HiOutlineCoffee,
} from "react-icons/md";

const BenefitsAndPerksSection1 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedBenefit, setExpandedBenefit] = useState(null);
    const [savedBenefits, setSavedBenefits] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            heart: <HiOutlineHeart className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            dollar: <HiOutlineCurrencyDollar className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            clock: <HiOutlineClock className={className} />,
            office: <HiOutlineOfficeBuilding className={className} />,
            users: <HiOutlineUsers className={className} />,
            chip: <HiOutlineChip className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
            shield: <HiOutlineShieldCheck className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            rocket: <HiOutlineRocket className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            star: <HiOutlineStar className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            briefcase: <HiOutlineBriefcase className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            phone: <HiOutlinePhone className={className} />,
            mail: <HiOutlineMail className={className} />,
            bell: <HiOutlineBell className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            gift: <HiOutlineGift className={className} />,
            coffee: <HiOutlineCoffee className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            book: <HiOutlineBookOpen className={className} />,
            usergroup: <HiOutlineUsersIcon className={className} />,
            arrow: <HiArrowRight className={className} />,
            check: <HiOutlineCheckCircle className={className} />
        };
        return icons[iconName] || <HiOutlineHeart className={className} />;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'health': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'heart', label: 'Health & Wellness' },
            'financial': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'dollar', label: 'Financial Benefits' },
            'work-life': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'clock', label: 'Work-Life Balance' },
            'development': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'academic', label: 'Learning & Development' },
            'family': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Family Support' },
            'perks': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'gift', label: 'Daily Perks' }
        };
        return configs[category] || configs.health;
    };

    // Get benefit type configuration
    const getTypeConfig = (type) => {
        const configs = {
            'core': { color: 'bg-blue-100 text-blue-700', label: 'Core Benefit', badge: '⭐ Core' },
            'premium': { color: 'bg-purple-100 text-purple-700', label: 'Premium', badge: '🏆 Premium' },
            'optional': { color: 'bg-green-100 text-green-700', label: 'Optional', badge: '✨ Optional' }
        };
        return configs[type] || { color: 'bg-gray-100 text-gray-700', label: type, badge: type };
    };

    // Handle save benefit
    const handleSaveBenefit = (benefitId) => {
        if (savedBenefits.includes(benefitId)) {
            setSavedBenefits(savedBenefits.filter(id => id !== benefitId));
        } else {
            setSavedBenefits([...savedBenefits, benefitId]);
        }
    };

    // Filter benefits
    const getFilteredBenefits = () => {
        let benefits = config?.benefits || [];

        if (searchQuery) {
            benefits = benefits.filter(b =>
                b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                b.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            benefits = benefits.filter(b => b.category === selectedCategory);
        }

        if (selectedType !== 'all') {
            benefits = benefits.filter(b => b.type === selectedType);
        }

        return benefits;
    };

    const filteredBenefits = getFilteredBenefits();
    const categories = config?.categories || [
        { id: 'all', label: 'All Benefits', icon: 'gift', count: config?.benefits?.length || 0 },
        { id: 'health', label: 'Health & Wellness', icon: 'heart' },
        { id: 'financial', label: 'Financial', icon: 'dollar' },
        { id: 'work-life', label: 'Work-Life Balance', icon: 'clock' },
        { id: 'development', label: 'Learning & Development', icon: 'academic' },
        { id: 'family', label: 'Family Support', icon: 'users' },
        { id: 'perks', label: 'Daily Perks', icon: 'gift' }
    ];

    const benefitTypes = [
        { id: 'all', label: 'All Types' },
        { id: 'core', label: 'Core Benefits' },
        { id: 'premium', label: 'Premium Benefits' },
        { id: 'optional', label: 'Optional Benefits' }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "100%", label: "Employee Coverage", icon: "users" },
        { value: "$5,000", label: "Learning Stipend", icon: "academic" },
        { value: "16", label: "Weeks Parental Leave", icon: "heart" },
        { value: "25+", label: "Countries", icon: "globe" }
    ];

    // Featured benefit
    const featuredBenefit = config?.featuredBenefit || filteredBenefits[0];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Benefits & Perks"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div className="inline-flex items-center bg-green-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-green-100 dark:border-gray-700">
                        <HiOutlineGift className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
                        <span className="text-sm font-medium text-green-700 dark:text-green-300">
                            {config?.badge || "Benefits & Perks"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Benefits That"} <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Empower You"}</span>
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "We believe in taking care of our people. From comprehensive health coverage to learning opportunities, we've designed benefits that support your well-being and growth."}
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
                        placeholder={config?.searchPlaceholder || "Search benefits by name, category, or type..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search benefits"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                            {category.count !== undefined && (
                                <span className="ml-1 text-xs opacity-80">{category.count}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Benefit Type Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {benefitTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedType === type.id
                                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>

                {/* Featured Benefit */}
                {featuredBenefit && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl" aria-hidden="true" />

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                                                Featured Benefit
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(featuredBenefit.category).color}`}>
                                                    {getCategoryConfig(featuredBenefit.category).label}
                                                </span>
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeConfig(featuredBenefit.type).color}`}>
                                                    {getTypeConfig(featuredBenefit.type).badge}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-12 h-12 rounded-xl ${getCategoryConfig(featuredBenefit.category).color} flex items-center justify-center`}>
                                                {getIcon(getCategoryConfig(featuredBenefit.category).icon, "w-6 h-6")}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                                {featuredBenefit.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredBenefit.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {featuredBenefit.details?.map((detail, idx) => (
                                                <span key={idx} className="text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={featuredBenefit.link}
                                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                Learn More
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleSaveBenefit(featuredBenefit.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedBenefits.includes(featuredBenefit.id)
                                                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-green-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedBenefits.includes(featuredBenefit.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-green-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                                        <img
                                            src={featuredBenefit.image}
                                            alt={featuredBenefit.title}
                                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredBenefits.map((benefit) => {
                        const categoryConfig = getCategoryConfig(benefit.category);
                        const typeConfig = getTypeConfig(benefit.type);
                        const isExpanded = expandedBenefit === benefit.id;
                        const isSaved = savedBenefits.includes(benefit.id);

                        return (
                            <div
                                key={benefit.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-xl ${categoryConfig.color} flex items-center justify-center`}>
                                                {getIcon(categoryConfig.icon, "w-5 h-5")}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                    {benefit.title}
                                                </h3>
                                                <div className="flex gap-2 mt-1">
                                                    <span className={`text-xs px-2 py-0.5 rounded-full ${categoryConfig.color}`}>
                                                        {categoryConfig.label}
                                                    </span>
                                                    <span className={`text-xs px-2 py-0.5 rounded-full ${typeConfig.color}`}>
                                                        {typeConfig.badge}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleSaveBenefit(benefit.id)}
                                            className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                        >
                                            <HiOutlineBookmark className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {benefit.description}
                                    </p>

                                    {/* Expandable Details */}
                                    {benefit.details && benefit.details.length > 0 && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => setExpandedBenefit(isExpanded ? null : benefit.id)}
                                                className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 font-medium hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Show less' : `View ${benefit.details.length} details`}
                                                <HiArrowRight className="w-4 h-4" />
                                            </button>

                                            {isExpanded && (
                                                <ul className="mt-3 space-y-2">
                                                    {benefit.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                            <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {benefit.tags && benefit.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {benefit.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <Link
                                            href={benefit.link}
                                            className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            Learn More
                                            <HiArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredBenefits.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineGift className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No benefits found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setSelectedType('all');
                            }}
                            className="mt-4 text-green-600 dark:text-green-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Benefits Summary Banner */}
                <div className="mt-12 bg-linear-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineHeart className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {config?.summaryTitle || "Total Rewards Package"}
                    </h3>
                    <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                        {config?.summaryDescription || "Our comprehensive benefits package is designed to support you at every stage of your life and career. We're committed to your well-being, growth, and success."}
                    </p>
                    <Link
                        href="/benefits-guide"
                        className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        View Full Benefits Guide
                        <HiArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-green-600 dark:text-green-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Benefits Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive updates about new benefits, wellness programs, and employee perks."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                aria-label="Email for benefits updates"
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
      `}</style>
        </section>
    );
};

export default BenefitsAndPerksSection1;