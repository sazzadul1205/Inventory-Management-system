// page/frontend/Industries/HealthcareAndPharmaceuticalsSection/HealthcareAndPharmaceuticalsSection1.jsx

/**
 * Healthcare & Pharmaceuticals Section 1 Component
 * Showcases healthcare and pharmaceutical solutions with:
 * - Statistics display for healthcare metrics
 * - Tabbed content (Overview, Challenges, Solutions)
 * - Interactive feature highlights
 * - Compliance and security badges
 * - Regulatory compliance information
 * 
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineHeart,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineTrendingUp,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineQrcode,
  HiOutlineRefresh,
  HiOutlineChip,
  HiOutlineCloud,
  HiOutlineDocumentText,
  HiOutlinePlay,
  HiOutlineDownload,
  HiOutlineClipboard,
  HiOutlineClipboardList,
  HiOutlineBeaker,
  HiOutlineClipboardCheck
} from 'react-icons/hi';
import { MdOutlineMedication } from 'react-icons/md'

const HealthcareAndPharmaceuticalsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState(config?.initialTab || 'overview');  // Current active tab

  // ==================== DATA ====================
  const stats = config?.stats || [];
  const challenges = config?.challenges || [];
  const solutions = config?.solutions || [];
  const features = config?.features || {};

  // ==================== HELPER FUNCTIONS ====================
  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon
   * @param {string} className - CSS classes for the icon
   * @returns {JSX.Element} Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'heart': HiOutlineHeart,
      'chart': HiOutlineChartBar,
      'check': HiOutlineCheckCircle,
      'arrow': HiArrowRight,
      'bulb': HiOutlineLightBulb,
      'shield': HiOutlineShieldCheck,
      'trending': HiOutlineTrendingUp,
      'users': HiOutlineUsers,
      'clock': HiOutlineClock,
      'dollar': HiOutlineCurrencyDollar,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'sparkles': HiOutlineSparkles,
      'star': HiOutlineStar,
      'qrcode': HiOutlineQrcode,
      'refresh': HiOutlineRefresh,
      'chip': HiOutlineChip,
      'cloud': HiOutlineCloud,
      'document': HiOutlineDocumentText,
      'play': HiOutlinePlay,
      'download': HiOutlineDownload,
      'clipboard': HiOutlineClipboard,
      'clipboard-list': HiOutlineClipboardList,
      'pill': MdOutlineMedication,
      'beaker': HiOutlineBeaker,
      'clipboard-check': HiOutlineClipboardCheck
    };

    const IconComponent = icons[iconName] || HiOutlineHeart;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get tab configuration
   * @returns {Array} Tab configuration array
   */
  const getTabs = useCallback(() => {
    return [
      { id: 'overview', label: 'Overview', icon: 'heart' },
      { id: 'challenges', label: 'Key Challenges', icon: 'chart' },
      { id: 'solutions', label: 'Our Solutions', icon: 'bulb' }
    ];
  }, []);

  const tabs = getTabs();

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Healthcare & Pharmaceuticals Solutions Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-teal-50/30 to-transparent dark:from-teal-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-emerald-50/30 to-transparent dark:from-emerald-900/5 pointer-events-none" aria-hidden="true" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-teal-300/5 dark:bg-teal-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-emerald-300/5 dark:bg-emerald-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Industry badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* ==================== STATS GRID ==================== */}
        {config?.showStats && stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex justify-center mb-3">
                  {getIcon(stat.icon, "w-8 h-8 text-teal-600 dark:text-teal-400")}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all capitalize ${activeTab === tab.id
                ? 'text-teal-600 border-b-2 border-teal-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              aria-label={`Show ${tab.label} tab`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== TAB CONTENT ==================== */}
        <div className="mb-12 min-h-112.5">
          {/* Overview Tab */}
          {activeTab === 'overview' && config?.overview && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeIn">
              {/* Left Column - Text Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {config.overview.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {config.overview.description}
                </p>
                <div className="space-y-3">
                  {config.overview.highlights?.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {getIcon("check", "w-5 h-5 text-green-500 mt-0.5 shrink-0")}
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href={config.overview.ctaLink || "/demo"}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {config.overview.ctaText || "Explore Solutions"}
                    {getIcon("arrow", "w-4 h-4")}
                  </Link>
                </div>
              </div>

              {/* Right Column - Stats Cards */}
              <div className="relative">
                <div className="bg-linear-to-br from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-teal-100 dark:border-gray-700">
                  <div className="flex justify-center mb-5">
                    {getIcon("heart", "w-12 h-12 text-teal-600")}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {config.overview.statsCards?.map((card, idx) => (
                      <div key={idx} className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <div className="text-xl md:text-2xl font-bold text-teal-600 dark:text-teal-400 font-mono">
                          {card.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{card.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Challenges Tab */}
          {activeTab === 'challenges' && challenges.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex justify-center mb-3">
                    {getIcon(challenge.icon, "w-10 h-10 text-teal-600")}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {challenge.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Solutions Tab */}
          {activeTab === 'solutions' && solutions.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="p-6 bg-linear-to-br from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-teal-100 dark:border-gray-700 group"
                >
                  <div className="flex justify-center mb-4">
                    {getIcon(solution.icon, "w-10 h-10 text-teal-600")}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {solution.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center leading-relaxed mb-3">
                    {solution.description}
                  </p>
                  {solution.features && solution.features.length > 0 && (
                    <ul className="space-y-1.5 mt-3 pt-3 border-t border-teal-100 dark:border-gray-700">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                          {getIcon("check", "w-3 h-3 text-green-500 shrink-0")}
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ==================== KEY FEATURES ROW ==================== */}
        {config?.showFeatures && features?.items?.length > 0 && (
          <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
              {features.title || "Why Healthcare & Pharmaceutical Leaders Choose Us"}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {features.items.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-2">
                    {getIcon(feature.icon, "w-8 h-8 text-teal-600 group-hover:scale-110 transition-transform")}
                  </div>
                  <div className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{feature.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== COMPLIANCE & SECURITY BADGE ==================== */}
        {config?.showCompliance && (
          <div className="mb-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 bg-teal-50 dark:bg-teal-900/20 rounded-full">
              {getIcon("shield", "w-5 h-5 text-teal-600")}
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {config?.complianceText || "HIPAA Compliant | FDA 21 CFR Part 11 | GxP Ready"}
              </span>
            </div>
          </div>
        )}

        {/* ==================== SUCCESS METRICS BANNER ==================== */}
        {config?.showSuccessMetrics && config?.successMetrics && (
          <div className="mb-12 bg-linear-to-r from-teal-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
              {config.successMetrics.map((metric, index) => (
                <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-center mb-2">
                    {getIcon(metric.icon, "w-6 h-6 text-white")}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">{metric.value}</div>
                  <div className="text-sm text-teal-100 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-teal-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                {getIcon("heart", "w-6 h-6 text-teal-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to transform your healthcare operations?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Started Today"}
                {getIcon("arrow", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        /* Fade In Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        /* Noise Pattern Background */
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default HealthcareAndPharmaceuticalsSection1;