// page/frontend/Home/BlogSection/BlogSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineChat,
  HiOutlineHeart,
  HiOutlineArrowRight,
  HiOutlineBookmark,
  HiOutlineUser,
  HiOutlineTag,
  HiOutlineSparkles,
  HiOutlineEye,
} from 'react-icons/hi';

const BlogSection3 = ({ config }) => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');

  // State for newsletter form
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get unique categories
  const categories = ['all', ...new Set(config?.posts?.map(post => post.category) || [])];

  // Get featured post (first post or custom featured)
  const featuredPost = config?.featured?.show
    ? config.featured
    : config?.posts?.[0];

  // Get recent posts (excluding featured)
  const recentPosts = config?.posts?.slice(1, 4) || [];

  // Get popular posts (sorted by likes)
  const popularPosts = [...(config?.posts || [])]
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 3);

  // Handle newsletter submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Blog section"
    >
      {/* Background Pattern - Magazine Style */}
      <div className="absolute inset-0 bg-magazine-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-amber-200 dark:bg-amber-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Magazine Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Blog badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
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
              <span className="relative z-10 bg-linear-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
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
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#14B8A6" />
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-105'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {category === 'all' ? 'All Articles' : category}
            </button>
          ))}
        </div>

        {/* Main Content - Magazine Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column - Featured + Grid */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Article - Hero Style */}
            {featuredPost && (
              <article className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured Image */}
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent md:bg-linear-to-r" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-linear-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {featuredPost.category}
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
                      <span className="mr-4">{formatDate(featuredPost.date)}</span>
                      <HiOutlineClock className="w-4 h-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      <Link href={featuredPost.link} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        {featuredPost.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-3">
                          <img
                            src={featuredPost.author?.avatar}
                            alt={featuredPost.author?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">
                            {featuredPost.author?.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            Author
                          </p>
                        </div>
                      </div>

                      {/* Engagement Stats */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center text-gray-500 dark:text-gray-500">
                          <HiOutlineHeart className="w-4 h-4 mr-1" />
                          <span className="text-xs">{featuredPost.likes}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-500">
                          <HiOutlineChat className="w-4 h-4 mr-1" />
                          <span className="text-xs">{featuredPost.comments}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <Link
                        href={featuredPost.link}
                        className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group"
                      >
                        Read Full Article
                        <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {config?.posts?.slice(1, 5).map((post, index) => (
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
                      <span className="bg-linear-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Bookmark Button */}
                    <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      <HiOutlineBookmark className="w-4 h-4" />
                    </button>
                  </Link>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 mb-3">
                      <HiOutlineCalendar className="w-3 h-3 mr-1" />
                      <span className="mr-3">{formatDate(post.date)}</span>
                      <HiOutlineClock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      <Link href={post.link} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Author and Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-2">
                          <img
                            src={post.author?.avatar}
                            alt={post.author?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {post.author?.name}
                        </span>
                      </div>

                      {/* Engagement */}
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                          <HiOutlineHeart className="w-3 h-3" />
                          <span className="text-xs ml-1">{post.likes}</span>
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                          <HiOutlineChat className="w-3 h-3" />
                          <span className="text-xs ml-1">{post.comments}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* About Card */}
            {config?.sidebar?.about?.show && (
              <div className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <HiOutlineUser className="w-5 h-5 mr-2 text-emerald-600" />
                  About This Blog
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {config?.sidebar?.about?.description || "Stay updated with the latest trends, tips, and best practices in inventory management and logistics from industry experts."}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-500">
                    <HiOutlineEye className="w-4 h-4 inline mr-1" />
                    {config?.sidebar?.about?.views || "12.5k"} monthly readers
                  </span>
                </div>
              </div>
            )}

            {/* Recent Posts */}
            {config?.sidebar?.recent?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <Link
                      key={index}
                      href={post.link}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Posts */}
            {config?.sidebar?.popular?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <Link
                      key={index}
                      href={post.link}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-8 h-8 bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 mt-1">
                          <HiOutlineHeart className="w-3 h-3 mr-1" />
                          <span className="mr-2">{post.likes}</span>
                          <HiOutlineChat className="w-3 h-3 mr-1" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            {config?.sidebar?.categories?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <HiOutlineTag className="w-5 h-5 mr-2 text-emerald-600" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.filter(c => c !== 'all').map((category, index) => {
                    const count = config?.posts?.filter(p => p.category === category).length || 0;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(category)}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                      >
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                          {category}
                        </span>
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Newsletter */}
            {config?.sidebar?.newsletter?.show && (
              <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative">
                  <h3 className="text-lg font-bold mb-2">
                    {config.sidebar.newsletter.title || "Newsletter"}
                  </h3>
                  <p className="text-sm text-emerald-100 mb-4">
                    {config.sidebar.newsletter.description || "Get the latest insights delivered to your inbox."}
                  </p>

                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={config.sidebar.newsletter.placeholder || "Your email"}
                      className="w-full px-4 py-2 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm"
                    >
                      {config.sidebar.newsletter.buttonText || "Subscribe"}
                    </button>
                  </form>

                  {subscribed && (
                    <p className="text-xs text-emerald-100 mt-2 animate-pulse">
                      Thanks for subscribing!
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Social Share */}
            {config?.sidebar?.social?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Share & Connect
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
              className="inline-flex items-center bg-linear-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
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

export default BlogSection3;