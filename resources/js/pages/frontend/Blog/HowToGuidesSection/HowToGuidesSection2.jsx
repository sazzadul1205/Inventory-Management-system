// frontend/Blog/HowToGuidesSection/HowToGuidesSection2.jsx

/**
 * How-to Guides Section - Interactive Learning Hub
 * 
 * Unique design elements:
 * - Interactive step completion tracking with checkboxes
 * - Progress bars for each guide showing completion percentage
 * - Learning paths (curated skill journeys)
 * - Grid/List view toggle for content browsing
 * - Video thumbnail overlays with play buttons
 * - Rating and review metrics for guides
 * - Author attribution with roles
 * - Weekly newsletter signup with popular topics
 * - Difficulty badges (Beginner/Intermediate/Advanced)
 * - Category filters with custom icons
 * - Step preview with completion toggles
 * - Stats cards for total guides, videos, learners
 * - Animated gradient backgrounds
 * 
 * All icons from react-icons (hi only - Heroicons)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons set for consistent, clean iconography
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlinePlay,
  HiOutlineDownload,
  HiOutlineDocumentText,
  HiOutlineCode,
  HiOutlineLink,
  HiOutlineExternalLink,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineStar,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineEye,
  HiOutlineCalendar,
  HiOutlineTag,
  HiOutlineSparkles,
  HiOutlineTrendingUp,
  HiOutlineQuestionMarkCircle,
  HiOutlineClipboardList,
  HiOutlineTemplate,
  HiOutlinePencil,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineFire,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineGlobe,
} from 'react-icons/hi';

const HowToGuidesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [completedSteps, setCompletedSteps] = useState({});
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== MEMOIZED DATA ====================
  const categories = useMemo(() => config?.categories || [
    { id: 'all', label: 'All Guides', icon: 'sparkles' },
    { id: 'getting-started', label: 'Getting Started', icon: 'rocket' },
    { id: 'warehouse', label: 'Warehouse', icon: 'cube' },
    { id: 'fulfillment', label: 'Fulfillment', icon: 'truck' },
    { id: 'analytics', label: 'Analytics', icon: 'chart' },
    { id: 'api', label: 'API & Integration', icon: 'code' }
  ], [config?.categories]);
  const guides = useMemo(() => config?.guides || [], [config?.guides]);
  const stats = config?.stats || { totalGuides: 0, videoTutorials: 0, students: '0' };
  const learningPaths = useMemo(() => config?.learningPaths || [], [config?.learningPaths]);


  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Uses Heroicons exclusively for visual consistency
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      academic: HiOutlineAcademicCap,
      book: HiOutlineBookOpen,
      lightbulb: HiOutlineLightBulb,
      cog: HiOutlineCog,
      chart: HiOutlineChartBar,
      users: HiOutlineUsers,
      shield: HiOutlineShieldCheck,
      clock: HiOutlineClock,
      play: HiOutlinePlay,
      download: HiOutlineDownload,
      document: HiOutlineDocumentText,
      code: HiOutlineCode,
      link: HiOutlineLink,
      external: HiOutlineExternalLink,
      check: HiOutlineCheckCircle,
      star: HiOutlineStar,
      filter: HiOutlineFilter,
      search: HiOutlineSearch,
      chevronDown: HiOutlineChevronDown,
      chevronUp: HiOutlineChevronUp,
      thumbsUp: HiOutlineThumbUp,
      chat: HiOutlineChat,
      share: HiOutlineShare,
      bookmark: HiOutlineBookmark,
      eye: HiOutlineEye,
      calendar: HiOutlineCalendar,
      tag: HiOutlineTag,
      sparkles: HiOutlineSparkles,
      rocket: HiOutlineTrendingUp,
      trending: HiOutlineTrendingUp,
      question: HiOutlineQuestionMarkCircle,
      clipboard: HiOutlineClipboardList,
      template: HiOutlineTemplate,
      pencil: HiOutlinePencil,
      video: HiOutlineVideoCamera,
      microphone: HiOutlineMicrophone,
      menu: HiOutlineMenu,
      grid: HiOutlineViewGrid,
      list: HiOutlineViewList,
      close: HiOutlineX,
      mail: HiOutlineMail,
      bell: HiOutlineBell,
      flag: HiOutlineFlag,
      gift: HiOutlineGift,
      fire: HiOutlineFire,
      truck: HiOutlineTruck,
      cube: HiOutlineCube,
      globe: HiOutlineGlobe,
    };
    const IconComponent = icons[iconName];
    if (!IconComponent) {
      return <HiOutlineBookOpen className={className} />;
    }
    return <IconComponent className={className} />;
  }, []);

  /**
   * Returns difficulty badge configuration
   */
  const getDifficultyConfig = useCallback((level) => {
    const configs = {
      beginner: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Beginner', icon: 'star' },
      intermediate: { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', label: 'Intermediate', icon: 'rocket' },
      advanced: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', label: 'Advanced', icon: 'fire' }
    };
    return configs[level] || configs.beginner;
  }, []);

  /**
   * Returns category badge configuration
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      'getting-started': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'rocket', label: 'Getting Started' },
      'warehouse': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cube', label: 'Warehouse' },
      'fulfillment': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'truck', label: 'Fulfillment' },
      'analytics': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'chart', label: 'Analytics' },
      'api': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'code', label: 'API & Integration' },
      'security': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Security' }
    };
    return configs[categoryId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400', icon: 'book', label: 'Guide' };
  }, []);

  /**
   * Toggle step completion status
   */
  const handleStepComplete = useCallback((guideId, stepIndex) => {
    setCompletedSteps(prev => {
      const guideSteps = prev[guideId] ? new Set(prev[guideId]) : new Set();
      if (guideSteps.has(stepIndex)) {
        guideSteps.delete(stepIndex);
      } else {
        guideSteps.add(stepIndex);
      }
      return { ...prev, [guideId]: Array.from(guideSteps) };
    });
  }, []);

  /**
   * Calculate guide completion progress percentage
   */
  const getGuideProgress = useCallback((guide) => {
    const completed = completedSteps[guide.id]?.length || 0;
    const total = guide.steps?.length || 0;
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  }, [completedSteps]);

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

  /**
   * Clears all active filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  // ==================== FILTERING LOGIC ====================

  const filteredGuides = useMemo(() => {
    let filtered = [...guides];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(guide =>
        guide.title?.toLowerCase().includes(query) ||
        guide.description?.toLowerCase().includes(query) ||
        guide.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(guide => guide.category === selectedCategory);
    }

    return filtered;
  }, [guides, searchQuery, selectedCategory]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all';

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="How-to Guides - Interactive Learning Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-radial-gradient" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon("video", "w-4 h-4 text-blue-600 dark:text-blue-400")}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Interactive Tutorials"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Learn"}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || "Supply Chain"}
              </span>{' '}
              {config?.title?.suffix || "Operations"}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Master supply chain management with our interactive tutorials, video walkthroughs, and step-by-step guides. Learn at your own pace."}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.totalGuides || 0}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Step-by-Step Guides</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{stats.videoTutorials || 0}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Video Tutorials</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.students || "0"}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Active Learners</div>
            </div>
          </div>
        </div>

        {/* ==================== SEARCH AND VIEW MODE ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {getIcon("search", "w-5 h-5 text-gray-400")}
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={config?.searchPlaceholder || "Search tutorials, guides, or topics..."}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              aria-label="Search guides"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Clear search"
              >
                {getIcon("close", "w-5 h-5")}
              </button>
            )}
          </div>

          <div className="flex gap-2">
            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Grid view"
              >
                {getIcon("grid", "w-4 h-4")}
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="List view"
              >
                {getIcon("list", "w-4 h-4")}
              </button>
            </div>
          </div>
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${category.label} guides`}
            >
              {getIcon(category.icon, "w-4 h-4")}
              {category.label}
            </button>
          ))}
        </div>

        {/* ==================== LEARNING PATHS SECTION ==================== */}
        {config?.showLearningPaths && learningPaths.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  {getIcon("flag", "w-6 h-6 text-blue-600")}
                  Learning Paths
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Curated learning journeys to master specific skills</p>
              </div>
              <Link href="/learning-paths" className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                View all paths →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {learningPaths.map((path) => (
                <div
                  key={path.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${path.bgColor || 'bg-blue-600'} flex items-center justify-center`}>
                      {getIcon(path.icon, "w-6 h-6 text-white")}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{path.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{path.guides} guides • {path.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{path.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500 dark:text-gray-400">Progress</span>
                      <span className="text-blue-600 dark:text-blue-400">{path.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${path.progress}%` }} />
                    </div>
                  </div>
                  <Link
                    href={path.link}
                    className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold group/link"
                  >
                    Start learning
                    <HiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== GUIDES GRID/LIST VIEW ==================== */}
        <div className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredGuides.map((guide) => {
            const difficultyConfig = getDifficultyConfig(guide.difficulty);
            const categoryConfig = getCategoryConfig(guide.category);
            const progress = getGuideProgress(guide);
            const totalSteps = guide.steps?.length || 0;
            const completedCount = completedSteps[guide.id]?.length || 0;

            return (
              <div
                key={guide.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Guide Image / Video Thumbnail */}
                <Link href={guide.link} className={`block overflow-hidden relative ${viewMode === 'list' ? 'md:w-80 md:shrink-0' : ''}`}>
                  <div className="relative">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-56 md:h-full' : 'h-56'
                        }`}
                      loading="lazy"
                    />
                    {guide.videoUrl && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          {getIcon("play", "w-6 h-6 text-blue-600 ml-1")}
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                        {categoryConfig.label}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${difficultyConfig.color}`}>
                        {difficultyConfig.label}
                      </span>
                    </div>
                    {progress > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                        <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                      </div>
                    )}
                  </div>
                </Link>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      {getIcon("clock", "w-4 h-4")}
                      <span>{guide.readTime || '10 min read'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon("eye", "w-4 h-4")}
                      <span>{guide.views || '1.2k'} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon("star", "w-4 h-4")}
                      <span>{guide.rating || '4.8'} ({guide.reviews || 50})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    <Link href={guide.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {guide.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {guide.description}
                  </p>

                  {/* Progress Bar */}
                  {totalSteps > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500 dark:text-gray-400">Progress</span>
                        <span className="text-blue-600 dark:text-blue-400">{progress}% complete</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {completedCount} of {totalSteps} steps completed
                      </p>
                    </div>
                  )}

                  {/* Step Preview with Completion Toggles */}
                  {guide.steps && guide.steps.length > 0 && (
                    <div className="mb-4">
                      <div className="space-y-2">
                        {guide.steps.slice(0, 3).map((step, idx) => {
                          const isCompleted = completedSteps[guide.id]?.includes(idx);
                          return (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <button
                                onClick={() => handleStepComplete(guide.id, idx)}
                                className="mt-0.5 focus:outline-none"
                                aria-label={isCompleted ? "Mark step incomplete" : "Mark step complete"}
                              >
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isCompleted
                                  ? 'bg-emerald-500 border-emerald-500'
                                  : 'border-gray-300 dark:border-gray-600 hover:border-emerald-500'
                                  }`}>
                                  {isCompleted && <HiOutlineCheckCircle className="w-3 h-3 text-white" />}
                                </div>
                              </button>
                              <span className={`${isCompleted ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'}`}>
                                {step}
                              </span>
                            </div>
                          );
                        })}
                        {guide.steps.length > 3 && (
                          <p className="text-sm text-blue-600 dark:text-blue-400 pl-7">
                            + {guide.steps.length - 3} more steps
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {guide.tags && guide.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {guide.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer with Author and Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <img
                        src={guide.author?.avatar}
                        alt={guide.author?.name}
                        className="w-8 h-8 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{guide.author?.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{guide.author?.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {guide.videoUrl && (
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" aria-label="Watch video">
                          {getIcon("play", "w-4 h-4")}
                        </button>
                      )}
                      <Link
                        href={guide.link}
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-2 transition-all duration-300"
                      >
                        Start Guide
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredGuides.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("book", "w-16 h-16")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No guides found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {getIcon("mail", "w-6 h-6")}
                  <span className="text-sm font-semibold uppercase tracking-wider">Weekly Tutorials</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {config?.newsletter?.title || "Get new guides in your inbox"}
                </h3>
                <p className="text-blue-100 mb-6">
                  {config?.newsletter?.description || "Subscribe to receive weekly tutorials, tips, and best practices delivered straight to your inbox."}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Email for guide updates"
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
                  {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. Get 1-2 emails per week."}
                </p>
              </div>

              {/* Popular Topics */}
              <div>
                <p className="text-sm font-medium mb-4">Popular topics this week:</p>
                <div className="flex flex-wrap gap-2">
                  {config?.popularTopics?.map((topic, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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

export default HowToGuidesSection2;