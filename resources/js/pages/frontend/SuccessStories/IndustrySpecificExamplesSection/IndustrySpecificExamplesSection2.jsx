// frontend/SuccessStories/IndustrySpecificExamplesSection/IndustrySpecificExamplesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineShoppingBag,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineStar,
  HiOutlineLightBulb,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineGlobe,
  HiOutlineFactory,
  HiOutlineBuildingOffice,
  HiOutlineChip,
  HiOutlineHeart,
  HiOutlineRestaurant,
  HiOutlineCube,
  HiOutlineWrench,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi';

const IndustrySpecificExamplesSection2 = ({ config }) => {
  const [activeIndustry, setActiveIndustry] = useState('retail');
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const industries = config?.industries || {};
  const currentIndustry = industries[activeIndustry];
  const stories = currentIndustry?.stories || [];

  useEffect(() => {
    let interval;
    if (isPlaying && stories.length > 1) {
      interval = setInterval(() => {
        setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, stories.length]);

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
    setIsPlaying(false);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setIsPlaying(false);
  };

  const industryTabs = [
    { id: 'retail', name: 'Retail', icon: '🏪', color: 'blue' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭', color: 'purple' },
    { id: 'logistics', name: 'Logistics', icon: '🚚', color: 'cyan' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥', color: 'teal' },
    { id: 'food', name: 'Food & Bev', icon: '🍽️', color: 'orange' },
    { id: 'electronics', name: 'Electronics', icon: '🔌', color: 'indigo' }
  ];

  const getColorClasses = (industryId) => {
    const colors = {
      retail: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', text: 'text-blue-600', hover: 'hover:bg-blue-100' },
      manufacturing: { bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800', text: 'text-purple-600', hover: 'hover:bg-purple-100' },
      logistics: { bg: 'bg-cyan-50 dark:bg-cyan-900/20', border: 'border-cyan-200 dark:border-cyan-800', text: 'text-cyan-600', hover: 'hover:bg-cyan-100' },
      healthcare: { bg: 'bg-teal-50 dark:bg-teal-900/20', border: 'border-teal-200 dark:border-teal-800', text: 'text-teal-600', hover: 'hover:bg-teal-100' },
      food: { bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800', text: 'text-orange-600', hover: 'hover:bg-orange-100' },
      electronics: { bg: 'bg-indigo-50 dark:bg-indigo-900/20', border: 'border-indigo-200 dark:border-indigo-800', text: 'text-indigo-600', hover: 'hover:bg-indigo-100' }
    };
    return colors[industryId] || colors.retail;
  };

  const colors = getColorClasses(activeIndustry);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Industry Success Showcase"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
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

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveIndustry(tab.id);
                setCurrentStoryIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeIndustry === tab.id
                  ? `bg-${tab.color}-600 text-white shadow-lg`
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              <span>{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Industry Showcase */}
        {currentIndustry && (
          <div className="space-y-10">
            {/* Industry Header */}
            <div className={`text-center p-8 rounded-3xl ${colors.bg} border ${colors.border}`}>
              <div className="text-6xl mb-4">{currentIndustry.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {currentIndustry.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {currentIndustry.description}
              </p>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentIndustry.metrics?.map((metric, idx) => (
                <div
                  key={idx}
                  className="relative text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  onMouseEnter={() => setHoveredMetric(idx)}
                  onMouseLeave={() => setHoveredMetric(null)}
                >
                  <div className="text-4xl mb-3">{metric.icon}</div>
                  <div className={`text-2xl font-bold ${colors.text} mb-1`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                  {hoveredMetric === idx && metric.description && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap z-10">
                      {metric.description}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Success Story Carousel */}
            {stories.length > 0 && (
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentStoryIndex * 100}%)` }}
                  >
                    {stories.map((story, idx) => (
                      <div key={idx} className="w-full shrink-0 px-4">
                        <div className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-l-4 ${colors.border}`}>
                          <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Story Content */}
                            <div className="p-8">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="text-4xl">{story.icon}</div>
                                <div>
                                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {story.company}
                                  </h4>
                                  <p className="text-sm text-gray-500">{story.location}</p>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className={`p-4 rounded-xl bg-red-50 dark:bg-red-900/20`}>
                                  <div className="text-xs text-gray-500 mb-1">Before</div>
                                  <div className="text-sm font-semibold text-red-600">
                                    {story.before}
                                  </div>
                                </div>
                                <div className={`p-4 rounded-xl bg-green-50 dark:bg-green-900/20`}>
                                  <div className="text-xs text-gray-500 mb-1">After</div>
                                  <div className="text-sm font-semibold text-green-600">
                                    {story.after}
                                  </div>
                                </div>
                              </div>

                              <div className="mb-6">
                                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                  Key Results:
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {story.results?.map((result, ridx) => (
                                    <span
                                      key={ridx}
                                      className={`text-xs px-3 py-1 ${colors.bg} ${colors.text} rounded-full`}
                                    >
                                      {result}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {story.testimonial && (
                                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                  <div className="text-2xl text-gray-400 mb-2">"</div>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                    {story.testimonial}
                                  </p>
                                  <div className="mt-2 text-xs font-semibold text-gray-500">
                                    — {story.author}
                                  </div>
                                </div>
                              )}

                              <Link
                                href={story.link}
                                className={`inline-flex items-center gap-2 ${colors.text} font-semibold text-sm hover:gap-3 transition-all`}
                              >
                                Read Full Case Study
                                <HiArrowRight className="w-4 h-4" />
                              </Link>
                            </div>

                            {/* Story Visual */}
                            <div
                              className="bg-cover bg-center min-h-75 lg:min-h-full"
                              style={{ backgroundImage: `url(${story.image || '/images/placeholder-story.jpg'})` }}
                            >
                              <div className="w-full h-full bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
                                <div className="text-white">
                                  <div className="text-2xl font-bold">{story.resultHighlight}</div>
                                  <div className="text-sm opacity-90">{story.resultLabel}</div>
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
                {stories.length > 1 && (
                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={prevStory}
                      className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
                    >
                      <HiOutlineChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    <div className="flex gap-2">
                      {stories.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setCurrentStoryIndex(idx);
                            setIsPlaying(false);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${currentStoryIndex === idx
                              ? `w-6 ${colors.bg.replace('bg-', 'bg-')} ${colors.text.replace('text-', 'bg-')}`
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
                        onClick={nextStory}
                        className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
                      >
                        <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Industry Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-2xl bg-red-50 dark:bg-red-900/20`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">⚠️</span>
                  <h4 className="text-lg font-bold text-red-700 dark:text-red-400">
                    Common Challenges
                  </h4>
                </div>
                <ul className="space-y-2">
                  {currentIndustry.challenges?.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✗</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 rounded-2xl ${colors.bg}`}>
                <div className="flex items-center gap-2 mb-4">
                  <HiOutlineLightBulb className={`w-6 h-6 ${colors.text}`} />
                  <h4 className={`text-lg font-bold ${colors.text}`}>
                    Our Solutions
                  </h4>
                </div>
                <ul className="space-y-2">
                  {currentIndustry.solutions?.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <HiOutlineCheckCircle className={`w-4 h-4 ${colors.text} mt-0.5 shrink-0`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ROI Highlight */}
            {currentIndustry.roiHighlight && (
              <div className={`text-center p-8 rounded-2xl bg-linear-to-r ${currentIndustry.gradient || 'from-blue-600 to-indigo-600'} text-white`}>
                <div className="text-4xl mb-3">💰</div>
                <div className="text-3xl font-bold mb-2">{currentIndustry.roiHighlight.value}</div>
                <p className="text-white/90">{currentIndustry.roiHighlight.description}</p>
              </div>
            )}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineStar className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Ready to see your industry's success story?"}
            </span>
            <Link
              href={config?.ctaLink || "/demo"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Schedule a Consultation"}
              <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
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