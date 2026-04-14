// page/frontend/HowItWorks/CaseStudiesSection/CaseStudiesSection2.jsx

/**
 * Case Studies Section 2 Component - Carousel Style
 * Features an interactive carousel/slider for case studies with:
 * - Auto-playing slideshow (5 second intervals)
 * - Manual navigation (previous/next buttons, dot indicators)
 * - Tabbed content (overview, results, timeline, testimonial)
 * - Download and video action buttons
 * - Aggregate metrics showcase
 * 
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

// React Icons - All from react-icons library
import {
  HiArrowRight,
  HiArrowLeft,
  HiOutlinePlay,
  HiOutlineDownload,
  HiOutlineTrendingUp,
  HiOutlineCalendar,
  HiOutlineFlag,
  HiOutlineChartBar,
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
  HiOutlinePause,
} from 'react-icons/hi';

const CaseStudiesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isTransitioning, setIsTransitioning] = useState(false);                   // Prevent rapid clicks
  const [autoplay, setAutoplay] = useState(config?.autoplay !== false);            // Auto-play slideshow
  const [currentIndex, setCurrentIndex] = useState(config?.initialIndex || 0);     // Current slide index
  const [activeTab, setActiveTab] = useState(config?.initialTab || 'overview');    // Active tab in case study details

  // Ref for autoplay interval
  const autoplayRef = useRef(null);

  // ==================== DATA ====================
  const caseStudies = config?.caseStudies || [];
  const currentCase = caseStudies[currentIndex];

  // ==================== NAVIGATION FUNCTIONS ====================
  /**
   * Navigate to next slide
   */
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [caseStudies.length, isTransitioning]);

  /**
   * Navigate to previous slide
   */
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [caseStudies.length, isTransitioning]);

  /**
   * Go to specific slide by index
   * @param {number} index - Target slide index
   */
  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [currentIndex, isTransitioning]);

  /**
   * Toggle auto-play on/off
   */
  const toggleAutoplay = useCallback(() => {
    setAutoplay((prev) => !prev);
  }, []);

  // ==================== AUTO-PLAY EFFECT ====================
  /**
   * Set up auto-play interval for carousel
   * Clears previous interval before creating a new one
   */
  useEffect(() => {
    if (autoplay && caseStudies.length > 1) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, config?.autoplayInterval || 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, caseStudies.length, config?.autoplayInterval, nextSlide]);

  // Reset autoplay timer when manually changing slides
  useEffect(() => {
    if (autoplay && autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, config?.autoplayInterval || 5000);
    }
  }, [currentIndex, autoplay, config?.autoplayInterval, nextSlide]);

  // ==================== HELPER FUNCTIONS ====================
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
      'calendar': HiOutlineCalendar,
      'flag': HiOutlineFlag,
      'play': HiOutlinePlay,
      'download': HiOutlineDownload,
      'arrow-right': HiArrowRight,
      'arrow-left': HiArrowLeft,
      'pause': HiOutlinePause
    };

    const IconComponent = icons[iconName] || HiOutlineChartBar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get tab display name with icon
   * @param {string} tab - Tab key
   * @returns {string} Display name with icon
   */
  const getTabDisplayName = useCallback((tab) => {
    const tabNames = {
      'overview': 'Overview',
      'results': 'Results',
      'timeline': 'Timeline',
      'testimonial': 'Testimonial'
    };
    return tabNames[tab] || tab;
  }, []);

  /**
   * Get tab icon
   * @param {string} tab - Tab key
   * @returns {JSX.Element} Icon component
   */
  const getTabIcon = useCallback((tab) => {
    switch (tab) {
      case 'overview': return getIcon("bulb", "w-4 h-4");
      case 'results': return getIcon("trending", "w-4 h-4");
      case 'timeline': return getIcon("calendar", "w-4 h-4");
      case 'testimonial': return getIcon("star", "w-4 h-4");
      default: return null;
    }
  }, [getIcon]);

  // Return early if no case studies
  if (!currentCase) return null;

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Case Studies Carousel Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-16 w-20 h-20 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-32 left-16 w-28 h-28 bg-indigo-300/5 dark:bg-indigo-500/5 rounded-full blur-2xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Case studies badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Success Stories"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Real'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Success Stories'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "See how we've helped businesses transform their operations"}
          </p>
        </div>

        {/* ==================== MAIN CAROUSEL CARD ==================== */}
        {currentCase && (
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-8 transition-all duration-300">
            {/* Auto-play Indicator */}
            {autoplay && caseStudies.length > 1 && (
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={toggleAutoplay}
                  className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 transition-colors flex items-center justify-center"
                  aria-label="Pause auto-play"
                >
                  {getIcon("pause", "w-3 h-3")}
                </button>
              </div>
            )}

            {/* Company Header */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-8 text-white">
              <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    {getIcon(currentCase.icon, "w-8 h-8")}
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Featured Success Story</div>
                    <h3 className="text-2xl md:text-3xl font-bold">{currentCase.company}</h3>
                    <p className="text-blue-100 mt-1">{currentCase.industry}</p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-3xl md:text-4xl font-bold">{currentCase.results?.[0]?.value}</div>
                  <div className="text-sm text-blue-200">{currentCase.results?.[0]?.label}</div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
              {['overview', 'results', 'timeline', 'testimonial'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all capitalize whitespace-nowrap ${activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  aria-label={`Show ${tab} section`}
                >
                  {getTabIcon(tab)}
                  {getTabDisplayName(tab)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-8 min-h-100 transition-all duration-300">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="animate-fadeIn">
                    <div className="flex items-center gap-2 mb-3">
                      {getIcon("bulb", "w-5 h-5 text-blue-600")}
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">The Challenge</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentCase.challenge}
                    </p>
                  </div>
                  <div className="animate-fadeIn">
                    <div className="flex items-center gap-2 mb-3">
                      {getIcon("check", "w-5 h-5 text-blue-600")}
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">The Solution</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* Results Tab */}
              {activeTab === 'results' && (
                <div className="animate-fadeIn">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
                    {currentCase.results?.map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:shadow-md transition-all">
                        <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 font-mono">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2">
                      {getIcon("trending", "w-5 h-5 text-blue-600")}
                      <span className="font-semibold text-gray-900 dark:text-white">Key Impact</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{currentCase.keyImpact}</p>
                  </div>
                </div>
              )}

              {/* Timeline Tab */}
              {activeTab === 'timeline' && (
                <div className="relative animate-fadeIn">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-indigo-500" />
                  <div className="space-y-6">
                    {currentCase.timeline?.map((item, idx) => (
                      <div key={idx} className="relative pl-12 group">
                        <div className="absolute left-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          {getIcon("calendar", "w-4 h-4 text-blue-600")}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-blue-600 mb-1">{item.period}</div>
                          <h5 className="font-bold text-gray-900 dark:text-white">{item.title}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial Tab */}
              {activeTab === 'testimonial' && (
                <div className="text-center p-4 md:p-8 animate-fadeIn">
                  <div className="text-5xl text-blue-400 mb-4">"</div>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                    {currentCase.testimonial?.quote}
                  </p>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{currentCase.testimonial?.author}</div>
                    <div className="text-sm text-gray-500">{currentCase.testimonial?.role}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row gap-3 justify-between items-center bg-gray-50 dark:bg-gray-800/50">
              <div className="flex gap-3">
                <Link
                  href={currentCase.downloadLink || `/case-studies/${currentCase.id}/download`}
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-md"
                >
                  {getIcon("download", "w-4 h-4")}
                  Download Full Case Study
                </Link>
                <Link
                  href={currentCase.videoLink || `/case-studies/${currentCase.id}/video`}
                  className="flex items-center gap-2 px-5 py-2.5 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                >
                  {getIcon("play", "w-4 h-4")}
                  Watch Video
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {getIcon("clock", "w-4 h-4")}
                Read time: {currentCase.readTime || "5 min"}
              </div>
            </div>
          </div>
        )}

        {/* ==================== CAROUSEL NAVIGATION ==================== */}
        {caseStudies.length > 1 && (
          <div className="flex items-center justify-between mb-12">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all disabled:opacity-50"
              aria-label="Previous case study"
            >
              {getIcon("arrow-left", "w-5 h-5 text-gray-600")}
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all rounded-full ${currentIndex === idx
                    ? 'w-6 h-2 bg-blue-600'
                    : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  aria-label={`Go to case study ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all disabled:opacity-50"
              aria-label="Next case study"
            >
              {getIcon("arrow-right", "w-5 h-5 text-gray-600")}
            </button>
          </div>
        )}

        {/* ==================== COMPANY LOGOS ROW ==================== */}
        {config?.showLogos && config?.companyLogos?.length > 0 && (
          <div className="mb-12">
            <p className="text-center text-sm text-gray-500 mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {config.companyLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  {getIcon(logo.icon, "w-8 h-8 text-gray-400")}
                  <span className="ml-2 text-gray-500 font-medium">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== AGGREGATE METRICS SHOWCASE ==================== */}
        {config?.showMetrics && config?.aggregateMetrics?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {config.aggregateMetrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-3">
                  {getIcon(metric.icon, "w-8 h-8 text-blue-600")}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 font-mono">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("flag", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to become our next success story?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Start Your Journey"}
                {getIcon("arrow-right", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        /* Fade In Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        /* Dots Pattern Background */
        .bg-dots-pattern {
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-dots-pattern {
          background-image: radial-gradient(circle, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection2;