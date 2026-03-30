// frontend/Contact/PartnerInquiriesSection/PartnerInquiriesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineDownload,
  HiOutlineGlobeAlt,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineX,
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineSparkles,
} from 'react-icons/hi';
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdOutlineHandshake } from "react-icons/md";

const PartnerInquiriesSection3 = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showPartnerPortal, setShowPartnerPortal] = useState(false);
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [applicationForm, setApplicationForm] = useState({
    companyName: '',
    website: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    partnerType: 'implementation',
    targetLevel: 'registered',
    companySize: '',
    yearsInBusiness: '',
    currentCustomers: '',
    annualRevenue: '',
    referralPartners: '',
    reasonForApplying: '',
    expertise: '',
    referralSource: '',
    agreeTerms: false,
    subscribeUpdates: false,
  });
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const searchRef = useRef(null);

  const faqs = config?.faqs || [];
  const categories = config?.categories || [];
  const popularQuestions = config?.popularQuestions || [];
  const stats = config?.stats || [];
  const partnerLevels = config?.partnerLevels || [];
  const countries = config?.countries || [];
  const companySizes = config?.companySizes || [];
  const successStories = config?.successStories || [];
  const partnerEvents = config?.partnerEvents || [];
  const partnerResources = config?.partnerResources || [];

  useEffect(() => {
    const savedVotes = localStorage.getItem('partnerFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedPartnerFaqs');
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
      localStorage.setItem('partnerFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  const handleSaveFaq = (faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedPartnerFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    if (!applicationForm.companyName || !applicationForm.contactName || !applicationForm.email || !applicationForm.agreeTerms) return;

    const newApplicationId = `PART-${Math.floor(Math.random() * 100000)}`;
    setApplicationId(newApplicationId);

    setTimeout(() => {
      setApplicationSubmitted(true);
      setTimeout(() => {
        setShowApplicationForm(false);
        setApplicationSubmitted(false);
        setApplicationForm({
          companyName: '', website: '', contactName: '', email: '', phone: '',
          country: '', partnerType: 'implementation', targetLevel: 'registered',
          companySize: '', yearsInBusiness: '', currentCustomers: '', annualRevenue: '',
          referralPartners: '', reasonForApplying: '', expertise: '', referralSource: '',
          agreeTerms: false, subscribeUpdates: false,
        });
        setApplicationId('');
      }, 5000);
    }, 1000);
  };

  const handleExport = () => {
    const exportData = filteredFaqs.map(faq => ({
      question: faq.question,
      answer: faq.answer,
      category: categories.find(c => c.id === faq.category)?.name || faq.category,
      tags: faq.tags
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${  encodeURIComponent(dataStr)}`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'partner-faq-export.json');
    linkElement.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredFaqs = faqs
    .filter(faq => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'recent') return b.updatedAt?.localeCompare(a.updatedAt) || 0;
      if (sortBy === 'popular') return (b.views || 0) - (a.views || 0);
      if (sortBy === 'helpful') return (helpfulVotes[b.id] ? 1 : 0) - (helpfulVotes[a.id] ? 1 : 0);
      return 0;
    });

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

  const groupedFaqs = categories.reduce((acc, category) => {
    acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
    return acc;
  }, {});

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Partner Inquiries Knowledge Base"
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

        {/* Partner Levels */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Partner Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerLevels.map((level, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${level.featured ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {level.featured && (
                  <div className="bg-blue-600 text-white text-center text-sm font-semibold py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-6 text-center">
                  <div className="text-4xl mb-3">{level.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{level.name}</h4>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {level.commission}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{level.description}</p>
                  <ul className="space-y-2 mb-6 text-left">
                    {level.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={level.ctaLink}
                    className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all ${level.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    {level.ctaText}
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Partner Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{story.icon}</div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{story.company}</div>
                    <div className="text-xs text-gray-500">{story.partnerType}</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">"{story.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500">{story.result}</div>
                  </div>
                  <Link href={story.link} className="text-blue-600 text-sm font-semibold hover:underline">
                    Read Story
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Events */}
        <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Partner Events</h3>
            <p className="text-gray-600 dark:text-gray-400">Join us for training, networking, and exclusive partner events</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerEvents.map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">{event.icon}</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{event.title}</h4>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-2">
                  <HiOutlineCalendar className="w-3 h-3" />
                  {event.date}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{event.description}</p>
                <Link href={event.link} className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1">
                  Register Now
                  <HiOutlineArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'faq'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
          >
            Frequently Asked Questions
          </button>
          <button
            onClick={() => setShowPartnerPortal(!showPartnerPortal)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${showPartnerPortal
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
          >
            Partner Resources
          </button>
          <button
            onClick={() => setShowApplicationForm(true)}
            className="px-6 py-2 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-full text-sm font-medium transition-all hover:shadow-lg"
          >
            Apply Now
          </button>
        </div>

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <>
            {/* Popular Questions */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
                Popular Partner Questions
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {popularQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(question)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 transition-all"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Search and Action Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative" ref={searchRef}>
                <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search partner questions..."
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
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="helpful">Most Helpful</option>
                </select>
                <button
                  onClick={handleExport}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                  title="Export FAQs"
                >
                  <HiOutlineDownload className="w-4 h-4" />
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                  title="Print FAQs"
                >
                  <HiOutlinePrinter className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-3 py-1 rounded-full text-sm transition-all ${activeCategory === 'all'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                          }`}
                      >
                        All
                      </button>
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-1 ${activeCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                            }`}
                        >
                          <span>{category.icon}</span>
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="recent">Most Recent</option>
                      <option value="popular">Most Popular</option>
                      <option value="helpful">Most Helpful</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Results Count */}
            {searchQuery && (
              <div className="text-center mb-4 text-sm text-gray-500">
                Found {filteredFaqs.length} results for "{searchQuery}"
              </div>
            )}

            {/* Category Accordion View */}
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

            {/* Empty State */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Apply to Become a Partner
                </button>
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
                              setActiveCategory(faq.category);
                              setSearchQuery('');
                              setOpenFaq(null);
                            }}
                            className="text-xs text-blue-600 mt-1 hover:underline"
                          >
                            View in {categories.find(c => c.id === faq.category)?.name}
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
          </>
        )}

        {/* Partner Resources Section */}
        {showPartnerPortal && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerResources.map((resource, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <div className="text-4xl mb-3">{resource.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{resource.items} resources</span>
                    <Link href={resource.link} className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:gap-2 transition-all">
                      Browse
                      <HiOutlineArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/partner-portal"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                Access Partner Portal
                <HiOutlineArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Partner Resources Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">📘</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Partner Program Guide</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Download our comprehensive partner program guide
            </p>
            <Link
              href="/downloads/partner-guide.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <HiOutlineDownload className="w-4 h-4" />
              Download Guide
            </Link>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Partner Portal</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Access resources, training, and support materials
            </p>
            <Link
              href="/partner-portal"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <HiOutlineGlobeAlt className="w-4 h-4" />
              Access Portal
            </Link>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Success Stories</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              See how partners are succeeding with our program
            </p>
            <Link
              href="/partner-success-stories"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <HiOutlineTrophy className="w-4 h-4" />
              Read Stories
            </Link>
          </div>
        </div>

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowApplicationForm(false)}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Partner Application</h3>
                  <p className="text-sm text-gray-500 mt-1">Join our growing network of partners</p>
                </div>
                <button onClick={() => setShowApplicationForm(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              <div className="p-6">
                {!applicationSubmitted ? (
                  <form onSubmit={handleApplicationSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name *</label>
                        <input
                          type="text"
                          value={applicationForm.companyName}
                          onChange={(e) => setApplicationForm({ ...applicationForm, companyName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
                        <input
                          type="url"
                          value={applicationForm.website}
                          onChange={(e) => setApplicationForm({ ...applicationForm, website: e.target.value })}
                          placeholder="https://example.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contact Name *</label>
                        <input
                          type="text"
                          value={applicationForm.contactName}
                          onChange={(e) => setApplicationForm({ ...applicationForm, contactName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                        <input
                          type="email"
                          value={applicationForm.email}
                          onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                        <input
                          type="tel"
                          value={applicationForm.phone}
                          onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Country</label>
                        <select
                          value={applicationForm.country}
                          onChange={(e) => setApplicationForm({ ...applicationForm, country: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        >
                          <option value="">Select country</option>
                          {countries.map((country, idx) => (
                            <option key={idx} value={country.value}>{country.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Partner Type *</label>
                        <select
                          value={applicationForm.partnerType}
                          onChange={(e) => setApplicationForm({ ...applicationForm, partnerType: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        >
                          <option value="implementation">Implementation Partner</option>
                          <option value="technology">Technology Partner</option>
                          <option value="reseller">Reseller Partner</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Target Partner Level</label>
                        <select
                          value={applicationForm.targetLevel}
                          onChange={(e) => setApplicationForm({ ...applicationForm, targetLevel: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        >
                          <option value="registered">Registered</option>
                          <option value="silver">Silver</option>
                          <option value="gold">Gold</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                        <select
                          value={applicationForm.companySize}
                          onChange={(e) => setApplicationForm({ ...applicationForm, companySize: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        >
                          <option value="">Select size</option>
                          {companySizes.map((size, idx) => (
                            <option key={idx} value={size.value}>{size.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Years in Business</label>
                        <select
                          value={applicationForm.yearsInBusiness}
                          onChange={(e) => setApplicationForm({ ...applicationForm, yearsInBusiness: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        >
                          <option value="">Select</option>
                          <option value="<1">Less than 1 year</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5-10">5-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Customers</label>
                        <input
                          type="text"
                          value={applicationForm.currentCustomers}
                          onChange={(e) => setApplicationForm({ ...applicationForm, currentCustomers: e.target.value })}
                          placeholder="e.g., 100+ businesses"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Annual Revenue</label>
                        <select
                          value={applicationForm.annualRevenue}
                          onChange={(e) => setApplicationForm({ ...applicationForm, annualRevenue: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        >
                          <option value="">Select range</option>
                          <option value="<1M">Less than $1M</option>
                          <option value="1M-5M">$1M - $5M</option>
                          <option value="5M-10M">$5M - $10M</option>
                          <option value="10M-50M">$10M - $50M</option>
                          <option value="50M+">$50M+</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Why do you want to become a partner? *</label>
                      <textarea
                        rows={3}
                        value={applicationForm.reasonForApplying}
                        onChange={(e) => setApplicationForm({ ...applicationForm, reasonForApplying: e.target.value })}
                        placeholder="Tell us about your business, expertise, and why you're interested in partnering with us..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Relevant Expertise</label>
                      <textarea
                        rows={2}
                        value={applicationForm.expertise}
                        onChange={(e) => setApplicationForm({ ...applicationForm, expertise: e.target.value })}
                        placeholder="Describe your relevant experience, technical capabilities, and areas of expertise..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">How did you hear about us?</label>
                      <select
                        value={applicationForm.referralSource}
                        onChange={(e) => setApplicationForm({ ...applicationForm, referralSource: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      >
                        <option value="">Select source</option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="event">Event/Conference</option>
                        <option value="referral">Partner Referral</option>
                        <option value="email">Email Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={applicationForm.agreeTerms}
                          onChange={(e) => setApplicationForm({ ...applicationForm, agreeTerms: e.target.checked })}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 mt-0.5"
                        />
                        <label className="text-sm text-gray-600 dark:text-gray-400">
                          I agree to the <Link href="/partner-terms" className="text-blue-600 hover:underline">Partner Terms and Conditions</Link> and confirm that the information provided is accurate. *
                        </label>
                      </div>
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="subscribeUpdates"
                          checked={applicationForm.subscribeUpdates}
                          onChange={(e) => setApplicationForm({ ...applicationForm, subscribeUpdates: e.target.checked })}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 mt-0.5"
                        />
                        <label className="text-sm text-gray-600 dark:text-gray-400">
                          Subscribe to partner updates, training opportunities, and event invitations
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                    >
                      Submit Application
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Thank you for your interest in becoming a partner.</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                      <HiOutlineDocumentText className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-mono text-gray-700 dark:text-gray-300">Application ID: {applicationId}</span>
                    </div>
                    <p className="text-sm text-gray-500">Our partner team will review your application and contact you within 5-7 business days.</p>
                    <div className="mt-4 text-xs text-gray-400">
                      <HiOutlineSparkles className="inline w-3 h-3 mr-1" />
                      You'll receive a confirmation email shortly with next steps.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Partner CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <MdOutlineHandshake className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.contactText || "Ready to become a partner? Join our growing network of partners today."}
            </span>
            <Link
              href={config?.contactLink || "/partner/apply"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Apply Now"}
              <HiOutlineArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Partner Guarantee */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
              <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "Join our partner network and receive dedicated support, training, and competitive commission rates"}
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

export default PartnerInquiriesSection3;
