// page/frontend/Home/FAQSection/FAQSection3.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineQuestionMarkCircle,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineChat,
  HiOutlineArrowRight,
  HiOutlineSearch,
  HiOutlineBookOpen,
  HiOutlineDocumentText,
  HiOutlineVideoCamera,
  HiOutlineUsers,
  HiOutlineSupport,
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineThumbUp,
  HiOutlineFlag
} from 'react-icons/hi';

const resolveOnClick = (handler) => {
  if (typeof handler === "function") return handler;
  if (typeof handler === "string") {
    return () => {
      const fnName = handler.replace(/\(\s*\)$/, "");
      const fn = typeof window !== "undefined" ? window[fnName] : undefined;
      if (typeof fn === "function") {
        fn();
      }
    };
  }
  return undefined;
};

const FAQSection3 = ({ config }) => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');

  // State for active FAQ accordion
  const [openItems, setOpenItems] = useState([]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for "Was this helpful?" feedback
  const [helpfulFeedback, setHelpfulFeedback] = useState({});

  // Filter FAQs based on category and search
  const filteredFAQs = config?.faqs?.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  // Toggle FAQ item
  const toggleItem = (id) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Handle helpful feedback
  const handleHelpful = (id, isHelpful) => {
    setHelpfulFeedback(prev => ({
      ...prev,
      [id]: isHelpful
    }));
  };

  // Get category icon
  const getCategoryIcon = (iconName, className = "w-5 h-5") => {
    switch (iconName) {
      case 'general':
        return <HiOutlineQuestionMarkCircle className={className} />;
      case 'account':
        return <HiOutlineUsers className={className} />;
      case 'features':
        return <HiOutlineBookOpen className={className} />;
      case 'support':
        return <HiOutlineSupport className={className} />;
      case 'billing':
        return <HiOutlineDocumentText className={className} />;
      case 'tutorial':
        return <HiOutlineVideoCamera className={className} />;
      default:
        return <HiOutlineQuestionMarkCircle className={className} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Frequently Asked Questions section"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Background Pattern - Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge with Icon */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-4 py-2 mb-6 shadow-lg shadow-amber-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "FAQ"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                {config?.heading?.highlightedText}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 0L300 12"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p
              className="text-lg text-gray-600 dark:text-gray-400"
              itemProp="description"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Search Bar with Popular Searches */}
        {config?.search?.show && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={config.search.placeholder || "Search FAQs..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-lg"
              />
            </div>

            {/* Popular Searches */}
            {config.search.popularSearches && config.search.popularSearches.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                <span className="text-sm text-gray-500 dark:text-gray-500">Popular:</span>
                {config.search.popularSearches.map((term, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSearchQuery(term)}
                    className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Category Grid */}
        {config?.categories && config.categories.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`group p-4 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 ${activeCategory === 'all'
                  ? 'bg-linear-to-br from-amber-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-100 dark:border-gray-700'
                }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${activeCategory === 'all'
                    ? 'bg-white/20'
                    : 'bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30'
                  }`}>
                  <HiOutlineStar className={`w-6 h-6 ${activeCategory === 'all' ? 'text-white' : 'text-amber-600 dark:text-amber-400'
                    }`} />
                </div>
                <span className="text-sm font-medium">All</span>
              </div>
            </button>

            {config.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group p-4 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 ${activeCategory === category.id
                    ? 'bg-linear-to-br from-amber-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-100 dark:border-gray-700'
                  }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${activeCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30'
                    }`}>
                    {getCategoryIcon(category.icon, `w-6 h-6 ${activeCategory === category.id ? 'text-white' : 'text-amber-600 dark:text-amber-400'
                      }`)}
                  </div>
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion with Categories */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id || index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(faq.id || index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-linear-to-r hover:from-amber-50 hover:to-pink-50 dark:hover:from-amber-900/10 dark:hover:to-pink-900/10 transition-colors "
                aria-expanded={openItems.includes(faq.id || index)}
                aria-controls={`faq-answer-${faq.id || index}`}
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center mb-2">
                    {/* Category Indicator */}
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${faq.category === 'general' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                        faq.category === 'account' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                          faq.category === 'billing' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                            faq.category === 'features' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                              faq.category === 'support' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                                'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                      {getCategoryIcon(faq.category, "w-3 h-3 mr-1")}
                      {faq.categoryName}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white" itemProp="name">
                    {faq.question}
                  </span>
                </div>
                <span className="shrink-0 ml-4">
                  {openItems.includes(faq.id || index) ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </span>
              </button>

              {/* Answer */}
              {openItems.includes(faq.id || index) && (
                <div
                  id={`faq-answer-${faq.id || index}`}
                  className="px-6 pb-5"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="prose prose-amber max-w-none text-gray-600 dark:text-gray-400" itemProp="text">
                    {faq.answer}
                  </div>

                  {/* Related Links */}
                  {faq.relatedLinks && faq.relatedLinks.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                        <HiOutlineLightningBolt className="w-4 h-4 text-amber-500 mr-2" />
                        Related resources:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {faq.relatedLinks.map((link, idx) => (
                          <Link
                            key={idx}
                            href={link.url}
                            className="inline-flex items-center text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 bg-amber-50 dark:bg-amber-900/10 px-3 py-2 rounded-lg"
                          >
                            <HiOutlineDocumentText className="w-4 h-4 mr-2 shrink-0" />
                            <span className="truncate">{link.text}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Video Tutorial Link */}
                  {faq.videoUrl && (
                    <div className="mt-4">
                      <a
                        href={faq.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300"
                      >
                        <HiOutlineVideoCamera className="w-4 h-4 mr-2" />
                        Watch video tutorial
                      </a>
                    </div>
                  )}

                  {/* Helpful Feedback */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      Was this answer helpful?
                    </span>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleHelpful(faq.id, true)}
                        className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-colors ${helpfulFeedback[faq.id] === true
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                            : 'text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400'
                          }`}
                      >
                        <HiOutlineThumbUp className="w-4 h-4" />
                        <span className="text-sm">Yes</span>
                      </button>
                      <button
                        onClick={() => handleHelpful(faq.id, false)}
                        className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-colors ${helpfulFeedback[faq.id] === false
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                            : 'text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400'
                          }`}
                      >
                        <HiOutlineFlag className="w-4 h-4" />
                        <span className="text-sm">No</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-16 bg-linear-to-br from-amber-50 to-pink-50 dark:from-amber-900/10 dark:to-pink-900/10 rounded-3xl mb-16">
            <div className="w-24 h-24 bg-linear-to-br from-amber-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <HiOutlineQuestionMarkCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No results found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              We couldn't find any FAQs matching your search. Try different keywords or browse all categories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-6 py-3 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-pink-600 transition-all duration-300"
              >
                Clear filters
              </button>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Contact support
              </Link>
            </div>
          </div>
        )}

        {/* Still Have Questions - Cards */}
        {config?.contact?.show && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Still have questions?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Email */}
              {config.contact.email && (
                <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-20 h-20 bg-linear-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <HiOutlineMail className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Email Us
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    Get back within 24 hours
                  </p>
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300"
                  >
                    {config.contact.email}
                  </a>
                </div>
              )}

              {/* Phone */}
              {config.contact.phone && (
                <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-20 h-20 bg-linear-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <HiOutlinePhone className="w-10 h-10 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Call Us
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    Mon-Fri, 9am-6pm EST
                  </p>
                  <a
                    href={`tel:${config.contact.phone}`}
                    className="inline-flex items-center text-pink-600 dark:text-pink-400 font-medium hover:text-pink-700 dark:hover:text-pink-300"
                  >
                    {config.contact.phone}
                  </a>
                </div>
              )}

              {/* Live Chat */}
              {config.contact.chat && (
                <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-20 h-20 bg-linear-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <HiOutlineChat className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Live Chat
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    24/7 support
                  </p>
                  <button
                    onClick={resolveOnClick(config.contact.chat.onClick)}
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    Start chat
                  </button>
                </div>
              )}
            </div>

            {/* Response Time Guarantee */}
            {config.contact.responseTime && (
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full">
                  <HiOutlineLightningBolt className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {config.contact.responseTime}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Feedback Link */}
        {config?.feedback?.show && (
          <div className="mt-12 text-center">
            <Link
              href={config.feedback.url}
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
            >
              <HiOutlineHeart className="w-5 h-5 mr-2 text-amber-500" />
              <span>{config.feedback.text}</span>
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #9ca3af 1px, transparent 0);
          background-size: 40px 40px;
        }
        .dark .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #4b5563 1px, transparent 0);
        }
        .prose {
          max-width: none;
        }
      `}</style>
    </section>
  );
};

export default FAQSection3;
