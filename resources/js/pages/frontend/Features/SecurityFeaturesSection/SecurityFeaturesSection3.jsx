// page/frontend/Features/SecurityFeaturesSection/SecurityFeaturesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineKey,
  HiOutlineUserGroup,
  HiOutlineEye,
  HiOutlineDocumentText,
  HiOutlineServer,
  HiOutlineClipboardList,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineFingerPrint,
  HiOutlineMail,
  HiOutlineGlobeAlt,
  HiOutlineRefresh,
  HiOutlineAlertTriangle,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineCloud,
  HiOutlineDatabase,
  HiOutlineCode
} from 'react-icons/hi';

const SecurityFeaturesSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('compliance');

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'lock':
        return <HiOutlineLockClosed className={className} />;
      case 'key':
        return <HiOutlineKey className={className} />;
      case 'users':
        return <HiOutlineUserGroup className={className} />;
      case 'eye':
        return <HiOutlineEye className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'server':
        return <HiOutlineServer className={className} />;
      case 'clipboard':
        return <HiOutlineClipboardList className={className} />;
      case 'fingerprint':
        return <HiOutlineFingerPrint className={className} />;
      case 'mail':
        return <HiOutlineMail className={className} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={className} />;
      case 'alert':
        return <HiOutlineAlertTriangle className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      case 'cloud':
        return <HiOutlineCloud className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'code':
        return <HiOutlineCode className={className} />;
      default:
        return <HiOutlineShieldCheck className={className} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Security Features Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-emerald-50/50 to-transparent dark:from-emerald-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-green-50/50 to-transparent dark:from-green-900/10 pointer-events-none" aria-hidden="true"></div>

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
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
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
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
              <div className="absolute inset-0 bg-linear-to-br from-emerald-600/0 via-emerald-600/0 to-emerald-600/5 dark:from-emerald-400/0 dark:via-emerald-400/0 dark:to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="p-8">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 bg-linear-to-br from-emerald-50 to-green-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-emerald-600 dark:text-emerald-400">
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
                    <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">
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
                      <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mr-2 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics display */}
                {feature.metrics && (
                  <div className="grid grid-cols-2 gap-3 mb-6 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{metric.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* View more link */}
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300 group/link"
                >
                  <span>Learn more</span>
                  <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-emerald-500/5 to-transparent rounded-tl-full pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Compliance & Certification Tabs */}
        {config?.showCompliance && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.complianceTitle || "Global Compliance & Certifications"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.complianceDescription || "Meet the highest security and privacy standards worldwide"}
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveTab('compliance')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'compliance'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                Compliance Standards
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'certifications'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                Security Certifications
              </button>
              <button
                onClick={() => setActiveTab('regions')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'regions'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                Data Residency
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
              {activeTab === 'compliance' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {config?.complianceStandards?.map((standard, index) => (
                    <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="text-3xl mb-2">{standard.icon}</div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{standard.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{standard.region}</div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'certifications' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {config?.securityCertifications?.map((cert, index) => (
                    <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="text-3xl mb-2">{cert.icon}</div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{cert.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cert.type}</div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'regions' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {config?.dataRegions?.map((region, index) => (
                    <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="text-3xl mb-2">{region.icon}</div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{region.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{region.location}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* AI-Powered Security Insights */}
        {config?.showAIInsights && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.aiInsightsTitle || "AI-Powered Security Intelligence"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.aiInsightsDescription || "Proactive threat detection and automated response"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.aiInsights?.map((insight, index) => (
                <div key={index} className="relative bg-linear-to-br from-emerald-50 to-green-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-emerald-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-4 right-4 text-2xl opacity-20">🤖</div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                      {getFeatureIcon(insight.icon, "w-6 h-6 text-emerald-600 dark:text-emerald-400")}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{insight.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{insight.description}</p>
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{insight.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security Architecture */}
        {config?.showArchitecture && (
          <div className="mb-20">
            <div className="bg-linear-to-r from-emerald-600 to-green-600 dark:from-emerald-700 dark:to-green-700 rounded-3xl overflow-hidden">
              <div className="px-8 py-12 md:px-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {config?.architectureTitle || "Zero-Trust Security Architecture"}
                    </h3>
                    <p className="text-emerald-100 mb-6">
                      {config?.architectureDescription || "Never trust, always verify. Our security model ensures continuous validation at every access point."}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        <span>Continuous authentication & authorization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        <span>Micro-segmentation & least privilege</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        <span>End-to-end encryption for all traffic</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {config?.securityLayers?.map((layer, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">{layer.icon}</div>
                        <div className="text-white font-semibold text-sm">{layer.name}</div>
                        <div className="text-emerald-200 text-xs mt-1">{layer.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Team & Support */}
        {config?.showSupport && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.supportTitle || "24/7 Security Operations Center"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.supportDescription || "Our dedicated security team monitors and protects your data around the clock"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.securitySupport?.map((support, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">{support.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{support.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{support.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to secure your operations?"}
              </span>
              <div className="flex gap-3">
                <Link
                  href={config?.ctaPrimaryLink || "/security-contact"}
                  className={`${config?.ctaButton?.primaryBackground || "bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-white`}
                >
                  {config?.ctaButton?.primaryText || "Contact Security Team"}
                  <HiArrowRight aria-hidden="true" />
                </Link>
                <Link
                  href={config?.ctaSecondaryLink || "/security-white-paper"}
                  className="px-6 py-3 bg-transparent border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 font-semibold rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 inline-flex items-center gap-2"
                >
                  {config?.ctaButton?.secondaryText || "Read White Paper"}
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

export default SecurityFeaturesSection3;