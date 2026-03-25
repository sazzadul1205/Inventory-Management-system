// page/frontend/Home/FAQSection/FAQSection1.jsx

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
  HiOutlineSearch
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

const FAQSection1 = ({ config }) => {
  // State for active FAQ accordion
  const [openItems, setOpenItems] = useState([]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle FAQ item
  const toggleItem = (id) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Filter FAQs based on search query
  const filteredFAQs = config?.faqs?.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Frequently Asked Questions section"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Background Pattern - decorative */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Gradient Orbs - decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="FAQ badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              )}
              <span className={`text-sm font-medium ${config.badge.textColor}`}>
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.heading?.prefix}{' '}
            <span className={`${config?.heading?.highlightColor} relative inline-block`}>
              {config?.heading?.highlightedText}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                aria-hidden="true"
              >
                <line
                  x1="0" y1="4" x2="200" y2="4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  className={config?.heading?.highlightColor}
                />
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

        {/* Search Bar */}
        {config?.search?.show && (
          <div className="mb-12">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={config.search.placeholder || "Search FAQs..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Category Tabs */}
        {config?.categories && config.categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {config.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  // Handle category filtering
                  if (config.onCategoryChange) {
                    config.onCategoryChange(category.id);
                  }
                }}
                className="px-6 py-3 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id || index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(faq.id || index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors "
                aria-expanded={openItems.includes(faq.id || index)}
                aria-controls={`faq-answer-${faq.id || index}`}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white" itemProp="name">
                  {faq.question}
                </span>
                <span className="ml-4 shrink-0">
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
                  <div className="prose prose-blue max-w-none text-gray-600 dark:text-gray-400" itemProp="text">
                    {faq.answer}
                  </div>

                  {/* Additional Info */}
                  {faq.link && (
                    <Link
                      href={faq.link}
                      className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                    >
                      <span>{faq.linkText || "Learn more"}</span>
                      <HiOutlineArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HiOutlineQuestionMarkCircle className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-lg text-gray-500 dark:text-gray-400">
              No FAQs found matching your search.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Still Have Questions */}
        {config?.contact?.show && (
          <div className="mt-16 text-center">
            <div className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {config.contact.title || "Still have questions?"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {config.contact.description || "Can't find the answer you're looking for? Please chat with our friendly team."}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {/* Email */}
                {config.contact.email && (
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors group"
                  >
                    <HiOutlineMail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                )}

                {/* Phone */}
                {config.contact.phone && (
                  <a
                    href={`tel:${config.contact.phone}`}
                    className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group"
                  >
                    <HiOutlinePhone className="w-5 h-5 mr-2" />
                    Call Us
                  </a>
                )}

                {/* Live Chat */}
                {config.contact.chat && (
                  <button
                    onClick={resolveOnClick(config.contact.chat.onClick)}
                    className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group"
                  >
                    <HiOutlineChat className="w-5 h-5 mr-2" />
                    Live Chat
                  </button>
                )}
              </div>

              {/* Response Time */}
              {config.contact.responseTime && (
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                  {config.contact.responseTime}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        .prose {
          max-width: none;
        }
      `}</style>
    </section>
  );
};

export default FAQSection1;
