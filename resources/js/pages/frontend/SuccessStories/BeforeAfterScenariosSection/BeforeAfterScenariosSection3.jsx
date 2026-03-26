// frontend/SuccessStories/BeforeAfterScenariosSection/BeforeAfterScenariosSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineTrendingUp,
  HiOutlineExclamation,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlinePrinter,
  HiOutlineDocumentText
} from 'react-icons/hi';

const BeforeAfterScenariosSection3 = ({ config }) => {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [expandedDetail, setExpandedDetail] = useState(null);
  const [animatedValues, setAnimatedValues] = useState({});

  const scenarios = config?.scenarios || [];
  const currentScenario = scenarios[selectedScenario];

  useEffect(() => {
    // Animate impact metrics on load
    if (currentScenario?.impact) {
      currentScenario.impact.forEach((impact, index) => {
        const targetValue = parseInt(impact.value.replace(/[^0-9.-]/g, '')) || 0;
        const suffix = impact.value.replace(/[0-9.-]/g, '');
        let current = 0;
        const increment = targetValue / 50;

        const interval = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setAnimatedValues(prev => ({ ...prev, [index]: impact.value }));
            clearInterval(interval);
          } else {
            setAnimatedValues(prev => ({ ...prev, [index]: Math.floor(current) + suffix }));
          }
        }, 30);

        return () => clearInterval(interval);
      });
    }
  }, [currentScenario]);

  const toggleDetail = (index) => {
    setExpandedDetail(expandedDetail === index ? null : index);
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Before & After Transformation Library"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-green-50/30 to-transparent dark:from-green-900/5 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-emerald-50/30 to-transparent dark:from-emerald-900/5 pointer-events-none" aria-hidden="true"></div>

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

        {/* Scenario Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              onClick={() => setSelectedScenario(index)}
              className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 ${selectedScenario === index
                  ? 'bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 shadow-lg'
                  : 'bg-white dark:bg-gray-800 shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700'
                }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-4xl">{scenario.icon}</div>
                {scenario.badge && (
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 rounded-full">
                    {scenario.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {scenario.company}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{scenario.industry}</p>
              <div className="flex items-center gap-2 text-xs text-green-600 mb-3">
                <HiOutlineTrendingUp className="w-3 h-3" />
                <span>{scenario.keyResult}</span>
              </div>
              <div className="h-px bg-gray-200 dark:bg-gray-700 my-3" />
              <div className="flex justify-between text-sm">
                <span className="text-red-600">Before</span>
                <span className="text-green-600">After</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{scenario.beforeMetric}</span>
                <HiArrowRight className="w-3 h-3" />
                <span className="font-semibold text-green-600">{scenario.afterMetric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Comparison View */}
        {currentScenario && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12">
            {/* Header */}
            <div className="bg-linear-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 p-6 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-5xl">{currentScenario.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentScenario.company}</h3>
                    <p className="text-gray-300 text-sm">{currentScenario.industry}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <HiOutlineShare className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <HiOutlinePrinter className="w-4 h-4" />
                  </button>
                  <Link
                    href={currentScenario.downloadLink}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <HiOutlineDownload className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Before/After Split Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
              {/* Before Section */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    <HiOutlineX className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-600">Before Transformation</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">The Challenge</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentScenario.before?.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Metrics</h4>
                    <div className="space-y-3">
                      {currentScenario.before?.metrics?.map((metric, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">{metric.label}</span>
                            <span className="font-semibold text-red-600">{metric.value}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-red-500 rounded-full h-2 transition-all duration-1000"
                              style={{ width: metric.percentage }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Pain Points</h4>
                    <ul className="space-y-2">
                      {currentScenario.before?.painPoints?.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <HiOutlineExclamation className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Section */}
              <div className="p-8 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <HiOutlineCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600">After Transformation</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">The Solution</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentScenario.after?.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Results Achieved</h4>
                    <div className="space-y-3">
                      {currentScenario.after?.metrics?.map((metric, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">{metric.label}</span>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-green-600">{metric.value}</span>
                              {metric.improvement && (
                                <span className="text-xs text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                                  {metric.improvement}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-green-500 rounded-full h-2 transition-all duration-1000"
                              style={{ width: metric.percentage }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Improvements</h4>
                    <ul className="space-y-2">
                      {currentScenario.after?.improvements?.map((improvement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-600">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/50">
              <h4 className="text-center font-bold text-gray-800 dark:text-gray-200 mb-4">Measurable Impact</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentScenario.impact?.map((impact, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl mb-2">{impact.icon}</div>
                    <div className="text-2xl font-bold text-green-600">
                      {animatedValues[idx] || impact.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{impact.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Calculator Preview */}
            {currentScenario.roiCalculator && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">See your potential ROI</h4>
                    <p className="text-sm text-gray-500">
                      Based on {currentScenario.company}'s results, businesses like yours typically achieve:
                    </p>
                    <div className="flex gap-4 mt-2">
                      <div>
                        <span className="text-lg font-bold text-green-600">{currentScenario.roiCalculator.savings}</span>
                        <span className="text-xs text-gray-500 ml-1">cost reduction</span>
                      </div>
                      <div>
                        <span className="text-lg font-bold text-green-600">{currentScenario.roiCalculator.payback}</span>
                        <span className="text-xs text-gray-500 ml-1">months payback</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={currentScenario.roiCalculator.link || "/roi-calculator"}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap"
                  >
                    Calculate Your ROI
                  </Link>
                </div>
              </div>
            )}

            {/* Expandable Details */}
            {currentScenario.details && (
              <div className="border-t border-gray-200 dark:border-gray-700">
                {currentScenario.details.map((detail, idx) => (
                  <div key={idx} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <button
                      onClick={() => toggleDetail(idx)}
                      className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{detail.icon}</div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {detail.title}
                        </span>
                      </div>
                      <span className="text-2xl text-green-500">
                        {expandedDetail === idx ? '−' : '+'}
                      </span>
                    </button>
                    {expandedDetail === idx && (
                      <div className="p-5 pt-0 text-gray-600 dark:text-gray-400">
                        {detail.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <Link
                href={currentScenario.caseStudyLink}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2"
              >
                <HiOutlineDocumentText className="w-4 h-4" />
                Download Full Case Study
              </Link>
              <Link
                href={currentScenario.demoLink || "/demo"}
                className="px-6 py-2 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
              >
                Schedule a Demo
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Testimonial */}
        {currentScenario?.testimonial && (
          <div className="mb-12 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 text-center">
            <div className="text-5xl text-green-400 mb-4">"</div>
            <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-6 max-w-3xl mx-auto">
              {currentScenario.testimonial.quote}
            </p>
            <div>
              <div className="font-bold text-gray-900 dark:text-white">{currentScenario.testimonial.author}</div>
              <div className="text-sm text-gray-500">{currentScenario.testimonial.role}</div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineTrendingUp className="w-6 h-6 text-green-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to write your own transformation story?"}
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
      `}</style>
    </section>
  );
};

export default BeforeAfterScenariosSection3;