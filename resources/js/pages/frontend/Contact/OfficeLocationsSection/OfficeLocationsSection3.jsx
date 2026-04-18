// frontend/Contact/OfficeLocationsSection/OfficeLocationsSection3.jsx

/**
 * Office Locations Section Component - Multi-Tab Office Directory with Service Centers
 * A comprehensive office locations section featuring:
 * - Multi-tab interface (Office Locations, Service Centers, FAQs)
 * - Interactive office cards with team size and service tags
 * - Region and country filtering with visual indicators
 * - Grid/List view toggle for office display
 * - Service centers showcase with specialized capabilities
 * - Office detail modal with full contact and service information
 * - Search functionality across office locations, service centers, and FAQs
 * - Category-based FAQ accordion with expandable sections
 * - Save/bookmark favorite FAQs with localStorage persistence
 * - Helpful/Not helpful voting on FAQs
 * - Export office locations to JSON
 * - Print-friendly view for locations
 * - Corporate headquarters section
 * - Fully responsive grid layout with hover effects
 * - Dark mode compatible design
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineArrowRight,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineUserGroup,
  HiOutlineMap,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineQuestionMarkCircle,
  HiOutlineSupport,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineBuildingOffice2 } from "react-icons/hi2";

const OfficeLocationsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('name');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState('grid');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('offices');
  const [activeRegion, setActiveRegion] = useState('all');
  const [activeCountry, setActiveCountry] = useState('all');
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [showOfficeModal, setShowOfficeModal] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const regions = config?.regions || [];
  const countries = config?.countries || [];
  const headquarters = config?.headquarters || null;
  const serviceCenters = config?.serviceCenters || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const offices = useMemo(() => config?.offices || [], [config?.offices]);
  const faqCategories = useMemo(() => config?.faqCategories || [], [config?.faqCategories]);


  // ==================== FILTERED DATA ====================
  const filteredOffices = useMemo(() => {
    return offices
      .filter(office => {
        const matchesRegion = activeRegion === 'all' || office.region === activeRegion;
        const matchesCountry = activeCountry === 'all' || office.country === activeCountry;
        const matchesSearch = searchQuery === '' ||
          office.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          office.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          office.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (office.services && office.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesRegion && matchesCountry && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.city.localeCompare(b.city);
        if (sortBy === 'country') return a.country.localeCompare(b.country);
        if (sortBy === 'teamSize') return (b.teamSize || 0) - (a.teamSize || 0);
        return 0;
      });
  }, [offices, activeRegion, activeCountry, searchQuery, sortBy]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchQuery === '' ||
        faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesSearch;
    });
  }, [faqs, searchQuery]);

  const groupedFaqs = useMemo(() => {
    return faqCategories.reduce((acc, category) => {
      acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
      return acc;
    }, {});
  }, [faqCategories, filteredFaqs]);


  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown,
      HiOutlineChevronUp,
      HiOutlineSearch,
      HiOutlineLocationMarker,
      HiOutlineMail,
      HiOutlinePhone,
      HiOutlineClock,
      HiOutlineGlobeAlt,
      HiOutlineArrowRight,
      HiOutlineX,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineExternalLink,
      HiOutlineFilter,
      HiOutlineBookmark,
      HiOutlinePrinter,
      HiOutlineDownload,
      HiOutlineUserGroup,
      HiOutlineMap,
      HiOutlineSparkles,
      HiOutlineTruck,
      HiOutlineQuestionMarkCircle,
      HiOutlineBuildingOffice2,
      HiOutlineSupport,
      HiOutlineBuildingOffice,
    };
    const IconComponent = icons[iconName] || HiOutlineLocationMarker;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle FAQ accordion item
   */
  const toggleFaq = useCallback((key) => {
    setOpenFaq(prev => prev === key ? null : key);
  }, []);

  /**
   * Toggle category expansion
   */
  const toggleCategory = useCallback((categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  }, []);

  /**
   * Handle helpful/unhelpful vote
   */
  const handleHelpful = useCallback((faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('officeFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  }, []);

  /**
   * Handle save/unsave FAQ bookmark
   */
  const handleSaveFaq = useCallback((faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedOfficeFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Export office locations to JSON
   */
  const handleExport = useCallback(() => {
    const exportData = filteredOffices.map(office => ({
      city: office.city,
      country: office.country,
      region: office.region,
      address: office.address,
      phone: office.phone,
      email: office.email,
      hours: office.hours,
      services: office.services,
      teamSize: office.teamSize,
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'office-locations-export.json');
    linkElement.click();
  }, [filteredOffices]);

  /**
   * Print locations
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /**
   * Clear search and filters
   */
  const clearFilters = useCallback(() => {
    setActiveRegion('all');
    setActiveCountry('all');
    setSearchQuery('');
    setSortBy('name');
  }, []);

  /**
   * Highlight search matches in text
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-rose-200 dark:bg-rose-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('officeFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedOfficeFaqs');
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
      className="relative py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      role="region"
      aria-label="Office Locations Knowledge Base"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-rose-50/30 to-transparent dark:from-rose-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 dark:bg-pink-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-rose-300/5 dark:bg-rose-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-rose-100 dark:bg-rose-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-rose-200 dark:border-rose-800'}`}
            aria-label="Locations badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-rose-700 dark:text-rose-300'}`}>
              {config?.badge?.text || "Global Network"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Our'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-rose-600 to-pink-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Global Footprint'}
            </span>{' '}
            {config?.title?.suffix || 'Serving You Worldwide'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "With strategic offices and service centers across the globe, we deliver localized support and expertise wherever you need us. Find your nearest location and connect with our team."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-rose-600 dark:text-rose-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-rose-600 dark:text-rose-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('offices')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'offices'
              ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineBuildingOffice", "w-4 h-4")}
            Office Locations
          </button>
          <button
            onClick={() => setActiveTab('service-centers')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'service-centers'
              ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineTruck", "w-4 h-4")}
            Service Centers
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'faq'
              ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineQuestionMarkCircle", "w-4 h-4")}
            FAQs
          </button>
        </div>

        {/* ==================== OFFICES SECTION ==================== */}
        {activeTab === 'offices' && (
          <>
            {/* Interactive Map Preview */}
            <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="bg-linear-to-r from-rose-600 to-pink-600 p-4 text-white">
                <div className="flex items-center gap-2">
                  {getIcon("HiOutlineMap", "w-5 h-5")}
                  <span className="font-semibold">Global Presence Map</span>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setActiveRegion(region.id)}
                      className={`text-center p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${activeRegion === region.id
                        ? 'bg-linear-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 ring-2 ring-rose-500'
                        : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-rose-50 dark:hover:bg-rose-900/20'
                        }`}
                    >
                      <div className="text-3xl mb-2">{region.icon}</div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{region.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{region.officeCount} offices</div>
                    </button>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setActiveRegion('all')}
                    className="text-sm text-rose-600 dark:text-rose-400 hover:underline"
                  >
                    View All Locations
                  </button>
                </div>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative" ref={searchRef}>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-5 h-5")}
                </div>
                <input
                  type="text"
                  placeholder="Search by city, country, address, or services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    {getIcon("HiOutlineX", "w-5 h-5")}
                  </button>
                )}
              </div>
              <div className="flex gap-2">
                <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                  <button
                    onClick={() => setActiveView('grid')}
                    className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${activeView === 'grid'
                      ? 'bg-white dark:bg-gray-700 shadow-sm text-rose-600'
                      : 'text-gray-500'
                      }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setActiveView('list')}
                    className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${activeView === 'list'
                      ? 'bg-white dark:bg-gray-700 shadow-sm text-rose-600'
                      : 'text-gray-500'
                      }`}
                  >
                    List
                  </button>
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-3 border rounded-xl transition-all duration-300 flex items-center gap-2 ${showFilters
                    ? 'bg-rose-600 text-white border-rose-600'
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIcon("HiOutlineFilter", "w-4 h-4")}
                  Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
                >
                  <option value="name">Sort by City</option>
                  <option value="country">Sort by Country</option>
                  <option value="teamSize">Sort by Team Size</option>
                </select>
                <button
                  onClick={handleExport}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  title="Export Locations"
                >
                  {getIcon("HiOutlineDownload", "w-4 h-4")}
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  title="Print Locations"
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Region</label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setActiveRegion('all')}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeRegion === 'all'
                          ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-md'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                      >
                        All
                      </button>
                      {regions.map((region) => (
                        <button
                          key={region.id}
                          onClick={() => setActiveRegion(region.id)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 flex items-center gap-1 ${activeRegion === region.id
                            ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-md'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                        >
                          <span>{region.icon}</span>
                          {region.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Country</label>
                    <select
                      value={activeCountry}
                      onChange={(e) => setActiveCountry(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
                    >
                      <option value="all">All Countries</option>
                      {countries.map((country, idx) => (
                        <option key={idx} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {(activeRegion !== 'all' || activeCountry !== 'all' || searchQuery !== '' || sortBy !== 'name') && (
                  <div className="mt-4 text-right">
                    <button
                      onClick={clearFilters}
                      className="text-sm text-rose-600 dark:text-rose-400 hover:underline"
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
                Found {filteredOffices.length} location{filteredOffices.length !== 1 ? 's' : ''} for "{searchQuery}"
              </div>
            )}

            {/* Offices Grid/List View */}
            {activeView === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {filteredOffices.map((office, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedOffice(office);
                      setShowOfficeModal(true);
                    }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer group"
                  >
                    <div className={`h-32 ${office.image || 'bg-linear-to-r from-rose-500 to-pink-600'} relative`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-xl font-bold">{office.city}</div>
                        <div className="text-xs opacity-90 flex items-center gap-1">
                          <span>{office.flag}</span>
                          {office.country}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
                        {regions.find(r => r.id === office.region)?.name || office.region}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="text-rose-500 dark:text-rose-400 mt-0.5 shrink-0">
                          {getIcon("HiOutlineLocationMarker", "w-4 h-4")}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {office.address}
                        </div>
                      </div>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="text-rose-500 dark:text-rose-400 mt-0.5 shrink-0">
                          {getIcon("HiOutlinePhone", "w-4 h-4")}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {office.phone}
                        </div>
                      </div>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="text-rose-500 dark:text-rose-400 mt-0.5 shrink-0">
                          {getIcon("HiOutlineMail", "w-4 h-4")}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {office.email}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {office.services?.slice(0, 3).map((service, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-600 rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          {getIcon("HiOutlineUserGroup", "w-3 h-3")}
                          <span>{office.teamSize} team members</span>
                        </div>
                        <div className="text-rose-600 dark:text-rose-400 text-sm font-semibold group-hover:underline">
                          View Details →
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4 mb-16">
                {filteredOffices.map((office, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedOffice(office);
                      setShowOfficeModal(true);
                    }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 border border-gray-100 dark:border-gray-700 hover:border-rose-200 dark:hover:border-rose-800"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl">{office.flag}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{office.city}, {office.country}</h3>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{office.address}</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {office.services?.slice(0, 2).map((service, idx) => (
                            <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-gray-600 dark:text-gray-400">{office.phone}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{office.teamSize} employees</div>
                      </div>
                      {getIcon("HiOutlineArrowRight", "w-5 h-5 text-gray-400")}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {filteredOffices.length === 0 && (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon("HiOutlineLocationMarker", "w-12 h-12")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No locations found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 text-rose-600 dark:text-rose-400 font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </>
        )}

        {/* ==================== SERVICE CENTERS SECTION ==================== */}
        {activeTab === 'service-centers' && (
          <div className="mb-16">
            <div className="bg-linear-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl p-6 mb-8 border border-rose-100 dark:border-rose-800">
              <div className="flex items-center gap-3 mb-4">
                {getIcon("HiOutlineTruck", "w-8 h-8 text-rose-600")}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Service & Distribution Centers</h3>
                  <p className="text-gray-600 dark:text-gray-400">Our global network of service and distribution centers</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCenters.map((center, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{center.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{center.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {getIcon("HiOutlineLocationMarker", "w-4 h-4")}
                        {center.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {getIcon("HiOutlineClock", "w-4 h-4")}
                        {center.hours}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {getIcon("HiOutlinePhone", "w-4 h-4")}
                        {center.phone}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {center.services.map((service, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-600 rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                      {center.mapLink && (
                        <Link href={center.mapLink} className="inline-flex items-center gap-1 text-rose-600 dark:text-rose-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group">
                          View on Map
                          {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== FAQ SECTION ==================== */}
        {activeTab === 'faq' && (
          <div className="max-w-6xl mx-auto">
            {/* FAQ Search */}
            <div className="mb-6">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-5 h-5")}
                </div>
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* FAQ Categories Accordion */}
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
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-rose-600 dark:text-rose-400 text-2xl">
                          {getIcon(category.icon, "w-6 h-6")}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
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
                                  <div className="text-rose-600 dark:text-rose-400 mt-0.5">
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
                                    className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-rose-600' : 'text-gray-400 hover:text-rose-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                      }`}
                                  >
                                    {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-rose-600' : ''}`)}
                                  </button>
                                  <div className="text-rose-500 dark:text-rose-400">
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
                                      className="inline-flex items-center gap-1 text-rose-600 dark:text-rose-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                                    >
                                      Learn more
                                      {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                                    </Link>
                                  )}

                                  {/* Helpful Section */}
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

            {/* FAQ Empty State */}
            {filteredFaqs.length === 0 && searchQuery && (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-12 h-12")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search to find what you're looking for.</p>
              </div>
            )}

            {/* Saved FAQs Section */}
            {savedFaqs.length > 0 && searchQuery === '' && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("HiOutlineBookmark", "w-5 h-5 text-rose-600")}
                  Saved Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="text-rose-600 dark:text-rose-400">
                          {getIcon(faq.icon, "w-5 h-5")}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                          <button
                            onClick={() => {
                              setSearchQuery(faq.question.substring(0, 30));
                              setOpenFaq(null);
                            }}
                            className="text-xs text-rose-600 dark:text-rose-400 mt-1 hover:underline"
                          >
                            View Answer
                          </button>
                        </div>
                        <button
                          onClick={() => handleSaveFaq(faq.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors duration-200"
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
        )}

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
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative h-40 ${selectedOffice.image || 'bg-linear-to-r from-rose-500 to-pink-600'} rounded-t-3xl`}>
                <div className="absolute inset-0 bg-black/20 rounded-t-3xl" />
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="text-2xl font-bold">{selectedOffice.city}</div>
                  <div className="text-sm flex items-center gap-1">
                    <span>{selectedOffice.flag}</span>
                    {selectedOffice.country}
                  </div>
                </div>
                <button
                  onClick={() => setShowOfficeModal(false)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                >
                  {getIcon("HiOutlineX", "w-5 h-5")}
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-rose-500 dark:text-rose-400 mt-0.5">
                    {getIcon("HiOutlineLocationMarker", "w-5 h-5")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Address</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.address}</div>
                    {selectedOffice.mapLink && (
                      <Link href={selectedOffice.mapLink} className="inline-flex items-center gap-1 text-rose-600 dark:text-rose-400 text-xs mt-1 hover:underline">
                        View on Map
                        {getIcon("HiOutlineExternalLink", "w-3 h-3")}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-rose-500 dark:text-rose-400 mt-0.5">
                    {getIcon("HiOutlinePhone", "w-5 h-5")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Phone</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-rose-500 dark:text-rose-400 mt-0.5">
                    {getIcon("HiOutlineMail", "w-5 h-5")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-rose-500 dark:text-rose-400 mt-0.5">
                    {getIcon("HiOutlineClock", "w-5 h-5")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Business Hours</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.hours}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-rose-500 dark:text-rose-400 mt-0.5">
                    {getIcon("HiOutlineUserGroup", "w-5 h-5")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Team Size</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedOffice.teamSize} employees</div>
                  </div>
                </div>
                {selectedOffice.services && (
                  <div className="flex items-start gap-3">
                    <div className="text-rose-500 dark:text-rose-400 mt-0.5">
                      {getIcon("HiOutlineSparkles", "w-5 h-5")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Services</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedOffice.services.map((service, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-600 rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href={`/contact?office=${selectedOffice.city}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Contact This Office
                    {getIcon("HiOutlineArrowRight", "w-4 h-4")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CORPORATE HEADQUARTERS ==================== */}
        {headquarters && (
          <div className="bg-linear-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 mb-12 border border-rose-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              {getIcon("HiOutlineBuildingOffice", "w-8 h-8 text-rose-600")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Corporate Headquarters</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Address:</span> {headquarters.address}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Phone:</span> {headquarters.phone}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Email:</span> {headquarters.email}
                </p>
              </div>
              <div className="text-right">
                <Link
                  href="/corporate"
                  className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold hover:gap-3 transition-all duration-200 group"
                >
                  Corporate Information
                  {getIcon("HiOutlineArrowRight", "w-4 h-4 group-hover:translate-x-0.5 transition-transform")}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CONTACT CTA ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-rose-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineGlobeAlt", "w-6 h-6 text-rose-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Can't find what you're looking for? Contact our global support team."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Us"}
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== GUARANTEE ==================== */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("HiOutlineGlobeAlt", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "Global presence with local expertise — we're here to serve you wherever you are."}
              </span>
            </div>
          </div>
        )}
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
          background-color: #fef08a;
          color: #1e293b;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #854d0e;
          color: #fef9c3;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media print {
          .no-print, button:not(.print-button), .bg-noise-pattern {
            display: none !important;
          }
          body {
            background: white;
          }
          .bg-white, .dark\\:bg-gray-800 {
            background: white !important;
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

export default OfficeLocationsSection3;