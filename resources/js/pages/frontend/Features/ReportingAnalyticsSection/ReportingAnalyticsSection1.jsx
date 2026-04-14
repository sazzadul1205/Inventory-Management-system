// page/frontend/Features/ReportingAnalyticsSection/ReportingAnalyticsSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineChartBar,
  HiOutlineChartPie,
  HiOutlineChartSquareBar,
  HiOutlineTrendingUp,
  HiOutlineDocumentReport,
  HiOutlineDownload,
  HiOutlineCalendar,
  HiOutlineBell,
  HiOutlineDatabase,
  HiOutlineChip,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineShare,
  HiOutlineRefresh,
  HiOutlineFilter,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineUsers,
  HiOutlineShoppingCart,
  HiOutlineClipboardList,
  HiOutlineTruck,
  HiOutlineStar,
  HiOutlineCheckCircle,
  HiOutlineChartBar as HiOutlineAnalytics,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineTable,
  HiOutlineTemplate
} from 'react-icons/hi';

const ReportingAnalyticsSection1 = ({ config }) => {
  
  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'chart-bar':
        return <HiOutlineChartBar className={className} />;
      case 'chart-pie':
        return <HiOutlineChartPie className={className} />;
      case 'chart-square':
        return <HiOutlineChartSquareBar className={className} />;
      case 'trending':
        return <HiOutlineTrendingUp className={className} />;
      case 'report':
        return <HiOutlineDocumentReport className={className} />;
      case 'download':
        return <HiOutlineDownload className={className} />;
      case 'calendar':
        return <HiOutlineCalendar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'eye':
        return <HiOutlineEye className={className} />;
      case 'share':
        return <HiOutlineShare className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'filter':
        return <HiOutlineFilter className={className} />;
      case 'mail':
        return <HiOutlineMail className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} />;
      case 'users':
        return <HiOutlineUsers className={className} />;
      case 'cart':
        return <HiOutlineShoppingCart className={className} />;
      case 'inventory':
        return <HiOutlineClipboardList className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'star':
        return <HiOutlineStar className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'analytics':
        return <HiOutlineAnalytics className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'presentation':
        return <HiOutlinePresentationChartLine className={className} />;
      case 'table':
        return <HiOutlineTable className={className} />;
      case 'template':
        return <HiOutlineTemplate className={className} />;
      default:
        return <HiOutlineChartBar className={className} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Reporting & Analytics Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
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

        {/* Key Benefits Row */}
        {config?.benefits && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {config.benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-linear-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl border border-purple-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  {getFeatureIcon(benefit.icon, "w-6 h-6 text-purple-600 dark:text-purple-400")}
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          {config?.features?.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {/* Feature Icon */}
              <div className="w-16 h-16 bg-purple-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {getFeatureIcon(feature.icon, "w-8 h-8 text-purple-600 dark:text-purple-400")}
              </div>

              {/* Feature Title */}
              <h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                itemProp="name"
              >
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p
                className="text-gray-600 dark:text-gray-400 mb-6"
                itemProp="description"
              >
                {feature.description}
              </p>

              {/* Feature Details List */}
              <ul className="space-y-3 mb-6" aria-label={`${feature.title} details`}>
                {feature.details?.map((detail, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    {getFeatureIcon("check", "w-5 h-5 text-purple-500 dark:text-purple-400 mr-2 shrink-0 mt-0.5")}
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Feature Link */}
              <Link
                href={feature.link}
                className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300 group/link"
                aria-label={`Learn more about ${feature.title}`}
              >
                <span>Learn more</span>
                <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              {/* Decorative corner gradient */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-600/0 via-purple-600/0 to-purple-600/5 dark:from-purple-400/0 dark:via-purple-400/0 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Key Metrics Preview */}
        {config?.showMetricsPreview && (
          <div className="mt-20 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.metricsTitle || "Key Performance Indicators"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.metricsDescription || "Track the metrics that matter most to your business"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config?.keyMetrics?.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      {getFeatureIcon(metric.icon, "w-5 h-5 text-purple-600 dark:text-purple-400")}
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${metric.trend === 'up' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                      metric.trend === 'down' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                        'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                      }`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Report Types Section */}
        {config?.showReportTypes && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.reportTypesTitle || "Pre-Built Reports"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.reportTypesDescription || "Ready-to-use reports for common business needs"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config?.reportTypes?.map((report, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">
                      {getFeatureIcon(report.icon, "w-6 h-6 text-purple-600 dark:text-purple-400")}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{report.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {report.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-600 dark:text-purple-400">{report.frequency}</span>
                    {getFeatureIcon("report", "w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Data Export Options */}
        {config?.showExportOptions && (
          <div className="mb-20">
            <div className="bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 border border-purple-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    {getFeatureIcon("download", "w-8 h-8 text-purple-600 dark:text-purple-400")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {config?.exportTitle || "Multiple Export Formats"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {config?.exportDescription || "Export your data in any format you need"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {config?.exportFormats?.map((format, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors font-medium text-sm"
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to unlock actionable insights?"}
              </span>
              <div className="flex gap-3">
                <Link
                  href={config?.ctaPrimaryLink || "/contact"}
                  className={`${config?.ctaButton?.primaryBackground || "bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-white`}
                  aria-label="Start analyzing now"
                >
                  {config?.ctaButton?.primaryText || "Get Started"}
                  <HiArrowRight aria-hidden="true" />
                </Link>
                <Link
                  href={config?.ctaSecondaryLink || "/demo"}
                  className="px-6 py-3 bg-transparent border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-semibold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 inline-flex items-center gap-2"
                >
                  {config?.ctaButton?.secondaryText || "Watch Demo"}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default ReportingAnalyticsSection1;