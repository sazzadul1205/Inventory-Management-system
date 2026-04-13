// page/frontend/Home/MobileAppSection/MobileAppSection2.jsx

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
  HiOutlineStar,
  HiOutlineSparkles,
} from 'react-icons/hi';

const MobileAppSection2 = ({ config }) => {

  // Tabs 
  const [activeTab, setActiveTab] = useState(0);

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
      default:
        return HiOutlineQrcode;
    }
  };

  // Process features from config to include actual icon components
  const features = (config?.features || []).map(feature => ({
    ...feature,
    iconComponent: getIconComponent(feature.icon)
  }));

  // Default features if none provided
  const defaultFeatures = [
    {
      title: "Barcode Scanning",
      description: "Scan barcodes instantly to update inventory levels",
      icon: 'qrcode',
      iconComponent: HiOutlineQrcode
    },
    {
      title: "Photo Management",
      description: "Add and manage product photos on the go",
      icon: 'camera',
      iconComponent: HiOutlineCamera
    },
    {
      title: "Smart Alerts",
      description: "Get notified about low stock and shipments",
      icon: 'bell',
      iconComponent: HiOutlineBell
    },
    {
      title: "Offline Mode",
      description: "Work offline and sync when connected",
      icon: 'clock',
      iconComponent: HiOutlineClock
    }
  ];

  const activeFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-blue-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left - App Features Carousel */}
          <div className="order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-gray-100 dark:border-gray-700">

              {/* Feature Tabs */}
              <div className="flex space-x-0.5 sm:space-x-1 mb-6 sm:mb-8">
                {activeFeatures.map((feature, index) => {
                  const Icon = feature.iconComponent;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${activeTab === index
                        ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 mx-auto" />
                    </button>
                  );
                })}
              </div>

              {/* Active Feature Content */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {(() => {
                    const Icon = activeFeatures[activeTab]?.iconComponent;
                    return Icon ? <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-blue-600 dark:text-blue-400" /> : null;
                  })()}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {activeFeatures[activeTab]?.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {activeFeatures[activeTab]?.description}
                </p>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {config?.appButtons?.ios && (
                  <Link
                    href={config.appButtons.ios.url}
                    className="flex-1 inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg group"
                  >
                    <FaApple className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    <div className="flex flex-col items-start">
                      <span className="text-[8px] sm:text-[10px]">Download on the</span>
                      <span className="text-[10px] sm:text-xs font-bold">App Store</span>
                    </div>
                  </Link>
                )}

                {config?.appButtons?.android && (
                  <Link
                    href={config.appButtons.android.url}
                    className="flex-1 inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg group"
                  >
                    <FaGooglePlay className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    <div className="flex flex-col items-start">
                      <span className="text-[8px] sm:text-[10px]">Get it on</span>
                      <span className="text-[10px] sm:text-xs font-bold">Google Play</span>
                    </div>
                  </Link>
                )}
              </div>

              {/* QR Code */}
              {config?.qrCode?.show && (
                <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
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
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                        {config.qrCode.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-65 sm:max-w-70 md:max-w-[320px]">

              {/* Phone Frame */}
              <div className="relative bg-linear-to-br from-blue-600 to-indigo-600 rounded-[30px] sm:rounded-[35px] md:rounded-[40px] p-2 shadow-2xl">
                <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden">
                  <img
                    src={config?.screenshots?.main || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=500&fit=crop"}
                    alt="App screenshot"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>

                {/* Dynamic Island */}
                <div className="absolute top-2 sm:top-3 left-1/2 transform -translate-x-1/2 w-14 sm:w-16 h-4 sm:h-5 bg-black rounded-full" />
              </div>

              {/* Rating Card */}
              {config?.rating?.show && (
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar
                          key={i}
                          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < (config.rating?.stars || 5)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-900 dark:text-white">
                      {config.rating?.score || "4.9"}
                    </span>
                  </div>
                  <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">
                    {config.rating?.count || "10k+"} reviews
                  </p>
                </div>
              )}

              {/* Download Badge */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-semibold shadow-lg">
                {config?.downloadBadge || "FREE DOWNLOAD"}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials */}
        {config?.testimonials?.show && config?.testimonials?.items && (
          <div className="mt-12 sm:mt-16 md:mt-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              What Our Users Say
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {config.testimonials.items.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex mb-2 sm:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <HiOutlineStar
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-2 sm:mr-3">
                      {testimonial.avatar && (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileAppSection2;