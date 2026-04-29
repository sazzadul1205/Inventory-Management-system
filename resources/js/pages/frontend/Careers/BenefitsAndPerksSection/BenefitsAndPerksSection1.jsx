// page/frontend/Careers/BenefitsAndPerksSection/BenefitsAndPerksSection1.jsx

/**
 * Benefits & Perks Section I - Total Rewards Hub
 *
 * Unique Design Elements:
 * - Stats Cards for benefit metrics (Employee Coverage, Learning Stipend, Parental Leave, Countries)
 * - Featured Benefit Spotlight with Hero Layout
 * - Category Filter Chips with Custom Icons (Health, Financial, Work-Life, Development, Family, Perks)
 * - Benefit Type Filter (Core, Premium, Optional)
 * - Expandable Benefit Details with Checkmark List
 * - Save/Bookmark Functionality for Benefits
 * - Tag Cloud for Benefit Categorization
 * - Search across benefit titles, descriptions, and tags
 * - Benefits Summary Banner with CTA
 * - Newsletter Subscription Integration
 * - Animated Gradient Background Orbs (Green/Blue Theme)
 * - Responsive Grid Layout for Benefit Cards
 * - Benefit Type Badges with Color Coding
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineHeart,
  HiOutlineGlobe,
  HiOutlineCurrencyDollar,
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineClock,
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
  HiOutlineCheckCircle,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineTag,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineDocumentText,
  HiOutlineCode,
  HiOutlineCog,
  HiOutlineRefresh,
  HiOutlineFlag,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import {
  HiArrowRight,
  HiOutlineTrophy,
  HiOutlineRocketLaunch as HiOutlineRocket,
  HiOutlineBuildingOffice,
} from 'react-icons/hi2';
import {
  MdOutlineCoffee as HiOutlineCoffee,
  MdOutlineHeadphones as HiOutlineHeadphones,
} from "react-icons/md";

const BenefitsAndPerksSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedBenefits, setSavedBenefits] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [expandedBenefit, setExpandedBenefit] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const allBenefits = useMemo(() => config?.benefits || [], [config?.benefits]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Benefits', icon: 'gift', count: allBenefits.length },
        { id: 'health', label: 'Health & Wellness', icon: 'heart' },
        { id: 'financial', label: 'Financial Benefits', icon: 'currency-dollar' },
        { id: 'work-life', label: 'Work-Life Balance', icon: 'clock' },
        { id: 'development', label: 'Learning & Development', icon: 'academic' },
        { id: 'family', label: 'Family Support', icon: 'users' },
        { id: 'perks', label: 'Daily Perks', icon: 'gift' },
      ],
    [config?.categories, allBenefits.length]
  );

  const benefitTypes = useMemo(
    () => [
      { id: 'all', label: 'All Types' },
      { id: 'core', label: 'Core Benefits' },
      { id: 'premium', label: 'Premium Benefits' },
      { id: 'optional', label: 'Optional Benefits' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "100%", label: "Employee Coverage", icon: "users" },
        { value: "$5,000", label: "Learning Stipend", icon: "academic" },
        { value: "16", label: "Weeks Parental Leave", icon: "heart" },
        { value: "25+", label: "Countries", icon: "globe" }
      ],
    [config?.stats]
  );

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      heart: <HiOutlineHeart className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      'currency-dollar': <HiOutlineCurrencyDollar className={className} />,
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
      usergroup: <HiOutlineUsers className={className} />,
      arrow: <HiArrowRight className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      tag: <HiOutlineTag className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      code: <HiOutlineCode className={className} />,
      cog: <HiOutlineCog className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      flag: <HiOutlineFlag className={className} />,
      template: <HiOutlineTemplate className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      headphones: <HiOutlineHeadphones className={className} />,
    };
    return icons[iconName] || <HiOutlineGift className={className} />;
  }, []);

  /**
   * Returns category configuration with color, icon, and label
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      health: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'heart', label: 'Health & Wellness', borderColor: 'border-emerald-200 dark:border-emerald-800' },
      financial: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'currency-dollar', label: 'Financial Benefits', borderColor: 'border-blue-200 dark:border-blue-800' },
      'work-life': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'clock', label: 'Work-Life Balance', borderColor: 'border-purple-200 dark:border-purple-800' },
      development: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'academic', label: 'Learning & Development', borderColor: 'border-orange-200 dark:border-orange-800' },
      family: { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Family Support', borderColor: 'border-pink-200 dark:border-pink-800' },
      perks: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'gift', label: 'Daily Perks', borderColor: 'border-indigo-200 dark:border-indigo-800' }
    };
    return configs[categoryId] || configs.health;
  }, []);

  /**
   * Returns benefit type configuration with color and badge
   */
  const getTypeConfig = useCallback((typeId) => {
    const configs = {
      core: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Core Benefit', badge: 'Core' },
      premium: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', label: 'Premium', badge: 'Premium' },
      optional: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Optional', badge: 'Optional' }
    };
    return configs[typeId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', label: typeId, badge: typeId };
  }, []);

  /**
   * Toggle save/bookmark status for a benefit
   */
  const handleSaveBenefit = useCallback((benefitId) => {
    setSavedBenefits((prev) =>
      prev.includes(benefitId) ? prev.filter((id) => id !== benefitId) : [...prev, benefitId]
    );
  }, []);

  /**
   * Toggle expanded state for a benefit
   */
  const toggleExpanded = useCallback((benefitId) => {
    setExpandedBenefit((prev) => (prev === benefitId ? null : benefitId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedType('all');
  }, []);

  // ==================== FILTERING LOGIC ====================
  const filteredBenefits = useMemo(() => {
    let benefits = [...allBenefits];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      benefits = benefits.filter(
        (b) =>
          b.title?.toLowerCase().includes(query) ||
          b.description?.toLowerCase().includes(query) ||
          b.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      benefits = benefits.filter((b) => b.category === selectedCategory);
    }

    if (selectedType !== 'all') {
      benefits = benefits.filter((b) => b.type === selectedType);
    }

    return benefits;
  }, [allBenefits, searchQuery, selectedCategory, selectedType]);

  // Update category counts for display
  const categoriesWithCount = useMemo(() => {
    return categories.map((cat) => {
      if (cat.id === 'all') {
        return { ...cat, count: filteredBenefits.length };
      }
      const count = allBenefits.filter((b) => b.category === cat.id).length;
      return { ...cat, count };
    });
  }, [categories, allBenefits, filteredBenefits.length]);

  // Get featured benefit (first marked as featured, otherwise first in filtered list)
  const featuredBenefit = useMemo(() => {
    const featured = allBenefits.find((b) => b.isFeatured);
    return featured || filteredBenefits[0];
  }, [allBenefits, filteredBenefits]);

  // Regular benefits (excluding featured benefit)
  const regularBenefits = useMemo(() => {
    if (!featuredBenefit) return filteredBenefits;
    return filteredBenefits.filter((b) => b.id !== featuredBenefit.id);
  }, [filteredBenefits, featuredBenefit]);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Benefits & Perks - Total Rewards"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div className="inline-flex items-center bg-emerald-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-emerald-100 dark:border-gray-700">
            {getIcon('gift', 'w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2')}
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              {config?.badge || 'Benefits & Perks'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Benefits That'}{' '}
            <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Empower You'}
            </span>
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              'We believe in taking care of our people. From comprehensive health coverage to learning opportunities, we\'ve designed benefits that support your well-being and growth.'}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                {getIcon(stat.icon, 'w-5 h-5 text-emerald-600 dark:text-emerald-400')}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {getIcon('search', 'w-5 h-5 text-gray-400')}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              config?.searchPlaceholder || 'Search benefits by name, category, or type...'
            }
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search benefits"
          />
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categoriesWithCount.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${category.label}`}
            >
              {getIcon(category.icon, 'w-4 h-4')}
              {category.label}
              {category.count !== undefined && (
                <span className="ml-1 text-xs opacity-80">{category.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== BENEFIT TYPE FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {benefitTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedType === type.id
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${type.label}`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED BENEFIT ==================== */}
        {featuredBenefit && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl"
                aria-hidden="true"
              />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                        Featured Benefit
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(featuredBenefit.category).color}`}
                        >
                          {getCategoryConfig(featuredBenefit.category).label}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeConfig(featuredBenefit.type).color}`}
                        >
                          {getTypeConfig(featuredBenefit.type).badge}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${getCategoryConfig(featuredBenefit.category).color} flex items-center justify-center`}
                      >
                        {getIcon(getCategoryConfig(featuredBenefit.category).icon, 'w-6 h-6')}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {featuredBenefit.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredBenefit.description}
                    </p>

                    {/* Details Pills */}
                    {featuredBenefit.details && featuredBenefit.details.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredBenefit.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-700"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredBenefit.link}
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Learn More
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleSaveBenefit(featuredBenefit.id)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedBenefits.includes(featuredBenefit.id)
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-600'
                          }`}
                        aria-label={
                          savedBenefits.includes(featuredBenefit.id)
                            ? 'Remove from saved'
                            : 'Save for later'
                        }
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                        {savedBenefits.includes(featuredBenefit.id) ? 'Saved' : 'Save for Later'}
                      </button>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative">
                    <div
                      className="absolute -inset-4 bg-emerald-600/20 rounded-2xl blur-2xl"
                      aria-hidden="true"
                    />
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

        {/* ==================== BENEFITS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularBenefits.map((benefit) => {
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
                  {/* Benefit Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${categoryConfig.color} flex items-center justify-center`}
                      >
                        {getIcon(categoryConfig.icon, 'w-5 h-5')}
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
                      className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                        }`}
                      aria-label={isSaved ? 'Remove from saved' : 'Save benefit'}
                    >
                      {getIcon('bookmark', 'w-4 h-4')}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {benefit.description}
                  </p>

                  {/* Expandable Details */}
                  {benefit.details && benefit.details.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(benefit.id)}
                        className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={
                          isExpanded
                            ? 'Show less'
                            : `View ${benefit.details.length} details`
                        }
                      >
                        {isExpanded
                          ? 'Show less'
                          : `View ${benefit.details.length} details`}
                        <HiArrowRight className="w-4 h-4" />
                      </button>

                      {isExpanded && (
                        <ul className="mt-3 space-y-2 animate-fadeIn">
                          {benefit.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              {getIcon('check', 'w-4 h-4 text-emerald-500 mt-0.5 shrink-0')}
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
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={benefit.link}
                      className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Learn More
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                    {benefit.isNew && (
                      <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularBenefits.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('gift', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No benefits found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== BENEFITS SUMMARY BANNER ==================== */}
        <div className="mt-12 bg-linear-to-r from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-500 rounded-3xl p-8 md:p-12 text-white text-center">
          {getIcon('heart', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {config?.summaryTitle || 'Total Rewards Package'}
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            {config?.summaryDescription ||
              'Our comprehensive benefits package is designed to support you at every stage of your life and career. We\'re committed to your well-being, growth, and success.'}
          </p>
          <Link
            href={config?.summaryLink || '/benefits-guide'}
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Full Benefits Guide
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-emerald-600 dark:text-emerald-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Benefits Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive updates about new benefits, wellness programs, and employee perks.'}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const email = formData.get('email');
                if (email && email.includes('@')) {
                  // Handle subscription logic here
                  e.target.reset();
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for benefits updates"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
              {config?.newsletter?.disclaimer ||
                'No spam, unsubscribe anytime. Get 1-2 emails per month.'}
            </p>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
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

export default BenefitsAndPerksSection1;