// page/frontend/Careers/OpenPositionsSection/OpenPositionsSection2.jsx

/**
 * Open Positions Section II - Advanced Career Opportunities Directory
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Open Positions, Departments, Locations, Team Size)
 * - Sort Dropdown (Latest First, Alphabetical, Highest Salary)
 * - Grid/List View Toggle for Position Browsing
 * - Multi-filter System (Department, Location, Employment Type, Experience Level)
 * - Active Filter Indicators with Count Badge
 * - Most Viewed Positions Row with Horizontal Cards
 * - Favorite/Save Functionality with Heart Icon
 * - Department Pills with Count Badges
 * - Location Quick Filter Pills
 * - Experience Level Badges (Entry, Mid, Senior, Lead)
 * - Employment Type Color-Coded Badges
 * - Expandable Requirements Section with Checkmark List
 * - Search across job titles, descriptions, and tags
 * - Responsive Grid and List Layouts
 * - Animated Gradient Orbs in Background
 * - Join Talent Community CTA Banner
 * - Newsletter Subscription Integration
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineGlobe,
  HiOutlineCalendar,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineUsers,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineHeart,
  HiOutlineMap,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineCode,
  HiOutlineCog,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from "react-icons/md";

const OpenPositionsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [savedPositions, setSavedPositions] = useState([]);
  const [expandedPosition, setExpandedPosition] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== MEMOIZED DATA ====================
  const allPositions = useMemo(() => config?.positions || [], [config?.positions]);

  const departments = useMemo(
    () =>
      config?.departments || [
        { id: 'all', label: 'All Departments', icon: 'briefcase', count: allPositions.length },
        { id: 'engineering', label: 'Engineering', icon: 'code' },
        { id: 'product', label: 'Product', icon: 'lightbulb' },
        { id: 'sales', label: 'Sales', icon: 'chart' },
        { id: 'marketing', label: 'Marketing', icon: 'trending' },
        { id: 'customer-success', label: 'Customer Success', icon: 'users' },
        { id: 'operations', label: 'Operations', icon: 'cog' },
      ],
    [config?.departments, allPositions.length]
  );

  const locations = useMemo(
    () =>
      config?.locations || [
        { id: 'all', label: 'All Locations', flag: '🌐' },
        { id: 'remote', label: 'Remote', flag: '🏠' },
        { id: 'new-york', label: 'New York, NY', flag: '🗽' },
        { id: 'san-francisco', label: 'San Francisco, CA', flag: '🌉' },
        { id: 'london', label: 'London, UK', flag: '🇬🇧' },
        { id: 'singapore', label: 'Singapore', flag: '🇸🇬' }
      ],
    [config?.locations]
  );

  const employmentTypes = useMemo(
    () => [
      { id: 'all', label: 'All Types', icon: 'briefcase' },
      { id: 'full-time', label: 'Full-Time', icon: 'clock' },
      { id: 'part-time', label: 'Part-Time', icon: 'clock' },
      { id: 'contract', label: 'Contract', icon: 'document' },
      { id: 'internship', label: 'Internship', icon: 'academic' },
      { id: 'remote', label: 'Remote', icon: 'globe' }
    ],
    []
  );

  const experienceLevels = useMemo(
    () => [
      { id: 'all', label: 'All Levels' },
      { id: 'entry', label: 'Entry Level' },
      { id: 'mid', label: 'Mid Level' },
      { id: 'senior', label: 'Senior' },
      { id: 'lead', label: 'Lead' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "25+", label: "Open Positions", icon: "briefcase", trend: "+5", trendUp: true },
        { value: "8", label: "Departments", icon: "users", trend: "+2", trendUp: true },
        { value: "6", label: "Locations", icon: "globe", trend: "+1", trendUp: true },
        { value: "100+", label: "Team Members", icon: "usergroup", trend: "+20", trendUp: true }
      ],
    [config?.stats]
  );

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      briefcase: <HiOutlineBriefcase className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      clock: <HiOutlineClock className={className} />,
      'currency-dollar': <HiOutlineCurrencyDollar className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      eye: <HiOutlineEye className={className} />,
      tag: <HiOutlineTag className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      mail: <HiOutlineMail className={className} />,
      bell: <HiOutlineBell className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      usergroup: <HiOutlineUsers className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      arrow: <HiArrowRight className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      presentation: <HiOutlinePresentationChartLine className={className} />,
      star: <HiOutlineStar className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      heart: <HiOutlineHeart className={className} />,
      map: <HiOutlineMap className={className} />,
      headphones: <HiOutlineHeadphones className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      code: <HiOutlineCode className={className} />,
      cog: <HiOutlineCog className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
    };
    return icons[iconName] || <HiOutlineBriefcase className={className} />;
  }, []);

  /**
   * Returns department configuration with color, icon, and label
   */
  const getDepartmentConfig = useCallback((departmentId) => {
    const configs = {
      engineering: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'code', label: 'Engineering', borderColor: 'border-blue-200 dark:border-blue-800' },
      product: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'lightbulb', label: 'Product', borderColor: 'border-purple-200 dark:border-purple-800' },
      sales: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'chart', label: 'Sales', borderColor: 'border-emerald-200 dark:border-emerald-800' },
      marketing: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'trending', label: 'Marketing', borderColor: 'border-orange-200 dark:border-orange-800' },
      'customer-success': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'users', label: 'Customer Success', borderColor: 'border-red-200 dark:border-red-800' },
      operations: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Operations', borderColor: 'border-indigo-200 dark:border-indigo-800' }
    };
    return configs[departmentId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', icon: 'briefcase', label: departmentId };
  }, []);

  /**
   * Returns employment type configuration with color and badge
   */
  const getTypeConfig = useCallback((typeId) => {
    const configs = {
      'full-time': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Full-Time', badge: 'Full-Time' },
      'part-time': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Part-Time', badge: 'Part-Time' },
      contract: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', label: 'Contract', badge: 'Contract' },
      internship: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', label: 'Internship', badge: 'Internship' },
      remote: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', label: 'Remote', badge: 'Remote' }
    };
    return configs[typeId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', label: typeId, badge: typeId };
  }, []);

  /**
   * Returns experience level configuration
   */
  const getExperienceConfig = useCallback((levelId) => {
    const configs = {
      entry: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Entry Level', badge: 'Entry Level' },
      mid: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Mid Level', badge: 'Mid Level' },
      senior: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', label: 'Senior', badge: 'Senior' },
      lead: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', label: 'Lead', badge: 'Lead' }
    };
    return configs[levelId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', label: levelId, badge: levelId };
  }, []);

  /**
   * Toggle save/bookmark status for a position
   */
  const handleSavePosition = useCallback((positionId) => {
    setSavedPositions((prev) =>
      prev.includes(positionId) ? prev.filter((id) => id !== positionId) : [...prev, positionId]
    );
  }, []);

  /**
   * Toggle expanded state for a position
   */
  const toggleExpanded = useCallback((positionId) => {
    setExpandedPosition((prev) => (prev === positionId ? null : positionId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedDepartment('all');
    setSelectedLocation('all');
    setSelectedType('all');
    setSelectedExperience('all');
    setSortBy('date');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================
  const filteredPositions = useMemo(() => {
    let positions = [...allPositions];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      positions = positions.filter(
        (p) =>
          p.title?.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedDepartment !== 'all') {
      positions = positions.filter((p) => p.department === selectedDepartment);
    }

    if (selectedLocation !== 'all') {
      positions = positions.filter((p) => p.location === selectedLocation);
    }

    if (selectedType !== 'all') {
      positions = positions.filter((p) => p.type === selectedType);
    }

    if (selectedExperience !== 'all') {
      positions = positions.filter((p) => p.experience === selectedExperience);
    }

    // Sorting
    if (sortBy === 'date') {
      positions.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
    } else if (sortBy === 'title') {
      positions.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'salary') {
      positions.sort((a, b) => {
        const aSalary = parseInt(a.salaryRange?.min || a.salary?.replace(/[^0-9]/g, '') || 0);
        const bSalary = parseInt(b.salaryRange?.min || b.salary?.replace(/[^0-9]/g, '') || 0);
        return bSalary - aSalary;
      });
    }

    return positions;
  }, [allPositions, searchQuery, selectedDepartment, selectedLocation, selectedType, selectedExperience, sortBy]);

  // Update department counts for display
  const departmentsWithCount = useMemo(() => {
    return departments.map((dept) => {
      if (dept.id === 'all') {
        return { ...dept, count: filteredPositions.length };
      }
      const count = allPositions.filter((p) => p.department === dept.id).length;
      return { ...dept, count };
    });
  }, [departments, allPositions, filteredPositions.length]);

  // Most viewed positions (top 4 by views)
  const mostViewedPositions = useMemo(() => {
    return [...allPositions]
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 4);
  }, [allPositions]);

  const activeFiltersCount = [
    selectedDepartment !== 'all',
    selectedLocation !== 'all',
    selectedType !== 'all',
    selectedExperience !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Open Positions Directory"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon('briefcase', 'w-4 h-4 text-blue-600 dark:text-blue-400')}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || 'Join Our Team'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Current'}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Open Positions'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Join our mission to transform supply chain management. Explore opportunities to grow your career with a team of innovators and problem-solvers.'}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                {stat.trend && (
                  <div className={`text-xs mt-1 ${stat.trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
                    {stat.trend}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== SEARCH AND FILTERS BAR ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {getIcon('search', 'w-5 h-5 text-gray-400')}
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                config?.searchPlaceholder || 'Search by job title, department, or keyword...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search positions"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Sort positions"
            >
              <option value="date">Latest First</option>
              <option value="title">Alphabetical</option>
              <option value="salary">Highest Salary</option>
            </select>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label="Toggle filters"
            >
              {getIcon('filter', 'w-4 h-4')}
              Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''
                  }`}
                aria-label="Grid view"
              >
                {getIcon('grid', 'w-5 h-5')}
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''
                  }`}
                aria-label="List view"
              >
                {getIcon('list', 'w-5 h-5')}
              </button>
            </div>
          </div>
        </div>

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Department Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by department"
                >
                  <option value="all">All Departments</option>
                  {departments
                    .filter((d) => d.id !== 'all')
                    .map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.label}
                      </option>
                    ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by location"
                >
                  {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.flag} {loc.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Employment Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Employment Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by employment type"
                >
                  {employmentTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Experience Level
                </label>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by experience level"
                >
                  {experienceLevels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== DEPARTMENT PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {departmentsWithCount.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedDepartment === dept.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${dept.label} positions`}
            >
              {getIcon(dept.icon, 'w-4 h-4')}
              {dept.label}
              {dept.count !== undefined && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedDepartment === dept.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                >
                  {dept.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== LOCATION QUICK FILTERS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {locations
            .filter((loc) => loc.id !== 'all')
            .map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(selectedLocation === loc.id ? 'all' : loc.id)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 flex items-center gap-1 ${selectedLocation === loc.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Filter by ${loc.label}`}
              >
                <span>{loc.flag}</span>
                {loc.label}
              </button>
            ))}
        </div>

        {/* ==================== MOST VIEWED POSITIONS ROW ==================== */}
        {mostViewedPositions.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon('fire', 'w-5 h-5 text-orange-500')}
              Most Viewed Positions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {mostViewedPositions.map((position) => {
                const deptConfig = getDepartmentConfig(position.department);
                return (
                  <Link
                    key={position.id}
                    href={position.link}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${deptConfig.color} flex items-center justify-center`}
                    >
                      {getIcon(deptConfig.icon, 'w-5 h-5')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">
                          {position.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${deptConfig.color}`}>
                          {deptConfig.label}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {position.views || '1.2k'} views
                        </span>
                      </div>
                    </div>
                    <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredPositions.length}
            </span>{' '}
            positions
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== POSITIONS GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
            }`}
        >
          {filteredPositions.map((position) => {
            const deptConfig = getDepartmentConfig(position.department);
            const typeConfig = getTypeConfig(position.type);
            const expConfig = getExperienceConfig(position.experience);
            const isExpanded = expandedPosition === position.id;
            const isSaved = savedPositions.includes(position.id);

            return (
              <div
                key={position.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Position Header Area */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-64 md:shrink-0' : ''
                    }`}
                >
                  <div
                    className={`h-24 ${viewMode === 'list' ? 'h-full' : ''
                      } bg-linear-to-r from-blue-600 to-purple-600 p-4 text-white`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg line-clamp-2">
                          {position.title}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-full mt-2 inline-block bg-white/20">
                          {deptConfig.label}
                        </span>
                      </div>
                      <button
                        onClick={() => handleSavePosition(position.id)}
                        className={`transition-colors ${isSaved ? 'text-amber-400' : 'text-white/70 hover:text-amber-400'
                          }`}
                        aria-label={isSaved ? 'Remove from saved' : 'Save position'}
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Metadata Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${typeConfig.color}`}>
                      {typeConfig.badge}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${expConfig.color}`}>
                      {expConfig.badge}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      {getIcon('location', 'w-3 h-3')}
                      <span>{position.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {position.description}
                  </p>

                  {/* Salary and Posted Date */}
                  <div className="flex items-center justify-between text-sm mb-3">
                    <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                      {getIcon('currency-dollar', 'w-4 h-4')}
                      <span>{position.salary}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      {getIcon('calendar', 'w-4 h-4')}
                      <span>Posted {position.postedDate}</span>
                    </div>
                  </div>

                  {/* Expandable Key Requirements */}
                  {position.requirements && position.requirements.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(position.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium"
                        aria-label={isExpanded ? 'Show less' : `View ${position.requirements.length} requirements`}
                      >
                        {isExpanded
                          ? 'Show less'
                          : `View ${position.requirements.length} requirements`}
                        {getIcon('chevron-down', `w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`)}
                      </button>

                      {isExpanded && (
                        <ul className="mt-2 space-y-1 animate-fadeIn">
                          {position.requirements.slice(0, 4).map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs">
                              {getIcon('check', 'w-3 h-3 text-emerald-500 mt-0.5 shrink-0')}
                              <span className="text-gray-600 dark:text-gray-400">{req}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Skill Tags */}
                  {position.tags && position.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {position.tags.slice(0, 3).map((tag, idx) => (
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
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={position.link}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Apply Now
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                    <div className="flex items-center gap-2">
                      {getIcon('eye', 'w-4 h-4 text-gray-400')}
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {position.views || '1.2k'} views
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredPositions.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('briefcase', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No positions found
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

        {/* ==================== JOIN TALENT COMMUNITY CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Don't See the Right Fit?</h3>
              <p className="text-blue-100 dark:text-blue-200 max-w-2xl">
                Join our talent community to receive updates about future opportunities that match your skills and interests.
              </p>
            </div>
            <Link
              href={config?.talentLink || '/talent-community'}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Join Talent Community
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Job Alert Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive notifications about new job openings and career opportunities.'}
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
                aria-label="Email for job alerts"
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
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                .bg-grid-slate-100 {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
                }
                .dark .bg-grid-slate-800 {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
                }
                .mask-radial-gradient {
                    mask-image: radial-gradient(ellipse at center, white, transparent);
                    -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
                }
                .line-clamp-1 {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
    </section>
  );
};

export default OpenPositionsSection2;