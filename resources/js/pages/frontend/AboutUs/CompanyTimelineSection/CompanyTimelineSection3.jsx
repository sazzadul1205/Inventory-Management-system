// frontend/AboutUs/CompanyTimelineSection/CompanyTimelineSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineCalendar,
  HiOutlineStar,
  HiOutlineChartBar,
  HiOutlineArrowRight,
  HiOutlineX,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineFilter,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineClock,
  HiOutlineFlag,
  HiOutlineLightBulb,
  HiOutlineSearch,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineTrendingUp,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch, HiOutlineTrophy } from 'react-icons/hi2';

const CompanyTimelineSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openYear, setOpenYear] = useState(null);
  const [activeEra, setActiveEra] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [currentMilestone, setCurrentMilestone] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [showMilestoneModal, setShowMilestoneModal] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [expandedYear, setExpandedYear] = useState(null);
  const [activeTab, setActiveTab] = useState('timeline');

  // ==================== REFS ====================
  const intervalRef = useRef(null);
  const searchRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const eras = useMemo(() => config?.eras || [], [config?.eras]);
  const quotes = useMemo(() => config?.quotes || [], [config?.quotes]);
  const timeline = useMemo(() => config?.timeline || [], [config?.timeline]);
  const milestones = useMemo(() => config?.milestones || [], [config?.milestones]);
  const yearlyBreakdown = useMemo(() => config?.yearlyBreakdown || [], [config?.yearlyBreakdown]);
  const futureVision = config?.futureVision || "We're just getting started. In the coming years, we plan to expand to 100+ countries, launch AI-powered forecasting with 99% accuracy, and help 100,000 businesses achieve operational excellence.";


  // ==================== FILTERED TIMELINE ====================
  const filteredTimeline = useMemo(() => {
    return timeline.filter(event => {
      const matchesEra = activeEra === 'all' || event.era === activeEra;
      const matchesSearch = searchQuery === '' ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.year.includes(searchQuery);
      return matchesEra && matchesSearch;
    });
  }, [timeline, activeEra, searchQuery]);


  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown,
      HiOutlineChevronUp,
      HiOutlineCalendar,
      HiOutlineStar,
      HiOutlineChartBar,
      HiOutlineArrowRight,
      HiOutlineX,
      HiOutlinePlay,
      HiOutlinePause,
      HiOutlineFilter,
      HiOutlinePrinter,
      HiOutlineDownload,
      HiOutlineClock,
      HiOutlineFlag,
      HiOutlineLightBulb,
      HiOutlineSearch,
      HiOutlineUserGroup,
      HiOutlineGlobeAlt,
      HiOutlineSparkles,
      HiOutlineTrophy,
      HiOutlineTrendingUp,
      HiOutlineRocketLaunch,
    };
    const IconComponent = icons[iconName] || HiOutlineCalendar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get era color class for timeline dots and headers
   * @param {string} eraId - Era identifier
   * @returns {string} CSS class for color
   */
  const getEraColor = useCallback((eraId) => {
    switch (eraId) {
      case 'founding': return 'bg-amber-500';
      case 'growth': return 'bg-emerald-500';
      case 'innovation': return 'bg-violet-500';
      case 'global': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  }, []);

  /**
   * Get era background color for cards
   * @param {string} eraId - Era identifier
   * @returns {string} CSS class for background
   */
  const getEraBgLight = useCallback((eraId) => {
    switch (eraId) {
      case 'founding': return 'bg-amber-50 dark:bg-amber-900/20';
      case 'growth': return 'bg-emerald-50 dark:bg-emerald-900/20';
      case 'innovation': return 'bg-violet-50 dark:bg-violet-900/20';
      case 'global': return 'bg-orange-50 dark:bg-orange-900/20';
      default: return 'bg-gray-50 dark:bg-gray-700/50';
    }
  }, []);

  /**
   * Toggle timeline year expansion
   * @param {number} index - Index of the timeline item to toggle
   */
  const toggleYear = useCallback((index) => {
    setOpenYear(prev => prev === index ? null : index);
  }, []);

  /**
   * Toggle yearly breakdown year expansion
   * @param {string} year - Year to toggle
   */
  const toggleYearlyYear = useCallback((year) => {
    setExpandedYear(prev => prev === year ? null : year);
  }, []);

  /**
   * Export timeline to JSON
   */
  const handleExport = useCallback(() => {
    const exportData = filteredTimeline.map(event => ({
      year: event.year,
      title: event.title,
      description: event.description,
      details: event.details,
      metric: event.metric,
      era: eras.find(e => e.id === event.era)?.name || event.era,
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'company-timeline-export.json');
    linkElement.click();
  }, [filteredTimeline, eras]);

  /**
   * Print timeline
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /**
   * Clear search query
   */
  const clearSearch = useCallback(() => {
    setSearchQuery('');
    searchRef.current?.focus();
  }, []);

  /**
   * Next milestone in carousel
   */
  const nextMilestone = useCallback(() => {
    setCurrentMilestone((prev) => (prev + 1) % milestones.length);
  }, [milestones.length]);

  /**
   * Previous milestone in carousel
   */
  const prevMilestone = useCallback(() => {
    setCurrentMilestone((prev) => (prev - 1 + milestones.length) % milestones.length);
  }, [milestones.length]);

  // ==================== AUTO-PLAY EFFECT ====================
  useEffect(() => {
    if (autoplay && milestones.length > 0 && activeTab === 'milestones') {
      intervalRef.current = setInterval(() => {
        setCurrentMilestone((prev) => (prev + 1) % milestones.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, milestones.length, activeTab]);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Company Timeline Knowledge Base"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-amber-50/30 to-transparent dark:from-amber-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-amber-300/5 dark:bg-amber-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-amber-100 dark:bg-amber-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-amber-200 dark:border-amber-800'}`}
            aria-label="Timeline badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-amber-700 dark:text-amber-300'}`}>
              {config?.badge?.text || "Our Story"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'The Moments That'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-amber-600 to-orange-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Define Us'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Every milestone, every breakthrough, every challenge overcome—our journey is built on moments that matter. Explore the timeline of our evolution, from a bold idea to a global movement transforming inventory management."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-amber-600 dark:text-amber-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'timeline'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineCalendar", "w-4 h-4")}
            Timeline
          </button>
          <button
            onClick={() => setActiveTab('milestones')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'milestones'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineStar", "w-4 h-4")}
            Milestones
          </button>
          <button
            onClick={() => setActiveTab('yearly')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'yearly'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineClock", "w-4 h-4")}
            Year by Year
          </button>
          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 ${activeTab === 'quotes'
              ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("HiOutlineLightBulb", "w-4 h-4")}
            Reflections
          </button>
        </div>

        {/* ==================== TIMELINE TAB ==================== */}
        {activeTab === 'timeline' && (
          <>
            {/* Era Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveEra('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeEra === 'all'
                  ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                All Eras
              </button>
              {eras.map((era) => (
                <button
                  key={era.id}
                  onClick={() => setActiveEra(era.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeEra === era.id
                    ? 'bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIcon(era.icon, "w-3 h-3")}
                  {era.name}
                </button>
              ))}
            </div>

            {/* Search and Action Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative" ref={searchRef}>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {getIcon("HiOutlineSearch", "w-5 h-5")}
                </div>
                <input
                  type="text"
                  placeholder="Search timeline events by year or title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  aria-label="Search timeline"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    aria-label="Clear search"
                  >
                    {getIcon("HiOutlineX", "w-5 h-5")}
                  </button>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-3 border rounded-xl transition-all duration-300 flex items-center gap-2 ${showFilters
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  aria-label="Toggle filters"
                >
                  {getIcon("HiOutlineFilter", "w-4 h-4")}
                  Filters
                </button>
                <button
                  onClick={handleExport}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  title="Export Timeline"
                >
                  {getIcon("HiOutlineDownload", "w-4 h-4")}
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  title="Print Timeline"
                >
                  {getIcon("HiOutlinePrinter", "w-4 h-4")}
                </button>
              </div>
            </div>

            {/* Expanded Filters Panel */}
            {showFilters && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Era</label>
                    <select
                      value={activeEra}
                      onChange={(e) => setActiveEra(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all"
                    >
                      <option value="all">All Eras</option>
                      {eras.map((era) => (
                        <option key={era.id} value={era.id}>{era.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sort By</label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 transition-all">
                      <option>Chronological (Oldest First)</option>
                      <option>Recent First</option>
                    </select>
                  </div>
                </div>
                {activeEra !== 'all' && (
                  <div className="mt-4 text-right">
                    <button
                      onClick={() => setActiveEra('all')}
                      className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Results Count */}
            {searchQuery && (
              <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                Found {filteredTimeline.length} event{filteredTimeline.length !== 1 ? 's' : ''} for "{searchQuery}"
              </div>
            )}

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto mb-16">
              {/* Vertical line - hidden on mobile */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-amber-500 to-orange-500 hidden md:block" aria-hidden="true" />

              <div className="space-y-8">
                {filteredTimeline.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Empty spacer for desktop layout */}
                    <div className="hidden md:block w-1/2" />

                    {/* Center dot - hidden on mobile */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${getEraColor(event.era)} rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 hidden md:block`} />

                    {/* Timeline card */}
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div
                        onClick={() => toggleYear(index)}
                        className={`${getEraBgLight(event.era)} rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 cursor-pointer border border-gray-100 dark:border-gray-700 group`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleYear(index)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400">
                            {getIcon("HiOutlineCalendar", "w-4 h-4")}
                            <span>{event.year}</span>
                          </div>
                          <div className="text-amber-600 dark:text-amber-400 text-3xl group-hover:scale-110 transition-transform">
                            {getIcon(event.icon, "w-6 h-6")}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{event.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{event.description}</p>

                        {/* Expanded details */}
                        {openYear === index && event.details && (
                          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{event.details}</p>
                            {event.metric && (
                              <div className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-amber-600 dark:text-amber-400 bg-white dark:bg-gray-700 px-2 py-1 rounded-full">
                                {getIcon("HiOutlineChartBar", "w-3 h-3")}
                                <span>{event.metric}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Read more button */}
                        {event.details && (
                          <button className="mt-2 text-xs text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1 transition-colors">
                            {openYear === index ? 'Show less' : 'Read more'}
                            {getIcon("HiOutlineChevronDown", `w-3 h-3 transition-transform duration-200 ${openYear === index ? 'rotate-180' : ''}`)}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty state */}
              {filteredTimeline.length === 0 && (
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                  <div className="flex justify-center mb-4 text-gray-400">
                    {getIcon("HiOutlineCalendar", "w-12 h-12")}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No events found</h3>
                  <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveEra('all');
                    }}
                    className="mt-4 px-4 py-2 text-amber-600 dark:text-amber-400 font-semibold text-sm hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* ==================== MILESTONES TAB ==================== */}
        {activeTab === 'milestones' && milestones.length > 0 && (
          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className={`relative h-56 ${getEraColor(milestones[currentMilestone]?.era)}`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <div className="text-3xl font-bold">{milestones[currentMilestone]?.year}</div>
                    <div className="text-xl font-semibold">{milestones[currentMilestone]?.title}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-4 leading-relaxed">{milestones[currentMilestone]?.description}</p>
                  {milestones[currentMilestone]?.details && (
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{milestones[currentMilestone]?.details}</p>
                    </div>
                  )}
                  {milestones[currentMilestone]?.metric && (
                    <div className="inline-flex items-center gap-2 text-sm font-medium bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full text-green-600 dark:text-green-400 mb-4">
                      {getIcon("HiOutlineChartBar", "w-4 h-4")}
                      <span>{milestones[currentMilestone]?.metric}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-2">
                      {milestones.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setCurrentMilestone(idx);
                            setAutoplay(false);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${currentMilestone === idx ? 'w-8 bg-amber-600' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
                          aria-label={`Go to milestone ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={prevMilestone}
                        className="p-2 text-gray-500 hover:text-amber-600 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Previous milestone"
                      >
                        {getIcon("HiOutlineChevronUp", "w-5 h-5 rotate-270")}
                      </button>
                      <button
                        onClick={nextMilestone}
                        className="p-2 text-gray-500 hover:text-amber-600 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Next milestone"
                      >
                        {getIcon("HiOutlineChevronUp", "w-5 h-5 rotate-90")}
                      </button>
                      <button
                        onClick={() => setAutoplay(!autoplay)}
                        className="p-2 text-gray-500 hover:text-amber-600 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label={autoplay ? "Pause autoplay" : "Play autoplay"}
                      >
                        {autoplay ? getIcon("HiOutlinePause", "w-4 h-4") : getIcon("HiOutlinePlay", "w-4 h-4")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setSelectedMilestone(milestones[currentMilestone]);
                  setShowMilestoneModal(true);
                }}
                className="text-amber-600 dark:text-amber-400 text-sm font-semibold hover:underline inline-flex items-center gap-1 transition-colors"
              >
                View Full Details
                {getIcon("HiOutlineArrowRight", "w-3 h-3")}
              </button>
            </div>
          </div>
        )}

        {/* ==================== YEAR BY YEAR TAB ==================== */}
        {activeTab === 'yearly' && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-4">
              {yearlyBreakdown.map((yearData, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                  <button
                    onClick={() => toggleYearlyYear(yearData.year)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    aria-label={expandedYear === yearData.year ? "Collapse year" : "Expand year"}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{yearData.year}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{yearData.events.length} events</div>
                    </div>
                    <div className="text-amber-500 dark:text-amber-400">
                      {expandedYear === yearData.year ? getIcon("HiOutlineChevronUp", "w-5 h-5") : getIcon("HiOutlineChevronDown", "w-5 h-5")}
                    </div>
                  </button>
                  {expandedYear === yearData.year && (
                    <div className="border-t border-gray-100 dark:border-gray-700 p-5 space-y-4 animate-fadeIn">
                      {yearData.events.map((event, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="text-amber-600 dark:text-amber-400 text-2xl shrink-0">
                            {getIcon(event.icon, "w-6 h-6")}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{event.description}</p>
                            {event.metric && (
                              <div className="mt-1 text-xs font-medium text-amber-600 dark:text-amber-400">{event.metric}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== QUOTES/REFLECTIONS TAB ==================== */}
        {activeTab === 'quotes' && quotes.length > 0 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-amber-600 dark:text-amber-400 text-3xl">
                      {getIcon(quote.icon, "w-8 h-8")}
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed mb-3">"{quote.text}"</p>
                      <div className="font-semibold text-gray-900 dark:text-white">{quote.author}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{quote.title}</div>
                      <div className="text-xs text-amber-600 dark:text-amber-400 mt-1">{quote.year}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== MILESTONE MODAL ==================== */}
        {showMilestoneModal && selectedMilestone && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowMilestoneModal(false)}
            role="dialog"
            aria-label="Milestone details"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative h-32 ${getEraColor(selectedMilestone.era)} rounded-t-3xl`}>
                <div className="absolute inset-0 bg-black/20 rounded-t-3xl" />
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="text-2xl font-bold">{selectedMilestone.year}</div>
                  <div className="text-lg font-semibold">{selectedMilestone.title}</div>
                </div>
                <button
                  onClick={() => setShowMilestoneModal(false)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                  aria-label="Close modal"
                >
                  {getIcon("HiOutlineX", "w-6 h-6")}
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{selectedMilestone.description}</p>
                {selectedMilestone.details && (
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Learn More</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{selectedMilestone.details}</p>
                  </div>
                )}
                {selectedMilestone.metric && (
                  <div className="inline-flex items-center gap-2 text-sm font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-2 rounded-lg text-blue-600 dark:text-blue-400">
                    {getIcon("HiOutlineChartBar", "w-4 h-4")}
                    <span>{selectedMilestone.metric}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== FUTURE VISION ==================== */}
        <div className="bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center mb-12 border border-amber-100 dark:border-gray-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            {getIcon("HiOutlineFlag", "w-8 h-8 text-amber-600")}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">What's Next?</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            {futureVision}
          </p>
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold hover:gap-3 transition-all duration-200 group"
          >
            View Our Roadmap
            {getIcon("HiOutlineArrowRight", "w-4 h-4 group-hover:translate-x-0.5 transition-transform")}
          </Link>
        </div>

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-amber-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineRocketLaunch", "w-6 h-6 text-amber-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Be part of our story. Join us as we write the next chapter."}
            </span>
            <Link
              href={config?.contactLink || "/careers"}
              className="px-6 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Join Our Journey"}
              {getIcon("HiOutlineArrowRight", "w-4 h-4")}
            </Link>
          </div>
        </div>
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .rotate-90 {
          transform: rotate(90deg);
        }
        .rotate-270 {
          transform: rotate(270deg);
        }
        @media print {
          .no-print, button:not(.print-button), .bg-noise-pattern {
            display: none !important;
          }
          body {
            background: white;
          }
          .bg-white, .dark\\:bg-gray-800 {
            background: white !important;
          }
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default CompanyTimelineSection3;