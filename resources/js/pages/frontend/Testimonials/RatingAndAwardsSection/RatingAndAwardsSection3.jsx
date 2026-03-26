// frontend/Testimonials/RatingAndAwardsSection/RatingAndAwardsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
  HiOutlineStar,
  HiArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineChartPie,
  HiOutlineTrophy,
  HiOutlineSparkles
} from 'react-icons/hi';

const RatingAndAwardsSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const ratings = config?.ratings || [];
  const awards = config?.awards || [];
  const certifications = config?.certifications || [];
  const stats = config?.stats || [];
  const badges = config?.badges || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const targetValue = parseInt(stat.value.replace(/[^0-9.-]/g, '')) || 0;
        const suffix = stat.value.replace(/[0-9.-]/g, '');
        let current = 0;
        const increment = targetValue / 50;

        const interval = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setAnimatedStats(prev => ({ ...prev, [index]: stat.value }));
            clearInterval(interval);
          } else {
            setAnimatedStats(prev => ({ ...prev, [index]: Math.floor(current) + suffix }));
          }
        }, 30);

        return () => clearInterval(interval);
      });
    }
  }, [isVisible, stats]);

  const totalReviews = ratings.reduce((sum, r) => sum + r.reviewCount, 0);
  const weightedAvg = ratings.reduce((sum, r) => sum + (r.rating * r.reviewCount), 0) / totalReviews;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <HiOutlineStar key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />;
          } else if (i === fullStars && hasHalfStar) {
            return (
              <div key={i} className="relative">
                <HiOutlineStar className="w-6 h-6 text-gray-300 dark:text-gray-600" />
                <HiOutlineStar className="w-6 h-6 text-yellow-400 fill-yellow-400 absolute top-0 left-0 clip-half" />
              </div>
            );
          } else {
            return <HiOutlineStar key={i} className="w-6 h-6 text-gray-300 dark:text-gray-600" />;
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

  const featuredAwards = awards.filter(a => a.featured).slice(0, 3);
  const recentAwards = awards.filter(a => a.year === '2024').slice(0, 4);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Ratings & Awards Showcase"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-yellow-50/30 to-transparent dark:from-yellow-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 dark:bg-yellow-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-amber-100 dark:bg-amber-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

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

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-12">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'overview'
                ? 'text-yellow-600 border-b-2 border-yellow-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <HiOutlineChartPie className="w-4 h-4" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'awards'
                ? 'text-yellow-600 border-b-2 border-yellow-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <HiOutlineTrophy className="w-4 h-4" />
            Awards
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'certifications'
                ? 'text-yellow-600 border-b-2 border-yellow-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <HiOutlineBadgeCheck className="w-4 h-4" />
            Certifications
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Hero Rating Card */}
            <div className="bg-linear-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left text-white">
                  <div className="text-7xl font-bold mb-3">{weightedAvg.toFixed(1)}</div>
                  <div className="flex justify-center md:justify-start mb-3">
                    {renderStars(weightedAvg)}
                  </div>
                  <div className="text-lg mb-1">Exceptional</div>
                  <div className="text-white/80">
                    Based on {totalReviews.toLocaleString()} verified reviews
                  </div>
                </div>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const starCount = ratings.reduce((sum, r) => {
                      const ratingCount = r.breakdown?.find(b => b.star === star)?.count || 0;
                      return sum + ratingCount;
                    }, 0);
                    const percentage = (starCount / totalReviews) * 100;
                    return (
                      <div key={star} className="flex items-center gap-3">
                        <div className="w-12 text-sm font-medium text-white">{star} ★</div>
                        <div className="flex-1 h-3 bg-white/30 rounded-full overflow-hidden">
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

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                    {animatedStats[index] || stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Platform Ratings */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Customer Reviews Across Platforms
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ratings.map((rating, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{getPlatformIcon(rating.platform)}</span>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {rating.platform.charAt(0).toUpperCase() + rating.platform.slice(1)}
                        </div>
                        {rating.badge && (
                          <span className="text-xs text-green-600">{rating.badge}</span>
                        )}
                      </div>
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
                    <Link
                      href={rating.link}
                      className="inline-flex items-center gap-1 text-yellow-600 text-sm font-semibold hover:gap-2 transition-all"
                    >
                      Read reviews
                      <HiArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Awards Showcase */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Featured Awards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredAwards.map((award, index) => (
                  <div key={index} className="relative bg-linear-to-br from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center shadow-lg overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-200 dark:bg-yellow-900/30 rounded-bl-full opacity-50"></div>
                    <div className="text-5xl mb-3 relative z-10">{award.icon}</div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{award.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{award.presentedBy}</p>
                    <p className="text-xs text-yellow-600 font-semibold mb-3">{award.year}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                Trust & Security Badges
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="text-center cursor-pointer"
                    onMouseEnter={() => setSelectedBadge(index)}
                    onMouseLeave={() => setSelectedBadge(null)}
                  >
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">{badge.name}</div>
                    {selectedBadge === index && (
                      <div className="absolute mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-full whitespace-nowrap">
                        {badge.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Awards Tab */}
        {activeTab === 'awards' && (
          <div className="space-y-12">
            {/* Year Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-linear-to-r from-yellow-500 to-amber-500 rounded-2xl p-8 text-white text-center">
                <HiOutlineTrophy className="w-12 h-12 mx-auto mb-3" />
                <div className="text-4xl font-bold mb-2">2024</div>
                <div className="text-lg">2 New Awards</div>
                <div className="text-white/80 mt-2">G2 Leader & Global Supply Chain Excellence</div>
              </div>
              <div className="bg-linear-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white text-center">
                <HiOutlineSparkles className="w-12 h-12 mx-auto mb-3" />
                <div className="text-4xl font-bold mb-2">2023</div>
                <div className="text-lg">5 Major Awards</div>
                <div className="text-white/80 mt-2">Inc. 5000, AI Summit, Best Security & More</div>
              </div>
            </div>

            {/* All Awards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">{award.icon}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${award.year === '2024' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {award.year}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{award.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">{award.presentedBy}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{award.description}</p>
                  <Link
                    href={award.link}
                    className="inline-flex items-center gap-1 text-yellow-600 text-sm font-semibold mt-3 hover:gap-2 transition-all"
                  >
                    Learn more
                    <HiArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Award Timeline */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                Award Timeline
              </h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-yellow-500 to-amber-500"></div>
                <div className="space-y-8">
                  {awards.slice(0, 6).map((award, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="w-1/2"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-lg"></div>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                          <div className="text-xs text-yellow-600 font-semibold mb-1">{award.year}</div>
                          <div className="font-bold text-gray-900 dark:text-white">{award.title}</div>
                          <div className="text-xs text-gray-500">{award.presentedBy}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center">
                  <div className="text-5xl mb-3">{cert.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">Validated by {cert.validator}</p>
                  <p className="text-xs text-gray-400 mb-3">{cert.year}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
                </div>
              ))}
            </div>

            {/* Compliance Statement */}
            <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 text-center">
              <HiOutlineShieldCheck className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Enterprise-Grade Security & Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our platform meets the highest standards for security, privacy, and compliance,
                ensuring your data is always protected.
              </p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineStar className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Experience the award-winning platform yourself"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Start Free Trial"}
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

export default RatingAndAwardsSection3;