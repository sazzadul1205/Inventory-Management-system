// frontend/WhyChooseUs/CompetitiveAdvantagesSection/CompetitiveAdvantagesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Specific to this competitive section (No emojis, no custom icons)
import { BsShieldLock, BsShieldCheck } from 'react-icons/bs';
import { FaRobot, FaSlack, FaDna } from 'react-icons/fa';
import { GiClockwork } from 'react-icons/gi';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineSupport,
  HiOutlineClock,
  HiOutlineX,
} from 'react-icons/hi';
import { MdIntegrationInstructions, MdOutlineDashboardCustomize } from 'react-icons/md';
import { RiCustomerService2Fill, RiCustomerService2Line } from 'react-icons/ri';
import { SiGooglecloud } from 'react-icons/si';
import { TbDeviceAnalytics, TbAdjustmentsHorizontal } from 'react-icons/tb';

const CompetitiveAdvantagesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const advantages = config?.advantages || [];
  const comparisonFeatures = config?.comparisonFeatures || [];
  const faqCategories = config?.faqCategories || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Dynamically resolves icon component from string name.
   * Supports multiple react-icon libraries (hi, si, tb, bs, md, fa, gi, ri).
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown,
      HiOutlineChevronUp,
      HiOutlineSearch,
      HiOutlineArrowRight,
      HiOutlineCheckCircle,
      HiOutlineTrendingUp,
      HiOutlineShieldCheck,
      HiOutlineChip,
      HiOutlineLightningBolt,
      HiOutlineChartBar,
      HiOutlineSupport,
      HiOutlineClock, HiOutlineX,
      SiGooglecloud,
      FaDna,
      TbDeviceAnalytics,
      TbAdjustmentsHorizontal,
      BsShieldLock,
      BsShieldCheck,
      MdIntegrationInstructions,
      MdOutlineDashboardCustomize,
      FaRobot,
      FaSlack,
      GiClockwork,
      RiCustomerService2Fill,
      RiCustomerService2Line,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found, falling back to HiOutlineChip`);
      return <HiOutlineChip className={className} />;
    }
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
   * Clear search query
   */
  const clearSearch = useCallback(() => {
    setSearchQuery('');
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
      aria-label="Competitive Advantages"
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
            aria-label="Advantages badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Why We Stand Out"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Our'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Competitive Edge'}
            </span>{' '}
            {config?.title?.suffix || 'in Inventory Management'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "In a crowded market, we differentiate through cutting-edge technology, customer-centric innovation, and an unwavering commitment to reliability. Discover what makes us the preferred choice for thousands of businesses."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== COMPETITIVE ADVANTAGES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                {getIcon(advantage.icon, "w-10 h-10")}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">{advantage.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4 leading-relaxed">{advantage.description}</p>
              <div className="flex items-center justify-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full w-fit mx-auto">
                {getIcon("HiOutlineCheckCircle", "w-3 h-3")}
                <span>{advantage.feature}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== COMPARISON TABLE ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            How We Compare
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            See the difference across key metrics that matter to your operations.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 rounded-t-2xl">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Inventory Platform</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500 dark:text-gray-400">Standard Competitors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {comparisonFeatures.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{item.feature}</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 dark:text-green-400 font-semibold">{item.ourValue}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">{item.theirValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==================== FAQ SECTION ==================== */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Technical Deep Dive
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Frequently asked questions about our architecture, security, and support.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                {getIcon("HiOutlineSearch", "w-5 h-5")}
              </div>
              <input
                type="text"
                placeholder="Search advantages FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                aria-label="Search FAQs"
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

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === 'all'
                ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              All Questions
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeCategory === category.id
                  ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {getIcon(category.icon, "w-3 h-3")}
                {category.name}
              </button>
            ))}
          </div>

          {/* Results Count */}
          {searchQuery && (
            <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
              Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
            </div>
          )}

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-12">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
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

          {/* Empty State */}
          {filteredFaqs.length === 0 && searchQuery && (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
              <div className="flex justify-center mb-4 text-gray-400">
                {getIcon("HiOutlineSearch", "w-12 h-12")}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineTrendingUp", "w-6 h-6 text-blue-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Experience the platform trusted by industry leaders."}
            </span>
            <Link
              href={config?.contactLink || "/demo"}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Claim Your Demo"}
              <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
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

export default CompetitiveAdvantagesSection1;