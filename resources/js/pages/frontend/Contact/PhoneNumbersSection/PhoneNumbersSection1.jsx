// frontend/Contact/PhoneNumbersSection/PhoneNumbersSection1.jsx

/**
 * Phone Numbers Section Component - Global Support Directory
 * A comprehensive phone numbers directory featuring:
 * - Regional phone number cards with department categorization
 * - Emergency support banner for critical issues
 * - Region-based filtering for global coverage
 * - Expandable FAQ accordion for support-related questions
 * - Search functionality across phone numbers and FAQs
 * - Callback request form for missed connections
 * - Multi-language support indicators on phone cards
 * - Operating hours and availability display
 * - Security note for customer protection
 * - Statistics display for trust signals
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
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineArrowRight,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineCog,
  HiOutlineShoppingBag,
  HiOutlineCreditCard,
  HiOutlineUserGroup,
  HiOutlineX,
} from 'react-icons/hi';

const PhoneNumbersSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');
  const [callbackNumber, setCallbackNumber] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const regions = config?.regions || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const phoneNumbers = useMemo(() => config?.phoneNumbers || [], [config?.phoneNumbers]);

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
      HiOutlinePhone,
      HiOutlineMail,
      HiOutlineClock,
      HiOutlineGlobeAlt,
      HiOutlineArrowRight,
      HiOutlineQuestionMarkCircle,
      HiOutlineShieldCheck,
      HiOutlineCog,
      HiOutlineShoppingBag,
      HiOutlineCreditCard,
      HiOutlineUserGroup,
      HiOutlineX,
    };
    const IconComponent = icons[iconName] || HiOutlinePhone;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get color for department type
   * @param {string} type - Department type
   * @returns {string} - CSS class for the color
   */
  const getTypeColor = useCallback((type) => {
    switch (type) {
      case 'support': return 'bg-blue-500';
      case 'sales': return 'bg-green-500';
      case 'billing': return 'bg-purple-500';
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
   * Handle callback request submission
   */
  const handleCallbackSubmit = useCallback(() => {
    if (!callbackNumber) return;
    setCallbackSubmitted(true);
    setTimeout(() => {
      setCallbackSubmitted(false);
      setCallbackNumber('');
    }, 3000);
  }, [callbackNumber]);

  /**
   * Clear search query
   */
  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  // ==================== FILTERED DATA ====================
  const filteredNumbers = useMemo(() => {
    return phoneNumbers.filter(number => {
      return activeRegion === 'all' || number.region === activeRegion;
    });
  }, [phoneNumbers, activeRegion]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchQuery === '' ||
        faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesSearch;
    });
  }, [faqs, searchQuery]);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Phone Numbers"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Phone numbers badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Global Support Lines"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Connect with'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Our Support Team'}
            </span>{' '}
            {config?.title?.suffix || 'Worldwide'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Get immediate assistance from our global support network. Find the right phone number for your region and get connected with our expert team members who speak your language."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== EMERGENCY SUPPORT BANNER ==================== */}
        <div className="mb-12 bg-linear-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
                {getIcon("HiOutlinePhone", "w-5 h-5 text-red-600")}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Emergency Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">For critical system issues affecting your business operations</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{config?.emergencyNumber || "+1 (888) 999-9999"}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Available 24/7 for enterprise customers</p>
            </div>
          </div>
        </div>

        {/* ==================== REGION FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveRegion('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeRegion === 'all'
              ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            All Regions
          </button>
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeRegion === region.id
                ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              <span>{region.icon}</span>
              {region.name}
            </button>
          ))}
        </div>

        {/* ==================== PHONE NUMBERS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredNumbers.map((number, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700 group"
            >
              <div className={`h-1 ${getTypeColor(number.type)}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600 dark:text-blue-400 text-3xl">
                    {getIcon(number.icon, "w-8 h-8")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{number.department}</h3>
                    <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                      {getIcon("HiOutlineGlobeAlt", "w-3 h-3")}
                      {number.regionName}
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <a
                    href={`tel:${number.phone}`}
                    className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                  >
                    {number.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  {getIcon("HiOutlineClock", "w-4 h-4 text-gray-400 mt-0.5 shrink-0")}
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {number.hours}
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-4">
                  {getIcon("HiOutlineMail", "w-4 h-4 text-gray-400 mt-0.5 shrink-0")}
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {number.email}
                  </div>
                </div>
                {number.languages && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {number.languages.map((lang, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={`tel:${number.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {getIcon("HiOutlinePhone", "w-4 h-4")}
                  Call Now
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
              placeholder="Search phone numbers or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              aria-label="Search phone numbers or FAQs"
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
                  <div className="text-blue-600 dark:text-blue-400 mt-0.5">
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
                <div className="text-blue-500 dark:text-blue-400">
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
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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
              className="mt-4 px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* ==================== CALLBACK REQUEST ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12 text-center border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            {getIcon("HiOutlinePhone", "w-6 h-6 text-blue-600")}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Request a Callback</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Can't reach us? Leave your number and we'll call you back within 30 minutes during business hours.
          </p>
          {callbackSubmitted ? (
            <div className="max-w-md mx-auto p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center justify-center gap-2">
                {getIcon("HiOutlineCheckCircle", "w-5 h-5 text-green-600")}
                <span className="text-sm text-green-700 dark:text-green-300">Callback requested! We'll call you shortly.</span>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="tel"
                value={callbackNumber}
                onChange={(e) => setCallbackNumber(e.target.value)}
                placeholder="Your phone number"
                className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                onClick={handleCallbackSubmit}
                disabled={!callbackNumber}
                className="px-5 py-2.5 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Request
              </button>
            </div>
          )}
        </div>

        {/* ==================== CONTACT CTA ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineQuestionMarkCircle", "w-6 h-6 text-blue-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Need help finding the right number? Contact our support team."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Contact Us"}
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== SECURITY NOTE ==================== */}
        {config?.showSecurityNote && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("HiOutlineShieldCheck", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.securityText || "We never ask for passwords or sensitive information over the phone"}
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

export default PhoneNumbersSection1;