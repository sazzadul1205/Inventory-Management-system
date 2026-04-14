// page/frontend/Features/IntegrationCapabilitiesSection/IntegrationCapabilitiesSection3.jsx

// ReactCiPlug1
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import { CiPlug1 } from "react-icons/ci";
import {
  HiOutlineCloud,
  HiOutlineDatabase,
  HiOutlineRefresh,
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineLockClosed,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineServer,
  HiOutlineShare,
  HiOutlineDocumentText,
  HiOutlineTerminal,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineShoppingCart,
  HiOutlineTruck,
  HiOutlineCreditCard,
  HiOutlineMail,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineCalendar,
  HiOutlineClipboardList,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineKey,
  HiOutlineFingerPrint
} from 'react-icons/hi';

const IntegrationCapabilitiesSection3 = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [setSelectedIntegration] = useState(null);

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'cloud':
        return <HiOutlineCloud className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'sync':
        return <HiOutlineRefresh className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'code':
        return <HiOutlineCode className={className} />;
      case 'lock':
        return <HiOutlineLockClosed className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'plug':
        return <CiPlug1 className={className} />;
      case 'server':
        return <HiOutlineServer className={className} />;
      case 'share':
        return <HiOutlineShare className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'terminal':
        return <HiOutlineTerminal className={className} />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      case 'star':
        return <HiOutlineStar className={className} />;
      case 'cart':
        return <HiOutlineShoppingCart className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'credit':
        return <HiOutlineCreditCard className={className} />;
      case 'mail':
        return <HiOutlineMail className={className} />;
      case 'lightning':
        return <HiOutlineLightningBolt className={className} />;
      case 'globe':
        return <HiOutlineGlobe className={className} />;
      case 'office':
        return <HiOutlineOfficeBuilding className={className} />;
      case 'users':
        return <HiOutlineUsers className={className} />;
      case 'calendar':
        return <HiOutlineCalendar className={className} />;
      case 'inventory':
        return <HiOutlineClipboardList className={className} />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'key':
        return <HiOutlineKey className={className} />;
      case 'fingerprint':
        return <HiOutlineFingerPrint className={className} />;
      default:
        return <CiPlug1 className={className} />;
    }
  };

  // Filter integrations by category
  const filteredIntegrations = activeCategory === 'all'
    ? config?.integrations
    : config?.integrations?.filter(i => i.category === activeCategory);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Integration Capabilities Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-teal-50/50 to-transparent dark:from-teal-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-cyan-50/50 to-transparent dark:from-cyan-900/10 pointer-events-none" aria-hidden="true" />

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
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
                <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
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
          {config?.features?.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-teal-600/0 via-teal-600/0 to-teal-600/5 dark:from-teal-400/0 dark:via-teal-400/0 dark:to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="p-8">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-teal-500/10 dark:bg-teal-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 bg-linear-to-br from-teal-50 to-cyan-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-teal-600 dark:text-teal-400">
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
                    <span className="px-2 py-0.5 text-xs font-semibold bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full">
                      New
                    </span>
                  )}
                  {feature.isPopular && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center gap-1">
                      {getFeatureIcon("star", "w-3 h-3")}
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
                      {getFeatureIcon("check", "w-4 h-4 text-teal-500 dark:text-teal-400 mr-2 shrink-0 mt-0.5")}
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics display */}
                {feature.metrics && (
                  <div className="grid grid-cols-2 gap-3 mb-6 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-teal-600 dark:text-teal-400">{metric.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* View more link */}
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300 group/link"
                >
                  <span>Learn more</span>
                  {getFeatureIcon("arrow", "ml-2 group-hover/link:translate-x-1 transition-transform")}
                </Link>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-teal-500/5 to-transparent rounded-tl-full pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Integration Marketplace */}
        {config?.showMarketplace && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.marketplaceTitle || "Integration Marketplace"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.marketplaceDescription || "Connect with 200+ popular apps and services"}
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === 'all'
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                All
              </button>
              {config?.categories?.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Integration Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredIntegrations?.map((integration, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedIntegration(integration)}
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform">
                    {getFeatureIcon(integration.icon, "w-10 h-10 text-teal-600 dark:text-teal-400")}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {integration.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {integration.category}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-teal-600 dark:text-teal-400">{integration.setupTime}</span>
                    {integration.isPopular && (
                      <span className="text-xs text-yellow-500 flex items-center gap-1">
                        {getFeatureIcon("star", "w-3 h-3")} Popular
                      </span>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-teal-600/5 dark:bg-teal-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI-Powered Integration Insights */}
        {config?.showAIInsights && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.aiInsightsTitle || "AI-Powered Integration Intelligence"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.aiInsightsDescription || "Smart recommendations for your integration needs"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.aiInsights?.map((insight, index) => (
                <div key={index} className="relative bg-linear-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-teal-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-4 right-4 opacity-20">
                    {getFeatureIcon("chip", "w-6 h-6")}
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                      {getFeatureIcon(insight.icon, "w-6 h-6 text-teal-600 dark:text-teal-400")}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{insight.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{insight.description}</p>
                    <div className="text-xs font-semibold text-teal-600 dark:text-teal-400">{insight.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Developer Resources */}
        {config?.showDeveloperResources && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.devResourcesTitle || "Developer Resources"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.devResourcesDescription || "Everything you need to build powerful integrations"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config?.developerResources?.map((resource, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-3">
                    {getFeatureIcon(resource.icon, "w-8 h-8 text-teal-600 dark:text-teal-400")}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{resource.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{resource.description}</p>
                  <Link
                    href={resource.link}
                    className="text-sm text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 inline-flex items-center gap-1"
                  >
                    Learn more
                    {getFeatureIcon("arrow", "w-3 h-3")}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enterprise Security & Compliance */}
        {config?.showSecurity && (
          <div className="mb-20">
            <div className="bg-linear-to-r from-teal-600 to-cyan-600 dark:from-teal-700 dark:to-cyan-700 rounded-3xl overflow-hidden">
              <div className="px-8 py-12 md:px-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {config?.securityTitle || "Enterprise-Grade Security"}
                    </h3>
                    <p className="text-teal-100 mb-6">
                      {config?.securityDescription || "Your data is protected with industry-leading security standards"}
                    </p>
                    <div className="space-y-3">
                      {config?.securityFeatures?.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          {getFeatureIcon("check", "w-5 h-5")}
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {config?.securityBadges?.map((badge, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="mb-2">
                          {getFeatureIcon(badge.icon, "w-8 h-8 text-white mx-auto")}
                        </div>
                        <div className="text-white font-semibold text-sm">{badge.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to connect your entire ecosystem?"}
              </span>
              <div className="flex gap-3">
                <Link
                  href={config?.ctaPrimaryLink || "/trial"}
                  className={`${config?.ctaButton?.primaryBackground || "bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-white`}
                >
                  {config?.ctaButton?.primaryText || "Start Building"}
                  {getFeatureIcon("arrow")}
                </Link>
                <Link
                  href={config?.ctaSecondaryLink || "/docs"}
                  className="px-6 py-3 bg-transparent border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 font-semibold rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 inline-flex items-center gap-2"
                >
                  {config?.ctaButton?.secondaryText || "View Documentation"}
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

export default IntegrationCapabilitiesSection3; 