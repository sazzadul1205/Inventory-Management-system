// frontend/Testimonials/CustomerReviewsSection/CustomerReviewsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineStar,
  HiOutlineChatAlt,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlinePlay,
  HiOutlineSearch,
  HiOutlineBookmark,
  HiOutlineThumbUp,
  HiOutlineExternalLink
} from 'react-icons/hi';

const CustomerReviewsSection2 = ({ config }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [sortBy, setSortBy] = useState('recent');
  const [savedReviews, setSavedReviews] = useState([]);

  const testimonials = config?.testimonials || [];
  const filters = config?.filters || ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'];

  useEffect(() => {
    const saved = localStorage.getItem('savedReviews');
    if (saved) {
      setSavedReviews(JSON.parse(saved));
    }
  }, []);

  const handleSaveReview = (reviewId) => {
    setSavedReviews(prev => {
      const newSaved = prev.includes(reviewId)
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId];
      localStorage.setItem('savedReviews', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const handleLikeReview = (reviewId) => {
    // In production, this would call an API
    console.log('Liked review:', reviewId);
  };

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesFilter = activeFilter === 'all' || testimonial.industry === activeFilter;
    const matchesSearch = searchQuery === '' ||
      testimonial.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.quote.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'recent') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'helpful') return (b.helpfulCount || 0) - (a.helpfulCount || 0);
    return 0;
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

  const getIndustryColor = (industry) => {
    const colors = {
      retail: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      manufacturing: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      logistics: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
      healthcare: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
      food: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      electronics: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
    };
    return colors[industry] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Customer Reviews Gallery"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
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

        {/* Rating Summary */}
        {config?.showRatingSummary && (
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600">4.9</div>
                <div className="flex justify-center gap-0.5 my-1">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Verified Reviews</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Would Recommend</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">4.8</div>
                <div className="text-sm text-gray-600">Product Satisfaction</div>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search reviews by company, author, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                  }`}
              >
                {filter === 'all' ? 'All Industries' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="recent">Most Recent</option>
            <option value="rating">Highest Rated</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-500">
          Found {filteredTestimonials.length} reviews
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
            >
              {/* Review Header */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-lg">
                      {testimonial.avatar || testimonial.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleSaveReview(testimonial.id)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <HiOutlineBookmark
                        className={`w-4 h-4 ${savedReviews.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`}
                      />
                    </button>
                    <button
                      onClick={() => handleLikeReview(testimonial.id)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <HiOutlineThumbUp className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Rating and Date */}
                <div className="flex items-center justify-between mb-3">
                  {renderStars(testimonial.rating)}
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <HiOutlineCalendar className="w-3 h-3" />
                    {testimonial.date}
                  </span>
                </div>

                {/* Industry Badge */}
                <span className={`inline-block text-xs px-2 py-1 rounded-full mb-3 ${getIndustryColor(testimonial.industry)}`}>
                  {testimonial.industry}
                </span>

                {/* Quote */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-4">
                  "{testimonial.quote}"
                </p>

                {/* Results Highlight */}
                {testimonial.result && (
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-700 dark:text-green-400">
                        Result: {testimonial.result}
                      </span>
                    </div>
                  </div>
                )}

                {/* Helpful Count */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-xs text-gray-400">
                    {testimonial.helpfulCount || 0} people found this helpful
                  </div>
                  <button
                    onClick={() => setSelectedTestimonial(testimonial.id === selectedTestimonial ? null : testimonial.id)}
                    className="text-blue-600 text-xs font-semibold hover:underline"
                  >
                    Read Full Review
                  </button>
                </div>

                {/* Expanded Content */}
                {selectedTestimonial === testimonial.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        The Challenge
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {testimonial.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        The Solution
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {testimonial.solution}
                      </p>
                    </div>
                    <Link
                      href={testimonial.link}
                      className="inline-flex items-center gap-1 text-blue-600 text-xs font-semibold hover:gap-2 transition-all"
                    >
                      Read Full Case Study
                      <HiOutlineExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No reviews found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}

        {/* Featured Video Reviews */}
        {config?.showVideoReviews && config?.videoReviews?.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.videoTitle || "Video Reviews"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.videoReviews.map((video, index) => (
                <div key={index} className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <HiOutlinePlay className="w-6 h-6 text-blue-600 ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/70 to-transparent">
                    <div className="text-white font-semibold">{video.title}</div>
                    <div className="text-white/80 text-sm">{video.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Write Review CTA */}
        {config?.showWriteReview && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineChatAlt className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.writeReviewText || "Share your experience with us"}
              </span>
              <Link
                href={config?.writeReviewLink || "/submit-review"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2"
              >
                Write a Review
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
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

export default CustomerReviewsSection2;