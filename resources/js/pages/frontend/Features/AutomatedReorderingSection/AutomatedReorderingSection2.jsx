// page/frontend/Features/AutomatedReorderingSection/AutomatedReorderingSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineChip,
  HiOutlineDatabase,
  HiOutlineLightBulb,
  HiOutlineTrendingUp,
  HiOutlineShoppingCart,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const AutomatedReorderingSection2 = ({ config }) => {

  // Active metric state
  const [activeMetric, setActiveMetric] = useState(config?.features?.[0]?.id || 'inventory');

  // Simulation value
  const [simulationValue, setSimulationValue] = useState(75);

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'bulb':
        return <HiOutlineLightBulb className={className} />;
      case 'trending':
        return <HiOutlineTrendingUp className={className} />;
      case 'cart':
        return <HiOutlineShoppingCart className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} />;
      case 'users':
        return <HiOutlineUserGroup className={className} />;
      default:
        return <HiOutlineRefresh className={className} />;
    }
  };

  // Simulation change handler
  const handleSimulationChange = (value) => {
    setSimulationValue(value);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle,#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-200 dark:bg-green-900/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Section Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-green-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-green-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-green-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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
            {config?.features?.map((feature) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl ${activeMetric === feature.id
                    ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-green-500 dark:border-green-400'
                    : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                onClick={() => setActiveMetric(feature.id)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveMetric(feature.id)}
                role="button"
                tabIndex={0}
                aria-label={`View ${feature.title} details`}
              >
                <div className="flex items-start gap-3 sm:gap-4">

                  {/* Icon */}
                  <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ${activeMetric === feature.id
                      ? 'bg-green-500 text-white'
                      : 'bg-green-100 dark:bg-gray-700 text-green-600 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-gray-600'
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
                    {activeMetric === feature.id && (
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
                          className="inline-flex items-center mt-2 sm:mt-3 text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors text-[10px] sm:text-xs"
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

          {/* Right Side - Interactive Demo/Simulator */}
          <div className="sticky top-24">
            <div className="bg-linear-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">

              {/* Demo Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Reorder Simulator</span>
              </div>

              {/* Dynamic Content */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">

                {/* Visual representation */}
                <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                  <div className="text-center mb-3 sm:mb-4">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                      {config?.features?.find(f => f.id === activeMetric)?.simulationTitle || "Inventory Simulation"}
                    </h4>
                  </div>

                  {/* Interactive Slider for Simulation */}
                  {activeMetric === 'inventory' && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        <span>Current Stock Level</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{simulationValue}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={simulationValue}
                        onChange={(e) => handleSimulationChange(parseInt(e.target.value))}
                        className="w-full h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                      />
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                        <div className="text-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <div className="text-base sm:text-lg md:text-xl font-bold text-green-600 dark:text-green-400">
                            {simulationValue < 30 ? 'Now' : simulationValue < 60 ? 'Soon' : 'Later'}
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-gray-600 dark:text-gray-400">Reorder Time</div>
                        </div>
                        <div className="text-center p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div className="text-base sm:text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400">
                            {Math.max(0, Math.min(100, 100 - simulationValue))}%
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-gray-600 dark:text-gray-400">Reorder Quantity</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeMetric === 'forecast' && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="h-32 sm:h-40 md:h-48 flex items-end gap-1 sm:gap-2">
                        {[65, 72, 68, 85, 92, 88, 95, 102, 98, 105, 112, 108].map((value, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-0.5 sm:gap-1">
                            <div
                              className="w-full bg-green-500 dark:bg-green-400 rounded-t transition-all duration-300 hover:bg-green-600"
                              style={{ height: `${(value / 120) * 100}%` }}
                            />
                            <span className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">{i + 1}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        Predicted demand for next 12 weeks
                      </div>
                    </div>
                  )}

                  {activeMetric === 'supplier' && (
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        { name: 'Premium Supplies', price: '$12.50', leadTime: '2 days', score: 98 },
                        { name: 'Global Logistics', price: '$11.80', leadTime: '3 days', score: 94 },
                        { name: 'Express Parts', price: '$13.20', leadTime: '1 day', score: 96 }
                      ].map((supplier, i) => (
                        <div key={i} className="flex flex-wrap items-center justify-between gap-2 p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">{supplier.name}</div>
                            <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">{supplier.price} | {supplier.leadTime}</div>
                          </div>
                          <div className="text-[10px] sm:text-xs font-semibold text-green-600 dark:text-green-400">{supplier.score}%</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stats Display */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">98%</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">30%</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">24/7</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Monitoring</div>
                    </div>
                  </div>
                </div>

                {/* Feature Highlight */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-green-800 dark:text-green-300">
                    <span className="font-semibold">💡 Pro Tip:</span> {config?.features?.find(f => f.id === activeMetric)?.highlightText || "Automated reordering can reduce stock Outs by up to 95% and lower inventory carrying costs by 30%."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Row */}
        {config?.showMetrics && config?.metrics && (
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {config.metrics.map((metric, index) => (
              <div key={index} className="text-center p-4 sm:p-5 md:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-0.5 sm:mb-1">
                  {metric.label}
                </div>
                <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && config?.ctaText && (
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-2 sm:p-2.5 md:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-full pl-4 sm:pl-5 md:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2">
              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                {config.ctaText}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                aria-label="Start automating now"
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

export default AutomatedReorderingSection2;