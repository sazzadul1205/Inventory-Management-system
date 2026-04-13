// page/frontend/Home/MobileAppSection/MobileAppSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  FaApple,
  FaGooglePlay
} from 'react-icons/fa';
import {
  HiOutlineDeviceMobile,
  HiOutlineQrcode,
  HiOutlineCamera,
  HiOutlineBell,
  HiOutlineClock,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineStar,
} from 'react-icons/hi';

const MobileAppSection1 = ({ config }) => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">

            {/* Badge */}
            {config?.badge?.show && config?.badge?.text && (
              <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-blue-200 dark:border-gray-700">
                {config?.badge?.showPulse && (
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                  </span>
                )}
                <HiOutlineDeviceMobile className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-700 dark:text-gray-300" />
                <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                  {config.badge.text}
                </span>
              </div>
            )}

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {config?.heading?.prefix}{' '}
              <span className="text-blue-600 dark:text-blue-400">
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

            {/* Features List */}
            {config?.features?.show && config?.features?.items && (
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                {config.features.items.map((feature, index) => {
                  const IconComponent =
                    feature.icon === 'qrcode' ? HiOutlineQrcode :
                      feature.icon === 'camera' ? HiOutlineCamera :
                        feature.icon === 'bell' ? HiOutlineBell :
                          feature.icon === 'clock' ? HiOutlineClock :
                            feature.icon === 'cloud' ? HiOutlineCloud :
                              feature.icon === 'shield' ? HiOutlineShieldCheck :
                                HiOutlineStar;

                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shrink-0">
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* App Store Buttons */}
            {config?.appButtons?.show && (
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                {config.appButtons.ios && (
                  <Link
                    href={config.appButtons.ios.url}
                    className="inline-flex items-center bg-black dark:bg-white text-white dark:text-black px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <FaApple className="w-5 h-5 sm:w-6 sm:h-6 mr-1.5 sm:mr-2" />
                    <div className="flex flex-col items-start">
                      <span className="text-[8px] sm:text-[10px]">Download on the</span>
                      <span className="text-[10px] sm:text-xs md:text-sm font-bold">App Store</span>
                    </div>
                  </Link>
                )}

                {config.appButtons.android && (
                  <Link
                    href={config.appButtons.android.url}
                    className="inline-flex items-center bg-black dark:bg-white text-white dark:text-black px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <FaGooglePlay className="w-5 h-5 sm:w-6 sm:h-6 mr-1.5 sm:mr-2" />
                    <div className="flex flex-col items-start">
                      <span className="text-[8px] sm:text-[10px]">Get it on</span>
                      <span className="text-[10px] sm:text-xs md:text-sm font-bold">Google Play</span>
                    </div>
                  </Link>
                )}
              </div>
            )}

            {/* QR Code */}
            {config?.qrCode?.show && (
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 pt-2 sm:pt-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-100 dark:bg-gray-800 rounded-lg sm:rounded-xl p-1.5 sm:p-2">
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
            )}
          </div>

          {/* Right Content - App Screenshots */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-70 sm:max-w-[320px] md:max-w-90">

              {/* Main Phone Mockup */}
              <div className="relative bg-linear-to-br from-blue-600 to-indigo-600 rounded-[30px] sm:rounded-[35px] md:rounded-[40px] p-2.5 sm:p-3 shadow-2xl">
                <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden">
                  <img
                    src={config?.screenshots?.main || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"}
                    alt="App screenshot"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>

                {/* Dynamic Island */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-18 md:w-20 h-4 sm:h-5 md:h-6 bg-black rounded-full" />
              </div>

              {/* Floating Screenshots */}
              {config?.screenshots?.floating?.map((screenshot, index) => (
                <div
                  key={index}
                  className={`absolute ${screenshot.position} w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl shadow-xl overflow-hidden border-3 sm:border-4 border-white dark:border-gray-800 hidden lg:block`}
                >
                  <img
                    src={screenshot.image}
                    alt="App feature"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Rating Badge */}
              {config?.rating?.show && (
                <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-4 md:-bottom-6 md:-left-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${i < (config.rating?.stars || 5)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                      {config.rating?.score || "4.9"}
                    </span>
                  </div>
                  <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500 mt-0.5 sm:mt-1">
                    {config.rating?.count || "10k+"} ratings
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileAppSection1;