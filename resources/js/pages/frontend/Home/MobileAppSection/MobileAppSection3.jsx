// page/frontend/Home/MobileAppSection/MobileAppSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  FaApple,
  FaGooglePlay
} from 'react-icons/fa';
import {
  HiOutlineQrcode,
  HiOutlineCamera,
  HiOutlineBell,
  HiOutlineClock,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
  HiOutlineStar,
} from 'react-icons/hi';

const MobileAppSection3 = ({ config }) => {

  // States
  const [activeFeature, setActiveFeature] = useState(0);

  // Map icon string names to actual components
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'qrcode':
        return HiOutlineQrcode;
      case 'camera':
        return HiOutlineCamera;
      case 'bell':
        return HiOutlineBell;
      case 'clock':
        return HiOutlineClock;
      case 'cloud':
        return HiOutlineCloud;
      case 'shield':
      case 'shieldcheck':
        return HiOutlineShieldCheck;
      default:
        return HiOutlineQrcode;
    }
  };

  // Get color gradient based on icon name or feature color
  const getFeatureColor = (feature) => {
    if (feature.color) return feature.color;

    // Default colors based on icon
    switch (feature.icon) {
      case 'qrcode':
        return "from-blue-500 to-blue-600";
      case 'camera':
        return "from-indigo-500 to-indigo-600";
      case 'bell':
        return "from-purple-500 to-purple-600";
      case 'clock':
        return "from-pink-500 to-pink-600";
      case 'cloud':
        return "from-cyan-500 to-cyan-600";
      case 'shield':
      case 'shieldcheck':
        return "from-emerald-500 to-emerald-600";
      default:
        return "from-blue-500 to-blue-600";
    }
  };

  // Process features from config to include actual icon components
  const features = (config?.features || []).map(feature => ({
    ...feature,
    iconComponent: getIconComponent(feature.icon),
    color: getFeatureColor(feature)
  }));

  // Default features if none provided
  const defaultFeatures = [
    {
      icon: 'qrcode',
      iconComponent: HiOutlineQrcode,
      title: "Instant Scanning",
      description: "Scan barcodes and QR codes in real-time",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: 'camera',
      iconComponent: HiOutlineCamera,
      title: "Photo Capture",
      description: "Add photos to inventory items on the go",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: 'bell',
      iconComponent: HiOutlineBell,
      title: "Smart Alerts",
      description: "Get notified about low stock and movements",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: 'clock',
      iconComponent: HiOutlineClock,
      title: "Offline Mode",
      description: "Work without internet and sync later",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: 'cloud',
      iconComponent: HiOutlineCloud,
      title: "Cloud Sync",
      description: "Seamless sync across all your devices",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: 'shield',
      iconComponent: HiOutlineShieldCheck,
      title: "Biometric Security",
      description: "Secure access with fingerprint or face ID",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const activeFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(45deg,#e5e7eb_1px,transparent_1px),linear-gradient(-45deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,#374151_1px,transparent_1px),linear-gradient(-45deg,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Left Column - Features List */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4">
              Key Features
            </h3>
            {activeFeatures.map((feature, index) => {
              const Icon = feature.iconComponent;
              return (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 ${activeFeature === index
                    ? `bg-linear-to-r ${feature.color} text-white shadow-lg scale-[1.02]`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'
                    }`}
                >
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3 ${activeFeature === index
                    ? 'bg-white/20'
                    : 'bg-blue-100 dark:bg-blue-900/30'
                    }`}>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${activeFeature === index ? 'text-white' : 'text-blue-600 dark:text-blue-400'
                      }`} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-xs sm:text-sm">{feature.title}</h4>
                    <p className="text-[10px] sm:text-xs opacity-80">{feature.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center Column - Phone Mockup */}
          <div className="lg:col-span-1">
            <div className="relative mx-auto max-w-65 sm:max-w-70 md:max-w-[320px]">

              {/* Phone Frame */}
              <div className="relative bg-linear-to-br from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 rounded-[35px] sm:rounded-[40px] md:rounded-[48px] p-1.5 sm:p-2 shadow-2xl">

                {/* Screen */}
                <div className="bg-white dark:bg-gray-900 rounded-[30px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden">
                  <img
                    src={config?.screenshots?.[activeFeature] || config?.screenshots?.main || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=500&fit=crop"}
                    alt={`App feature - ${activeFeatures[activeFeature]?.title}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>

                {/* Dynamic Island */}
                <div className="absolute top-2 sm:top-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-18 md:w-20 h-4 sm:h-5 md:h-6 bg-black rounded-full" />
              </div>

              {/* Floating Feature Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[8px] sm:text-[10px] md:text-sm font-semibold shadow-xl">
                {activeFeatures[activeFeature]?.title}
              </div>

              {/* Rating Badge */}
              {config?.rating?.show && (
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-1.5 sm:p-2 md:p-3 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-0.5 sm:space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar
                          key={i}
                          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 ${i < (config.rating?.stars || 5)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-semibold text-gray-900 dark:text-white">
                      {config.rating?.score || "4.9"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Download Options */}
          <div className="lg:col-span-1 space-y-5 sm:space-y-6">

            {/* App Store Buttons */}
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Download App
              </h3>

              <div className="space-y-2.5 sm:space-y-3">
                {config?.appButtons?.ios && (
                  <Link
                    href={config.appButtons.ios.url}
                    className="flex items-center justify-between w-full bg-black dark:bg-white text-white dark:text-black px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <FaApple className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                      <div>
                        <p className="text-[8px] sm:text-[10px] opacity-80">Download on the</p>
                        <p className="text-[10px] sm:text-xs font-bold">App Store</p>
                      </div>
                    </div>
                    <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}

                {config?.appButtons?.android && (
                  <Link
                    href={config.appButtons.android.url}
                    className="flex items-center justify-between w-full bg-black dark:bg-white text-white dark:text-black px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <FaGooglePlay className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                      <div>
                        <p className="text-[8px] sm:text-[10px] opacity-80">Get it on</p>
                        <p className="text-[10px] sm:text-xs font-bold">Google Play</p>
                      </div>
                    </div>
                    <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>

              {/* QR Code */}
              {config?.qrCode?.show && (
                <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 mr-2 sm:mr-3">
                      <img
                        src={config.qrCode.image}
                        alt="QR Code"
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                        {config.qrCode.title}
                      </p>
                      <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">
                        {config.qrCode.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Stats Cards */}
            {config?.stats?.show && config?.stats?.items && (
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {config.stats.items.map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-md border border-gray-100 dark:border-gray-700 text-center">
                    <div className="text-sm sm:text-base md:text-lg font-bold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </div>
                    <div className="text-[8px] sm:text-[10px] text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Compatibility Note */}
            {config?.compatibility && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-100 dark:border-blue-800/30">
                <p className="text-[10px] sm:text-xs text-gray-700 dark:text-gray-300">
                  {config.compatibility}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        {config?.cta?.show && config?.cta?.text && (
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href={config.cta.url}
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base"
            >
              {config.cta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileAppSection3;