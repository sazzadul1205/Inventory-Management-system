// page/frontend/Home/FAQSection/FAQSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

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
  HiOutlineSupport
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

const FAQSection2 = ({ config }) => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');

  // State for active FAQ accordion
  const [openLeft, setOpenLeft] = useState([]);
  const [openRight, setOpenRight] = useState([]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQs based on category and search
  const filteredFAQs = config?.faqs?.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  // Toggle FAQ item
  const toggleLeft = (id) => {
    setOpenLeft(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

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
        return <HiOutlineQuestionMarkCircle className="w-5 h-5" />;
      case 'account':
        return <HiOutlineUsers className="w-5 h-5" />;
      case 'features':
        return <HiOutlineBookOpen className="w-5 h-5" />;
      case 'support':
        return <HiOutlineSupport className="w-5 h-5" />;
      case 'billing':
        return <HiOutlineDocumentText className="w-5 h-5" />;
      case 'tutorial':
        return <HiOutlineVideoCamera className="w-5 h-5" />;
      default:
        return <HiOutlineQuestionMarkCircle className="w-5 h-5" />;
    }
  };

  const leftFAQs = filteredFAQs.filter((_, i) => i % 2 === 0);
  const rightFAQs = filteredFAQs.filter((_, i) => i % 2 !== 0);

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Frequently Asked Questions section"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-blue-500/30">
            <HiOutlineQuestionMarkCircle className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "FAQ"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            itemProp="name"
          >
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-600 dark:text-gray-400"
            itemProp="description"
          >
            {config?.description}
          </p>
        </div>

        {/* Search Bar */}
        {config?.search?.show && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={config.search.placeholder || "Search FAQs..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <span className="text-sm">Clear</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Category Pills */}
        {config?.categories && config.categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === 'all'
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
                className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === category.id
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <span className="mr-2">{getCategoryIcon(category.icon)}</span>
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 items-start">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {leftFAQs.map((faq, index) => {
              const id = faq.id || index;
              const isOpen = openLeft.includes(id);

              return (
                <div key={id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">

                  <button
                    onClick={() => toggleLeft(id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {isOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {rightFAQs.map((faq, index) => {
              const id = faq.id || index;
              const isOpen = openRight.includes(id);

              return (
                <div key={id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">

                  <button
                    onClick={() => toggleRight(id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {isOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-16">
            <HiOutlineQuestionMarkCircle className="w-20 h-20 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No results found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              We couldn't find any FAQs matching your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Help Center CTA */}
        {config?.helpCenter?.show && (
          <div className="text-center mb-12">
            <Link
              href={config.helpCenter.url}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
            >
              <HiOutlineBookOpen className="w-5 h-5 mr-2" />
              <span>{config.helpCenter.text}</span>
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Contact Options */}
        {config?.contact?.show && (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            {config.contact.email && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HiOutlineMail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Email Support
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {config.contact.emailResponseTime || "Get back within 24 hours"}
                </p>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {config.contact.email}
                </a>
              </div>
            )}

            {/* Phone */}
            {config.contact.phone && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-linear-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HiOutlinePhone className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Phone Support
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {config.contact.phoneHours || "Mon-Fri, 9am-6pm"}
                </p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300"
                >
                  {config.contact.phone}
                </a>
              </div>
            )}

            {/* Live Chat */}
            {config.contact.chat && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-linear-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HiOutlineChat className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Live Chat
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {config.contact.chatHours || "24/7 support"}
                </p>
                <button
                  onClick={resolveOnClick(config.contact.chat.onClick)}
                  className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300"
                >
                  Start chat
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
        .prose {
          max-width: none;
        }
      `}</style>
    </section>
  );
};

export default FAQSection2;
