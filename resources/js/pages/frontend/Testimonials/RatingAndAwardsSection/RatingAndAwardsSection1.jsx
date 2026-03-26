// frontend/Testimonials/RatingAndAwardsSection/RatingAndAwardsSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineStar,
  HiArrowRight,
} from 'react-icons/hi';

const RatingAndAwardsSection1 = ({ config }) => {
  const [activePlatform, setActivePlatform] = useState('all');
  const [hoveredRating, setHoveredRating] = useState(null);

  const platforms = config?.platforms || [];
  const awards = config?.awards || [];
  const ratings = config?.ratings || [];
  const stats = config?.stats || [];

  const filteredRatings = ratings.filter(rating => {
    return activePlatform === 'all' || rating.platform === activePlatform;
  });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />;
          } else if (i === fullStars && hasHalfStar) {
            return (
              <div key={i} className="relative">
                <HiOutlineStar className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                <HiOutlineStar className="w-5 h-5 text-yellow-400 fill-yellow-400 absolute top-0 left-0 clip-half" />
              </div>
            );
          } else {
            return <HiOutlineStar key={i} className="w-5 h-5 text-gray-300 dark:text-gray-600" />;
          }
        })}
      </div>
    );
  };

  const getPlatformIcon = (platform) => {
    const icons = {
      g2: '⭐',
      capterra: '📊',
      trustpilot: '🌐',
      google: '🔍',
      softwareadvice: '💻'
    };
    return icons[platform] || '⭐';
  };

  const getPlatformColor = (platform) => {
    const colors = {
      g2: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      capterra: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      trustpilot: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      google: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      softwareadvice: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
    };
    return colors[platform] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
  };

  const totalReviews = ratings.reduce((sum, r) => sum + r.reviewCount, 0);
  const weightedAvg = ratings.reduce((sum, r) => sum + (r.rating * r.reviewCount), 0) / totalReviews;

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Ratings & Awards"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-yellow-50/30 to-transparent dark:from-yellow-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 dark:bg-yellow-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Main Rating Card */}
        <div className="bg-linear-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="text-6xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                {weightedAvg.toFixed(1)}
              </div>
              <div className="flex justify-center md:justify-start mb-2">
                {renderStars(weightedAvg)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Based on {totalReviews.toLocaleString()} reviews
              </div>
            </div>
            <div className="col-span-2">
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => {
                  const starCount = ratings.reduce((sum, r) => {
                    const ratingCount = r.breakdown?.find(b => b.star === star)?.count || 0;
                    return sum + ratingCount;
                  }, 0);
                  const percentage = (starCount / totalReviews) * 100;
                  return (
                    <div key={star} className="flex items-center gap-3">
                      <div className="w-12 text-sm font-medium text-gray-600"> {star} ★</div>
                      <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 rounded-full transition-all duration-1000"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <div className="w-12 text-sm text-gray-500">{Math.round(percentage)}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Platform Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActivePlatform('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activePlatform === 'all'
                ? 'bg-yellow-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
              }`}
          >
            All Platforms
          </button>
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActivePlatform(platform.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${activePlatform === platform.id
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                }`}
            >
              <span>{getPlatformIcon(platform.id)}</span>
              {platform.name}
            </button>
          ))}
        </div>

        {/* Ratings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRatings.map((rating, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6"
              onMouseEnter={() => setHoveredRating(index)}
              onMouseLeave={() => setHoveredRating(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getPlatformIcon(rating.platform)}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getPlatformColor(rating.platform)}`}>
                    {rating.platform.charAt(0).toUpperCase() + rating.platform.slice(1)}
                  </span>
                </div>
                {rating.badge && (
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    {rating.badge}
                  </span>
                )}
              </div>
              <div className="mb-3">
                {renderStars(rating.rating)}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {rating.rating.toFixed(1)}
              </div>
              <div className="text-sm text-gray-500 mb-3">
                {rating.reviewCount.toLocaleString()} reviews
              </div>
              {rating.snippet && (
                <p className="text-sm text-gray-600 dark:text-gray-400 italic line-clamp-2">
                  "{rating.snippet}"
                </p>
              )}
              {hoveredRating === index && (
                <Link
                  href={rating.link}
                  className="mt-3 inline-flex items-center gap-1 text-yellow-600 text-sm font-semibold hover:gap-2 transition-all"
                >
                  Read reviews on {rating.platform}
                  <HiArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {config?.awardsTitle || "Awards & Recognition"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center">
                <div className="text-4xl mb-3">{award.icon}</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{award.title}</h4>
                <p className="text-sm text-gray-500 mb-2">{award.presentedBy}</p>
                <p className="text-xs text-gray-400">{award.year}</p>
                {award.description && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">{award.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineStar className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "See why our customers rate us 4.9 stars"}
              </span>
              <Link
                href={config?.ctaLink || "/reviews"}
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Read All Reviews"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .clip-half {
          clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default RatingAndAwardsSection1;