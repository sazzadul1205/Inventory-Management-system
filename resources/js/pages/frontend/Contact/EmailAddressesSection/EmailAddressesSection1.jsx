// frontend/Contact/EmailAddressesSection/EmailAddressesSection1.jsx

/**
 * Email Addresses Section Component - Department Email Directory
 * A comprehensive email directory featuring:
 * - Department-based email cards with response time indicators
 * - Type-based color coding for easy identification
 * - Expandable FAQ accordion for email-related questions
 * - Search functionality across email addresses and FAQs
 * - Category filters for organizing FAQs
 * - Statistics display for trust signals
 * - Email security information section with encryption details
 * - Response guarantee badge for SLA information
 * - Direct email links for each department
 * - Fully responsive grid layout
 * - Dark mode compatible design
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - All from react-icons library
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
  HiOutlineCog,
  HiOutlineShoppingBag,
  HiOutlineCreditCard,
  HiOutlineNewspaper,
  HiOutlineUserGroup,
  HiOutlineX,
} from 'react-icons/hi';
import { MdOutlineHandshake } from "react-icons/md";

const EmailAddressesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const categories = config?.categories || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const emailAddresses = useMemo(() => config?.emailAddresses || [], [config?.emailAddresses]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
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
      HiOutlineCog,
      HiOutlineShoppingBag,
      HiOutlineCreditCard,
      MdOutlineHandshake,
      HiOutlineNewspaper,
      HiOutlineUserGroup,
      HiOutlineX,
    };
    const IconComponent = icons[iconName] || HiOutlineMail;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get color for department type
   * @param {string} type - Department type
   * @returns {string} - CSS class for the color
   */
  const getTypeColor = useCallback((type) => {
    switch (type) {
      case 'support': return 'bg-sky-500';
      case 'sales': return 'bg-green-500';
      case 'billing': return 'bg-purple-500';
      case 'security': return 'bg-red-500';
      case 'partnership': return 'bg-orange-500';
      case 'press': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  }, []);

  /**
   * Toggle FAQ accordion item
   * @param {number} index - Index of the FAQ to toggle
   */
  const toggleFaq = useCallback((index) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  /**
   * Clear search query
   */
  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  // ==================== FILTERED DATA ====================
  const filteredEmails = useMemo(() => {
    return emailAddresses.filter(email => {
      const matchesSearch = searchQuery === '' ||
        email.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [emailAddresses, searchQuery]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Email Addresses"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-sky-50/30 to-transparent dark:from-sky-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-sky-300/5 dark:bg-sky-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-sky-100 dark:bg-sky-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-sky-200 dark:border-sky-800'}`}
            aria-label="Email addresses badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-sky-700 dark:text-sky-300'}`}>
              {config?.badge?.text || "Email Support"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Reach Out'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-sky-600 to-blue-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Via Email'}
            </span>{' '}
            {config?.title?.suffix || "We're Just a Message Away"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Send us an email and our team will get back to you promptly. Choose the right department for your inquiry and expect a response within our guaranteed response times."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-sky-600 dark:text-sky-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-sky-600 dark:text-sky-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== EMAIL ADDRESSES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredEmails.map((email, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700 group"
            >
              <div className={`h-1 ${getTypeColor(email.type)}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-sky-600 dark:text-sky-400 text-3xl">
                    {getIcon(email.icon, "w-8 h-8")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{email.department}</h3>
                    <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                      {getIcon("HiOutlineGlobeAlt", "w-3 h-3")}
                      {email.region || 'Global'}
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <a
                    href={`mailto:${email.email}`}
                    className="text-base font-semibold text-sky-600 dark:text-sky-400 hover:underline break-all transition-colors"
                  >
                    {email.email}
                  </a>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {email.description}
                </p>
                <div className="flex items-start gap-2 mb-4">
                  {getIcon("HiOutlineClock", "w-4 h-4 text-gray-400 mt-0.5 shrink-0")}
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {email.responseTime || 'Response within 24 hours'}
                  </div>
                </div>
                <a
                  href={`mailto:${email.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-sky-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {getIcon("HiOutlineMail", "w-4 h-4")}
                  Send Email
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("HiOutlineSearch", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search email addresses or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              aria-label="Search email addresses or FAQs"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Clear search"
              >
                {getIcon("HiOutlineX", "w-5 h-5")}
              </button>
            )}
          </div>
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === 'all'
              ? 'bg-linear-to-r from-sky-600 to-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            All FAQs
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeCategory === category.id
                ? 'bg-linear-to-r from-sky-600 to-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {getIcon(category.icon, "w-3 h-3")}
              {category.name}
            </button>
          ))}
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        {searchQuery && (
          <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
            Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
          </div>
        )}

        {/* ==================== FAQ ACCORDION ==================== */}
        <div className="max-w-6xl mx-auto space-y-4 mb-16">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                aria-label={openFaq === index ? "Collapse answer" : "Expand answer"}
              >
                <div className="flex items-start gap-3 pr-4">
                  <div className="text-sky-600 dark:text-sky-400 mt-0.5">
                    {getIcon(faq.icon, "w-5 h-5")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </div>
                    {faq.tags && faq.tags.length > 0 && (
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
                <div className="text-sky-500 dark:text-sky-400">
                  {openFaq === index ? (
                    <HiOutlineChevronUp className="w-5 h-5" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                  {faq.link && (
                    <Link
                      href={faq.link}
                      className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                    >
                      Learn more
                      <HiOutlineArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredFaqs.length === 0 && searchQuery && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("HiOutlineSearch", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search to find what you're looking for.</p>
            <button
              onClick={clearSearch}
              className="mt-4 px-4 py-2 text-sky-600 dark:text-sky-400 font-semibold text-sm hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* ==================== EMAIL SECURITY NOTE ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12 text-center border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineShieldCheck", "w-6 h-6 text-green-600")}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email Security</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We take your security seriously. Our emails are encrypted and we will never ask for passwords or sensitive information via email.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-full">
              {getIcon("HiOutlineDocumentText", "w-4 h-4 text-sky-600")}
              <span className="text-gray-600 dark:text-gray-400">PGP Encryption Available</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-full">
              {getIcon("HiOutlineMail", "w-4 h-4 text-sky-600")}
              <span className="text-gray-600 dark:text-gray-400">SPF/DKIM/DMARC Protected</span>
            </div>
          </div>
        </div>

        {/* ==================== CONTACT CTA ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-sky-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineQuestionMarkCircle", "w-6 h-6 text-sky-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Need help finding the right email address? Contact our support team."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-sky-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Us"}
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== RESPONSE GUARANTEE ==================== */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("HiOutlineShieldCheck", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "All emails receive a response within 24 hours. Enterprise customers get priority response within 4 hours."}
              </span>
            </div>
          </div>
        )}
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
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default EmailAddressesSection1;