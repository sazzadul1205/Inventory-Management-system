// frontend/WhyChooseUs/CustomerSatisfactionStatsSection/CustomerSatisfactionStatsSection3.jsx

/**
 * Customer Satisfaction Stats Section 3 - The "Proof is in the Performance" Analytics Hub
 * 
 * Unique design elements:
 * - Multi-tab interface (Key Metrics, Customer Stories, NPS & Trends)
 * - NPS trend line visualization
 * - Promoter/Passive/Detractor breakdown
 * - Time-to-value metric with benchmark
 * - Video case study gallery
 * - Rating distribution bar chart
 * - Platform comparison ratings
 * 
 * All icons from react-icons (tb, md, fa, hi, etc.)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - Analytics and performance focused set
import { BsTrophy, BsGraphUp } from 'react-icons/bs';
import { FaUserCircle, FaQuoteLeft, FaChartLine, FaStar, FaThumbsUp } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineStar,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineHeart,
  HiOutlineTrendingUp,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlinePlay,
  HiOutlineCalendar,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi';
import { MdVerified, MdOutlineRateReview } from 'react-icons/md';
import { SiG2, SiTrustpilot } from 'react-icons/si';
import {
  TbChartBar,
  TbMessage2,
  TbStarFilled,
  TbUsers,
  TbStopwatch,
  TbHeadset,
  TbCloudCheck,
  TbChartCandle,
  TbTrendingUp
} from 'react-icons/tb';

const CustomerSatisfactionStatsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('stats');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showRatingBreakdown, setShowRatingBreakdown] = useState(false);
  const [autoplayTestimonials, setAutoplayTestimonials] = useState(true);

  // ==================== REFS ====================
  const searchRef = useRef(null);
  const intervalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const nps = config?.nps || "72";
  const stats = config?.stats || [];
  const videos = config?.videos || [];
  const npsData = config?.npsData || [];
  const metrics = config?.metrics || [];
  const passives = config?.passives || 22;
  const promoters = config?.promoters || 72;
  const detractors = config?.detractors || 6;
  const testimonials = config?.testimonials || [];
  const reviewCount = config?.reviewCount || "1,847";
  const reviewPlatforms = config?.reviewPlatforms || [];
  const overallRating = config?.overallRating || "4.96";
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const ratingDistribution = config?.ratingDistribution || { 5: 84, 4: 11, 3: 3, 2: 1, 1: 1 };
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
      // HeroIcons
      HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineSearch, HiOutlineStar,
      HiOutlineUsers, HiOutlineChartBar, HiOutlineArrowRight, HiOutlineCheckCircle,
      HiOutlineHeart, HiOutlineTrendingUp, HiOutlineX, HiOutlineThumbUp, HiOutlineThumbDown,
      HiOutlineExternalLink, HiOutlineFilter, HiOutlineBookmark, HiOutlinePrinter, HiOutlineDownload,
      HiOutlinePlay, HiOutlineCalendar, HiOutlineQuestionMarkCircle,
      // Tabler Icons
      TbChartBar, TbMessage2, TbStarFilled, TbUsers, TbStopwatch, TbHeadset, TbCloudCheck, TbChartCandle, TbTrendingUp,
      // Material Design
      MdVerified, MdOutlineRateReview,
      // Font Awesome
      FaUserCircle, FaQuoteLeft, FaChartLine,
      // Simple Icons
      SiG2, SiTrustpilot, FaStar,
      // Game Icons
      GiCheckMark, FaThumbsUp,
      // Bootstrap Icons
      BsTrophy, BsGraphUp,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineStar className={className} />;
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
      localStorage.setItem('perfFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedPerfFaqs', JSON.stringify(newSaved));
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
    link.setAttribute('download', 'perf-faq-export.json');
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
        <mark key={i} className="bg-rose-200 dark:bg-rose-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== AUTO-PLAY TESTIMONIALS EFFECT ====================
  useEffect(() => {
    if (autoplayTestimonials && testimonials.length > 0 && activeTab === 'stories') {
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
    const savedVotes = localStorage.getItem('perfFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedPerfFaqs');
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
      aria-label="Customer Satisfaction Performance Metrics"
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
            aria-label="Performance badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-rose-700 dark:text-rose-300'}`}>
              {config?.badge?.text || "The Proof is in the Performance"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Customer Satisfaction'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-rose-600 to-pink-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'By the Numbers'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Behind every metric is a real business achieving real results. From NPS scores to retention rates, here's the data that shows how we deliver on our promises."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-rose-600 dark:text-rose-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'stats'
              ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("TbChartBar", "w-4 h-4")}
            Key Metrics
          </button>
          <button
            onClick={() => setActiveTab('stories')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'stories'
              ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlinePlay", "w-4 h-4")}
            Customer Stories
          </button>
          <button
            onClick={() => setActiveTab('nps')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'nps'
              ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("TbTrendingUp", "w-4 h-4")}
            NPS & Trends
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'faq'
              ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineQuestionMarkCircle", "w-4 h-4")}
            Methodology FAQs
          </button>
        </div>

        {/* ==================== KEY METRICS TAB ==================== */}
        {activeTab === 'stats' && (
          <>
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group">
                  <div className="flex justify-center mb-3 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
                    {getIcon(metric.icon, "w-8 h-8")}
                  </div>
                  <div className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-1">{metric.value}</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{metric.label}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{metric.description}</p>
                </div>
              ))}
            </div>

            {/* Overall Rating Card */}
            <div className="bg-linear-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center text-white mb-12 shadow-xl">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  {getIcon("BsTrophy", "w-10 h-10")}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <HiOutlineStar key={i} className="w-6 h-6 text-amber-300 fill-amber-300" />
                ))}
              </div>
              <div className="text-7xl font-bold mb-2">{overallRating}/5</div>
              <div className="text-xl mb-4">Average Customer Rating</div>
              <div className="flex items-center justify-center gap-2 text-sm text-rose-100">
                {getIcon("MdVerified", "w-4 h-4")}
                <span>Verified by G2, Trustpilot, Capterra • Based on {reviewCount}+ reviews</span>
              </div>

              {/* Platform Ratings */}
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                {reviewPlatforms.map((platform, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold">{platform.rating}</div>
                    <div className="text-xs text-rose-200">{platform.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-12 border border-gray-100 dark:border-gray-700">
              <button
                onClick={() => setShowRatingBreakdown(!showRatingBreakdown)}
                className="w-full flex justify-between items-center"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  {getIcon("TbChartBar", "w-5 h-5 text-rose-600")}
                  Rating Distribution
                </h3>
                <div className="text-rose-500">
                  {showRatingBreakdown ? getIcon("HiOutlineChevronUp", "w-5 h-5") : getIcon("HiOutlineChevronDown", "w-5 h-5")}
                </div>
              </button>
              {showRatingBreakdown && (
                <div className="mt-4 space-y-3 animate-fadeIn">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center gap-3">
                      <div className="w-12 text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        {stars} {getIcon("HiOutlineStar", "w-3 h-3")}
                      </div>
                      <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full transition-all duration-500"
                          style={{ width: `${ratingDistribution[stars] || 0}%` }}
                        />
                      </div>
                      <div className="w-12 text-sm text-gray-600 dark:text-gray-400">
                        {ratingDistribution[stars] || 0}%
                      </div>
                    </div>
                  ))}
                  <div className="pt-3 text-center text-xs text-gray-500">
                    Based on {reviewCount} verified customer reviews
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* ==================== CUSTOMER STORIES TAB ==================== */}
        {activeTab === 'stories' && (
          <>
            {/* Video Case Studies */}
            {videos.length > 0 && (
              <div className="mb-12">
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
                      <div className="relative h-48 bg-linear-to-r from-rose-500 to-pink-600 flex items-center justify-center">
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

            {/* Testimonial Carousel */}
            {testimonials.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                  What Our Customers Say
                </h3>
                <div className="relative max-w-3xl mx-auto">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 italic text-lg mb-6 leading-relaxed">
                      "{testimonials[activeTestimonial]?.quote}"
                    </p>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{testimonials[activeTestimonial]?.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonials[activeTestimonial]?.role}, {testimonials[activeTestimonial]?.company}</div>
                      <div className="text-xs text-rose-600 dark:text-rose-400 mt-1 font-semibold">{testimonials[activeTestimonial]?.result}</div>
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
                        className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'w-6 bg-rose-600' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setAutoplayTestimonials(!autoplayTestimonials)}
                    className="absolute bottom-0 right-0 text-xs text-gray-400 dark:text-gray-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                    aria-label={autoplayTestimonials ? "Pause autoplay" : "Play autoplay"}
                  >
                    {autoplayTestimonials ? 'Pause' : 'Play'}
                  </button>
                </div>
              </div>
            )}

            {/* All Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedTestimonial(testimonial);
                    setShowModal(true);
                  }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 cursor-pointer border border-gray-100 dark:border-gray-700 group"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedTestimonial(testimonial) && setShowModal(true)}
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <HiOutlineStar
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4 leading-relaxed line-clamp-3">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center text-rose-600 text-xl">
                      {getIcon(testimonial.icon || "FaUserCircle", "w-5 h-5")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="mt-2 text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                      {getIcon("HiOutlineCheckCircle", "w-3 h-3")}
                      Verified Customer
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* ==================== NPS & TRENDS TAB ==================== */}
        {activeTab === 'nps' && (
          <>
            {/* NPS Score Card */}
            <div className="bg-linear-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl p-8 text-center mb-12 border border-rose-100 dark:border-rose-800">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
                  {getIcon("TbMessage2", "w-10 h-10 text-rose-600")}
                </div>
              </div>
              <div className="text-6xl font-bold text-rose-600 dark:text-rose-400 mb-2">{nps}</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Net Promoter Score (NPS)</div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our NPS of {nps} places us in the top 5% of B2B software companies, reflecting exceptional customer loyalty and satisfaction.
              </p>
            </div>

            {/* NPS Trend Over Time */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-12 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                {getIcon("TbTrendingUp", "w-5 h-5 text-rose-600")}
                NPS Trend Over Time
              </h3>
              <div className="space-y-4">
                {npsData.map((data, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>{data.quarter}</span>
                      <span className="font-semibold text-rose-600 dark:text-rose-400">{data.score}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-rose-500 to-pink-600 rounded-full transition-all duration-500"
                        style={{ width: `${data.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promoter/Passive/Detractor Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center border border-gray-100 dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {getIcon("GiThumbsUp", "w-8 h-8 text-green-600")}
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">{promoters}%</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Promoters</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Score 9-10 • Would enthusiastically recommend</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center border border-gray-100 dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {getIcon("HiOutlineUser", "w-8 h-8 text-amber-600")}
                  </div>
                </div>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">{passives}%</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Passives</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Score 7-8 • Satisfied but not enthusiastic</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center border border-gray-100 dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {getIcon("HiOutlineThumbDown", "w-8 h-8 text-red-600")}
                  </div>
                </div>
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">{detractors}%</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Detractors</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Score 0-6 • Unlikely to recommend</div>
              </div>
            </div>
          </>
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
                  ref={searchRef}
                  placeholder="Search methodology FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
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
                    ? 'bg-rose-600 text-white border-rose-600'
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
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
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
                          ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-md'
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
                            ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-md'
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
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
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
                        <div className="text-rose-600 dark:text-rose-400 text-2xl">
                          {getIcon(category.icon, "w-6 h-6")}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Methodology & calculation details</p>
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
                                    aria-label={isSaved ? "Remove from saved" : "Save question"}
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
                                      Read full methodology
                                      {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                                    </Link>
                                  )}

                                  {/* Helpful Section */}
                                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4">
                                      <span className="text-xs text-gray-500 dark:text-gray-400">Was this methodology helpful?</span>
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
                  className="mt-4 px-4 py-2 text-rose-600 dark:text-rose-400 font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Saved FAQs Section */}
            {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("HiOutlineBookmark", "w-5 h-5 text-rose-600")}
                  Your Saved Methodology Questions
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
                              setActiveCategory(faq.category);
                              setSearchQuery('');
                              setOpenFaq(null);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="text-xs text-rose-600 dark:text-rose-400 mt-1 hover:underline"
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

        {/* ==================== TESTIMONIAL MODAL ==================== */}
        {showModal && selectedTestimonial && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
            role="dialog"
            aria-label="Customer review details"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-rose-600 to-pink-600 p-6 rounded-t-3xl text-white">
                <div className="flex justify-between items-start">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <HiOutlineStar key={i} className={`w-5 h-5 ${i < selectedTestimonial.rating ? 'text-amber-300 fill-amber-300' : 'text-white/50'}`} />
                    ))}
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                    aria-label="Close modal"
                  >
                    {getIcon("HiOutlineX", "w-6 h-6")}
                  </button>
                </div>
                <p className="text-lg italic mt-4 leading-relaxed">"{selectedTestimonial.quote}"</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center text-2xl text-rose-600">
                    {getIcon(selectedTestimonial.icon || "FaUserCircle", "w-6 h-6")}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{selectedTestimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{selectedTestimonial.role}, {selectedTestimonial.company}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{selectedTestimonial.date}</div>
                  </div>
                </div>
                {selectedTestimonial.verified && (
                  <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 mb-4">
                    {getIcon("HiOutlineCheckCircle", "w-4 h-4")}
                    Verified Customer
                  </div>
                )}
                {selectedTestimonial.detail && (
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {getIcon("TbChartCandle", "w-4 h-4 text-rose-600")}
                      <span className="font-semibold text-gray-900 dark:text-white">Results</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{selectedTestimonial.detail}</p>
                  </div>
                )}
                <div className="mt-4 text-xs text-rose-600 dark:text-rose-400 font-semibold">
                  {selectedTestimonial.result}
                </div>
                <Link
                  href={config?.contactLink || "/case-studies"}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Read Full Case Study
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

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-rose-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
              {getIcon("BsGraphUp", "w-6 h-6 text-rose-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "See the metrics that matter to your business."}
            </span>
            <Link
              href={config?.contactLink || "/demo"}
              className="px-6 py-3 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Get the Data Pack"}
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        mark {
          background-color: #fecdd3;
          color: #9f1239;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #be123c;
          color: #ffe4e6;
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

export default CustomerSatisfactionStatsSection3;