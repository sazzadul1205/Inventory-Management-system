// page/frontend/Home/NewsSection/NewsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  FaTwitter,
  FaFacebookF,
  FaRegFileAlt,
  FaLinkedinIn,
  FaRegNewspaper,
} from 'react-icons/fa';
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineNewspaper,
  HiOutlineFlag,
  HiOutlineTag,
  HiOutlineBookmark,
  HiOutlineShare,
  HiOutlineExternalLink,
  HiOutlineSparkles,
  HiOutlineDocumentText,
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlineEye,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineMegaphone,
} from "react-icons/hi2";

const NewsSection3 = ({ config }) => {

  // State for active category
  const [bookmarked, setBookmarked] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');

  // Extract pagination data
  const newsPerPage = config?.pagination?.perPage || 4;

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Format month for archive
  const formatMonth = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get icon for news type
  const getNewsTypeIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'announcement':
        return <HiOutlineMegaphone className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'award':
        return <HiOutlineTrophy className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'update':
        return <HiOutlineFlag className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'press release':
      case 'press':
        return <HiOutlineDocumentText className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'case study':
        return <HiOutlineBriefcase className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'partnership':
        return <HiOutlineUsers className="w-3 h-3 sm:w-4 sm:h-4" />;
      default:
        return <HiOutlineNewspaper className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
  };

  // Get color for news type
  const getNewsTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'announcement':
        return 'bg-blue-500';
      case 'award':
        return 'bg-yellow-500';
      case 'update':
        return 'bg-green-500';
      case 'press release':
      case 'press':
        return 'bg-purple-500';
      case 'case study':
        return 'bg-indigo-500';
      case 'partnership':
        return 'bg-pink-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Filter news
  const filteredNews = config?.news?.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.type?.toLowerCase() === activeCategory.toLowerCase();
    const matchesMonth = selectedMonth === 'all' || formatMonth(item.date) === selectedMonth;
    return matchesCategory && matchesMonth;
  }) || [];

  // Get featured news
  const featuredNews = config?.featured?.show ? config.featured : config?.news?.[0];

  // Get unique categories
  const categories = ['all', ...new Set(config?.news?.map(item => item.type) || [])];

  // Get archive months
  const months = ['all', ...new Set(config?.news?.map(item => formatMonth(item.date)) || [])];

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, endIndex);

  // Handle bookmark
  const toggleBookmark = (id) => {
    setBookmarked(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(45deg,#e5e7eb_1px,transparent_1px),linear-gradient(-45deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,#374151_1px,transparent_1px),linear-gradient(-45deg,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Main Column - Featured + Grid */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">

            {/* Featured Article */}
            {featuredNews && (
              <article className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-0">

                  {/* Featured Image */}
                  <div className="relative h-56 sm:h-64 md:h-full overflow-hidden">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent md:bg-linear-to-r" />

                    {/* Type Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className={`${getNewsTypeColor(featuredNews.type)} text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold shadow-lg flex items-center`}>
                        {getNewsTypeIcon(featuredNews.type)}
                        <span className="ml-0.5 sm:ml-1 md:ml-2">{featuredNews.type}</span>
                      </span>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="bg-amber-500 text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold shadow-lg flex items-center">
                        <HiOutlineSparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-0.5 sm:mr-1" />
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="p-4 sm:p-5 md:p-6 lg:p-8">

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mb-2 sm:mb-3 md:mb-4">
                      <span className="flex items-center">
                        <HiOutlineCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                        {formatDate(featuredNews.date)}
                      </span>
                      <span className="flex items-center">
                        <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                        {featuredNews.readTime || '3 min read'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                      <Link href={featuredNews.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {featuredNews.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 md:mb-6 line-clamp-3">
                      {featuredNews.excerpt}
                    </p>

                    {/* Source Info */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center">
                        {featuredNews.source && (
                          <>
                            <FaRegFileAlt className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1 sm:mr-2" />
                            <span className="text-[10px] sm:text-xs font-medium text-gray-700 dark:text-gray-300">
                              {featuredNews.source}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Engagement Stats */}
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="flex items-center text-gray-500 dark:text-gray-500">
                          <HiOutlineEye className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                          <span className="text-[10px] sm:text-xs">{featuredNews.views || featuredNews.likes || 0}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                      <Link
                        href={featuredNews.link}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group text-xs sm:text-sm"
                      >
                        Read Full Story
                        <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Latest News Grid */}
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                  Latest News
                </h3>
                <Link
                  href="/news"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-xs sm:text-sm font-semibold flex items-center"
                >
                  View All
                  <HiOutlineArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {paginatedNews.map((item, index) => (
                  <article
                    key={item.id || index}
                    className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex flex-col sm:flex-row">

                      {/* Thumbnail */}
                      <Link href={item.link} className="sm:w-28 md:w-32 h-28 sm:h-32 overflow-hidden shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                      </Link>

                      {/* Content */}
                      <div className="flex-1 p-3 sm:p-4 md:p-5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            {/* Type and Date */}
                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                              <span className={`${getNewsTypeColor(item.type)} text-white px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] flex items-center`}>
                                {getNewsTypeIcon(item.type)}
                                <span className="ml-0.5 sm:ml-1">{item.type}</span>
                              </span>
                              <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 flex items-center">
                                <HiOutlineCalendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                                {formatDate(item.date)}
                              </span>
                            </div>

                            {/* Title */}
                            <h4 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 line-clamp-1">
                              <Link href={item.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {item.title}
                              </Link>
                            </h4>

                            {/* Excerpt */}
                            <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                              {item.excerpt}
                            </p>
                          </div>

                          {/* Bookmark Button */}
                          <button
                            onClick={() => toggleBookmark(item.id)}
                            className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0"
                          >
                            <HiOutlineBookmark
                              className={`w-3 h-3 sm:w-4 sm:h-4 ${bookmarked.includes(item.id)
                                ? 'text-blue-600 fill-blue-600'
                                : 'text-gray-400'
                                }`}
                            />
                          </button>
                        </div>

                        {/* Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                            {item.source && (
                              <>
                                <FaRegFileAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                <span>{item.source}</span>
                              </>
                            )}
                            {item.tags && item.tags[0] && (
                              <>
                                <HiOutlineTag className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                <span>#{item.tags[0]}</span>
                              </>
                            )}
                          </div>
                          <div className="flex items-center space-x-1.5 sm:space-x-2">
                            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                              <HiOutlineShare className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                            </button>
                            <Link
                              href={item.link}
                              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                            >
                              <HiOutlineExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-1.5 sm:space-x-2 mt-6 sm:mt-8">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-1.5 sm:p-2 rounded-lg border ${currentPage === 1
                      ? 'border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                  >
                    <HiOutlineChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg font-medium text-xs sm:text-sm ${currentPage === page
                        ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`p-1.5 sm:p-2 rounded-lg border ${currentPage === totalPages
                      ? 'border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                  >
                    <HiOutlineChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5 sm:space-y-6 md:space-y-8">

            {/* About Card */}
            <div className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4 flex items-center">
                <FaRegNewspaper className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-blue-600" />
                Newsroom
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                {config?.sidebar?.about?.description || "Your source for the latest company news, product updates, and industry insights."}
              </p>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-gray-500 dark:text-gray-500 flex items-center">
                  <HiOutlineEye className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                  {config?.sidebar?.about?.views || "15.2k"} monthly readers
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Categories
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                {categories.filter(c => c !== 'all').map((category, index) => {
                  const count = config?.news?.filter(item => item.type === category).length || 0;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category)}
                      className={`flex items-center justify-between w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group text-xs sm:text-sm ${activeCategory === category ? 'bg-gray-100 dark:bg-gray-700' : ''
                        }`}
                    >
                      <span className="flex items-center">
                        <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${getNewsTypeColor(category)} mr-1.5 sm:mr-2`} />
                        <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {category}
                        </span>
                      </span>
                      <span className="text-[10px] sm:text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Archive */}
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Archive
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                {months.filter(m => m !== 'all').map((month, index) => {
                  const count = config?.news?.filter(item => formatMonth(item.date) === month).length || 0;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedMonth(month)}
                      className={`flex items-center justify-between w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-xs sm:text-sm ${selectedMonth === month ? 'bg-gray-100 dark:bg-gray-700' : ''
                        }`}
                    >
                      <span className="text-gray-700 dark:text-gray-300">
                        {month}
                      </span>
                      <span className="text-[10px] sm:text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Press Kit */}
            <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative">
                <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Press Kit</h3>
                <p className="text-xs sm:text-sm text-blue-100 mb-3 sm:mb-4">
                  Download our press kit for media resources, logos, and brand guidelines.
                </p>
                <Link
                  href="/press-kit"
                  className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-blue-600 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-[10px] sm:text-xs"
                >
                  Download Press Kit
                  <HiOutlineExternalLink className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>

            {/* Media Contacts */}
            {config?.sidebar?.contacts?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Media Contacts
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mb-0.5 sm:mb-1">Press Inquiries</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">press@example.com</p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mb-0.5 sm:mb-1">Analyst Relations</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">analyst@example.com</p>
                  </div>
                </div>
              </div>
            )}

            {/* Social Share */}
            {config?.sidebar?.social?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Follow Us
                </h3>
                <div className="flex justify-center space-x-2 sm:space-x-3">
                  <a
                    href={config.sidebar.social.facebook || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={config.sidebar.social.twitter || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <FaTwitter className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={config.sidebar.social.linkedin || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  >
                    <FaLinkedinIn className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* View All Button */}
        {config?.viewAll?.show && config?.viewAll?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.viewAll.url}
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {config.viewAll.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </section>
  );
};

export default NewsSection3;