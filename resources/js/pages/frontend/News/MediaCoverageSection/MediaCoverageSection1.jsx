// frontend/Blog/MediaCoverageSection/MediaCoverageSection1.jsx

/**
 * Media Coverage Section - Press Mentions & Publication Highlights Hub
 *
 * Unique design elements:
 * - Stats cards showing media metrics (mentions, publications, impressions)
 * - Publication logo display in card headers
 * - Category filter chips (Features, Interviews, Reviews, Mentions)
 * - Publication filter dropdown with unique publication list
 * - Year filter for chronological navigation
 * - Featured coverage spotlight with publication badge
 * - Expandable quote sections with citation styling
 * - Save/bookmark functionality for coverage items
 * - Author attribution with avatars
 * - Read time and view count metrics
 * - External link indicator for article navigation
 * - Publication color-coded badges
 * - Search across titles, excerpts, and tags
 * - Press kit download banner
 * - Media contact section with email and phone
 * - Newsletter subscription integration
 * - Animated gradient background orbs
 *
 * All icons from react-icons (hi, hi2, ai, fa)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Ant Design
import { AiOutlineShareAlt } from 'react-icons/ai';
import { FaQuoteLeft } from 'react-icons/fa';
import {
  HiOutlineNewspaper,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineDownload,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineUsers,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineArchive,
  HiOutlinePhotograph,
  HiOutlineDocument,
  HiOutlineLink,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineAtSymbol,
  HiOutlinePrinter,
  HiOutlineDuplicate,
  HiOutlineQrcode,
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
} from 'react-icons/hi';
import {
  HiOutlinePhone,
  HiOutlineRocketLaunch,
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineUser,
} from 'react-icons/hi2';

const MediaCoverageSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [savedCoverage, setSavedCoverage] = useState([]);
  const [expandedCoverage, setExpandedCoverage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPublication, setSelectedPublication] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const allCoverage = useMemo(() => config?.mediaCoverage || [], [config?.mediaCoverage]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Coverage', icon: 'newspaper' },
        { id: 'feature', label: 'Features', icon: 'star' },
        { id: 'interview', label: 'Interviews', icon: 'microphone' },
        { id: 'review', label: 'Reviews', icon: 'document' },
        { id: 'mention', label: 'Mentions', icon: 'quote' },
      ],
    [config?.categories]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '50+', label: 'Media Mentions', icon: 'newspaper' },
        { value: '25+', label: 'Publications', icon: 'globe' },
        { value: '2M+', label: 'Impressions', icon: 'eye' },
        { value: '4.8', label: 'Avg. Rating', icon: 'star' },
      ],
    [config?.stats]
  );

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Ant Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      newspaper: <HiOutlineNewspaper className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      tag: <HiOutlineTag className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      download: <HiOutlineDownload className={className} />,
      mail: <HiOutlineMail className={className} />,
      bell: <HiOutlineBell className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      rocket: <HiOutlineRocketLaunch className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      presentation: <HiOutlinePresentationChartLine className={className} />,
      star: <HiOutlineStar className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      usergroup: <HiOutlineUsers className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      'thumbs-up': <HiOutlineThumbUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      flag: <HiOutlineFlag className={className} />,
      gift: <HiOutlineGift className={className} />,
      archive: <HiOutlineArchive className={className} />,
      photo: <HiOutlinePhotograph className={className} />,
      doc: <HiOutlineDocument className={className} />,
      link: <HiOutlineLink className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      quote: <FaQuoteLeft className={className} />,
      at: <HiOutlineAtSymbol className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      shareAlt: <AiOutlineShareAlt className={className} />,
      duplicate: <HiOutlineDuplicate className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      play: <HiOutlinePlay className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      phone: <HiOutlinePhone className={className} />,
      user: <HiOutlineUser className={className} />,
    };
    return icons[iconName] || <HiOutlineNewspaper className={className} />;
  }, []);

  /**
   * Formats date to relative time string for better UX
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
   * Returns publication configuration with color and label
   */
  const getPublicationConfig = useCallback((publicationId) => {
    const configs = {
      techcrunch: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'chip',
        label: 'TechCrunch',
      },
      forbes: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'star',
        label: 'Forbes',
      },
      bloomberg: {
        color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        icon: 'chart',
        label: 'Bloomberg',
      },
      wsj: {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'newspaper',
        label: 'Wall Street Journal',
      },
      supplychain: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'SupplyChain Digital',
      },
      gartner: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'academic',
        label: 'Gartner',
      },
    };
    return (
      configs[publicationId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'newspaper',
        label: publicationId,
      }
    );
  }, []);

  /**
   * Get unique years from coverage for filter dropdown
   */
  const getAvailableYears = useCallback(() => {
    const years = new Set();
    allCoverage.forEach((item) => {
      if (item.date) {
        years.add(new Date(item.date).getFullYear());
      }
    });
    return Array.from(years).sort((a, b) => b - a);
  }, [allCoverage]);

  /**
   * Get unique publications for filter dropdown
   */
  const getUniquePublications = useCallback(() => {
    const pubs = new Set();
    allCoverage.forEach((item) => {
      if (item.publication) {
        pubs.add(item.publication);
      }
    });
    return Array.from(pubs);
  }, [allCoverage]);

  /**
   * Toggle save/bookmark status for a coverage item
   */
  const handleSaveCoverage = useCallback((coverageId) => {
    setSavedCoverage((prev) =>
      prev.includes(coverageId) ? prev.filter((id) => id !== coverageId) : [...prev, coverageId]
    );
  }, []);

  /**
   * Toggle expanded state for a coverage item
   */
  const toggleExpanded = useCallback((coverageId) => {
    setExpandedCoverage((prev) => (prev === coverageId ? null : coverageId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedPublication('all');
    setSelectedCategory('all');
    setSelectedYear('all');
  }, []);

  // ==================== FILTERING LOGIC ====================

  const filteredCoverage = useMemo(() => {
    let coverage = [...allCoverage];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      coverage = coverage.filter(
        (c) =>
          c.title?.toLowerCase().includes(query) ||
          c.excerpt?.toLowerCase().includes(query) ||
          c.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedPublication !== 'all') {
      coverage = coverage.filter((c) => c.publication === selectedPublication);
    }

    if (selectedCategory !== 'all') {
      coverage = coverage.filter((c) => c.category === selectedCategory);
    }

    if (selectedYear !== 'all') {
      coverage = coverage.filter(
        (c) => new Date(c.date).getFullYear().toString() === selectedYear
      );
    }

    return coverage;
  }, [allCoverage, searchQuery, selectedPublication, selectedCategory, selectedYear]);

  // Get featured coverage (first marked as featured, otherwise first in filtered list)
  const featuredCoverage = useMemo(() => {
    const featured = allCoverage.find((c) => c.isFeatured);
    return featured || filteredCoverage[0];
  }, [allCoverage, filteredCoverage]);

  // Regular coverage (excluding featured coverage)
  const regularCoverage = useMemo(() => {
    if (!featuredCoverage) return filteredCoverage;
    return filteredCoverage.filter((c) => c.id !== featuredCoverage.id);
  }, [filteredCoverage, featuredCoverage]);

  const availableYears = getAvailableYears();
  const uniquePublications = getUniquePublications();

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Media Coverage - Press Mentions & Publication Highlights"
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            {getIcon('globe', 'w-4 h-4 text-blue-600 dark:text-blue-400 mr-2')}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'In the News'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Media'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Coverage'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              'Discover what leading publications are saying about SupplyChainPro. From feature articles to expert interviews, see our latest media mentions.'}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                {getIcon(stat.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {getIcon('search', 'w-5 h-5 text-gray-400')}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              config?.searchPlaceholder ||
              'Search media coverage by publication, topic, or keyword...'
            }
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search media coverage"
          />
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${category.label}`}
            >
              {getIcon(category.icon, 'w-4 h-4')}
              {category.label}
            </button>
          ))}
        </div>

        {/* ==================== PUBLICATION AND YEAR FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {/* Publication Filter Dropdown */}
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
            {getIcon('newspaper', 'w-4 h-4 text-gray-500')}
            <select
              value={selectedPublication}
              onChange={(e) => setSelectedPublication(e.target.value)}
              className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
              aria-label="Filter by publication"
            >
              <option value="all">All Publications</option>
              {uniquePublications.map((pub) => (
                <option key={pub} value={pub}>
                  {getPublicationConfig(pub).label}
                </option>
              ))}
            </select>
          </div>

          {/* Year Filter Dropdown */}
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
            {getIcon('calendar', 'w-4 h-4 text-gray-500')}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
              aria-label="Filter by year"
            >
              <option value="all">All Years</option>
              {availableYears.map((year) => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ==================== FEATURED COVERAGE ==================== */}
        {featuredCoverage && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl"
                aria-hidden="true"
              />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        Featured Coverage
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('clock', 'w-4 h-4')}
                        <span>{formatRelativeDate(featuredCoverage.date)}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${getPublicationConfig(featuredCoverage.publication).color}`}
                      >
                        {getPublicationConfig(featuredCoverage.publication).label}
                      </div>
                      {featuredCoverage.category && (
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {featuredCoverage.category}
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredCoverage.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredCoverage.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        {featuredCoverage.author?.avatar ? (
                          <img
                            src={featuredCoverage.author.avatar}
                            alt={featuredCoverage.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            {getIcon('user', 'w-4 h-4 text-gray-500')}
                          </div>
                        )}
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {featuredCoverage.author?.name || featuredCoverage.publication}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('eye', 'w-4 h-4')}
                        <span>{featuredCoverage.views || '2.5k'} reads</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={featuredCoverage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        aria-label="Read full article"
                      >
                        Read Full Article
                        {getIcon('external', 'w-4 h-4')}
                      </a>
                      <button
                        onClick={() => handleSaveCoverage(featuredCoverage.id)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedCoverage.includes(featuredCoverage.id)
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                          }`}
                        aria-label={
                          savedCoverage.includes(featuredCoverage.id)
                            ? 'Remove from saved'
                            : 'Save for later'
                        }
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                        {savedCoverage.includes(featuredCoverage.id) ? 'Saved' : 'Save for Later'}
                      </button>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative">
                    <div
                      className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl"
                      aria-hidden="true"
                    />
                    <img
                      src={featuredCoverage.image}
                      alt={featuredCoverage.title}
                      className="relative rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                    {featuredCoverage.publicationLogo && (
                      <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                        <img
                          src={featuredCoverage.publicationLogo}
                          alt={featuredCoverage.publication}
                          className="w-12 h-12 object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== MEDIA COVERAGE GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularCoverage.map((coverage) => {
            const pubConfig = getPublicationConfig(coverage.publication);
            const isExpanded = expandedCoverage === coverage.id;
            const isSaved = savedCoverage.includes(coverage.id);

            return (
              <div
                key={coverage.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Publication Logo or Image */}
                <div className="relative h-32 overflow-hidden bg-gray-50 dark:bg-gray-700 flex items-center justify-center p-4">
                  {coverage.publicationLogo ? (
                    <img
                      src={coverage.publicationLogo}
                      alt={coverage.publication}
                      className="max-h-20 w-auto object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`px-4 py-2 rounded-full ${pubConfig.color}`}>
                      {pubConfig.label}
                    </div>
                  )}
                  {coverage.isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-md">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      {getIcon('calendar', 'w-4 h-4')}
                      <span>{formatRelativeDate(coverage.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon('eye', 'w-4 h-4')}
                      <span>{coverage.views || '1.2k'} reads</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    <a
                      href={coverage.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`Read ${coverage.title}`}
                    >
                      {coverage.title}
                    </a>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {coverage.excerpt}
                  </p>

                  {/* Expandable Quote Section */}
                  {coverage.quote && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(coverage.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : 'Read quote'}
                      >
                        {isExpanded ? 'Show less' : 'Read quote'}
                        <HiArrowRight className="w-4 h-4" />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 animate-fadeIn">
                          {getIcon('quote', 'w-4 h-4 text-blue-500 mb-1')}
                          <p className="text-sm italic text-gray-700 dark:text-gray-300">
                            "{coverage.quote}"
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {coverage.tags && coverage.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {coverage.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${pubConfig.color.includes('orange')
                          ? 'bg-orange-500'
                          : pubConfig.color.includes('blue')
                            ? 'bg-blue-500'
                            : pubConfig.color.includes('emerald')
                              ? 'bg-emerald-500'
                              : 'bg-gray-500'
                          }`}
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {coverage.publication}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleSaveCoverage(coverage.id)}
                        className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                          }`}
                        aria-label={isSaved ? 'Remove from saved' : 'Save article'}
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                      </button>
                      <a
                        href={coverage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                        aria-label="Read article"
                      >
                        Read Article
                        {getIcon('external', 'w-4 h-4')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularCoverage.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('newspaper', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No media coverage found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== PRESS KIT BANNER ==================== */}
        {config?.showPressKit && (
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  {getIcon('download', 'w-6 h-6 text-blue-600 dark:text-blue-400')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Media Resources & Press Kit
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Download logos, brand assets, and media resources
                  </p>
                </div>
              </div>
              <Link
                href={config?.pressKitLink || '/press-kit'}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                {getIcon('download', 'w-4 h-4')}
                Download Press Kit
              </Link>
            </div>
          </div>
        )}

        {/* ==================== MEDIA CONTACT SECTION ==================== */}
        {config?.showMediaContact && config?.mediaContact && (
          <div className="mt-8 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {getIcon('mail', 'w-5 h-5')}
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Media Contact
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{config.mediaContact.name}</h3>
                <p className="text-blue-100">{config.mediaContact.title}</p>
              </div>
              <div className="flex gap-3">
                <a
                  href={`mailto:${config.mediaContact.email}`}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Email media contact"
                >
                  {getIcon('mail', 'w-4 h-4')}
                  Email
                </a>
                <a
                  href={`tel:${config.mediaContact.phone}`}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Call media contact"
                >
                  {getIcon('phone', 'w-4 h-4')}
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Get Media Coverage Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive the latest media mentions and press coverage directly in your inbox.'}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const email = formData.get('email');
                if (email && email.includes('@')) {
                  // Handle subscription logic here
                  e.target.reset();
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for media coverage updates"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
              {config?.newsletter?.disclaimer ||
                'No spam, unsubscribe anytime. Get 1-2 emails per month.'}
            </p>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default MediaCoverageSection1;