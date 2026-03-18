// page/frontend/Home/MobileAppSection/MobileAppSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
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
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const MobileAppSection1 = ({ config }) => {
  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Mobile app section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            {config?.badge?.show && (
              <div
                className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 border ${config.badge.borderColor}`}
                aria-label="Mobile app badge"
              >
                {config.badge.showPulse && (
                  <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                )}
                <HiOutlineDeviceMobile className={`w-4 h-4 mr-2 ${config.badge.textColor}`} />
                <span className={`text-sm font-medium ${config.badge.textColor}`}>
                  {config.badge.text}
                </span>
              </div>
            )}

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
              {config?.heading?.prefix}{' '}
              <span className={`${config?.heading?.highlightColor}`}>
                {config?.heading?.highlightedText}
              </span>{' '}
              {config?.heading?.suffix}
            </h2>

            {/* Description */}
            {config?.description && (
              <p
                className="text-lg text-gray-600 dark:text-gray-400"
              >
                {config.description}
              </p>
            )}

            {/* Features List */}
            {config?.features?.show && (
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
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
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3 shrink-0">
                        <IconComponent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* App Store Buttons */}
            {config?.appButtons?.show && (
              <div className="flex flex-wrap gap-4 pt-6">
                {config.appButtons.ios && (
                  <Link
                    href={config.appButtons.ios.url}
                    className="inline-flex items-center bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <FaApple className="w-6 h-6 mr-2" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs">Download on the</span>
                      <span className="text-sm font-bold">App Store</span>
                    </div>
                  </Link>
                )}

                {config.appButtons.android && (
                  <Link
                    href={config.appButtons.android.url}
                    className="inline-flex items-center bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <FaGooglePlay className="w-6 h-6 mr-2" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs">Get it on</span>
                      <span className="text-sm font-bold">Google Play</span>
                    </div>
                  </Link>
                )}
              </div>
            )}

            {/* QR Code */}
            {config?.qrCode?.show && (
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-xl p-2">
                  <img
                    src={config.qrCode.image}
                    alt="QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {config.qrCode.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {config.qrCode.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Content - App Screenshots */}
          <div className="relative">
            {/* Main Phone Mockup */}
            <div className="relative mx-auto max-w-75">
              <div className="relative bg-linear-to-br from-blue-600 to-indigo-600 rounded-[40px] p-3 shadow-2xl">
                <div className="bg-white dark:bg-gray-900 rounded-4xl overflow-hidden">
                  <img
                    src={config?.screenshots?.main || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"}
                    alt="App screenshot"
                    className="w-full h-auto"
                  />
                </div>

                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              </div>

              {/* Floating Screenshots */}
              {config?.screenshots?.floating?.map((screenshot, index) => (
                <div
                  key={index}
                  className={`absolute ${screenshot.position} w-24 h-24 rounded-2xl shadow-xl overflow-hidden border-4 border-white dark:border-gray-800 hidden lg:block`}
                >
                  <img
                    src={screenshot.image}
                    alt="App feature"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Rating Badge */}
              {config?.rating?.show && (
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar
                          key={i}
                          className={`w-4 h-4 ${i < config.rating.stars
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {config.rating.score}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {config.rating.count} ratings
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {config?.stats?.show && (
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default MobileAppSection1;