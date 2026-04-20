// frontend/Blog/ProductUpdatesSection/ProductUpdatesSection1.jsx

/**
 * Product Updates Section - What's New & Release Notes Hub
 * 
 * Unique design elements:
 * - Feature highlight cards with status badges (Live/Beta/Coming Soon)
 * - Version selector for release filtering
 * - Timeline-based update display with alternating layout
 * - Category filter chips (New/Improvement/Fix/Integration)
 * - Roadmap preview with quarterly planning
 * - Release notes integration
 * - Demo and documentation links per update
 * - Newsletter subscription for update notifications
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons set for consistent, clean iconography
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
  HiOutlineTrendingUp,
  HiOutlineAcademicCap,
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineDeviceMobile,
  HiOutlineLink,
} from 'react-icons/hi';

const ProductUpdatesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [showAllUpdates, setShowAllUpdates] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeVersion, setActiveVersion] = useState(config?.versions?.[0]?.version || 'latest');

  // ==================== MEMOIZED DATA ====================
  const roadmap = config?.roadmap || null;
  const updates = useMemo(() => config?.updates || [], [config?.updates]);
  const featureHighlights = useMemo(() => config?.featureHighlights || [], [config?.featureHighlights]);

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
      trending: HiOutlineTrendingUp,
      academic: HiOutlineAcademicCap,
      database: HiOutlineDatabase,
      server: HiOutlineServer,
      mobile: HiOutlineDeviceMobile,
      link: HiOutlineLink,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineSparkles className={className} />;
    }
    return <IconComponent className={className} />;
  }, []);

  /**
   * Formats date to readable string (e.g., "Mar 15, 2024")
   */
  const formatDate = useCallback((dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  }, []);

  /**
   * Returns status badge color classes based on status
   */
  const getStatusColor = useCallback((status) => {
    switch (status) {
      case 'live':
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'beta':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'coming-soon':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'planned':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
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

  // ==================== FILTERED UPDATES ====================
  const filteredUpdates = useMemo(() => {
    let filtered = [...updates];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(update => update.category === selectedCategory);
    }

    if (!showAllUpdates) {
      filtered = filtered.slice(0, config?.initialDisplayCount || 6);
    }

    return filtered;
  }, [updates, selectedCategory, showAllUpdates, config?.initialDisplayCount]);

  // ==================== UNIQUE CATEGORIES ====================
  const categories = useMemo(() => {
    const cats = new Set(updates.map(u => u.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [updates]);

  const hasMore = !showAllUpdates && filteredUpdates.length < updates.length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Product Updates - Release Notes Hub"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-emerald-100 dark:bg-emerald-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-emerald-200 dark:border-emerald-800'}`}
            aria-label="Section badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-emerald-700 dark:text-emerald-300'}`}>
              {config?.badge?.text || "Continuous Innovation"}
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.title?.prefix || 'Latest'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-emerald-600 to-teal-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || "Product Updates"}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Section Description */}
          <p
            className="text-xl text-gray-600 dark:text-gray-400"
            itemProp="description"
          >
            {config?.description || "We ship weekly. Here's what's new, improved, and coming soon to help you manage inventory smarter."}
          </p>
        </div>

        {/* ==================== VERSION SELECTOR ==================== */}
        {config?.showVersionSelector && config?.versions && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {config.versions.map((version) => (
              <button
                key={version.version}
                onClick={() => setActiveVersion(version.version)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeVersion === version.version
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Show version ${version.version} updates`}
                aria-pressed={activeVersion === version.version}
              >
                {version.label || version.version}
                {version.isLatest && (
                  <span className="ml-2 px-1.5 py-0.5 bg-white/20 rounded-full text-xs">
                    Latest
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* ==================== FEATURE HIGHLIGHTS CARDS ==================== */}
        {featureHighlights.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {featureHighlights.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor || 'bg-emerald-100 dark:bg-emerald-900/30'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(feature.icon, "w-6 h-6 text-emerald-600 dark:text-emerald-400")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{feature.description}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(feature.status)}`}>
                    {feature.status === 'live' ? 'Now Live' : feature.status === 'beta' ? 'Beta' : 'Coming Soon'}
                  </span>
                  {feature.link && (
                    <Link href={feature.link} className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline">
                      Learn more →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== LATEST RELEASE BADGE ==================== */}
        {config?.latestRelease && (
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-full px-4 py-2 border border-emerald-100 dark:border-emerald-800">
              {getIcon("calendar", "w-4 h-4 text-emerald-600 dark:text-emerald-400")}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Latest Release: {config.latestRelease.version} • {formatDate(config.latestRelease.date)}
              </span>
              <Link href={config.latestRelease.link} className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline ml-2">
                View release notes
              </Link>
            </div>
          </div>
        )}

        {/* ==================== CATEGORY FILTERS ==================== */}
        {config?.showCategories && categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Show ${cat} updates`}
              >
                {cat === 'all' ? 'All Updates' : cat}
              </button>
            ))}
          </div>
        )}

        {/* ==================== TIMELINE UPDATES ==================== */}
        <div className="relative mb-12">
          {/* Timeline Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block" aria-hidden="true" />

          <div className="space-y-8">
            {filteredUpdates.map((update, index) => (
              <div
                key={update.id}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-emerald-600 rounded-full transform -translate-x-1/2 hidden md:block" aria-hidden="true" />

                {/* Date Badge (Mobile) */}
                <div className="md:hidden flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    {getIcon("calendar", "w-4 h-4 text-emerald-600 dark:text-emerald-400")}
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {formatDate(update.date)}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    {/* Date Badge (Desktop) */}
                    <div className="hidden md:flex items-center gap-2 mb-3">
                      {getIcon("calendar", "w-4 h-4 text-gray-400")}
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(update.date)}
                      </span>
                    </div>

                    {/* Title and Status */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {update.title}
                      </h3>
                      <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(update.status)}`}>
                        {update.status === 'live' ? 'Now Live' : update.status === 'beta' ? 'Beta' : update.status === 'coming-soon' ? 'Coming Soon' : 'Planned'}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {update.description}
                    </p>

                    {/* Feature List */}
                    {update.features && update.features.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {update.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            {getIcon("check", "w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0")}
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tags */}
                    {update.tags && update.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {update.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      {update.link && (
                        <Link
                          href={update.link}
                          className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:gap-2 transition-all duration-300 group"
                        >
                          Learn more
                          <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4" />
                        </Link>
                      )}
                      {update.demoLink && (
                        <Link
                          href={update.demoLink}
                          className="inline-flex items-center text-gray-600 dark:text-gray-400 text-sm hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          {getIcon("play", "w-4 h-4 mr-1")}
                          Watch demo
                        </Link>
                      )}
                      {update.docsLink && (
                        <Link
                          href={update.docsLink}
                          className="inline-flex items-center text-gray-600 dark:text-gray-400 text-sm hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          {getIcon("document", "w-4 h-4 mr-1")}
                          Documentation
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Empty spacer for alignment */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* ==================== VIEW MORE BUTTON ==================== */}
        {config?.showViewMore && hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllUpdates(true)}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-emerald-600 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300"
            >
              View All Updates
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ==================== EMPTY STATE ==================== */}
        {filteredUpdates.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
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
              className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Show all updates
            </button>
          </div>
        )}

        {/* ==================== ROADMAP PREVIEW ==================== */}
        {config?.showRoadmap && roadmap && roadmap.quarters && (
          <div className="mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {getIcon("flag", "w-5 h-5 text-emerald-600 dark:text-emerald-400")}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Product Roadmap</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {roadmap.description || "See what's coming next in our product journey"}
                </p>
              </div>
              <Link
                href={roadmap.link || "/roadmap"}
                className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline"
              >
                View full roadmap →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {roadmap.quarters.map((quarter, idx) => (
                <div key={idx} className="relative">
                  <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                    {quarter.name}
                  </div>
                  <div className="space-y-3">
                    {quarter.items?.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full mt-1.5 ${item.status === 'in-progress' ? 'bg-amber-500' :
                            item.status === 'completed' ? 'bg-emerald-500' : 'bg-gray-400'
                          }`} />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {item.status === 'in-progress' ? 'In Progress' : item.status === 'completed' ? 'Completed' : 'Planned'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNotification && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl">
              <div className="flex items-center gap-2">
                {getIcon("bell", "w-5 h-5 text-emerald-600 dark:text-emerald-400")}
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {config?.notificationText || "Get product updates delivered to your inbox weekly"}
                </span>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                  aria-label="Email for product updates"
                  required
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
            {emailSubmitted && (
              <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-2 animate-fadeIn">
                Thanks for subscribing! Check your inbox for confirmation.
              </p>
            )}
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
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
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

export default ProductUpdatesSection1;