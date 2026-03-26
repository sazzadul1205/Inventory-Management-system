// frontend/Testimonials/WrittenTestimonialsSection/WrittenTestimonialsSection2.jsx

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
  HiOutlineQuote,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSearch,
  HiOutlineThumbUp
} from 'react-icons/hi';

const WrittenTestimonialsSection2 = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [expandedId, setExpandedId] = useState(null);
  const [savedTestimonials, setSavedTestimonials] = useState([]);
  const [likedTestimonials, setLikedTestimonials] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState([]);

  const testimonials = config?.testimonials || [];
  const categories = config?.categories || ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'];

  useEffect(() => {
    const saved = localStorage.getItem('savedWrittenTestimonials');
    if (saved) {
      setSavedTestimonials(JSON.parse(saved));
    }
    const liked = localStorage.getItem('likedWrittenTestimonials');
    if (liked) {
      setLikedTestimonials(JSON.parse(liked));
    }
    setTestimonialsData(testimonials);
  }, [testimonials]);

  const handleSaveTestimonial = (id) => {
    setSavedTestimonials(prev => {
      const newSaved = prev.includes(id)
        ? prev.filter(savedId => savedId !== id)
        : [...prev, id];
      localStorage.setItem('savedWrittenTestimonials', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const handleLikeTestimonial = (id) => {
    setLikedTestimonials(prev => {
      const newLiked = prev.includes(id)
        ? prev.filter(likedId => likedId !== id)
        : [...prev, id];
      localStorage.setItem('likedWrittenTestimonials', JSON.stringify(newLiked));

      // Update helpful count in UI
      setTestimonialsData(prevData =>
        prevData.map(t =>
          t.id === id
            ? { ...t, helpfulCount: (t.helpfulCount || 0) + (prev.includes(id) ? -1 : 1) }
            : t
        )
      );
      return newLiked;
    });
  };

  const filteredTestimonials = testimonialsData
    .filter(testimonial => {
      const matchesCategory = activeCategory === 'all' || testimonial.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        testimonial.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (testimonial.tags && testimonial.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
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

  const getCategoryColor = (category) => {
    const colors = {
      retail: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      manufacturing: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      logistics: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
      healthcare: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
      food: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      electronics: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
  };

  const featuredTestimonial = filteredTestimonials.find(t => t.rating === 5 && (t.helpfulCount || 0) > 50);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Customer Testimonials Gallery"
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

        {/* Featured Testimonial */}
        {featuredTestimonial && (
          <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(featuredTestimonial.rating)}
                  <span className="text-sm text-gray-500 ml-2">{featuredTestimonial.rating}.0</span>
                </div>
                <HiOutlineQuote className="w-10 h-10 text-blue-300 dark:text-blue-700 mb-3" />
                <p className="text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                  "{featuredTestimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xl">
                    {featuredTestimonial.avatar || featuredTestimonial.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {featuredTestimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {featuredTestimonial.role}, {featuredTestimonial.company}
                    </div>
                  </div>
                </div>
                {featuredTestimonial.result && (
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-green-700 dark:text-green-400">{featuredTestimonial.result}</span>
                  </div>
                )}
              </div>
              <div className={`bg-linear-to-br ${featuredTestimonial.gradient || 'from-blue-600 to-indigo-600'} p-8 flex flex-col items-center justify-center text-white`}>
                <div className="text-5xl mb-3">{featuredTestimonial.icon}</div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{featuredTestimonial.company}</div>
                  <div className="text-sm opacity-90">{featuredTestimonial.industry}</div>
                  <div className="mt-4 text-3xl font-bold">{featuredTestimonial.keyMetric}</div>
                  <div className="text-xs opacity-80">improvement achieved</div>
                </div>
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
              placeholder="Search by company, author, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                  }`}
              >
                {category === 'all' ? 'All Industries' : category.charAt(0).toUpperCase() + category.slice(1)}
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
          Found {filteredTestimonials.length} testimonials
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-lg">
                      {testimonial.avatar || testimonial.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleSaveTestimonial(testimonial.id)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <HiOutlineBookmark
                        className={`w-4 h-4 ${savedTestimonials.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`}
                      />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <HiOutlineShare className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  {renderStars(testimonial.rating)}
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <HiOutlineCalendar className="w-3 h-3" />
                    {testimonial.date}
                  </span>
                </div>

                <span className={`inline-block text-xs px-2 py-1 rounded-full mb-3 ${getCategoryColor(testimonial.category)}`}>
                  {testimonial.category}
                </span>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4">
                  "{expandedId === testimonial.id ? (testimonial.fullQuote || testimonial.quote) : testimonial.quote}"
                </p>

                {testimonial.result && expandedId === testimonial.id && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-700 dark:text-green-400">
                        Result: {testimonial.result}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleLikeTestimonial(testimonial.id)}
                      className={`flex items-center gap-1 text-xs transition-colors ${likedTestimonials.includes(testimonial.id)
                          ? 'text-blue-600'
                          : 'text-gray-400 hover:text-blue-600'
                        }`}
                    >
                      <HiOutlineThumbUp className="w-3 h-3" />
                      <span>{testimonial.helpfulCount || 0}</span>
                    </button>
                    <span className="text-xs text-gray-400">·</span>
                    <button
                      onClick={() => setExpandedId(expandedId === testimonial.id ? null : testimonial.id)}
                      className="text-blue-600 text-xs font-semibold hover:underline"
                    >
                      {expandedId === testimonial.id ? 'Show Less' : 'Read Full Review'}
                    </button>
                  </div>
                  {testimonial.tags && (
                    <div className="flex gap-1">
                      {testimonial.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {expandedId === testimonial.id && testimonial.fullQuote && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {testimonial.challenge && (
                      <div className="mb-3">
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Challenge:</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{testimonial.challenge}</p>
                      </div>
                    )}
                    {testimonial.solution && (
                      <div className="mb-3">
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Solution:</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{testimonial.solution}</p>
                      </div>
                    )}
                    <Link
                      href={testimonial.link}
                      className="inline-flex items-center gap-1 text-blue-600 text-xs font-semibold mt-2 hover:gap-2 transition-all"
                    >
                      Read Full Case Study
                      <HiArrowRight className="w-3 h-3" />
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
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No testimonials found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}

        {/* Leave Review CTA */}
        {config?.showLeaveReview && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineChatAlt className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.leaveReviewText || "Share your experience with us"}
              </span>
              <Link
                href={config?.leaveReviewLink || "/submit-review"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
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

export default WrittenTestimonialsSection2;