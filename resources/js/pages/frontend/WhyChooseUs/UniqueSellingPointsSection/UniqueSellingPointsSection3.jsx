// frontend/WhyChooseUs/UniqueSellingPointsSection/UniqueSellingPointsSection3.jsx

/**
 * Unique Selling Points Section 3 - The "Evidence Stack" Proof Hub
 * 
 * Unique design elements:
 * - Third-party verified metrics with methodology transparency
 * - Video case study gallery
 * - SLA guarantee with service credit explanation
 * - "Proof not promises" credibility focus
 * - Customer testimonial carousel with autoplay
 * 
 * All icons from react-icons (tb, md, fa, si, hi, etc.)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - Evidence and proof focused set
import { BsGraphUp, BsShieldCheck } from 'react-icons/bs';
import { FaQuoteLeft, FaAward, FaChartLine } from 'react-icons/fa';
import { GiCheckMark, GiMagnifyingGlass } from 'react-icons/gi';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineUsers,
  HiOutlineChip,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlineQuestionMarkCircle,
  HiOutlineClock,
  HiOutlineShieldCheck,
} from 'react-icons/hi';
import { MdOutlineVerified, MdOutlineSecurity, MdOutlineAnalytics } from 'react-icons/md';
import { SiGoogleanalytics, SiTensorflow } from 'react-icons/si';
import {
  TbMathAvg,
  TbClock,
  TbChartBar,
  TbClockFilled,
  TbUsers,
  TbFileCheck,
  TbBuildingWarehouse,
  TbCertificate
} from 'react-icons/tb';

const UniqueSellingPointsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('usps');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUsp, setSelectedUsp] = useState(null);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showSlaDetails, setShowSlaDetails] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [autoplayTestimonials, setAutoplayTestimonials] = useState(true);

  // ==================== REFS ====================
  const searchRef = useRef(null);
  const intervalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const usps = config?.usps || [];
  const stats = config?.stats || [];
  const videos = config?.videos || [];
  const metrics = config?.metrics || [];
  const testimonials = config?.testimonials || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const faqCategories = useMemo(() => config?.faqCategories || [], [config?.faqCategories]); // config?.faqCategories || [];

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

      HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineSearch, HiOutlineSparkles,
      HiOutlineChartBar, HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineUsers,
      HiOutlineChip, HiOutlineX, HiOutlineThumbUp, HiOutlineThumbDown, HiOutlineExternalLink,
      HiOutlineFilter, HiOutlineBookmark, HiOutlinePrinter, HiOutlineDownload, HiOutlineStar,
      HiOutlinePlay, HiOutlineQuestionMarkCircle, HiOutlineClock, HiOutlineShieldCheck,

      TbMathAvg, TbClock, TbChartBar, TbClockFilled, TbUsers, TbFileCheck,
      TbBuildingWarehouse, TbCertificate,

      MdOutlineVerified, MdOutlineSecurity, MdOutlineAnalytics,

      FaQuoteLeft, FaAward, FaChartLine,

      SiGoogleanalytics, SiTensorflow,

      GiCheckMark, GiMagnifyingGlass,

      BsGraphUp, BsShieldCheck,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineSparkles className={className} />;
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
      localStorage.setItem('uspFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedUspFaqs', JSON.stringify(newSaved));
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
    link.setAttribute('download', 'usp-faq-export.json');
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
   * Next testimonial in carousel
   */
  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  /**
   * Previous testimonial in carousel
   */
  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  /**
   * Highlight search matches in text
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-amber-200 dark:bg-amber-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== AUTO-PLAY TESTIMONIALS EFFECT ====================
  useEffect(() => {
    if (autoplayTestimonials && testimonials.length > 0 && activeTab === 'testimonials') {
      intervalRef.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplayTestimonials, testimonials.length, activeTab]);

  // ==================== LOCAL STORAGE EFFECT ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('uspFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedUspFaqs');
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
      aria-label="Unique Selling Points - Evidence Stack"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-amber-50/30 to-transparent dark:from-amber-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-amber-300/5 dark:bg-amber-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-amber-100 dark:bg-amber-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-amber-200 dark:border-amber-800'}`}
            aria-label="Evidence badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-amber-700 dark:text-amber-300'}`}>
              {config?.badge?.text || "Proof Not Promises"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'The'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-amber-600 to-orange-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Evidence Stack'}
            </span>{' '}
            {config?.title?.suffix || 'Behind Our Claims'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Every feature we ship, every metric we claim, every promise we make is backed by real data, third-party validation, and thousands of successful implementations. Here's the proof."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('usps')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'usps'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("GiMagnifyingGlass", "w-4 h-4")}
            Verified Claims
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'metrics'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("FaChartLine", "w-4 h-4")}
            By the Numbers
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'testimonials'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("FaQuoteLeft", "w-4 h-4")}
            Customer Proof
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'faq'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineQuestionMarkCircle", "w-4 h-4")}
            Methodology FAQs
          </button>
        </div>

        {/* ==================== USPS TAB (VERIFIED CLAIMS) ==================== */}
        {activeTab === 'usps' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {usps.map((usp, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedUsp(usp);
                  setShowModal(true);
                }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 cursor-pointer border border-gray-100 dark:border-gray-700 group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedUsp(usp) && setShowModal(true)}
              >
                <div className="flex justify-center mb-4 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  {getIcon(usp.icon, "w-10 h-10")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">{usp.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4 leading-relaxed line-clamp-2">{usp.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-3 py-1.5 rounded-full">
                    {getIcon("HiOutlineCheckCircle", "w-3 h-3")}
                    <span>{usp.benefit}</span>
                  </div>
                  {getIcon("HiOutlineArrowRight", "w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors")}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== METRICS TAB ==================== */}
        {activeTab === 'metrics' && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group">
                  <div className="flex justify-center mb-3 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                    {getIcon(metric.icon, "w-8 h-8")}
                  </div>
                  <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-1">{metric.value}</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{metric.label}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{metric.description}</p>
                </div>
              ))}
            </div>

            {/* SLA Guarantee Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <button
                onClick={() => setShowSlaDetails(!showSlaDetails)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-amber-600">{getIcon("BsShieldCheck", "w-8 h-8")}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">99.99% Uptime SLA with Service Credits</h3>
                    <p className="text-sm text-gray-500">Third-party verified • Historical compliance</p>
                  </div>
                </div>
                <div className="text-amber-500">
                  {showSlaDetails ? getIcon("HiOutlineChevronUp", "w-5 h-5") : getIcon("HiOutlineChevronDown", "w-5 h-5")}
                </div>
              </button>
              {showSlaDetails && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      {getIcon("TbCertificate", "w-5 h-5 text-green-600")}
                      <span className="font-semibold text-gray-900 dark:text-white">Guaranteed Terms</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">If we fall below 99.99% in any calendar month (excluding planned maintenance), we automatically credit 10% of your monthly fee per additional 0.01% below threshold. In 3 years, we've paid credits exactly twice—both for under 15 minutes.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">99.99%</div>
                      <div className="text-gray-500">Historical Uptime (2023)</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{'< 4 hrs/year'}</div>
                      <div className="text-gray-500">Planned Maintenance</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">14 days</div>
                      <div className="text-gray-500">Maintenance Notice</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== TESTIMONIALS TAB ==================== */}
        {activeTab === 'testimonials' && (
          <div className="mb-16">
            {/* Testimonial Carousel */}
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700">
                <div className="flex justify-center mb-4 text-amber-600 dark:text-amber-400 text-5xl">
                  {getIcon(testimonials[activeTestimonial]?.icon || "FaQuoteLeft", "w-10 h-10")}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-lg mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial]?.quote}"
                </p>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{testimonials[activeTestimonial]?.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonials[activeTestimonial]?.role}</div>
                  <div className="text-xs text-amber-600 dark:text-amber-400 mt-1 font-semibold">{testimonials[activeTestimonial]?.result}</div>
                </div>
              </div>

              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                {getIcon("HiOutlineChevronUp", "w-5 h-5 rotate-270")}
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Next testimonial"
              >
                {getIcon("HiOutlineChevronUp", "w-5 h-5 rotate-90")}
              </button>

              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveTestimonial(idx);
                      setAutoplayTestimonials(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'w-6 bg-amber-600' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setAutoplayTestimonials(!autoplayTestimonials)}
                className="absolute bottom-0 right-0 text-xs text-gray-400 dark:text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                aria-label={autoplayTestimonials ? "Pause autoplay" : "Play autoplay"}
              >
                {autoplayTestimonials ? 'Pause' : 'Play'}
              </button>
            </div>

            {/* Video Case Studies */}
            {videos.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                  Watch Customer Stories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedVideo(video);
                        setShowVideoModal(true);
                      }}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer group border border-gray-100 dark:border-gray-700"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedVideo(video) && setShowVideoModal(true)}
                    >
                      <div className="relative h-48 bg-linear-to-r from-amber-500 to-orange-600 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                          {getIcon("HiOutlinePlay", "w-8 h-8 text-white")}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{video.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{video.author} • {video.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== FAQ TAB ==================== */}
        {activeTab === 'faq' && (
          <>
            {/* Search and Action Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative" ref={searchRef}>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-5 h-5")}
                </div>
                <input
                  type="text"
                  placeholder="Search methodology FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-3 border rounded-xl transition-all duration-300 flex items-center gap-2 ${showFilters
                    ? 'bg-amber-600 text-white border-amber-600'
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
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                  aria-label="Sort FAQs"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="helpful">Most Helpful</option>
                </select>
                <button
                  onClick={handleExport}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  title="Export FAQs"
                >
                  {getIcon("HiOutlineDownload", "w-4 h-4")}
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
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
                          ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-md'
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
                            ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-md'
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
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
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
                      className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
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
                        <div className="text-amber-600 dark:text-amber-400 text-2xl">
                          {getIcon(category.icon, "w-6 h-6")}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Methodology & verification details</p>
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
                                  <div className="text-amber-600 dark:text-amber-400 mt-0.5">
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
                                    className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-amber-600' : 'text-gray-400 hover:text-amber-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                      }`}
                                    aria-label={isSaved ? "Remove from saved" : "Save question"}
                                  >
                                    {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-amber-600' : ''}`)}
                                  </button>
                                  <div className="text-amber-500 dark:text-amber-400">
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
                                      className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                                    >
                                      Read full methodology
                                      {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                                    </Link>
                                  )}

                                  {/* Helpful Section */}
                                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4">
                                      <span className="text-xs text-gray-500 dark:text-gray-400">Was this methodology explanation helpful?</span>
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No methodology questions found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 text-amber-600 dark:text-amber-400 font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Saved FAQs Section */}
            {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("HiOutlineBookmark", "w-5 h-5 text-amber-600")}
                  Your Saved Methodology Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="text-amber-600 dark:text-amber-400">
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
                            className="text-xs text-amber-600 dark:text-amber-400 mt-1 hover:underline"
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
          </>
        )}

        {/* ==================== USP MODAL ==================== */}
        {showModal && selectedUsp && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
            role="dialog"
            aria-label="Claim details"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-amber-600 to-orange-600 p-6 rounded-t-3xl text-white">
                <div className="flex justify-between items-start">
                  <div className="text-4xl">
                    {getIcon(selectedUsp.icon, "w-10 h-10")}
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                    aria-label="Close modal"
                  >
                    {getIcon("HiOutlineX", "w-6 h-6")}
                  </button>
                </div>
                <h3 className="text-xl font-bold mt-3">{selectedUsp.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{selectedUsp.description}</p>

                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {getIcon("HiOutlineStar", "w-5 h-5 text-amber-500")}
                    <span className="font-semibold text-gray-900 dark:text-white">Key Benefit</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedUsp.benefit}</p>
                </div>

                {selectedUsp.detail && (
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      {getIcon("GiMagnifyingGlass", "w-5 h-5 text-amber-600")}
                      <span className="font-semibold text-gray-900 dark:text-white">Methodology</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{selectedUsp.detail}</p>
                  </div>
                )}

                <Link
                  href={config?.contactLink || "/demo"}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  See the Evidence
                  {getIcon("HiOutlineArrowRight", "w-4 h-4")}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setShowVideoModal(false)}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close video"
              >
                {getIcon("HiOutlineX", "w-6 h-6")}
              </button>
              <div className="bg-black rounded-2xl overflow-hidden">
                <div className="aspect-video flex items-center justify-center bg-gray-900">
                  <video
                    src={selectedVideo.url}
                    controls
                    autoPlay
                    className="w-full h-full"
                    poster={selectedVideo.thumbnail}
                  />
                </div>
                <div className="p-4 bg-gray-900">
                  <h3 className="text-white font-bold">{selectedVideo.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{selectedVideo.author} • {selectedVideo.company}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== HIGHLIGHT BANNER ==================== */}
        <div className="bg-linear-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white mb-12 shadow-xl">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              {getIcon("TbCertificate", "w-8 h-8")}
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-3">Put to the Test</h3>
          <p className="text-amber-100 max-w-2xl mx-auto leading-relaxed">
            {config?.highlightText || "We're so confident in our claims that we put them in writing—with service credits if we miss. No fine print, no gotchas, just accountable performance."}
          </p>
        </div>

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-amber-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
              {getIcon("GiMagnifyingGlass", "w-6 h-6 text-amber-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "See the evidence for yourself. Book a data-driven demo."}
            </span>
            <Link
              href={config?.contactLink || "/demo"}
              className="px-6 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "See the Proof"}
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
        .rotate-90 {
          transform: rotate(90deg);
        }
        .rotate-270 {
          transform: rotate(270deg);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        mark {
          background-color: #fde68a;
          color: #78350f;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #b45309;
          color: #fef3c7;
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

export default UniqueSellingPointsSection3;