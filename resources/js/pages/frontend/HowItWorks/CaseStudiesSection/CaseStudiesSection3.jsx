// page/frontend/HowItWorks/CaseStudiesSection/CaseStudiesSection3.jsx

/**
 * Case Studies Section 3 Component - Testimonial Card Style
 * Features customer success stories with:
 * - Industry-based filtering
 * - Testimonial card layout with quotes
 * - Before/After metric comparison
 * - Video overlay on hover
 * - Featured spotlight story
 * - ROI calculator preview
 * 
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineCurrencyDollar,
  HiArrowRight,
  HiOutlinePlay,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineThumbUp,
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
  HiOutlineX,
  HiOutlineFilter
} from 'react-icons/hi';

const CaseStudiesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [hoveredCard, setHoveredCard] = useState(null);                                        // Currently hovered card for video overlay
  const [showShareTooltip, setShowShareTooltip] = useState(null);                              // Share tooltip visibility
  const [selectedIndustry, setSelectedIndustry] = useState(config?.initialIndustry || 'all');  // Current industry filter

  // ==================== MEMOIZED DATA ====================
  // Memoize case studies data
  const caseStudies = useMemo(() => config?.caseStudies || [], [config]);

  // Memoize unique industries for filter buttons
  const industries = useMemo(() => {
    return ['all', ...new Set(caseStudies.map(study => study.industry))];
  }, [caseStudies]);

  // Filtered case studies based on selected industry
  const filteredStudies = useMemo(() => {
    if (selectedIndustry === 'all') return caseStudies;
    return caseStudies.filter(study => study.industry === selectedIndustry);
  }, [selectedIndustry, caseStudies]);

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
      'filter': HiOutlineFilter,
      'dollar': HiOutlineCurrencyDollar,
      'play': HiOutlinePlay,
      'download': HiOutlineDownload,
      'share': HiOutlineShare,
      'thumb': HiOutlineThumbUp,
      'arrow': HiArrowRight,
      'x': HiOutlineX
    };

    const IconComponent = icons[iconName] || HiOutlineChartBar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get industry display name with icon
   * @param {string} industry - Industry key
   * @returns {JSX.Element} Industry display with icon
   */
  const getIndustryDisplay = useCallback((industry) => {
    const industryIcons = {
      'Retail': 'cart',
      'Manufacturing': 'cog',
      'Logistics': 'truck',
      'E-commerce': 'cart',
      'Healthcare': 'users',
      'Wholesale': 'database'
    };

    const iconName = industryIcons[industry] || 'chart';
    return (
      <div className="flex items-center gap-1">
        {getIcon(iconName, "w-3 h-3")}
        <span>{industry}</span>
      </div>
    );
  }, [getIcon]);

  /**
   * Handle share button click - copies case study URL to clipboard
   * @param {string} caseId - Case study ID
   */
  const handleShare = useCallback(async (caseId) => {
    const url = `${window.location.origin}/case-studies/${caseId}`;
    try {
      await navigator.clipboard.writeText(url);
      setShowShareTooltip(caseId);
      setTimeout(() => setShowShareTooltip(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  // Get config data
  const spotlight = config?.spotlight;
  const roiSavings = config?.roiSavings || "25-35%";
  const roiPayback = config?.roiPayback || "3-6";

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Customer Case Studies Testimonial Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none" aria-hidden="true" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-indigo-300/5 dark:bg-indigo-500/5 rounded-full blur-2xl" aria-hidden="true" />

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

        {/* ==================== INDUSTRY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize flex items-center gap-2 ${selectedIndustry === industry
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Filter by ${industry === 'all' ? 'all industries' : industry}`}
            >
              {industry !== 'all' && getIndustryDisplay(industry)}
              {industry === 'all' ? (
                <>
                  {getIcon("filter", "w-3 h-3")}
                  All Industries
                </>
              ) : industry}
            </button>
          ))}
        </div>

        {/* ==================== SUCCESS METRICS BANNER ==================== */}
        {config?.showMetricsBanner && config?.successMetrics?.length > 0 && (
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 mb-12 text-white shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {config.successMetrics.map((metric, index) => (
                <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-center mb-2">
                    {getIcon(metric.icon, "w-6 h-6 text-white")}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">{metric.value}</div>
                  <div className="text-sm text-blue-100 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CASE STUDIES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredCard(study.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Industry Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1.5 bg-white/95 dark:bg-gray-700/95 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 shadow-sm flex items-center gap-1.5">
                  {getIndustryDisplay(study.industry)}
                </span>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-5xl text-blue-100 dark:text-blue-900/30 opacity-50 font-serif">"</div>

              {/* Content */}
              <div className="p-6 pt-14">
                {/* Testimonial Quote */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed line-clamp-3">
                  "{study.testimonial?.shortQuote || study.testimonial?.quote?.substring(0, 120)}..."
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center">
                    {getIcon(study.icon, "w-5 h-5 text-blue-600")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{study.testimonial?.author}</div>
                    <div className="text-xs text-gray-500">{study.testimonial?.role}</div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    {getIcon(study.icon, "w-4 h-4 text-gray-500")}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">{study.company}</div>
                    <div className="text-xs text-gray-500">{study.location || "Global"}</div>
                  </div>
                </div>

                {/* Key Results - Before/After Style */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">Before</span>
                    {getIcon("arrow", "w-3 h-3 text-gray-400")}
                    <span className="text-xs text-gray-500">After</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{study.beforeMetric}</span>
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{study.afterMetric}</span>
                  </div>
                </div>

                {/* Result Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.resultTags?.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full">
                      {getIcon("check", "w-3 h-3 inline mr-1")}
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    href={study.downloadLink || `/case-studies/${study.id}`}
                    className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all hover:shadow-md"
                  >
                    Read Full Story
                  </Link>
                  <button
                    onClick={() => handleShare(study.id)}
                    className="relative px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Share case study"
                  >
                    {getIcon("share", "w-4 h-4 text-gray-500")}
                    {showShareTooltip === study.id && (
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Video Overlay on Hover */}
              {hoveredCard === study.id && study.videoLink && (
                <Link
                  href={study.videoLink}
                  className="absolute inset-0 bg-linear-to-t from-blue-600/95 to-indigo-600/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-center text-white p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform">
                      {getIcon("play", "w-8 h-8 text-white ml-1")}
                    </div>
                    <p className="text-sm font-semibold">Watch video testimonial</p>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* ==================== FEATURED CASE STUDY SPOTLIGHT ==================== */}
        {config?.showSpotlight && spotlight && (
          <div className="mb-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  {getIcon("star", "w-5 h-5 text-yellow-400")}
                  <span className="text-sm font-semibold text-blue-200 uppercase tracking-wide">Featured Story</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{spotlight.company}</h3>
                <p className="text-blue-100 mb-5 leading-relaxed">{spotlight.description}</p>
                <div className="flex flex-wrap gap-5 mb-6">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold">{spotlight.result1}</div>
                    <div className="text-xs text-blue-200 mt-1">{spotlight.label1}</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold">{spotlight.result2}</div>
                    <div className="text-xs text-blue-200 mt-1">{spotlight.label2}</div>
                  </div>
                </div>
                <Link
                  href={spotlight.link || "/case-studies/featured"}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  Read Full Story
                  {getIcon("arrow", "w-4 h-4")}
                </Link>
              </div>

              {/* Image Side */}
              <div className="relative bg-linear-to-br from-blue-500 to-indigo-500 min-h-62.5 lg:min-h-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {getIcon(spotlight.icon || "star", "w-10 h-10 text-white")}
                  </div>
                  <div className="text-white font-bold text-lg">{spotlight.company}</div>
                  <div className="text-blue-200 text-sm mt-1">Featured Success Story</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ROI CALCULATOR PREVIEW ==================== */}
        {config?.showROI && (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 mb-12 hover:shadow-lg transition-all">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  {getIcon("dollar", "w-5 h-5 text-blue-600")}
                  <h3 className="font-bold text-gray-900 dark:text-white">See what you could save</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Based on similar companies, businesses like yours typically achieve:
                </p>
                <div className="flex gap-6">
                  <div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{roiSavings}</div>
                    <div className="text-xs text-gray-500">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{roiPayback}</div>
                    <div className="text-xs text-gray-500">Months Payback</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">287%</div>
                    <div className="text-xs text-gray-500">Average ROI</div>
                  </div>
                </div>
              </div>
              <div>
                <Link
                  href={config?.roiLink || "/roi-calculator"}
                  className="block text-center px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-md"
                >
                  Calculate Your ROI
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== DOWNLOAD ALL BUTTON ==================== */}
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
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("thumb", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to write your own success story?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Started Today"}
                {getIcon("arrow", "w-4 h-4")}
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
        
        /* Line Clamp Utility */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Noise Pattern Background */
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection3;