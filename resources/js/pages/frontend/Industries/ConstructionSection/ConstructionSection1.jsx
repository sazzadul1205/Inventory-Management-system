// page/frontend/Industries/ConstructionSection/ConstructionSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineBuildingOffice,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
} from 'react-icons/hi';

const ConstructionSection1 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = config?.stats || [];
  const challenges = config?.challenges || [];
  const solutions = config?.solutions || [];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Construction Solutions Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-amber-50/30 to-transparent dark:from-amber-900/5 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-50/30 to-transparent dark:from-orange-900/5 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Industry badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
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

        {/* Stats Grid */}
        {config?.showStats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-8">
          {['overview', 'challenges', 'solutions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-all capitalize ${activeTab === tab
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
            >
              {tab === 'overview' && (
                <span className="flex items-center gap-2">
                  <HiOutlineBuildingOffice className="w-4 h-4" />
                  Overview
                </span>
              )}
              {tab === 'challenges' && (
                <span className="flex items-center gap-2">
                  <HiOutlineChartBar className="w-4 h-4" />
                  Key Challenges
                </span>
              )}
              {tab === 'solutions' && (
                <span className="flex items-center gap-2">
                  <HiOutlineLightBulb className="w-4 h-4" />
                  Our Solutions
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {config?.overview?.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {config?.overview?.description}
                </p>
                <div className="space-y-3">
                  {config?.overview?.highlights?.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href={config?.overview?.ctaLink || "/demo"}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {config?.overview?.ctaText || "Explore Solutions"}
                    <HiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-linear-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8">
                  <div className="text-6xl mb-4 text-center">🏗️</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="text-2xl font-bold text-amber-600">500+</div>
                      <div className="text-xs text-gray-500">Construction Firms</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="text-2xl font-bold text-amber-600">10K+</div>
                      <div className="text-xs text-gray-500">Projects Managed</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="text-2xl font-bold text-amber-600">25%</div>
                      <div className="text-xs text-gray-500">Material Cost Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="text-2xl font-bold text-amber-600">98%</div>
                      <div className="text-xs text-gray-500">On-Time Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">{challenge.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{challenge.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{challenge.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'solutions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="p-6 bg-linear-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-2xl hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">{solution.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{solution.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{solution.description}</p>
                  {solution.features && (
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                          <HiOutlineCheckCircle className="w-3 h-3 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Key Features Row */}
        {config?.showFeatures && (
          <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
              {config?.features?.title || "Why Construction Leaders Choose Us"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {config?.features?.items?.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{feature.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Industry Standards Badge */}
        {config?.showStandards && (
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-50 dark:bg-amber-900/20 rounded-full">
              <HiOutlineShieldCheck className="w-5 h-5 text-amber-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{config?.standardsText || "ISO 9001 | LEED Ready | OSHA Compliant | BIM Integrated"}</span>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineBuildingOffice className="w-6 h-6 text-amber-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to transform your construction operations?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Started Today"}
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
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default ConstructionSection1;