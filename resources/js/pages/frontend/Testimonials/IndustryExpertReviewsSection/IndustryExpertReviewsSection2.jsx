// frontend/Testimonials/IndustryExpertReviewsSection/IndustryExpertReviewsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineStar,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineLightBulb,
  HiOutlineBookmark,
  HiOutlineAward,
  HiOutlineExternalLink,
  HiOutlineNewspaper,
  HiOutlineTrendingUp,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineDownload
} from 'react-icons/hi';

const IndustryExpertReviewsSection2 = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [showFilters, setShowFilters] = useState(false);
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

  const filteredReviews = reviews
    .filter(review => {
      const matchesCategory = activeCategory === 'all' || review.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        review.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.publication.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.quote.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      if (sortBy === 'name') return a.organization.localeCompare(b.organization);
      return 0;
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

  const featuredReviews = filteredReviews.filter(r => r.featured === true).slice(0, 2);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry Expert Reviews Dashboard"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-purple-50/30 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true"></div>

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

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              {stat.change && (
                <div className="text-xs text-green-600 mt-2 flex items-center justify-center gap-1">
                  <HiOutlineTrendingUp className="w-3 h-3" />
                  {stat.change}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Featured Reviews Carousel */}
        {featuredReviews.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Featured Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredReviews.map((review, index) => (
                <div key={review.id} className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
                  <div className="p-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <HiOutlineAward className="w-6 h-6 text-yellow-400" />
                      <span className="text-sm text-white/80">Featured Recognition</span>
                    </div>
                    <div className="text-4xl mb-3">{getCategoryIcon(review.category)}</div>
                    <p className="text-lg leading-relaxed mb-4 line-clamp-3">
                      "{review.quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold">{review.publication}</div>
                        <div className="text-sm text-white/70">{review.author}, {review.organization}</div>
                      </div>
                      {review.rating && (
                        <div>{renderStars(review.rating)}</div>
                      )}
                    </div>
                    <Link
                      href={review.link}
                      className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      Read Full Review
                      <HiOutlineExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search reviews by publication, author, or organization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <HiOutlineFilter className="w-4 h-4" />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="date">Most Recent</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Organization A-Z</option>
            </select>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-1 ${activeCategory === category
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                        }`}
                    >
                      <span>{getCategoryIcon(category)}</span>
                      {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[5, 4, 3].map((rating) => (
                    <button
                      key={rating}
                      className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:border-purple-500 transition-colors"
                    >
                      {rating}+ Stars
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <span className="text-sm text-gray-500">Found {filteredReviews.length} expert reviews</span>
          <button className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1">
            <HiOutlineDownload className="w-4 h-4" />
            Export Report
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-2xl">
                      {getCategoryIcon(review.category)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-lg">{review.publication}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <HiOutlineCalendar className="w-3 h-3" />
                        {review.date}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSaveReview(review.id)}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <HiOutlineBookmark
                      className={`w-5 h-5 ${savedReviews.includes(review.id) ? 'fill-purple-600 text-purple-600' : ''}`}
                    />
                  </button>
                </div>

                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getCategoryColor(review.category)}`}>
                    <span>{getCategoryIcon(review.category)}</span>
                    {review.category.charAt(0).toUpperCase() + review.category.slice(1)}
                  </span>
                </div>

                {review.rating && (
                  <div className="mb-3">
                    {renderStars(review.rating)}
                    <span className="text-xs text-gray-500 ml-2">{review.rating}.0/5.0</span>
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  "{review.quote}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{review.author}</div>
                    <div className="text-xs text-gray-500">{review.role}, {review.organization}</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setExpandedId(expandedId === review.id ? null : review.id)}
                      className="text-purple-600 text-xs font-semibold hover:underline"
                    >
                      {expandedId === review.id ? 'Less' : 'Read More'}
                    </button>
                    <Link
                      href={review.link}
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      <HiOutlineExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {expandedId === review.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {review.fullQuote || review.quote}
                    </p>
                    {review.highlights && (
                      <div className="mt-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                        <div className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-2 flex items-center gap-1">
                          <HiOutlineLightBulb className="w-3 h-3" />
                          Key Takeaways
                        </div>
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

        {/* Empty State */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📰</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No expert reviews found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}

        {/* Download Press Kit */}
        {config?.showPressKit && (
          <div className="text-center mb-12">
            <div className="bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">📁</div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete Press Kit</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Download all expert reviews, analyst reports, and awards in one package</p>
                  </div>
                </div>
                <Link
                  href={config?.pressKitLink || "/press-kit"}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all inline-flex items-center gap-2"
                >
                  <HiOutlineDownload className="w-5 h-5" />
                  Download Press Kit
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineNewspaper className="w-6 h-6 text-purple-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Want to see our full press coverage?"}
              </span>
              <Link
                href={config?.ctaLink || "/press"}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Visit Press Room"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS */}
      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
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

export default IndustryExpertReviewsSection2;