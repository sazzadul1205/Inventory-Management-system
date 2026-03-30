// page/frontend/Features/ReportingAnalyticsSection/ReportingAnalyticsSection2.jsx

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
  HiOutlineRefresh
} from 'react-icons/hi';

const ReportingAnalyticsSection2 = ({ config }) => {
  const [selectedMetric, setSelectedMetric] = useState('inventory');
  const [timeRange, setTimeRange] = useState('weekly');
  const [selectedChart, setSelectedChart] = useState('trend');

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-6 h-6") => {
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
      default:
        return <HiOutlineChartBar className={className} />;
    }
  };

  // Sample data for charts
  const chartData = {
    inventory: {
      trend: [65, 72, 68, 85, 92, 88, 95],
      pie: [45, 30, 25],
      bar: [120, 85, 95, 110, 130, 125, 140]
    },
    sales: {
      trend: [45, 52, 58, 65, 72, 78, 85],
      pie: [55, 25, 20],
      bar: [85, 92, 98, 105, 112, 118, 125]
    },
    fulfillment: {
      trend: [92, 94, 95, 96, 97, 98, 99],
      pie: [98, 2],
      bar: [88, 91, 93, 95, 96, 97, 98]
    }
  };

  const getChartData = () => {
    return chartData[selectedMetric] || chartData.inventory;
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Reporting & Analytics Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
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

        {/* Split Layout: Left - Features, Right - Dashboard Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Features List */}
          <div className="space-y-6">
            {config?.features?.map((feature, index) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 p-6 rounded-2xl ${selectedMetric === feature.id
                    ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-purple-500 dark:border-purple-400'
                    : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                onClick={() => setSelectedMetric(feature.id)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedMetric(feature.id)}
                role="button"
                tabIndex={0}
                aria-label={`View ${feature.title} details`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${selectedMetric === feature.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-gray-600'
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
                    {selectedMetric === feature.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                        <ul className="space-y-2">
                          {feature.details?.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                              <HiOutlineCheckCircle className="w-5 h-5 text-purple-500 dark:text-purple-400 mr-2 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={feature.link}
                          className="inline-flex items-center mt-4 text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
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

          {/* Right Side - Interactive Dashboard Simulator */}
          <div className="sticky top-24">
            <div className="bg-linear-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Analytics Dashboard</span>
                <button className="text-gray-400 hover:text-purple-600 transition-colors">
                  <HiOutlineRefresh className="w-4 h-4" />
                </button>
              </div>

              {/* Time Range Selector */}
              <div className="flex gap-2 mb-6">
                {['daily', 'weekly', 'monthly'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1 text-sm rounded-lg transition-all duration-300 ${timeRange === range
                        ? 'bg-purple-600 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-600'
                      }`}
                  >
                    {range.charAt(0).toUpperCase() + range.slice(1)}
                  </button>
                ))}
              </div>

              {/* Chart Type Selector */}
              <div className="flex gap-2 mb-6">
                {['trend', 'pie', 'bar'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedChart(type)}
                    className={`px-3 py-1 text-sm rounded-lg transition-all duration-300 ${selectedChart === type
                        ? 'bg-purple-600 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-600'
                      }`}
                  >
                    {type === 'trend' && '📈 Trend'}
                    {type === 'pie' && '🥧 Pie'}
                    {type === 'bar' && '📊 Bar'}
                  </button>
                ))}
              </div>

              {/* Chart Visualization */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedMetric === 'inventory' && 'Inventory Trends'}
                    {selectedMetric === 'sales' && 'Sales Performance'}
                    {selectedMetric === 'fulfillment' && 'Fulfillment Rate'}
                  </h4>
                </div>

                {/* Trend Chart */}
                {selectedChart === 'trend' && (
                  <div className="h-64 flex items-end gap-2">
                    {getChartData().trend.map((value, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          className="w-full bg-linear-to-t from-purple-500 to-indigo-500 rounded-t transition-all duration-300 hover:from-purple-600 hover:to-indigo-600"
                          style={{ height: `${(value / 100) * 200}px` }}
                         />
                        <span className="text-xs text-gray-500 dark:text-gray-400">{i + 1}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pie Chart */}
                {selectedChart === 'pie' && (
                  <div className="flex justify-center items-center h-64">
                    <div className="relative w-48 h-48">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        {(() => {
                          const data = getChartData().pie;
                          let cumulative = 0;
                          const colors = ['#8b5cf6', '#a78bfa', '#c4b5fd'];
                          return data.map((value, i) => {
                            const percentage = (value / data.reduce((a, b) => a + b, 0)) * 100;
                            const start = cumulative;
                            cumulative += percentage;
                            const end = cumulative;
                            const startAngle = (start / 100) * 360;
                            const endAngle = (end / 100) * 360;
                            const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                            const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                            const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                            const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
                            const largeArc = percentage > 50 ? 1 : 0;
                            const path = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`;
                            return <path key={i} d={path} fill={colors[i % colors.length]} stroke="white" strokeWidth="1" />;
                          });
                        })()}
                      </svg>
                    </div>
                  </div>
                )}

                {/* Bar Chart */}
                {selectedChart === 'bar' && (
                  <div className="h-64 flex items-end gap-2">
                    {getChartData().bar.map((value, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          className="w-full bg-purple-500 rounded-t transition-all duration-300 hover:bg-purple-600"
                          style={{ height: `${(value / 150) * 200}px` }}
                         />
                        <span className="text-xs text-gray-500 dark:text-gray-400">{i + 1}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    {selectedMetric === 'inventory' && '92%'}
                    {selectedMetric === 'sales' && '+18%'}
                    {selectedMetric === 'fulfillment' && '98%'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Growth</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    {selectedMetric === 'inventory' && '12.5K'}
                    {selectedMetric === 'sales' && '$45.2K'}
                    {selectedMetric === 'fulfillment' && '2.3d'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    {selectedMetric === 'inventory' && '+8%'}
                    {selectedMetric === 'sales' && '+12%'}
                    {selectedMetric === 'fulfillment' && '+2%'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">vs Last Period</div>
                </div>
              </div>

              {/* Export Options */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 text-sm">
                  <HiOutlineDownload className="w-4 h-4" />
                  Export Report
                </button>
                <button className="flex-1 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center justify-center gap-2 text-sm">
                  <HiOutlineShare className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Row */}
        {config?.showMetrics && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            {config?.metrics?.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{metric.description}</div>
              </div>
            ))}
          </div>
        )}

        {/* Report Templates Preview */}
        {config?.showTemplates && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.templatesTitle || "Popular Report Templates"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.templatesDescription || "Ready-to-use templates for common analytics needs"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.reportTemplates?.map((template, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{template.icon}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{template.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {template.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-600 dark:text-purple-400">{template.frequency}</span>
                    <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 font-medium">
                      Preview →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-1 bg-gray-50 dark:bg-gray-800/50 rounded-full pl-6 pr-2 py-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to unlock actionable insights?"}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className={`${config?.ctaButton?.backgroundColor} ${config?.ctaButton?.textColor} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2`}
                aria-label="Start analyzing now"
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

export default ReportingAnalyticsSection2;