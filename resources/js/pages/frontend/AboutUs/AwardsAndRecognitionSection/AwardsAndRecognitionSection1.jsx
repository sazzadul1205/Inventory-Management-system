// frontend/AboutUs/AwardsAndRecognitionSection/AwardsAndRecognitionSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineArrowRight,
  HiOutlineCalendar,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineChartBar,
  HiOutlineQuestionMarkCircle,
  HiOutlineX,
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const AwardsAndRecognitionSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeYear, setActiveYear] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const years = config?.years || [];
  const categories = config?.categories || [];
  const featuredAward = config?.featuredAward || null;
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const awards = useMemo(() => config?.awards || [], [config?.awards]);

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
      HiOutlineArrowRight,
      HiOutlineCalendar,
      HiOutlineTrophy,
      HiOutlineStar,
      HiOutlineUserGroup,
      HiOutlineGlobeAlt,
      HiOutlineSparkles,
      HiOutlineHeart,
      HiOutlineChartBar,
      HiOutlineQuestionMarkCircle,
      HiOutlineX,
    };
    const IconComponent = icons[iconName] || HiOutlineTrophy;
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

  /**
   * Clear all filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setActiveCategory('all');
    setActiveYear('all');
  }, []);

  /**
   * Highlight search matches in text
   * @param {string} text - Text to highlight
   * @param {string} query - Search query to highlight
   * @returns {JSX.Element|string} Text with highlighted matches
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // ==================== FILTERED DATA ====================
  const filteredAwards = useMemo(() => {
    return awards.filter(award => {
      return activeYear === 'all' || award.year === activeYear;
    });
  }, [awards, activeYear]);

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
      aria-label="Awards & Recognition"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-yellow-50/30 to-transparent dark:from-yellow-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 dark:bg-amber-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-yellow-300/5 dark:bg-yellow-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-yellow-100 dark:bg-yellow-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-yellow-200 dark:border-yellow-800'}`}
            aria-label="Awards badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-yellow-700 dark:text-yellow-300'}`}>
              {config?.badge?.text || "Celebrating Excellence"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Recognized for'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-yellow-600 to-amber-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Innovation & Impact'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Our commitment to excellence has been recognized by industry leaders, analysts, and customers around the world. These awards reflect our dedication to innovation, customer success, and building a product that truly makes a difference."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-yellow-600 dark:text-yellow-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== FEATURED AWARD ==================== */}
        {featuredAward && (
          <div className="mb-16">
            <div className="bg-linear-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-8 text-center border border-yellow-200 dark:border-yellow-800 shadow-md">
              <div className="flex justify-center mb-4 text-yellow-600 dark:text-yellow-400 text-6xl">
                {getIcon("HiOutlineTrophy", "w-12 h-12")}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{featuredAward.title}</h3>
              <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-3">{featuredAward.awarder} • {featuredAward.year}</p>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">{featuredAward.description}</p>
            </div>
          </div>
        )}

        {/* ==================== YEAR FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveYear('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeYear === 'all'
              ? 'bg-linear-to-r from-yellow-600 to-amber-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            All Years
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeYear === year
                ? 'bg-linear-to-r from-yellow-600 to-amber-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* ==================== AWARDS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAwards.map((award, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-yellow-600 dark:text-yellow-400 text-4xl group-hover:scale-110 transition-transform">
                  {award.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{award.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span className="text-yellow-600 dark:text-yellow-400 font-medium">{award.awarder}</span>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <div className="flex items-center gap-1">
                      {getIcon("HiOutlineCalendar", "w-3 h-3")}
                      {award.year}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{award.description}</p>
                  {award.link && (
                    <Link
                      href={award.link}
                      className="inline-flex items-center gap-1 text-yellow-600 dark:text-yellow-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                    >
                      Learn more
                      {getIcon("HiOutlineArrowRight", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATE FOR AWARDS ==================== */}
        {filteredAwards.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("HiOutlineTrophy", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No awards found for {activeYear}</h3>
            <p className="text-gray-500 dark:text-gray-400">Try selecting a different year to see our achievements.</p>
            <button
              onClick={() => setActiveYear('all')}
              className="mt-4 px-4 py-2 text-yellow-600 dark:text-yellow-400 font-semibold text-sm hover:underline"
            >
              View all years
            </button>
          </div>
        )}

        {/* ==================== SEARCH BAR ==================== */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("HiOutlineSearch", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search awards FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
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

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === 'all'
              ? 'bg-linear-to-r from-yellow-600 to-amber-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeCategory === category.id
                ? 'bg-linear-to-r from-yellow-600 to-amber-600 text-white shadow-lg'
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
              key={faq.id || index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                aria-label={openFaq === index ? "Collapse answer" : "Expand answer"}
              >
                <div className="flex items-start gap-3 pr-4">
                  <div className="text-yellow-600 dark:text-yellow-400 mt-0.5">
                    {getIcon(faq.icon, "w-5 h-5")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {highlightText(faq.question, searchQuery)}
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
                <div className="text-yellow-500 dark:text-yellow-400">
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
                    {highlightText(faq.answer, searchQuery)}
                  </p>
                  {faq.link && (
                    <Link
                      href={faq.link}
                      className="inline-flex items-center gap-1 text-yellow-600 dark:text-yellow-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
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
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 text-yellow-600 dark:text-yellow-400 font-semibold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-yellow-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineTrophy", "w-6 h-6 text-yellow-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Want to learn more about our achievements? Contact our media team."}
            </span>
            <Link
              href={config?.contactLink || "/press"}
              className="px-6 py-3 bg-linear-to-r from-yellow-600 to-amber-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Press & Media"}
              {getIcon("HiOutlineArrowRight", "w-4 h-4")}
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
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default AwardsAndRecognitionSection1;