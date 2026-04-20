// frontend/WhyChooseUs/GlobalReachSection/GlobalReachSection2.jsx

/**
 * Global Reach Section 2 - Borderless Commerce Operations Hub
 * 
 * Unique design elements:
 * - Multi-currency and multi-language capability showcases
 * - Global carrier integration list
 * - Tax compliance automation explanation
 * - Interactive region filter with office cards
 * - Office modal with detailed location info
 * - Localization features display
 * - International shipping integrations
 * 
 * All icons from react-icons (tb, hi, etc.)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - Global commerce and localization focused set
import {
  BsGlobe2,
  BsCurrencyDollar,
  BsTranslate
} from 'react-icons/bs';
import {
  FaGlobeAmericas,
  FaGlobeEurope,
  FaGlobeAsia,
  FaLanguage,
  FaMoneyBillWave,
  FaShippingFast
} from 'react-icons/fa';
import {
  GiWorld,
  GiEarthAmerica,
  GiEarthAsiaOceania
} from 'react-icons/gi';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlineUsers,
  HiOutlineArrowRight,
  HiOutlineClock,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineCurrencyDollar,
  HiOutlineTranslate,
  HiOutlineTruck,
  HiOutlineReceiptTax,
} from 'react-icons/hi';
import {
  MdVerified,
  MdOutlineLocationOn,
  MdOutlineLocalShipping
} from 'react-icons/md';
import {
  TbWorld,
  TbLanguage,
  TbCurrencyDollar,
  TbTruck,
  TbReceiptTax,
  TbHeadset,
  TbCloud
} from 'react-icons/tb';

const GlobalReachSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [activeRegion, setActiveRegion] = useState('all');
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showOfficeModal, setShowOfficeModal] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const regions = config?.regions || [];
  const languages = config?.languages || [];
  const currencies = config?.currencies || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const offices = useMemo(() => config?.offices || [], [config?.offices]);
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

  const filteredOffices = useMemo(() => {
    return offices.filter(office => {
      return activeRegion === 'all' || office.region === activeRegion;
    });
  }, [offices, activeRegion]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports multiple react-icon libraries
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineSearch, HiOutlineGlobeAlt,
      HiOutlineLocationMarker, HiOutlineUsers, HiOutlineArrowRight, HiOutlineClock,
      HiOutlineX, HiOutlineThumbUp, HiOutlineThumbDown, HiOutlineExternalLink,
      HiOutlineFilter, HiOutlineBookmark, HiOutlinePrinter, HiOutlineDownload,
      HiOutlineCurrencyDollar, HiOutlineTranslate, HiOutlineTruck, HiOutlineReceiptTax,
      TbWorld, TbLanguage, TbCurrencyDollar, TbTruck, TbReceiptTax, TbHeadset, TbCloud,
      FaGlobeAmericas, FaGlobeEurope, FaGlobeAsia, FaLanguage, FaMoneyBillWave, FaShippingFast,
      MdVerified, MdOutlineLocationOn, MdOutlineLocalShipping,
      GiWorld, GiEarthAmerica, GiEarthAsiaOceania,
      BsGlobe2, BsCurrencyDollar, BsTranslate,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineGlobeAlt className={className} />;
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
      localStorage.setItem('globalFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedGlobalFaqs', JSON.stringify(newSaved));
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
    link.setAttribute('download', 'global-faq-export.json');
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
    setActiveRegion('all');
    setSortBy('recent');
  }, []);

  /**
   * Get region display name
   */
  const getRegionDisplayName = useCallback((regionId) => {
    const regionMap = {
      'nam': 'North America',
      'emea': 'EMEA',
      'apac': 'Asia Pacific',
      'latam': 'Latin America'
    };
    return regionMap[regionId] || regionId;
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
        <mark key={i} className="bg-cyan-200 dark:bg-cyan-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECT ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('globalFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedGlobalFaqs');
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
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Global Commerce Operations"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-cyan-50/30 to-transparent dark:from-cyan-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-cyan-300/5 dark:bg-cyan-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-cyan-100 dark:bg-cyan-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-cyan-200 dark:border-cyan-800'}`}
            aria-label="Global badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-cyan-700 dark:text-cyan-300'}`}>
              {config?.badge?.text || "Borderless Commerce"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Global'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-cyan-600 to-blue-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Operations Hub'}
            </span>{' '}
            {config?.title?.suffix || 'Local Experience'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Run your global inventory operations from a single platform with localized support for currencies, languages, tax compliance, and shipping carriers across 75+ countries."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== INTERACTIVE MAP PREVIEW ==================== */}
        <div className="mb-12 bg-linear-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-cyan-100 dark:border-cyan-800">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-2">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                {getIcon("GiWorld", "w-8 h-8 text-cyan-600")}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Global Footprint</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Serving customers across 75+ countries with local offices worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regions.map((region, index) => (
              <button
                key={index}
                onClick={() => setActiveRegion(region.id === activeRegion ? 'all' : region.id)}
                className={`text-center p-3 rounded-xl transition-all duration-300 ${activeRegion === region.id
                  ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
              >
                <div className="flex justify-center mb-1 text-2xl">
                  {getIcon(region.icon, "w-6 h-6")}
                </div>
                <div className="text-sm font-semibold">{region.name}</div>
                <div className="text-xs opacity-80">{region.officeCount} offices</div>
              </button>
            ))}
          </div>
        </div>

        {/* ==================== GLOBAL CAPABILITIES ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group">
            <div className="flex justify-center mb-3 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
              {getIcon("HiOutlineTranslate", "w-8 h-8")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Multi-Language Support</h3>
            <div className="flex flex-wrap justify-center gap-1 mb-3">
              {languages.slice(0, 6).map((lang, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">{lang}</span>
              ))}
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">+{languages.length - 6}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Platform and support in 12+ languages</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group">
            <div className="flex justify-center mb-3 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
              {getIcon("HiOutlineCurrencyDollar", "w-8 h-8")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Multi-Currency Support</h3>
            <div className="flex flex-wrap justify-center gap-1 mb-3">
              {currencies.slice(0, 6).map((curr, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">{curr}</span>
              ))}
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">+{currencies.length - 6}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Manage inventory in 35+ local currencies</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group">
            <div className="flex justify-center mb-3 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
              {getIcon("HiOutlineTruck", "w-8 h-8")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Global Shipping</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Integrations with 50+ major global carriers</p>
            <div className="flex justify-center gap-2 text-xs text-gray-500">
              <span>FedEx</span>
              <span>•</span>
              <span>UPS</span>
              <span>•</span>
              <span>DHL</span>
              <span>•</span>
              <span>USPS</span>
              <span>•</span>
              <span>Canada Post</span>
            </div>
          </div>
        </div>

        {/* ==================== REGION FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveRegion('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeRegion === 'all'
              ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            All Locations
          </button>
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeRegion === region.id
                ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {getIcon(region.icon, "w-3 h-3")}
              {region.name}
            </button>
          ))}
        </div>

        {/* ==================== OFFICES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredOffices.map((office, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedOffice(office);
                setShowOfficeModal(true);
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700 group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedOffice(office) && setShowOfficeModal(true)}
            >
              <div className="h-32 bg-linear-to-r from-cyan-500 to-blue-600 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">{office.city}</div>
                  <div className="text-sm opacity-90">{office.country}</div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 rounded-full px-2 py-1 text-xs text-white">
                  {getRegionDisplayName(office.region)}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  {getIcon("MdOutlineLocationOn", "w-5 h-5 text-cyan-500 mt-0.5 shrink-0")}
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {office.address}
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  {getIcon("HiOutlineClock", "w-5 h-5 text-cyan-500 mt-0.5 shrink-0")}
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {office.hours}
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  {getIcon("HiOutlineUsers", "w-5 h-5 text-cyan-500 mt-0.5 shrink-0")}
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {office.teamSize} team members
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {office.languages?.slice(0, 2).join(', ')}{office.languages?.length > 2 ? ` +${office.languages.length - 2}` : ''}
                  </div>
                  <div className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for Offices */}
        {filteredOffices.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("HiOutlineGlobeAlt", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No offices in this region</h3>
            <p className="text-gray-500 dark:text-gray-400">Try selecting a different region to see our global presence.</p>
            <button
              onClick={() => setActiveRegion('all')}
              className="mt-4 px-4 py-2 text-cyan-600 dark:text-cyan-400 font-semibold text-sm hover:underline"
            >
              View all locations
            </button>
          </div>
        )}

        {/* ==================== FAQ SECTION ==================== */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Global Commerce FAQs
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Localization, shipping, and tax compliance questions answered.
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
                placeholder="Search by topic (currencies, shipping, taxes)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
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
                  ? 'bg-cyan-600 text-white border-cyan-600'
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
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
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
                        ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-md'
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
                          ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-md'
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
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 transition-all"
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
                    className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
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
                      <div className="text-cyan-600 dark:text-cyan-400 text-2xl">
                        {getIcon(category.icon, "w-6 h-6")}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Global operations</p>
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
                                <div className="text-cyan-600 dark:text-cyan-400 mt-0.5">
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
                                  className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-cyan-600' : 'text-gray-400 hover:text-cyan-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                                  aria-label={isSaved ? "Remove from saved" : "Save question"}
                                >
                                  {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-cyan-600' : ''}`)}
                                </button>
                                <div className="text-cyan-500 dark:text-cyan-400">
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
                                    className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                                  >
                                    Read documentation
                                    {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                                  </Link>
                                )}

                                {/* Helpful Section */}
                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                  <div className="flex items-center gap-4">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Was this global commerce answer helpful?</span>
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No global commerce questions found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 text-cyan-600 dark:text-cyan-400 font-semibold text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Saved FAQs Section */}
          {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                {getIcon("HiOutlineBookmark", "w-5 h-5 text-cyan-600")}
                Your Saved Global Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-cyan-600 dark:text-cyan-400">
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
                          className="text-xs text-cyan-600 dark:text-cyan-400 mt-1 hover:underline"
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

        {/* ==================== OFFICE MODAL ==================== */}
        {showOfficeModal && selectedOffice && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowOfficeModal(false)}
            role="dialog"
            aria-label="Office details"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-40 bg-linear-to-r from-cyan-500 to-blue-600 rounded-t-3xl">
                <div className="absolute inset-0 bg-black/20 rounded-t-3xl" />
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="text-2xl font-bold">{selectedOffice.city}</div>
                  <div className="text-sm">{selectedOffice.country}</div>
                </div>
                <button
                  onClick={() => setShowOfficeModal(false)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                  aria-label="Close modal"
                >
                  {getIcon("HiOutlineX", "w-6 h-6")}
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  {getIcon("MdOutlineLocationOn", "w-5 h-5 text-cyan-500 mt-0.5")}
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Address</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{selectedOffice.address}</div>
                    {selectedOffice.mapLink && (
                      <Link href={selectedOffice.mapLink} className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 text-xs mt-1 hover:underline">
                        View on Map
                        {getIcon("HiOutlineExternalLink", "w-3 h-3")}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  {getIcon("HiOutlineClock", "w-5 h-5 text-cyan-500 mt-0.5")}
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Business Hours</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.hours}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  {getIcon("HiOutlineUsers", "w-5 h-5 text-cyan-500 mt-0.5")}
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Team Size</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.teamSize} employees</div>
                  </div>
                </div>
                {selectedOffice.languages && selectedOffice.languages.length > 0 && (
                  <div className="flex items-start gap-3">
                    {getIcon("HiOutlineTranslate", "w-5 h-5 text-cyan-500 mt-0.5")}
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Languages</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.languages.join(', ')}</div>
                    </div>
                  </div>
                )}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href={`/contact?office=${selectedOffice.city}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Contact This Office
                    {getIcon("HiOutlineArrowRight", "w-4 h-4")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-cyan-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
              {getIcon("TbWorld", "w-6 h-6 text-cyan-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Ready to expand globally? Our team can help you scale across borders."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Global Team"}
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        mark {
          background-color: #a5f3fc;
          color: #155e75;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #0891b2;
          color: #cffafe;
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

export default GlobalReachSection2;