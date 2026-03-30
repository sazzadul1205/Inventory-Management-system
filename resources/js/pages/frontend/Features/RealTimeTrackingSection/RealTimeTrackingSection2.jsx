// page/frontend/Features/RealTimeTrackingSection/RealTimeTrackingSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineRefresh,
  HiOutlineDeviceMobile,
  HiOutlineMap,
  HiOutlineEye,
  HiArrowRight,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const RealTimeTrackingSection2 = ({ config }) => {
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
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Real-time Tracking Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Feature badge"
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
            itemProp="name"
          >
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p
            className="text-xl text-gray-600 dark:text-gray-300"
            itemProp="description"
          >
            {config?.description}
          </p>
        </div>

        {/* Split Layout: Left - Features, Right - Interactive Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Features List */}
          <div className="space-y-6">
            {config?.features?.map((feature, index) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 p-6 rounded-2xl ${activeTab === index
                  ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-blue-500 dark:border-blue-400'
                  : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                onClick={() => setActiveTab(index)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveTab(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${feature.title} details`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${activeTab === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-gray-600'
                    }`}>
                    {getFeatureIcon(feature.icon)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>

                    {/* Expanded Details - Show when active */}
                    {activeTab === index && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                        <ul className="space-y-2">
                          {feature.details?.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                              <HiOutlineCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={feature.link}
                          className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          <span>Learn more</span>
                          <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
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
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Live Demo</span>
              </div>

              {/* Dynamic Content based on Active Tab */}
              <div className="space-y-6">
                {/* Visual representation */}
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-4">
                  {/* Map/Visualization Placeholder */}
                  <div className="aspect-video bg-linear-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Animated tracking dot */}
                    <div className="absolute w-full h-full">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping absolute" />
                          <div className="w-6 h-6 bg-blue-600 rounded-full relative" />
                        </div>
                      </div>

                      {/* Route lines */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <path
                          d="M20,120 L180,80 L340,140 L500,100 L660,120 L820,80 L980,140"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          className="text-blue-400 dark:text-blue-500 stroke-current"
                          strokeDasharray="5 5"
                        />
                      </svg>
                    </div>

                    <div className="relative z-10 text-center">
                      {getFeatureIcon(config?.features?.[activeTab]?.icon, "w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-2")}
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                        {config?.features?.[activeTab]?.demoText || "Interactive visualization"}
                      </p>
                    </div>
                  </div>

                  {/* Live Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">2s</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Update Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Monitoring</div>
                    </div>
                  </div>
                </div>

                {/* Feature Highlight */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <span className="font-semibold">Did you know?</span> {config?.features?.[activeTab]?.highlightText || "Real-time tracking reduces delivery delays by up to 40% and improves customer satisfaction scores by 35%."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-1 bg-gray-50 dark:bg-gray-800/50 rounded-full pl-6 pr-2 py-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to implement real-time tracking?"}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className={`${config?.ctaButton?.backgroundColor} ${config?.ctaButton?.textColor} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2`}
                aria-label="Start tracking now"
              >
                {config?.ctaButton?.text || "Get Started"}
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

export default RealTimeTrackingSection2;