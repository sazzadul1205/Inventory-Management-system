// page/frontend/Home/BlogSection/BlogSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineChat,
  HiOutlineHeart,
  HiOutlineArrowRight,
} from 'react-icons/hi';

const BlogSection1 = ({ config }) => {
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Blog section"
    >
      {/* Background Pattern - decorative */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Gradient Orbs - decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Blog badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
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

        {/* Featured Post */}
        {config?.featured?.show && (
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
              {/* Featured Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={config.featured.image}
                    alt={config.featured.title}
                    className="w-full h-auto object-cover"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {config.featured.category}
                    </span>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <HiOutlineClock className="w-4 h-4 mr-1" />
                    {config.featured.readTime}
                  </div>
                </div>
              </div>

              {/* Featured Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                  FEATURED POST
                </span>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {config.featured.title}
                </h3>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {config.featured.excerpt}
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-3">
                      <img
                        src={config.featured.author.avatar}
                        alt={config.featured.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {config.featured.author.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {formatDate(config.featured.date)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  href={config.featured.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                >
                  Read Full Article
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config?.posts?.map((post, index) => (
            <article
              key={post.id || index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Post Image */}
              <Link href={post.link} className="block relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-3">
                  <HiOutlineCalendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{formatDate(post.date)}</span>
                  <HiOutlineClock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  <Link href={post.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {post.author.name}
                    </span>
                  </div>

                  {/* Engagement */}
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                      <HiOutlineHeart className="w-4 h-4" />
                      <span className="text-xs ml-1">{post.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                      <HiOutlineChat className="w-4 h-4" />
                      <span className="text-xs ml-1">{post.comments}</span>
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
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {config.viewAll.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Newsletter Section */}
        {config?.newsletter?.show && (
          <div className="mt-20 bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">
                {config.newsletter.title}
              </h3>
              <p className="text-blue-100 mb-8">
                {config.newsletter.description}
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder={config.newsletter.placeholder || "Enter your email"}
                  className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white border border-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  {config.newsletter.buttonText || "Subscribe"}
                </button>
              </form>

              <p className="text-xs text-blue-200 mt-4">
                {config.newsletter.privacyText || "We respect your privacy. Unsubscribe at any time."}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
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

export default BlogSection1;