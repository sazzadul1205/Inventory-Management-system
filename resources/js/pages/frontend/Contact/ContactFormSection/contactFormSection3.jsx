// frontend/Contact/ContactFormSection/ContactFormSection3.jsx

/**
 * Contact Form Section Component - Support Center with Integrated FAQ
 * A comprehensive contact and support center featuring:
 * - Toggle between contact form and FAQ knowledge base
 * - Rich contact form with validation, file attachments, and department routing
 * - Expandable FAQ accordion with search and category filtering
 * - Save/bookmark favorite FAQ questions with localStorage persistence
 * - Helpful/Not helpful voting on FAQ answers
 * - Search highlighting for FAQ content
 * - Contact information cards with multiple support channels
 * - Support hours and global locations display
 * - Emergency support banner for critical issues
 * - Statistics display for trust signals
 * - Fully responsive and dark mode compatible
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaRegBuilding } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlinePaperAirplane,
  HiOutlineGlobeAlt,
  HiOutlineClipboardList,
  HiOutlineExternalLink,
  HiOutlineX,
  HiOutlineBookmark,
  HiOutlineSearch,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineUsers,
  HiOutlineChatAlt,
  HiOutlineTruck,
  HiOutlineBadgeCheck,
  HiOutlineChat,
  HiOutlineUserCircle,
  HiOutlineCreditCard,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineCollection,
  HiOutlineExclamationCircle,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineExclamationTriangle, HiOutlineRocketLaunch } from "react-icons/hi2";

const ContactFormSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [activeFaqCategory, setActiveFaqCategory] = useState('all');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', companySize: '', department: '', inquiryType: 'general', priority: 'normal', preferredContact: 'email', message: '', attachments: [], newsletter: false, agreeTerms: false, });

  // ==================== REFS ====================
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const departments = config?.departments || [];
  const companySizes = config?.companySizes || [];
  const inquiryTypes = config?.inquiryTypes || [];
  const supportHours = config?.supportHours || [];
  const faqCategories = config?.faqCategories || [];
  const contactMethods = config?.contactMethods || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineMail,
      HiOutlinePhone,
      HiOutlineClock,
      HiOutlineCheckCircle,
      HiOutlineArrowRight,
      HiOutlineUser,
      HiOutlineDocumentText,
      HiOutlinePaperAirplane,
      HiOutlineGlobeAlt,
      HiOutlineClipboardList,
      HiOutlineExternalLink,
      HiOutlineX,
      HiOutlineBookmark,
      HiOutlineSearch,
      HiOutlineChevronDown,
      HiOutlineChevronUp,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineUsers,
      HiOutlineChatAlt,
      HiOutlineTruck,
      HiOutlineBadgeCheck,
      HiOutlineChat,
      HiOutlineRocketLaunch,
      HiOutlineUserCircle,
      HiOutlineCreditCard,
      HiOutlineCog,
      HiOutlineShieldCheck,
      HiOutlineCollection,
      HiOutlineExclamationCircle,
      HiOutlineExclamationTriangle,
      HiOutlineBuildingOffice,
      FaRegBuilding,
    };
    const IconComponent = icons[iconName] || HiOutlineMail;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Handle form input changes
   */
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  /**
   * Handle file attachment upload
   */
  const handleFileUpload = useCallback((e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  }, []);

  /**
   * Remove attachment from list
   */
  const removeAttachment = useCallback((index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  }, []);

  /**
   * Validate form before submission
   * @returns {boolean} - Whether validation passed
   */
  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        department: '',
        inquiryType: 'general',
        priority: 'normal',
        preferredContact: 'email',
        message: '',
        attachments: [],
        newsletter: false,
        agreeTerms: false,
      });
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = '';
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  }, [validateForm]);

  /**
   * Handle helpful/unhelpful vote for FAQ
   */
  const handleHelpful = useCallback((faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('contactFaqHelpfulVotes', JSON.stringify(newVotes));
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
      localStorage.setItem('savedContactFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Highlight search matches in text
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

  // ==================== FILTERED FAQS ====================
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeFaqCategory === 'all' || faq.category === activeFaqCategory;
      const matchesSearch = searchQuery === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeFaqCategory, searchQuery]);

  // ==================== LOCAL STORAGE EFFECTS ====================
  useEffect(() => {
    const savedVotes = localStorage.getItem('contactFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedContactFaqs');
    if (saved) setSavedFaqs(JSON.parse(saved));
  }, []);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Contact Support Center"
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
            aria-label="Support badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-amber-700 dark:text-amber-300'}`}>
              {config?.badge?.text || "Support Center"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "We're"}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-amber-600 to-orange-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || "Here to Help"}
            </span>{' '}
            {config?.title?.suffix || "24/7"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Have questions? Need assistance? Our dedicated support team is ready to help you with any issue, big or small. Reach out through any channel below."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-amber-600 dark:text-amber-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== MODE TOGGLE ==================== */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setShowFaq(false)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${!showFaq
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            Contact Form
          </button>
          <button
            onClick={() => setShowFaq(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${showFaq
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            Frequently Asked Questions
          </button>
        </div>

        {/* ==================== FAQ SECTION ==================== */}
        {showFaq ? (
          <div className="max-w-6xl mx-auto">
            {/* FAQ Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-5 h-5")}
                </div>
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
            </div>

            {/* FAQ Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFaqCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeFaqCategory === category.id
                    ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIcon(category.icon, "w-3 h-3")}
                  {category.name}
                </button>
              ))}
            </div>

            {/* Results Count */}
            {searchQuery && (
              <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
              </div>
            )}

            {/* FAQ Accordion */}
            <div className="space-y-4 mb-12">
              {filteredFaqs.map((faq, index) => {
                const isSaved = savedFaqs.includes(faq.id);
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                  >
                    <div
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpenFaq(isOpen ? null : index)}
                    >
                      <div className="flex items-start gap-3 pr-4">
                        <div className="text-amber-600 dark:text-amber-400 mt-0.5">
                          {getIcon(faq.icon, "w-5 h-5")}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {highlightText(faq.question, searchQuery)}
                          </div>
                          {faq.tags && (
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
                          {isOpen ? getIcon("HiOutlineChevronUp", "w-5 h-5") : getIcon("HiOutlineChevronDown", "w-5 h-5")}
                        </div>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
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
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
                <div className="flex justify-center mb-4 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-12 h-12")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFaqCategory('all');
                  }}
                  className="mt-4 px-4 py-2 text-amber-600 dark:text-amber-400 font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Saved FAQs Section */}
            {savedFaqs.length > 0 && searchQuery === '' && activeFaqCategory === 'all' && (
              <div className="mb-12">
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
                              setActiveFaqCategory(faq.category);
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
        ) : (
          /* ==================== CONTACT FORM SECTION ==================== */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Methods Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="bg-linear-to-r from-amber-600 to-orange-600 p-4 text-white">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    {getIcon("HiOutlineChat", "w-5 h-5")}
                    Contact Information
                  </h3>
                </div>
                <div className="p-5 space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="text-amber-600 dark:text-amber-400 mt-0.5">
                        {getIcon(method.icon, "w-5 h-5")}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">{method.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{method.value}</div>
                        {method.link && (
                          <Link href={method.link} className="text-xs text-amber-600 dark:text-amber-400 mt-1 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                            {method.linkText || 'Contact'}
                            {getIcon("HiOutlineArrowRight", "w-3 h-3")}
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Hours Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="bg-linear-to-r from-amber-600 to-orange-600 p-4 text-white">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    {getIcon("HiOutlineClock", "w-5 h-5")}
                    Support Hours
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  {supportHours.map((hour, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{hour.days}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{hour.hours}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              {config?.showTrustBadge && (
                <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-5 text-center border border-green-100 dark:border-green-800">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {getIcon("HiOutlineCheckCircle", "w-5 h-5 text-green-600")}
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Response Guarantee</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {config?.trustText || "All inquiries receive a response within 24 hours. Enterprise customers get priority 1-hour response."}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2" ref={formRef}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="bg-linear-to-r from-amber-600 to-orange-600 p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    {getIcon("HiOutlinePaperAirplane", "w-5 h-5")}
                    <h3 className="text-xl font-bold">Send us a Message</h3>
                  </div>
                  <p className="text-amber-100 text-sm">Fill out the form and we'll respond within 24 hours</p>
                </div>

                <div className="p-6 md:p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        {getIcon("HiOutlineCheckCircle", "w-8 h-8 text-green-600")}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">Thanks for reaching out. Our support team will get back to you shortly.</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                        {getIcon("HiOutlineDocumentText", "w-4 h-4 text-gray-500")}
                        <span className="text-xs text-gray-600 dark:text-gray-400">Reference #: INV-{Math.floor(Math.random() * 10000)}</span>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            {getIcon("HiOutlineUser", "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4")}
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              className={`w-full pl-9 pr-4 py-2.5 border ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                              placeholder="John"
                            />
                          </div>
                          {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 border ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                            placeholder="Doe"
                          />
                          {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                            placeholder="john@example.com"
                          />
                          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
                          <div className="relative">
                            {getIcon("FaRegBuilding", "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4")}
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full pl-9 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                              placeholder="Acme Inc."
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                          <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select size</option>
                            {companySizes.map((size, idx) => (
                              <option key={idx} value={size.value}>{size.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Department</label>
                          <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select department</option>
                            {departments.map((dept, idx) => (
                              <option key={idx} value={dept.value}>{dept.label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Inquiry Type</label>
                          <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          >
                            {inquiryTypes.map((type, idx) => (
                              <option key={idx} value={type.value}>{type.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
                          <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          >
                            <option value="normal">Normal - General question</option>
                            <option value="high">High - Important issue</option>
                            <option value="urgent">Urgent - System down</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Contact</label>
                          <select
                            name="preferredContact"
                            value={formData.preferredContact}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          >
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                            <option value="chat">Live Chat</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none`}
                          placeholder="Please describe your question or issue in detail. Include any relevant information that will help us assist you better..."
                        />
                        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Attachments (Optional)</label>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                          multiple
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100 dark:file:bg-amber-900/30 dark:file:text-amber-400"
                        />
                        {formData.attachments.length > 0 && (
                          <div className="mt-2 space-y-1">
                            {formData.attachments.map((file, idx) => (
                              <div key={idx} className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                                <span>{file.name}</span>
                                <button
                                  type="button"
                                  onClick={() => removeAttachment(idx)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  {getIcon("HiOutlineX", "w-3 h-3")}
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                        <p className="text-xs text-gray-500 mt-1">Max file size: 10MB. Supported formats: PDF, PNG, JPG, DOC</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleChange}
                          className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                        />
                        <label className="text-sm text-gray-600 dark:text-gray-400">
                          Subscribe to our newsletter for product updates and tips
                        </label>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500 mt-0.5"
                        />
                        <label className="text-sm text-gray-600 dark:text-gray-400">
                          I agree to the <Link href="/privacy" className="text-amber-600 hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-amber-600 hover:underline">Terms of Service</Link> <span className="text-red-500">*</span>
                        </label>
                      </div>
                      {errors.agreeTerms && <p className="text-xs text-red-500 mt-1">{errors.agreeTerms}</p>}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            {getIcon("HiOutlineArrowRight", "w-4 h-4")}
                          </>
                        )}
                      </button>

                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        {getIcon("HiOutlineExclamationTriangle", "w-3 h-3")}
                        <span>By submitting, you agree to our Privacy Policy. We'll never share your information.</span>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== EMERGENCY CONTACT BANNER ==================== */}
        {config?.showEmergencyContact && (
          <div className="mt-12 bg-linear-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  {getIcon("HiOutlineExclamationTriangle", "w-5 h-5 text-red-600")}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">24/7 Emergency Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">For critical system issues affecting your business operations</p>
                </div>
              </div>
              <Link
                href="/emergency"
                className="px-6 py-2.5 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-md"
              >
                {getIcon("HiOutlinePhone", "w-4 h-4")}
                Emergency Hotline
              </Link>
            </div>
          </div>
        )}

        {/* ==================== KNOWLEDGE BASE LINK ==================== */}
        <div className="mt-8 text-center">
          <Link
            href="/knowledge-base"
            className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-all duration-200 group"
          >
            {getIcon("HiOutlineClipboardList", "w-4 h-4")}
            Browse our complete Knowledge Base
            {getIcon("HiOutlineArrowRight", "w-4 h-4 group-hover:translate-x-0.5 transition-transform")}
          </Link>
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
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

export default ContactFormSection3;