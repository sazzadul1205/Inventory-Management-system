// frontend/Testimonials/IndustryExpertReviewsSection/IndustryExpertReviewsSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineStar,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineBookmark,
  HiOutlineBadgeCheck,
  HiOutlineExternalLink,
  HiOutlineNewspaper,
} from 'react-icons/hi';
import { FaQuoteLeft } from "react-icons/fa";

const IndustryExpertReviewsSection1 = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [savedReviews, setSavedReviews] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const reviews = config?.reviews || [];
  const categories = config?.categories || ['all', 'analyst', 'media', 'consultant', 'award'];
  const stats = config?.stats || [];

  useEffect(() => {
    const saved = localStorage.getItem('savedExpertReviews');
    if (saved) {
      setSavedReviews(JSON.parse(saved));
    }
  }, []);

  const handleSaveReview = (id) => {
    setSavedReviews(prev => {
      const newSaved = prev.includes(id)
        ? prev.filter(savedId => savedId !== id)
        : [...prev, id];
      localStorage.setItem('savedExpertReviews', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const filteredReviews = reviews.filter(review => {
    return activeCategory === 'all' || review.category === activeCategory;
  });

  const getCategoryIcon = (category) => {
    const icons = {
      analyst: '📊',
      media: '📰',
      consultant: '💼',
      award: '🏆'
    };
    return icons[category] || '⭐';
  };

  const getCategoryColor = (category) => {
    const colors = {
      analyst: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      media: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      consultant: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      award: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
  };

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

  const featuredReview = filteredReviews.find(r => r.featured === true) || filteredReviews[0];

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Industry Expert Reviews"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-purple-50/30 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
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

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Expert Review */}
        {featuredReview && (
          <div className="mb-12 bg-linear-to-r from-purple-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 p-8 lg:p-10 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <HiOutlineBadgeCheck className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm text-white/80">Featured Review</span>
                </div>
                <FaQuoteLeft className="w-10 h-10 text-white/30 mb-3" />
                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                  "{featuredReview.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    {featuredReview.avatar || featuredReview.icon}
                  </div>
                  <div>
                    <div className="font-bold text-xl">{featuredReview.author}</div>
                    <div className="text-white/80">{featuredReview.role}, {featuredReview.organization}</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 p-8 flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-3">{getCategoryIcon(featuredReview.category)}</div>
                <div className="text-white font-bold text-2xl mb-1">{featuredReview.publication}</div>
                <div className="text-white/80 text-sm">{featuredReview.date}</div>
                {featuredReview.rating && (
                  <div className="mt-4">
                    {renderStars(featuredReview.rating)}
                  </div>
                )}
                <Link
                  href={featuredReview.link}
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                >
                  Read Full Review
                  <HiOutlineExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${activeCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                }`}
            >
              <span>{getCategoryIcon(category)}</span>
              {category === 'all' ? 'All Reviews' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getCategoryColor(review.category)}`}>
                    <span>{getCategoryIcon(review.category)}</span>
                    {review.category.charAt(0).toUpperCase() + review.category.slice(1)}
                  </span>
                  <button
                    onClick={() => handleSaveReview(review.id)}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <HiOutlineBookmark
                      className={`w-4 h-4 ${savedReviews.includes(review.id) ? 'fill-purple-600 text-purple-600' : ''}`}
                    />
                  </button>
                </div>

                <div className="mb-3">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{review.publication}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                    <HiOutlineCalendar className="w-3 h-3" />
                    {review.date}
                  </div>
                </div>

                {review.rating && (
                  <div className="mb-3">
                    {renderStars(review.rating)}
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4">
                  "{review.quote}"
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-sm">
                      {review.avatar || review.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{review.author}</div>
                      <div className="text-xs text-gray-500">{review.role}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setExpandedId(expandedId === review.id ? null : review.id)}
                    className="text-purple-600 text-xs font-semibold hover:underline"
                  >
                    {expandedId === review.id ? 'Show Less' : 'Read Full Review'}
                  </button>
                  <Link
                    href={review.link}
                    className="flex items-center gap-1 text-gray-500 text-xs hover:text-purple-600 transition-colors"
                  >
                    Source <HiOutlineExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                {expandedId === review.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {review.fullQuote || review.quote}
                    </p>
                    {review.highlights && (
                      <div className="mt-3">
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Highlights:</div>
                        <ul className="space-y-1">
                          {review.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                              <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Recognition */}
        {config?.showAwards && config?.awards?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.awardsTitle || "Awards & Recognition"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.awards.map((award, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all">
                  <div className="text-4xl mb-3">{award.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{award.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">{award.presentedBy}</p>
                  <p className="text-xs text-gray-400">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineNewspaper className="w-6 h-6 text-purple-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Want to see what the experts are saying?"}
              </span>
              <Link
                href={config?.ctaLink || "/press"}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "View Press Kit"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS */}
      <style>{`
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

export default IndustryExpertReviewsSection1;