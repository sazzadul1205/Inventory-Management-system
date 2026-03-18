// page/frontend/Home/NewsSection/NewsSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineHeart,
  HiOutlineArrowRight,
  HiOutlineNewspaper,
  HiOutlineFlag,
  HiOutlineTag,
  HiOutlineShare,
} from 'react-icons/hi';
import { HiOutlineMegaphone, HiOutlineTrophy } from "react-icons/hi2";

const NewsSection1 = ({ config }) => {
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
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
      case 'press':
        return <HiOutlineNewspaper className="w-4 h-4" />;
      default:
        return <HiOutlineNewspaper className="w-4 h-4" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="News section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-news-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200 dark:bg-amber-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 dark:bg-orange-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="News badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
              )}
              <HiOutlineNewspaper className={`w-4 h-4 mr-2 ${config.badge.textColor}`} />
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
            <span className={`${config?.heading?.highlightColor} relative inline-block`}>
              {config?.heading?.highlightedText}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                aria-hidden="true"
              >
                <line
                  x1="0" y1="4" x2="200" y2="4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  className={config?.heading?.highlightColor}
                />
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

        {/* Breaking News Ticker */}
        {config?.breakingNews?.show && (
          <div className="mb-12 bg-linear-to-r from-amber-500 to-orange-500 rounded-2xl p-4 text-white shadow-xl">
            <div className="flex items-center">
              <span className="bg-white text-amber-600 px-4 py-1 rounded-full text-sm font-bold mr-4 whitespace-nowrap">
                BREAKING
              </span>
              <div className="overflow-hidden relative flex-1">
                <div className="animate-marquee whitespace-nowrap">
                  {config.breakingNews.text} • {config.breakingNews.text} • {config.breakingNews.text}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured News */}
        {config?.featured?.show && (
          <div className="mb-16">
            <div className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Featured Image */}
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <img
                    src={config.featured.image}
                    alt={config.featured.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

                  {/* News Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
                      {getNewsTypeIcon(config.featured.type)}
                      <span className="ml-2">{config.featured.type || 'News'}</span>
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                    <HiOutlineCalendar className="w-4 h-4 inline mr-2" />
                    {formatDate(config.featured.date)}
                  </div>
                </div>

                {/* Featured Content */}
                <div className="p-8 lg:p-12">
                  <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
                    FEATURED NEWS
                  </span>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {config.featured.title}
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {config.featured.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={config.featured.link}
                    className="inline-flex items-center text-amber-600 dark:text-amber-400 font-semibold hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
                  >
                    Read Full Announcement
                    <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config?.news?.map((item, index) => (
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

                {/* Type Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    {getNewsTypeIcon(item.type)}
                    <span className="ml-1">{item.type || 'News'}</span>
                  </span>
                </div>

                {/* Date */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <HiOutlineCalendar className="w-3 h-3 mr-1" />
                  {formatDate(item.date)}
                </div>
              </Link>

              {/* News Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-3">
                  <span className="flex items-center">
                    <HiOutlineClock className="w-4 h-4 mr-1" />
                    {item.readTime || '2 min read'}
                  </span>
                  {item.tags && (
                    <span className="flex items-center">
                      <HiOutlineTag className="w-4 h-4 mr-1" />
                      {item.tags[0]}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  <Link href={item.link} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                    {item.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  {/* Source/Author */}
                  <div className="flex items-center">
                    {item.author?.avatar ? (
                      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-2">
                        <img
                          src={item.author.avatar}
                          alt={item.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mr-2">
                        <span className="text-amber-600 dark:text-amber-400 text-xs font-bold">
                          {item.source?.charAt(0) || 'N'}
                        </span>
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.author?.name || item.source || 'News Desk'}
                    </span>
                  </div>

                  {/* Engagement */}
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                      <HiOutlineHeart className="w-4 h-4" />
                      <span className="text-xs ml-1">{item.likes || 0}</span>
                    </button>
                    <button className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <HiOutlineShare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        {config?.viewAll?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.viewAll.url}
              className="inline-flex items-center bg-linear-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              {config.viewAll.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Press Release Section */}
        {config?.pressReleases?.show && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Press Releases
              </h3>
              <Link
                href={config.pressReleases.url || '/press'}
                className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold flex items-center"
              >
                View All Press Releases
                <HiOutlineArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
              {config.pressReleases.items?.map((release, index) => (
                <Link
                  key={index}
                  href={release.link}
                  className="flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                        {release.date}
                      </span>
                      {release.embargo && (
                        <span className="ml-4 text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                          Under Embargo
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {release.title}
                    </h4>
                  </div>
                  <HiOutlineArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Section */}
        {config?.newsletter?.show && (
          <div className="mt-20 bg-linear-to-br from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">
                {config.newsletter.title}
              </h3>
              <p className="text-amber-100 mb-8">
                {config.newsletter.description}
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder={config.newsletter.placeholder || "Enter your email"}
                  className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-amber-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  {config.newsletter.buttonText || "Subscribe"}
                </button>
              </form>

              <p className="text-xs text-amber-200 mt-4">
                {config.newsletter.privacyText || "We respect your privacy. Unsubscribe at any time."}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-news-pattern {
          background-image: 
            radial-gradient(circle at 25px 25px, #e5e7eb 2px, transparent 2px),
            radial-gradient(circle at 75px 75px, #e5e7eb 2px, transparent 2px);
          background-size: 100px 100px;
        }
        .dark .bg-news-pattern {
          background-image: 
            radial-gradient(circle at 25px 25px, #374151 2px, transparent 2px),
            radial-gradient(circle at 75px 75px, #374151 2px, transparent 2px);
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
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

export default NewsSection1;