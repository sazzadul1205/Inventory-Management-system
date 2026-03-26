// frontend/SuccessStories/IndustrySpecificExamplesSection/IndustrySpecificExamplesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineLightBulb,
} from 'react-icons/hi';

const IndustrySpecificExamplesSection1 = ({ config }) => {
  const [activeIndustry, setActiveIndustry] = useState('retail');

  const industries = config?.industries || {};
  const currentIndustry = industries[activeIndustry];

  const industryTabs = [
    { id: 'retail', name: 'Retail', icon: '🏪' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'logistics', name: 'Logistics', icon: '🚚' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'food', name: 'Food & Bev', icon: '🍽️' },
    { id: 'electronics', name: 'Electronics', icon: '🔌' }
  ];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry-Specific Success Examples"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/30 to-transparent dark:from-blue-900/5 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/30 to-transparent dark:from-indigo-900/5 pointer-events-none" aria-hidden="true"></div>

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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveIndustry(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeIndustry === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              <span>{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Industry Content */}
        {currentIndustry && (
          <div className="space-y-12">
            {/* Industry Overview */}
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {currentIndustry.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {currentIndustry.description}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentIndustry.metrics?.map((metric, idx) => (
                <div key={idx} className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">⚠️</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400">
                    Common Challenges
                  </h3>
                </div>
                <ul className="space-y-3">
                  {currentIndustry.challenges?.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✗</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <HiOutlineLightBulb className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-400">
                    Our Solutions
                  </h3>
                </div>
                <ul className="space-y-3">
                  {currentIndustry.solutions?.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Success Stories */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Success Stories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentIndustry.stories?.map((story, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-3xl">{story.icon}</div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">{story.company}</h4>
                          <p className="text-xs text-gray-500">{story.location}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-1">Before</div>
                        <div className="text-sm text-red-600">{story.before}</div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-1">After</div>
                        <div className="text-sm font-semibold text-green-600">{story.after}</div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {story.results?.map((result, ridx) => (
                          <span key={ridx} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 rounded-full">
                            {result}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={story.link}
                        className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all"
                      >
                        Read Full Story
                        <HiArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Highlight */}
            {currentIndustry.roiHighlight && (
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold mb-2">{currentIndustry.roiHighlight.value}</div>
                <p className="text-blue-100">{currentIndustry.roiHighlight.description}</p>
              </div>
            )}
          </div>
        )}

        {/* Industry CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineStar className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Ready to see how we can help your industry?"}
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
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default IndustrySpecificExamplesSection1;