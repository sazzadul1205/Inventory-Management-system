// frontend/SuccessStories/ClientSuccessMetricsSection/ClientSuccessMetricsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
  HiArrowRight,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi';

const ClientSuccessMetricsSection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animatedMetrics, setAnimatedMetrics] = useState({});
  const carouselRef = useRef(null);

  const metrics = config?.metrics || [];
  const successStories = config?.successStories || [];
  const timelineEvents = config?.timelineEvents || [];

  useEffect(() => {
    // Animate metrics on load
    const timer = setTimeout(() => {
      metrics.forEach((metric, index) => {
        const targetValue = parseInt(metric.value.replace(/[^0-9.-]/g, '')) || 0;
        const suffix = metric.value.replace(/[0-9.-]/g, '');
        let current = 0;
        const increment = targetValue / 60;

        const interval = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setAnimatedMetrics(prev => ({ ...prev, [index]: metric.value }));
            clearInterval(interval);
          } else {
            setAnimatedMetrics(prev => ({ ...prev, [index]: Math.floor(current) + suffix }));
          }
        }, 30);

        return () => clearInterval(interval);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [metrics]);

  useEffect(() => {
    let interval;
    if (isPlaying && successStories.length > 1) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % successStories.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, successStories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % successStories.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length);
    setIsPlaying(false);
  };

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      role="region"
      aria-label="Client Success Metrics Dashboard"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-500/5 to-transparent pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-500/5 to-transparent pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-12">
          {['overview', 'successStories', 'timeline'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-all capitalize ${activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                }`}
            >
              {tab === 'overview' && '📊 Key Metrics'}
              {tab === 'successStories' && '⭐ Success Stories'}
              {tab === 'timeline' && '📅 Journey Timeline'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {/* Overview Tab - Metrics Dashboard */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Main Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="relative group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{metric.icon}</div>
                      {metric.trend && (
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${metric.trendDirection === 'up'
                            ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                          {metric.trend}
                        </span>
                      )}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {animatedMetrics[index] || metric.value}
                    </div>
                    <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {metric.label}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Achievement Cards */}
              {config?.achievements && (
                <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    {config?.achievementsTitle || "Milestone Achievements"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {config.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-4xl mb-2">{achievement.icon}</div>
                        <div className="text-2xl font-bold">{achievement.value}</div>
                        <div className="text-sm text-blue-200">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Regional Performance */}
              {config?.regionalData && (
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {config?.regionalTitle || "Global Impact"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {config.regionalData.map((region, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl mb-2">{region.flag}</div>
                        <div className="font-semibold text-gray-800 dark:text-gray-200">{region.name}</div>
                        <div className="text-lg font-bold text-blue-600">{region.value}</div>
                        <div className="text-xs text-gray-500">{region.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Success Stories Tab - Carousel */}
          {activeTab === 'successStories' && (
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden" ref={carouselRef}>
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {successStories.map((story, index) => (
                    <div key={index} className="w-full shrink-0 px-4">
                      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                          <div className="p-8 lg:p-12">
                            <div className="text-4xl mb-4">{story.icon}</div>
                            <div className="text-sm text-blue-600 font-semibold mb-2">
                              {story.category}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                              {story.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                              {story.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              {story.metrics?.map((metric, idx) => (
                                <div key={idx}>
                                  <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                                  <div className="text-xs text-gray-500">{metric.label}</div>
                                </div>
                              ))}
                            </div>
                            <Link
                              href={story.link}
                              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                            >
                              Read Full Story
                              <HiArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                          <div
                            className="bg-cover bg-center min-h-75 lg:min-h-full"
                            style={{ backgroundImage: `url(${story.image})` }}
                          >
                            <div className="w-full h-full bg-black/20 flex items-center justify-center">
                              <div className="text-center text-white">
                                <div className="text-6xl mb-2">{story.icon}</div>
                                <div className="text-sm font-semibold">{story.company}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
                >
                  <HiOutlineChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <div className="flex gap-2">
                  {successStories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentSlide(idx);
                        setIsPlaying(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx
                          ? 'w-6 bg-blue-600'
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
            </div>
          )}

          {/* Timeline Tab - Journey Timeline */}
          {activeTab === 'timeline' && (
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500" aria-hidden="true"></div>
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                  >
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                        <div className="text-3xl mb-2">{event.icon}</div>
                        <div className="text-sm text-blue-600 font-semibold mb-1">{event.date}</div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {event.description}
                        </p>
                        {event.metric && (
                          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                            <span className="text-xs text-gray-500">Key Achievement:</span>
                            <div className="text-sm font-semibold text-blue-600">{event.metric}</div>
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

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineStar className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to join our success stories?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
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
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
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
      `}</style>
    </section>
  );
};

export default ClientSuccessMetricsSection2;