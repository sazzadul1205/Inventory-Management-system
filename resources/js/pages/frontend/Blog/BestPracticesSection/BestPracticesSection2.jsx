// frontend/Blog/BestPracticesSection/BestPracticesSection2.jsx

/**
 * Best Practices Section - Data-Driven Strategies & ROI Hub
 * 
 * Unique design elements:
 * - Interactive ROI calculator with real-time savings estimates
 * - Case studies grid with performance metrics
 * - Grid/List view toggle for content browsing
 * - Impact badges showing expected outcomes
 * - Implementation steps preview with count badges
 * - Downloadable resources indicator
 * - Expert insights consultation banner
 * - Stats cards for total practices, case studies, companies
 * - Category filters with count badges
 * - Success stories with result metrics
 * - Animated gradient backgrounds
 * - Newsletter subscription for weekly practices
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons set for consistent, clean iconography
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
  HiArrowRight,
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
  HiOutlineFire,
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineClipboardList,
  HiOutlineScale,
  HiOutlineCurrencyDollar,
  HiOutlineRefresh,
  HiOutlineCog,
  HiOutlineCalculator,
  HiOutlineChartPie,
  HiOutlineChartSquareBar,
  HiOutlineClipboardCheck,
  HiOutlineBadgeCheck,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineExternalLink,
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineNewspaper,
  HiOutlineBookOpen,
  HiOutlineTemplate,
  HiOutlineCode,
  HiOutlineCloudUpload,
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineChevronDown,
  HiOutlineMail,
  HiOutlineX,
} from 'react-icons/hi';

const BestPracticesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedPractices, setSavedPractices] = useState([]);
  const [showCalculator, setShowCalculator] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
  const [calculatorInputs, setCalculatorInputs] = useState({ currentCost: 100000, expectedImprovement: 25, implementationCost: 25000 });

  // ==================== MEMOIZED DATA ====================
  const practices = useMemo(() => config?.practices || [], [config?.practices]);
  const caseStudies = useMemo(() => config?.caseStudies || [], [config?.caseStudies]);
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All Practices', icon: 'sparkles', count: practices.length },
    { id: 'inventory', label: 'Inventory', icon: 'cube' },
    { id: 'warehouse', label: 'Warehouse', icon: 'cube' },
    { id: 'transportation', label: 'Transportation', icon: 'truck' },
    { id: 'fulfillment', label: 'Fulfillment', icon: 'check' },
    { id: 'technology', label: 'Technology', icon: 'cog' }
  ], [config?.categories, practices.length]);

  const stats = config?.stats || { practices: 0, caseStudies: 0, companies: '0' };

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Uses Heroicons exclusively for visual consistency
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      lightbulb: HiOutlineLightBulb,
      chart: HiOutlineChartBar,
      truck: HiOutlineTruck,
      cube: HiOutlineCube,
      shield: HiOutlineShieldCheck,
      clock: HiOutlineClock,
      users: HiOutlineUsers,
      globe: HiOutlineGlobe,
      trending: HiOutlineTrendingUp,
      check: HiOutlineCheckCircle,
      star: HiOutlineStar,
      eye: HiOutlineEye,
      calendar: HiOutlineCalendar,
      tag: HiOutlineTag,
      filter: HiOutlineFilter,
      search: HiOutlineSearch,
      download: HiOutlineDownload,
      share: HiOutlineShare,
      bookmark: HiOutlineBookmark,
      sparkles: HiOutlineSparkles,
      fire: HiOutlineFire,
      academic: HiOutlineAcademicCap,
      document: HiOutlineDocumentText,
      presentation: HiOutlinePresentationChartLine,
      clipboard: HiOutlineClipboardList,
      scale: HiOutlineScale,
      dollar: HiOutlineCurrencyDollar,
      refresh: HiOutlineRefresh,
      cog: HiOutlineCog,
      calculator: HiOutlineCalculator,
      pie: HiOutlineChartPie,
      bar: HiOutlineChartSquareBar,
      clipboardCheck: HiOutlineClipboardCheck,
      badgeCheck: HiOutlineBadgeCheck,
      thumbsUp: HiOutlineThumbUp,
      chat: HiOutlineChat,
      external: HiOutlineExternalLink,
      play: HiOutlinePlay,
      video: HiOutlineVideoCamera,
      microphone: HiOutlineMicrophone,
      newspaper: HiOutlineNewspaper,
      book: HiOutlineBookOpen,
      template: HiOutlineTemplate,
      code: HiOutlineCode,
      cloud: HiOutlineCloudUpload,
      database: HiOutlineDatabase,
      server: HiOutlineServer,
      grid: HiOutlineViewGrid,
      list: HiOutlineViewList,
      chevronDown: HiOutlineChevronDown,
      mail: HiOutlineMail,
      close: HiOutlineX,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) return <HiOutlineLightBulb className={className} />;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Returns category badge configuration
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      'inventory': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'cube', label: 'Inventory Management', borderColor: 'border-blue-200 dark:border-blue-800' },
      'warehouse': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cube', label: 'Warehouse Operations', borderColor: 'border-purple-200 dark:border-purple-800' },
      'transportation': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'truck', label: 'Transportation', borderColor: 'border-emerald-200 dark:border-emerald-800' },
      'fulfillment': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'check', label: 'Order Fulfillment', borderColor: 'border-orange-200 dark:border-orange-800' },
      'sustainability': { color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400', icon: 'globe', label: 'Sustainability', borderColor: 'border-teal-200 dark:border-teal-800' },
      'technology': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Technology & Automation', borderColor: 'border-indigo-200 dark:border-indigo-800' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'lightbulb', label: 'Best Practice' };
  }, []);

  /**
   * Calculate ROI based on calculator inputs
   */
  const calculateROI = useCallback(() => {
    const annualSavings = calculatorInputs.currentCost * (calculatorInputs.expectedImprovement / 100);
    const netBenefit = annualSavings - calculatorInputs.implementationCost;
    const roi = (netBenefit / calculatorInputs.implementationCost) * 100;
    const paybackPeriod = calculatorInputs.implementationCost / (annualSavings / 12);
    return { annualSavings, netBenefit, roi, paybackPeriod };
  }, [calculatorInputs]);

  /**
   * Toggle save/bookmark status for a practice
   */
  const handleSavePractice = useCallback((practiceId) => {
    setSavedPractices(prev =>
      prev.includes(practiceId)
        ? prev.filter(id => id !== practiceId)
        : [...prev, practiceId]
    );
  }, []);

  /**
   * Clear all active filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  /**
   * Handle newsletter subscription
   */
  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    if (email && email.includes('@')) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 3000);
      e.target.reset();
    }
  }, []);

  // ==================== FILTERING LOGIC ====================
  const filteredPractices = useMemo(() => {
    let filtered = [...practices];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(practice =>
        practice.title?.toLowerCase().includes(query) ||
        practice.description?.toLowerCase().includes(query) ||
        practice.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(practice => practice.category === selectedCategory);
    }

    return filtered;
  }, [practices, searchQuery, selectedCategory]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all';
  const roiResult = calculateROI();

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Best Practices & Case Studies - Data-Driven Strategies Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-radial-gradient" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon("badgeCheck", "w-4 h-4 text-blue-600 dark:text-blue-400")}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Industry Best Practices"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Proven"}{' '}
              <span className="bg-linear-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {config?.title?.highlight || "Best Practices"}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Data-driven strategies and real-world case studies to help you optimize your supply chain operations."}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.practices || 0}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Best Practices</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{stats.caseStudies || 0}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Case Studies</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.companies || "0"}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Companies Served</div>
            </div>
          </div>
        </div>

        {/* ==================== SEARCH AND VIEW MODE ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {getIcon("search", "w-5 h-5 text-gray-400")}
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={config?.searchPlaceholder || "Search best practices, case studies, or topics..."}
              className="w-full pl-12 pr-12 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              aria-label="Search practices"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Clear search"
              >
                {getIcon("close", "w-5 h-5")}
              </button>
            )}
          </div>

          <div className="flex gap-2">
            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Grid view"
              >
                {getIcon("grid", "w-4 h-4")}
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="List view"
              >
                {getIcon("list", "w-4 h-4")}
              </button>
            </div>
          </div>
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${category.label} practices`}
            >
              {getIcon(category.icon, "w-4 h-4")}
              {category.label}
              {category.count !== undefined && (
                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== ROI CALCULATOR SECTION ==================== */}
        {config?.showCalculator && (
          <div className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  {getIcon("calculator", "w-5 h-5 text-blue-600 dark:text-blue-400")}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">ROI Calculator</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Estimate potential savings from implementing best practices</p>
                </div>
              </div>
              {getIcon("chevronDown", `w-5 h-5 text-gray-400 transition-transform ${showCalculator ? 'rotate-180' : ''}`)}
            </button>

            {showCalculator && (
              <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Current Annual Cost ($)
                      </label>
                      <input
                        type="number"
                        value={calculatorInputs.currentCost}
                        onChange={(e) => setCalculatorInputs(prev => ({ ...prev, currentCost: Number(e.target.value) }))}
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Expected Improvement (%)
                      </label>
                      <input
                        type="number"
                        value={calculatorInputs.expectedImprovement}
                        onChange={(e) => setCalculatorInputs(prev => ({ ...prev, expectedImprovement: Number(e.target.value) }))}
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Implementation Cost ($)
                      </label>
                      <input
                        type="number"
                        value={calculatorInputs.implementationCost}
                        onChange={(e) => setCalculatorInputs(prev => ({ ...prev, implementationCost: Number(e.target.value) }))}
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="bg-linear-to-br from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Your Estimated ROI</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Annual Savings:</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">${roiResult.annualSavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Net Benefit (Year 1):</span>
                        <span className={`font-bold ${roiResult.netBenefit >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                          ${roiResult.netBenefit.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">ROI:</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">{roiResult.roi.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Payback Period:</span>
                        <span className="font-bold text-purple-600 dark:text-purple-400">{roiResult.paybackPeriod.toFixed(1)} months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== CASE STUDIES SECTION ==================== */}
        {config?.showCaseStudies && caseStudies.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  {getIcon("presentation", "w-6 h-6 text-blue-600")}
                  Success Stories
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Real results from real companies</p>
              </div>
              <Link href="/case-studies" className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                View all case studies →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {getIcon("play", "w-8 h-8 text-white")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryConfig(study.category).color}`}>
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{study.company}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{study.description}</p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {study.results?.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{result.value}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={study.link}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Read case study
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== PRACTICES GRID/LIST VIEW ==================== */}
        <div className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredPractices.map((practice) => {
            const categoryConfig = getCategoryConfig(practice.category);
            const isSaved = savedPractices.includes(practice.id);

            return (
              <div
                key={practice.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Practice Image */}
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-72 md:shrink-0' : ''}`}>
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-56 md:h-full' : 'h-48'
                      }`}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                      {categoryConfig.label}
                    </span>
                  </div>
                  {practice.impactBadge && (
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2 text-center">
                        <span className="text-xs font-semibold text-white">{practice.impactBadge}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Metadata */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon("clock", "w-4 h-4")}
                      <span>{practice.readTime || '8 min read'}</span>
                    </div>
                    <button
                      onClick={() => handleSavePractice(practice.id)}
                      className="text-gray-400 hover:text-amber-500 transition-colors"
                      aria-label={isSaved ? "Remove from saved" : "Save practice"}
                    >
                      {getIcon("bookmark", `w-4 h-4 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`)}
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    <Link href={practice.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {practice.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {practice.description}
                  </p>

                  {/* Key Metrics */}
                  {practice.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {practice.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                          <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{metric.value}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Implementation Steps Preview */}
                  {practice.steps && practice.steps.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {getIcon("clipboard", "w-3 h-3")}
                        <span>Implementation Steps</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {practice.steps.slice(0, 3).map((step, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                            {step}
                          </span>
                        ))}
                        {practice.steps.length > 3 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">+{practice.steps.length - 3}</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {practice.tags && practice.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {practice.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <img
                        src={practice.author?.avatar}
                        alt={practice.author?.name}
                        className="w-6 h-6 rounded-full object-cover"
                        loading="lazy"
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400">{practice.author?.name}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {practice.downloadable && (
                        <button className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Download resource">
                          {getIcon("download", "w-4 h-4")}
                        </button>
                      )}
                      <Link
                        href={practice.link}
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                      >
                        Read More
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredPractices.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("lightbulb", "w-16 h-16")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No practices found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== EXPERT INSIGHTS SECTION ==================== */}
        {config?.showExpertInsights && (
          <div className="mt-12 bg-linear-to-r from-blue-600 to-emerald-600 dark:from-blue-500 dark:to-emerald-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {getIcon("academic", "w-6 h-6")}
                  <span className="text-sm font-semibold uppercase tracking-wider">Expert Insights</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {config?.expertInsights?.title || "Get personalized recommendations"}
                </h3>
                <p className="text-blue-100 mb-6">
                  {config?.expertInsights?.description || "Schedule a free consultation with our supply chain experts to get tailored best practices for your business."}
                </p>
                <Link
                  href={config?.expertInsights?.link || "/consultation"}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                >
                  Talk to an Expert
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex -space-x-4 justify-center">
                {config?.expertInsights?.experts?.map((expert, idx) => (
                  <img
                    key={idx}
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-16 h-16 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon("mail", "w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4")}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || "Get Weekly Best Practices"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description || "Subscribe to receive curated best practices, case studies, and implementation guides."}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-xl placeholder-gray-500 border border-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email for best practices newsletter"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            {emailSubmitted && (
              <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-4 animate-fadeIn">
                Thanks for subscribing! Check your inbox for confirmation.
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
              {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. Get 1-2 emails per week."}
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
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.15)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
          -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BestPracticesSection2;