// page/frontend/Home/WhyChooseUsSection/WhyChooseUsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineCog,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineArrowRight,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineSparkles
} from 'react-icons/hi';

const WhyChooseUsSection2 = ({ config }) => {

  // State for active tab
  const [activeTab, setActiveTab] = useState(0);

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-blue-600 dark:text-blue-400`;

    switch (iconName) {
      case 'shield':
        return <HiOutlineShieldCheck className={iconClasses} />;
      case 'lightning':
        return <HiOutlineLightningBolt className={iconClasses} />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'cog':
        return <HiOutlineCog className={iconClasses} />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={iconClasses} />;
      case 'heart':
        return <HiOutlineHeart className={iconClasses} />;
      case 'star':
        return <HiOutlineStar className={iconClasses} />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} />;
      default:
        return <HiOutlineCheckCircle className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-blue-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
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

        {/* Stats Overview */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center p-4 sm:p-5 md:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main Content - Split Layout with Tabs */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={config?.image?.src || "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                alt={config?.image?.alt || "Why choose us"}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20" />

              {/* Floating Stats Card */}
              {config?.floatingStats?.show && (
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl border border-white/20 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                    <div className="flex items-center">
                      <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2" />
                      <span className="text-[10px] sm:text-xs md:text-sm text-gray-700 dark:text-gray-300">
                        {config.floatingStats.text || "Trusted by 500+ companies"}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">
                      {config.floatingStats.rating || "4.9★"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-purple-400 dark:bg-purple-600 rounded-full opacity-20 blur-xl" />
          </div>

          {/* Right Side - Content with Tabs */}
          <div className="space-y-4 sm:space-y-6">

            {/* Tab Navigation */}
            {config?.tabs && config.tabs.length > 0 && (
              <div className="flex flex-wrap gap-1 sm:gap-2 border-b border-gray-200 dark:border-gray-700 pb-1 sm:pb-2">
                {config.tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-t-lg transition-colors ${activeTab === index
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            )}

            {/* Active Tab Content */}
            {config?.tabs && config.tabs[activeTab] && (
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {config.tabs[activeTab].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {config.tabs[activeTab].description}
                </p>

                {/* Features List */}
                {config.tabs[activeTab].features && (
                  <ul className="space-y-2 sm:space-y-3">
                    {config.tabs[activeTab].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 mr-2 sm:mr-3 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Metrics */}
                {config.tabs[activeTab].metrics && (
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                    {config.tabs[activeTab].metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Features Grid */}
        {config?.features && config.features.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config?.featuresTitle || "What Sets Us Apart"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.features.map((feature, index) => (
                <div
                  key={feature.id || index}
                  className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    {getIcon(feature.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6")}
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial Highlight */}
        {config?.testimonial?.show && (
          <div className="mt-16 sm:mt-20 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-3xl mx-auto text-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 md:mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-4 sm:mb-6">
                "{config.testimonial.quote}"
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full" />
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-sm sm:text-base">{config.testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-blue-200">{config.testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group text-sm sm:text-base"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUsSection2;