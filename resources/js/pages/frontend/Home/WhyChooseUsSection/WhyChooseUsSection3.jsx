// page/frontend/Home/WhyChooseUsSection/WhyChooseUsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
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
  // State for active feature
  const [activeFeature, setActiveFeature] = useState(0);

  // State for counter animation
  const [counters, setCounters] = useState({});

  // Counter animation effect
  useEffect(() => {
    if (config?.stats?.show) {
      const initialCounters = {};
      config.stats.items.forEach((stat, index) => {
        initialCounters[`stat-${index}`] = 0;
      });
      setCounters(initialCounters);

      const intervals = config.stats.items.map((stat, index) => {
        const targetValue = parseInt(stat.value.replace(/[^0-9]/g, ''));

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

      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, []);

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-amber-600 dark:text-amber-400`;

    switch (iconName) {
      case 'shield':
        return <HiOutlineShieldCheck className={iconClasses} aria-hidden="true" />;
      case 'lightning':
        return <HiOutlineLightningBolt className={iconClasses} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'cog':
        return <HiOutlineCog className={iconClasses} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={iconClasses} aria-hidden="true" />;
      case 'heart':
        return <HiOutlineHeart className={iconClasses} aria-hidden="true" />;
      case 'star':
        return <HiOutlineStar className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'award':
        return <FaAward className={iconClasses} aria-hidden="true" />;
      case 'thumb':
        return <HiOutlineThumbUp className={iconClasses} aria-hidden="true" />;
      case 'happy':
        return <HiOutlineEmojiHappy className={iconClasses} aria-hidden="true" />;
      case 'trending':
        return <HiOutlineTrendingUp className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCheckCircle className={iconClasses} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Why Choose Us section"
    >
      {/* Background Pattern - Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge with Icon */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-4 py-2 mb-6 shadow-lg shadow-amber-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "WHY CHOOSE US"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                {config?.heading?.highlightedText}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 0L300 12"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
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
        </div>

        {/* Hero Comparison Card */}
        {config?.comparison?.show && (
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Approach */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 opacity-75">
                <h3 className="text-xl font-bold text-gray-500 dark:text-gray-500 mb-4">
                  {config.comparison.traditional.title}
                </h3>
                <ul className="space-y-3">
                  {config.comparison.traditional.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-500 dark:text-gray-500">
                      <span className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600 mr-3 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sazzad Approach */}
              <div className="bg-linear-to-br from-amber-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl relative transform scale-105 z-10">
                <div className="absolute -top-4 -right-4">
                  <div className="bg-white text-amber-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    WINNER
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {config.comparison.sazzad.title}
                </h3>
                <ul className="space-y-3">
                  {config.comparison.sazzad.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <HiOutlineCheckCircle className="w-5 h-5 text-white mr-3 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Main Features Grid - 3 Column Layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {config?.features?.map((feature, index) => (
            <div
              key={feature.id || index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 cursor-pointer"
              onMouseEnter={() => setActiveFeature(index)}
              onClick={() => setActiveFeature(index)}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 to-pink-500/0 group-hover:from-amber-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-500" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(feature.icon, "w-8 h-8")}
                </div>
                {feature.popular && (
                  <div className="absolute -top-2 -right-2">
                    <span className="flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500" />
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 relative text-sm">
                {feature.description}
              </p>

              {/* Stats */}
              {feature.stat && (
                <div className="relative mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      {feature.stat.label}
                    </span>
                    <span className="text-2xl font-bold bg-linear-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
                      {feature.stat.value}
                    </span>
                  </div>
                </div>
              )}

              {/* Active Indicator */}
              {activeFeature === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-amber-500 to-pink-500 rounded-b-2xl" />
              )}
            </div>
          ))}
        </div>

        {/* Detailed Feature Showcase */}
        {config?.features && config.features[activeFeature] && (
          <div className="mb-20 bg-linear-to-br from-amber-50 to-pink-50 dark:from-amber-900/10 dark:to-pink-900/10 rounded-3xl p-8 md:p-12 border border-amber-100 dark:border-amber-800/30 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm uppercase tracking-wider">
                  FEATURE HIGHLIGHT
                </span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                  {config.features[activeFeature].title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {config.features[activeFeature].detailedDescription || config.features[activeFeature].description}
                </p>

                {/* Benefits List */}
                {config.features[activeFeature].benefits && (
                  <ul className="space-y-3 mb-6">
                    {config.features[activeFeature].benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <HiOutlineCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Metrics */}
                {config.features[activeFeature].metrics && (
                  <div className="grid grid-cols-2 gap-4">
                    {config.features[activeFeature].metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Image/Illustration */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={config.features[activeFeature].image || "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    alt={config.features[activeFeature].title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating Badge */}
                {config.features[activeFeature].badge && (
                  <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-pink-500 rounded-lg flex items-center justify-center">
                        {getIcon(config.features[activeFeature].badge.icon, "w-5 h-5 text-white")}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {config.features[activeFeature].badge.label}
                        </p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
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
        {config?.stats?.show && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200 dark:border-gray-800">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon, "w-8 h-8")}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {counters[`stat-${index}`] || 0}
                  {stat.value.replace(/[0-9]/g, '')}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Badges */}
        {config?.trustBadges?.show && (
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl px-8 py-4">
              {config.trustBadges.items.map((badge, index) => (
                <div key={index} className="flex items-center">
                  <HiOutlineShieldCheck className="w-5 h-5 text-amber-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              <span>{config.bottomCta.text}</span>
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #9ca3af 1px, transparent 0);
          background-size: 40px 40px;
        }
        .dark .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #4b5563 1px, transparent 0);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection3;