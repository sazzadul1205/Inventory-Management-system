// page/frontend/Features/AutomatedReorderingSection/AutomatedReorderingSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineChip,
  HiOutlineDatabase,
  HiOutlineLightBulb,
  HiOutlineTrendingUp,
  HiOutlineShoppingCart,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup
} from 'react-icons/hi';

const AutomatedReorderingSection2 = ({ config }) => {
  const [activeMetric, setActiveMetric] = useState('inventory');
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

  const handleSimulationChange = (value) => {
    setSimulationValue(value);
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Automated Reordering Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
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
           {config?.features?.map((feature) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 p-6 rounded-2xl ${activeMetric === feature.id
                    ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-green-500 dark:border-green-400'
                    : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                onClick={() => setActiveMetric(feature.id)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveMetric(feature.id)}
                role="button"
                tabIndex={0}
                aria-label={`View ${feature.title} details`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${activeMetric === feature.id
                      ? 'bg-green-500 text-white'
                      : 'bg-green-100 dark:bg-gray-700 text-green-600 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-gray-600'
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
                    {activeMetric === feature.id && (
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
                          className="inline-flex items-center mt-4 text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors"
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

          {/* Right Side - Interactive Demo/Simulator */}
          <div className="sticky top-24">
            <div className="bg-linear-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Reorder Simulator</span>
              </div>

              {/* Dynamic Content based on Active Metric */}
              <div className="space-y-6">
                {/* Visual representation */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {config?.features?.find(f => f.id === activeMetric)?.simulationTitle || "Inventory Simulation"}
                    </h4>
                  </div>

                  {/* Interactive Slider for Simulation */}
                  {activeMetric === 'inventory' && (
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Current Stock Level</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{simulationValue}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={simulationValue}
                        onChange={(e) => handleSimulationChange(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                      />
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {simulationValue < 30 ? 'Now' : simulationValue < 60 ? 'Soon' : 'Later'}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Reorder Time</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {Math.max(0, Math.min(100, 100 - simulationValue))}%
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Reorder Quantity</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeMetric === 'forecast' && (
                    <div className="space-y-4">
                      <div className="h-48 flex items-end gap-2">
                        {[65, 72, 68, 85, 92, 88, 95, 102, 98, 105, 112, 108].map((value, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              className="w-full bg-green-500 dark:bg-green-400 rounded-t transition-all duration-300 hover:bg-green-600"
                              style={{ height: `${(value / 120) * 100}%` }}
                             />
                            <span className="text-xs text-gray-500 dark:text-gray-400">{i + 1}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                        Predicted demand for next 12 weeks
                      </div>
                    </div>
                  )}

                  {activeMetric === 'supplier' && (
                    <div className="space-y-3">
                      {[
                        { name: 'Premium Supplies', price: '$12.50', leadTime: '2 days', score: 98 },
                        { name: 'Global Logistics', price: '$11.80', leadTime: '3 days', score: 94 },
                        { name: 'Express Parts', price: '$13.20', leadTime: '1 day', score: 96 }
                      ].map((supplier, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{supplier.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{supplier.price} | {supplier.leadTime}</div>
                          </div>
                          <div className="text-sm font-semibold text-green-600 dark:text-green-400">{supplier.score}%</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stats Display */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900 dark:text-white">98%</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900 dark:text-white">30%</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900 dark:text-white">24/7</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Monitoring</div>
                    </div>
                  </div>
                </div>

                {/* Feature Highlight */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="text-sm text-green-800 dark:text-green-300">
                    <span className="font-semibold">💡 Pro Tip:</span> {config?.features?.find(f => f.id === activeMetric)?.highlightText || "Automated reordering can reduce stock Outs by up to 95% and lower inventory carrying costs by 30%."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Row */}
        {config?.showMetrics && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            {config?.metrics?.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{metric.description}</div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-1 bg-gray-50 dark:bg-gray-800/50 rounded-full pl-6 pr-2 py-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to automate your inventory management?"}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className={`${config?.ctaButton?.backgroundColor} ${config?.ctaButton?.textColor} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2`}
                aria-label="Start automating now"
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

export default AutomatedReorderingSection2;