// page/frontend/Home/ReturnsManagementSection/ReturnsManagementSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import { GoPackage } from "react-icons/go";
import {
  HiOutlineRefresh,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineUser,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCube,
  HiOutlineXCircle,
  HiOutlinePhotograph,
  HiOutlineCash,
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const ReturnsManagementSection2 = ({ config }) => {
  const [activeReturn, setActiveReturn] = useState(config?.returnsQueue?.items?.[0]?.id || 1);

  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'user':
        return <HiOutlineUser className={className} />;
      case 'package':
        return <GoPackage className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'cube':
        return <HiOutlineCube className={className} />;
      case 'xcircle':
        return <HiOutlineXCircle className={className} />;
      case 'photo':
        return <HiOutlinePhotograph className={className} />;
      case 'cash':
        return <HiOutlineCash className={className} />;
      default:
        return <HiOutlineRefresh className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Live Status */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              {config?.badge && (
                <span className="text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                  {config.badge}
                </span>
              )}
              {config?.liveStatus && (
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-[10px] sm:text-xs font-medium rounded-full flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500" />
                  </span>
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

          {/* Live Returns Counter */}
          {config?.returnCounter && (
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
                {config.returnCounter.label}
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {config.returnCounter.value}
                </span>
                <span className="flex items-center gap-0.5 sm:gap-1 text-orange-600 dark:text-orange-400 text-[10px] sm:text-xs">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500" />
                  </span>
                  {config.returnCounter.trend}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Returns Queue Dashboard */}
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">

          {/* Returns List */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-4">
            {config?.returnsQueue?.title && (
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                <HiOutlineRefresh className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                {config.returnsQueue.title}
              </h3>
            )}
            {config?.returnsQueue?.items?.map((returnItem) => (
              <button
                key={returnItem.id}
                onClick={() => setActiveReturn(returnItem.id)}
                className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 ${activeReturn === returnItem.id
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
              >
                <div className="flex flex-wrap justify-between items-start gap-1 mb-1 sm:mb-2">
                  <span className={`font-semibold text-xs sm:text-sm ${activeReturn === returnItem.id ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                    {returnItem.id}
                  </span>
                  <span className={`text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full ${activeReturn === returnItem.id
                      ? 'bg-white/20 text-white'
                      : returnItem.statusColor
                    }`}>
                    {returnItem.status}
                  </span>
                </div>
                <p className={`text-[10px] sm:text-xs mb-0.5 sm:mb-1 ${activeReturn === returnItem.id ? 'text-orange-100' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                  {returnItem.customer}
                </p>
                <p className={`text-[8px] sm:text-[10px] ${activeReturn === returnItem.id ? 'text-orange-100' : 'text-gray-500'
                  }`}>
                  {returnItem.items} • {returnItem.time}
                </p>
              </button>
            ))}
          </div>

          {/* Active Return Details */}
          <div className="lg:col-span-2">
            {config?.returnsQueue?.items?.map((returnItem) => (
              returnItem.id === activeReturn && (
                <div key={returnItem.id} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700">

                  {/* Return Header */}
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                        {returnItem.id}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        {returnItem.customer} • {returnItem.email}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Return Date</p>
                      <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        {returnItem.date}
                      </p>
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-6">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-2 sm:mb-3">
                        Item Information
                      </h4>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex justify-between text-[10px] sm:text-xs">
                          <span className="text-gray-500 dark:text-gray-400">Product:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{returnItem.product}</span>
                        </div>
                        <div className="flex justify-between text-[10px] sm:text-xs">
                          <span className="text-gray-500 dark:text-gray-400">SKU:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{returnItem.sku}</span>
                        </div>
                        <div className="flex justify-between text-[10px] sm:text-xs">
                          <span className="text-gray-500 dark:text-gray-400">Price:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{returnItem.price}</span>
                        </div>
                        <div className="flex justify-between text-[10px] sm:text-xs">
                          <span className="text-gray-500 dark:text-gray-400">Reason:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{returnItem.reason}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-2 sm:mb-3">
                        Condition Assessment
                      </h4>
                      <div className="space-y-1.5 sm:space-y-2">
                        {returnItem.condition?.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between text-[10px] sm:text-xs">
                            <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                            <span className={`text-[10px] sm:text-xs font-medium ${item.color}`}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Disposition Options */}
                  {returnItem.disposition && returnItem.disposition.length > 0 && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-2 sm:mb-3">
                        Select Disposition
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                        {returnItem.disposition.map((option, idx) => (
                          <button
                            key={idx}
                            className={`p-2 sm:p-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-medium transition-all duration-300 ${option.selected
                                ? option.color
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                              }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm">
                      Process Return
                    </button>
                    <button className="px-3 sm:px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg sm:rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">
                      <HiOutlinePhotograph className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button className="px-3 sm:px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg sm:rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">
                      <HiOutlineDocumentText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Returns Analytics */}
        {config?.analytics && config.analytics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-16 sm:mb-20">
            {config.analytics.map((metric) => (
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

        {/* Return Reasons */}
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">

          <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-200 dark:border-gray-700">
            {config?.reasons?.title && (
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {config.reasons.title}
              </h3>
            )}
            <div className="space-y-3 sm:space-y-4">
              {config?.reasons?.items?.map((reason) => (
                <div key={reason.id}>
                  <div className="flex justify-between text-[10px] sm:text-xs mb-1 sm:mb-2">
                    <span className="text-gray-600 dark:text-gray-400">{reason.label}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{reason.percentage}</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${reason.color} rounded-full`}
                      style={{ width: reason.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-200 dark:border-gray-700">
            {config?.processing?.title && (
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {config.processing.title}
              </h3>
            )}
            <div className="space-y-3 sm:space-y-4">
              {config?.processing?.stages?.map((stage) => (
                <div key={stage.id} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full ${stage.bgColor} flex items-center justify-center text-white font-bold text-xs sm:text-sm`}>
                    {stage.count}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between gap-1 mb-0.5 sm:mb-1">
                      <span className="text-[10px] sm:text-xs font-medium text-gray-900 dark:text-white">{stage.name}</span>
                      <span className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">{stage.time}</span>
                    </div>
                    <div className="w-full h-1 sm:h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${stage.barColor} rounded-full`}
                        style={{ width: stage.progress }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Restocking Workflow */}
        {config?.workflow?.show && (
          <div className="bg-linear-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-center">
              {config.workflow.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.workflow.steps?.map((step) => (
                <div key={step.id} className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-sm">
                    {getIcon(step.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-white")}
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{step.title}</h4>
                  <p className="text-[10px] sm:text-xs text-orange-100">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Banner */}
        {config?.footerCta?.show && (
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
              {config.footerCta.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {config.footerCta.description}
            </p>
            <Link
              href={config.footerCta.link || "/contact"}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base"
            >
              {config.footerCta.buttonText}
              <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReturnsManagementSection2;