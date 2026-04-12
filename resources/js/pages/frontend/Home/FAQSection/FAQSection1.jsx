// page/frontend/Home/FAQSection/FAQSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
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

const FAQSection1 = ({ config }) => {

  // State for active FAQ accordion
  const [openItems, setOpenItems] = useState([]);
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
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-blue-600 dark:text-blue-400 relative inline-block">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Search Bar */}
        {config?.search?.show && (
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={config.search.placeholder || "Search FAQs..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 md:py-4 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Category Tabs */}
        {config?.categories && config.categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {config.categories.map((category) => (
              <button
                key={category.id}
                className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id || index}
              className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(faq.id || index)}
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                aria-expanded={openItems.includes(faq.id || index)}
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white pr-2">
                  {faq.question}
                </span>
                <span className="ml-2 sm:ml-4 shrink-0">
                  {openItems.includes(faq.id || index) ? (
                    <HiOutlineChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  ) : (
                    <HiOutlineChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  )}
                </span>
              </button>

              {/* Answer */}
              {openItems.includes(faq.id || index) && (
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5">
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </div>

                  {/* Additional Info */}
                  {faq.link && (
                    <Link
                      href={faq.link}
                      className="inline-flex items-center mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                    >
                      <span>{faq.linkText || "Learn more"}</span>
                      <HiOutlineArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <HiOutlineQuestionMarkCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-300 dark:text-gray-600 mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              No FAQs found matching your search.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 text-sm sm:text-base font-medium hover:text-blue-700 dark:hover:text-blue-300"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Still Have Questions */}
        {config?.contact?.show && (
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                {config.contact.title || "Still have questions?"}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                {config.contact.description || "Can't find the answer you're looking for? Please chat with our friendly team."}
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {/* Email */}
                {config.contact.email && (
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg sm:rounded-xl font-semibold hover:bg-blue-700 transition-colors group text-sm sm:text-base"
                  >
                    <HiOutlineMail className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    Email Us
                  </a>
                )}

                {/* Phone */}
                {config.contact.phone && (
                  <a
                    href={`tel:${config.contact.phone}`}
                    className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group text-sm sm:text-base"
                  >
                    <HiOutlinePhone className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    Call Us
                  </a>
                )}

                {/* Live Chat */}
                {config.contact.chat && (
                  <button
                    className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg sm:rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group text-sm sm:text-base"
                  >
                    <HiOutlineChat className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    Live Chat
                  </button>
                )}
              </div>

              {/* Response Time */}
              {config.contact.responseTime && (
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-3 sm:mt-4">
                  {config.contact.responseTime}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection1;