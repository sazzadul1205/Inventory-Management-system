// frontend/WhyChooseUs/TechnologyInnovationSection/TechnologyInnovationSection3.jsx

/**
 * Technology Innovation Section 3 - Innovation Engine Hub
 * 
 * Unique design elements:
 * - Multi-tab interface (Overview, Performance, Roadmap, Research, API, FAQs)
 * - Roadmap with status filters (Current, Upcoming, Planned)
 * - Beta availability badges
 * - Research projects with status indicators
 * - Patent portfolio showcase
 * - Video gallery of technical deep-dives
 * - Interactive API playground
 * - RL/AI innovation explanations
 * 
 * All icons from react-icons (gi, si, tb, hi, etc.)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - Innovation and research focused set
import { BsShieldLockFill } from 'react-icons/bs';
import {
  FaAws,
  FaNodeJs,
  FaReact
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
  HiOutlineChartBar,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
  HiOutlineDatabase,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineCode,
  HiOutlinePlay,
  HiOutlineCalendar,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
  HiOutlineClock,
  HiOutlineShieldCheck,
} from 'react-icons/hi';
import {
  SiKubernetes,
  SiTensorflow,
  SiApollographql,
  SiRedis,
  SiGraphql
} from 'react-icons/si';
import {
  TbBrain,
  TbCertificate,
  TbChartInfographic,
  TbUsers,
  TbApi,
  TbDatabase,
  TbClock,
  TbCalendar,
  TbBulb,
  TbShieldLock
} from 'react-icons/tb';

const TechnologyInnovationSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [activeRoadmap, setActiveRoadmap] = useState('current');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showApiDocs, setShowApiDocs] = useState(false);
  const [selectedApiEndpoint, setSelectedApiEndpoint] = useState(null);
  const [apiResponse, setApiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // ==================== REFS ====================
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const videos = config?.videos || [];
  const patents = config?.patents || [];
  const innovations = config?.innovations || [];
  const technologies = config?.technologies || [];
  const apiEndpoints = config?.apiEndpoints || [];
  const researchProjects = config?.researchProjects || [];
  const innovationLabText = config?.innovationLabText || "";
  const performanceMetrics = config?.performanceMetrics || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const roadmapItems = useMemo(() => config?.roadmapItems || [], [config?.roadmapItems]);
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

  const roadmapFiltered = useMemo(() => {
    return roadmapItems.filter(item => {
      return activeRoadmap === 'all' || item.status === activeRoadmap;
    });
  }, [roadmapItems, activeRoadmap]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports multiple react-icon libraries
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      // HeroIcons
      HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineSearch, HiOutlineChip,
      HiOutlineChartBar, HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineSparkles,
      HiOutlineDatabase, HiOutlineX, HiOutlineThumbUp, HiOutlineThumbDown, HiOutlineExternalLink,
      HiOutlineFilter, HiOutlineBookmark, HiOutlinePrinter, HiOutlineDownload, HiOutlineCode,
      HiOutlinePlay, HiOutlineCalendar, HiOutlineLightBulb, HiOutlineQuestionMarkCircle,
      HiOutlineClock, HiOutlineShieldCheck,
      
      TbBrain, TbCertificate, TbChartInfographic, TbUsers, TbApi, TbDatabase, TbClock,
      TbCalendar, TbBulb, TbShieldLock,
      // Simple Icons
      SiKubernetes, SiTensorflow, SiApollographql, SiRedis, SiGraphql,
      // Font Awesome
      FaAws, FaNodeJs, FaReact,
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
   * Handle API endpoint test
   */
  const handleApiTest = useCallback(async (endpoint) => {
    setIsLoading(true);
    setApiResponse('');
    setSelectedApiEndpoint(endpoint);
    setTimeout(() => {
      setApiResponse(JSON.stringify({
        status: 'success',
        data: {
          endpoint: endpoint.path,
          method: endpoint.method,
          timestamp: new Date().toISOString(),
          sample_response: endpoint.sampleResponse ? JSON.parse(endpoint.sampleResponse) : { message: 'Sample response ready' }
        }
      }, null, 2));
      setIsLoading(false);
    }, 600);
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
      aria-label="Technology & Innovation - R&D Hub"
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
            aria-label="Innovation badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-cyan-700 dark:text-cyan-300'}`}>
              {config?.badge?.text || "Future-Forward"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Inside Our'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-cyan-600 to-blue-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Innovation Engine'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "From our R&D lab to our public roadmap, see how we're building the future of inventory management. We invest 20% of engineering time in exploring emerging technologies and pushing boundaries."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'overview'
              ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineChip", "w-4 h-4")}
            Overview
          </button>
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'performance'
              ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineChartBar", "w-4 h-4")}
            Performance
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'roadmap'
              ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineCalendar", "w-4 h-4")}
            Roadmap
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'research'
              ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineLightBulb", "w-4 h-4")}
            Research
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'api'
              ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineCode", "w-4 h-4")}
            API
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'faq'
              ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineQuestionMarkCircle", "w-4 h-4")}
            FAQs
          </button>
        </div>

        {/* ==================== OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <>
            {/* Technology Stack */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                Our Technology Stack
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                Modern, scalable, and built for the future.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group"
                  >
                    <div className="flex justify-center mb-3 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      {getIcon(tech.icon, "w-10 h-10")}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tech.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Innovations */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                Key Innovations
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                Proprietary technology that powers our platform.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {innovations.map((innovation, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-cyan-600 dark:text-cyan-400 text-3xl">
                        {getIcon(innovation.icon, "w-8 h-8")}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{innovation.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{innovation.description}</p>
                        <div className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 px-2 py-1 rounded-full">
                          {getIcon("HiOutlineCheckCircle", "w-3 h-3")}
                          <span>{innovation.benefit}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Innovation Lab */}
            <div className="bg-linear-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-16 shadow-xl">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  {getIcon("GiArtificialIntelligence", "w-10 h-10")}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Innovation Lab</h3>
              <p className="text-cyan-100 max-w-2xl mx-auto mb-6 leading-relaxed">
                {innovationLabText || "Our innovation lab has produced 15+ patents and 3 new products currently in private beta. We collaborate with top research universities and contribute to open-source AI tooling."}
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  {getIcon("TbCertificate", "w-4 h-4")}
                  <span>15+ Patents</span>
                </div>
                <div className="flex items-center gap-2">
                  {getIcon("HiOutlineSparkles", "w-4 h-4")}
                  <span>3 Beta Products</span>
                </div>
                <div className="flex items-center gap-2">
                  {getIcon("TbUsers", "w-4 h-4")}
                  <span>50+ Research Partners</span>
                </div>
              </div>
            </div>

            {/* Video Showcase */}
            {videos.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                  Technology in Action
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
                      <div className="relative h-48 bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                          {getIcon("HiOutlinePlay", "w-8 h-8 text-white")}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{video.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{video.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* ==================== PERFORMANCE TAB ==================== */}
        {activeTab === 'performance' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group">
                  <div className="flex justify-center mb-3 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                    {getIcon(metric.icon, "w-8 h-8")}
                  </div>
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">{metric.value}</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{metric.label}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{metric.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-12 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Uptime History (Last 4 Months)</h3>
              <div className="space-y-3">
                {['January', 'February', 'March', 'April'].map((month, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>{month}</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">99.99%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '99.99%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">API Response Time</h3>
                <div className="flex items-center justify-center h-32">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">98ms</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Average (P95: 245ms)</div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Sync Speed</h3>
                <div className="flex items-center justify-center h-32">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">1.2s</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Average across all channels</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ==================== ROADMAP TAB ==================== */}
        {activeTab === 'roadmap' && (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setActiveRoadmap('current')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeRoadmap === 'current'
                  ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                Current
              </button>
              <button
                onClick={() => setActiveRoadmap('upcoming')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeRoadmap === 'upcoming'
                  ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveRoadmap('planned')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeRoadmap === 'planned'
                  ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                Planned
              </button>
            </div>

            <div className="space-y-4 mb-12">
              {roadmapFiltered.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-3xl text-cyan-600 dark:text-cyan-400">
                        {getIcon(item.icon, "w-8 h-8")}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">{item.description}</p>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'current' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                            item.status === 'upcoming' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                              'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400'
                            }`}>
                            {item.status === 'current' ? 'In Progress' : item.status === 'upcoming' ? 'Up Next' : 'Planned'}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">ETA: {item.eta}</span>
                        </div>
                      </div>
                    </div>
                    {item.betaAvailable && (
                      <span className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 px-2 py-1 rounded-full">
                        Beta Available
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ==================== RESEARCH TAB ==================== */}
        {activeTab === 'research' && (
          <>
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                Active Research Projects
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                Exploring the frontiers of inventory intelligence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl text-cyan-600 dark:text-cyan-400">
                        {getIcon(project.icon, "w-8 h-8")}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{project.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">{project.description}</p>
                        <div className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                          Status: {project.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                Patents & Publications
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Our commitment to innovation, documented.
              </p>
              <div className="space-y-3">
                {patents.map((patent, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl text-cyan-600 dark:text-cyan-400">
                        {getIcon("TbCertificate", "w-6 h-6")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{patent.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{patent.number} • Filed {patent.filedDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ==================== API TAB ==================== */}
        {activeTab === 'api' && (
          <>
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setShowApiDocs(!showApiDocs)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${showApiDocs
                  ? 'bg-linear-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {getIcon("HiOutlineCode", "w-4 h-4")}
                {showApiDocs ? 'Hide API Playground' : 'Try API Playground'}
              </button>
            </div>

            {showApiDocs && (
              <div className="mb-12 animate-fadeIn">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="bg-linear-to-r from-cyan-600 to-blue-600 p-4 text-white">
                    <div className="flex items-center gap-2">
                      {getIcon("HiOutlineCode", "w-5 h-5")}
                      <span className="font-semibold">API Playground</span>
                      <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-2">Interactive Demo</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Test API Endpoints</h3>
                        <div className="space-y-3">
                          {apiEndpoints.map((endpoint, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleApiTest(endpoint)}
                              className={`w-full text-left p-3 rounded-xl border transition-all duration-200 group ${selectedApiEndpoint?.path === endpoint.path
                                ? 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-300 dark:border-cyan-700'
                                : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className={`text-xs font-mono px-2 py-0.5 rounded ${endpoint.method === 'GET' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                    endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                      endpoint.method === 'PUT' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                    }`}>
                                    {endpoint.method}
                                  </span>
                                  <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{endpoint.path}</span>
                                </div>
                                {getIcon("HiOutlineArrowRight", "w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors")}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{endpoint.description}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Response</h3>
                        <div className="bg-gray-900 rounded-xl p-4 min-h-64 overflow-auto">
                          {isLoading ? (
                            <div className="flex items-center justify-center h-48">
                              <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                            </div>
                          ) : (
                            <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap overflow-x-auto">
                              {apiResponse || 'Click an endpoint to test the API...'}
                            </pre>
                          )}
                        </div>
                        <div className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
                          {getIcon("HiOutlineShieldCheck", "w-3 h-3 inline mr-1")}
                          This is a simulation. Real API calls require authentication.
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Link
                        href="/developers/api"
                        className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:gap-3 transition-all duration-200 group"
                      >
                        View Full API Documentation
                        {getIcon("HiOutlineExternalLink", "w-4 h-4 group-hover:translate-x-0.5 transition-transform")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-linear-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center border border-cyan-100 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                  {getIcon("SiGraphql", "w-8 h-8 text-cyan-600")}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Developer Resources</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
                Access our comprehensive API documentation, SDKs, and developer tools to build custom integrations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/developers/api" className="px-4 py-2 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  API Docs
                </Link>
                <Link href="/developers/sdks" className="px-4 py-2 border border-cyan-600 text-cyan-600 dark:text-cyan-400 rounded-lg font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300">
                  SDKs & Libraries
                </Link>
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
                  placeholder="Search by topic (AI, roadmap, research)..."
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
              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-3 border rounded-xl transition-all duration-300 flex items-center gap-2 ${showFilters
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
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 transition-all"
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
                          <p className="text-sm text-gray-500 dark:text-gray-400">Innovation insights</p>
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
                                      <span className="text-xs text-gray-500 dark:text-gray-400">Was this innovation insight helpful?</span>
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No innovation questions found</h3>
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
                  Your Saved Innovation Questions
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
          </>
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
                  <p className="text-gray-400 text-sm mt-1">{selectedVideo.author}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-cyan-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
              {getIcon("GiArtificialIntelligence", "w-6 h-6 text-cyan-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Want to peek behind the curtain?"}
            </span>
            <Link
              href={config?.contactLink || "/innovation-lab"}
              className="px-6 py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Explore Our Research"}
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
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
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

export default TechnologyInnovationSection3;