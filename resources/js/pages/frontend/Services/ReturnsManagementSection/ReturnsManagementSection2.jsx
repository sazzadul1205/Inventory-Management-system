// page/frontend/Home/ReturnsManagementSection/ReturnsManagementSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
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
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCube,
  HiOutlineXCircle,
  HiOutlinePhotograph,
  HiOutlineCash
} from 'react-icons/hi';

const ReturnsManagementSection2 = ({ config }) => {
  const [activeReturn, setActiveReturn] = useState(config?.recentReturns?.[0]?.id || 1);

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
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Returns Management Solutions"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Live Status */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                {config?.badge}
              </span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-medium rounded-full flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
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

          {/* Live Returns Counter */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{config?.returnCounter?.label}</p>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">{config?.returnCounter?.value}</span>
              <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                {config?.returnCounter?.trend}
              </span>
            </div>
          </div>
        </div>

        {/* Returns Queue Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Returns List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineRefresh className="w-5 h-5 text-orange-600" />
              {config?.returnsQueue?.title}
            </h3>
            {config?.returnsQueue?.items?.map((returnItem) => (
              <button
                key={returnItem.id}
                onClick={() => setActiveReturn(returnItem.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${activeReturn === returnItem.id
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/25'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`font-semibold ${activeReturn === returnItem.id ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                    {returnItem.id}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${activeReturn === returnItem.id
                    ? 'bg-white/20 text-white'
                    : returnItem.statusColor
                    }`}>
                    {returnItem.status}
                  </span>
                </div>
                <p className={`text-sm mb-1 ${activeReturn === returnItem.id ? 'text-orange-100' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                  {returnItem.customer}
                </p>
                <p className={`text-xs ${activeReturn === returnItem.id ? 'text-orange-100' : 'text-gray-500'
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
                <div key={returnItem.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                  {/* Return Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{returnItem.id}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{returnItem.customer} • {returnItem.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Return Date</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{returnItem.date}</p>
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Item Information</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Product:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{returnItem.product}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">SKU:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{returnItem.sku}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Price:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{returnItem.price}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Reason:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{returnItem.reason}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Condition Assessment</h4>
                      <div className="space-y-3">
                        {returnItem.condition?.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                            <span className={`text-sm font-medium ${item.color}`}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Disposition Options */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Select Disposition</h4>
                    <div className="grid grid-cols-4 gap-3">
                      {returnItem.disposition?.map((option, idx) => (
                        <button
                          key={idx}
                          className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${option.selected
                            ? option.color
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                      Process Return
                    </button>
                    <button className="px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">
                      <HiOutlinePhotograph className="w-5 h-5" />
                    </button>
                    <button className="px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">
                      <HiOutlineDocumentText className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Returns Analytics */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {config?.analytics?.map((metric) => (
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

        {/* Return Reasons */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{config?.reasons?.title}</h3>
            <div className="space-y-4">
              {config?.reasons?.items?.map((reason) => (
                <div key={reason.id}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">{reason.label}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{reason.percentage}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${reason.color} rounded-full`}
                      style={{ width: reason.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{config?.processing?.title}</h3>
            <div className="space-y-4">
              {config?.processing?.stages?.map((stage) => (
                <div key={stage.id} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full ${stage.bgColor} flex items-center justify-center text-white font-bold text-sm`}>
                    {stage.count}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{stage.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{stage.time}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
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
        <div className="bg-linear-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 rounded-3xl p-12 text-white mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">{config?.workflow?.title}</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {config?.workflow?.steps?.map((step) => (
              <div key={step.id} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  {getIcon(step.icon, "w-8 h-8 text-white")}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-orange-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl border border-gray-200 dark:border-gray-700 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{config?.footerCta?.title}</h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">{config?.footerCta?.description}</p>
          <Link
            href={config?.footerCta?.link}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {config?.footerCta?.buttonText}
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReturnsManagementSection2;