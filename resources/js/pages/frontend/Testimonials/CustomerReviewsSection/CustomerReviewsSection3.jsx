// frontend/Testimonials/CustomerReviewsSection/CustomerReviewsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useMemo } from 'react';

// Icons
import { FaAward } from "react-icons/fa";
import {
  HiOutlineStar,
  HiOutlineChatAlt,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlinePlay,
  HiOutlineThumbUp,
  HiOutlineBadgeCheck
} from 'react-icons/hi';

const CustomerReviewsSection3 = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedReview, setSelectedReview] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const reviews = config?.reviews || [];
  const categories = config?.categories || ['all', '5-star', '4-star', '3-star', 'verified'];
  const stats = useMemo(() => config?.stats || [], [config]);

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

  const filteredReviews = reviews.filter(review => {
    if (activeCategory === 'all') return true;
    if (activeCategory === '5-star') return review.rating === 5;
    if (activeCategory === '4-star') return review.rating === 4;
    if (activeCategory === '3-star') return review.rating === 3;
    if (activeCategory === 'verified') return review.isVerified;
    return true;
  });

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <HiOutlineStar
            key={i}
            className={`w-4 h-4 ${i < rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300 dark:text-gray-600'
              }`}
          />
        ))}
      </div>
    );
  };

  const getCategoryIcon = (category) => {
    const icons = {
      '5-star': '🌟',
      '4-star': '⭐',
      '3-star': '⭐',
      'verified': '✅'
    };
    return icons[category] || '📋';
  };

  const topReviews = [...filteredReviews].sort((a, b) => b.helpfulCount - a.helpfulCount).slice(0, 3);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Customer Reviews Showcase"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
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

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {config?.trustBadges?.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
              <span className="text-lg">{badge.icon}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {animatedStats[index] || stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              {stat.subtext && (
                <div className="text-xs text-gray-400 mt-1">{stat.subtext}</div>
              )}
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              <span>{getCategoryIcon(category)}</span>
              {category === 'all' ? 'All Reviews' : category === '5-star' ? '5 Star' : category === '4-star' ? '4 Star' : category === '3-star' ? '3 Star' : 'Verified Only'}
            </button>
          ))}
        </div>

        {/* Top Reviews Spotlight */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {config?.spotlightTitle || "Most Helpful Reviews"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topReviews.map((review, index) => (
              <div
                key={review.id}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                {index === 0 && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 rounded-bl-2xl flex items-center justify-center">
                    <FaAward className="w-6 h-6 text-white" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xl">
                      {review.avatar || review.icon}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {review.author}
                      </div>
                      <div className="text-xs text-gray-500">{review.company}</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4 line-clamp-4">
                    "{review.quote}"
                  </p>
                  {review.result && (
                    <div className="mb-4 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-green-700 dark:text-green-400">
                          {review.result}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <HiOutlineThumbUp className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-400">{review.helpfulCount} helpful</span>
                    </div>
                    <button
                      onClick={() => setSelectedReview(selectedReview === review.id ? null : review.id)}
                      className="text-blue-600 text-xs font-semibold hover:underline"
                    >
                      {selectedReview === review.id ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                  {selectedReview === review.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {review.fullQuote || review.quote}
                      </p>
                      <Link
                        href={review.link}
                        className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:gap-2 transition-all"
                      >
                        Read Full Case Study
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredReviews.slice(3).map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all p-5"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-lg shrink-0">
                  {review.avatar || review.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {review.author}
                      </div>
                      <div className="text-xs text-gray-500">{review.company}</div>
                    </div>
                    {review.isVerified && (
                      <HiOutlineBadgeCheck className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    {renderStars(review.rating)}
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <HiOutlineCalendar className="w-3 h-3" />
                      {review.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">
                    "{review.quote}"
                  </p>
                  {review.result && (
                    <div className="inline-block text-xs px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 rounded-full">
                      {review.result}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Purchase Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            <HiOutlineBadgeCheck className="w-4 h-4 text-blue-500" />
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {config?.verifiedText || "All reviews are from verified customers"}
            </span>
          </div>
        </div>

        {/* Video Testimonials */}
        {config?.showVideo && config?.videoTestimonials?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.videoTitle || "Video Testimonials"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.videoTestimonials.map((video, index) => (
                <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <HiOutlinePlay className="w-5 h-5 text-blue-600 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/70 to-transparent">
                    <div className="text-white text-sm font-semibold">{video.title}</div>
                    <div className="text-white/70 text-xs">{video.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Leave Review CTA */}
        {config?.showLeaveReview && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineChatAlt className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.leaveReviewText || "Have you used our platform? Share your experience"}
              </span>
              <Link
                href={config?.leaveReviewLink || "/submit-review"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2"
              >
                Write a Review
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}

        {/* Trust Signals */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            {config?.trustSignals?.map((signal, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl mb-1">{signal.icon}</div>
                <span className="text-xs text-gray-500">{signal.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Required CSS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
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

export default CustomerReviewsSection3;