// frontend/SuccessStories/BeforeAfterScenariosSection/BeforeAfterScenariosSection2.jsx

/**
 * Before & After Transformation Showcase Section Component
 * A visually immersive component featuring:
 * - Interactive before/after image slider with draggable handle
 * - Auto-playing carousel for multiple transformation stories
 * - Metrics comparison with hover tooltips
 * - Transformation timeline view
 * - Testimonial integration per scenario
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - All from react-icons library
import {
  HiArrowRight,
  HiOutlineTrendingUp,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineSwitchHorizontal,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';

const BeforeAfterScenariosSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isPlaying, setIsPlaying] = useState(config?.autoplay !== false);
  const [currentSlide, setCurrentSlide] = useState(config?.initialSlide || 0);

  // Refs for slider functionality
  const sliderContainerRef = useRef(null);
  const autoplayRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const scenarios = useMemo(() => config?.scenarios || [], [config]);
  const currentScenario = scenarios[currentSlide];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'arrow': HiArrowRight,
      'trending': HiOutlineTrendingUp,
      'check': HiOutlineCheck,
      'x': HiOutlineX,
      'play': HiOutlinePlay,
      'pause': HiOutlinePause,
      'chevron-left': HiOutlineChevronLeft,
      'chevron-right': HiOutlineChevronRight,
      'switch': HiOutlineSwitchHorizontal,
      'chart': HiOutlineChartBar,
      'clock': HiOutlineClock,
      'dollar': HiOutlineCurrencyDollar,
      'users': HiOutlineUsers,
      'star': HiOutlineStar,
      'sparkles': HiOutlineSparkles,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'building': HiOutlineBuildingOffice,
      'chip': HiOutlineChip,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Handle slider position change on mouse move
   * @param {MouseEvent} e - Mouse event
   */
  const handleSliderMove = useCallback((e) => {
    if (!isDragging || !sliderContainerRef.current) return;

    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(5, Math.min(95, percentage)));
  }, [isDragging]);

  /**
   * Handle touch move for mobile slider
   * @param {TouchEvent} e - Touch event
   */
  const handleTouchMove = useCallback((e) => {
    if (!isDragging || !sliderContainerRef.current) return;

    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(5, Math.min(95, percentage)));
  }, [isDragging]);

  /**
   * End dragging
   */
  const endDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  // ==================== AUTO-PLAY EFFECT ====================
  useEffect(() => {
    if (isPlaying && scenarios.length > 1) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % scenarios.length);
        // Reset slider position when changing slides
        setSliderPosition(50);
      }, config?.autoplayInterval || 6000);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPlaying, scenarios.length, config?.autoplayInterval]);

  // Reset autoplay timer when manually changing slides
  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      if (isPlaying && scenarios.length > 1) {
        autoplayRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % scenarios.length);
          setSliderPosition(50);
        }, config?.autoplayInterval || 6000);
      }
    }
  }, [currentSlide, isPlaying, scenarios.length, config?.autoplayInterval]);

  // ==================== SLIDER DRAG EVENT HANDLERS ====================
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleSliderMove);
      window.addEventListener('mouseup', endDragging);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', endDragging);
    }
    return () => {
      window.removeEventListener('mousemove', handleSliderMove);
      window.removeEventListener('mouseup', endDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', endDragging);
    };
  }, [isDragging, handleSliderMove, handleTouchMove, endDragging]);

  // ==================== NAVIGATION FUNCTIONS ====================
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % scenarios.length);
    setSliderPosition(50);
    setIsPlaying(false);
  }, [scenarios.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + scenarios.length) % scenarios.length);
    setSliderPosition(50);
    setIsPlaying(false);
  }, [scenarios.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setSliderPosition(50);
    setIsPlaying(false);
  }, []);

  // Return early if no scenarios
  if (!currentScenario) return null;

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Before & After Transformation Showcase"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-green-50/50 to-transparent dark:from-green-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-green-200/20 dark:bg-green-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-green-100 dark:bg-green-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-green-200 dark:border-green-800'}`}
            aria-label="Transformation showcase badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-green-700 dark:text-green-300'}`}>
              {config?.badge?.text || "Visual Transformations"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'See the'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-green-600 to-emerald-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Difference'}
            </span>{' '}
            {config?.title?.suffix || 'Before & After'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Drag the slider to see how we've transformed operations for our clients."}
          </p>
        </div>

        {/* ==================== INTERACTIVE BEFORE/AFTER SLIDER ==================== */}
        {currentScenario && (
          <div className="relative bg-gray-900 rounded-3xl overflow-hidden mb-12 shadow-2xl">
            {/* Company Header Overlay */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-linear-to-b from-black/70 to-transparent p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl md:text-4xl text-green-400">
                    {getIcon(currentScenario.icon, "w-8 h-8 md:w-10 md:h-10")}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg md:text-xl">{currentScenario.company}</h3>
                    <p className="text-gray-300 text-xs md:text-sm">{currentScenario.industry}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-300">{currentScenario.year || "2024"}</div>
                  {currentScenario.location && (
                    <div className="text-xs text-gray-400">{currentScenario.location}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Before/After Image Comparison Container */}
            <div
              ref={sliderContainerRef}
              className="relative h-80 sm:h-96 md:h-125 lg:h-150 overflow-hidden select-none"
            >
              {/* After Image (Full Background) */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentScenario.afterImage || 'https://placehold.co/1200x800/10b981/ffffff?text=AFTER'})` }}
              >
                <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                  AFTER
                </div>
              </div>

              {/* Before Image (Overlay with Dynamic Width) */}
              <div
                className="absolute inset-0 overflow-hidden bg-cover bg-center"
                style={{
                  width: `${sliderPosition}%`,
                  backgroundImage: `url(${currentScenario.beforeImage || 'https://placehold.co/1200x800/ef4444/ffffff?text=BEFORE'})`
                }}
              >
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                  BEFORE
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
                role="slider"
                aria-label="Drag to compare before and after"
                aria-valuenow={sliderPosition}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                  {getIcon("switch", "w-4 h-4 md:w-5 md:h-5 text-gray-700")}
                </div>
              </div>
            </div>

            {/* Key Metrics Overlay at Bottom */}
            {currentScenario.keyMetrics && currentScenario.keyMetrics.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4 md:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {currentScenario.keyMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="relative text-center group"
                      onMouseEnter={() => setHoveredMetric(idx)}
                      onMouseLeave={() => setHoveredMetric(null)}
                    >
                      <div className="text-lg md:text-2xl font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-gray-300">{metric.label}</div>
                      {hoveredMetric === idx && metric.improvement && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green-600 text-white text-xs rounded-full whitespace-nowrap shadow-lg animate-fadeIn">
                          ↑ {metric.improvement}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== BEFORE VS AFTER METRICS COMPARISON CARDS ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Before Card */}
          <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                {getIcon("x", "w-4 h-4 text-red-600")}
              </div>
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400">
                {config?.beforeLabel || "Before Transformation"}
              </h3>
            </div>
            <div className="space-y-4">
              {currentScenario.beforeMetrics?.map((metric, idx) => (
                <div key={idx} className="border-b border-red-200 dark:border-red-800 pb-3 last:border-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {metric.label}
                    </span>
                    <span className="text-lg font-bold text-red-600">{metric.value}</span>
                  </div>
                  <div className="w-full bg-red-200 dark:bg-red-800 rounded-full h-2">
                    <div
                      className="bg-red-600 rounded-full h-2 transition-all duration-1000"
                      style={{ width: metric.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* After Card */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                {getIcon("check", "w-4 h-4 text-green-600")}
              </div>
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400">
                {config?.afterLabel || "After Transformation"}
              </h3>
            </div>
            <div className="space-y-4">
              {currentScenario.afterMetrics?.map((metric, idx) => (
                <div key={idx} className="border-b border-green-200 dark:border-green-800 pb-3 last:border-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {metric.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-green-600">{metric.value}</span>
                      {metric.improvement && (
                        <span className="text-xs text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                          ↑ {metric.improvement}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-green-200 dark:bg-green-800 rounded-full h-2">
                    <div
                      className="bg-green-600 rounded-full h-2 transition-all duration-1000"
                      style={{ width: metric.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== CAROUSEL NAVIGATION ==================== */}
        {scenarios.length > 1 && (
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
              aria-label="Previous transformation story"
            >
              {getIcon("chevron-left", "w-5 h-5 text-gray-600 dark:text-gray-400")}
            </button>

            <div className="flex gap-2">
              {scenarios.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all rounded-full ${currentSlide === idx
                      ? 'w-6 h-2 bg-green-600'
                      : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  aria-label={`Go to transformation story ${idx + 1}`}
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
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
                aria-label="Next transformation story"
              >
                {getIcon("chevron-right", "w-5 h-5 text-gray-600 dark:text-gray-400")}
              </button>
            </div>
          </div>
        )}

        {/* ==================== TRANSFORMATION TIMELINE ==================== */}
        {config?.showTimeline && currentScenario.timeline && currentScenario.timeline.length > 0 && (
          <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              {getIcon("clock", "w-5 h-5 text-green-600")}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {config?.timelineTitle || "Transformation Journey Timeline"}
              </h3>
            </div>
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-linear-to-b from-green-500 to-emerald-500 rounded-full" aria-hidden="true" />

              <div className="space-y-6">
                {currentScenario.timeline.map((event, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-md z-10" />

                    {/* Spacer for desktop */}
                    <div className="hidden md:block w-1/2" />

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
                        <div className="text-xs font-semibold text-green-600 mb-1">{event.period}</div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                          {event.title}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {event.description}
                        </div>
                        {event.result && (
                          <div className="mt-2 text-xs font-semibold text-green-600 flex items-center gap-1">
                            {getIcon("trending", "w-3 h-3")}
                            {event.result}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== CLIENT TESTIMONIAL ==================== */}
        {currentScenario.testimonial && (
          <div className="mb-12 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 md:p-8 text-center">
            <div className="text-4xl text-green-400 mb-3">"</div>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 italic mb-5 max-w-3xl mx-auto leading-relaxed">
              {currentScenario.testimonial.quote}
            </p>
            <div>
              <div className="font-bold text-gray-900 dark:text-white">
                {currentScenario.testimonial.author}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {currentScenario.testimonial.role}, {currentScenario.testimonial.company}
              </div>
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-green-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                {getIcon("sparkles", "w-6 h-6 text-green-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to see your own transformation?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
        .cursor-ew-resize {
          cursor: ew-resize;
        }
      `}</style>
    </section>
  );
};

export default BeforeAfterScenariosSection2;