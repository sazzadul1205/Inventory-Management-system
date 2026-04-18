// frontend/Contact/PartnerInquiriesSection/PartnerInquiriesSection1.jsx

/**
 * Partner Inquiries Section Component - Partner Program Overview
 * A comprehensive partner program section featuring:
 * - Partner program types with detailed descriptions
 * - Partner benefits showcase grid
 * - Expandable FAQ accordion for partner questions
 * - Search functionality across partner FAQs
 * - Category filters for organizing partner topics
 * - Statistics display for program credibility
 * - Partner resources section (guide, portal, success stories)
 * - Apply now call-to-action
 * - Fully responsive and dark mode compatible
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
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineDownload,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineChip,
  HiOutlineShoppingCart,
  HiOutlineCode,
  HiOutlineCash,
  HiOutlineAcademicCap,
  HiOutlineSupport,
  HiOutlineInformationCircle,
  HiOutlineGift,
  HiOutlineClipboardList,
  HiOutlineDocumentText,
  HiOutlineX,
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';
import { MdOutlineHandshake } from 'react-icons/md';

const PartnerInquiriesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const categories = config?.categories || [];
  const partnerTypes = config?.partnerTypes || [];
  const benefits = config?.benefits || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);

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
       HiOutlineCheckCircle,
       HiOutlineArrowRight,
       HiOutlineDownload,
       HiOutlineGlobeAlt,
       HiOutlineUserGroup,
       HiOutlineChartBar,
       HiOutlineChip,
       HiOutlineShoppingCart,
       HiOutlineCode,
       HiOutlineCash,
       HiOutlineAcademicCap,
       HiOutlineSupport,
       HiOutlineInformationCircle,
       HiOutlineGift,
       HiOutlineClipboardList,
       HiOutlineDocumentText,
       HiOutlineTrophy,
       HiOutlineX,
       MdOutlineHandshake,
    };
    const IconComponent = icons[iconName] || HiOutlineInformationCircle;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle FAQ accordion item
   * @param {number} index - Index of the FAQ to toggle
   */
  const toggleFaq = useCallback((index) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  /**
   * Clear all filters and search
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setActiveCategory('all');
  }, []);

  // ==================== FILTERED FAQS ====================
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
      aria-label="Partner Inquiries"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-amber-50/30 to-transparent dark:from-amber-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 dark:bg-yellow-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-amber-300/5 dark:bg-amber-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-amber-100 dark:bg-amber-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-amber-200 dark:border-amber-800'}`}
            aria-label="Partner badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-amber-700 dark:text-amber-300'}`}>
              {config?.badge?.text || "Partner Program"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Grow Together'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-amber-600 to-yellow-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Become a Partner'}
            </span>{' '}
            {config?.title?.suffix || 'Join Our Ecosystem'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Join our partner network and unlock new revenue streams, access exclusive resources, and collaborate with industry leaders. Together, we'll build something extraordinary."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-amber-600 dark:text-amber-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== PARTNER TYPES ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Partner Programs
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Choose the partnership path that aligns with your business model and goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group"
              >
                <div className="flex justify-center mb-4 text-amber-600 dark:text-amber-400">
                  {getIcon(type.icon, "w-12 h-12")}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{type.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{type.description}</p>
                <ul className="space-y-2 mb-6 text-left">
                  {type.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={type.ctaLink}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-amber-600 to-yellow-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {type.ctaText}
                  <HiOutlineArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== PARTNER BENEFITS ==================== */}
        <div className="mb-16 bg-linear-to-r from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-amber-100 dark:border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Partner Benefits</h3>
            <p className="text-gray-600 dark:text-gray-400">What you get when you join our partner network</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-700/30 transition-colors">
                <div className="flex justify-center mb-3 text-amber-600 dark:text-amber-400">
                  {getIcon(benefit.icon, "w-8 h-8")}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("HiOutlineSearch", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search partner questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              aria-label="Search partner questions"
            />
          </div>
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'all'
                ? 'bg-linear-to-r from-amber-600 to-yellow-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${
                activeCategory === category.id
                  ? 'bg-linear-to-r from-amber-600 to-yellow-600 text-white shadow-lg'
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
                  <div className="text-amber-600 dark:text-amber-400 mt-0.5">
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
                <div className="text-amber-500 dark:text-amber-400">
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
                      className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("HiOutlineSearch", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 text-amber-600 dark:text-amber-400 font-semibold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== PARTNER RESOURCES SECTION ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Partner Program Guide Card */}
          <div className="bg-linear-to-r from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-amber-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-amber-600 dark:text-amber-400">
              {getIcon("HiOutlineDownload", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Partner Program Guide</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Download our comprehensive partner program guide
            </p>
            <Link
              href="/downloads/partner-guide.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-amber-600 to-yellow-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlineDownload", "w-4 h-4")}
              Download Guide
            </Link>
          </div>

          {/* Partner Portal Card */}
          <div className="bg-linear-to-r from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-amber-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-amber-600 dark:text-amber-400">
              {getIcon("HiOutlineGlobeAlt", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Partner Portal</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Access resources, training, and support materials
            </p>
            <Link
              href="/partner-portal"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-amber-600 to-yellow-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlineGlobeAlt", "w-4 h-4")}
              Access Portal
            </Link>
          </div>

          {/* Success Stories Card */}
          <div className="bg-linear-to-r from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center border border-amber-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex justify-center mb-3 text-amber-600 dark:text-amber-400">
              {getIcon("HiOutlineTrophy", "w-10 h-10")}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Success Stories</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              See how partners are succeeding with our program
            </p>
            <Link
              href="/partner-success-stories"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-amber-600 to-yellow-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {getIcon("HiOutlineTrophy", "w-4 h-4")}
              Read Stories
            </Link>
          </div>
        </div>

        {/* ==================== PARTNER CTA ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-amber-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
              <MdOutlineHandshake className="w-6 h-6 text-amber-600" />
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Ready to become a partner? Join our growing network of partners today."}
            </span>
            <Link
              href={config?.contactLink || "/partner/apply"}
              className="px-6 py-3 bg-linear-to-r from-amber-600 to-yellow-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Apply Now"}
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== PARTNER GUARANTEE ==================== */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("HiOutlineCheckCircle", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "Join our partner network and receive dedicated support, training, and competitive commission rates"}
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

export default PartnerInquiriesSection1;