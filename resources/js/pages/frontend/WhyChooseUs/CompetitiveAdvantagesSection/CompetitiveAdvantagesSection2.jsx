// frontend/WhyChooseUs/CompetitiveAdvantagesSection/CompetitiveAdvantagesSection2.jsx

/**
 * Competitive Advantages Section 2 - The "Clear Winner" Comparison Hub
 * 
 * Unique design elements:
 * - Interactive metric toggle for side-by-side comparison
 * - "True Total Cost" transparency card
 * - Edge network latency visualization
 * - Migration success guarantee badge
 * - ROI calculator callout
 * 
 * All icons from react-icons (hi, si, tb, bs, md, gi, vsc, etc.)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - Extensive set for this comparison-focused section
import { BsBarChartSteps, BsShieldCheck } from 'react-icons/bs';
import { FaRocket, FaChartLine } from 'react-icons/fa';
import { GiProfit, GiClockwork } from 'react-icons/gi';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineTrendingUp,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineStar,
  HiOutlineChip,
  HiOutlineLightningBolt,
  HiOutlineCash,
  HiOutlineSwitchHorizontal,
  HiOutlineGlobeAlt,
  HiOutlineClock,
} from 'react-icons/hi';
import { MdVerified, MdOutlineDashboardCustomize } from 'react-icons/md';
import { SiTensorflow } from 'react-icons/si';
import { TbWorldShare, TbPigMoney, TbDeviceAnalytics } from 'react-icons/tb';
import { VscServerProcess } from 'react-icons/vsc';

const CompetitiveAdvantagesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAdvantage, setSelectedAdvantage] = useState(null);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [activeComparisonMetric, setActiveComparisonMetric] = useState('roi');

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const advantages = config?.advantages || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const faqCategories = useMemo(() => config?.faqCategories || [], [config?.faqCategories]); // config?.faqCategories || [];
  const comparisonMetrics = useMemo(() => config?.comparisonMetrics || [], [config?.comparisonMetrics]); // config?.comparisonMetrics || [];


  // ==================== FILTERED DATA ====================
  const filteredFaqs = useMemo(() => {
    return faqs
      .filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = searchQuery === '' ||
          faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'recent') return (b.updatedAt || '').localeCompare(a.updatedAt || '');
        if (sortBy === 'popular') return (b.views || 0) - (a.views || 0);
        if (sortBy === 'helpful') {
          const aHelpful = helpfulVotes[a.id] === true ? 1 : 0;
          const bHelpful = helpfulVotes[b.id] === true ? 1 : 0;
          return bHelpful - aHelpful;
        }
        return 0;
      });
  }, [faqs, activeCategory, searchQuery, sortBy, helpfulVotes]);


  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports multiple react-icon libraries
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown,
      HiOutlineChevronUp,
      HiOutlineSearch,
      HiOutlineArrowRight,
      HiOutlineCheckCircle,
      HiOutlineTrendingUp,
      HiOutlineX,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineExternalLink,
      HiOutlineFilter,
      HiOutlineBookmark,
      HiOutlinePrinter,
      HiOutlineDownload,
      HiOutlineStar,
      HiOutlineChip,
      HiOutlineLightningBolt,
      HiOutlineCash,
      HiOutlineSwitchHorizontal,
      HiOutlineGlobeAlt,
      HiOutlineClock,
      GiProfit, GiClockwork,
      BsBarChartSteps,
      BsShieldCheck,
      MdVerified,
      MdOutlineDashboardCustomize,
      TbWorldShare,
      TbPigMoney,
      TbDeviceAnalytics,
      SiTensorflow,
      VscServerProcess,
      FaRocket,
      FaChartLine,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineChip className={className} />;
    }
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle FAQ accordion
   */
  const toggleFaq = useCallback((index) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  /**
   * Handle helpful vote for FAQ
   */
  const handleHelpful = useCallback((faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('advFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  }, []);

  /**
   * Save/unsave FAQ bookmark
   */
  const handleSaveFaq = useCallback((faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedAdvFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Export FAQs to JSON
   */
  const handleExport = useCallback(() => {
    const exportData = filteredFaqs.map(faq => ({
      question: faq.question,
      answer: faq.answer,
      category: faqCategories.find(c => c.id === faq.category)?.name || faq.category,
      tags: faq.tags
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const link = document.createElement('a');
    link.setAttribute('href', dataUri);
    link.setAttribute('download', 'advantages-faq-export.json');
    link.click();
  }, [filteredFaqs, faqCategories]);

  /**
   * Print FAQ section
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /**
   * Clear search input
   */
  const clearSearch = useCallback(() => {
    setSearchQuery('');
    searchRef.current?.focus();
  }, []);

  /**
   * Clear all filters (search, category, sort)
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setActiveCategory('all');
    setSortBy('recent');
  }, []);

  /**
   * Get comparison metric value for display
   */
  const getMetricValue = useCallback((metricId, type) => {
    const metric = comparisonMetrics.find(m => m.id === metricId);
    if (!metric) return '—';
    if (type === 'us') return metric.us;
    if (type === 'competitor') return metric.competitor;
    return '—';
  }, [comparisonMetrics]);

  /**
   * Calculate advantage percentage for comparison
   */
  const getAdvantagePercentage = useCallback((metricId) => {
    const metric = comparisonMetrics.find(m => m.id === metricId);
    if (!metric || typeof metric.us !== 'number' || typeof metric.competitor !== 'number') return null;
    if (metric.competitor === 0) return '+100%';
    const diff = ((metric.us - metric.competitor) / metric.competitor) * 100;
    return `${diff > 0 ? '+' : ''}${Math.round(diff)}%`;
  }, [comparisonMetrics]);

  /**
   * Format metric value with unit
   */
  const formatMetricValue = useCallback((value, unit) => {
    if (unit === '%') return `${value}%`;
    if (unit === 'weeks' && value < 1) return `${value * 4} days`;
    return value;
  }, []);

  /**
   * Highlight search matches in text
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-emerald-200 dark:bg-emerald-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECT ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('advFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedAdvFaqs');
    if (saved) setSavedFaqs(JSON.parse(saved));
  }, []);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Competitive Advantages Comparison"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-emerald-50/30 to-transparent dark:from-emerald-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 dark:bg-teal-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-emerald-300/5 dark:bg-emerald-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-emerald-100 dark:bg-emerald-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-emerald-200 dark:border-emerald-800'}`}
            aria-label="Advantages badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-emerald-700 dark:text-emerald-300'}`}>
              {config?.badge?.text || "The Clear Winner"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Why'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-emerald-600 to-teal-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Smart Businesses'}
            </span>{' '}
            {config?.title?.suffix || 'Choose Us'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Stop settling for outdated systems and hidden fees. We deliver enterprise-grade performance with startup agility. See how we stack up against the competition across the metrics that actually drive your bottom line."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== ADVANTAGES GRID (Clickable Cards) ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedAdvantage(advantage);
                setShowComparisonModal(true);
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 cursor-pointer border border-gray-100 dark:border-gray-700 group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedAdvantage(advantage) && setShowComparisonModal(true)}
            >
              <div className="flex justify-center mb-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                {getIcon(advantage.icon, "w-10 h-10")}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">{advantage.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4 leading-relaxed">{advantage.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1.5 rounded-full">
                  {getIcon("HiOutlineCheckCircle", "w-3 h-3")}
                  <span>{advantage.feature}</span>
                </div>
                {getIcon("HiOutlineArrowRight", "w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors")}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== INTERACTIVE COMPARISON TOOL ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Side-by-Side Showdown
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Toggle between metrics to see the real difference.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="bg-linear-to-r from-emerald-600 to-teal-600 p-4 text-white">
              <div className="flex items-center gap-2">
                {getIcon("FaChartLine", "w-5 h-5")}
                <span className="font-semibold">Interactive Comparison Tool</span>
              </div>
            </div>
            <div className="p-6">
              {/* Metric Toggle Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {comparisonMetrics.map((metric) => (
                  <button
                    key={metric.id}
                    onClick={() => setActiveComparisonMetric(metric.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeComparisonMetric === metric.id
                      ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    {metric.label}
                  </button>
                ))}
              </div>

              {/* Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Our Platform Card */}
                <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
                  <div className="flex justify-center mb-3">
                    {getIcon("FaRocket", "w-8 h-8 text-emerald-600")}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Inventory Platform</h4>
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    {formatMetricValue(
                      getMetricValue(activeComparisonMetric, 'us'),
                      comparisonMetrics.find(m => m.id === activeComparisonMetric)?.unit || ''
                    )}
                    {comparisonMetrics.find(m => m.id === activeComparisonMetric)?.unit === '%' && '%'}
                    {comparisonMetrics.find(m => m.id === activeComparisonMetric)?.unit === 'weeks' && getMetricValue(activeComparisonMetric, 'us') < 1 ? '' : ''}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Our Performance</div>
                </div>

                {/* Competitor Card */}
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="flex justify-center mb-3">
                    {getIcon("HiOutlineGlobeAlt", "w-8 h-8 text-gray-500")}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Legacy Competitors</h4>
                  <div className="text-3xl font-bold text-gray-500 dark:text-gray-400">
                    {formatMetricValue(
                      getMetricValue(activeComparisonMetric, 'competitor'),
                      comparisonMetrics.find(m => m.id === activeComparisonMetric)?.unit || ''
                    )}
                    {comparisonMetrics.find(m => m.id === activeComparisonMetric)?.unit === '%' && '%'}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Industry Standard</div>
                </div>

                {/* Advantage Card */}
                <div className="text-center p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800">
                  <div className="flex justify-center mb-3">
                    {getIcon("BsShieldCheck", "w-8 h-8 text-teal-600")}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Your Advantage</h4>
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                    {getAdvantagePercentage(activeComparisonMetric) || 'Superior'}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Better by this margin</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== FAQ SECTION ==================== */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Hard Questions, Honest Answers
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Addressing what really matters when choosing a long-term partner.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                {getIcon("HiOutlineSearch", "w-5 h-5")}
              </div>
              <input
                type="text"
                ref={searchRef}
                placeholder="Search by topic (pricing, migration, performance)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                aria-label="Search FAQs"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Clear search"
                >
                  {getIcon("HiOutlineX", "w-5 h-5")}
                </button>
              )}
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-2 border rounded-xl transition-all duration-300 flex items-center gap-2 ${showFilters
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                aria-label="Toggle filters"
              >
                {getIcon("HiOutlineFilter", "w-4 h-4")}
                Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                aria-label="Sort FAQs"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="helpful">Most Helpful</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleExport}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                title="Export FAQs"
              >
                {getIcon("HiOutlineDownload", "w-4 h-4")}
              </button>
              <button
                onClick={handlePrint}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                title="Print FAQs"
              >
                {getIcon("HiOutlinePrinter", "w-4 h-4")}
              </button>
            </div>
          </div>

          {/* Expanded Filters Panel */}
          {showFilters && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Category</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveCategory('all')}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeCategory === 'all'
                        ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      All
                    </button>
                    {faqCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 flex items-center gap-1 ${activeCategory === category.id
                          ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                      >
                        {getIcon(category.icon, "w-3 h-3")}
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                  >
                    <option value="recent">Most Recent</option>
                    <option value="popular">Most Popular</option>
                    <option value="helpful">Most Helpful</option>
                  </select>
                </div>
              </div>
              {(activeCategory !== 'all' || sortBy !== 'recent') && (
                <div className="mt-4 text-right">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Results Count */}
          {searchQuery && (
            <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
              Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
            </div>
          )}

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-12">
            {filteredFaqs.map((faq, index) => {
              const isSaved = savedFaqs.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                >
                  <div
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFaq(index)}
                    aria-label={openFaq === index ? "Collapse answer" : "Expand answer"}
                  >
                    <div className="flex items-start gap-3 pr-4">
                      <div className="text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {getIcon(faq.icon, "w-5 h-5")}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {highlightText(faq.question, searchQuery)}
                        </div>
                        {faq.tags && faq.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {faq.tags.slice(0, 2).map((tag, idx) => (
                              <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSaveFaq(faq.id);
                        }}
                        className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-emerald-600' : 'text-gray-400 hover:text-emerald-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        aria-label={isSaved ? "Remove from saved" : "Save question"}
                      >
                        {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-emerald-600' : ''}`)}
                      </button>
                      <div className="text-emerald-500 dark:text-emerald-400">
                        {openFaq === index ? getIcon("HiOutlineChevronUp", "w-5 h-5") : getIcon("HiOutlineChevronDown", "w-5 h-5")}
                      </div>
                    </div>
                  </div>

                  {openFaq === index && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {highlightText(faq.answer, searchQuery)}
                      </p>
                      {faq.link && (
                        <Link
                          href={faq.link}
                          className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                        >
                          Learn more
                          {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                        </Link>
                      )}

                      {/* Helpful Voting */}
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Was this helpful?</span>
                          <button
                            onClick={() => handleHelpful(faq.id, true)}
                            className={`flex items-center gap-1 text-xs transition-colors duration-200 ${helpfulVotes[faq.id] === true
                              ? 'text-green-600 dark:text-green-400'
                              : 'text-gray-400 hover:text-green-600 dark:hover:text-green-400'
                              }`}
                          >
                            {getIcon("HiOutlineThumbUp", "w-4 h-4")}
                            Yes
                          </button>
                          <button
                            onClick={() => handleHelpful(faq.id, false)}
                            className={`flex items-center gap-1 text-xs transition-colors duration-200 ${helpfulVotes[faq.id] === false
                              ? 'text-red-600 dark:text-red-400'
                              : 'text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                              }`}
                          >
                            {getIcon("HiOutlineThumbDown", "w-4 h-4")}
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredFaqs.length === 0 && searchQuery && (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
              <div className="flex justify-center mb-4 text-gray-400">
                {getIcon("HiOutlineSearch", "w-12 h-12")}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Saved FAQs Section */}
          {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                {getIcon("HiOutlineBookmark", "w-5 h-5 text-emerald-600")}
                Your Saved Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-emerald-600 dark:text-emerald-400">
                        {getIcon(faq.icon, "w-5 h-5")}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                        <button
                          onClick={() => {
                            setActiveCategory(faq.category);
                            setSearchQuery('');
                            setOpenFaq(null);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 hover:underline"
                        >
                          View in {faqCategories.find(c => c.id === faq.category)?.name}
                        </button>
                      </div>
                      <button
                        onClick={() => handleSaveFaq(faq.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Remove from saved"
                      >
                        {getIcon("HiOutlineX", "w-4 h-4")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ==================== ADVANTAGE MODAL ==================== */}
        {showComparisonModal && selectedAdvantage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowComparisonModal(false)}
            role="dialog"
            aria-label="Advantage details"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-emerald-600 to-teal-600 p-6 rounded-t-3xl text-white">
                <div className="flex justify-between items-start">
                  <div className="text-4xl">
                    {getIcon(selectedAdvantage.icon, "w-10 h-10")}
                  </div>
                  <button
                    onClick={() => setShowComparisonModal(false)}
                    className="text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                    aria-label="Close modal"
                  >
                    {getIcon("HiOutlineX", "w-6 h-6")}
                  </button>
                </div>
                <h3 className="text-xl font-bold mt-3">{selectedAdvantage.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{selectedAdvantage.description}</p>

                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {getIcon("HiOutlineChip", "w-5 h-5 text-emerald-600")}
                    <span className="font-semibold text-gray-900 dark:text-white">Deep Dive Advantage</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedAdvantage.advantageDetail}</p>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    {getIcon("HiOutlineStar", "w-5 h-5 text-amber-500")}
                    <span className="font-semibold text-gray-900 dark:text-white">Customer Validation</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">"{selectedAdvantage.testimonial}"</p>
                </div>

                <Link
                  href={config?.contactLink || "/demo"}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Experience the Difference
                  {getIcon("HiOutlineArrowRight", "w-4 h-4")}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-emerald-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
              {getIcon("GiProfit", "w-6 h-6 text-emerald-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Ready to leave legacy limitations behind?"}
            </span>
            <Link
              href={config?.contactLink || "/roi-calculator"}
              className="px-6 py-3 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Calculate Your Savings"}
              {getIcon("HiOutlineArrowRight", "w-4 h-4")}
            </Link>
          </div>
        </div>
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        mark {
          background-color: #a7f3d0;
          color: #064e3b;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #065f46;
          color: #a7f3d0;
        }
        @media print {
          .no-print, button:not(.print-button), .bg-noise-pattern {
            display: none !important;
          }
          body {
            background: white;
          }
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default CompetitiveAdvantagesSection2;