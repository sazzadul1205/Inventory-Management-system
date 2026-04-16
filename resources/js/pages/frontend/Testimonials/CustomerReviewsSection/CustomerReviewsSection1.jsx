// frontend/Testimonials/CustomerReviewsSection/CustomerReviewsSection1.jsx

/**
 * Customer Reviews Section Component
 * A comprehensive testimonial showcase featuring:
 * - Animated rating statistics display
 * - Auto-playing testimonial carousel with controls
 * - Grid of customer reviews with star ratings
 * - Video testimonial showcase
 * - Trust badges from industry leaders
 * - Client result highlights
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineStar,
  HiOutlineChatAlt,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';

const CustomerReviewsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const [isPlaying, setIsPlaying] = useState(config?.autoplay !== false);
  const [activeTestimonial, setActiveTestimonial] = useState(config?.initialIndex || 0);

  // ==================== REFS ====================
  const sectionRef = useRef(null);
  const autoplayRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const testimonials = useMemo(() => config?.testimonials || [], [config]);
  const stats = useMemo(() => config?.stats || [], [config]);
  const currentTestimonial = testimonials[activeTestimonial];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'star': HiOutlineStar,
      'chat': HiOutlineChatAlt,
      'check-circle': HiOutlineCheckCircle,
      'arrow-right': HiArrowRight,
      'play': HiOutlinePlay,
      'pause': HiOutlinePause,
      'chevron-left': HiOutlineChevronLeft,
      'chevron-right': HiOutlineChevronRight,
      'chart': HiOutlineChartBar,
      'dollar': HiOutlineCurrencyDollar,
      'clock': HiOutlineClock,
      'trending': HiOutlineTrendingUp,
      'users': HiOutlineUsers,
      'user-group': HiOutlineUserGroup,
      'sparkles': HiOutlineSparkles,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'google': TbBrandGoogle,
      'microsoft': FaMicrosoft,
      'amazon': TbBrandAmazon,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Render star rating component
   * @param {number} rating - Rating value (1-5)
   * @param {string} size - Size class for stars
   * @returns {JSX.Element} Star rating component
   */
  const renderStars = useCallback((rating, size = "w-4 h-4") => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <span key={i}>{getIcon("star", `${size} text-yellow-500 fill-yellow-500`)}</span>;
          }
          if (i === fullStars && hasHalfStar) {
            return <span key={i}>{getIcon("star", `${size} text-yellow-500 fill-yellow-500 opacity-50`)}</span>;
          }
          return <span key={i}>{getIcon("star", `${size} text-gray-300 dark:text-gray-600`)}</span>;
        })}
      </div>
    );
  }, [getIcon]);

  /**
   * Parse metric value to extract numeric value and suffix
   * @param {string} value - Metric value string
   * @returns {Object} Object containing numeric value and suffix
   */
  const parseMetricValue = useCallback((value) => {
    const match = value.match(/[\d,.]+/);
    const numericValue = match ? parseFloat(match[0].replace(/,/g, '')) : 0;
    const suffix = value.replace(/[\d,.]+/, '').trim();
    return { numericValue, suffix };
  }, []);

  // ==================== INTERSECTION OBSERVER ====================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ==================== ANIMATE STATISTICS ====================
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const startValues = {};
    const targetValues = {};
    const increments = {};
    const suffixes = {};

    stats.forEach((stat, index) => {
      const { numericValue, suffix } = parseMetricValue(stat.value);
      startValues[index] = 0;
      targetValues[index] = numericValue;
      increments[index] = numericValue / steps;
      suffixes[index] = suffix;
    });

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const newValues = {};

      stats.forEach((_, index) => {
        let newValue = startValues[index] + (increments[index] * currentStep);
        if (currentStep >= steps) {
          newValue = targetValues[index];
        }

        let formattedValue;
        if (suffixes[index] === '%') {
          formattedValue = `${Math.floor(newValue)}%`;
        } else if (suffixes[index] === 'x') {
          formattedValue = `${newValue.toFixed(1)}x`;
        } else if (newValue >= 1000000) {
          formattedValue = `${(newValue / 1000000).toFixed(1)}M`;
        } else if (newValue >= 1000) {
          formattedValue = `${(newValue / 1000).toFixed(1)}K`;
        } else {
          formattedValue = `${Math.floor(newValue)}${suffixes[index]}`;
        }

        newValues[index] = formattedValue;
      });

      setAnimatedStats(newValues);

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, stats, parseMetricValue]);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (isPlaying && testimonials.length > 1) {
      autoplayRef.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, config?.autoplayInterval || 6000);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPlaying, testimonials.length, config?.autoplayInterval]);

  // Reset autoplay when manually changing testimonials
  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      if (isPlaying && testimonials.length > 1) {
        autoplayRef.current = setInterval(() => {
          setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, config?.autoplayInterval || 6000);
      }
    }
  }, [activeTestimonial, isPlaying, testimonials.length, config?.autoplayInterval]);

  // ==================== CAROUSEL NAVIGATION ====================
  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  }, [testimonials.length]);

  const goToTestimonial = useCallback((index) => {
    setActiveTestimonial(index);
    setIsPlaying(false);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Customer Reviews"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-indigo-100/20 dark:bg-indigo-900/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Customer reviews badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Customer Reviews"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'What Our'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Customers'}
            </span>{' '}
            {config?.title?.suffix || 'Say'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Don't just take our word for it. Here's what our clients have to say about their experience."}
          </p>
        </div>

        {/* ==================== RATING STATISTICS ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                {getIcon(stat.icon, "w-8 h-8")}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 font-mono">
                {animatedStats[index] || stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== FEATURED TESTIMONIAL CAROUSEL ==================== */}
        {currentTestimonial && (
          <div className="relative mb-16">
            {/* Auto-play Indicator */}
            {isPlaying && testimonials.length > 1 && (
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

            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Testimonial Content */}
                <div className="lg:col-span-2 p-6 md:p-8 lg:p-10">
                  {/* Star Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(currentTestimonial.rating, "w-5 h-5")}
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      {currentTestimonial.rating}.0 / 5.0
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="text-3xl text-blue-400 dark:text-blue-500 mb-3">"</div>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                    {currentTestimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                      {getIcon(currentTestimonial.icon || "users", "w-6 h-6")}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {currentTestimonial.author}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Result Highlight */}
                  {currentTestimonial.result && (
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                      {getIcon("check-circle", "w-5 h-5 text-green-600 dark:text-green-400")}
                      <span className="text-sm text-green-700 dark:text-green-400">
                        <span className="font-semibold">Result:</span> {currentTestimonial.result}
                      </span>
                    </div>
                  )}
                </div>

                {/* Visual / Company Side */}
                <div className={`bg-linear-to-br ${currentTestimonial.gradient || 'from-blue-600 to-indigo-600'} p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-white`}>
                  <div className="mb-4">
                    {getIcon(currentTestimonial.icon || "building", "w-16 h-16")}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">{currentTestimonial.company}</div>
                    <div className="text-sm opacity-90">{currentTestimonial.industry}</div>
                    {currentTestimonial.location && (
                      <div className="text-xs opacity-75 mt-1">{currentTestimonial.location}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Controls */}
            {testimonials.length > 1 && (
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full shadow-lg px-3 py-1.5 border border-gray-200 dark:border-gray-700">
                <button
                  onClick={prevTestimonial}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-all"
                  aria-label="Previous testimonial"
                >
                  {getIcon("chevron-left", "w-4 h-4 text-gray-600 dark:text-gray-400")}
                </button>

                <div className="flex gap-1.5 px-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToTestimonial(idx)}
                      className={`transition-all rounded-full ${activeTestimonial === idx
                        ? 'w-5 h-2 bg-blue-600'
                        : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-all"
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isPlaying ? (
                    getIcon("pause", "w-3 h-3 text-gray-600 dark:text-gray-400")
                  ) : (
                    getIcon("play", "w-3 h-3 text-gray-600 dark:text-gray-400")
                  )}
                </button>

                <button
                  onClick={nextTestimonial}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-all"
                  aria-label="Next testimonial"
                >
                  {getIcon("chevron-right", "w-4 h-4 text-gray-600 dark:text-gray-400")}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== REVIEW GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
            >
              {/* Star Rating */}
              <div className="flex items-center justify-between mb-4">
                {renderStars(testimonial.rating, "w-4 h-4")}
                {testimonial.date && (
                  <span className="text-xs text-gray-400 dark:text-gray-500">{testimonial.date}</span>
                )}
              </div>

              {/* Quote Preview */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-4 leading-relaxed">
                "{testimonial.quote.length > 150 ? `${testimonial.quote.substring(0, 150)}...` : testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {getIcon(testimonial.icon || "users", "w-5 h-5")}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</div>
                </div>
              </div>

              {/* Read More Link */}
              <Link
                href={testimonial.link || "/testimonials"}
                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all group"
              >
                Read Full Review
                {getIcon("arrow-right", "w-3 h-3 group-hover:translate-x-1 transition-transform")}
              </Link>
            </div>
          ))}
        </div>

        {/* ==================== VIDEO TESTIMONIALS ==================== */}
        {config?.showVideo && config?.videoTestimonials?.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              {getIcon("play", "w-6 h-6 text-blue-600")}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {config?.videoTitle || "Video Testimonials"}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.videoTestimonials.map((video, index) => (
                <div key={index} className="relative group rounded-2xl overflow-hidden shadow-lg">
                  {/* Video Thumbnail */}
                  <div
                    className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                      {getIcon("play", "w-6 h-6 text-blue-600 ml-1")}
                    </button>
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                    <div className="text-white font-semibold">{video.title}</div>
                    <div className="text-white/80 text-sm">{video.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== TRUST BADGES ==================== */}
        {config?.showTrustBadges && config?.trustBadges?.length > 0 && (
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {config?.trustText || "Trusted by industry leaders worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {config.trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center transition-all duration-300 hover:opacity-100 hover:scale-110">
                  <div className="mb-1">
                    {getIcon(badge.icon, "w-8 h-8 text-gray-500 dark:text-gray-400")}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("sparkles", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to join our satisfied customers?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Started Today"}
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
          animation: fadeIn 0.5s ease-out forwards;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default CustomerReviewsSection1;