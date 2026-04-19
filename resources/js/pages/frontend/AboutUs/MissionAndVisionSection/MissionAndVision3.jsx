// frontend/AboutUs/MissionAndVisionSection/MissionAndVision3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaLeaf } from "react-icons/fa";
import { FiTarget } from 'react-icons/fi';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUsers,
  HiOutlineChip,
  HiOutlineTrendingUp,
  HiOutlineHeart,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
  HiOutlineEye,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineStar,
  HiOutlineMail,
  HiOutlineAcademicCap,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const MissionAndVision3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [expandedPillar, setExpandedPillar] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [autoplayMilestones, setAutoplayMilestones] = useState(true);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // ==================== REFS ====================
  const searchRef = useRef(null);
  const milestoneIntervalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const goals = config?.goals || [];
  const quotes = config?.quotes || [];
  const pillars = config?.pillars || [];
  const milestones = config?.milestones || [];
  const initiatives = config?.initiatives || [];
  const impactMetrics = config?.impactMetrics || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const faqCategories = useMemo(() => config?.faqCategories || [], [config?.faqCategories]);
  const mission = config?.mission || { title: 'Our Mission', description: 'To democratize access to powerful technology, enabling every organization to compete, innovate, and thrive.', icon: 'HiOutlineRocketLaunch' };
  const vision = config?.vision || { title: 'Our Vision', description: 'A connected, equitable, and sustainable world where technology serves as a bridge to opportunity.', icon: 'HiOutlineEye' };


  // ==================== FILTERED FAQS ====================
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
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown,
      HiOutlineChevronUp,
      HiOutlineSearch,
      HiOutlineArrowRight,
      HiOutlineCheckCircle,
      HiOutlineGlobeAlt,
      HiOutlineUserGroup,
      HiOutlineShieldCheck,
      HiOutlineSparkles,
      HiOutlineUsers,
      HiOutlineChip,
      FaLeaf,
      HiOutlineTrendingUp,
      HiOutlineHeart,
      HiOutlineChartBar,
      HiOutlineLightBulb,
      HiOutlineQuestionMarkCircle,
      HiOutlineRocketLaunch,
      HiOutlineEye,
      HiOutlineX,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineExternalLink,
      HiOutlineFilter,
      HiOutlineBookmark,
      HiOutlinePrinter,
      HiOutlineDownload,
      HiOutlinePlay,
      HiOutlinePause,
      HiOutlineStar,
      HiOutlineMail,
      HiOutlineAcademicCap,
      FiTarget,
    };
    const IconComponent = icons[iconName] || HiOutlineQuestionMarkCircle;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle FAQ accordion item
   * @param {number} index - Index of the FAQ to toggle
   */
  const toggleFaq = useCallback((index) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  /**
   * Toggle pillar expansion
   * @param {number} index - Index of the pillar to toggle
   */
  const togglePillar = useCallback((index) => {
    setExpandedPillar(prev => prev === index ? null : index);
  }, []);

  /**
   * Handle helpful/unhelpful vote
   * @param {string|number} faqId - ID of the FAQ
   * @param {boolean} isHelpful - Whether the answer was helpful
   */
  const handleHelpful = useCallback((faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('missionFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  }, []);

  /**
   * Handle save/unsave FAQ bookmark
   * @param {string|number} faqId - ID of the FAQ to save or unsave
   */
  const handleSaveFaq = useCallback((faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedMissionFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Export FAQs to JSON file
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
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'mission-faq-export.json');
    linkElement.click();
  }, [filteredFaqs, faqCategories]);

  /**
   * Print FAQs
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /**
   * Clear search query
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
   * Handle newsletter subscription
   * @param {Event} e - Form submit event
   */
  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setTimeout(() => {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setShowNewsletterModal(false);
        setNewsletterSubmitted(false);
        setNewsletterEmail('');
      }, 3000);
    }, 500);
  }, [newsletterEmail]);

  /**
   * Highlight search matches in text
   * @param {string} text - Text to highlight
   * @param {string} query - Search query to highlight
   * @returns {JSX.Element|string} Text with highlighted matches
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-amber-200 dark:bg-amber-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== AUTO-PLAY MILESTONES EFFECT ====================
  useEffect(() => {
    if (autoplayMilestones && milestones.length > 0 && activeTab === 'overview') {
      milestoneIntervalRef.current = setInterval(() => {
        setActiveMilestone((prev) => (prev + 1) % milestones.length);
      }, 5000);
    }
    return () => {
      if (milestoneIntervalRef.current) {
        clearInterval(milestoneIntervalRef.current);
      }
    };
  }, [autoplayMilestones, milestones.length, activeTab]);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('missionFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedMissionFaqs');
    if (saved) setSavedFaqs(JSON.parse(saved));
  }, []);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Mission & Vision Knowledge Base"
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
            aria-label="Mission badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-amber-700 dark:text-amber-300'}`}>
              {config?.badge?.text || "Our Guiding Star"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Building'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-amber-600 to-orange-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Legacy'}
            </span>{' '}
            {config?.title?.suffix || 'Through Purpose'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Our mission and vision are the foundation of everything we create. They drive our innovation, define our culture, and inspire us to build technology that empowers people and protects the planet."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-amber-600 dark:text-amber-400">
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
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'overview'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("FiTarget", "w-4 h-4")}
            Overview
          </button>
          <button
            onClick={() => setActiveTab('impact')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'impact'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineTrendingUp", "w-4 h-4")}
            Our Impact
          </button>
          <button
            onClick={() => setActiveTab('initiatives')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'initiatives'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineSparkles", "w-4 h-4")}
            Initiatives
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'faq'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
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
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
                <div className="bg-linear-to-r from-amber-500 to-orange-600 p-6 text-white">
                  <div className="flex items-center gap-3">
                    {getIcon(mission.icon || "HiOutlineRocketLaunch", "w-8 h-8")}
                    <h3 className="text-2xl font-bold">{mission.title || "Our Mission"}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                    {mission.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon("HiOutlineCheckCircle", "w-4 h-4 text-green-500")}
                      <span>Guiding every decision we make</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
                <div className="bg-linear-to-r from-orange-500 to-red-600 p-6 text-white">
                  <div className="flex items-center gap-3">
                    {getIcon(vision.icon || "HiOutlineEye", "w-8 h-8")}
                    <h3 className="text-2xl font-bold">{vision.title || "Our Vision"}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                    {vision.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon("HiOutlineGlobeAlt", "w-4 h-4 text-amber-500")}
                      <span>Building a better future for global commerce</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones Carousel */}
            {milestones.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                  Our Journey Milestones
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                  Key moments that have shaped our path and impact.
                </p>
                <div className="relative max-w-6xl mx-auto">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="relative h-48 bg-linear-to-r from-amber-500 to-orange-600">
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-6 text-white">
                        <div className="text-sm opacity-80">{milestones[activeMilestone]?.year}</div>
                        <div className="text-xl font-bold">{milestones[activeMilestone]?.title}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{milestones[activeMilestone]?.description}</p>
                      {milestones[activeMilestone]?.impact && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                            {getIcon("HiOutlineStar", "w-4 h-4")}
                            <span className="font-semibold">Impact:</span>
                            <span>{milestones[activeMilestone]?.impact}</span>
                          </div>
                        </div>
                      )}
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex gap-1">
                          {milestones.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setActiveMilestone(idx);
                                setAutoplayMilestones(false);
                              }}
                              className={`h-1.5 rounded-full transition-all duration-300 ${activeMilestone === idx ? 'w-6 bg-amber-600' : 'w-1.5 bg-gray-300 dark:bg-gray-600'}`}
                              aria-label={`Go to milestone ${idx + 1}`}
                            />
                          ))}
                        </div>
                        <button
                          onClick={() => setAutoplayMilestones(!autoplayMilestones)}
                          className="text-xs text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1 transition-colors"
                          aria-label={autoplayMilestones ? "Pause autoplay" : "Play autoplay"}
                        >
                          {autoplayMilestones ? getIcon("HiOutlinePause", "w-3 h-3") : getIcon("HiOutlinePlay", "w-3 h-3")}
                          {autoplayMilestones ? 'Pause' : 'Play'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Core Pillars */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                Our Core Pillars
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                The foundational principles that guide our actions, decisions, and culture.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map((pillar, index) => (
                  <div
                    key={index}
                    onClick={() => togglePillar(index)}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center cursor-pointer border border-gray-100 dark:border-gray-700 group"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && togglePillar(index)}
                  >
                    <div className="flex justify-center mb-4 text-amber-600 dark:text-amber-400 text-5xl group-hover:scale-110 transition-transform">
                      {getIcon(pillar.icon, "w-12 h-12")}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{pillar.description}</p>
                    {expandedPillar === index && pillar.details && (
                      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                        <p className="text-xs text-gray-500 dark:text-gray-400">{pillar.details}</p>
                      </div>
                    )}
                    {pillar.details && (
                      <button className="mt-3 text-xs text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1">
                        {expandedPillar === index ? 'Show less' : 'Learn more'}
                        {getIcon(expandedPillar === index ? "HiOutlineChevronUp" : "HiOutlineChevronDown", "w-3 h-3")}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Goals */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                Our Strategic Goals
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                The measurable milestones we're working toward to achieve our vision.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-amber-600 dark:text-amber-400 text-3xl">
                        {getIcon(goal.icon, "w-8 h-8")}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{goal.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{goal.description}</p>
                        {goal.target && (
                          <div className="mt-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">Target: {goal.target}</span>
                              <span className="text-xs text-gray-500">{goal.progress || 0}% complete</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div className="bg-linear-to-r from-amber-500 to-orange-600 h-2 rounded-full transition-all duration-500" style={{ width: `${goal.progress || 0}%` }} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inspirational Quote */}
            {quotes.length > 0 && (
              <div className="bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center mb-16 border border-amber-100 dark:border-gray-700">
                <div className="flex justify-center mb-4 text-amber-600 dark:text-amber-400 text-5xl">
                  {getIcon("HiOutlineHeart", "w-12 h-12")}
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 italic mb-4">
                  "{quotes[0]?.text || 'The best way to predict the future is to create it.'}"
                </p>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {quotes[0]?.author || "— Peter Drucker"}
                </div>
                {quotes[0]?.title && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{quotes[0]?.title}</div>
                )}
              </div>
            )}
          </>
        )}

        {/* ==================== IMPACT TAB ==================== */}
        {activeTab === 'impact' && (
          <>
            {/* Impact Metrics */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                Our Impact by the Numbers
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                Real results from our commitment to our mission.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group"
                  >
                    <div className="flex justify-center mb-3 text-amber-600 dark:text-amber-400 text-4xl group-hover:scale-110 transition-transform">
                      {getIcon(metric.icon, "w-10 h-10")}
                    </div>
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{metric.value}</div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{metric.label}</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-linear-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 mb-8 border border-amber-100 dark:border-amber-800">
              <div className="flex items-center gap-3 mb-6">
                {getIcon("HiOutlineLeaf", "w-8 h-8 text-amber-600")}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Environmental Commitment</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">50%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Average waste reduction for customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">50,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tons of CO2 offset</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">2030</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Target for net positive operations</div>
                </div>
              </div>
            </div>

            {/* Social Impact */}
            <div className="bg-linear-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 border border-orange-100 dark:border-orange-800">
              <div className="flex items-center gap-3 mb-6">
                {getIcon("HiOutlineUsers", "w-8 h-8 text-orange-600")}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Social Impact</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">1,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Non-profit partners supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">$5M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Donated to community programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">5,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Volunteer hours contributed</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ==================== INITIATIVES TAB ==================== */}
        {activeTab === 'initiatives' && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
              Our Key Initiatives
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Programs and projects driving real change.
            </p>
            <div className="space-y-4">
              {initiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="text-amber-600 dark:text-amber-400 text-3xl">
                      {getIcon(initiative.icon, "w-8 h-8")}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{initiative.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${initiative.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : initiative.status === 'In Progress' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                          {initiative.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{initiative.description}</p>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 w-full max-w-xs">
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                            <div className="bg-linear-to-r from-amber-500 to-orange-600 h-1.5 rounded-full transition-all duration-500" style={{ width: `${initiative.progress}%` }} />
                          </div>
                          <span className="text-xs text-gray-500">{initiative.progress}%</span>
                        </div>
                        {initiative.link && (
                          <Link
                            href={initiative.link}
                            className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm font-semibold hover:gap-2 transition-all duration-200 group"
                          >
                            Learn more
                            {getIcon("HiOutlineArrowRight", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                  placeholder="Search mission and vision FAQs..."
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

            {/* FAQ Accordion */}
            <div className="max-w-6xl mx-auto space-y-4 mb-16">
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
                        <div className="text-amber-600 dark:text-amber-400 mt-0.5">
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
                          className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-amber-600' : 'text-gray-400 hover:text-amber-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                          aria-label={isSaved ? "Remove from saved" : "Save question"}
                        >
                          {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-amber-600' : ''}`)}
                        </button>
                        <div className="text-amber-500 dark:text-amber-400">
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
                            className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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

            {/* Empty State */}
            {filteredFaqs.length === 0 && searchQuery && (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-12 h-12")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
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
              <div className="mb-16">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("HiOutlineBookmark", "w-5 h-5 text-amber-600")}
                  Saved Questions
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

        {/* ==================== NEWSLETTER SIGNUP ==================== */}
        <div className="bg-linear-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white mb-12 shadow-xl">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineMail", "w-8 h-8")}
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Stay Updated on Our Journey</h3>
          <p className="text-amber-100 mb-6 max-w-lg mx-auto">
            Subscribe to our newsletter to receive updates on our mission, impact, and initiatives.
          </p>
          <button
            onClick={() => setShowNewsletterModal(true)}
            className="px-8 py-3 bg-white text-amber-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
          >
            {getIcon("HiOutlineMail", "w-4 h-4")}
            Subscribe Now
          </button>
        </div>

        {/* ==================== NEWSLETTER MODAL ==================== */}
        {showNewsletterModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowNewsletterModal(false)}
            role="dialog"
            aria-label="Newsletter subscription"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-6 animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Subscribe to Our Newsletter</h3>
                <button
                  onClick={() => setShowNewsletterModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {getIcon("HiOutlineX", "w-5 h-5")}
                </button>
              </div>
              {!newsletterSubmitted ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get updates on our mission, impact, and initiatives delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      {getIcon("HiOutlineCheckCircle", "w-8 h-8 text-green-600")}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Subscribed!</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Thanks for joining our journey.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-amber-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineHeart", "w-6 h-6 text-amber-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Join us in building a legacy of impact. Explore careers and partnerships."}
            </span>
            <Link
              href={config?.contactLink || "/careers"}
              className="px-6 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Join Our Mission"}
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

export default MissionAndVision3;