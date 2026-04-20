// frontend/Blog/ProductUpdatesSection/ProductUpdatesSection2.jsx

/**
 * Product Updates Section - Changelog Style Release Notes Hub
 * 
 * Unique design elements:
 * - Changelog-style grouping by month/year
 * - Expandable feature lists per update
 * - Like/comment/share engagement metrics
 * - Category filter chips (New/Improvement/Fix/Security)
 * - Status badges (Live/Beta/Coming Soon)
 * - Stats cards (Total Releases/New Features/Improvements)
 * - Newsletter subscription with stats display
 * - RSS feed link for changelog
 * - Sort by latest or most popular
 * - Version tags for each release
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons set for consistent iconography
import {
  HiOutlineSparkles,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineGlobe,
  HiOutlineCalendar,
  HiOutlineTag,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineBell,
  HiOutlineDownload,
  HiOutlinePlay,
  HiOutlineDocumentText,
  HiOutlineCode,
  HiOutlineCog,
  HiOutlineRefresh,
  HiOutlineStar,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineFilter,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineShare,
  HiOutlineTrendingUp,
} from 'react-icons/hi';

const ProductUpdatesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('latest');
  const [likedUpdates, setLikedUpdates] = useState([]);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [expandedRelease, setExpandedRelease] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const newsletter = config?.newsletter || null;
  const updates = useMemo(() => config?.updates || [], [config?.updates]);
  const stats = config?.stats || { totalReleases: 0, newFeatures: 0, improvements: 0 };

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Uses Heroicons exclusively for visual consistency
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      sparkles: HiOutlineSparkles,
      chip: HiOutlineChip,
      cloud: HiOutlineCloudUpload,
      shield: HiOutlineShieldCheck,
      bolt: HiOutlineLightningBolt,
      chart: HiOutlineChartBar,
      users: HiOutlineUsers,
      globe: HiOutlineGlobe,
      calendar: HiOutlineCalendar,
      tag: HiOutlineTag,
      check: HiOutlineCheckCircle,
      clock: HiOutlineClock,
      eye: HiOutlineEye,
      bell: HiOutlineBell,
      download: HiOutlineDownload,
      play: HiOutlinePlay,
      document: HiOutlineDocumentText,
      code: HiOutlineCode,
      cog: HiOutlineCog,
      refresh: HiOutlineRefresh,
      star: HiOutlineStar,
      flag: HiOutlineFlag,
      gift: HiOutlineGift,
      filter: HiOutlineFilter,
      close: HiOutlineX,
      chevronDown: HiOutlineChevronDown,
      chevronUp: HiOutlineChevronUp,
      external: HiOutlineExternalLink,
      mail: HiOutlineMail,
      thumbsUp: HiOutlineThumbUp,
      chat: HiOutlineChat,
      share: HiOutlineShare,
      trending: HiOutlineTrendingUp,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineSparkles className={className} />;
    }
    return <IconComponent className={className} />;
  }, []);

  /**
   * Formats date to relative time string (e.g., "Today", "3 days ago")
   */
  const formatRelativeDate = useCallback((dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    if (diffWeeks < 4) return `${diffWeeks}w ago`;
    if (diffMonths < 12) return `${diffMonths}mo ago`;
    return `${diffYears}y ago`;
  }, []);

  /**
   * Returns status badge configuration (color, icon, label)
   */
  const getStatusConfig = useCallback((status) => {
    switch (status) {
      case 'live':
        return { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'trending', label: 'Now Live' };
      case 'beta':
        return { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'chip', label: 'Beta' };
      case 'coming-soon':
        return { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'clock', label: 'Coming Soon' };
      case 'planned':
        return { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'flag', label: 'Planned' };
      default:
        return { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'check', label: 'Released' };
    }
  }, []);

  /**
   * Returns category badge color
   */
  const getCategoryColor = useCallback((category) => {
    switch (category) {
      case 'new': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'improvement': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'fix': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'security': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  }, []);

  /**
   * Toggle like status for an update
   */
  const handleLike = useCallback((updateId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedUpdates(prev =>
      prev.includes(updateId)
        ? prev.filter(id => id !== updateId)
        : [...prev, updateId]
    );
  }, []);

  /**
   * Handles newsletter subscription
   */
  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    if (email && email.includes('@')) {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 3000);
      e.target.reset();
    }
  }, []);

  // ==================== FILTERING AND GROUPING ====================

  const filteredUpdates = useMemo(() => {
    let filtered = [...updates];

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(update => update.category === selectedCategory);
    }

    // Apply sorting
    if (sortBy === 'latest') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'popular') {
      filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    }

    return filtered;
  }, [updates, selectedCategory, sortBy]);

  // Group updates by month/year for changelog style
  const groupedUpdates = useMemo(() => {
    const groups = {};
    filteredUpdates.forEach(update => {
      const date = new Date(update.date);
      const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!groups[monthYear]) {
        groups[monthYear] = [];
      }
      groups[monthYear].push(update);
    });
    return groups;
  }, [filteredUpdates]);

  // Categories for filter chips
  const categories = ['all', 'new', 'improvement', 'fix', 'security'];
  const hasMore = filteredUpdates.length < updates.length && selectedCategory === 'all';

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Product Updates - Changelog Style Release Notes"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-radial-gradient" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon("sparkles", "w-4 h-4 text-blue-600 dark:text-blue-400")}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Release Notes"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "What's"}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || "New"}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Follow our journey of continuous improvement. Here's what we've been building to make your experience better."}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.totalReleases || 0}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Total Releases</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{stats.newFeatures || 0}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">New Features</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.improvements || 0}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Improvements</div>
            </div>
          </div>
        </div>

        {/* ==================== FILTER BAR ==================== */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                aria-label={`Show ${cat} updates`}
              >
                {cat === 'all' ? 'All Updates' : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Sort updates"
            >
              <option value="latest">Latest First</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {/* ==================== RELEASE NOTES - CHANGELOG STYLE ==================== */}
        <div className="space-y-12 mb-12">
          {Object.entries(groupedUpdates).map(([monthYear, monthUpdates]) => (
            <div key={monthYear}>
              {/* Month Header */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{monthYear}</h2>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                <span className="text-sm text-gray-500 dark:text-gray-400">{monthUpdates.length} updates</span>
              </div>

              {/* Updates Grid */}
              <div className="grid gap-6">
                {monthUpdates.map((update) => {
                  const statusConfig = getStatusConfig(update.status);
                  const isExpanded = expandedRelease === update.id;
                  const isLiked = likedUpdates.includes(update.id);

                  return (
                    <div
                      key={update.id}
                      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <div className="p-6">
                        {/* Header Row: Badges and Date */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div className="flex flex-wrap items-center gap-3">
                            {/* Category Badge */}
                            <span className={`text-xs px-3 py-1 rounded-full ${getCategoryColor(update.category)} capitalize`}>
                              {update.category}
                            </span>

                            {/* Status Badge */}
                            <span className={`text-xs px-3 py-1 rounded-full ${statusConfig.color} flex items-center gap-1`}>
                              {getIcon(statusConfig.icon, "w-3 h-3")}
                              {statusConfig.label}
                            </span>

                            {/* Version Tag */}
                            {update.version && (
                              <span className="text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                                v{update.version}
                              </span>
                            )}
                          </div>

                          {/* Relative Date */}
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            {getIcon("calendar", "w-4 h-4")}
                            <span>{formatRelativeDate(update.date)}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {update.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {update.description}
                        </p>

                        {/* Expandable Feature List */}
                        {update.features && update.features.length > 0 && (
                          <div className="mb-4">
                            <button
                              onClick={() => setExpandedRelease(isExpanded ? null : update.id)}
                              className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                              aria-label={isExpanded ? "Show fewer features" : `Show ${update.features.length} features`}
                            >
                              {isExpanded ? 'Show fewer features' : `Show ${update.features.length} features`}
                              {isExpanded ? getIcon("chevronUp", "w-4 h-4") : getIcon("chevronDown", "w-4 h-4")}
                            </button>

                            {isExpanded && (
                              <ul className="mt-3 space-y-2">
                                {update.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    {getIcon("check", "w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0")}
                                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}

                        {/* Tags */}
                        {update.tags && update.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {update.tags.map((tag, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Action Buttons and Links */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-4">
                            {/* Like Button */}
                            <button
                              onClick={(e) => handleLike(update.id, e)}
                              className={`flex items-center gap-1 text-sm transition-colors ${isLiked ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                                }`}
                              aria-label={isLiked ? "Unlike this update" : "Like this update"}
                            >
                              {getIcon("thumbsUp", "w-4 h-4")}
                              <span>{update.likes || 0}</span>
                            </button>

                            {/* Comment Count */}
                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                              {getIcon("chat", "w-4 h-4")}
                              <span>{update.comments || 0}</span>
                            </div>

                            {/* Share Button */}
                            <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                              {getIcon("share", "w-4 h-4")}
                              <span>Share</span>
                            </button>
                          </div>

                          {/* Links */}
                          <div className="flex items-center gap-3">
                            {update.link && (
                              <Link
                                href={update.link}
                                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                              >
                                Learn more
                                <HiArrowRight className="w-4 h-4" />
                              </Link>
                            )}
                            {update.demoLink && (
                              <Link
                                href={update.demoLink}
                                className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              >
                                {getIcon("play", "w-4 h-4")}
                                Watch demo
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredUpdates.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("sparkles", "w-16 h-16")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No updates found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try a different filter or check back soon for new releases.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Show all updates
            </button>
          </div>
        )}

        {/* ==================== VIEW ALL BUTTON ==================== */}
        {config?.showViewAll && hasMore && (
          <div className="text-center mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              View All Releases
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && newsletter && (
          <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {getIcon("bell", "w-6 h-6")}
                  <span className="text-sm font-semibold uppercase tracking-wider">Stay Updated</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {newsletter.title || "Get release notes in your inbox"}
                </h3>
                <p className="text-blue-100 mb-6">
                  {newsletter.description || "Subscribe to receive weekly updates about new features, improvements, and product announcements."}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Email for product updates"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
                {emailSubmitted && (
                  <p className="text-sm text-blue-100 mt-3 animate-fadeIn">
                    Thanks for subscribing! Check your inbox for confirmation.
                  </p>
                )}
                <p className="text-xs text-blue-100 mt-3">
                  {newsletter.disclaimer || "No spam, unsubscribe anytime."}
                </p>
              </div>

              {/* Subscription Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">{newsletter.stats?.weekly || "2-3"}</div>
                  <div className="text-sm text-blue-100">Updates per week</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">{newsletter.stats?.subscribers || "5k+"}</div>
                  <div className="text-sm text-blue-100">Active subscribers</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== RSS FEED LINK ==================== */}
        {config?.showRss && (
          <div className="mt-8 text-center">
            <Link
              href={config?.rssLink || "/changelog.rss"}
              className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {getIcon("download", "w-4 h-4")}
              Subscribe to RSS feed
            </Link>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.15)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
          -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
        }
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductUpdatesSection2;