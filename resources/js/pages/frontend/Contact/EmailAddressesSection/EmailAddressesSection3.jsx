// frontend/Contact/EmailAddressesSection/EmailAddressesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineArrowRight,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
  HiOutlineUsers,
  HiOutlineSparkles,
} from 'react-icons/hi';

const EmailAddressesSection3 = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [activeRegion, setActiveRegion] = useState('all');
  const [sortBy, setSortBy] = useState('department');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [activeTab, setActiveTab] = useState('addresses');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    department: '',
    priority: 'normal',
    attachments: [],
    accountId: '',
    environment: 'production',
    subscribeUpdates: false,
  });
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailReference, setEmailReference] = useState('');
  const searchRef = useRef(null);
  const fileInputRef = useRef(null);

  const faqs = config?.faqs || [];
  const categories = config?.categories || [];
  const emailAddresses = config?.emailAddresses || [];
  const stats = config?.stats || [];
  const emailTypes = config?.emailTypes || [];
  const regions = config?.regions || [];
  const autoResponses = config?.autoResponses || [];

  useEffect(() => {
    const savedVotes = localStorage.getItem('emailFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedEmailFaqs');
    if (saved) {
      setSavedFaqs(JSON.parse(saved));
    }
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleHelpful = (faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('emailFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  const handleSaveFaq = (faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedEmailFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setEmailForm(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  };

  const removeAttachment = (index) => {
    setEmailForm(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!emailForm.name || !emailForm.email || !emailForm.subject || !emailForm.message) return;
    const ref = `REF-${Math.floor(Math.random() * 100000)}`;
    setEmailReference(ref);
    setTimeout(() => {
      setEmailSubmitted(true);
      setTimeout(() => {
        setShowEmailForm(false);
        setEmailSubmitted(false);
        setEmailForm({
          name: '', email: '', subject: '', message: '', department: '', priority: 'normal',
          attachments: [], accountId: '', environment: 'production', subscribeUpdates: false,
        });
        setEmailReference('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      }, 4000);
    }, 1000);
  };

  const handleExport = () => {
    const exportData = filteredEmails.map(email => ({
      department: email.department,
      type: email.type,
      region: email.region || 'Global',
      email: email.email,
      description: email.description,
      responseTime: email.responseTime,
      languages: email.languages,
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${  encodeURIComponent(dataStr)}`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'email-addresses-export.json');
    linkElement.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredEmails = emailAddresses
    .filter(email => {
      const matchesType = activeType === 'all' || email.type === activeType;
      const matchesRegion = activeRegion === 'all' || email.region === activeRegion;
      const matchesSearch = searchQuery === '' ||
        email.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (email.languages && email.languages.some(l => l.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesType && matchesRegion && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'department') return a.department.localeCompare(b.department);
      if (sortBy === 'type') return a.type.localeCompare(b.type);
      if (sortBy === 'region') return (a.region || 'ZZ').localeCompare(b.region || 'ZZ');
      return 0;
    });

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const groupedFaqs = categories.reduce((acc, category) => {
    acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
    return acc;
  }, {});

  const highlightedText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'support': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'sales': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'billing': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'security': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'partnership': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Email Addresses Knowledge Base"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('addresses')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'addresses'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            <HiOutlineMail className="inline w-4 h-4 mr-2" />
            Email Addresses
          </button>
          <button
            onClick={() => setActiveTab('compose')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'compose'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            <HiOutlinePaperAirplane className="inline w-4 h-4 mr-2" />
            Compose Email
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'faq'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            <HiOutlineQuestionMarkCircle className="inline w-4 h-4 mr-2" />
            FAQs
          </button>
        </div>

        {/* Email Addresses Section */}
        {activeTab === 'addresses' && (
          <>
            {/* Type Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <button
                onClick={() => setActiveType('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeType === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                  }`}
              >
                All Departments
              </button>
              {emailTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setActiveType(type.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${activeType === type.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                    }`}
                >
                  <span>{type.icon}</span>
                  {type.label}
                </button>
              ))}
            </div>

            {/* Region Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <button
                onClick={() => setActiveRegion('all')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeRegion === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}
              >
                All Regions
              </button>
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${activeRegion === region.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}
                >
                  <span>{region.icon}</span>
                  {region.name}
                </button>
              ))}
            </div>

            {/* Search and Action Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative" ref={searchRef}>
                <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by department, email, region, or language..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                >
                  <HiOutlineFilter className="w-4 h-4" />
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="department">Sort by Department</option>
                  <option value="type">Sort by Type</option>
                  <option value="region">Sort by Region</option>
                </select>
                <button
                  onClick={handleExport}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                  title="Export Emails"
                >
                  <HiOutlineDownload className="w-4 h-4" />
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                  title="Print Emails"
                >
                  <HiOutlinePrinter className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Department</label>
                    <select
                      value={activeType}
                      onChange={(e) => setActiveType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                    >
                      <option value="all">All Departments</option>
                      {emailTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
                    <select
                      value={activeRegion}
                      onChange={(e) => setActiveRegion(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                    >
                      <option value="all">All Regions</option>
                      {regions.map((region) => (
                        <option key={region.id} value={region.id}>{region.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                    >
                      <option value="department">Department</option>
                      <option value="type">Type</option>
                      <option value="region">Region</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Results Count */}
            {searchQuery && (
              <div className="text-center mb-4 text-sm text-gray-500">
                Found {filteredEmails.length} email addresses for "{searchQuery}"
              </div>
            )}

            {/* Email Addresses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredEmails.map((email, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer group"
                >
                  <div className={`h-1 ${email.type === 'support' ? 'bg-blue-500' : email.type === 'sales' ? 'bg-green-500' : email.type === 'billing' ? 'bg-purple-500' : email.type === 'security' ? 'bg-red-500' : 'bg-orange-500'}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{email.icon}</div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{email.department}</h3>
                          <div className="flex items-center gap-1 mt-0.5">
                            <HiOutlineGlobeAlt className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-500">{email.region || 'Global'}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(email.type)}`}>
                        {email.type === 'support' ? 'Support' : email.type === 'sales' ? 'Sales' : email.type === 'billing' ? 'Billing' : email.type === 'security' ? 'Security' : 'Partnership'}
                      </span>
                    </div>
                    <div className="mb-4">
                      <a
                        href={`mailto:${email.email}`}
                        className="text-base font-semibold text-blue-600 dark:text-blue-400 hover:underline break-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {email.email}
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {email.description}
                    </p>
                    <div className="flex items-start gap-2 mb-3">
                      <HiOutlineClock className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {email.responseTime || 'Response within 24 hours'}
                      </div>
                    </div>
                    {email.languages && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {email.languages.map((lang, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                            {lang === 'en' ? 'English' : lang === 'es' ? 'Español' : lang === 'fr' ? 'Français' : lang === 'de' ? 'Deutsch' : lang === 'zh' ? '中文' : lang === 'ja' ? '日本語' : lang}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${email.email}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <HiOutlineMail className="w-4 h-4" />
                        Send Email
                      </a>
                      <button
                        onClick={() => {
                          setSelectedEmail(email);
                          setEmailForm(prev => ({ ...prev, department: email.department, subject: `Inquiry for ${email.department}` }));
                          setActiveTab('compose');
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-all"
                      >
                        <HiOutlinePaperAirplane className="w-4 h-4" />
                        Compose
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredEmails.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No email addresses found</h3>
                <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={() => {
                    setActiveType('all');
                    setActiveRegion('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}

        {/* Compose Email Section */}
        {activeTab === 'compose' && (
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">✉️</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Compose Email</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Send a message to our support team. We'll respond within 24 hours.
                </p>
              </div>
              {!emailSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={emailForm.name}
                        onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email *</label>
                      <input
                        type="email"
                        value={emailForm.email}
                        onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Department</label>
                      <select
                        value={emailForm.department}
                        onChange={(e) => setEmailForm({ ...emailForm, department: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      >
                        <option value="">Select Department</option>
                        {emailAddresses.map((email, idx) => (
                          <option key={idx} value={email.department}>{email.department}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
                      <select
                        value={emailForm.priority}
                        onChange={(e) => setEmailForm({ ...emailForm, priority: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      >
                        <option value="low">Low - General question</option>
                        <option value="normal">Normal - Standard inquiry</option>
                        <option value="high">High - Urgent issue</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Account ID (Optional)</label>
                      <input
                        type="text"
                        value={emailForm.accountId}
                        onChange={(e) => setEmailForm({ ...emailForm, accountId: e.target.value })}
                        placeholder="If you have an account"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Environment</label>
                      <select
                        value={emailForm.environment}
                        onChange={(e) => setEmailForm({ ...emailForm, environment: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      >
                        <option value="production">Production</option>
                        <option value="staging">Staging</option>
                        <option value="development">Development</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                    <input
                      type="text"
                      value={emailForm.subject}
                      onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                    <textarea
                      rows={6}
                      value={emailForm.message}
                      onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      placeholder="Please describe your question or issue in detail. Include steps to reproduce, error messages, and any relevant information..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Attachments (Optional)</label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      multiple
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {emailForm.attachments.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {emailForm.attachments.map((file, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                            <span>{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeAttachment(idx)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <HiOutlineX className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-gray-500 mt-1">Max file size: 10MB per file. Supported: PNG, JPG, PDF, DOC, TXT, LOG</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={emailForm.subscribeUpdates}
                      onChange={(e) => setEmailForm({ ...emailForm, subscribeUpdates: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 mt-0.5"
                    />
                    <label className="text-sm text-gray-600 dark:text-gray-400">
                      Subscribe to product updates, feature announcements, and best practices
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    Send Email
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-5xl mb-3">✅</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Sent Successfully!</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Your message has been sent to our support team.</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-3">
                    <HiOutlineDocumentText className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-mono text-gray-700 dark:text-gray-300">Reference: {emailReference}</span>
                  </div>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours. You'll receive a confirmation email shortly.</p>
                  <div className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-2">
                    <HiOutlineSparkles className="w-3 h-3" />
                    <span>Enterprise customers receive priority response within 4 hours</span>
                  </div>
                </div>
              )}
            </div>

            {/* Auto-Response Info */}
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineSparkles className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">What happens after you send?</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {autoResponses.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto">
            {/* FAQ Search */}
            <div className="mb-6">
              <div className="relative">
                <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Results Count */}
            {searchQuery && (
              <div className="text-center mb-4 text-sm text-gray-500">
                Found {filteredFaqs.length} results for "{searchQuery}"
              </div>
            )}

            {/* FAQ Category Accordion */}
            <div className="space-y-6 mb-12">
              {categories.map((category) => {
                const categoryFaqs = groupedFaqs[category.id] || [];
                if (categoryFaqs.length === 0 && searchQuery) return null;

                const isExpanded = expandedCategories[category.id] || searchQuery !== '';

                return (
                  <div key={category.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{category.icon}</span>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                          <p className="text-sm text-gray-500">{category.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">{categoryFaqs.length} questions</span>
                        {isExpanded ? (
                          <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="border-t border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
                        {categoryFaqs.map((faq, idx) => (
                          <div key={idx} className="p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <button
                              onClick={() => toggleFaq(`${category.id}-${idx}`)}
                              className="w-full text-left flex justify-between items-center"
                            >
                              <div className="flex items-start gap-3 pr-4">
                                <div className="text-xl mt-0.5">{faq.icon}</div>
                                <div className="flex-1">
                                  <div className="font-semibold text-gray-900 dark:text-white">
                                    {highlightedText(faq.question, searchQuery)}
                                  </div>
                                  {faq.tags && (
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {faq.tags.slice(0, 2).map((tag, tagIdx) => (
                                        <span key={tagIdx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSaveFaq(faq.id);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleSaveFaq(faq.id);
                      }
                    }}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label={savedFaqs.includes(faq.id) ? 'Remove bookmark' : 'Save bookmark'}
                  >
                    <HiOutlineBookmark className={`w-4 h-4 ${savedFaqs.includes(faq.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                  </span>
                                <div className="text-blue-500">
                                  {openFaq === `${category.id}-${idx}` ? (
                                    <HiOutlineChevronUp className="w-5 h-5" />
                                  ) : (
                                    <HiOutlineChevronDown className="w-5 h-5" />
                                  )}
                                </div>
                              </div>
                            </button>

                            {openFaq === `${category.id}-${idx}` && (
                              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {highlightedText(faq.answer, searchQuery)}
                                </p>
                                {faq.link && (
                                  <Link
                                    href={faq.link}
                                    className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-3 hover:gap-2 transition-all"
                                  >
                                    Learn more
                                    <HiOutlineExternalLink className="w-3 h-3" />
                                  </Link>
                                )}

                                {/* Helpful Section */}
                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                  <div className="flex items-center gap-4">
                                    <span className="text-xs text-gray-500">Was this helpful?</span>
                                    <button
                                      onClick={() => handleHelpful(faq.id, true)}
                                      className={`flex items-center gap-1 text-xs transition-colors ${helpfulVotes[faq.id] === true
                                          ? 'text-green-600'
                                          : 'text-gray-400 hover:text-green-600'
                                        }`}
                                    >
                                      <HiOutlineThumbUp className="w-4 h-4" />
                                      Yes
                                    </button>
                                    <button
                                      onClick={() => handleHelpful(faq.id, false)}
                                      className={`flex items-center gap-1 text-xs transition-colors ${helpfulVotes[faq.id] === false
                                          ? 'text-red-600'
                                          : 'text-gray-400 hover:text-red-600'
                                        }`}
                                    >
                                      <HiOutlineThumbDown className="w-4 h-4" />
                                      No
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* FAQ Empty State */}
            {filteredFaqs.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                <p className="text-gray-500">Try adjusting your search to find what you're looking for.</p>
              </div>
            )}

            {/* Saved FAQs Section */}
            {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HiOutlineBookmark className="w-5 h-5 text-blue-600" />
                  Saved Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                      <div className="flex items-start gap-2">
                        <div className="text-xl">{faq.icon}</div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                          <button
                            onClick={() => {
                              setSearchQuery(faq.question.substring(0, 30));
                              setOpenFaq(null);
                            }}
                            className="text-xs text-blue-600 mt-1 hover:underline"
                          >
                            View Answer
                          </button>
                        </div>
                        <button
                          onClick={() => handleSaveFaq(faq.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <HiOutlineX className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Email Security Note */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HiOutlineShieldCheck className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email Security & Privacy</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We take your security seriously. All email communications are encrypted and we never ask for passwords or sensitive information via email.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <HiOutlineDocumentText className="w-4 h-4 text-blue-600" />
              <span>PGP Encryption Available</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineMail className="w-4 h-4 text-blue-600" />
              <span>SPF/DKIM/DMARC Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
              <span>GDPR & CCPA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineUsers className="w-4 h-4 text-blue-600" />
              <span>Data Never Shared</span>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineQuestionMarkCircle className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.contactText || "Need help finding the right email address? Contact our support team."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Us"}
              <HiOutlineArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Response Guarantee */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
              <HiOutlineShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "All emails receive a response within 24 hours. Enterprise customers get priority response within 4 hours."}
              </span>
            </div>
          </div>
        )}
      </div>

      <style>{`
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
          .no-print, button, .bg-noise-pattern {
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

export default EmailAddressesSection3;
