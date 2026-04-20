// frontend/WhyChooseUs/IndustryExpertiseSection/IndustryExpertiseSection3.jsx

/**
 * Industry Expertise Section 3 - Supply Chain Deep Expertise Hub
 * 
 * Unique design elements:
 * - Multi-tab interface (Industries, Expertise, Success Stories, Events & Webinars, FAQs)
 * - Video case study gallery
 * - Testimonial carousel with autoplay
 * - Upcoming events and webinars section
 * - Industry modal with challenges/solutions breakdown
 * - Expert quote from Fortune 100 SVP
 * 
 * All icons from react-icons (gi, bs, tb, fa, hi, etc.)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - Domain expertise and industry focus set
import { BsTruck, BsBuilding, BsGraphUp } from 'react-icons/bs';
import { FaUserTie, FaQuoteLeft, FaIndustry, FaUserCircle, FaCubes, FaWarehouse } from 'react-icons/fa';
import { GiFactory, GiShoppingCart } from 'react-icons/gi';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineShoppingBag,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineCalendar,
  HiOutlinePlay,
  HiOutlineQuestionMarkCircle,
  HiOutlineTrendingUp,
  HiOutlineStar,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { MdVerified, MdOutlineFactory } from 'react-icons/md';
import { SiSap, SiDatabricks } from 'react-icons/si';
import {
  TbBuildingFactory,
  TbPackage,
  TbTruckDelivery,
  TbBrain,
  TbChartBubble,
  TbPlugConnected,
  TbChartBar,
  TbMessage2,
  TbCalendarEvent,
  TbBuildingStore
} from 'react-icons/tb';

const IndustryExpertiseSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [activeTab, setActiveTab] = useState('industries');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoplayTestimonials, setAutoplayTestimonials] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // ==================== REFS ====================
  const searchRef = useRef(null);
  const intervalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const videos = config?.videos || [];
  const events = config?.events || [];
  const expertise = config?.expertise || [];
  const industries = config?.industries || [];
  const expertName = config?.expertName || "";
  const expertQuote = config?.expertQuote || "";
  const expertTitle = config?.expertTitle || "";
  const testimonials = config?.testimonials || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const caseStudies = useMemo(() => config?.caseStudies || [], [config?.caseStudies]); // config?.caseStudies || [];
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

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(study => {
      return activeIndustry === 'all' || study.industry === activeIndustry;
    });
  }, [caseStudies, activeIndustry]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports multiple react-icon libraries
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      // HeroIcons
      HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineSearch, HiOutlineBriefcase,
      HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineX, HiOutlineThumbUp, HiOutlineThumbDown,
      HiOutlineExternalLink, HiOutlineFilter, HiOutlineBookmark, HiOutlinePrinter, HiOutlineDownload,
      HiOutlineCalendar, HiOutlineTrendingUp, HiOutlineStar, HiOutlineUserGroup, TbCalendarEvent,
      HiOutlineAcademicCap,
      HiOutlineShoppingBag,
      HiOutlinePlay,
      HiOutlineQuestionMarkCircle,
      FaUserCircle,

      
      TbBuildingFactory, TbBuildingStore, TbPackage, TbTruckDelivery, TbBrain, TbChartBubble,
      TbPlugConnected, TbChartBar, TbMessage2,
      // Material Design
      MdVerified, MdOutlineFactory,
      // Font Awesome
      FaUserTie, FaQuoteLeft, FaIndustry,
      // Simple Icons
      SiSap, SiDatabricks, FaCubes,
      // Game Icons
      FaWarehouse, GiFactory, GiShoppingCart,
      // Bootstrap Icons
      BsTruck, BsBuilding, BsGraphUp,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineBriefcase className={className} />;
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
      localStorage.setItem('industryFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedIndustryFaqs', JSON.stringify(newSaved));
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
    link.setAttribute('download', 'industry-faq-export.json');
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
    setActiveIndustry('all');
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
        <mark key={i} className="bg-teal-200 dark:bg-teal-800 text-gray-900 dark:text-white px-0.5 rounded">
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
    const savedVotes = localStorage.getItem('industryFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedIndustryFaqs');
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
      aria-label="Industry Expertise Knowledge Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-teal-50/30 to-transparent dark:from-teal-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-teal-300/5 dark:bg-teal-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-teal-100 dark:bg-teal-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-teal-200 dark:border-teal-800'}`}
            aria-label="Expertise badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-teal-700 dark:text-teal-300'}`}>
              {config?.badge?.text || "Domain Authority"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Supply Chain'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-teal-600 to-emerald-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Deep Expertise'}
            </span>{' '}
            {config?.title?.suffix || 'Across Every Vertical'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Our team brings decades of hands-on supply chain experience across manufacturing, retail, distribution, and logistics. We don't just build software—we solve problems we've personally faced."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('industries')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'industries'
              ? 'bg-linear-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineShoppingBag", "w-4 h-4")}
            Industries
          </button>
          <button
            onClick={() => setActiveTab('expertise')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'expertise'
              ? 'bg-linear-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineAcademicCap", "w-4 h-4")}
            Expertise
          </button>
          <button
            onClick={() => setActiveTab('stories')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'stories'
              ? 'bg-linear-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlinePlay", "w-4 h-4")}
            Success Stories
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'events'
              ? 'bg-linear-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineCalendar", "w-4 h-4")}
            Events & Webinars
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'faq'
              ? 'bg-linear-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineQuestionMarkCircle", "w-4 h-4")}
            FAQs
          </button>
        </div>

        {/* ==================== INDUSTRIES TAB ==================== */}
        {activeTab === 'industries' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {industries.map((industry, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedIndustry(industry);
                  setShowModal(true);
                }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center cursor-pointer border border-gray-100 dark:border-gray-700 group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedIndustry(industry) && setShowModal(true)}
              >
                <div className="flex justify-center mb-3 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                  {getIcon(industry.icon, "w-10 h-10")}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{industry.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{industry.description}</p>
                <div className="mt-3 text-teal-600 dark:text-teal-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== EXPERTISE TAB ==================== */}
        {activeTab === 'expertise' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-teal-600 dark:text-teal-400 text-3xl">
                      {getIcon(item.icon, "w-8 h-8")}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                      {item.stat && (
                        <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-2 py-1 rounded-full">
                          {getIcon("HiOutlineStar", "w-3 h-3")}
                          <span>{item.stat}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Expert Quote */}
            <div className="bg-linear-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-2xl p-8 text-center border border-teal-100 dark:border-teal-800 shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                  {getIcon("FaUserTie", "w-8 h-8 text-teal-600")}
                </div>
              </div>
              <div className="flex justify-center mb-3">
                {getIcon("FaQuoteLeft", "w-8 h-8 text-teal-400 opacity-50")}
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 italic mb-4 leading-relaxed max-w-3xl mx-auto">
                "{expertQuote || "After 25 years in supply chain leadership across retail, manufacturing, and logistics, I can say this is the first platform that truly understands industry nuances — not just generic inventory math."}"
              </p>
              <div className="font-semibold text-gray-900 dark:text-white">{expertName || "David Rodriguez"}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{expertTitle || "Former SVP of Supply Chain, Fortune 100 Retailer"}</div>
            </div>
          </>
        )}

        {/* ==================== SUCCESS STORIES TAB ==================== */}
        {activeTab === 'stories' && (
          <>
            {/* Industry Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveIndustry('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeIndustry === 'all'
                  ? 'bg-linear-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                All Industries
              </button>
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeIndustry === industry.id
                    ? 'bg-linear-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>

            {/* Video Case Studies */}
            {videos.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                  Watch Customer Stories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <div className="relative h-48 bg-linear-to-r from-teal-500 to-emerald-600 flex items-center justify-center">
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
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 text-3xl">
                        {getIcon(testimonials[activeTestimonial]?.icon || "FaUserCircle", "w-8 h-8")}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 italic text-lg mb-6 leading-relaxed">
                      "{testimonials[activeTestimonial]?.quote}"
                    </p>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{testimonials[activeTestimonial]?.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonials[activeTestimonial]?.role}, {testimonials[activeTestimonial]?.company}</div>
                      <div className="text-xs text-teal-600 dark:text-teal-400 mt-1 font-semibold">{testimonials[activeTestimonial]?.result}</div>
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
                        className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'w-6 bg-teal-600' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setAutoplayTestimonials(!autoplayTestimonials)}
                    className="absolute bottom-0 right-0 text-xs text-gray-400 dark:text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    aria-label={autoplayTestimonials ? "Pause autoplay" : "Play autoplay"}
                  >
                    {autoplayTestimonials ? 'Pause' : 'Play'}
                  </button>
                </div>
              </div>
            )}

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCaseStudies.map((study, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700 group">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl text-teal-600 dark:text-teal-400">
                      {getIcon(study.icon, "w-10 h-10")}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{study.company}</h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span className="text-teal-600 dark:text-teal-400 font-medium">{industries.find(i => i.id === study.industry)?.name || study.industry}</span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <div className="flex items-center gap-1">
                          {getIcon("HiOutlineCalendar", "w-3 h-3")}
                          {study.year}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">"{study.quote}"</p>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                          {getIcon("HiOutlineTrendingUp", "w-4 h-4")}
                          <span>{study.result}</span>
                        </div>
                        <Link href={study.link} className="text-teal-600 dark:text-teal-400 text-sm font-semibold hover:underline inline-flex items-center gap-1">
                          Read full story
                          {getIcon("HiOutlineArrowRight", "w-3 h-3")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ==================== EVENTS TAB ==================== */}
        {activeTab === 'events' && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-teal-600 dark:text-teal-400">
                      {getIcon(event.icon || "TbCalendarEvent", "w-8 h-8")}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{event.title}</h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span className="text-teal-600 dark:text-teal-400">{event.date}</span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span>{event.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{event.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{event.type}</span>
                        <Link
                          href={event.link}
                          className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 text-sm font-semibold hover:gap-2 transition-all duration-200 group"
                        >
                          Register Now
                          {getIcon("HiOutlineArrowRight", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:gap-3 transition-all duration-200 group"
              >
                View All Events
                {getIcon("HiOutlineArrowRight", "w-4 h-4 group-hover:translate-x-0.5 transition-transform")}
              </Link>
            </div>
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
                  ref={searchRef}
                  placeholder="Search by industry (manufacturing, retail, logistics)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
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
                    ? 'bg-teal-600 text-white border-teal-600'
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
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 transition-all"
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Industry</label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeCategory === 'all'
                          ? 'bg-linear-to-r from-teal-600 to-emerald-600 text-white shadow-md'
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
                            ? 'bg-linear-to-r from-teal-600 to-emerald-600 text-white shadow-md'
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
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 transition-all"
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
                      className="text-sm text-teal-600 dark:text-teal-400 hover:underline"
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
                        <div className="text-teal-600 dark:text-teal-400 text-2xl">
                          {getIcon(category.icon, "w-6 h-6")}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Industry-specific solutions</p>
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
                                  <div className="text-teal-600 dark:text-teal-400 mt-0.5">
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
                                    className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-teal-600' : 'text-gray-400 hover:text-teal-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                      }`}
                                    aria-label={isSaved ? "Remove from saved" : "Save question"}
                                  >
                                    {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-teal-600' : ''}`)}
                                  </button>
                                  <div className="text-teal-500 dark:text-teal-400">
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
                                      className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                                    >
                                      Learn more
                                      {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                                    </Link>
                                  )}

                                  {/* Helpful Section */}
                                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4">
                                      <span className="text-xs text-gray-500 dark:text-gray-400">Was this industry insight helpful?</span>
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No industry questions found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 text-teal-600 dark:text-teal-400 font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Saved FAQs Section */}
            {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("HiOutlineBookmark", "w-5 h-5 text-teal-600")}
                  Your Saved Industry Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="text-teal-600 dark:text-teal-400">
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
                            className="text-xs text-teal-600 dark:text-teal-400 mt-1 hover:underline"
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

        {/* ==================== INDUSTRY MODAL ==================== */}
        {showModal && selectedIndustry && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
            role="dialog"
            aria-label="Industry details"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-teal-600 to-emerald-600 p-6 rounded-t-3xl text-white">
                <div className="flex justify-between items-start">
                  <div className="text-4xl">
                    {getIcon(selectedIndustry.icon, "w-10 h-10")}
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                    aria-label="Close modal"
                  >
                    {getIcon("HiOutlineX", "w-6 h-6")}
                  </button>
                </div>
                <h3 className="text-xl font-bold mt-3">{selectedIndustry.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{selectedIndustry.fullDescription || selectedIndustry.description}</p>

                {selectedIndustry.challenges && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      {getIcon("HiOutlineExclamationCircle", "w-4 h-4 text-red-500")}
                      Key Challenges We Solve
                    </h4>
                    <ul className="space-y-2">
                      {selectedIndustry.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          {getIcon("HiOutlineX", "w-4 h-4 text-red-400 mt-0.5")}
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedIndustry.solutions && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      {getIcon("HiOutlineCheckCircle", "w-4 h-4 text-green-600")}
                      Our Solutions
                    </h4>
                    <ul className="space-y-2">
                      {selectedIndustry.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          {getIcon("HiOutlineCheckCircle", "w-4 h-4 text-green-500")}
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedIndustry.caseStudy && (
                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-1 flex items-center gap-2">
                      {getIcon("HiOutlineStar", "w-4 h-4")}
                      Success Story
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedIndustry.caseStudy}</p>
                  </div>
                )}

                <Link
                  href={`/solutions/${selectedIndustry.id}`}
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Explore {selectedIndustry.name} Solutions
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-teal-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
              {getIcon("FaIndustry", "w-6 h-6 text-teal-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Let's discuss your specific industry challenges."}
            </span>
            <Link
              href={config?.contactLink || "/industry-consultation"}
              className="px-6 py-3 bg-linear-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Talk to an Industry Expert"}
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
        mark {
          background-color: #99f6e4;
          color: #115e59;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #0f766e;
          color: #ccfbf1;
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

export default IndustryExpertiseSection3;