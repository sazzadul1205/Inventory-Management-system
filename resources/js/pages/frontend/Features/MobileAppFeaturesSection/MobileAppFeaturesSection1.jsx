// page/frontend/Features/MobileAppFeaturesSection/MobileAppFeaturesSection1.jsx

// React
import { Link } from '@inertiajs/react';

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
  HiOutlineLocationMarker,
  HiOutlineClipboardList,
  HiOutlineTruck,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineCloud,
  HiOutlineDatabase,
  HiOutlineChip,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineDesktopComputer,
  HiOutlineWifi,
} from 'react-icons/hi';
import { MdOutlineOfflineBolt } from "react-icons/md";

const MobileAppFeaturesSection1 = ({ config }) => {

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
      case 'download':
        return <HiOutlineDownload className={className} />;
      case 'cloud':
        return <HiOutlineCloud className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      case 'star':
        return <HiOutlineStar className={className} />;
      case 'desktop':
        return <HiOutlineDesktopComputer className={className} />;
      case 'wifi':
        return <HiOutlineWifi className={className} />;
      case 'offline':
        return <MdOutlineOfflineBolt className={className} />;
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
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-orange-200 dark:bg-orange-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-amber-200 dark:bg-amber-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
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

        {/* App Store Badges */}
        {config?.showAppBadges && (
          <div className="flex justify-center gap-4 mb-12">
            <Link
              href={config?.iosLink || "/app-store"}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg transition-transform hover:scale-105"
            >
              {getFeatureIcon("mobile", "text-xl")}
              <span className="text-sm font-medium">App Store</span>
            </Link>

            <Link
              href={config?.androidLink || "/play-store"}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg transition-transform hover:scale-105"
            >
              {getFeatureIcon("mobile", "text-xl")}
              <span className="text-sm font-medium">Google Play</span>
            </Link>
          </div>
        )}

        {/* Key Benefits Row */}
        {config?.benefits && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {config.benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-linear-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl border border-orange-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  {getFeatureIcon(benefit.icon, "w-6 h-6 text-orange-600 dark:text-orange-400")}
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
              <div className="w-16 h-16 bg-orange-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {getFeatureIcon(feature.icon, "w-8 h-8 text-orange-600 dark:text-orange-400")}
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
                    {getFeatureIcon("check", "w-5 h-5 text-orange-500 dark:text-orange-400 mr-2 shrink-0 mt-0.5")}
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Feature Link */}
              <Link
                href={feature.link}
                className="inline-flex items-center text-orange-600 dark:text-orange-400 font-semibold hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-300 group/link"
                aria-label={`Learn more about ${feature.title}`}
              >
                <span>Learn more</span>
                <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              {/* Decorative corner gradient */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-600/0 via-orange-600/0 to-orange-600/5 dark:from-orange-400/0 dark:via-orange-400/0 dark:to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Mobile App Screenshots Preview */}
        {config?.showScreenshots && (
          <div className="mt-20 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.screenshotsTitle || "App Experience"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.screenshotsDescription || "See the mobile app in action"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config?.screenshots?.map((screenshot, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-9/19 bg-linear-to-br from-orange-100 to-amber-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="mb-3 flex justify-center">
                        {getFeatureIcon(screenshot.icon, "w-12 h-12 text-orange-600 dark:text-orange-400")}
                      </div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{screenshot.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{screenshot.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Offline Capabilities */}
        {config?.showOffline && (
          <div className="mt-20 mb-20 bg-orange-50 dark:bg-orange-900/10 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-4">
                  {getFeatureIcon("offline", "w-12 h-12 text-orange-600 dark:text-orange-400")}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {config?.offlineTitle || "Works Offline"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {config?.offlineDescription || "Continue working even without internet connection. All data syncs automatically when you're back online."}
                </p>
                <ul className="space-y-2">
                  {config?.offlineFeatures?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      {getFeatureIcon("check", "w-5 h-5 text-orange-500")}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-orange-200 dark:bg-orange-800/50 rounded-full flex items-center justify-center">
                  {getFeatureIcon("sync", "w-16 h-16 text-orange-600 dark:text-orange-400")}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* App Features Highlights */}
        {config?.showAppHighlights && (
          <div className="mt-20 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.highlightsTitle || "Why Choose Our Mobile App"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.highlightsDescription || "Everything you need to manage your operations on the go"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config?.appHighlights?.map((highlight, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getFeatureIcon(highlight.icon, "w-7 h-7 text-orange-600 dark:text-orange-400")}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
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
                  {getFeatureIcon("download")}
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
        .aspect-9/19 {
          aspect-ratio: 9 / 19;
        }
      `}</style>
    </section>
  );
};

export default MobileAppFeaturesSection1;