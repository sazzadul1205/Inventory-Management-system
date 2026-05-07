// page/frontend/Support/HelpCenterSection/HelpCenterSection1.jsx

/**
 * Help Center Section I - Support Hub & Knowledge Base
 *
 * Unique Design Elements:
 * - Stats Cards for Support Metrics (Articles, Satisfied Users, Response Time, Solutions)
 * - Search Bar with Live Filtering
 * - Category Tabs with Count Badges
 * - Popular Articles Section with Quick Links
 * - Video Tutorials Gallery with Play Button
 * - FAQ Accordions with Helpful Feedback Buttons
 * - Support Options Grid (Documentation, Live Chat, Submit Ticket)
 * - Contact Information Cards
 * - Submit Ticket Modal with Priority Selection
 * - Contact Support Modal with Category Selection
 * - Helpful Feedback Storage in localStorage
 * - Animated Blur Background Orbs
 * - Fully Responsive Layout
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineSearch,
  HiOutlineQuestionMarkCircle,
  HiOutlineDocumentText,
  HiOutlineMail,
  HiOutlineChat,
  HiOutlinePhone,
  HiOutlineVideoCamera,
  HiOutlineChip,
  HiOutlineUsers,
  HiOutlineGlobe,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineArrowRight,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineStar,
  HiOutlineSupport,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUser,
} from 'react-icons/hi';
import { HiOutlineTicket, HiOutlinePlay, HiOutlineLifebuoy } from 'react-icons/hi2';

const HelpCenterSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [ticketNumber, setTicketNumber] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [helpfulFeedback, setHelpfulFeedback] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', category: 'general', message: '', priority: 'normal', attachment: null, });

  // ===================== REFS =====================
  const modalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const categories = config?.categories || [
    { id: 'all', name: 'All Topics', icon: 'question', count: faqs.length },
    { id: 'getting-started', name: 'Getting Started', icon: 'rocket', count: faqs.filter(f => f.category === 'getting-started').length },
    { id: 'account', name: 'Account & Billing', icon: 'user', count: faqs.filter(f => f.category === 'account').length },
    { id: 'features', name: 'Features', icon: 'chip', count: faqs.filter(f => f.category === 'features').length },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: 'wrench', count: faqs.filter(f => f.category === 'troubleshooting').length },
    { id: 'security', name: 'Security', icon: 'shield', count: faqs.filter(f => f.category === 'security').length },
  ];
  const stats = config?.stats || [];
  const contactInfo = config?.contactInfo || {
    email: 'support@supplychainpro.com',
    phone: '+1 (800) 555-0123',
    chat: 'Available 24/7',
    hours: 'Mon-Fri, 9am-6pm EST',
  };
  const popularArticles = config?.popularArticles || [];
  const videoTutorials = config?.videoTutorials || [];

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchQuery === '' ||
        faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [faqs, searchQuery, activeCategory]);

  // Group FAQs by category for display
  const groupedFaqs = useMemo(() => {
    const groups = {};
    filteredFaqs.forEach(faq => {
      if (!groups[faq.category]) {
        groups[faq.category] = [];
      }
      groups[faq.category].push(faq);
    });
    return groups;
  }, [filteredFaqs]);

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    const saved = localStorage.getItem('faqHelpfulFeedback');
    if (saved) {
      setHelpfulFeedback(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('faqHelpfulFeedback', JSON.stringify(helpfulFeedback));
  }, [helpfulFeedback]);

  // ==================== FORM HANDLERS ====================
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowContactModal(false);
      setFormData({
        name: '', email: '', subject: '', category: 'general',
        message: '', priority: 'normal', attachment: null
      });
    }, 3000);
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newTicketNumber = `TKT-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
    setTicketNumber(newTicketNumber);
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubmitted(false);
      setShowTicketModal(false);
      setFormData({
        name: '', email: '', subject: '', category: 'general',
        message: '', priority: 'normal', attachment: null
      });
      setTicketNumber('');
    }, 3000);
  };

  // ==================== HELPER FUNCTIONS ====================
  const markHelpful = (faqId, isHelpful) => {
    setHelpfulFeedback(prev => ({
      ...prev,
      [faqId]: { helpful: isHelpful, timestamp: new Date().toISOString() }
    }));
  };

  const getCategoryIcon = (iconName) => {
    const icons = {
      question: <HiOutlineQuestionMarkCircle className="w-5 h-5" />,
      rocket: <HiOutlineSparkles className="w-5 h-5" />,
      user: <HiOutlineUser className="w-5 h-5" />,
      chip: <HiOutlineChip className="w-5 h-5" />,
      wrench: <HiOutlineSupport className="w-5 h-5" />,
      shield: <HiOutlineShieldCheck className="w-5 h-5" />,
    };
    return icons[iconName] || <HiOutlineQuestionMarkCircle className="w-5 h-5" />;
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Help Center Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineLifebuoy className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Support Center"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "How Can We"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Help You"}</span> {config?.title?.suffix || "?"}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Find answers to common questions, browse documentation, or contact our support team. We're here to help you succeed."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'articles' ? <HiOutlineDocumentText className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                    stat.icon === 'users' ? <HiOutlineUsers className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                      stat.icon === 'clock' ? <HiOutlineClock className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                        <HiOutlineCheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== SEARCH BAR ==================== */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers, articles, or topics..."
              className="w-full pl-12 pr-32 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm text-gray-900 dark:text-white"
              aria-label="Search for answers"
            />
            <button
              onClick={() => { }}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-all duration-300"
              aria-label="Search"
            >
              Search
            </button>
          </div>
        </div>

        {/* ==================== CATEGORY TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Filter by ${category.name}`}
            >
              {getCategoryIcon(category.icon)}
              {category.name}
              {category.count > 0 && (
                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== POPULAR ARTICLES SECTION ==================== */}
        {popularArticles.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <HiOutlineStar className="w-5 h-5 text-yellow-500" />
                Popular Articles
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {popularArticles.map((article, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-pointer group"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && {}}
                >
                  <HiOutlineDocumentText className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 flex-1">{article.title}</span>
                  <HiOutlineArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== VIDEO TUTORIALS SECTION ==================== */}
        {videoTutorials.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <HiOutlineVideoCamera className="w-5 h-5 text-purple-500" />
                Video Tutorials
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {videoTutorials.slice(0, 3).map((video, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && {}}
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <HiOutlinePlay className="w-6 h-6 text-white ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-0.5 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-2 line-clamp-2">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== FAQS ACCORDION ==================== */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineQuestionMarkCircle className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No FAQs found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              aria-label="Clear filters"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-8 mb-12">
            {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => {
              const categoryName = categories.find(c => c.id === category)?.name || category;
              return (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                    {categoryName}
                  </h3>
                  <div className="space-y-3">
                    {categoryFaqs.map((faq) => (
                      <div
                        key={faq.id}
                        className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800"
                      >
                        <button
                          onClick={() => setSelectedFaq(selectedFaq === faq.id ? null : faq.id)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                          aria-label={`Toggle answer for ${faq.question}`}
                        >
                          <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                          <span className="text-gray-400 dark:text-gray-500 text-xl">{selectedFaq === faq.id ? '−' : '+'}</span>
                        </button>
                        {selectedFaq === faq.id && (
                          <div className="px-6 pb-4 pt-0 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{faq.answer}</p>
                            {faq.tags && faq.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-3">
                                {faq.tags.map((tag, idx) => (
                                  <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                            <div className="flex items-center gap-4">
                              <span className="text-xs text-gray-500 dark:text-gray-400">Was this helpful?</span>
                              <button
                                onClick={() => markHelpful(faq.id, true)}
                                className={`p-1 rounded-lg transition-all duration-300 ${helpfulFeedback[faq.id]?.helpful === true
                                  ? 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
                                  : 'text-gray-400 hover:text-green-600 dark:hover:text-green-400'
                                  }`}
                                aria-label="Mark as helpful"
                              >
                                <HiOutlineThumbUp className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => markHelpful(faq.id, false)}
                                className={`p-1 rounded-lg transition-all duration-300 ${helpfulFeedback[faq.id]?.helpful === false
                                  ? 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30'
                                  : 'text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                                  }`}
                                aria-label="Mark as not helpful"
                              >
                                <HiOutlineThumbDown className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== SUPPORT OPTIONS GRID ==================== */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
              <HiOutlineDocumentText className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Browse our detailed documentation and user guides.</p>
            <button className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-all duration-300 group" aria-label="Browse documentation">
              Browse Docs <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-purple-600 text-white flex items-center justify-center mx-auto mb-4">
              <HiOutlineChat className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Chat with our support team for immediate assistance.</p>
            <button className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-all duration-300 group" aria-label="Start live chat">
              Start Chat <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-green-600 text-white flex items-center justify-center mx-auto mb-4">
              <HiOutlineTicket className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Submit Ticket</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Get personalized help from our support specialists.</p>
            <button
              onClick={() => setShowTicketModal(true)}
              className="text-green-600 dark:text-green-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-all duration-300 group"
              aria-label="Submit support ticket"
            >
              Submit Request <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* ==================== CONTACT INFO CARDS ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlineMail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email Support</p>
              <p className="font-medium text-gray-900 dark:text-white">{contactInfo.email}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Response within 24h</p>
            </div>
            <div className="transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlinePhone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone Support</p>
              <p className="font-medium text-gray-900 dark:text-white">{contactInfo.phone}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{contactInfo.hours}</p>
            </div>
            <div className="transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlineChat className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Live Chat</p>
              <p className="font-medium text-gray-900 dark:text-white">{contactInfo.chat}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Instant response</p>
            </div>
            <div className="transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlineGlobe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Community Forum</p>
              <p className="font-medium text-gray-900 dark:text-white">Join Discussion</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Connect with peers</p>
            </div>
          </div>
        </div>

        {/* ==================== CONTACT MODAL ==================== */}
        {showContactModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowContactModal(false)}
            role="dialog"
            aria-label="Contact Support"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Contact Support</h3>
                  <button onClick={() => setShowContactModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Our support team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full name *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        aria-label="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email address *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        aria-label="Your email address"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Subject"
                      />
                    </div>
                    <div>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        aria-label="Select category"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Issue</option>
                        <option value="billing">Billing Question</option>
                        <option value="feature">Feature Request</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message *"
                        rows="4"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900 dark:text-white placeholder-gray-500 ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        aria-label="Your message"
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      aria-label="Send message"
                    >
                      Send Message
                      <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== TICKET MODAL ==================== */}
        {showTicketModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowTicketModal(false)}
            role="dialog"
            aria-label="Submit Support Ticket"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="bg-linear-to-r from-green-600 to-teal-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Submit Support Ticket</h3>
                  <button onClick={() => setShowTicketModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {ticketSubmitted ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ticket Created!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      Your ticket number is: <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{ticketNumber}</span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      We'll email you updates on your request.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleTicketSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full name *"
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            }`}
                          aria-label="Your full name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email *"
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            }`}
                          aria-label="Your email address"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        aria-label="Subject"
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white"
                        aria-label="Select priority"
                      >
                        <option value="low">Low Priority</option>
                        <option value="normal">Normal Priority</option>
                        <option value="high">High Priority</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your issue *"
                        rows="5"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-gray-900 dark:text-white placeholder-gray-500 ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        aria-label="Describe your issue"
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Attachments (optional)</label>
                      <input
                        type="file"
                        name="attachment"
                        onChange={handleInputChange}
                        className="w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-900/30 dark:file:text-blue-400 hover:file:bg-blue-100 dark:hover:file:bg-blue-800/40 transition-colors"
                        aria-label="Attach file"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      aria-label="Submit ticket"
                    >
                      Submit Ticket
                      <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
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
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default HelpCenterSection1;