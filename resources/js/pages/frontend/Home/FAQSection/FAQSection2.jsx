// page/frontend/Home/FAQSection/FAQSection2.jsx

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
  HiOutlineSearch,
  HiOutlineBookOpen,
  HiOutlineDocumentText,
  HiOutlineVideoCamera,
  HiOutlineUsers,
  HiOutlineSupport
} from 'react-icons/hi';

const FAQSection2 = ({ config }) => {
  // State for active category
  const [openLeft, setOpenLeft] = useState([]);
  const [openRight, setOpenRight] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter FAQs based on category and search
  const filteredFAQs = config?.faqs?.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  // Toggle FAQ item - left
  const toggleLeft = (id) => {
    setOpenLeft(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Toggle FAQ item - right
  const toggleRight = (id) => {
    setOpenRight(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Get category icon
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'general':
        return <HiOutlineQuestionMarkCircle className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'account':
        return <HiOutlineUsers className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'features':
        return <HiOutlineBookOpen className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'support':
        return <HiOutlineSupport className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'billing':
        return <HiOutlineDocumentText className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'tutorial':
        return <HiOutlineVideoCamera className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <HiOutlineQuestionMarkCircle className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  // Split FAQs into two columns - left
  const leftFAQs = filteredFAQs.filter((_, i) => i % 2 === 0);

  // Split FAQs into two columns- right
  const rightFAQs = filteredFAQs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-blue-500/30">
              <HiOutlineQuestionMarkCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {config?.heading?.highlighted}
            </span>
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
          <div className="max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={config.search.placeholder || "Search FAQs..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-9 sm:pl-12 pr-16 sm:pr-20 py-3 sm:py-4 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-600 text-xs sm:text-sm"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* Category Pills */}
        {config?.categories && config.categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`inline-flex items-center px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === 'all'
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              All Questions
            </button>
            {config.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === category.id
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <span className="mr-1 sm:mr-2">{getCategoryIcon(category.icon)}</span>
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 items-start">

          {/* LEFT COLUMN */}
          <div className="space-y-3 sm:space-y-4">
            {leftFAQs.map((faq, index) => {
              const id = faq.id || index;
              const isOpen = openLeft.includes(id);

              return (
                <div key={id} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <button
                    onClick={() => toggleLeft(id)}
                    className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white pr-2">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <HiOutlineChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 shrink-0" />
                    ) : (
                      <HiOutlineChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-3 sm:space-y-4">
            {rightFAQs.map((faq, index) => {
              const id = faq.id || index;
              const isOpen = openRight.includes(id);

              return (
                <div key={id} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <button
                    onClick={() => toggleRight(id)}
                    className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white pr-2">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <HiOutlineChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 shrink-0" />
                    ) : (
                      <HiOutlineChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-10 sm:py-12 md:py-16 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg mb-12 sm:mb-16">
            <HiOutlineQuestionMarkCircle className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto text-gray-300 dark:text-gray-600 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
              No results found
            </h3>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4 sm:mb-6">
              We couldn't find any FAQs matching your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Help Center CTA */}
        {config?.helpCenter?.show && (
          <div className="text-center mb-10 sm:mb-12">
            <Link
              href={config.helpCenter.url}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group text-sm sm:text-base"
            >
              <HiOutlineBookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              <span>{config.helpCenter.text}</span>
              <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Contact Options */}
        {config?.contact?.show && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {/* Email */}
            {config.contact.email && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <HiOutlineMail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Email Support
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-3 sm:mb-4">
                  {config.contact.emailResponseTime || "Get back within 24 hours"}
                </p>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base hover:text-blue-700 dark:hover:text-blue-300 break-all"
                >
                  {config.contact.email}
                </a>
              </div>
            )}

            {/* Phone */}
            {config.contact.phone && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <HiOutlinePhone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Phone Support
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-3 sm:mb-4">
                  {config.contact.phoneHours || "Mon-Fri, 9am-6pm"}
                </p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium text-sm sm:text-base hover:text-purple-700 dark:hover:text-purple-300"
                >
                  {config.contact.phone}
                </a>
              </div>
            )}

            {/* Live Chat */}
            {config.contact.chat && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <HiOutlineChat className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Live Chat
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-3 sm:mb-4">
                  {config.contact.chatHours || "24/7 support"}
                </p>
                <button className="inline-flex items-center text-green-600 dark:text-green-400 font-medium text-sm sm:text-base hover:text-green-700 dark:hover:text-green-300">
                  Start chat
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection2;