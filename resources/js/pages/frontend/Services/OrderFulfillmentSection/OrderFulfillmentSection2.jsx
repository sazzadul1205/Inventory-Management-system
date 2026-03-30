// page/frontend/Home/OrderFulfillmentSection/OrderFulfillmentSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
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
  HiArrowRight,
  HiOutlineCash,
  HiOutlineDeviceMobile,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineBan,
  HiOutlineMail
} from 'react-icons/hi';

const OrderFulfillmentSection2 = ({ config }) => {
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
        return <HiOutlinePackage className={className} />;
    }
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Order Fulfillment Solutions"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Toggle */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {config?.badge}
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                {config?.liveStatus}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {config?.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {config?.description}
            </p>
          </div>

          {/* Live Order Counter */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{config?.liveCounter?.label}</p>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">{config?.liveCounter?.value}</span>
              <span className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                {config?.liveCounter?.trend}
              </span>
            </div>
          </div>
        </div>

        {/* Order Type Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {config?.orderTypes?.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveOrderType(type.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeOrderType === type.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${type.label} orders`}
              aria-pressed={activeOrderType === type.id}
            >
              <span className="flex items-center gap-2">
                {getIcon(type.icon, "w-4 h-4")}
                {type.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${activeOrderType === type.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}>
                  {type.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Order List - Left Column */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {config?.orderList?.title}
            </h3>
            {config?.orderList?.orders?.map((order) => (
              <div
                key={order.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">{order.id}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{order.customer}</p>
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-500">
                  <span>{order.items} items</span>
                  <span>{order.time}</span>
                </div>
              </div>
            ))}
            <Link
              href={config?.orderList?.viewAllLink}
              className="block text-center text-blue-600 dark:text-blue-400 text-sm font-semibold mt-4 hover:underline"
            >
              View All Orders →
            </Link>
          </div>

          {/* Fulfillment Center - Middle Column */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                {config?.fulfillmentCenter?.title}
              </h3>

              {/* Progress Steps */}
              <div className="relative mb-8">
                <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
                <div className="relative flex justify-between">
                  {config?.fulfillmentCenter?.steps?.map((step, idx) => (
                    <div key={step.id} className="text-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${step.completed
                          ? 'bg-green-600 text-white'
                          : step.active
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                        }`}>
                        {step.completed ? (
                          <HiOutlineCheckCircle className="w-5 h-5" />
                        ) : (
                          <span>{idx + 1}</span>
                        )}
                      </div>
                      <p className="text-xs font-medium text-gray-900 dark:text-white">{step.label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{step.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Order Being Processed */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Currently Processing</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{config?.currentOrder?.id}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${config?.currentOrder?.statusColor}`}>
                    {config?.currentOrder?.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Customer</p>
                    <p className="font-medium text-gray-900 dark:text-white">{config?.currentOrder?.customer}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Items</p>
                    <p className="font-medium text-gray-900 dark:text-white">{config?.currentOrder?.items}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Destination</p>
                    <p className="font-medium text-gray-900 dark:text-white">{config?.currentOrder?.destination}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Estimated Delivery</p>
                    <p className="font-medium text-gray-900 dark:text-white">{config?.currentOrder?.eta}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-3 gap-3">
                {config?.quickActions?.map((action) => (
                  <button
                    key={action.id}
                    className="flex flex-col items-center gap-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg ${action.bgColor} flex items-center justify-center`}>
                      {getIcon(action.icon, "w-5 h-5 text-white")}
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {config?.metrics?.map((metric) => (
            <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                  {getIcon(metric.icon, "w-5 h-5 text-white")}
                </div>
                <span className={`text-sm font-medium ${metric.trendColor}`}>{metric.trend}</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {config?.features?.map((feature) => (
            <div key={feature.id} className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {getIcon(feature.icon, "w-6 h-6 text-white")}
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
              <Link
                href={feature.link}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
              >
                Learn more
                <HiArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                          linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default OrderFulfillmentSection2;