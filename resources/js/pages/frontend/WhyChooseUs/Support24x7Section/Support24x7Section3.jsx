// frontend/Support/Support24x7Section/Support24x7Section3.jsx

/**
 * Support 24/7 Section 3 - Intelligent Support Analytics Dashboard
 * 
 * Unique design elements:
 * - Multi-tab interface (Overview, Support Metrics, Tickets & Status, FAQs)
 * - SLA compliance visualization with bar charts
 * - CSAT score display with star rating
 * - Priority-level SLA breakdown
 * - Ticket volume and resolution rate metrics
 * - System information capture for advanced debugging
 * - Environment selection (Production/Staging/Dev)
 * - Support analytics transparency dashboard
 * 
 * All icons from react-icons (tb, hi, etc.)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - Analytics and metrics focused set
import {
  BsShieldCheck,
  BsHeadset,
  BsGraphUp
} from 'react-icons/bs';
import {
  FaRegClock,
  FaRegCommentDots,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import {
  GiAlarmClock,
  GiLifeSupport
} from 'react-icons/gi';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlinePaperAirplane,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineQuestionMarkCircle,
  HiOutlineMail,
  HiOutlineChat,
  HiOutlinePhone,
} from 'react-icons/hi';
import {
  HiOutlineDocumentText,
  HiOutlineStar
} from 'react-icons/hi2';
import {
  MdVerified,
  MdOutlineSupportAgent,
  MdOutlineAttachFile,
  MdOutlineAnalytics
} from 'react-icons/md';
import {
  TbClock,
  TbUsers,
  TbHeadset,
  TbTicket,
  TbShieldCheck,
  TbMessageCircle,
  TbMail,
  TbPhone,
  TbChartBar,
  TbFileReport,
  TbCalendarTime
} from 'react-icons/tb';

const Support24x7Section3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [ticketStatus, setTicketStatus] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [statusHistory, setStatusHistory] = useState([]);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [ticketTrackingId, setTicketTrackingId] = useState('');
  const [showStatusCheck, setShowStatusCheck] = useState(false);
  const [callbackLoading, setCallbackLoading] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [ticketForm, setTicketForm] = useState({ name: '', email: '', subject: '', category: 'technical', priority: 'normal', message: '', attachments: [], systemLogs: '', environment: 'production', });

  // ==================== REFS ====================
  const searchRef = useRef(null);
  const fileInputRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const slas = config?.slas || [];
  const stats = config?.stats || [];
  const reviewCount = config?.reviewCount || "2,847";
  const guaranteeText = config?.guaranteeText || "";
  const supportMetrics = config?.supportMetrics || [];
  const supportChannels = config?.supportChannels || [];
  const ticketCategories = config?.ticketCategories || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const emergencyNumber = config?.emergencyNumber || "+1 (888) 555-0127";
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
      HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineSearch, HiOutlineClock,
      HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineShieldCheck, HiOutlineUsers,
      HiOutlineX, HiOutlineThumbUp, HiOutlineThumbDown, HiOutlineExternalLink,
      HiOutlineFilter, HiOutlineBookmark, HiOutlinePrinter, HiOutlineDownload,
      HiOutlinePaperAirplane, HiOutlineChartBar, HiOutlineSparkles, HiOutlineQuestionMarkCircle,
      HiOutlineMail, HiOutlineChat, HiOutlinePhone, HiOutlineDocumentText, HiOutlineStar,
      
      TbClock, TbUsers, TbHeadset, TbTicket, TbShieldCheck, TbMessageCircle, TbMail, TbPhone,
      TbChartBar, TbFileReport, TbCalendarTime,
      // Font Awesome
      FaRegClock, FaRegCommentDots, FaPhoneAlt, FaEnvelope,
      // Material Design
      MdVerified, MdOutlineSupportAgent, MdOutlineAttachFile, MdOutlineAnalytics,
      // Game Icons
      GiAlarmClock, GiLifeSupport,
      // Bootstrap Icons
      BsShieldCheck, BsHeadset, BsGraphUp,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <TbChartBar className={className} />;
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
      localStorage.setItem('supportFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedSupportFaqs', JSON.stringify(newSaved));
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
    link.setAttribute('download', 'support-faq-export.json');
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
   * Handle file upload for ticket attachments
   */
  const handleFileUpload = useCallback((e) => {
    const files = Array.from(e.target.files);
    setTicketForm(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  }, []);

  /**
   * Remove attachment from ticket form
   */
  const removeAttachment = useCallback((index) => {
    setTicketForm(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  }, []);

  /**
   * Handle ticket form submission
   */
  const handleTicketSubmit = useCallback((e) => {
    e.preventDefault();
    if (!ticketForm.name || !ticketForm.email || !ticketForm.subject || !ticketForm.message) return;

    const newTicketNumber = `TKT-${Math.floor(Math.random() * 100000)}`;
    setTicketNumber(newTicketNumber);

    setTimeout(() => {
      setTicketSubmitted(true);
      setTimeout(() => {
        setShowTicketForm(false);
        setTicketSubmitted(false);
        setTicketForm({
          name: '', email: '', subject: '', category: 'technical', priority: 'normal',
          message: '', attachments: [], systemLogs: '', environment: 'production',
        });
        setTicketNumber('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      }, 3000);
    }, 1000);
  }, [ticketForm]);

  /**
   * Handle ticket status check
   */
  const handleCheckTicketStatus = useCallback((e) => {
    e.preventDefault();
    if (!ticketTrackingId) return;

    const statuses = [
      { status: 'Received', timestamp: new Date().toISOString() },
      { status: 'In Review', timestamp: new Date(Date.now() - 1800000).toISOString() },
      { status: 'Assigned', timestamp: new Date(Date.now() - 900000).toISOString() },
    ];
    const randomStatusIndex = Math.floor(Math.random() * statuses.length);
    setTicketStatus(statuses[randomStatusIndex].status);
    setStatusHistory(statuses.slice(0, randomStatusIndex + 1));
  }, [ticketTrackingId]);

  /**
   * Handle callback request submission
   */
  const handleCallbackRequest = useCallback(() => {
    if (!callbackPhone || callbackPhone.length < 10) return;
    setCallbackLoading(true);
    setTimeout(() => {
      setCallbackSubmitted(true);
      setCallbackLoading(false);
      setTimeout(() => {
        setCallbackSubmitted(false);
        setCallbackPhone('');
      }, 3000);
    }, 800);
  }, [callbackPhone]);

  /**
   * Get SLA compliance color
   */
  const getSlaColor = useCallback((compliance) => {
    if (compliance >= 99.5) return 'text-green-600 dark:text-green-400';
    if (compliance >= 98) return 'text-amber-600 dark:text-amber-400';
    return 'text-red-600 dark:text-red-400';
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
        <mark key={i} className="bg-rose-200 dark:bg-rose-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== LOCAL STORAGE EFFECT ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('supportFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedSupportFaqs');
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
      aria-label="Support Analytics Dashboard"
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
            aria-label="Analytics badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-rose-700 dark:text-rose-300'}`}>
              {config?.badge?.text || "Data-Driven Support"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Intelligent'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-rose-600 to-pink-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Support Analytics'}
            </span>{' '}
            {config?.title?.suffix || 'Dashboard'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Track every support interaction with real-time metrics, SLA compliance, customer satisfaction scores, and resolution trends. Our transparent dashboard shows you exactly how we're performing."}
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
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'overview'
              ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineClock", "w-4 h-4")}
            Overview
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'metrics'
              ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineChartBar", "w-4 h-4")}
            Support Metrics
          </button>
          <button
            onClick={() => setActiveTab('tickets')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'tickets'
              ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlinePaperAirplane", "w-4 h-4")}
            Tickets & Status
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

        {/* ==================== OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <>
            {/* Emergency Support Banner */}
            <div className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800 shadow-md">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
                    {getIcon("GiAlarmClock", "w-6 h-6 text-red-600")}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">24/7 Emergency Support</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">For critical system issues affecting your business operations</p>
                  </div>
                </div>
                <div className="text-center">
                  <a href={`tel:${emergencyNumber}`} className="text-2xl font-bold text-red-600 dark:text-red-400 hover:underline">
                    {emergencyNumber}
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Available 24/7 for enterprise customers</p>
                </div>
              </div>
            </div>

            {/* Support Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="flex justify-center mb-3 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
                    {getIcon(channel.icon, "w-10 h-10")}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{channel.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">{channel.description}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-4">
                    {getIcon("TbClock", "w-3 h-3")}
                    <span>{channel.availability}</span>
                  </div>
                  <Link
                    href={channel.link}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {channel.buttonText}
                    {getIcon("HiOutlineArrowRight", "w-4 h-4")}
                  </Link>
                </div>
              ))}
            </div>

            {/* SLA Information */}
            <div className="mb-12 bg-linear-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-rose-100 dark:border-rose-800">
              <div className="flex items-center gap-3 mb-4">
                {getIcon("BsShieldCheck", "w-6 h-6 text-rose-600")}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Service Level Agreements (SLA)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {slas.map((sla, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="text-lg font-bold text-rose-600 dark:text-rose-400 mb-1">{sla.plan}</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{sla.responseTime}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{sla.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Callback Request */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-12 text-center border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-4">
                {getIcon("FaPhoneAlt", "w-6 h-6 text-rose-600")}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Request a Callback</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Can't reach us? Leave your number and we'll call you back within 30 minutes during business hours.
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                />
                <button
                  onClick={handleCallbackRequest}
                  disabled={callbackLoading || callbackSubmitted}
                  className="px-4 py-2 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                >
                  {callbackLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : callbackSubmitted ? (
                    getIcon("HiOutlineCheckCircle", "w-5 h-5")
                  ) : (
                    'Request'
                  )}
                </button>
              </div>
              {callbackSubmitted && (
                <p className="text-green-600 dark:text-green-400 text-sm mt-2 animate-fadeIn">Callback requested! We'll call you shortly.</p>
              )}
            </div>
          </>
        )}

        {/* ==================== METRICS TAB ==================== */}
        {activeTab === 'metrics' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {supportMetrics.map((metric, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group">
                  <div className="flex justify-center mb-3 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
                    {getIcon(metric.icon, "w-8 h-8")}
                  </div>
                  <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-1">{metric.value}</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{metric.label}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{metric.description}</p>
                </div>
              ))}
            </div>

            {/* SLA Compliance Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-12 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">SLA Compliance by Priority</h3>
              <div className="space-y-4">
                {[
                  { priority: 'P1 (Critical)', compliance: 99.9, color: 'bg-green-500' },
                  { priority: 'P2 (High)', compliance: 99.5, color: 'bg-emerald-500' },
                  { priority: 'P3 (Normal)', compliance: 99.2, color: 'bg-blue-500' },
                  { priority: 'P4 (Low)', compliance: 98.8, color: 'bg-amber-500' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>{item.priority}</span>
                      <span className={`font-semibold ${getSlaColor(item.compliance)}`}>{item.compliance}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full transition-all duration-500`} style={{ width: `${item.compliance}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CSAT Score Card */}
            <div className="bg-linear-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl p-8 text-center mb-12 border border-rose-100 dark:border-rose-800 shadow-md">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
                  {getIcon("HiOutlineStar", "w-10 h-10 text-rose-600")}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <HiOutlineStar key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-2">4.92/5</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Customer Satisfaction Score</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Based on {reviewCount} post-support survey responses</p>
            </div>

            {/* Response Time Trends */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Response Time Trends (Last 6 Months)</h3>
              <div className="space-y-3">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, idx) => {
                  const responseTime = [95, 92, 88, 85, 82, 79][idx];
                  return (
                    <div key={idx}>
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                        <span>{month}</span>
                        <span className="font-semibold text-rose-600 dark:text-rose-400">{responseTime}s</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-rose-500 rounded-full transition-all duration-500" style={{ width: `${100 - (responseTime - 70) / 30 * 100}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">Median response time trending down 16% year over year</p>
            </div>
          </>
        )}

        {/* ==================== TICKETS TAB ==================== */}
        {activeTab === 'tickets' && (
          <>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setShowTicketForm(true)}
                className="px-6 py-3 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                {getIcon("HiOutlinePaperAirplane", "w-5 h-5")}
                Submit Support Ticket
              </button>
              <button
                onClick={() => setShowStatusCheck(!showStatusCheck)}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 inline-flex items-center gap-2"
              >
                {getIcon("HiOutlineSearch", "w-5 h-5")}
                Check Ticket Status
              </button>
            </div>

            {/* Ticket Status Check */}
            {showStatusCheck && (
              <div className="max-w-md mx-auto mb-12 animate-fadeIn">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Check Ticket Status</h3>
                  <form onSubmit={handleCheckTicketStatus} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ticket Number</label>
                      <input
                        type="text"
                        value={ticketTrackingId}
                        onChange={(e) => setTicketTrackingId(e.target.value)}
                        placeholder="e.g., TKT-12345"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Check Status
                    </button>
                    {ticketStatus && (
                      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-center">Current Status</div>
                        <div className="font-semibold text-rose-600 dark:text-rose-400 text-center text-lg">{ticketStatus}</div>
                        {statusHistory.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                            <div className="text-xs text-gray-500 mb-2">Status History</div>
                            {statusHistory.map((item, idx) => (
                              <div key={idx} className="flex justify-between text-xs py-1">
                                <span>{item.status}</span>
                                <span className="text-gray-400">{new Date(item.timestamp).toLocaleTimeString()}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            )}
          </>
        )}

        {/* ==================== FAQ TAB ==================== */}
        {activeTab === 'faq' && (
          <>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-5 h-5")}
                </div>
                <input
                  type="text"
                  ref={searchRef}
                  placeholder="Search by topic (metrics, SLA, reporting)..."
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
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-2 border rounded-xl transition-all duration-300 flex items-center gap-2 ${showFilters
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
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all text-sm"
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
                          <p className="text-sm text-gray-500 dark:text-gray-400">Analytics & reporting</p>
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
                                      Read full report
                                      {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                                    </Link>
                                  )}

                                  {/* Helpful Section */}
                                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4">
                                      <span className="text-xs text-gray-500 dark:text-gray-400">Was this analytics answer helpful?</span>
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No analytics questions found</h3>
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
                  Your Saved Analytics Questions
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

        {/* ==================== TICKET FORM MODAL ==================== */}
        {showTicketForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowTicketForm(false)}
            role="dialog"
            aria-label="Support ticket form"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center rounded-t-3xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Submit Support Ticket</h3>
                <button
                  onClick={() => setShowTicketForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {getIcon("HiOutlineX", "w-5 h-5")}
                </button>
              </div>
              <div className="p-6">
                {!ticketSubmitted ? (
                  <form onSubmit={handleTicketSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                        <input
                          type="text"
                          value={ticketForm.name}
                          onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={ticketForm.email}
                          onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                      <input
                        type="text"
                        value={ticketForm.subject}
                        onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Issue Category</label>
                        <select
                          value={ticketForm.category}
                          onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        >
                          {ticketCategories.map((cat, idx) => (
                            <option key={idx} value={cat.value}>{cat.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
                        <select
                          value={ticketForm.priority}
                          onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        >
                          <option value="low">Low - General question</option>
                          <option value="normal">Normal - Minor issue</option>
                          <option value="high">High - Major issue</option>
                          <option value="critical">Critical - System down</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Environment</label>
                        <select
                          value={ticketForm.environment}
                          onChange={(e) => setTicketForm({ ...ticketForm, environment: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        >
                          <option value="production">Production</option>
                          <option value="staging">Staging</option>
                          <option value="development">Development</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setShowAnalytics(!showAnalytics)}
                        className="text-sm text-rose-600 hover:underline"
                      >
                        {showAnalytics ? 'Hide' : 'Show'} system info
                      </button>
                    </div>
                    {showAnalytics && (
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">System Information</div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>Browser: {navigator.userAgent.split(' ').slice(-2).join(' ').substring(0, 50)}</div>
                          <div>Platform: {navigator.platform}</div>
                          <div>Language: {navigator.language}</div>
                          <div>Time Zone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
                        </div>
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description *</label>
                      <textarea
                        rows={5}
                        value={ticketForm.message}
                        onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        placeholder="Please describe your issue in detail. Include steps to reproduce, expected vs actual behavior, and any relevant information..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">System Logs (Optional)</label>
                      <textarea
                        rows={3}
                        value={ticketForm.systemLogs}
                        onChange={(e) => setTicketForm({ ...ticketForm, systemLogs: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all font-mono text-xs"
                        placeholder="Paste any relevant error logs or console output here..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Attachments (Optional)</label>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        multiple
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100 dark:file:bg-rose-900/30 dark:file:text-rose-400"
                      />
                      {ticketForm.attachments.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {ticketForm.attachments.map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 p-1">
                              <span className="truncate">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeAttachment(idx)}
                                className="text-red-500 hover:text-red-700 transition-colors"
                              >
                                {getIcon("HiOutlineX", "w-3 h-3")}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Max file size: 10MB. Supported: PNG, JPG, PDF, DOC, TXT, LOG</p>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Submit Ticket
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        {getIcon("HiOutlineCheckCircle", "w-8 h-8 text-green-600")}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Ticket Submitted Successfully!</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">Your support ticket has been created.</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                      {getIcon("HiOutlineDocumentText", "w-4 h-4 text-gray-500")}
                      <span className="text-sm font-mono text-gray-700 dark:text-gray-300">{ticketNumber}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">A support representative will respond within the SLA timeframe.</p>
                    <div className="mt-4 text-xs text-rose-600 dark:text-rose-400">
                      {getIcon("HiOutlineSparkles", "w-3 h-3 inline mr-1")}
                      Enterprise customers receive priority 1-hour response
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== RESPONSE GUARANTEE ==================== */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
              {getIcon("HiOutlineCheckCircle", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {guaranteeText || "All support tickets receive a response within SLA timeframe. Enterprise customers get priority 1-hour response with automatic escalation if missed."}
              </span>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center mt-8">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-rose-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
              {getIcon("MdOutlineSupportAgent", "w-6 h-6 text-rose-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Need immediate assistance? Our support team is ready 24/7."}
            </span>
            <Link
              href={config?.contactLink || "/support/chat"}
              className="px-6 py-3 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Start Live Chat"}
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

export default Support24x7Section3;