// page/frontend/Home/OrderFulfillmentSection/OrderFulfillmentSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import { GoPackage } from "react-icons/go";
import {
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineRefresh,
  HiOutlineDocumentText,
  HiOutlineUser,
  HiOutlineCash,
  HiOutlineDeviceMobile,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineBan,
  HiOutlineMail
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const OrderFulfillmentSection2 = ({ config }) => {

  // Active Order Type
  const [activeOrderType, setActiveOrderType] = useState(config?.orderTypes?.[0]?.id || 1);

  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'bag':
        return <HiOutlineShoppingBag className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'user':
        return <HiOutlineUser className={className} />;
      case 'package':
        return <GoPackage className={className} />;
      case 'cash':
        return <HiOutlineCash className={className} />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bolt':
        return <HiOutlineLightningBolt className={className} />;
      case 'ban':
        return <HiOutlineBan className={className} />;
      case 'mail':
        return <HiOutlineMail className={className} />;
      default:
        return <GoPackage className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Toggle */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              {config?.badge && (
                <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {config.badge}
                </span>
              )}
              {config?.liveStatus && (
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] sm:text-xs font-medium rounded-full">
                  {config.liveStatus}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
              {config?.title}
            </h2>
            {config?.description && (
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
                {config.description}
              </p>
            )}
          </div>

          {/* Live Order Counter */}
          {config?.liveCounter && (
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
                {config.liveCounter.label}
              </p>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {config.liveCounter.value}
                </span>
                <span className="flex items-center gap-1 text-green-600 dark:text-green-400 text-[10px] sm:text-xs">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500" />
                  </span>
                  {config.liveCounter.trend}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Order Type Tabs */}
        {config?.orderTypes && config.orderTypes.length > 0 && (
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
            {config.orderTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveOrderType(type.id)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-300 ${activeOrderType === type.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                aria-label={`Show ${type.label} orders`}
              >
                <span className="flex items-center gap-1 sm:gap-2">
                  {getIcon(type.icon, "w-3 h-3 sm:w-4 sm:h-4")}
                  {type.label}
                  <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] ${activeOrderType === type.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                    {type.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">

          {/* Order List - Left Column */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-4">
            {config?.orderList?.title && (
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {config.orderList.title}
              </h3>
            )}
            {config?.orderList?.orders?.map((order) => (
              <div
                key={order.id}
                className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-1 sm:mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">{order.id}</span>
                  <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-medium ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">{order.customer}</p>
                <div className="flex justify-between items-center text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">
                  <span>{order.items} items</span>
                  <span>{order.time}</span>
                </div>
              </div>
            ))}
            {config?.orderList?.viewAllLink && (
              <Link
                href={config.orderList.viewAllLink}
                className="block text-center text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs font-semibold mt-3 sm:mt-4 hover:underline"
              >
                View All Orders →
              </Link>
            )}
          </div>

          {/* Fulfillment Center - Middle Column */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              {config?.fulfillmentCenter?.title && (
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  {config.fulfillmentCenter.title}
                </h3>
              )}

              {/* Progress Steps */}
              {config?.fulfillmentCenter?.steps && (
                <div className="relative mb-6 sm:mb-8">
                  <div className="absolute top-3 sm:top-4 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
                  <div className="relative flex justify-between">
                    {config.fulfillmentCenter.steps.map((step, idx) => (
                      <div key={step.id} className="text-center">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2 ${step.completed
                          ? 'bg-green-600 text-white'
                          : step.active
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                          }`}>
                          {step.completed ? (
                            <HiOutlineCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          ) : (
                            <span className="text-xs sm:text-sm">{idx + 1}</span>
                          )}
                        </div>
                        <p className="text-[8px] sm:text-[10px] font-medium text-gray-900 dark:text-white">{step.label}</p>
                        <p className="text-[6px] sm:text-[8px] text-gray-500 dark:text-gray-400">{step.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Current Order Being Processed */}
              {config?.currentOrder && (
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3 sm:mb-4">
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-0.5 sm:mb-1">Currently Processing</p>
                      <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        {config.currentOrder.id}
                      </p>
                    </div>
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-medium ${config.currentOrder.statusColor}`}>
                      {config.currentOrder.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Customer</p>
                      <p className="font-medium text-gray-900 dark:text-white">{config.currentOrder.customer}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Items</p>
                      <p className="font-medium text-gray-900 dark:text-white">{config.currentOrder.items}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Destination</p>
                      <p className="font-medium text-gray-900 dark:text-white">{config.currentOrder.destination}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">Est. Delivery</p>
                      <p className="font-medium text-gray-900 dark:text-white">{config.currentOrder.eta}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              {config?.quickActions && config.quickActions.length > 0 && (
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {config.quickActions.map((action) => (
                    <button
                      key={action.id}
                      className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-gray-50 dark:bg-gray-900 rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg ${action.bgColor} flex items-center justify-center`}>
                        {getIcon(action.icon, "w-4 h-4 sm:w-5 sm:h-5 text-white")}
                      </div>
                      <span className="text-[8px] sm:text-[10px] font-medium text-gray-700 dark:text-gray-300">{action.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        {config?.metrics && config.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-16 sm:mb-20">
            {config.metrics.map((metric) => (
              <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                    {getIcon(metric.icon, "w-4 h-4 sm:w-5 sm:h-5 text-white")}
                  </div>
                  <span className={`text-[8px] sm:text-[10px] font-medium ${metric.trendColor}`}>{metric.trend}</span>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {metric.value}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Features Grid */}
        {config?.features && config.features.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {config.features.map((feature) => (
              <div key={feature.id} className="group relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${feature.bgColor} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(feature.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white")}
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {feature.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {feature.description}
                </p>
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs font-semibold hover:gap-2 transition-all duration-300"
                >
                  Learn more
                  <HiOutlineArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5 opacity-0 group-hover:opacity-100 group-hover:ml-1.5 transition-all" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderFulfillmentSection2;