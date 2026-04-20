// frontend/WhyChooseUs/CompetitiveAdvantagesSection/CompetitiveAdvantagesSection3.jsx

/**
 * Competitive Advantages Section 3 - The "Intelligent Edge" Architecture Deep Dive
 * 
 * Unique design elements:
 * - Event-driven architecture visualization cards
 * - Headless API vs legacy comparison
 * - Autonomous optimization explanation
 * - Architecture tab focused on technical differentiation
 * - "No lock-in" guarantee highlight
 * 
 * All icons from react-icons (hi, md, tb, bs, si, gi, etc.)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - Technical and architecture-focused set
import { BsGraphUp, BsShieldCheck } from 'react-icons/bs';
import { FaProjectDiagram, FaRobot } from 'react-icons/fa';
import { GiProcessor, GiNetworkBars } from 'react-icons/gi';
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
  HiOutlineChip,
  HiOutlineLightningBolt,
  HiOutlineSwitchHorizontal,
  HiOutlineGlobeAlt,
  HiOutlineClock,
} from 'react-icons/hi';
import {
  MdOutlineAutoAwesome,
  MdOutlineHub,
  MdElectricBolt,
  MdVerified
} from 'react-icons/md';
import { SiOpensourceinitiative, SiTensorflow } from 'react-icons/si';
import {
  TbNetwork,
  TbHierarchy,
  TbMathFunction,
  TbWorldShare,
  TbApi,
  TbCloudComputing
} from 'react-icons/tb';

const CompetitiveAdvantagesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [activeDemoStep, setActiveDemoStep] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedAdvantage, setSelectedAdvantage] = useState(null);
  const [showArchitectureModal, setShowArchitectureModal] = useState(false);

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const architectureAdvantages = config?.architectureAdvantages || [];
  const faqCategories = useMemo(() => config?.faqCategories || [], [config?.faqCategories]); // config?.faqCategories || [];
  const comparisonDimensions = useMemo(() => config?.comparisonDimensions || [], [config?.comparisonDimensions]); // config?.comparisonDimensions || [];


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

  const groupedFaqs = useMemo(() => {
    return faqCategories.reduce((acc, category) => {
      acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
      return acc;
    }, {});
  }, [faqCategories, filteredFaqs]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports multiple react-icon libraries (hi, md, tb, si, bs, gi, fa)
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {

      HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineSearch, HiOutlineArrowRight,
      HiOutlineCheckCircle, HiOutlineTrendingUp, HiOutlineX, HiOutlineThumbUp, HiOutlineThumbDown,
      HiOutlineExternalLink, HiOutlineFilter, HiOutlineBookmark, HiOutlinePrinter, HiOutlineDownload,
      HiOutlineChip, HiOutlineLightningBolt, HiOutlineSwitchHorizontal, HiOutlineGlobeAlt, HiOutlineClock,

      TbNetwork, TbHierarchy, TbMathFunction, TbWorldShare, TbApi, TbCloudComputing,

      MdOutlineAutoAwesome, MdOutlineHub, MdElectricBolt, MdVerified,

      SiOpensourceinitiative, SiTensorflow,

      BsGraphUp, BsShieldCheck,

      GiProcessor, GiNetworkBars,

      FaProjectDiagram, FaRobot,
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
   * Toggle category expansion for FAQ grouping
   */
  const toggleCategory = useCallback((categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  }, []);

  /**
   * Handle helpful vote for FAQ
   */
  const handleHelpful = useCallback((faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('archFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedArchFaqs', JSON.stringify(newSaved));
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
    link.setAttribute('download', 'architecture-faq-export.json');
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
   * Clear all filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setActiveCategory('all');
    setSortBy('recent');
  }, []);

  /**
   * Get advantage badge text
   */
  const getAdvantageBadge = useCallback((dimensionId) => {
    const dim = comparisonDimensions.find(d => d.id === dimensionId);
    if (!dim) return 'Compare';
    if (dim.id === 'latency') return '500x Faster';
    if (dim.id === 'automation') return 'Fully Autonomous';
    if (dim.id === 'integration') return 'Vendor Neutral';
    if (dim.id === 'adaptability') return 'Self-Learning';
    return 'Superior';
  }, [comparisonDimensions]);

  /**
   * Highlight search matches in text
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-violet-200 dark:bg-violet-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // Auto-rotate demo steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemoStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  // ==================== LOCAL STORAGE EFFECT ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('archFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedArchFaqs');
    if (saved) setSavedFaqs(JSON.parse(saved));
  }, []);

  // Auto-expand categories when searching
  useEffect(() => {
    if (searchQuery) {
      const expanded = {};
      faqCategories.forEach(category => {
        expanded[category.id] = true;
      });
      setExpandedCategories(expanded);
    }
  }, [searchQuery, faqCategories]);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Competitive Advantages - Architecture Deep Dive"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-violet-50/30 to-transparent dark:from-violet-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-violet-300/5 dark:bg-violet-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-violet-100 dark:bg-violet-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-violet-200 dark:border-violet-800'}`}
            aria-label="Architecture badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-violet-700 dark:text-violet-300'}`}>
              {config?.badge?.text || "Unfair Advantage"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'The'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-violet-600 to-purple-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Intelligent Edge'}
            </span>{' '}
            {config?.title?.suffix || 'Over Legacy Systems'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "While others chase features, we've reimagined the foundation. From predictive automation to invisible infrastructure, discover the architectural advantages that make our platform the smartest choice for forward-thinking operations."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-violet-600 dark:text-violet-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== ARCHITECTURE ADVANTAGES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {architectureAdvantages.map((advantage, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedAdvantage(advantage);
                setShowArchitectureModal(true);
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 cursor-pointer border border-gray-100 dark:border-gray-700 group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedAdvantage(advantage) && setShowArchitectureModal(true)}
            >
              <div className="flex justify-center mb-4 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                {getIcon(advantage.icon, "w-10 h-10")}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">{advantage.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4 leading-relaxed">{advantage.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 px-3 py-1.5 rounded-full">
                  {getIcon("HiOutlineCheckCircle", "w-3 h-3")}
                  <span>{advantage.feature}</span>
                </div>
                {getIcon("HiOutlineArrowRight", "w-4 h-4 text-gray-400 group-hover:text-violet-600 transition-colors")}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== LIVE ARCHITECTURE DEMO CAROUSEL ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            See the Difference in Real-Time
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Watch how our event-driven architecture outperforms traditional polling.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="bg-linear-to-r from-violet-600 to-purple-600 p-4 text-white">
              <div className="flex items-center gap-2">
                {getIcon("FaProjectDiagram", "w-5 h-5")}
                <span className="font-semibold">Live Architecture Demo</span>
              </div>
            </div>
            <div className="p-6">
              <div className="relative h-64 bg-gray-900 rounded-xl overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Animated visualization based on active step */}
                  <div className="text-center">
                    {activeDemoStep === 0 && (
                      <div className="animate-pulse">
                        <div className="flex justify-center gap-8 mb-4">
                          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
                            {getIcon("TbWorldShare", "w-8 h-8")}
                          </div>
                          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white text-2xl">
                            {getIcon("GiNetworkBars", "w-8 h-8")}
                          </div>
                          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl">
                            {getIcon("MdElectricBolt", "w-8 h-8")}
                          </div>
                        </div>
                        <p className="text-white text-sm">Event triggers → Processed in &lt;50ms → Action executed</p>
                      </div>
                    )}
                    {activeDemoStep === 1 && (
                      <div>
                        <div className="flex justify-center gap-8 mb-4">
                          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white text-2xl">
                            {getIcon("HiOutlineClock", "w-8 h-8")}
                          </div>
                          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white text-2xl">
                            {getIcon("HiOutlineClock", "w-8 h-8")}
                          </div>
                          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white text-2xl opacity-50">
                            {getIcon("HiOutlineClock", "w-8 h-8")}
                          </div>
                        </div>
                        <p className="text-white text-sm">Legacy: Poll every 15 min → Batch → Delay</p>
                      </div>
                    )}
                    {activeDemoStep === 2 && (
                      <div>
                        <div className="flex justify-center gap-4 mb-4">
                          <div className="w-20 h-20 bg-violet-500 rounded-lg flex items-center justify-center text-white text-3xl font-bold">312%</div>
                          <div className="w-20 h-20 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-3xl font-bold">94%</div>
                          <div className="w-20 h-20 bg-amber-500 rounded-lg flex items-center justify-center text-white text-3xl font-bold">0</div>
                        </div>
                        <p className="text-white text-sm">ROI Improvement | Oversell Reduction | Lock-in</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  <div className={`h-1.5 rounded-full transition-all duration-300 ${activeDemoStep === 0 ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`} />
                  <div className={`h-1.5 rounded-full transition-all duration-300 ${activeDemoStep === 1 ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`} />
                  <div className={`h-1.5 rounded-full transition-all duration-300 ${activeDemoStep === 2 ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`} />
                </div>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                {activeDemoStep === 0 && "Event-driven mesh: Changes propagate instantly across your ecosystem."}
                {activeDemoStep === 1 && "Legacy polling creates data delays and sync gaps."}
                {activeDemoStep === 2 && "The result: better outcomes across every metric."}
              </p>
            </div>
          </div>
        </div>

        {/* ==================== COMPARISON DIMENSIONS ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Architecture Face-Off
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Compare the foundational differences that drive real-world outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {comparisonDimensions.map((dim, idx) => (
              <div
                key={dim.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-2 mb-3">
                  {idx === 0 && getIcon("GiNetworkBars", "w-5 h-5 text-violet-600")}
                  {idx === 1 && getIcon("FaRobot", "w-5 h-5 text-violet-600")}
                  {idx === 2 && getIcon("TbApi", "w-5 h-5 text-violet-600")}
                  {idx === 3 && getIcon("SiTensorflow", "w-5 h-5 text-violet-600")}
                  <h4 className="font-bold text-gray-900 dark:text-white">{dim.label}</h4>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">Our Platform</span>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{dim.us}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-gray-500">Legacy Systems</span>
                  <span className="text-sm text-gray-500">{dim.competitor}</span>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 px-2 py-0.5 rounded-full">
                    {getAdvantageBadge(dim.id)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== FAQ SECTION ==================== */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Deep Dive Questions
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Technical answers about our architecture, automation, and integration.
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
                placeholder="Search by topic (architecture, automation, API)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
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
                  ? 'bg-violet-600 text-white border-violet-600'
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
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 transition-all text-sm"
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
                        ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-md'
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
                          ? 'bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-md'
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
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 transition-all"
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
                    className="text-sm text-violet-600 dark:text-violet-400 hover:underline"
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

          {/* FAQ Category Accordion */}
          <div className="space-y-6 mb-12">
            {faqCategories.map((category) => {
              const categoryFaqs = groupedFaqs[category.id] || [];
              if (categoryFaqs.length === 0 && searchQuery) return null;
              if (categoryFaqs.length === 0 && !searchQuery) return null;

              const isExpanded = expandedCategories[category.id] || searchQuery !== '';

              return (
                <div key={category.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div
                    onClick={() => toggleCategory(category.id)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleCategory(category.id)}
                    aria-label={isExpanded ? "Collapse category" : "Expand category"}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-violet-600 dark:text-violet-400 text-2xl">
                        {getIcon(category.icon, "w-6 h-6")}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Technical deep dives</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-400 dark:text-gray-500">{categoryFaqs.length} questions</span>
                      {isExpanded ? getIcon("HiOutlineChevronUp", "w-5 h-5 text-gray-400") : getIcon("HiOutlineChevronDown", "w-5 h-5 text-gray-400")}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
                      {categoryFaqs.map((faq, idx) => {
                        const faqKey = `${category.id}-${idx}`;
                        const isSaved = savedFaqs.includes(faq.id);

                        return (
                          <div key={faqKey} className="p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                            <div
                              onClick={() => toggleFaq(faqKey)}
                              className="w-full text-left flex justify-between items-start cursor-pointer"
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFaq(faqKey)}
                            >
                              <div className="flex items-start gap-3 pr-4">
                                <div className="text-violet-600 dark:text-violet-400 mt-0.5">
                                  {getIcon(faq.icon, "w-5 h-5")}
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-gray-900 dark:text-white">
                                    {highlightText(faq.question, searchQuery)}
                                  </div>
                                  {faq.tags && faq.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {faq.tags.slice(0, 3).map((tag, tagIdx) => (
                                        <span key={tagIdx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
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
                                  className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-violet-600' : 'text-gray-400 hover:text-violet-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                                  aria-label={isSaved ? "Remove from saved" : "Save question"}
                                >
                                  {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-violet-600' : ''}`)}
                                </button>
                                <div className="text-violet-500 dark:text-violet-400">
                                  {openFaq === faqKey ? getIcon("HiOutlineChevronUp", "w-5 h-5") : getIcon("HiOutlineChevronDown", "w-5 h-5")}
                                </div>
                              </div>
                            </div>

                            {openFaq === faqKey && (
                              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {highlightText(faq.answer, searchQuery)}
                                </p>
                                {faq.link && (
                                  <Link
                                    href={faq.link}
                                    className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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
                className="mt-4 px-4 py-2 text-violet-600 dark:text-violet-400 font-semibold text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Saved FAQs Section */}
          {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                {getIcon("HiOutlineBookmark", "w-5 h-5 text-violet-600")}
                Your Technical Library
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-violet-600 dark:text-violet-400">
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
                          className="text-xs text-violet-600 dark:text-violet-400 mt-1 hover:underline"
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

        {/* ==================== ARCHITECTURE MODAL ==================== */}
        {showArchitectureModal && selectedAdvantage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowArchitectureModal(false)}
            role="dialog"
            aria-label="Architecture advantage details"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-violet-600 to-purple-600 p-6 rounded-t-3xl text-white">
                <div className="flex justify-between items-start">
                  <div className="text-4xl">
                    {getIcon(selectedAdvantage.icon, "w-10 h-10")}
                  </div>
                  <button
                    onClick={() => setShowArchitectureModal(false)}
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

                <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {getIcon("GiProcessor", "w-5 h-5 text-violet-600")}
                    <span className="font-semibold text-gray-900 dark:text-white">Under the Hood</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedAdvantage.advantageDetail}</p>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    {getIcon("MdVerified", "w-5 h-5 text-emerald-500")}
                    <span className="font-semibold text-gray-900 dark:text-white">Customer Validation</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">"{selectedAdvantage.testimonial}"</p>
                </div>

                <Link
                  href={config?.contactLink || "/architecture-demo"}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Request Architecture Deep Dive
                  {getIcon("HiOutlineArrowRight", "w-4 h-4")}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-violet-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
              {getIcon("SiTensorflow", "w-6 h-6 text-violet-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Ready to upgrade your inventory intelligence?"}
            </span>
            <Link
              href={config?.contactLink || "/architecture-demo"}
              className="px-6 py-3 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "See the Engine"}
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
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        mark {
          background-color: #ddd6fe;
          color: #4c1d95;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #5b21b6;
          color: #ddd6fe;
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

export default CompetitiveAdvantagesSection3;