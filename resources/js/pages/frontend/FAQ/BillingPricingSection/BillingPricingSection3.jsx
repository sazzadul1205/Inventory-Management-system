// frontend/FAQ/BillingPricingSection/BillingPricingSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
  HiOutlineX,
  HiOutlineQuestionMarkCircle,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineChat,
  HiOutlineMailOpen,
  HiOutlinePrinter,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlineCalculator,
} from 'react-icons/hi';

const BillingPricingSection3 = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPriceCalculator, setShowPriceCalculator] = useState(false);
  const [calculatorValues, setCalculatorValues] = useState({
    users: 10,
    skus: 5000,
    locations: 3,
    annualBilling: true
  });
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    question: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const searchRef = useRef(null);

  const faqs = config?.faqs || [];
  const categories = config?.categories || [];
  const popularQuestions = config?.popularQuestions || [];
  const stats = config?.stats || [];

  useEffect(() => {
    const savedVotes = localStorage.getItem('billingFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedBillingFaqs');
    if (saved) {
      setSavedFaqs(JSON.parse(saved));
    }
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleHelpful = (faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('billingFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  const handleSaveFaq = (faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedBillingFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.question) return;
    setTimeout(() => {
      setContactSubmitted(true);
      setTimeout(() => {
        setShowContactForm(false);
        setContactSubmitted(false);
        setContactForm({ name: '', email: '', question: '' });
      }, 2000);
    }, 500);
  };

  const calculatePrice = () => {
    let basePrice = 49;
    if (calculatorValues.users > 3) basePrice += (calculatorValues.users - 3) * 5;
    if (calculatorValues.skus > 500) basePrice += Math.floor((calculatorValues.skus - 500) / 100) * 0.5;
    if (calculatorValues.locations > 1) basePrice += (calculatorValues.locations - 1) * 50;
    if (calculatorValues.annualBilling) basePrice = basePrice * 0.8;
    return Math.round(basePrice);
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

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Billing & Pricing Help Center"
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

        {/* Price Calculator CTA */}
        <div className="mb-8">
          <button
            onClick={() => setShowPriceCalculator(!showPriceCalculator)}
            className="mx-auto block px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all items-center gap-2"
          >
            <HiOutlineCalculator className="w-5 h-5" />
            {showPriceCalculator ? 'Hide Price Calculator' : 'Calculate Your Price'}
          </button>
        </div>

        {/* Price Calculator */}
        {showPriceCalculator && (
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Price Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Users
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={calculatorValues.users}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, users: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="text-center text-sm text-blue-600 mt-1">{calculatorValues.users} users</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of SKUs
                </label>
                <input
                  type="range"
                  min="100"
                  max="50000"
                  step="100"
                  value={calculatorValues.skus}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, skus: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="text-center text-sm text-blue-600 mt-1">{calculatorValues.skus.toLocaleString()} SKUs</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Locations
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={calculatorValues.locations}
                  onChange={(e) => setCalculatorValues({ ...calculatorValues, locations: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="text-center text-sm text-blue-600 mt-1">{calculatorValues.locations} locations</div>
              </div>
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calculatorValues.annualBilling}
                    onChange={(e) => setCalculatorValues({ ...calculatorValues, annualBilling: e.target.checked })}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Annual billing (save 20%)</span>
                </label>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <div className="text-3xl font-bold text-blue-600">${calculatePrice()}</div>
                <div className="text-sm text-gray-500">per month</div>
                <Link
                  href="/signup"
                  className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Popular Questions */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
            Popular Billing Questions
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
              placeholder="Search billing questions..."
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
              onClick={() => window.print()}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
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

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-start gap-3 pr-4">
                  <div className="text-xl mt-0.5">{faq.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {highlightedText(faq.question, searchQuery)}
                    </div>
                    {faq.tags && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {faq.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSaveFaq(faq.id);
                    }}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <HiOutlineBookmark className={`w-4 h-4 ${savedFaqs.includes(faq.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                  </button>
                  <div className="text-blue-500">
                    {openFaq === index ? (
                      <HiOutlineChevronUp className="w-5 h-5" />
                    ) : (
                      <HiOutlineChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
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

        {/* Empty State */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => setShowContactForm(true)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Ask a Billing Question
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

        {/* Contact Support Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Live Billing Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Chat with our billing team for immediate assistance
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2">
              <HiOutlineChat className="w-4 h-4" />
              Start Chat
            </button>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Send us your billing question and we'll respond within 24 hours
            </p>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2"
            >
              <HiOutlineMailOpen className="w-4 h-4" />
              Send Email
            </button>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowContactForm(false)}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Billing Question</h3>
                <button onClick={() => setShowContactForm(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              {!contactSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Question *</label>
                    <textarea
                      rows={4}
                      value={contactForm.question}
                      onChange={(e) => setContactForm({ ...contactForm, question: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      placeholder="Please include any relevant details about your billing inquiry..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    Send Question
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="text-5xl mb-3">✅</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Question Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400">Our billing team will respond within 24 hours.</p>
                </div>
              )}
              <p className="text-xs text-gray-500 text-center mt-4">We'll never share your email with third parties.</p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineQuestionMarkCircle className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.contactText || "Still have billing questions? Our team is here to help."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Billing Support"}
              <HiOutlineArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Money Back Guarantee */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
              <HiOutlineShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "30-day money-back guarantee on all annual plans"}
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
        input[type="range"] {
          -webkit-appearance: none;
          background: #e5e7eb;
          height: 4px;
          border-radius: 2px;
        }
        input[type="range"]:focus {
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
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

export default BillingPricingSection3;