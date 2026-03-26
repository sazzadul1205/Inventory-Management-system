// frontend/Testimonials/RatingAndAwardsSection/RatingAndAwardsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineStar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineTrendingUp,
  HiOutlineSearch,
  HiOutlineClock,
  HiOutlineEye,
} from 'react-icons/hi';

const RatingAndAwardsSection2 = ({ config }) => {
  const [activeYear, setActiveYear] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAward, setSelectedAward] = useState(null);
  const [hoveredRating, setHoveredRating] = useState(null);

  const awards = config?.awards || [];
  const ratings = config?.ratings || [];
  const stats = config?.stats || [];
  const years = ['all', ...new Set(awards.map(a => a.year))].sort().reverse();

  const filteredAwards = awards.filter(award => {
    const matchesYear = activeYear === 'all' || award.year === activeYear;
    const matchesCategory = activeCategory === 'all' || award.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      award.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      award.presentedBy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesCategory && matchesSearch;
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

  const getCategoryIcon = (category) => {
    const icons = {
      technology: '🔌',
      innovation: '💡',
      customer: '👥',
      growth: '📈',
      security: '🔒'
    };
    return icons[category] || '🏆';
  };

  const totalReviews = ratings.reduce((sum, r) => sum + r.reviewCount, 0);
  const weightedAvg = ratings.reduce((sum, r) => sum + (r.rating * r.reviewCount), 0) / totalReviews;

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Ratings & Awards Gallery"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-yellow-50/30 to-transparent dark:from-yellow-900/10 pointer-events-none" aria-hidden="true"></div>

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

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              {stat.trend && (
                <div className="text-xs text-green-600 mt-2 flex items-center justify-center gap-1">
                  <HiOutlineTrendingUp className="w-3 h-3" />
                  {stat.trend}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Rating Overview Card */}
        <div className="bg-linear-to-r from-yellow-500 to-amber-500 rounded-3xl p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left text-white">
              <div className="text-6xl font-bold mb-2">{weightedAvg.toFixed(1)}</div>
              <div className="flex justify-center md:justify-start mb-2">
                {renderStars(weightedAvg)}
              </div>
              <div className="text-sm text-white/80">
                Based on {totalReviews.toLocaleString()} reviews across all platforms
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
                      <div className="w-12 text-sm font-medium text-white">{star} ★</div>
                      <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full transition-all duration-1000"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <div className="w-12 text-sm text-white/80">{Math.round(percentage)}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Platform Ratings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ratings.map((rating, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 group"
              onMouseEnter={() => setHoveredRating(index)}
              onMouseLeave={() => setHoveredRating(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getPlatformIcon(rating.platform)}</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {rating.platform.charAt(0).toUpperCase() + rating.platform.slice(1)}
                  </span>
                </div>
                {rating.badge && (
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    {rating.badge}
                  </span>
                )}
              </div>
              <div className="mb-2">
                {renderStars(rating.rating)}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {rating.rating.toFixed(1)}
              </div>
              <div className="text-sm text-gray-500 mb-3">
                {rating.reviewCount.toLocaleString()} reviews
              </div>
              {rating.snippet && (
                <p className="text-sm text-gray-600 dark:text-gray-400 italic line-clamp-2 mb-3">
                  "{rating.snippet}"
                </p>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <HiOutlineClock className="w-3 h-3" />
                  <span>Updated {rating.lastUpdated}</span>
                </div>
                {hoveredRating === index && (
                  <Link
                    href={rating.link}
                    className="text-yellow-600 text-sm font-semibold hover:underline flex items-center gap-1"
                  >
                    Read Reviews
                    <HiArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section Header with Filters */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            {config?.awardsTitle || "Awards & Recognition"}
          </h3>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search awards by title or organization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={activeYear}
                onChange={(e) => setActiveYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year === 'all' ? 'All Years' : year}</option>
                ))}
              </select>
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="all">All Categories</option>
                <option value="technology">Technology</option>
                <option value="innovation">Innovation</option>
                <option value="customer">Customer Experience</option>
                <option value="growth">Growth</option>
                <option value="security">Security</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-500">Found {filteredAwards.length} awards</div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAwards.map((award, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer group"
              onClick={() => setSelectedAward(selectedAward === index ? null : index)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{award.icon}</div>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                    {award.year}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{award.title}</h4>
                <p className="text-sm text-gray-500 mb-2">{award.presentedBy}</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center gap-1">
                    <span>{getCategoryIcon(award.category)}</span>
                    {award.category.charAt(0).toUpperCase() + award.category.slice(1)}
                  </span>
                  {award.isNew && (
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">New</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {award.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <HiOutlineEye className="w-3 h-3" />
                    <span>Featured in {award.featuredIn}</span>
                  </div>
                  <button className="text-yellow-600 text-sm font-semibold group-hover:underline">
                    {selectedAward === index ? 'Show Less' : 'Learn More'}
                  </button>
                </div>

                {selectedAward === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {award.fullDescription || award.description}
                    </p>
                    {award.highlights && (
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 mb-3">
                        <div className="text-xs font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Key Highlights:</div>
                        <ul className="space-y-1">
                          {award.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                              <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Link
                      href={award.link}
                      className="inline-flex items-center gap-1 text-yellow-600 text-sm font-semibold hover:gap-2 transition-all"
                    >
                      View Award Details
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAwards.length === 0 && (
          <div className="text-center py-12 mb-12">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No awards found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}

        {/* Badges Section */}
        {config?.showBadges && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Trust Badges & Certifications
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {config?.badges?.map((badge, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">{badge.name}</div>
                  <div className="text-xs text-gray-400">{badge.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineStar className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Join our satisfied customers"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Started Today"}
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

export default RatingAndAwardsSection2;