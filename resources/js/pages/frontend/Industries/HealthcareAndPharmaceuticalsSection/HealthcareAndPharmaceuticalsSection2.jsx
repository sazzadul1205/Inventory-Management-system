// page/frontend/Industries/HealthcareAndPharmaceuticalsSection/HealthcareAndPharmaceuticalsSection2.jsx

/**
 * Healthcare & Pharmaceuticals Section 2 Component - Success Stories Carousel
 * Features healthcare and pharmaceutical customer success stories with:
 * - Interactive carousel/slider for featured case studies
 * - Results grid display
 * - Compliance badges
 * - Testimonials with quotes
 * - Additional case studies grid
 * - Cold chain monitoring preview
 * - Compliance showcase
 * 
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useCallback, useEffect, useRef } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineHeart,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiArrowLeft,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlinePlay,
  HiOutlineDownload,
  HiOutlineLocationMarker,
  HiOutlineTrendingUp,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineQrcode,
  HiOutlineRefresh,
  HiOutlineChip,
  HiOutlineCloud,
  HiOutlineDocumentText,
  HiOutlineClipboard,
  HiOutlineClipboardList,
  HiOutlineBeaker,
  HiOutlineClipboardCheck
} from 'react-icons/hi';
import { MdOutlineMedication } from 'react-icons/md'
import { TbTemperature, TbSnowflake } from 'react-icons/tb';

const HealthcareAndPharmaceuticalsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [autoplay, setAutoplay] = useState(config?.autoplay !== false);                  // Auto-play slideshow
  const [activeCaseStudy, setActiveCaseStudy] = useState(config?.initialIndex || 0);     // Current featured case study index

  // Ref for autoplay interval
  const autoplayRef = useRef(null);

  // ==================== DATA ====================
  const caseStudies = config?.caseStudies || [];
  const currentCase = caseStudies[activeCaseStudy];

  // ==================== AUTO-PLAY EFFECT ====================
  useEffect(() => {
    if (autoplay && caseStudies.length > 1) {
      autoplayRef.current = setInterval(() => {
        setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
      }, config?.autoplayInterval || 6000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, caseStudies.length, config?.autoplayInterval]);

  // Reset autoplay timer when manually changing slides
  useEffect(() => {
    if (autoplay && autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
      }, config?.autoplayInterval || 6000);
    }
  }, [activeCaseStudy, autoplay, caseStudies.length, config?.autoplayInterval]);

  // ==================== NAVIGATION FUNCTIONS ====================
  const nextCase = useCallback(() => {
    setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
    setAutoplay(false);
  }, [caseStudies.length]);

  const prevCase = useCallback(() => {
    setActiveCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    setAutoplay(false);
  }, [caseStudies.length]);

  const goToCase = useCallback((index) => {
    setActiveCaseStudy(index);
    setAutoplay(false);
  }, []);

  // ==================== HELPER FUNCTIONS ====================
  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon
   * @param {string} className - CSS classes for the icon
   * @returns {JSX.Element} Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'heart': HiOutlineHeart,
      'chart': HiOutlineChartBar,
      'check': HiOutlineCheckCircle,
      'arrow-right': HiArrowRight,
      'arrow-left': HiArrowLeft,
      'bulb': HiOutlineLightBulb,
      'shield': HiOutlineShieldCheck,
      'play': HiOutlinePlay,
      'download': HiOutlineDownload,
      'location': HiOutlineLocationMarker,
      'trending': HiOutlineTrendingUp,
      'users': HiOutlineUsers,
      'clock': HiOutlineClock,
      'dollar': HiOutlineCurrencyDollar,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'sparkles': HiOutlineSparkles,
      'star': HiOutlineStar,
      'qrcode': HiOutlineQrcode,
      'refresh': HiOutlineRefresh,
      'chip': HiOutlineChip,
      'cloud': HiOutlineCloud,
      'document': HiOutlineDocumentText,
      'clipboard': HiOutlineClipboard,
      'clipboard-list': HiOutlineClipboardList,
      'pill': MdOutlineMedication,
      'beaker': HiOutlineBeaker,
      'clipboard-check': HiOutlineClipboardCheck,
      'thermometer': TbTemperature,
      'snowflake': TbSnowflake
    };

    const IconComponent = icons[iconName] || HiOutlineHeart;
    return <IconComponent className={className} />;
  }, []);

  // Return early if no case studies
  if (!currentCase) return null;

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Healthcare & Pharmaceuticals Success Stories Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-200 dark:bg-teal-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-teal-300/5 dark:bg-teal-500/5 rounded-full blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-emerald-300/5 dark:bg-emerald-500/5 rounded-full blur-2xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Success stories badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
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

        {/* ==================== FEATURED CASE STUDY CAROUSEL ==================== */}
        {currentCase && (
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12 transition-all duration-300">
            {/* Auto-play Indicator */}
            {autoplay && caseStudies.length > 1 && (
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setAutoplay(false)}
                  className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 transition-colors flex items-center justify-center"
                  aria-label="Pause auto-play"
                >
                  {getIcon("clock", "w-3 h-3")}
                </button>
              </div>
            )}

            {/* Company Header with Gradient */}
            <div className="bg-linear-to-r from-teal-600 to-emerald-600 p-8 text-white">
              <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {getIcon(currentCase.icon, "w-10 h-10 text-white")}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">{currentCase.company}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {getIcon("location", "w-4 h-4 text-teal-200")}
                      <p className="text-teal-100 text-sm">{currentCase.location}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-sm text-teal-200 mb-1">Key Result</div>
                  <div className="text-3xl md:text-4xl font-bold">{currentCase.keyResult?.value}</div>
                  <div className="text-xs text-teal-200">{currentCase.keyResult?.label}</div>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30">
              {currentCase.results?.map((result, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-teal-600 dark:text-teal-400 font-mono">
                    {result.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{result.label}</div>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Challenge */}
                <div className="animate-fadeIn">
                  <div className="flex items-center gap-2 mb-3">
                    {getIcon("chart", "w-5 h-5 text-teal-500")}
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">The Challenge</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {currentCase.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="animate-fadeIn" style={{ animationDelay: "100ms" }}>
                  <div className="flex items-center gap-2 mb-3">
                    {getIcon("bulb", "w-5 h-5 text-teal-500")}
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">The Solution</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {currentCase.solution}
                  </p>
                </div>
              </div>

              {/* Compliance Badges */}
              {currentCase.compliance && currentCase.compliance.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {currentCase.compliance.map((badge, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 rounded-full flex items-center gap-1">
                      {getIcon("shield", "w-3 h-3")}
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Testimonial */}
              {currentCase.testimonial && (
                <div className="mt-6 p-6 bg-teal-50 dark:bg-teal-900/20 rounded-2xl border border-teal-100 dark:border-teal-800">
                  <div className="text-3xl text-teal-400 mb-2">"</div>
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                    {currentCase.testimonial.quote}
                  </p>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{currentCase.testimonial.author}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{currentCase.testimonial.role}</div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentCase.downloadLink || `/case-studies/${currentCase.id}/download`}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-linear-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-md transition-all"
                >
                  {getIcon("download", "w-4 h-4")}
                  Download Full Case Study
                </Link>
                <Link
                  href={currentCase.videoLink || `/case-studies/${currentCase.id}/video`}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-teal-600 text-teal-600 dark:text-teal-400 rounded-xl font-semibold hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all"
                >
                  {getIcon("play", "w-4 h-4")}
                  Watch Video Story
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CAROUSEL NAVIGATION ==================== */}
        {caseStudies.length > 1 && (
          <div className="flex items-center justify-between mb-12">
            {/* Previous Button */}
            <button
              onClick={prevCase}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              aria-label="Previous case study"
            >
              {getIcon("arrow-left", "w-5 h-5 text-gray-600 dark:text-gray-400")}
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToCase(idx)}
                  className={`transition-all rounded-full ${activeCaseStudy === idx
                    ? 'w-6 h-2 bg-teal-600'
                    : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  aria-label={`Go to case study ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextCase}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              aria-label="Next case study"
            >
              {getIcon("arrow-right", "w-5 h-5 text-gray-600 dark:text-gray-400")}
            </button>
          </div>
        )}

        {/* ==================== ADDITIONAL CASE STUDIES GRID ==================== */}
        {config?.showAdditionalCases && config?.additionalCases?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.additionalCasesTitle || "More Success Stories"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.additionalCases.map((caseStudy, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      {getIcon(caseStudy.icon, "w-10 h-10 text-teal-600")}
                      <span className="text-xs px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 rounded-full">
                        {caseStudy.industry}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{caseStudy.company}</h4>
                    <div className="mb-3">
                      <span className="text-xl font-bold text-teal-600 dark:text-teal-400">{caseStudy.result}</span>
                      <span className="text-xs text-gray-500 ml-1">{caseStudy.resultLabel}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {caseStudy.description}
                    </p>
                    <Link
                      href={caseStudy.link}
                      className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 font-semibold text-sm hover:gap-2 transition-all group-hover:text-teal-700"
                    >
                      Read Story
                      {getIcon("arrow-right", "w-3 h-3")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== COMPLIANCE & SAFETY PREVIEW ==================== */}
        {config?.showCompliancePreview && (
          <div className="bg-linear-to-r from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 mb-12 hover:shadow-lg transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  {getIcon("shield", "w-5 h-5 text-teal-600")}
                  <h3 className="font-bold text-gray-900 dark:text-white">Compliance & Safety First</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Our platform is built to meet the strictest regulatory requirements in healthcare and pharmaceuticals:
                </p>
                <div className="flex flex-wrap gap-3">
                  {config.complianceItems?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                      {getIcon("check", "w-3 h-3 text-green-500")}
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Link
                  href={config?.complianceLink || "/compliance"}
                  className="block text-center px-5 py-2.5 bg-linear-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-md transition-all"
                >
                  View Compliance Details
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== COLD CHAIN MONITORING PREVIEW ==================== */}
        {config?.showColdChain && (
          <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column - Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  {getIcon("snowflake", "w-8 h-8 text-teal-600")}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Cold Chain Monitoring</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Real-time temperature monitoring for sensitive medications, vaccines, and biologics.
                </p>
                <div className="space-y-2">
                  {config.coldChainFeatures?.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      {getIcon("check", "w-4 h-4 text-green-500")}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Stats */}
              <div className="bg-teal-50 dark:bg-teal-900/20 p-6 md:p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400">
                    {config?.coldChainStats?.zeroExcursions || "0"}
                  </div>
                  <div className="text-xs text-gray-500 mb-3">Temperature Excursions</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    since implementing our solution
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-teal-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                {getIcon("heart", "w-6 h-6 text-teal-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to write your own success story?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
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
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        /* Dots Pattern Background */
        .bg-dots-pattern {
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-dots-pattern {
          background-image: radial-gradient(circle, #374151 1px, transparent 1px);
        }
        
        /* Line Clamp Utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default HealthcareAndPharmaceuticalsSection2;