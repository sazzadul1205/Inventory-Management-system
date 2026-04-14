// page/frontend/HowItWorks/CaseStudiesSection/CaseStudiesSection1.jsx

/**
 * Case Studies Section Component
 * Showcases customer success stories with filtering, modal details, video testimonials, and downloadable content
 * Features: Category filtering, expandable case study modals, video testimonials, key results display
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - All from react-icons library
import {
  HiArrowRight,
  HiOutlinePlay,
  HiOutlineDownload,
  HiOutlineX,
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineBookOpen
} from 'react-icons/hi';

const CaseStudiesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isModalOpen, setIsModalOpen] = useState(false);                                       // Modal visibility state
  const [selectedCase, setSelectedCase] = useState(null);                                      // Currently selected case study for modal
  const [selectedCategory, setSelectedCategory] = useState(config?.initialCategory || 'all');  // Current category filter

  // ==================== MEMOIZED DATA ====================
  // Memoize case studies data
  const caseStudies = useMemo(() => config?.caseStudies || [], [config]);

  // Memoize categories for filter buttons
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(caseStudies.map(study => study.category))];
    return cats;
  }, [caseStudies]);

  // Filtered case studies based on selected category
  const filteredStudies = useMemo(() => {
    if (selectedCategory === 'all') return caseStudies;
    return caseStudies.filter(study => study.category === selectedCategory);
  }, [selectedCategory, caseStudies]);

  // ==================== HELPER FUNCTIONS ====================
  /**
   * Opens modal with selected case study details
   * @param {Object} caseStudy - The case study object to display
   */
  const openCaseModal = useCallback((caseStudy) => {
    setSelectedCase(caseStudy);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  /**
   * Closes the case study modal
   */
  const closeCaseModal = useCallback(() => {
    setSelectedCase(null);
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon
   * @param {string} className - CSS classes for the icon
   * @returns {JSX.Element} Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'chart': HiOutlineChartBar,
      'trending': HiOutlineTrendingUp,
      'users': HiOutlineUsers,
      'clock': HiOutlineClock,
      'check': HiOutlineCheckCircle,
      'bulb': HiOutlineLightBulb,
      'sparkles': HiOutlineSparkles,
      'star': HiOutlineStar,
      'group': HiOutlineUserGroup,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'document': HiOutlineDocumentText,
      'external': HiOutlineExternalLink,
      'filter': HiOutlineFilter,
      'search': HiOutlineSearch,
      'book': HiOutlineBookOpen,
      'play': HiOutlinePlay,
      'download': HiOutlineDownload,
      'arrow': HiArrowRight,
      'x': HiOutlineX
    };

    const IconComponent = icons[iconName] || HiOutlineChartBar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get category display name
   * @param {string} category - Category key
   * @returns {string} Display name
   */
  const getCategoryDisplayName = useCallback((category) => {
    if (category === 'all') return 'All Stories';
    const categoryMap = {
      'retail': 'Retail',
      'warehouse': 'Warehouse',
      'manufacturing': 'Manufacturing',
      'healthcare': 'Healthcare',
      'logistics': 'Logistics'
    };
    return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
  }, []);

  // Get stats data
  const stats = config?.stats || [];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Customer Case Studies Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-indigo-300/5 dark:bg-indigo-500/5 rounded-full blur-2xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Case studies badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        {stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-3">
                  {getIcon(stat.icon, "w-8 h-8 text-blue-600 dark:text-blue-400")}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Filter by ${getCategoryDisplayName(category)}`}
            >
              {getCategoryDisplayName(category)}
            </button>
          ))}
        </div>

        {/* ==================== CASE STUDIES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 dark:border-gray-700"
              onClick={() => openCaseModal(study)}
              role="button"
              tabIndex={0}
              aria-label={`View case study for ${study.company}`}
              onKeyDown={(e) => e.key === 'Enter' && openCaseModal(study)}
            >
              {/* Company Header */}
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  {getIcon(study.icon, "w-8 h-8")}
                  <h3 className="text-xl font-bold">{study.company}</h3>
                </div>
                <p className="text-sm text-blue-100">{study.industry}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed line-clamp-3">
                  {study.description}
                </p>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {study.results?.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400 font-mono">{result.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags?.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400">
                      {tag}
                    </span>
                  ))}
                  {study.tags?.length > 3 && (
                    <span className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400">
                      +{study.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Read More Link */}
                <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all">
                  Read full story
                  {getIcon("arrow", "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== CASE STUDY MODAL ==================== */}
        {isModalOpen && selectedCase && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
            onClick={closeCaseModal}
            role="dialog"
            aria-modal="true"
            aria-label={`Case study: ${selectedCase.company}`}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-linear-to-r from-blue-600 to-indigo-600 p-6 text-white z-10">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    {getIcon(selectedCase.icon, "w-8 h-8")}
                    <div>
                      <h3 className="text-2xl font-bold">{selectedCase.company}</h3>
                      <p className="text-blue-100 text-sm">{selectedCase.industry}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeCaseModal}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    aria-label="Close modal"
                  >
                    {getIcon("x", "w-5 h-5")}
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                {/* Challenge Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    {getIcon("bulb", "w-5 h-5 text-blue-600")}
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">The Challenge</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    {getIcon("check", "w-5 h-5 text-blue-600")}
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">The Solution</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>

                {/* Results Grid */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    {getIcon("trending", "w-5 h-5 text-blue-600")}
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Key Results</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedCase.results?.map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all">
                        <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 font-mono">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {selectedCase.testimonial && (
                  <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                    <div className="text-3xl text-blue-400 mb-2">"</div>
                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                      {selectedCase.testimonial.quote}
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{selectedCase.testimonial.author}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{selectedCase.testimonial.role}</div>
                    </div>
                  </div>
                )}

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href={selectedCase.downloadLink || `/case-studies/${selectedCase.id}/download`}
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
                  >
                    {getIcon("download", "w-4 h-4")}
                    Download Full Case Study
                  </Link>
                  <Link
                    href={selectedCase.videoLink || `/case-studies/${selectedCase.id}/video`}
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                  >
                    {getIcon("play", "w-4 h-4")}
                    Watch Video
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIDEO TESTIMONIALS SECTION ==================== */}
        {config?.showVideos && config?.videoTestimonials?.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {config?.videosTitle || "Video Testimonials"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.videosDescription || "Hear directly from our customers"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.videoTestimonials.map((video, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 relative flex items-center justify-center cursor-pointer group/video">
                    <div className="absolute inset-0 bg-black/10 group-hover/video:bg-black/20 transition-all" />
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover/video:scale-110 transition-transform">
                      {getIcon("play", "w-6 h-6 text-white ml-0.5")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">
                      "{video.quote}"
                    </p>
                    <div className="font-semibold text-gray-900 dark:text-white">{video.author}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{video.role}, {video.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== DOWNLOAD ALL CASE STUDIES ==================== */}
        {config?.showDownload && (
          <div className="text-center mb-12">
            <Link
              href={config?.downloadAllLink || "/case-studies/all"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:shadow-md"
            >
              {getIcon("download", "w-5 h-5")}
              Download All Case Studies
            </Link>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="mt-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("sparkles", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to write your own success story?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Start Your Journey"}
                {getIcon("arrow", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        /* Blob Animation */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        
        /* Fade In Animation for Modal */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        /* Grid Pattern Background */
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        
        /* Line Clamp Utilities */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection1;