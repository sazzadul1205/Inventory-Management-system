// frontend/SuccessStories/BeforeAfterScenariosSection/BeforeAfterScenariosSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
  HiArrowRight,
  HiOutlineTrendingUp,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineSwitchHorizontal
} from 'react-icons/hi';

const BeforeAfterScenariosSection2 = ({ config }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const carouselRef = useRef(null);

  const scenarios = config?.scenarios || [];

  useEffect(() => {
    let interval;
    if (isPlaying && scenarios.length > 1) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % scenarios.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, scenarios.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % scenarios.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + scenarios.length) % scenarios.length);
    setIsPlaying(false);
  };

  const currentScenario = scenarios[currentSlide];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Before & After Transformation Showcase"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-green-50/50 to-transparent dark:from-green-900/10 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Interactive Before/After Slider */}
        {currentScenario && (
          <div className="relative bg-gray-900 rounded-3xl overflow-hidden mb-12 shadow-2xl">
            {/* Company Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-linear-to-b from-black/70 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{currentScenario.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{currentScenario.company}</h3>
                    <p className="text-gray-300 text-sm">{currentScenario.industry}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-300">{currentScenario.year}</div>
                </div>
              </div>
            </div>

            {/* Before/After Image Comparison */}
            <div className="relative h-125 md:h-150 overflow-hidden">
              {/* After Image (Full) */}
              <div className="absolute inset-0">
                <img
                  src={currentScenario.afterImage || '/images/after-placeholder.jpg'}
                  alt="After transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AFTER
                </div>
              </div>

              {/* Before Image (Overlay with Slider) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${currentScenario.sliderPosition || 50}%` }}
              >
                <img
                  src={currentScenario.beforeImage || '/images/before-placeholder.jpg'}
                  alt="Before transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  BEFORE
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `${currentScenario.sliderPosition || 50}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <HiOutlineSwitchHorizontal className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </div>

            {/* Metrics Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentScenario.keyMetrics?.map((metric, idx) => (
                  <div
                    key={idx}
                    className="text-center"
                    onMouseEnter={() => setHoveredMetric(idx)}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-xs text-gray-300">{metric.label}</div>
                    {hoveredMetric === idx && metric.improvement && (
                      <div className="absolute mt-1 px-2 py-1 bg-green-600 text-white text-xs rounded-full whitespace-nowrap">
                        {metric.improvement}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Before/After Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineX className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400">
                {config?.beforeLabel || "Before"}
              </h3>
            </div>
            <div className="space-y-4">
              {currentScenario?.beforeMetrics?.map((metric, idx) => (
                <div key={idx} className="border-b border-red-200 dark:border-red-800 pb-3">
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

          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineCheck className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400">
                {config?.afterLabel || "After"}
              </h3>
            </div>
            <div className="space-y-4">
              {currentScenario?.afterMetrics?.map((metric, idx) => (
                <div key={idx} className="border-b border-green-200 dark:border-green-800 pb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {metric.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-green-600">{metric.value}</span>
                      {metric.improvement && (
                        <span className="text-xs text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                          {metric.improvement}
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

        {/* Carousel Navigation */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
          >
            <HiOutlineChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex gap-2">
            {scenarios.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                  setIsPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx
                    ? 'w-6 bg-green-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
            >
              {isPlaying ? (
                <HiOutlinePause className="w-4 h-4 text-gray-600" />
              ) : (
                <HiOutlinePlay className="w-4 h-4 text-gray-600" />
              )}
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
            >
              <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Transformation Timeline */}
        {config?.showTimeline && (
          <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
              {config?.timelineTitle || "Transformation Journey"}
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-green-500 to-emerald-500" aria-hidden="true"></div>
              <div className="space-y-8">
                {currentScenario?.timeline?.map((event, idx) => (
                  <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
                        <div className="text-sm font-semibold text-green-600">{event.period}</div>
                        <div className="font-bold text-gray-900 dark:text-white">{event.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{event.description}</div>
                        {event.result && (
                          <div className="mt-2 text-xs font-semibold text-green-600">{event.result}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Testimonial Carousel */}
        {currentScenario?.testimonials && (
          <div className="mb-12 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-4xl text-green-400 mb-3">"</div>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6 max-w-3xl mx-auto">
                {currentScenario.testimonials[currentSlide % currentScenario.testimonials.length]?.quote}
              </p>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">
                  {currentScenario.testimonials[currentSlide % currentScenario.testimonials.length]?.author}
                </div>
                <div className="text-sm text-gray-500">
                  {currentScenario.testimonials[currentSlide % currentScenario.testimonials.length]?.role}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineTrendingUp className="w-6 h-6 text-green-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to see your own transformation?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Start Your Journey"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS */}
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
          animation: fadeIn 0.5s ease-out;
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