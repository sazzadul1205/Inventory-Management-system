// frontend/SuccessStories/IndustrySpecificExamplesSection/IndustrySpecificExamplesSection2.jsx

/**
 * Industry Success Showcase Component
 * A dynamic showcase of industry-specific success stories featuring:
 * - Interactive industry tabs with color-coded themes
 * - Auto-playing carousel for client success stories
 * - Key metrics display with hover tooltips
 * - Challenge vs Solution comparison
 * - ROI highlights for each industry
 * - Client testimonials within stories
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineLightBulb,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineSparkles,
  HiOutlineExclamation,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const IndustrySpecificExamplesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(config?.autoplay !== false);
  const [activeIndustry, setActiveIndustry] = useState(config?.initialIndustry || 'retail');

  // ==================== REFS ====================
  const autoplayRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const industries = useMemo(() => config?.industries || {}, [config]);
  const currentIndustry = industries[activeIndustry];
  const stories = currentIndustry?.stories || [];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'check-circle': HiOutlineCheckCircle,
      'arrow-right': HiArrowRight,
      'star': HiOutlineStar,
      'bulb': HiOutlineLightBulb,
      'play': HiOutlinePlay,
      'pause': HiOutlinePause,
      'chevron-left': HiOutlineChevronLeft,
      'chevron-right': HiOutlineChevronRight,
      'chart': HiOutlineChartBar,
      'dollar': HiOutlineCurrencyDollar,
      'clock': HiOutlineClock,
      'trending': HiOutlineTrendingUp,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'chip': HiOutlineChip,
      'sparkles': HiOutlineSparkles,
      'exclamation': HiOutlineExclamation,
      'location': HiOutlineLocationMarker,
      'users': HiOutlineUserGroup,
      'google': TbBrandGoogle,
      'microsoft': FaMicrosoft,
      'amazon': TbBrandAmazon,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get color classes for the active industry
   * @param {string} industryId - Industry identifier
   * @returns {Object} Color class mappings
   */
  const getColorClasses = useCallback((industryId) => {
    const colorMap = {
      retail: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-600 dark:text-blue-400',
        hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
        gradient: 'from-blue-600 to-indigo-600',
        badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      },
      manufacturing: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-600 dark:text-purple-400',
        hover: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
        gradient: 'from-purple-600 to-pink-600',
        badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
      },
      logistics: {
        bg: 'bg-cyan-50 dark:bg-cyan-900/20',
        border: 'border-cyan-200 dark:border-cyan-800',
        text: 'text-cyan-600 dark:text-cyan-400',
        hover: 'hover:bg-cyan-100 dark:hover:bg-cyan-900/30',
        gradient: 'from-cyan-600 to-blue-600',
        badge: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
      },
      healthcare: {
        bg: 'bg-teal-50 dark:bg-teal-900/20',
        border: 'border-teal-200 dark:border-teal-800',
        text: 'text-teal-600 dark:text-teal-400',
        hover: 'hover:bg-teal-100 dark:hover:bg-teal-900/30',
        gradient: 'from-teal-600 to-emerald-600',
        badge: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300',
      },
      food: {
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        border: 'border-orange-200 dark:border-orange-800',
        text: 'text-orange-600 dark:text-orange-400',
        hover: 'hover:bg-orange-100 dark:hover:bg-orange-900/30',
        gradient: 'from-orange-600 to-red-600',
        badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
      },
      electronics: {
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        border: 'border-indigo-200 dark:border-indigo-800',
        text: 'text-indigo-600 dark:text-indigo-400',
        hover: 'hover:bg-indigo-100 dark:hover:bg-indigo-900/30',
        gradient: 'from-indigo-600 to-purple-600',
        badge: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
      },
    };
    return colorMap[industryId] || colorMap.retail;
  }, []);

  const colors = getColorClasses(activeIndustry);

  // ==================== AUTO-PLAY EFFECT ====================
  useEffect(() => {
    if (isPlaying && stories.length > 1) {
      autoplayRef.current = setInterval(() => {
        setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
      }, config?.autoplayInterval || 6000);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPlaying, stories.length, config?.autoplayInterval]);

  // Reset autoplay when manually changing stories
  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      if (isPlaying && stories.length > 1) {
        autoplayRef.current = setInterval(() => {
          setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
        }, config?.autoplayInterval || 6000);
      }
    }
  }, [currentStoryIndex, isPlaying, stories.length, config?.autoplayInterval]);

  // ==================== CAROUSEL NAVIGATION ====================
  const nextStory = useCallback(() => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
    setIsPlaying(false);
  }, [stories.length]);

  const prevStory = useCallback(() => {
    setCurrentStoryIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setIsPlaying(false);
  }, [stories.length]);

  const goToStory = useCallback((index) => {
    setCurrentStoryIndex(index);
    setIsPlaying(false);
  }, []);

  // ==================== INDUSTRY TABS ====================
  const industryTabs = useMemo(() => [
    { id: 'retail', name: 'Retail & E-commerce', icon: 'database', color: 'blue' },
    { id: 'manufacturing', name: 'Manufacturing', icon: 'building', color: 'purple' },
    { id: 'logistics', name: 'Logistics & 3PL', icon: 'truck', color: 'cyan' },
    { id: 'healthcare', name: 'Healthcare', icon: 'shield', color: 'teal' },
    { id: 'food', name: 'Food & Beverage', icon: 'star', color: 'orange' },
    { id: 'electronics', name: 'Electronics', icon: 'chip', color: 'indigo' },
  ], []);

  // Return early if no industry data
  if (!currentIndustry) return null;

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Industry Success Showcase"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-300/5 dark:bg-indigo-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Industry showcase badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Industry Success Stories"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Success Stories Across'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Every Industry'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Explore how we've helped businesses across different sectors overcome challenges and achieve remarkable results."}
          </p>
        </div>

        {/* ==================== INDUSTRY TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industryTabs.map((tab) => {
            const tabColors = getColorClasses(tab.id);
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveIndustry(tab.id);
                  setCurrentStoryIndex(0);
                  setIsPlaying(false);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${activeIndustry === tab.id
                  ? `bg-linear-to-r ${tabColors.gradient} text-white shadow-lg`
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`View ${tab.name} success stories`}
              >
                {getIcon(tab.icon, "w-4 h-4")}
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* ==================== INDUSTRY SHOWCASE ==================== */}
        <div className="space-y-10 animate-fadeIn">
          {/* Industry Header Banner */}
          <div className={`text-center p-8 rounded-3xl ${colors.bg} border ${colors.border}`}>
            <div className="flex justify-center mb-4">
              {getIcon(currentIndustry.icon, "w-16 h-16 text-current")}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {currentIndustry.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {currentIndustry.description}
            </p>
          </div>

          {/* Key Metrics Row */}
          {currentIndustry.metrics && currentIndustry.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {currentIndustry.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="relative text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                  onMouseEnter={() => setHoveredMetric(idx)}
                  onMouseLeave={() => setHoveredMetric(null)}
                >
                  <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                    {getIcon(metric.icon, "w-8 h-8")}
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold ${colors.text} mb-1`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                  {hoveredMetric === idx && metric.description && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 dark:bg-gray-700 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap z-10 shadow-lg">
                      {metric.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Success Story Carousel */}
          {stories.length > 0 && (
            <div className="relative">
              {/* Auto-play Indicator */}
              {isPlaying && stories.length > 1 && (
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 transition-colors flex items-center justify-center"
                    aria-label="Pause auto-play"
                  >
                    {getIcon("pause", "w-3 h-3")}
                  </button>
                </div>
              )}

              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentStoryIndex * 100}%)` }}
                >
                  {stories.map((story, idx) => (
                    <div key={idx} className="w-full shrink-0">
                      <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-l-4 ${colors.border}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                          {/* Left Column - Story Content */}
                          <div className="p-6 md:p-8">
                            {/* Company Header */}
                            <div className="flex items-center gap-3 mb-5">
                              <div className="text-blue-600 dark:text-blue-400">
                                {getIcon(story.icon, "w-10 h-10")}
                              </div>
                              <div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                  {story.company}
                                </h4>
                                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                  {getIcon("location", "w-3 h-3")}
                                  <span>{story.location}</span>
                                </div>
                              </div>
                            </div>

                            {/* Before & After Comparison */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-center">
                                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Before</div>
                                <div className="text-sm font-semibold text-red-600 dark:text-red-400">
                                  {story.before}
                                </div>
                              </div>
                              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-center">
                                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">After</div>
                                <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                                  {story.after}
                                </div>
                              </div>
                            </div>

                            {/* Key Results Tags */}
                            {story.results && story.results.length > 0 && (
                              <div className="mb-6">
                                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                  Key Results:
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {story.results.map((result, ridx) => (
                                    <span
                                      key={ridx}
                                      className={`text-xs px-3 py-1 ${colors.bg} ${colors.text} rounded-full flex items-center gap-1`}
                                    >
                                      {getIcon("trending", "w-3 h-3")}
                                      {result}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Testimonial */}
                            {story.testimonial && (
                              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                <div className="text-2xl text-gray-400 dark:text-gray-500 mb-2">"</div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">
                                  {story.testimonial}
                                </p>
                                <div className="mt-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                  — {story.author}
                                </div>
                              </div>
                            )}

                            {/* Read More Link */}
                            <Link
                              href={story.link || "/case-studies"}
                              className={`inline-flex items-center gap-2 ${colors.text} font-semibold text-sm hover:gap-3 transition-all group`}
                            >
                              Read Full Case Study
                              {getIcon("arrow-right", "w-4 h-4 group-hover:translate-x-1 transition-transform")}
                            </Link>
                          </div>

                          {/* Right Column - Visual/Result Highlight */}
                          <div className={`${colors.bg} p-6 md:p-8 flex flex-col justify-center items-center text-center`}>
                            <div className="text-blue-600 dark:text-blue-400 mb-4">
                              {getIcon(story.icon, "w-16 h-16")}
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                              {story.resultHighlight}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {story.resultLabel}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Navigation Controls */}
              {stories.length > 1 && (
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={prevStory}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
                    aria-label="Previous story"
                  >
                    {getIcon("chevron-left", "w-5 h-5 text-gray-600 dark:text-gray-400")}
                  </button>

                  <div className="flex gap-2">
                    {stories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToStory(idx)}
                        className={`transition-all rounded-full ${currentStoryIndex === idx
                          ? `w-6 h-2 ${colors.text.replace('text-', 'bg-')}`
                          : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                          }`}
                        aria-label={`Go to story ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
                      aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                    >
                      {isPlaying ? (
                        getIcon("pause", "w-4 h-4 text-gray-600 dark:text-gray-400")
                      ) : (
                        getIcon("play", "w-4 h-4 text-gray-600 dark:text-gray-400")
                      )}
                    </button>
                    <button
                      onClick={nextStory}
                      className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
                      aria-label="Next story"
                    >
                      {getIcon("chevron-right", "w-5 h-5 text-gray-600 dark:text-gray-400")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Challenge & Solution Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Challenges Column */}
            <div className="p-6 md:p-8 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  {getIcon("exclamation", "w-5 h-5 text-red-600")}
                </div>
                <h4 className="text-lg font-bold text-red-700 dark:text-red-400">
                  Common Challenges
                </h4>
              </div>
              <ul className="space-y-3">
                {currentIndustry.challenges?.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 text-sm">✗</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div className={`p-6 md:p-8 rounded-2xl ${colors.bg} border ${colors.border}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center`}>
                  {getIcon("bulb", `w-5 h-5 ${colors.text}`)}
                </div>
                <h4 className={`text-lg font-bold ${colors.text}`}>
                  Our Solutions
                </h4>
              </div>
              <ul className="space-y-3">
                {currentIndustry.solutions?.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {getIcon("check-circle", `w-4 h-4 ${colors.text} mt-0.5 shrink-0`)}
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ROI Highlight Banner */}
          {currentIndustry.roiHighlight && (
            <div className={`text-center p-8 rounded-2xl bg-linear-to-r ${currentIndustry.gradient || colors.gradient} text-white shadow-xl`}>
              <div className="flex justify-center mb-3">
                {getIcon("trending", "w-10 h-10 text-white")}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {currentIndustry.roiHighlight.value}
              </div>
              <p className="text-white/90 max-w-md mx-auto">
                {currentIndustry.roiHighlight.description}
              </p>
            </div>
          )}

          {/* Industry-Specific CTA */}
          {currentIndustry.cta && (
            <div className="text-center pt-4">
              <Link
                href={currentIndustry.cta.link || "/demo"}
                className={`inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r ${currentIndustry.gradient || colors.gradient} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                {currentIndustry.cta.text || "Explore Solutions"}
                {getIcon("arrow-right", "w-4 h-4")}
              </Link>
            </div>
          )}
        </div>

        {/* ==================== TRUST INDICATORS ==================== */}
        {config?.showTrustIndicators && config?.trustLogos?.length > 0 && (
          <div className="text-center pt-12 mt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {config?.trustText || "Trusted by industry leaders worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {config.trustLogos.map((logo, index) => (
                <div key={index} className="transition-all duration-300 hover:opacity-100 hover:scale-110">
                  {getIcon(logo.icon, "w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400")}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== MAIN CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("sparkles", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to see your industry's success story?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Schedule a Consultation"}
                {getIcon("arrow-right", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
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
          animation: fadeIn 0.4s ease-out forwards;
        }
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

export default IndustrySpecificExamplesSection2;