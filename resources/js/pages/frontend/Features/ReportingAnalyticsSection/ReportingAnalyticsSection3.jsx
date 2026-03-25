// page/frontend/Features/ReportingAnalyticsSection/ReportingAnalyticsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

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
  HiOutlineCheckCircle,
  HiOutlineEye,
  HiOutlineShare,
  HiOutlineFilter,
  HiOutlineRefresh,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineDesktopComputer,
  HiOutlineMail,
  HiOutlineClock
} from 'react-icons/hi';

const ReportingAnalyticsSection3 = ({ config }) => {
  const [activeIntegration, setActiveIntegration] = useState(0);

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
      case 'filter':
        return <HiOutlineFilter className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'cloud':
        return <HiOutlineCloud className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      case 'desktop':
        return <HiOutlineDesktopComputer className={className} />;
      case 'mail':
        return <HiOutlineMail className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
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
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-50/50 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none" aria-hidden="true"></div>

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
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

        {/* Stats/Highlights Row */}
        {config?.stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {config.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Grid - Enhanced Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {config?.features?.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/0 via-purple-600/0 to-purple-600/5 dark:from-purple-400/0 dark:via-purple-400/0 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="p-8">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-purple-500/10 dark:bg-purple-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 bg-linear-to-br from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-600 dark:text-purple-400">
                      {getFeatureIcon(feature.icon)}
                    </div>
                  </div>
                </div>

                {/* Title with badges */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  {feature.isNew && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                      New
                    </span>
                  )}
                  {feature.isPopular && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center gap-1">
                      <HiOutlineStar className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>

                {/* Key features list */}
                <ul className="space-y-2 mb-6">
                  {feature.details?.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-4 h-4 text-purple-500 dark:text-purple-400 mr-2 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics display */}
                {feature.metrics && (
                  <div className="grid grid-cols-2 gap-3 mb-6 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{metric.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* View more link */}
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300 group/link"
                >
                  <span>Learn more</span>
                  <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-purple-500/5 to-transparent rounded-tl-full pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* AI-Powered Insights Section */}
        {config?.showAIInsights && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.aiInsightsTitle || "AI-Powered Analytics Intelligence"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.aiInsightsDescription || "Smart insights that drive better business decisions"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.aiInsights?.map((insight, index) => (
                <div key={index} className="relative bg-linear-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-purple-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-4 right-4 text-2xl opacity-20">🤖</div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                      {getFeatureIcon(insight.icon, "w-6 h-6 text-purple-600 dark:text-purple-400")}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{insight.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{insight.description}</p>
                    <div className="text-xs font-semibold text-purple-600 dark:text-purple-400">{insight.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Advanced Analytics Features */}
        {config?.showAdvancedFeatures && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.advancedTitle || "Advanced Analytics Capabilities"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.advancedDescription || "Powerful tools for deep data exploration"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config?.advancedFeatures?.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Integration Partners Section */}
        {config?.showIntegrations && (
          <div className="mb-20 pt-12 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.integrationsTitle || "Seamless Data Integration"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.integrationsDescription || "Connect your analytics with your entire business ecosystem"}
              </p>
            </div>

            {/* Tabs for integration categories */}
            {config?.integrationCategories && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {config.integrationCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIntegration(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeIntegration === index
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {config?.integrations?.[activeIntegration]?.items?.map((integration, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="text-4xl mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    {integration.icon}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-medium text-center">
                    {integration.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {integration.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROI Calculator Section */}
        {config?.showROICalculator && (
          <div className="mb-20">
            <div className="bg-linear-to-r from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 rounded-3xl overflow-hidden">
              <div className="px-8 py-12 md:px-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {config?.roiTitle || "Calculate Your Analytics ROI"}
                    </h3>
                    <p className="text-purple-100 mb-6">
                      {config?.roiDescription || "See how data-driven decisions impact your bottom line"}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        <span>Reduce operational costs by 25-35%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        <span>Improve forecast accuracy by 40%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        <span>Increase revenue by 15-20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        {config?.roiExample || "Up to 6x ROI"}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">in the first year</div>
                    </div>
                    <Link
                      href={config?.roiLink || "/calculator"}
                      className="block w-full text-center px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Calculate Your Savings
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Report Templates Gallery */}
        {config?.showReportGallery && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.galleryTitle || "Comprehensive Report Library"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.galleryDescription || "50+ pre-built templates for every business need"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {config?.reportGallery?.map((report, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-xl">{report.icon}</div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">{report.name}</h4>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{report.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scheduled Reports Section */}
        {config?.showScheduledReports && (
          <div className="mb-20">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {config?.scheduledTitle || "Automated Report Scheduling"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {config?.scheduledDescription || "Never miss important insights with automated delivery"}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {config?.schedulingFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to unlock the power of data-driven decisions?"}
              </span>
              <div className="flex gap-3">
                <Link
                  href={config?.ctaPrimaryLink || "/trial"}
                  className={`${config?.ctaButton?.primaryBackground || "bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-white`}
                >
                  {config?.ctaButton?.primaryText || "Start Free Trial"}
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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default ReportingAnalyticsSection3;