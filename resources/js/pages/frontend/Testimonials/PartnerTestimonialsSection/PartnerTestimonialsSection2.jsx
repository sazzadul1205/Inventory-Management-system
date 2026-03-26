// frontend/Testimonials/PartnerTestimonialsSection/PartnerTestimonialsSection2.jsx

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
  HiOutlineHandshake,
  HiOutlineBadgeCheck,
  HiOutlineTrendingUp,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlinePlay,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi';

const PartnerTestimonialsSection2 = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [savedTestimonials, setSavedTestimonials] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const testimonials = config?.testimonials || [];
  const videoTestimonials = config?.videoTestimonials || [];
  const categories = config?.categories || ['all', 'technology', 'implementation', 'reseller', 'strategic'];
  const stats = config?.stats || [];

  useEffect(() => {
    const saved = localStorage.getItem('savedPartnerTestimonials');
    if (saved) {
      setSavedTestimonials(JSON.parse(saved));
    }
  }, []);

  const handleSaveTestimonial = (id) => {
    setSavedTestimonials(prev => {
      const newSaved = prev.includes(id)
        ? prev.filter(savedId => savedId !== id)
        : [...prev, id];
      localStorage.setItem('savedPartnerTestimonials', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const filteredTestimonials = testimonials
    .filter(testimonial => {
      const matchesCategory = activeCategory === 'all' || testimonial.category === activeCategory;
      const matchesSearch = searchQuery === '' ||
        testimonial.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.partnerType.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (sortBy === 'date') return new Date(b.partnerSince) - new Date(a.partnerSince);
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  const getCategoryIcon = (category) => {
    const icons = {
      technology: '🔌',
      implementation: '⚙️',
      reseller: '🤝',
      strategic: '🏆'
    };
    return icons[category] || '🤝';
  };

  const getCategoryColor = (category) => {
    const colors = {
      technology: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      implementation: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      reseller: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      strategic: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
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

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Partner Testimonials Gallery"
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

        {/* Partner Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
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

        {/* Video Testimonials Carousel */}
        {videoTestimonials.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.videoTitle || "Partner Video Testimonials"}
            </h3>
            <div className="relative">
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative aspect-video">
                  <img
                    src={videoTestimonials[currentVideo]?.thumbnail}
                    alt={videoTestimonials[currentVideo]?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <HiOutlinePlay className="w-8 h-8 text-blue-600 ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/70 to-transparent">
                    <div className="text-white text-xl font-bold">{videoTestimonials[currentVideo]?.title}</div>
                    <div className="text-white/80">{videoTestimonials[currentVideo]?.author}, {videoTestimonials[currentVideo]?.company}</div>
                  </div>
                </div>
              </div>
              {videoTestimonials.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  <button onClick={prevVideo} className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50">
                    <HiOutlineChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextVideo} className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50">
                    <HiOutlineChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search partners by name, company, or testimonial..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1 ${activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                    }`}
                >
                  <span>{getCategoryIcon(category)}</span>
                  {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="featured">Featured First</option>
              <option value="date">Newest First</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <span className="text-sm text-gray-500">Found {filteredTestimonials.length} partner testimonials</span>
          <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
            <HiOutlineDownload className="w-4 h-4" />
            Export
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden ${testimonial.featured ? 'border-l-4 border-blue-500' : ''
                }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xl">
                      {testimonial.avatar || testimonial.icon}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSaveTestimonial(testimonial.id)}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <HiOutlineBookmark
                      className={`w-5 h-5 ${savedTestimonials.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`}
                    />
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getCategoryColor(testimonial.category)}`}>
                    <span>{getCategoryIcon(testimonial.category)}</span>
                    {testimonial.partnerType}
                  </span>
                  {testimonial.featured && (
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                      <HiOutlineBadgeCheck className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <HiOutlineCalendar className="w-3 h-3" />
                    Partner since {testimonial.partnerSince}
                  </div>
                  {testimonial.rating && renderStars(testimonial.rating)}
                </div>

                {testimonial.results && (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {testimonial.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-green-600">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{testimonial.company}</div>
                  <button
                    onClick={() => setExpandedId(expandedId === testimonial.id ? null : testimonial.id)}
                    className="text-blue-600 text-sm font-semibold hover:underline"
                  >
                    {expandedId === testimonial.id ? 'Show Less' : 'Read Full Story'}
                  </button>
                </div>

                {expandedId === testimonial.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {testimonial.fullQuote || testimonial.quote}
                    </p>
                    {testimonial.collaboration && (
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                        <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-1">
                          <HiOutlineHandshake className="w-3 h-3" />
                          Collaboration Highlights
                        </div>
                        <ul className="space-y-1">
                          {testimonial.collaboration.map((item, idx) => (
                            <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                              <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Link
                      href={testimonial.link}
                      className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-3 hover:gap-2 transition-all"
                    >
                      Learn More About Partnership
                      <HiArrowRight className="w-4 h-4" />
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
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No partner testimonials found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}

        {/* Partner Success Metrics */}
        {config?.showSuccessMetrics && (
          <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Partner Success Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.successMetrics?.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Partner Program CTA */}
        {config?.showPartnerProgram && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineHandshake className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.partnerCtaText || "Join our growing partner ecosystem"}
              </span>
              <Link
                href={config?.partnerCtaLink || "/partners"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.partnerCtaButtonText || "Become a Partner"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

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

export default PartnerTestimonialsSection2;