// frontend/Testimonials/WrittenTestimonialsSection/WrittenTestimonialsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import { FaQuoteLeft } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import {
  HiOutlineStar,
  HiOutlineChatAlt,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineBookmark,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineThumbUp,
  HiOutlineDownload,
  HiOutlinePrinter,
  HiOutlineTrendingUp,
  HiOutlineBadgeCheck,
  HiOutlineExternalLink
} from 'react-icons/hi';

const WrittenTestimonialsSection3 = ({ config }) => {
  const [activeView, setActiveView] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [expandedId, setExpandedId] = useState(null);
  const [savedTestimonials, setSavedTestimonials] = useState([]);
  const [likedTestimonials, setLikedTestimonials] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [testimonialsData, setTestimonialsData] = useState([]);

  const testimonials = config?.testimonials || [];
  const categories = config?.categories || ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'];
  const stats = config?.stats || [];

  useEffect(() => {
    const saved = localStorage.getItem('savedWrittenTestimonials');
    if (saved) setSavedTestimonials(JSON.parse(saved));
    const liked = localStorage.getItem('likedWrittenTestimonials');
    if (liked) setLikedTestimonials(JSON.parse(liked));
    setTestimonialsData(testimonials);
  }, [testimonials]);

  const handleSaveTestimonial = (id) => {
    setSavedTestimonials(prev => {
      const newSaved = prev.includes(id) ? prev.filter(savedId => savedId !== id) : [...prev, id];
      localStorage.setItem('savedWrittenTestimonials', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const handleLikeTestimonial = (id) => {
    setLikedTestimonials(prev => {
      const newLiked = prev.includes(id) ? prev.filter(likedId => likedId !== id) : [...prev, id];
      localStorage.setItem('likedWrittenTestimonials', JSON.stringify(newLiked));
      setTestimonialsData(prevData =>
        prevData.map(t =>
          t.id === id ? { ...t, helpfulCount: (t.helpfulCount || 0) + (prev.includes(id) ? -1 : 1) } : t
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
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
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

  const handleExport = (format) => {
    console.log(`Exporting as ${format}...`);
    // In production, implement actual export functionality
    alert(`Exporting as ${format}... (Would generate file in production)`);
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Customer Testimonials Hub"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />

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

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              {stat.change && (
                <div className="text-xs text-green-600 mt-1 flex items-center justify-center gap-1">
                  <HiOutlineTrendingUp className="w-3 h-3" />
                  {stat.change}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        {featuredTestimonial && (
          <div className="mb-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 p-8 lg:p-10 text-white">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(featuredTestimonial.rating)}
                  <span className="text-sm text-white/80 ml-2">{featuredTestimonial.rating}.0</span>
                  <HiOutlineBadgeCheck className="w-5 h-5 text-yellow-400 ml-2" />
                </div>
                <FaQuoteLeft className="w-10 h-10 text-white/30 mb-3" />
                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                  "{featuredTestimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    {featuredTestimonial.avatar || featuredTestimonial.icon}
                  </div>
                  <div>
                    <div className="font-bold text-xl">{featuredTestimonial.author}</div>
                    <div className="text-white/80">{featuredTestimonial.role}, {featuredTestimonial.company}</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 p-8 flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-3">{featuredTestimonial.icon}</div>
                <div className="text-white font-bold text-3xl mb-1">{featuredTestimonial.keyMetric}</div>
                <div className="text-white/80 text-sm">improvement achieved</div>
                <div className="mt-6 flex gap-2">
                  <FaAward className="w-5 h-5 text-yellow-400" />
                  <span className="text-white text-sm">Featured Success Story</span>
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
              placeholder="Search testimonials by company, author, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <div className="flex border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveView('grid')}
                className={`px-4 py-3 transition-colors ${activeView === 'grid' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              >
                ⊞
              </button>
              <button
                onClick={() => setActiveView('list')}
                className={`px-4 py-3 transition-colors ${activeView === 'list' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              >
                ≡
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Industry</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm transition-all ${activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                        }`}
                    >
                      {category === 'all' ? 'All' : category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="recent">Most Recent</option>
                  <option value="rating">Highest Rated</option>
                  <option value="helpful">Most Helpful</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Export</label>
                <div className="flex gap-2">
                  <button onClick={() => handleExport('PDF')} className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-1">
                    <HiOutlineDownload className="w-4 h-4" /> PDF
                  </button>
                  <button onClick={() => handleExport('CSV')} className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-1">
                    <HiOutlineDownload className="w-4 h-4" /> CSV
                  </button>
                  <button onClick={() => handleExport('Print')} className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-1">
                    <HiOutlinePrinter className="w-4 h-4" /> Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <span className="text-sm text-gray-500">Found {filteredTestimonials.length} testimonials</span>
          <span className="text-xs text-gray-400">Last updated: {new Date().toLocaleDateString()}</span>
        </div>

        {/* Testimonials Grid/List */}
        <div className={`${activeView === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'} mb-12`}>
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden ${activeView === 'list' ? 'flex flex-col md:flex-row' : ''}`}
            >
              {activeView === 'list' ? (
                <>
                  <div className={`md:w-2/3 p-6 ${activeView === 'list' ? 'border-r border-gray-100 dark:border-gray-700' : ''}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-lg">
                          {testimonial.avatar || testimonial.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                          <div className="text-xs text-gray-500">{testimonial.company}</div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => handleSaveTestimonial(testimonial.id)} className="text-gray-400 hover:text-blue-600">
                          <HiOutlineBookmark className={`w-4 h-4 ${savedTestimonials.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(testimonial.rating)}
                      <span className="text-xs text-gray-400">{testimonial.date}</span>
                    </div>
                    <span className={`inline-block text-xs px-2 py-1 rounded-full mb-3 ${getCategoryColor(testimonial.category)}`}>
                      {testimonial.category}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                    <button onClick={() => setExpandedId(expandedId === testimonial.id ? null : testimonial.id)} className="text-blue-600 text-xs font-semibold mt-2 hover:underline">
                      {expandedId === testimonial.id ? 'Show Less' : 'Read Full Review'}
                    </button>
                  </div>
                  <div className="md:w-1/3 bg-gray-50 dark:bg-gray-700/50 p-6 flex flex-col justify-between">
                    {testimonial.result && (
                      <div className="mb-4">
                        <div className="text-xs text-gray-500 mb-1">Key Result</div>
                        <div className="text-sm font-semibold text-green-600">{testimonial.result}</div>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleLikeTestimonial(testimonial.id)} className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600">
                        <HiOutlineThumbUp className="w-3 h-3" /> {testimonial.helpfulCount || 0}
                      </button>
                      <Link href={testimonial.link} className="flex items-center gap-1 text-xs text-blue-600 hover:underline">
                        Case Study <HiOutlineExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-lg">
                        {testimonial.avatar || testimonial.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                        <div className="text-xs text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                    <button onClick={() => handleSaveTestimonial(testimonial.id)} className="text-gray-400 hover:text-blue-600">
                      <HiOutlineBookmark className={`w-4 h-4 ${savedTestimonials.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    {renderStars(testimonial.rating)}
                    <span className="text-xs text-gray-400">{testimonial.date}</span>
                  </div>
                  <span className={`inline-block text-xs px-2 py-1 rounded-full mb-3 ${getCategoryColor(testimonial.category)}`}>
                    {testimonial.category}
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                    "{testimonial.quote}"
                  </p>
                  {testimonial.result && (
                    <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center gap-1">
                        <HiOutlineCheckCircle className="w-3 h-3 text-green-600" />
                        <span className="text-xs text-green-700 dark:text-green-400">{testimonial.result}</span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100 dark:border-gray-700">
                    <button onClick={() => handleLikeTestimonial(testimonial.id)} className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600">
                      <HiOutlineThumbUp className="w-3 h-3" /> {testimonial.helpfulCount || 0}
                    </button>
                    <button onClick={() => setExpandedId(expandedId === testimonial.id ? null : testimonial.id)} className="text-blue-600 text-xs font-semibold">
                      {expandedId === testimonial.id ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                  {expandedId === testimonial.id && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{testimonial.fullQuote}</p>
                      <Link href={testimonial.link} className="inline-flex items-center gap-1 text-blue-600 text-xs font-semibold">
                        Read Full Case Study <HiArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No testimonials found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        {config?.showNewsletter && (
          <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Get the latest success stories</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Subscribe to receive new testimonials and case studies</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700" />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Subscribe</button>
            </div>
          </div>
        )}

        {/* Leave Review CTA */}
        {config?.showLeaveReview && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineChatAlt className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">{config?.leaveReviewText || "Share your experience with us"}</span>
              <Link href={config?.leaveReviewLink || "/submit-review"} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2">
                Write a Review <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-noise-pattern { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); background-repeat: repeat; background-size: 200px; }
      `}</style>
    </section>
  );
};

export default WrittenTestimonialsSection3;