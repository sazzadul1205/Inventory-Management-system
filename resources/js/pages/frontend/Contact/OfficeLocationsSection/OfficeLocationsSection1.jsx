// frontend/Contact/OfficeLocationsSection/OfficeLocationsSection1.jsx

/**
 * Office Locations Section Component - Global Office Directory
 * A comprehensive office locations section featuring:
 * - Interactive office cards with full address, contact details, and hours
 * - Region-based filtering for global offices
 * - Statistics display for global presence metrics
 * - Expandable FAQ accordion for location-related questions
 * - Search functionality across FAQs
 * - Global presence summary with region office counts
 * - Map links for each office location
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
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineArrowRight,
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlineX,
} from 'react-icons/hi';

const OfficeLocationsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const regions = config?.regions || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const stats = useMemo(() => config?.stats || [], [config?.stats]);
  const offices = useMemo(() => config?.offices || [], [config?.offices]);

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
      HiOutlineLocationMarker,
      HiOutlineMail,
      HiOutlinePhone,
      HiOutlineClock,
      HiOutlineGlobeAlt,
      HiOutlineArrowRight,
      HiOutlineOfficeBuilding,
      HiOutlineUserGroup,
      HiOutlineX,
    };
    const IconComponent = icons[iconName] || HiOutlineLocationMarker;
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

  // ==================== FILTERED DATA ====================
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchQuery === '' ||
        faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesSearch;
    });
  }, [faqs, searchQuery]);

  const filteredOffices = useMemo(() => {
    return offices.filter(office => {
      return activeRegion === 'all' || office.region === activeRegion;
    });
  }, [offices, activeRegion]);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Office Locations"
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
            aria-label="Locations badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-sky-700 dark:text-sky-300'}`}>
              {config?.badge?.text || "Global Presence"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Find Us'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-sky-600 to-blue-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Around the World'}
            </span>{' '}
            {config?.title?.suffix || "We're Everywhere You Need Us"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "With strategic offices across the globe, we're always nearby to serve you better. Visit us at any of our locations or connect with our regional teams."}
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

        {/* ==================== REGION FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveRegion('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeRegion === 'all'
              ? 'bg-linear-to-r from-sky-600 to-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            All Locations
          </button>
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeRegion === region.id
                ? 'bg-linear-to-r from-sky-600 to-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {getIcon(region.icon, "w-3 h-3")}
              {region.name}
            </button>
          ))}
        </div>

        {/* ==================== OFFICES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredOffices.map((office, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700 group"
            >
              <div className={`h-32 ${office.image || 'bg-linear-to-r from-sky-500 to-blue-600'} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xl font-bold">{office.city}</div>
                  <div className="text-xs opacity-90">{office.country}</div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  {getIcon("HiOutlineLocationMarker", "w-4 h-4 text-white")}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-sky-500 dark:text-sky-400 mt-0.5 shrink-0">
                    {getIcon("HiOutlineLocationMarker", "w-4 h-4")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {office.address}
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-sky-500 dark:text-sky-400 mt-0.5 shrink-0">
                    {getIcon("HiOutlinePhone", "w-4 h-4")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {office.phone}
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-sky-500 dark:text-sky-400 mt-0.5 shrink-0">
                    {getIcon("HiOutlineMail", "w-4 h-4")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {office.email}
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-sky-500 dark:text-sky-400 mt-0.5 shrink-0">
                    {getIcon("HiOutlineClock", "w-4 h-4")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {office.hours}
                  </div>
                </div>
                {office.mapLink && (
                  <Link
                    href={office.mapLink}
                    className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 text-sm font-semibold hover:gap-2 transition-all duration-200 group"
                  >
                    View on Map
                    {getIcon("HiOutlineArrowRight", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                  </Link>
                )}
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
              placeholder="Search office locations or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              aria-label="Search office locations or FAQs"
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
                      {getIcon("HiOutlineArrowRight", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
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
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search to find what you're looking for.</p>
            <button
              onClick={clearSearch}
              className="mt-4 px-4 py-2 text-sky-600 dark:text-sky-400 font-semibold text-sm hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* ==================== GLOBAL PRESENCE MAP ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12 border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Global Presence</h3>
            <p className="text-gray-600 dark:text-gray-400">Serving customers worldwide from our strategic locations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regions.map((region) => (
              <div
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`text-center p-4 rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${activeRegion === region.id
                  ? 'bg-linear-to-r from-sky-100 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/30 ring-2 ring-sky-500'
                  : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-sky-50 dark:hover:bg-sky-900/20'
                  }`}
              >
                <div className="text-sky-600 dark:text-sky-400 text-3xl mb-2">
                  {getIcon(region.icon, "w-8 h-8 mx-auto")}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">{region.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{region.officeCount} offices</div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== CONTACT CTA ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-sky-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineGlobeAlt", "w-6 h-6 text-sky-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Can't find what you're looking for? Contact our global support team."}
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

        {/* ==================== GUARANTEE ==================== */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("HiOutlineGlobeAlt", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "Global presence with local expertise — we're here to serve you wherever you are."}
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

export default OfficeLocationsSection1; 