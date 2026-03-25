// page/frontend/Features/MobileAppFeaturesSection/MobileAppFeaturesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineDeviceMobile,
  HiOutlineQrcode,
  HiOutlineCamera,
  HiOutlineBell,
  HiOutlineChartBar,
  HiOutlineRefresh,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineLocationMarker,
  HiOutlineClipboardList,
  HiOutlineTruck,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineClock,
  HiOutlineChip,
  HiOutlineWifi,
  HiOutlineBatteryFull
} from 'react-icons/hi';

const MobileAppFeaturesSection3 = ({ config }) => {
  const [activePlatform, setActivePlatform] = useState('ios');

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} />;
      case 'qrcode':
        return <HiOutlineQrcode className={className} />;
      case 'camera':
        return <HiOutlineCamera className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'sync':
        return <HiOutlineRefresh className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'users':
        return <HiOutlineUserGroup className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'inventory':
        return <HiOutlineClipboardList className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'search':
        return <HiOutlineSearch className={className} />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'wifi':
        return <HiOutlineWifi className={className} />;
      default:
        return <HiOutlineDeviceMobile className={className} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Mobile App Features Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-orange-50/50 to-transparent dark:from-orange-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-amber-50/50 to-transparent dark:from-amber-900/10 pointer-events-none" aria-hidden="true"></div>

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
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
                <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Platform Selector */}
        {config?.showPlatformSelector && (
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActivePlatform('ios')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activePlatform === 'ios'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              <HiOutlineDeviceMobile className="w-5 h-5" />
              iOS App
            </button>
            <button
              onClick={() => setActivePlatform('android')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activePlatform === 'android'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              <HiOutlineDeviceMobile className="w-5 h-5" />
              Android App
            </button>
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
              <div className="absolute inset-0 bg-linear-to-br from-orange-600/0 via-orange-600/0 to-orange-600/5 dark:from-orange-400/0 dark:via-orange-400/0 dark:to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="p-8">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-orange-500/10 dark:bg-orange-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 bg-linear-to-br from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-orange-600 dark:text-orange-400">
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
                    <span className="px-2 py-0.5 text-xs font-semibold bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full">
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
                      <HiOutlineCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-400 mr-2 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Platform-specific badge */}
                {feature.platform && (
                  <div className="mb-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${feature.platform === 'both'
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                        : feature.platform === 'ios'
                          ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                          : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      }`}>
                      {feature.platform === 'both' ? 'iOS + Android' : feature.platform === 'ios' ? 'iOS Only' : 'Android Only'}
                    </span>
                  </div>
                )}

                {/* View more link */}
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-orange-600 dark:text-orange-400 font-semibold hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-300 group/link"
                >
                  <span>Learn more</span>
                  <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-orange-500/5 to-transparent rounded-tl-full pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Wearable Device Integration */}
        {config?.showWearable && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.wearableTitle || "Wearable Device Integration"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.wearableDescription || "Extend your reach to smartwatches and wearables"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.wearableDevices?.map((device, index) => (
                <div key={index} className="relative bg-linear-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-orange-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{device.icon}</div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{device.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{device.description}</p>
                    <div className="text-xs font-semibold text-orange-600 dark:text-orange-400">{device.features}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* App Features Showcase */}
        {config?.showFeaturesShowcase && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.showcaseTitle || "What's Inside the App"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.showcaseDescription || "Everything you need to manage your business on the go"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config?.appFeatures?.map((appFeature, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{appFeature.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{appFeature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{appFeature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security & Privacy Section */}
        {config?.showSecurity && (
          <div className="mb-20">
            <div className="bg-linear-to-r from-orange-600 to-amber-600 dark:from-orange-700 dark:to-amber-700 rounded-3xl overflow-hidden">
              <div className="px-8 py-12 md:px-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {config?.securityTitle || "Bank-Grade Security"}
                    </h3>
                    <p className="text-orange-100 mb-6">
                      {config?.securityDescription || "Your data is protected with enterprise-level security measures"}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        <span>End-to-end encryption</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        <span>Biometric authentication (Face ID / Fingerprint)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-5 h-5" />
                        <span>Remote wipe capabilities</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-2">
                        <HiOutlineShieldCheck className="w-10 h-10" />
                      </div>
                      <div className="text-white text-sm">Face ID</div>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-2">
                        <HiOutlineChip className="w-10 h-10" />
                      </div>
                      <div className="text-white text-sm">Secure Enclave</div>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-2">
                        <HiOutlineRefresh className="w-10 h-10" />
                      </div>
                      <div className="text-white text-sm">Auto-Lock</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* App Store Badges with Ratings */}
        {config?.showAppBadges && (
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="flex gap-4">
              <Link href={config?.iosLink || "/app-store"} className="transition-transform hover:scale-105">
                <img src="/images/app-store-badge.svg" alt="Download on App Store" className="h-12" />
              </Link>
              <Link href={config?.androidLink || "/play-store"} className="transition-transform hover:scale-105">
                <img src="/images/google-play-badge.svg" alt="Get it on Google Play" className="h-12" />
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span>4.9 (15,000+ reviews)</span>
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to take your operations mobile?"}
              </span>
              <div className="flex gap-3">
                <Link
                  href={config?.ctaPrimaryLink || "/download"}
                  className={`${config?.ctaButton?.primaryBackground || "bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-white`}
                >
                  {config?.ctaButton?.primaryText || "Download App"}
                  <HiOutlineDownload aria-hidden="true" />
                </Link>
                <Link
                  href={config?.ctaSecondaryLink || "/demo"}
                  className="px-6 py-3 bg-transparent border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 inline-flex items-center gap-2"
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

export default MobileAppFeaturesSection3;