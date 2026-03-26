// frontend/SuccessStories/BeforeAfterScenariosSection/BeforeAfterScenariosSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineTrendingUp,
  HiOutlineLightBulb,
  HiOutlineExclamation,
  HiOutlineCheck,
  HiOutlineX
} from 'react-icons/hi';

const BeforeAfterScenariosSection1 = ({ config }) => {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = config?.scenarios || [];
  const currentScenario = scenarios[activeScenario];

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Before & After Transformation Scenarios"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full filter blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Before & After badge"
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

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
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

        {/* Scenario Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {scenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => setActiveScenario(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeScenario === index
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {scenario.industry}
            </button>
          ))}
        </div>

        {/* Before & After Comparison Card */}
        {currentScenario && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12">
            {/* Header */}
            <div className="bg-linear-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="text-4xl">{currentScenario.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{currentScenario.company}</h3>
                  <p className="text-gray-300 text-sm">{currentScenario.industry}</p>
                </div>
              </div>
            </div>

            {/* Before & After Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
              {/* Before Column */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    <HiOutlineX className="w-4 h-4 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                    {config?.beforeLabel || "Before"}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">The Challenge</div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentScenario.before?.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Key Metrics</div>
                    <ul className="space-y-2">
                      {currentScenario.before?.metrics?.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <HiOutlineExclamation className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {metric.label}: <span className="font-semibold">{metric.value}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Pain Points</div>
                    <ul className="space-y-1">
                      {currentScenario.before?.painPoints?.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500 mt-0.5">✗</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Column */}
              <div className="p-8 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <HiOutlineCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                    {config?.afterLabel || "After"}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">The Solution</div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentScenario.after?.solution}
                    </p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Results Achieved</div>
                    <ul className="space-y-2">
                      {currentScenario.after?.metrics?.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <HiOutlineTrendingUp className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {metric.label}: <span className="font-bold text-green-600">{metric.value}</span>
                            {metric.improvement && (
                              <span className="text-xs text-green-500 ml-1">({metric.improvement})</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Key Improvements</div>
                    <ul className="space-y-1">
                      {currentScenario.after?.improvements?.map((improvement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Summary */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentScenario.impact?.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.value}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 flex flex-col sm:flex-row gap-3 justify-between items-center border-t border-gray-200 dark:border-gray-700">
              <Link
                href={currentScenario.caseStudyLink}
                className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2"
              >
                Read Full Case Study
                <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={currentScenario.demoLink || "/demo"}
                className="px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
              >
                See How It Works
                <HiOutlineLightBulb className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Transformation Stats */}
        {config?.showStats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {config?.transformationStats?.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-green-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonial */}
        {currentScenario?.testimonial && (
          <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 mb-12 text-center">
            <div className="text-4xl text-green-400 mb-3">"</div>
            <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4 max-w-3xl mx-auto">
              {currentScenario.testimonial.quote}
            </p>
            <div>
              <div className="font-bold text-gray-900 dark:text-white">{currentScenario.testimonial.author}</div>
              <div className="text-sm text-gray-500">{currentScenario.testimonial.role}, {currentScenario.testimonial.company}</div>
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

export default BeforeAfterScenariosSection1;