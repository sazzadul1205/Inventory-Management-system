// page/frontend/Home/NewsSection/NewsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import { FaRegNewspaper, FaRegFileAlt, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
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
import { HiOutlineMegaphone, HiOutlineTrophy } from "react-icons/hi2";

const NewsSection3 = ({ config }) => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [bookmarked, setBookmarked] = useState([]);
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

  // Filter news based on category and month
  const filteredNews = config?.news?.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.type?.toLowerCase() === activeCategory.toLowerCase();
    const matchesMonth = selectedMonth === 'all' || formatMonth(item.date) === selectedMonth;
    return matchesCategory && matchesMonth;
  }) || [];

  // Get featured news (first item or custom featured)
  const featuredNews = config?.featured?.show
    ? config.featured
    : config?.news?.[0];

  // Get unique categories
  const categories = ['all', ...new Set(config?.news?.map(item => item.type) || [])];

  // Get archive months
  const months = ['all', ...new Set(config?.news?.map(item => formatMonth(item.date)) || [])];

  // Pagination for news list
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, endIndex);

  // Handle bookmark toggle
  const toggleBookmark = (id) => {
    setBookmarked(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="News section"
    >
      {/* Background Pattern - Magazine Style */}
      <div className="absolute inset-0 bg-magazine-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Magazine Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="News badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
              )}
              <span className={`text-sm font-medium ${config.badge.textColor}`}>
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {config?.heading?.highlightedText}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 6 L300 6"
                  stroke="url(#headingGradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="headingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#9333EA" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Main Content - Magazine Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column - Featured + Grid */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Article - Hero Style */}
            {featuredNews && (
              <article className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured Image */}
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent md:bg-linear-to-r" />

                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`${getNewsTypeColor(featuredNews.type)} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center`}>
                        {getNewsTypeIcon(featuredNews.type)}
                        <span className="ml-2">{featuredNews.type}</span>
                      </span>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
                        <HiOutlineSparkles className="w-4 h-4 mr-1" />
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="p-8">
                    {/* Meta Info */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-4">
                      <HiOutlineCalendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{formatDate(featuredNews.date)}</span>
                      <HiOutlineClock className="w-4 h-4 mr-1" />
                      <span>{featuredNews.readTime || '3 min read'}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      <Link href={featuredNews.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {featuredNews.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                      {featuredNews.excerpt}
                    </p>

                    {/* Source Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {featuredNews.source ? (
                          <>
                            <FaRegFileAlt className="w-4 h-4 text-blue-500 mr-2" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {featuredNews.source}
                            </span>
                          </>
                        ) : featuredNews.author?.name ? (
                          <>
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-2">
                              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">
                                {featuredNews.author.name.charAt(0)}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {featuredNews.author.name}
                            </span>
                          </>
                        ) : null}
                      </div>

                      {/* Engagement Stats */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center text-gray-500 dark:text-gray-500">
                          <HiOutlineEye className="w-4 h-4 mr-1" />
                          <span className="text-xs">{featuredNews.views || featuredNews.likes || 0}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <Link
                        href={featuredNews.link}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                      >
                        Read Full Story
                        <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Latest News Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Latest News
                </h3>
                <Link
                  href="/news"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-semibold flex items-center"
                >
                  View All
                  <HiOutlineArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {paginatedNews.map((item, index) => (
                  <article
                    key={item.id || index}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Thumbnail */}
                      <Link href={item.link} className="sm:w-32 h-32 overflow-hidden shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </Link>

                      {/* Content */}
                      <div className="flex-1 p-5">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            {/* Type and Date */}
                            <div className="flex items-center text-xs mb-2">
                              <span className={`${getNewsTypeColor(item.type)} text-white px-2 py-0.5 rounded-full flex items-center mr-3`}>
                                {getNewsTypeIcon(item.type)}
                                <span className="ml-1">{item.type}</span>
                              </span>
                              <span className="text-gray-500 dark:text-gray-500 flex items-center">
                                <HiOutlineCalendar className="w-3 h-3 mr-1" />
                                {formatDate(item.date)}
                              </span>
                            </div>

                            {/* Title */}
                            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                              <Link href={item.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {item.title}
                              </Link>
                            </h4>

                            {/* Excerpt */}
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {item.excerpt}
                            </p>
                          </div>

                          {/* Bookmark Button */}
                          <button
                            onClick={() => toggleBookmark(item.id)}
                            className="ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <HiOutlineBookmark
                              className={`w-5 h-5 ${bookmarked.includes(item.id)
                                ? 'text-blue-600 fill-blue-600'
                                : 'text-gray-400'
                                }`}
                            />
                          </button>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                            {item.source && (
                              <>
                                <FaRegFileAlt className="w-3 h-3 mr-1" />
                                <span className="mr-3">{item.source}</span>
                              </>
                            )}
                            {item.tags && item.tags[0] && (
                              <>
                                <HiOutlineTag className="w-3 h-3 mr-1" />
                                <span>#{item.tags[0]}</span>
                              </>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                              <HiOutlineShare className="w-4 h-4 text-gray-400" />
                            </button>
                            <Link
                              href={item.link}
                              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                            >
                              <HiOutlineExternalLink className="w-4 h-4 text-gray-400" />
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
                <div className="flex justify-center items-center space-x-2 mt-8">
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
                    className={`p-2 rounded-lg border ${currentPage === totalPages
                      ? 'border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                  >
                    <HiOutlineChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* About Card */}
            <div className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <FaRegNewspaper className="w-5 h-5 mr-2 text-blue-600" />
                Newsroom
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {config?.sidebar?.about?.description || "Your source for the latest company news, product updates, and industry insights from Sazzad."}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-500">
                  <HiOutlineEye className="w-4 h-4 inline mr-1" />
                  {config?.sidebar?.about?.views || "15.2k"} monthly readers
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.filter(c => c !== 'all').map((category, index) => {
                  const count = config?.news?.filter(item => item.type === category).length || 0;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group ${activeCategory === category ? 'bg-gray-100 dark:bg-gray-700' : ''
                        }`}
                    >
                      <span className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <span className={`w-2 h-2 rounded-full ${getNewsTypeColor(category)} mr-2`} />
                        <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {category}
                        </span>
                      </span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Archive */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Archive
              </h3>
              <div className="space-y-2">
                {months.filter(m => m !== 'all').map((month, index) => {
                  const count = config?.news?.filter(item => formatMonth(item.date) === month).length || 0;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedMonth(month)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${selectedMonth === month ? 'bg-gray-100 dark:bg-gray-700' : ''
                        }`}
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {month}
                      </span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Press Kit */}
            <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative">
                <h3 className="text-lg font-bold mb-2">Press Kit</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Download our press kit for media resources, logos, and brand guidelines.
                </p>
                <Link
                  href="/press-kit"
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm"
                >
                  Download Press Kit
                  <HiOutlineExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Media Contacts */}
            {config?.sidebar?.contacts?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Media Contacts
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Press Inquiries</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">press@sazzad.com</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Analyst Relations</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">analyst@sazzad.com</p>
                  </div>
                </div>
              </div>
            )}

            {/* Social Share */}
            {config?.sidebar?.social?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex justify-center space-x-3">
                  <a
                    href={config.sidebar.social.facebook || "#"}
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href={config.sidebar.social.twitter || "#"}
                    className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href={config.sidebar.social.linkedin || "#"}
                    className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* View All Button */}
        {config?.viewAll?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.viewAll.url}
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {config.viewAll.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #e5e7eb 1px, transparent 1px),
            linear-gradient(-45deg, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #374151 1px, transparent 1px),
            linear-gradient(-45deg, #374151 1px, transparent 1px);
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