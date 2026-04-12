// page/frontend/Home/WhyChooseUsSection/WhyChooseUsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// React Icons
import { FaAward } from "react-icons/fa";
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
  HiOutlineSparkles,
  HiOutlineThumbUp,
  HiOutlineEmojiHappy,
  HiOutlineTrendingUp
} from 'react-icons/hi';

const WhyChooseUsSection3 = ({ config }) => {

  // State for counter animation
  const [counters, setCounters] = useState({});

  // State for active feature
  const [activeFeature, setActiveFeature] = useState(0);

  // Counter animation effect
  useEffect(() => {
    if (config?.stats?.show && config?.stats?.items) {

      // Initialize counters
      const initialCounters = {};

      // Set initial counters
      config.stats.items.forEach((stat, index) => {
        initialCounters[`stat-${index}`] = 0;
      });

      // Set initial counters
      setCounters(initialCounters);

      // Start interval for each stat
      const intervals = config.stats.items.map((stat, index) => {

        // Get target value
        const targetValue = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;

        // Start interval
        return setInterval(() => {
          setCounters(prev => {
            const current = prev[`stat-${index}`] || 0;
            const increment = Math.ceil(targetValue / 50);
            const newValue = Math.min(current + increment, targetValue);

            return {
              ...prev,
              [`stat-${index}`]: newValue
            };
          });
        }, 30);
      });

      // Clear intervals on component unmount
      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [config?.stats?.items, config?.stats?.show]);

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-amber-600 dark:text-amber-400`;

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
      case 'award':
        return <FaAward className={iconClasses} />;
      case 'thumb':
        return <HiOutlineThumbUp className={iconClasses} />;
      case 'happy':
        return <HiOutlineEmojiHappy className={iconClasses} />;
      case 'trending':
        return <HiOutlineTrendingUp className={iconClasses} />;
      default:
        return <HiOutlineCheckCircle className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#9ca3af_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,#4b5563_1px,transparent_0)] bg-size-[40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-lg shadow-amber-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
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

        {/* Hero Comparison Card */}
        {config?.comparison?.show && (
          <div className="mb-16 sm:mb-20">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-8">

              {/* Traditional Approach */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 opacity-75">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 mb-3 sm:mb-4">
                  {config.comparison.traditional.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {config.comparison.traditional.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-300 dark:bg-gray-600 mr-2 sm:mr-3 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Approach */}
              <div className="bg-linear-to-br from-amber-500 to-pink-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white shadow-2xl relative transform scale-[1.02] z-10">
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3">
                  <div className="bg-white text-amber-600 px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold shadow-lg">
                    WINNER
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.comparison.sazzad.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {config.comparison.sazzad.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm">
                      <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2 sm:mr-3 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20">
          {config?.features?.map((feature, index) => (
            <div
              key={feature.id || index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 cursor-pointer"
              onMouseEnter={() => setActiveFeature(index)}
              onClick={() => setActiveFeature(index)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 to-pink-500/0 group-hover:from-amber-500/5 group-hover:to-pink-500/5 rounded-xl sm:rounded-2xl transition-all duration-500" />

              {/* Icon */}
              <div className="relative mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(feature.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7")}
                </div>
                {feature.popular && (
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                    <span className="flex h-3 w-3 sm:h-4 sm:w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-amber-500" />
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                {feature.description}
              </p>

              {/* Stats */}
              {feature.stat && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                      {feature.stat.label}
                    </span>
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-linear-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
                      {feature.stat.value}
                    </span>
                  </div>
                </div>
              )}

              {/* Active Indicator */}
              {activeFeature === index && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-linear-to-r from-amber-500 to-pink-500 rounded-b-xl sm:rounded-b-2xl" />
              )}
            </div>
          ))}
        </div>

        {/* Detailed Feature Showcase */}
        {config?.features && config.features[activeFeature] && (
          <div className="mb-16 sm:mb-20 bg-linear-to-br from-amber-50 to-pink-50 dark:from-amber-900/10 dark:to-pink-900/10 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-amber-100 dark:border-amber-800/30">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">

              {/* Left Content */}
              <div>
                <span className="text-amber-600 dark:text-amber-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">
                  FEATURE HIGHLIGHT
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-1 sm:mt-2 mb-2 sm:mb-4">
                  {config.features[activeFeature].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {config.features[activeFeature].detailedDescription || config.features[activeFeature].description}
                </p>

                {/* Benefits List */}
                {config.features[activeFeature].benefits && (
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {config.features[activeFeature].benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 mr-2 sm:mr-3 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Metrics */}
                {config.features[activeFeature].metrics && (
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {config.features[activeFeature].metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md">
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

              {/* Right Image */}
              <div className="relative">
                <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={config.features[activeFeature].image || "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    alt={config.features[activeFeature].title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Floating Badge */}
                {config.features[activeFeature].badge && (
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-amber-500 to-pink-500 rounded-lg flex items-center justify-center">
                        {getIcon(config.features[activeFeature].badge.icon, "w-4 h-4 sm:w-5 sm:h-5 text-white")}
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                          {config.features[activeFeature].badge.label}
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                          {config.features[activeFeature].badge.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Stats with Animated Counters */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-8 sm:py-12 border-t border-gray-200 dark:border-gray-800">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8")}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {counters[`stat-${index}`] || 0}
                  {stat.value.replace(/[0-9]/g, '')}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Badges */}
        {config?.trustBadges?.show && config?.trustBadges?.items && (
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4">
              {config.trustBadges.items.map((badge, index) => (
                <div key={index} className="flex items-center">
                  <HiOutlineShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mr-1 sm:mr-2" />
                  <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-linear-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group text-sm sm:text-base"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              <span>{config.bottomCta.text}</span>
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUsSection3;