// page/frontend/Features/MultiWarehouseSupportSection/MultiWarehouseSupportSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineOfficeBuilding,
  HiOutlineGlobeAlt,
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineChip,
  HiOutlineDatabase,
  HiOutlineTruck,
  HiOutlineCheckCircle,
  HiOutlineLocationMarker,
  HiOutlineClipboardList,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineClock
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const MultiWarehouseSupportSection2 = ({ config }) => {

  // State for active warehouse in the interactive demo
  const [activeWarehouse, setActiveWarehouse] = useState(0);

  // State to track the selected feature
  const [selectedFeature, setSelectedFeature] = useState(config?.features?.[0]?.id || 'inventory');

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'warehouse':
        return <HiOutlineOfficeBuilding className={className} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={className} />;
      case 'sync':
        return <HiOutlineRefresh className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'inventory':
        return <HiOutlineClipboardList className={className} />;
      case 'team':
        return <HiOutlineUsers className={className} />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      default:
        return <HiOutlineOfficeBuilding className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle,#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Section Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-purple-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-purple-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
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
                className={`group cursor-pointer transition-all duration-300 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl ${selectedFeature === feature.id
                    ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-purple-500 dark:border-purple-400'
                    : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                onClick={() => setSelectedFeature(feature.id)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedFeature(feature.id)}
                role="button"
                tabIndex={0}
                aria-label={`View ${feature.title} details`}
              >
                <div className="flex items-start gap-3 sm:gap-4">

                  {/* Icon */}
                  <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ${selectedFeature === feature.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-gray-600'
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
                    {selectedFeature === feature.id && (
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                        <ul className="space-y-1.5 sm:space-y-2">
                          {feature.details?.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                              <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 dark:text-purple-400 mr-1.5 sm:mr-2 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={feature.link}
                          className="inline-flex items-center mt-2 sm:mt-3 text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-[10px] sm:text-xs"
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

          {/* Right Side - Interactive Warehouse Selector */}
          <div className="sticky top-24">
            <div className="bg-linear-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">

              {/* Demo Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Warehouse Network Simulator</span>
              </div>

              {/* Warehouse Selection Tabs */}
              <div className="mb-4 sm:mb-5 md:mb-6">
                <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2">
                  {config?.warehouses?.map((warehouse, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveWarehouse(index)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-medium transition-all duration-300 whitespace-nowrap ${activeWarehouse === index
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-600'
                        }`}
                    >
                      {warehouse.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Warehouse Details */}
              {config?.warehouses && (
                <div className="space-y-4 sm:space-y-5 md:space-y-6">

                  {/* Warehouse Stats */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <HiOutlineOfficeBuilding className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white">
                          {config.warehouses[activeWarehouse]?.name}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                          {config.warehouses[activeWarehouse]?.location}
                        </p>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                      <div className="text-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-base sm:text-lg md:text-xl font-bold text-purple-600 dark:text-purple-400">
                          {config.warehouses[activeWarehouse]?.inventory}
                        </div>
                        <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">SKUs in Stock</div>
                      </div>
                      <div className="text-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-base sm:text-lg md:text-xl font-bold text-purple-600 dark:text-purple-400">
                          {config.warehouses[activeWarehouse]?.orders}
                        </div>
                        <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Orders/Day</div>
                      </div>
                    </div>

                    {/* Capacity Bar */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex justify-between text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-0.5 sm:mb-1">
                        <span>Capacity Utilization</span>
                        <span className="font-semibold">{config.warehouses[activeWarehouse]?.utilization}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                        <div
                          className="bg-purple-500 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                          style={{ width: config.warehouses[activeWarehouse]?.utilizationPercent || '75%' }}
                        />
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-center">
                        <div className="text-[10px] sm:text-xs font-bold text-gray-900 dark:text-white">
                          {config.warehouses[activeWarehouse]?.fillRate}
                        </div>
                        <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Fill Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] sm:text-xs font-bold text-gray-900 dark:text-white">
                          {config.warehouses[activeWarehouse]?.shippingTime}
                        </div>
                        <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Avg Shipping</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[10px] sm:text-xs font-bold text-gray-900 dark:text-white">
                          {config.warehouses[activeWarehouse]?.accuracy}
                        </div>
                        <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Accuracy</div>
                      </div>
                    </div>
                  </div>

                  {/* Smart Routing Example */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <HiOutlineTruck className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                      <div>
                        <p className="text-[10px] sm:text-xs font-semibold text-purple-800 dark:text-purple-300 mb-0.5 sm:mb-1">
                          Smart Routing Example
                        </p>
                        <p className="text-[8px] sm:text-[10px] text-purple-700 dark:text-purple-400">
                          Customer in {config.warehouses[activeWarehouse]?.region} →
                          Shipping from {config.warehouses[activeWarehouse]?.name} warehouse
                          <br />
                          <span className="font-semibold">Est. delivery: {config.warehouses[activeWarehouse]?.deliveryTime}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Real-Time Sync Indicator */}
              <div className="mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  Real-time synchronization across all warehouses
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
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2">
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

        {/* Inventory Distribution Visualization */}
        {config?.showDistribution && (
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {config?.distributionTitle || "Global Inventory Distribution"}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {config?.distributionDescription || "Real-time visibility of stock across all locations"}
              </p>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {config?.inventoryDistribution?.map((item, index) => (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{ left: item.x, top: item.y }}
                    >
                      <div className="relative">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full animate-pulse" />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-900 text-white text-[8px] sm:text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          {item.location}: {item.stock} units
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                aria-label="Start managing warehouses"
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

export default MultiWarehouseSupportSection2;