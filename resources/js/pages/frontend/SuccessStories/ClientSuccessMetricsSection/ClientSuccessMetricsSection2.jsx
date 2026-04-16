// frontend/SuccessStories/ClientSuccessMetricsSection/ClientSuccessMetricsSection2.jsx

/**
 * Client Success Metrics Dashboard Section Component
 * A comprehensive dashboard showcasing client success metrics, success stories,
 * and company milestones with interactive tabs and carousel.
 *
 * Features:
 * - Tabbed interface (Key Metrics, Success Stories, Journey Timeline)
 * - Animated counter for numerical metrics
 * - Auto-playing carousel for success stories with manual controls
 * - Vertical timeline for company milestones/achievements
 * - Fully responsive and dark-mode compatible
 *
 * All icons are from react-icons library.
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// React Icons - All from react-icons library
import { FaWindows } from 'react-icons/fa';
import {
  HiOutlineStar,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineGlobe,
  HiOutlineOfficeBuilding,
  HiOutlineChip,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
} from 'react-icons/hi';
import { TbBrandGoogle, TbBrandAmazon, TbBrandApple } from 'react-icons/tb';

const ClientSuccessMetricsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState(config?.initialTab || 'metrics');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animatedMetrics, setAnimatedMetrics] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== DATA ====================
  const metrics = useMemo(() => config?.metrics || [], [config]);
  const successStories = config?.successStories || [];
  const timelineEvents = config?.timelineEvents || [];

  // ==================== HELPER FUNCTIONS ====================
  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'trending': HiOutlineTrendingUp,
      'chart': HiOutlineChartBar,
      'users': HiOutlineUsers,
      'clock': HiOutlineClock,
      'dollar': HiOutlineCurrencyDollar,
      'check': HiOutlineCheckCircle,
      'bulb': HiOutlineLightBulb,
      'sparkles': HiOutlineSparkles,
      'globe': HiOutlineGlobe,
      'building': HiOutlineOfficeBuilding,
      'chip': HiOutlineChip,
      'cloud': HiOutlineCloud,
      'shield': HiOutlineShieldCheck,
      'document': HiOutlineDocumentText,
      'star': HiOutlineStar,
      'google': TbBrandGoogle,
      'microsoft': FaWindows,
      'amazon': TbBrandAmazon,
      'apple': TbBrandApple,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  // ==================== VISIBILITY OBSERVER ====================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ==================== ANIMATE METRICS ON VISIBILITY ====================
  useEffect(() => {
    if (isVisible) {
      metrics.forEach((metric, index) => {
        const match = metric.value.match(/(\d+(?:\.\d+)?)(.*)/);
        const targetValue = match ? parseFloat(match[1]) : 0;
        const suffix = match ? match[2] : '';

        let current = 0;
        const duration = 2000;
        const increment = targetValue / (duration / 16);

        const timer = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setAnimatedMetrics(prev => ({ ...prev, [index]: metric.value }));
            clearInterval(timer);
          } else {
            const formattedValue = Number.isInteger(targetValue)
              ? Math.floor(current)
              : current.toFixed(1);
            setAnimatedMetrics(prev => ({ ...prev, [index]: formattedValue + suffix }));
          }
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible, metrics]);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    let interval;
    if (isPlaying && successStories.length > 1) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % successStories.length);
      }, config?.autoplayInterval || 6000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, successStories.length, config?.autoplayInterval]);

  // ==================== CAROUSEL NAVIGATION ====================
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % successStories.length);
    setIsPlaying(false);
  }, [successStories.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length);
    setIsPlaying(false);
  }, [successStories.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  }, []);

  // ==================== TAB CONFIGURATION ====================
  const tabs = [
    { id: 'metrics', label: 'Key Metrics', icon: 'chart' },
    { id: 'stories', label: 'Success Stories', icon: 'star' },
    { id: 'timeline', label: 'Journey Timeline', icon: 'clock' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      role="region"
      aria-label="Client Success Metrics Dashboard"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-indigo-500/5 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-blue-500/5 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300/5 dark:bg-indigo-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-indigo-100 dark:bg-indigo-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-indigo-200 dark:border-indigo-800'}`}
            aria-label="Section badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-indigo-700 dark:text-indigo-300'}`}>
              {config?.badge?.text || "Trusted by Industry Leaders"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Our'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-indigo-600 to-blue-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Success Metrics'}
            </span>{' '}
            {config?.title?.suffix || 'Dashboard'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Track record of excellence and measurable results for our clients worldwide."}
          </p>
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all capitalize ${activeTab === tab.id
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              aria-label={`Show ${tab.label} tab`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== TAB CONTENT ==================== */}
        <div className="mb-12 min-h-125">
          {/* Metrics Tab - Key Performance Indicators */}
          {activeTab === 'metrics' && (
            <div className="space-y-12 animate-fadeIn">
              {/* Main Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="relative group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-indigo-600 dark:text-indigo-400">
                        {getIcon(metric.icon, "w-8 h-8")}
                      </div>
                      {metric.trend && (
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${metric.trendDirection === 'up'
                            ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                          {getIcon('trending', "w-3 h-3 inline mr-0.5")}
                          {metric.trend}
                        </span>
                      )}
                    </div>

                    {/* Animated Value */}
                    <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 font-mono">
                      {animatedMetrics[index] !== undefined ? animatedMetrics[index] : metric.value}
                    </div>

                    {/* Label */}
                    <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {metric.label}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Achievement Cards - Milestone Achievements */}
              {config?.achievements && config.achievements.length > 0 && (
                <div className="bg-linear-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    {config?.achievementsTitle || "Milestone Achievements"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {config.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all hover:bg-white/20">
                        <div className="flex justify-center mb-3">
                          {getIcon(achievement.icon, "w-8 h-8")}
                        </div>
                        <div className="text-2xl font-bold">{achievement.value}</div>
                        <div className="text-sm text-indigo-200">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Regional / Global Performance Data */}
              {config?.regionalData && config.regionalData.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {config?.regionalTitle || "Global Impact"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {config.regionalData.map((region, idx) => (
                      <div key={idx} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <div className="flex justify-center mb-3 text-indigo-600 dark:text-indigo-400">
                          {getIcon(region.icon, "w-6 h-6")}
                        </div>
                        <div className="font-semibold text-gray-800 dark:text-gray-200">{region.name}</div>
                        <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{region.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{region.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Success Stories Tab - Interactive Carousel */}
          {activeTab === 'stories' && successStories.length > 0 && (
            <div className="relative animate-fadeIn">
              {/* Auto-play Indicator */}
              {isPlaying && successStories.length > 1 && (
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 transition-colors flex items-center justify-center"
                    aria-label="Pause auto-play"
                  >
                    <HiOutlinePause className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl" ref={carouselRef}>
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {successStories.map((story, index) => (
                    <div key={index} className="w-full shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                          {/* Left Column - Content */}
                          <div className="p-6 md:p-8 lg:p-10">
                            <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                              {getIcon(story.icon, "w-10 h-10")}
                            </div>
                            <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wide mb-2">
                              {story.category}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                              {story.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                              {story.description}
                            </p>

                            {/* Key Metrics from Story */}
                            {story.metrics && story.metrics.length > 0 && (
                              <div className="grid grid-cols-2 gap-4 mb-6">
                                {story.metrics.map((metric, idx) => (
                                  <div key={idx} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 text-center">
                                    <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{metric.value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Testimonial Quote */}
                            {story.testimonial && (
                              <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border-l-4 border-indigo-500">
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                  "{story.testimonial.quote}"
                                </p>
                                <div className="mt-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                  — {story.testimonial.author}, {story.testimonial.role}
                                </div>
                              </div>
                            )}

                            <Link
                              href={story.link || "/case-studies"}
                              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all group"
                            >
                              Read Full Story
                              {getIcon("arrow", "w-4 h-4 group-hover:translate-x-1 transition-transform")}
                            </Link>
                          </div>

                          {/* Right Column - Visual/Company Info */}
                          <div className="bg-linear-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center text-center">
                            <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                              {getIcon(story.companyIcon || 'building', "w-16 h-16")}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {story.company}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {story.industry}
                            </p>
                            {story.location && (
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                📍 {story.location}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Navigation Controls */}
              {successStories.length > 1 && (
                <div className="flex items-center justify-between mt-8">
                  {/* Previous Button */}
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
                    aria-label="Previous story"
                  >
                    <HiOutlineChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="flex gap-2">
                    {successStories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`transition-all rounded-full ${currentSlide === idx
                            ? 'w-6 h-2 bg-indigo-600'
                            : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                          }`}
                        aria-label={`Go to story ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
                    aria-label="Next story"
                  >
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Timeline Tab - Company Journey Timeline */}
          {activeTab === 'timeline' && timelineEvents.length > 0 && (
            <div className="relative animate-fadeIn">
              {/* Vertical Center Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-linear-to-b from-indigo-500 via-blue-500 to-indigo-500 rounded-full" aria-hidden="true" />

              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-indigo-600 rounded-full border-2 border-white dark:border-gray-800 shadow-md z-10" />

                    {/* Spacer for desktop */}
                    <div className="hidden md:block w-1/2" />

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-indigo-600 dark:text-indigo-400">
                            {getIcon(event.icon, "w-6 h-6")}
                          </div>
                          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                            {event.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {event.description}
                        </p>
                        {event.metric && (
                          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-2">
                              {getIcon('check', "w-3 h-3 text-green-500")}
                              <span className="text-xs text-gray-500 dark:text-gray-400">Key Achievement:</span>
                              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{event.metric}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ==================== TRUST INDICATORS ==================== */}
        {config?.showTrustIndicators && config?.trustLogos?.length > 0 && (
          <div className="mb-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 tracking-wide uppercase">
              {config?.trustText || "Trusted by industry leaders worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {config.trustLogos.map((logo, index) => (
                <div
                  key={index}
                  className="transition-all duration-300 hover:opacity-100 hover:scale-110"
                  aria-label={logo.name}
                >
                  {getIcon(logo.icon, "w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400")}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-indigo-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                {getIcon("sparkles", "w-6 h-6 text-indigo-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to join our success stories?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
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
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ClientSuccessMetricsSection2;