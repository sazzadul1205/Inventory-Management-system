// frontend/WhyChooseUs/TechnologyInnovationSection/TechnologyInnovationSection1.jsx

/**
 * Technology Innovation Section 1 - Modern Technology Stack Hub
 * 
 * Unique design elements:
 * - Cloud-native architecture showcase
 * - Event-driven processing explanation
 * - RL-based inventory optimization
 * - Innovation lab with patent count
 * - Zero-trust security model
 * - Global latency metrics
 * 
 * All icons from react-icons (si, tb, hi, etc.)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - Technology and infrastructure focused set
import { BsShieldLockFill } from 'react-icons/bs';
import {
  FaAws,
  FaReact,
  FaNodeJs
} from 'react-icons/fa';
import {
  GiArtificialIntelligence,
  GiNetworkBars
} from 'react-icons/gi';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineChip,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
  HiOutlineDatabase,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineLightningBolt,
} from 'react-icons/hi';
import {
  SiKubernetes,
  SiApachekafka,
  SiTensorflow,
  SiGraphql,
  SiDocker,
  SiPostgresql,
  SiRedis
} from 'react-icons/si';
import {
  TbCloudComputing,
  TbChartInfographic,
  TbApi,
  TbDatabase,
  TbBrain,
  TbNetwork,
  TbShieldLock,
  TbChartBubble,
  TbCpu,
  TbServer,
  TbBrandGraphql
} from 'react-icons/tb';

const TechnologyInnovationSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({});

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const innovations = config?.innovations || [];
  const technologies = config?.technologies || [];
  const innovationLabText = config?.innovationLabText || "";
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const faqCategories = useMemo(() => config?.faqCategories || [], [config?.faqCategories]);

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
   * Supports multiple react-icon libraries
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      // HeroIcons
      HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineSearch, HiOutlineChip,
      HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineDatabase,
      HiOutlineCloud, HiOutlineShieldCheck, HiOutlineX, HiOutlineThumbUp, HiOutlineThumbDown,
      HiOutlineExternalLink, HiOutlineFilter, HiOutlineBookmark, HiOutlinePrinter, HiOutlineDownload,
      HiOutlineLightningBolt,
      
      TbCloudComputing, TbChartInfographic, TbApi, TbDatabase, TbBrain, TbNetwork,
      TbShieldLock, TbChartBubble, TbCpu, TbServer, TbBrandGraphql,
      // Simple Icons
      SiKubernetes, SiApachekafka, SiTensorflow, SiGraphql, SiDocker, SiPostgresql, SiRedis,
      // Font Awesome
      FaAws, FaReact, FaNodeJs,
      // Game Icons
      GiArtificialIntelligence, GiNetworkBars,
      // Bootstrap Icons
      BsShieldLockFill,
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
      localStorage.setItem('techFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedTechFaqs', JSON.stringify(newSaved));
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
    link.setAttribute('download', 'tech-faq-export.json');
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
   * Highlight search matches in text
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-slate-200 dark:bg-slate-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECT ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('techFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedTechFaqs');
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
      aria-label="Technology & Innovation"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-slate-50/30 to-transparent dark:from-slate-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 dark:bg-gray-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-slate-300/5 dark:bg-slate-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-slate-100 dark:bg-slate-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-slate-200 dark:border-slate-800'}`}
            aria-label="Technology badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-slate-700 dark:text-slate-300'}`}>
              {config?.badge?.text || "Built for Scale"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Modern'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-slate-600 to-gray-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Technology Stack'}
            </span>{' '}
            {config?.title?.suffix || 'Powering Inventory Intelligence'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "We've rebuilt inventory management from the ground up using cloud-native architecture, real-time processing, and AI-native intelligence. No legacy constraints. No technical debt. Just modern technology that works."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== TECHNOLOGY STACK ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Our Technology Stack
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Cloud-native, scalable, and built for real-time performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group"
              >
                <div className="flex justify-center mb-3 text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform">
                  {getIcon(tech.icon, "w-10 h-10")}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== KEY INNOVATIONS ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Key Innovations
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Proprietary technology that gives us our competitive edge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="text-slate-600 dark:text-slate-400 text-3xl">
                    {getIcon(innovation.icon, "w-8 h-8")}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{innovation.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{innovation.description}</p>
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/30 px-2 py-1 rounded-full">
                      {getIcon("HiOutlineCheckCircle", "w-3 h-3")}
                      <span>{innovation.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== INNOVATION LAB ==================== */}
        <div className="bg-linear-to-r from-slate-600 to-gray-600 rounded-2xl p-8 text-center text-white mb-16 shadow-xl">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              {getIcon("GiArtificialIntelligence", "w-10 h-10")}
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-3">Our Innovation Lab</h3>
          <p className="text-slate-200 max-w-2xl mx-auto mb-6 leading-relaxed">
            {innovationLabText || "We invest 20% of engineering time in R&D, exploring emerging technologies to solve tomorrow's inventory challenges. Our innovation lab has produced 15+ patents and counting, with 3 new products in private beta."}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              {getIcon("TbCpu", "w-4 h-4")}
              <span>15+ Patents</span>
            </div>
            <div className="flex items-center gap-2">
              {getIcon("HiOutlineSparkles", "w-4 h-4")}
              <span>20% R&D Time</span>
            </div>
            <div className="flex items-center gap-2">
              {getIcon("TbDatabase", "w-4 h-4")}
              <span>3 New Products</span>
            </div>
          </div>
        </div>

        {/* ==================== FAQ SECTION ==================== */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Technical Deep Dives
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Architecture, security, and API questions answered by our engineering team.
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
                placeholder="Search by topic (architecture, security, API)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
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
                  ? 'bg-slate-600 text-white border-slate-600'
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
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-slate-500 transition-all text-sm"
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
                        ? 'bg-linear-to-r from-slate-600 to-gray-600 text-white shadow-md'
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
                          ? 'bg-linear-to-r from-slate-600 to-gray-600 text-white shadow-md'
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
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-slate-500 transition-all"
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
                    className="text-sm text-slate-600 dark:text-slate-400 hover:underline"
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
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    aria-label={isExpanded ? "Collapse category" : "Expand category"}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-slate-600 dark:text-slate-400 text-2xl">
                        {getIcon(category.icon, "w-6 h-6")}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Technical specifications</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-400 dark:text-gray-500">{categoryFaqs.length} questions</span>
                      {isExpanded ? getIcon("HiOutlineChevronUp", "w-5 h-5 text-gray-400") : getIcon("HiOutlineChevronDown", "w-5 h-5 text-gray-400")}
                    </div>
                  </button>

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
                                <div className="text-slate-600 dark:text-slate-400 mt-0.5">
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
                                  className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-slate-600' : 'text-gray-400 hover:text-slate-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                                  aria-label={isSaved ? "Remove from saved" : "Save question"}
                                >
                                  {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-slate-600' : ''}`)}
                                </button>
                                <div className="text-slate-500 dark:text-slate-400">
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
                                    className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                                  >
                                    Read documentation
                                    {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                                  </Link>
                                )}

                                {/* Helpful Section */}
                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                  <div className="flex items-center gap-4">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Was this technical answer helpful?</span>
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No technical questions found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 text-slate-600 dark:text-slate-400 font-semibold text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Saved FAQs Section */}
          {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                {getIcon("HiOutlineBookmark", "w-5 h-5 text-slate-600")}
                Your Saved Technical Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-slate-600 dark:text-slate-400">
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
                          className="text-xs text-slate-600 dark:text-slate-400 mt-1 hover:underline"
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

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-slate-50 to-gray-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-slate-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900/30 rounded-full flex items-center justify-center">
              {getIcon("TbCpu", "w-6 h-6 text-slate-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Want to geek out on our architecture? Schedule a technical deep-dive."}
            </span>
            <Link
              href={config?.contactLink || "/technical-demo"}
              className="px-6 py-3 bg-linear-to-r from-slate-600 to-gray-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Talk to Engineering"}
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
          background-color: #cbd5e1;
          color: #0f172a;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #475569;
          color: #e2e8f0;
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

export default TechnologyInnovationSection1;