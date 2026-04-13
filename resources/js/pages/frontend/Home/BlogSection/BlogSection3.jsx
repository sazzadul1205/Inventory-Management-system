// page/frontend/Home/BlogSection/BlogSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';
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
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get unique categories
  const categories = ['all', ...new Set(config?.posts?.map(post => post.category) || [])];

  // Get featured post
  const featuredPost = config?.featured?.show ? config.featured : config?.posts?.[0];

  // Get recent posts
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
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(45deg,#e5e7eb_1px,transparent_1px),linear-gradient(-45deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,#374151_1px,transparent_1px),linear-gradient(-45deg,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-amber-200 dark:bg-amber-900/20 rounded-full filter blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-emerald-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-emerald-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-105'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {category === 'all' ? 'All Articles' : category}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Main Column - Featured + Grid */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">

            {/* Featured Article */}
            {featuredPost && (
              <article className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-0">

                  {/* Featured Image */}
                  <div className="relative h-56 sm:h-64 md:h-full overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent md:bg-linear-to-r" />

                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-linear-to-r from-emerald-600 to-teal-600 text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold shadow-lg">
                        {featuredPost.category}
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
                  <div className="p-5 sm:p-6 md:p-8">

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mb-2 sm:mb-3 md:mb-4">
                      <span className="flex items-center">
                        <HiOutlineCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                        {formatDate(featuredPost.date)}
                      </span>
                      <span className="flex items-center">
                        <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                      <Link href={featuredPost.link} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        {featuredPost.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 md:mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    {/* Author Info */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-2 sm:mr-3">
                          <img
                            src={featuredPost.author?.avatar}
                            alt={featuredPost.author?.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                            {featuredPost.author?.name}
                          </p>
                          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                            Author
                          </p>
                        </div>
                      </div>

                      {/* Engagement Stats */}
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="flex items-center text-gray-500 dark:text-gray-500">
                          <HiOutlineHeart className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                          <span className="text-[10px] sm:text-xs">{featuredPost.likes}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-500">
                          <HiOutlineChat className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                          <span className="text-[10px] sm:text-xs">{featuredPost.comments}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                      <Link
                        href={featuredPost.link}
                        className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group text-xs sm:text-sm"
                      >
                        Read Full Article
                        <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Articles Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {config?.posts?.slice(1, 5).map((post, index) => (
                <article
                  key={post.id || index}
                  className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  {/* Post Image */}
                  <Link href={post.link} className="block relative overflow-hidden h-40 sm:h-44 md:h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-linear-to-r from-emerald-600 to-teal-600 text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Bookmark Button */}
                    <button className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      <HiOutlineBookmark className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </Link>

                  {/* Post Content */}
                  <div className="p-4 sm:p-5 md:p-6">

                    {/* Meta Info */}
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mb-2 sm:mb-3">
                      <HiOutlineCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                      <span className="mr-2 sm:mr-3">{formatDate(post.date)}</span>
                      <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                      <Link href={post.link} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Author and Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-1.5 sm:mr-2">
                          <img
                            src={post.author?.avatar}
                            alt={post.author?.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs font-medium text-gray-700 dark:text-gray-300 truncate max-w-20 sm:max-w-25">
                          {post.author?.name}
                        </span>
                      </div>

                      {/* Engagement */}
                      <div className="flex items-center space-x-1.5 sm:space-x-2">
                        <button className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                          <HiOutlineHeart className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="text-[8px] sm:text-[10px] ml-0.5 sm:ml-1">{post.likes}</span>
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                          <HiOutlineChat className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="text-[8px] sm:text-[10px] ml-0.5 sm:ml-1">{post.comments}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5 sm:space-y-6 md:space-y-8">

            {/* About Card */}
            {config?.sidebar?.about?.show && (
              <div className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <HiOutlineUser className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-emerald-600" />
                  About This Blog
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {config?.sidebar?.about?.description || "Stay updated with the latest trends, tips, and best practices in inventory management and logistics."}
                </p>
                <div className="flex items-center justify-between text-[10px] sm:text-xs">
                  <span className="text-gray-500 dark:text-gray-500 flex items-center">
                    <HiOutlineEye className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                    {config?.sidebar?.about?.views || "12.5k"} monthly readers
                  </span>
                </div>
              </div>
            )}

            {/* Recent Posts */}
            {config?.sidebar?.recent?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {recentPosts.map((post, index) => (
                    <Link
                      key={index}
                      href={post.link}
                      className="flex items-start space-x-2 sm:space-x-3 group"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500 mt-0.5 sm:mt-1">
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
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Popular Posts
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {popularPosts.map((post, index) => (
                    <Link
                      key={index}
                      href={post.link}
                      className="flex items-center space-x-2 sm:space-x-3 group"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500 mt-0.5 sm:mt-1">
                          <HiOutlineHeart className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                          <span className="mr-1 sm:mr-2">{post.likes}</span>
                          <HiOutlineChat className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
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
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <HiOutlineTag className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-emerald-600" />
                  Categories
                </h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {categories.filter(c => c !== 'all').map((category, index) => {
                    const count = config?.posts?.filter(p => p.category === category).length || 0;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(category)}
                        className="flex items-center justify-between w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                      >
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                          {category}
                        </span>
                        <span className="text-[8px] sm:text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 sm:px-2 py-0.5 rounded-full">
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
              <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-lg sm:rounded-xl p-5 sm:p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative">
                  <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">
                    {config.sidebar.newsletter.title || "Newsletter"}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100 mb-3 sm:mb-4">
                    {config.sidebar.newsletter.description || "Get the latest insights delivered to your inbox."}
                  </p>

                  <form onSubmit={handleSubscribe} className="space-y-2 sm:space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={config.sidebar.newsletter.placeholder || "Your email"}
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-gray-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-emerald-600 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-xs sm:text-sm"
                    >
                      {config.sidebar.newsletter.buttonText || "Subscribe"}
                    </button>
                  </form>

                  {subscribed && (
                    <p className="text-[10px] sm:text-xs text-emerald-100 mt-2 animate-pulse">
                      Thanks for subscribing!
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Social Share */}
            {config?.sidebar?.social?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Share & Connect
                </h3>
                <div className="flex justify-center space-x-2 sm:space-x-3">
                  <a
                    href={config.sidebar.social.facebook || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebookF className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={config.sidebar.social.twitter || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <FaTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={config.sidebar.social.linkedin || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
              className="inline-flex items-center bg-linear-to-r from-emerald-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
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

export default BlogSection3;