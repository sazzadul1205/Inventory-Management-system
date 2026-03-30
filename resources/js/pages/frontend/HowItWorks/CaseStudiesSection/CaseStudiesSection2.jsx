// page/frontend/HowItWorks/CaseStudiesSection/CaseStudiesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiArrowRight,
  HiArrowLeft,
  HiOutlinePlay,
  HiOutlineDownload,
  HiOutlineTrendingUp,
  HiOutlineCalendar,
  HiOutlineFlag
} from 'react-icons/hi';

const CaseStudiesSection2 = ({ config }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [autoplay, setAutoplay] = useState(true);

  const caseStudies = config?.caseStudies || [];
  const currentCase = caseStudies[currentIndex];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, caseStudies.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    setAutoplay(false);
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Case Studies Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
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

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Carousel Container */}
        {currentCase && (
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12">
            {/* Company Header */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-5xl mb-3">{currentCase.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold">{currentCase.company}</h3>
                  <p className="text-blue-100 mt-1">{currentCase.industry}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-blue-200">Featured Success Story</div>
                  <div className="text-3xl font-bold mt-2">{currentCase.results?.[0]?.value}</div>
                  <div className="text-xs text-blue-200">{currentCase.results?.[0]?.label}</div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {['overview', 'results', 'timeline', 'testimonial'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium transition-all capitalize ${activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  {tab === 'overview' && '📖 Overview'}
                  {tab === 'results' && '📊 Results'}
                  {tab === 'timeline' && '⏱️ Timeline'}
                  {tab === 'testimonial' && '💬 Testimonial'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">The Challenge</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentCase.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">The Solution</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    {currentCase.results?.map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                        <div className="text-xs text-gray-500 mt-1">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <HiOutlineTrendingUp className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900 dark:text-white">Key Impact</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{currentCase.keyImpact}</p>
                  </div>
                </div>
              )}

              {activeTab === 'timeline' && (
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-indigo-500" />
                  <div className="space-y-6">
                    {currentCase.timeline?.map((item, idx) => (
                      <div key={idx} className="relative pl-10">
                        <div className="absolute left-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <HiOutlineCalendar className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-blue-600">{item.period}</div>
                          <h5 className="font-bold text-gray-900 dark:text-white">{item.title}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'testimonial' && (
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">"</div>
                  <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">
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
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <div className="flex gap-3">
                <Link
                  href={currentCase.downloadLink}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  <HiOutlineDownload className="w-4 h-4" />
                  Download Full Case Study
                </Link>
                <Link
                  href={currentCase.videoLink}
                  className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                >
                  <HiOutlinePlay className="w-4 h-4" />
                  Watch Video
                </Link>
              </div>
              <div className="text-sm text-gray-500">
                Read time: {currentCase.readTime || "5 min"}
              </div>
            </div>
          </div>
        )}

        {/* Carousel Navigation */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
          >
            <HiArrowLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex gap-2">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setAutoplay(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx
                    ? 'w-6 bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
          >
            <HiArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Company Logos Row */}
        {config?.showLogos && (
          <div className="mb-12">
            <p className="text-center text-sm text-gray-500 mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {config?.companyLogos?.map((logo, index) => (
                <div key={index} className="text-2xl">{logo}</div>
              ))}
            </div>
          </div>
        )}

        {/* Metrics Showcase */}
        {config?.showMetrics && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {config?.aggregateMetrics?.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineFlag className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to become our next success story?"}
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

      {/* Required CSS for animations */}
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
          animation: fadeIn 0.3s ease-out;
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

export default CaseStudiesSection2;