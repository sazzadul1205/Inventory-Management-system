// page/frontend/Home/NewsSection/NewsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import { FaRegNewspaper, FaRegFileAlt } from 'react-icons/fa';
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineNewspaper,
  HiOutlineFlag,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineSparkles,
  HiOutlineDocumentText,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from 'react-icons/hi';
import { HiOutlineMegaphone, HiOutlineTrophy } from "react-icons/hi2";

const NewsSection2 = ({ config }) => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = config?.pagination?.perPage || 6;

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get icon for news type
  const getNewsTypeIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'announcement':
        return <HiOutlineMegaphone className="w-4 h-4" />;
      case 'award':
        return <HiOutlineTrophy className="w-4 h-4" />;
      case 'update':
        return <HiOutlineFlag className="w-4 h-4" />;
      case 'press release':
      case 'press':
        return <HiOutlineDocumentText className="w-4 h-4" />;
      case 'case study':
        return <HiOutlineBriefcase className="w-4 h-4" />;
      case 'partnership':
        return <HiOutlineUsers className="w-4 h-4" />;
      default:
        return <HiOutlineNewspaper className="w-4 h-4" />;
    }
  };

  // Filter news based on category and search
  const filteredNews = config?.news?.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.type?.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.source || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.author?.name || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  // Get unique categories
  const categories = ['all', ...new Set(config?.news?.map(item => item.type) || [])];

  // Get stats
  const totalNews = config?.news?.length || 0;
  const totalAwards = config?.news?.filter(item => item.type === 'Award').length || 0;
  const totalAnnouncements = config?.news?.filter(item => item.type === 'Announcement').length || 0;

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="News section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-amber-200 dark:bg-amber-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-orange-200 dark:bg-orange-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-orange-500 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-amber-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "NEWS & UPDATES"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            {config?.description}
          </p>
        </div>

        {/* Stats Cards */}
        {config?.stats?.show && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mr-4">
                <FaRegNewspaper className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{totalNews}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total News Articles</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mr-4">
                <HiOutlineTrophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{totalAwards}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Awards & Recognition</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mr-4">
                <HiOutlineMegaphone className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{totalAnnouncements}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Announcements</div>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={config?.search?.placeholder || "Search news..."}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineFilter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={activeCategory}
              onChange={(e) => {
                setActiveCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-8 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none min-w-45"
            >
              <option value="all">All Categories</option>
              {categories.filter(c => c !== 'all').map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${activeCategory === category
                ? 'bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {category !== 'all' && (
                <span className="mr-1.5">
                  {getNewsTypeIcon(category)}
                </span>
              )}
              {category === 'all' ? 'All News' : category}
            </button>
          ))}
        </div>

        {/* Featured News Card (if no search) */}
        {config?.featured?.show && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-12">
            <div className="bg-linear-to-br from-amber-500 to-orange-500 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    FEATURED NEWS
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {config.featured.title}
                  </h3>
                  <p className="text-amber-100 mb-6">
                    {config.featured.excerpt}
                  </p>
                  <Link
                    href={config.featured.link}
                    className="inline-flex items-center bg-white text-amber-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors group"
                  >
                    Read More
                    <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="md:w-64 h-32 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={config.featured.image}
                    alt={config.featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentNews.map((item, index) => (
            <article
              key={item.id || index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* News Image */}
              <Link href={item.link} className="block relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-linear-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    {getNewsTypeIcon(item.type)}
                    <span className="ml-1">{item.type}</span>
                  </span>
                </div>
              </Link>

              {/* News Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mb-3">
                  <div className="flex items-center">
                    <HiOutlineCalendar className="w-3 h-3 mr-1" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <HiOutlineClock className="w-3 h-3 mr-1" />
                    <span>{item.readTime || '2 min read'}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  <Link href={item.link} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                    {item.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {item.excerpt}
                </p>

                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Source */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    {item.source ? (
                      <>
                        <FaRegFileAlt className="w-3 h-3 text-amber-500 mr-1" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {item.source}
                        </span>
                      </>
                    ) : item.author?.name ? (
                      <>
                        <div className="w-5 h-5 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mr-1">
                          <span className="text-amber-600 dark:text-amber-400 text-[10px] font-bold">
                            {item.author.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {item.author.name}
                        </span>
                      </>
                    ) : null}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {item.likes || 0} views
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {currentNews.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-12">
            <div className="w-20 h-20 bg-linear-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <HiOutlineSearch className="w-10 h-10 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              No news found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setCurrentPage(1);
              }}
              className="inline-flex items-center px-6 py-3 bg-linear-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg border ${currentPage === 1
                ? 'border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              <HiOutlineChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-medium ${currentPage === page
                  ? 'bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                  : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg border ${currentPage === totalPages
                ? 'border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              <HiOutlineChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* View All Button */}
        {config?.viewAll?.show && (
          <div className="text-center mt-12">
            <Link
              href={config.viewAll.url}
              className="inline-flex items-center bg-linear-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              {config.viewAll.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
};

export default NewsSection2;