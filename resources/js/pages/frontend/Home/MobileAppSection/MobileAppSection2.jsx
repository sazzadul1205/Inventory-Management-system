// page/frontend/Home/MobileAppSection/MobileAppSection2.jsx

// React
import { useState } from 'react';
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
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineDocumentText,
} from 'react-icons/hi';
import { FaApple, FaGooglePlay, FaQrcode } from 'react-icons/fa';

const MobileAppSection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: HiOutlineQrcode,
      title: "Barcode Scanning",
      description: "Scan barcodes instantly to update inventory levels"
    },
    {
      icon: HiOutlineCamera,
      title: "Photo Management",
      description: "Add and manage product photos on the go"
    },
    {
      icon: HiOutlineBell,
      title: "Smart Alerts",
      description: "Get notified about low stock and shipments"
    },
    {
      icon: HiOutlineClock,
      title: "Offline Mode",
      description: "Work offline and sync when connected"
    }
  ];

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Mobile app section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-blue-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "MOBILE APP"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            {config?.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - App Features Carousel */}
          <div className="order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
              {/* Feature Tabs */}
              <div className="flex space-x-1 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 p-3 rounded-xl transition-all duration-300 ${activeTab === index
                          ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      <Icon className="w-5 h-5 mx-auto" />
                    </button>
                  );
                })}
              </div>

              {/* Active Feature Content */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {activeTab === 0 && <HiOutlineQrcode className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                  {activeTab === 1 && <HiOutlineCamera className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                  {activeTab === 2 && <HiOutlineBell className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                  {activeTab === 3 && <HiOutlineClock className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {features[activeTab].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {features[activeTab].description}
                </p>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {config?.appButtons?.ios && (
                  <Link
                    href={config.appButtons.ios.url}
                    className="flex-1 inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black px-4 py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg group"
                  >
                    <FaApple className="w-5 h-5 mr-2" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs">Download on the</span>
                      <span className="text-sm font-bold">App Store</span>
                    </div>
                  </Link>
                )}

                {config?.appButtons?.android && (
                  <Link
                    href={config.appButtons.android.url}
                    className="flex-1 inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black px-4 py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg group"
                  >
                    <FaGooglePlay className="w-5 h-5 mr-2" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs">Get it on</span>
                      <span className="text-sm font-bold">Google Play</span>
                    </div>
                  </Link>
                )}
              </div>

              {/* QR Code */}
              {config?.qrCode?.show && (
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
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
                </div>
              )}
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-70">
              {/* Phone Frame */}
              <div className="relative bg-linear-to-br from-blue-600 to-indigo-600 rounded-[40px] p-2 shadow-2xl">
                <div className="bg-white dark:bg-gray-900 rounded-4xl overflow-hidden">
                  <img
                    src={config?.screenshots?.main || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"}
                    alt="App screenshot"
                    className="w-full h-auto"
                  />
                </div>

                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-black rounded-full"></div>
              </div>

              {/* Rating Card */}
              {config?.rating?.show && (
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar
                          key={i}
                          className={`w-3 h-3 ${i < config.rating.stars
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
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {config.rating.count} reviews
                  </p>
                </div>
              )}

              {/* Download Badge */}
              <div className="absolute -top-4 -left-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                {config?.downloadBadge || "FREE DOWNLOAD"}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        {config?.stats?.show && (
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials */}
        {config?.testimonials?.show && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What Our Users Say
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {config.testimonials.items.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <HiOutlineStar
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
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

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default MobileAppSection2;