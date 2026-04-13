// page/frontend/Features/RealTimeTrackingSection/RealTimeTrackingSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineRefresh,
  HiOutlineDeviceMobile,
  HiOutlineMap,
  HiOutlineEye,
  HiOutlineCheckCircle
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const RealTimeTrackingSection2 = ({ config }) => {

  // State for active tab
  const [activeTab, setActiveTab] = useState(0);

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} />;
      case 'map':
        return <HiOutlineMap className={className} />;
      case 'eye':
        return <HiOutlineEye className={className} />;
      default:
        return <HiOutlineLocationMarker className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle,#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Section Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Side - Features List */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {config?.features?.map((feature, index) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl ${activeTab === index
                  ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-blue-500 dark:border-blue-400'
                  : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                onClick={() => setActiveTab(index)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveTab(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${feature.title} details`}
              >
                <div className="flex items-start gap-3 sm:gap-4">

                  {/* Icon */}
                  <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ${activeTab === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-gray-600'
                    }`}>
                    {getFeatureIcon(feature.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6")}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>

                    {/* Expanded Details - Show when active */}
                    {activeTab === index && (
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                        <ul className="space-y-1.5 sm:space-y-2">
                          {feature.details?.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                              <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 dark:text-green-400 mr-1.5 sm:mr-2 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={feature.link}
                          className="inline-flex items-center mt-2 sm:mt-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-[10px] sm:text-xs"
                        >
                          <span>Learn more</span>
                          <HiOutlineArrowRight className="ml-1 sm:ml-2" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Interactive Demo/Visual */}
          <div className="sticky top-24">
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">

              {/* Demo Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Live Demo</span>
              </div>

              {/* Dynamic Content */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">

                {/* Visual representation */}
                <div className="relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="aspect-video bg-linear-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">

                    {/* Animated tracking dot */}
                    <div className="absolute w-full h-full">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-blue-500 rounded-full animate-ping absolute" />
                          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-blue-600 rounded-full relative" />
                        </div>
                      </div>

                      {/* Route lines */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <path
                          d="M20,120 L180,80 L340,140 L500,100 L660,120 L820,80 L980,140"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          className="text-blue-400 dark:text-blue-500 stroke-current"
                          strokeDasharray="4 4"
                        />
                      </svg>
                    </div>

                    <div className="relative z-10 text-center">
                      {getFeatureIcon(config?.features?.[activeTab]?.icon, "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-blue-600 dark:text-blue-400 mb-1 sm:mb-2")}
                      <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300 font-medium">
                        {config?.features?.[activeTab]?.demoText || "Interactive visualization"}
                      </p>
                    </div>
                  </div>

                  {/* Live Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4">
                    <div className="text-center">
                      <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">98%</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">2s</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Update Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">24/7</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Monitoring</div>
                    </div>
                  </div>
                </div>

                {/* Feature Highlight */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-blue-800 dark:text-blue-300">
                    <span className="font-semibold">Did you know?</span> {config?.features?.[activeTab]?.highlightText || "Real-time tracking reduces delivery delays by up to 40% and improves customer satisfaction scores by 35%."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        {config?.showCta && config?.ctaText && (
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-2 sm:p-2.5 md:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-full pl-4 sm:pl-5 md:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2">
              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                {config.ctaText}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                aria-label="Start tracking now"
              >
                {config?.ctaButton?.text || "Get Started"}
                <HiOutlineArrowRight />
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default RealTimeTrackingSection2;