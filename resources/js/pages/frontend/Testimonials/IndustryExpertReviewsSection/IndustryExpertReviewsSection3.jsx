// frontend/Testimonials/IndustryExpertReviewsSection/IndustryExpertReviewsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import { FaAward } from "react-icons/fa";
import {
  HiOutlineStar,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineNewspaper,
  HiOutlineTrendingUp,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineDocumentReport,
} from 'react-icons/hi';

const IndustryExpertReviewsSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [selectedYear, setSelectedYear] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  const [savedReviews, setSavedReviews] = useState([]);

  const reviews = config?.reviews || [];
  const reports = config?.reports || [];
  const awards = config?.awards || [];
  const timeline = config?.timeline || [];
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
      const matchesYear = selectedYear === 'all' || review.year === selectedYear;
      return matchesCategory && matchesSearch && matchesYear;
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
      award: '🏆',
      report: '📄'
    };
    return icons[category] || '⭐';
  };

  const getCategoryColor = (category) => {
    const colors = {
      analyst: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      media: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      consultant: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      award: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      report: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
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

  const years = ['all', ...new Set(reviews.map(r => r.year).filter(Boolean))].sort().reverse();

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Industry Expert Reviews Hub"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-purple-50/30 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
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
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">{stat.value}</div>
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

        {/* Timeline Milestones */}
        {timeline.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Recognition Timeline
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-purple-500 to-indigo-500" aria-hidden="true" />
              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10" />
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 hover:shadow-xl transition-all">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{event.icon}</span>
                          <span className="text-xs text-purple-600 font-semibold">{event.year}</span>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{event.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{event.description}</p>
                        {event.publication && (
                          <div className="mt-2 text-xs text-gray-500">{event.publication}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-8">
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'reviews'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <HiOutlineNewspaper className="w-4 h-4" />
            Expert Reviews
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'reports'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <HiOutlineDocumentReport className="w-4 h-4" />
            Analyst Reports
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'awards'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <FaAward className="w-4 h-4" />
            Awards & Recognition
          </button>
        </div>

        {/* Expert Reviews Tab */}
        {activeTab === 'reviews' && (
          <>
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search reviews by publication, author, or organization..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="all">All Categories</option>
                  <option value="analyst">Analyst</option>
                  <option value="media">Media</option>
                  <option value="consultant">Consultant</option>
                </select>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year === 'all' ? 'All Years' : year}</option>
                  ))}
                </select>
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

            {/* Results Count */}
            <div className="mb-6 flex justify-between items-center">
              <span className="text-sm text-gray-500">Found {filteredReviews.length} expert reviews</span>
              <button className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1">
                <HiOutlineDownload className="w-4 h-4" />
                Export
              </button>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {filteredReviews.map((review) => (
                <div key={review.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
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
                      <button onClick={() => handleSaveReview(review.id)} className="text-gray-400 hover:text-purple-600">
                        <HiOutlineBookmark className={`w-5 h-5 ${savedReviews.includes(review.id) ? 'fill-purple-600 text-purple-600' : ''}`} />
                      </button>
                    </div>

                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full mb-3 ${getCategoryColor(review.category)}`}>
                      {getCategoryIcon(review.category)} {review.category.charAt(0).toUpperCase() + review.category.slice(1)}
                    </span>

                    {review.rating && (
                      <div className="mb-3">{renderStars(review.rating)}</div>
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
                        <button onClick={() => setExpandedId(expandedId === review.id ? null : review.id)} className="text-purple-600 text-xs font-semibold">
                          {expandedId === review.id ? 'Less' : 'Read More'}
                        </button>
                        <Link href={review.link} className="text-gray-400 hover:text-purple-600">
                          <HiOutlineExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {expandedId === review.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{review.fullQuote}</p>
                        {review.highlights && (
                          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                            <div className="text-xs font-semibold text-purple-700 mb-2">Key Takeaways</div>
                            <ul className="space-y-1">
                              {review.highlights.map((h, i) => (
                                <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                                  <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5" />
                                  {h}
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
          </>
        )}

        {/* Analyst Reports Tab */}
        {activeTab === 'reports' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {reports.map((report, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-3xl">
                      {report.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">{report.title}</h3>
                      <div className="text-sm text-purple-600 font-semibold">{report.publisher}</div>
                      <div className="text-xs text-gray-500 mt-1">{report.date}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <HiOutlineStar className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-semibold">{report.rating}</span>
                      <span className="text-xs text-gray-500">/ 5.0</span>
                    </div>
                    <Link href={report.link} className="flex items-center gap-1 text-purple-600 text-sm font-semibold hover:gap-2 transition-all">
                      Download Report <HiOutlineDownload className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Awards Tab */}
        {activeTab === 'awards' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {awards.map((award, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all text-center p-6">
                <div className="text-5xl mb-3">{award.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{award.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{award.presentedBy}</p>
                <p className="text-xs text-purple-600 font-semibold">{award.year}</p>
                {award.description && (
                  <p className="text-xs text-gray-400 mt-3">{award.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {activeTab === 'reviews' && filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📰</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No reviews found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}

        {/* Press Kit CTA */}
        <div className="text-center mt-12">
          <div className="bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">📁</div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete Press Kit</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Download all expert reviews, analyst reports, and awards</p>
                </div>
              </div>
              <Link href={config?.pressKitLink || "/press-kit"} className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all inline-flex items-center gap-2">
                <HiOutlineDownload className="w-5 h-5" />
                Download Press Kit
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-noise-pattern { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); background-repeat: repeat; background-size: 200px; }
      `}</style>
    </section>
  );
};

export default IndustryExpertReviewsSection3;