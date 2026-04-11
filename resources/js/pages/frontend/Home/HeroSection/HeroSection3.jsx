// Pages/frontend/Home/HeroSection/HeroSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import { FaRocket, FaShieldAlt, FaClock } from 'react-icons/fa';
import {
  HiX,
  HiStar,
  HiPlay,
  HiUsers,
  HiTrendingUp,
  HiCheckCircle,
  HiTrendingDown,
  HiLightningBolt,
} from 'react-icons/hi';


const HeroSection3 = ({ config }) => {
  // Video modal
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Icon mapping function
  const getIcon = (iconName, className = "w-5 h-5") => {
    switch (iconName) {
      case 'lightningBolt':
        return <HiLightningBolt className={`${className} text-yellow-500 dark:text-yellow-400`} />;
      case 'play':
        return <HiPlay className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />;
      case 'rocket':
        return <FaRocket className={`${className} text-yellow-500 dark:text-yellow-400`} />;
      case 'shield':
        return <FaShieldAlt className={`${className} text-blue-500 dark:text-blue-400`} />;
      case 'clock':
        return <FaClock className={`${className} text-green-500 dark:text-green-400`} />;
      default:
        return null;
    }
  };

  // Render stars using react-icons
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<HiStar key={i} className="w-5 h-5 text-yellow-400 dark:text-yellow-500" />);
    }
    return stars;
  };

  return (
    <section className="relative bg-linear-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 dark:bg-gray-900/95">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="Close video"
            >
              <HiX className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-black dark:bg-gray-800 rounded-2xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${config?.video?.youtubeId}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={config?.video?.title || "Demo video"}
              />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">

            {/* Brand Highlight */}
            {config?.brand?.name && (
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-gray-800 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                {getIcon(config?.brand?.icon, "w-4 h-4 sm:w-5 sm:h-5")}
                <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400">
                  {config.brand.name}
                </span>
              </div>
            )}

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {config?.heading?.prefix}{' '}
              <span className="text-blue-600 dark:text-blue-400 relative">
                {config?.heading?.highlightedText}
              </span>{' '}
              {config?.heading?.suffix}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              {config?.description}
            </p>

            {/* Benefits List */}
            {config?.benefits && config.benefits.length > 0 && (
              <div className="space-y-3 sm:space-y-4">
                {config.benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-start space-x-3">
                    <HiCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 dark:text-green-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{benefit.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Section */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
              {config?.buttons?.primary && (
                <Link
                  href={config.buttons.primary.url}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {config.buttons.primary.text}
                </Link>
              )}

              {config?.buttons?.secondary && (
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="flex items-center px-5 sm:px-6 py-3 sm:py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-semibold transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  {getIcon(config.buttons.secondary.icon)}
                  {config.buttons.secondary.text}
                </button>
              )}
            </div>

            {/* Trust Badges */}
            {config?.trustBadges && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
                {config.trustBadges.avatars && (
                  <div className="flex -space-x-2">
                    {config.trustBadges.avatars.map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 border-2 border-white dark:border-gray-800 flex items-center justify-center"
                      >
                        <HiUsers className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    ))}
                  </div>
                )}
                {config.trustBadges.rating && (
                  <div>
                    <div className="flex items-center">
                      {renderStars(config.trustBadges.rating.stars)}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {config.trustBadges.rating.text}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Side - Interactive Dashboard Preview */}
          {config?.dashboard && (
            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                <img
                  src={config.dashboard.image?.src}
                  alt={config.dashboard.image?.alt || "Dashboard preview"}
                  className="w-full h-auto"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                {/* Live Stats Cards */}
                {config.dashboard.stats && (
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 grid grid-cols-2 gap-3 sm:gap-4">
                    {config.dashboard.stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl"
                      >
                        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                        <p className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                        {stat.trend && (
                          <div className="flex items-center mt-1 text-[10px] sm:text-xs">
                            {stat.trend === 'up' ? (
                              <HiTrendingUp className={`w-3 h-3 sm:w-4 sm:h-4 ${stat.trendColor || 'text-green-500'}`} />
                            ) : (
                              <HiTrendingDown className={`w-3 h-3 sm:w-4 sm:h-4 ${stat.trendColor || 'text-red-500'}`} />
                            )}
                            <span className="text-gray-400 dark:text-gray-500 ml-1">{stat.trendLabel}</span>
                          </div>
                        )}
                        {stat.showProgressBar && (
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 sm:h-1.5 mt-2">
                            <div
                              className="bg-green-600 dark:bg-green-500 h-1 sm:h-1.5 rounded-full"
                              style={{ width: `${stat.progressValue}%` }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Top Right Badge */}
                {config.dashboard.badge && (
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-blue-600 dark:bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg animate-pulse">
                    <p className="text-[10px] sm:text-xs md:text-sm font-semibold">{config.dashboard.badge.text}</p>
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-20 blur-2xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection3;