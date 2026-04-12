// page/frontend/Home/NewsSection/NewsSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
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
import {
  HiOutlineTrophy,
  HiOutlineMegaphone,
} from "react-icons/hi2";

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
        return <HiOutlineMegaphone className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'award':
        return <HiOutlineTrophy className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'update':
        return <HiOutlineFlag className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'press':
        return <HiOutlineNewspaper className="w-3 h-3 sm:w-4 sm:h-4" />;
      default:
        return <HiOutlineNewspaper className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_25px_25px,#e5e7eb_2px,transparent_2px),radial-gradient(circle_at_75px_75px,#e5e7eb_2px,transparent_2px)] dark:bg-[radial-gradient(circle_at_25px_25px,#374151_2px,transparent_2px),radial-gradient(circle_at_75px_75px,#374151_2px,transparent_2px)] bg-size-[100px_100px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-200 dark:bg-amber-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-200 dark:bg-orange-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-amber-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-amber-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
              )}
              <HiOutlineNewspaper className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-amber-700 dark:text-gray-300" />
              <span className="text-xs sm:text-sm font-medium text-amber-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-amber-600 dark:text-amber-400 relative inline-block">
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

        {/* Breaking News Ticker */}
        {config?.breakingNews?.show && (
          <div className="mb-10 sm:mb-12 bg-linear-to-r from-amber-500 to-orange-500 rounded-lg sm:rounded-xl p-3 sm:p-4 text-white shadow-xl">
            <div className="flex items-center flex-wrap gap-2 sm:gap-4">
              <span className="bg-white text-amber-600 px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-bold whitespace-nowrap">
                BREAKING
              </span>
              <div className="overflow-hidden relative flex-1">
                <div className="whitespace-nowrap animate-marquee text-xs sm:text-sm">
                  {config.breakingNews.text}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured News */}
        {config?.featured?.show && (
          <div className="mb-12 sm:mb-16">
            <div className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="grid lg:grid-cols-2 gap-0">

                {/* Featured Image */}
                <div className="relative h-64 sm:h-80 lg:h-full overflow-hidden">
                  <img
                    src={config.featured.image}
                    alt={config.featured.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                  {/* News Type Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-amber-500 text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold shadow-lg flex items-center">
                      {getNewsTypeIcon(config.featured.type)}
                      <span className="ml-1 sm:ml-2">{config.featured.type || 'News'}</span>
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/70 text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm flex items-center">
                    <HiOutlineCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                    {formatDate(config.featured.date)}
                  </div>
                </div>

                {/* Featured Content */}
                <div className="p-5 sm:p-6 md:p-8 lg:p-12">
                  <span className="text-amber-600 dark:text-amber-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2 block">
                    FEATURED NEWS
                  </span>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                    {config.featured.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                    {config.featured.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={config.featured.link}
                    className="inline-flex items-center text-amber-600 dark:text-amber-400 font-semibold hover:text-amber-700 dark:hover:text-amber-300 transition-colors group text-sm sm:text-base"
                  >
                    Read Full Announcement
                    <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {config?.news?.map((item, index) => (
            <article
              key={item.id || index}
              className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* News Image */}
              <Link href={item.link} className="block relative overflow-hidden h-40 sm:h-44 md:h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Type Tag */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-amber-500/90 text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-medium flex items-center">
                    {getNewsTypeIcon(item.type)}
                    <span className="ml-0.5 sm:ml-1">{item.type || 'News'}</span>
                  </span>
                </div>

                {/* Date */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/70 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] flex items-center">
                  <HiOutlineCalendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                  {formatDate(item.date).slice(0, 10)}
                </div>
              </Link>

              {/* News Content */}
              <div className="p-4 sm:p-5 md:p-6">

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mb-2 sm:mb-3">
                  <span className="flex items-center">
                    <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                    {item.readTime || '2 min read'}
                  </span>
                  {item.tags && item.tags.length > 0 && (
                    <span className="flex items-center">
                      <HiOutlineTag className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                      {item.tags[0]}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  <Link href={item.link} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                    {item.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">

                  {/* Source/Author */}
                  <div className="flex items-center">
                    {item.author?.avatar ? (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-1.5 sm:mr-2">
                        <img
                          src={item.author.avatar}
                          alt={item.author.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mr-1.5 sm:mr-2">
                        <span className="text-amber-600 dark:text-amber-400 text-[10px] sm:text-xs font-bold">
                          {item.source?.charAt(0) || 'N'}
                        </span>
                      </div>
                    )}
                    <span className="text-[10px] sm:text-xs font-medium text-gray-700 dark:text-gray-300 truncate max-w-20 sm:max-w-25">
                      {item.author?.name || item.source || 'News Desk'}
                    </span>
                  </div>

                  {/* Engagement */}
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <button className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                      <HiOutlineHeart className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-[10px] sm:text-xs ml-0.5 sm:ml-1">{item.likes || 0}</span>
                    </button>
                    <button className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <HiOutlineShare className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        {config?.viewAll?.show && config?.viewAll?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.viewAll.url}
              className="inline-flex items-center bg-linear-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              {config.viewAll.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Press Release Section */}
        {config?.pressReleases?.show && config?.pressReleases?.items && (
          <div className="mt-16 sm:mt-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Press Releases
              </h3>
              <Link
                href={config.pressReleases.url || '/press'}
                className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold flex items-center text-sm sm:text-base"
              >
                View All Press Releases
                <HiOutlineArrowRight className="ml-1 sm:ml-2" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
              {config.pressReleases.items.map((release, index) => (
                <Link
                  key={index}
                  href={release.link}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 md:p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <span className="text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400">
                        {release.date}
                      </span>
                      {release.embargo && (
                        <span className="text-[10px] sm:text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                          Under Embargo
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {release.title}
                    </h4>
                  </div>
                  <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-amber-500 transition-colors mt-2 sm:mt-0 self-end sm:self-center" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
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