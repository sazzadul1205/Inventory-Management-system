// page/frontend/Careers/InternshipProgramsSection/InternshipProgramsSection2.jsx

/**
 * Internship Programs Section II - Advanced Internship Directory Hub
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Hired, Conversion, Countries, Rating)
 * - Sort Dropdown (Featured First, Soonest Deadline, Alphabetical)
 * - Grid/List View Toggle for Program Browsing
 * - Multi-filter System (Program Type, Location, Duration)
 * - Active Filter Indicators with Count Badge
 * - Favorite/Save Functionality with Heart Icon
 * - Featured Internships Row with Horizontal Cards
 * - Urgent Deadline Badge with Visual Indicator
 * - Program Type Badges with Color Coding
 * - Location Flag Indicators
 * - Expandable Skills Section with Show More/Less
 * - Search across program titles, descriptions, and skills
 * - Responsive Grid and List Layouts
 * - Animated Gradient Orbs in Background
 * - Application Modal with Multi-step Form
 * - Form Validation with Error Messages
 * - Success Message on Application Submission
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaQuoteLeft as HiOutlineQuote, FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineUsers,
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
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineNewspaper,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';
import { MdOutlineCoffee as HiOutlineCoffee } from "react-icons/md";

const InternshipProgramsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [favoritePrograms, setFavoritePrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
  const [selectedProgramForApply, setSelectedProgramForApply] = useState(null);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', university: '', major: '', graduationYear: '', programId: '', resume: null, linkedin: '', portfolio: '', hearAbout: '', message: '', agreeToTerms: false });

  // ==================== MEMOIZED DATA ====================
  const allPrograms = useMemo(() => config?.programs || [], [config?.programs]);

  const programTypes = useMemo(
    () =>
      config?.programTypes || [
        { id: 'all', label: 'All Programs', icon: 'academic', count: allPrograms.length },
        { id: 'engineering', label: 'Software Engineering', icon: 'code' },
        { id: 'product', label: 'Product Management', icon: 'briefcase' },
        { id: 'data', label: 'Data Science & Analytics', icon: 'chart' },
        { id: 'marketing', label: 'Marketing', icon: 'trending' },
        { id: 'design', label: 'Product Design', icon: 'template' }
      ],
    [config?.programTypes, allPrograms.length]
  );

  const locations = useMemo(
    () =>
      config?.locations || [
        { id: 'all', label: 'All Locations', flag: '🌐' },
        { id: 'remote', label: 'Remote', flag: '🌍' },
        { id: 'sf', label: 'San Francisco, CA', flag: '🇺🇸' },
        { id: 'nyc', label: 'New York, NY', flag: '🇺🇸' },
        { id: 'london', label: 'London, UK', flag: '🇬🇧' },
        { id: 'bangalore', label: 'Bangalore, India', flag: '🇮🇳' }
      ],
    [config?.locations]
  );

  const durations = useMemo(
    () => [
      { id: 'all', label: 'All Durations' },
      { id: 'summer', label: 'Summer (10-12 weeks)' },
      { id: 'fall', label: 'Fall (12-16 weeks)' },
      { id: 'spring', label: 'Spring (12-16 weeks)' },
      { id: 'year-round', label: 'Year-Round (6-12 months)' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "200+", label: "Interns Hired", icon: "users", trend: "+25%", trendUp: true },
        { value: "85%", label: "Conversion Rate", icon: "trophy", trend: "+5%", trendUp: true },
        { value: "15+", label: "Countries", icon: "globe", trend: "+3", trendUp: true },
        { value: "4.9", label: "Program Rating", icon: "star", trend: "4.9", trendUp: true }
      ],
    [config?.stats]
  );

  const featuredPrograms = useMemo(() => config?.featuredPrograms || [], [config?.featuredPrograms]);

  const hearAboutOptions = useMemo(
    () => ['LinkedIn', 'Handshake', 'University Career Fair', 'Professor Referral', 'Friend/Family', 'Company Website', 'Other'],
    []
  );

  const graduationYears = useMemo(() => ['2024', '2025', '2026', '2027', '2028'], []);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      usergroup: <HiOutlineUserGroup className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      users: <HiOutlineUsers className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      tag: <HiOutlineTag className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      bell: <HiOutlineBell className={className} />,
      download: <HiOutlineDownload className={className} />,
      play: <HiOutlinePlay className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      code: <HiOutlineCode className={className} />,
      cog: <HiOutlineCog className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      star: <HiOutlineStar className={className} />,
      flag: <HiOutlineFlag className={className} />,
      gift: <HiOutlineGift className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      mail: <HiOutlineMail className={className} />,
      'thumbs-up': <HiOutlineThumbUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      quote: <HiOutlineQuote className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      template: <HiOutlineTemplate className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      phone: <HiOutlinePhone className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      heart: <HiOutlineHeart className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      coffee: <HiOutlineCoffee className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineAcademicCap className={className} />;
  }, []);

  /**
   * Returns program configuration with color, icon, label, and gradient
   */
  const getProgramConfig = useCallback((programType) => {
    const configs = {
      engineering: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'code', label: 'Software Engineering', borderColor: 'border-blue-200 dark:border-blue-800', gradient: 'from-blue-500 to-blue-600' },
      product: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'briefcase', label: 'Product Management', borderColor: 'border-purple-200 dark:border-purple-800', gradient: 'from-purple-500 to-purple-600' },
      data: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'chart', label: 'Data Science & Analytics', borderColor: 'border-emerald-200 dark:border-emerald-800', gradient: 'from-emerald-500 to-emerald-600' },
      marketing: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'trending', label: 'Marketing', borderColor: 'border-orange-200 dark:border-orange-800', gradient: 'from-orange-500 to-orange-600' },
      sales: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'briefcase', label: 'Sales', borderColor: 'border-red-200 dark:border-red-800', gradient: 'from-red-500 to-red-600' },
      design: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'template', label: 'Product Design', borderColor: 'border-indigo-200 dark:border-indigo-800', gradient: 'from-indigo-500 to-indigo-600' }
    };
    return configs[programType] || configs.engineering;
  }, []);

  /**
   * Returns location configuration with flag, label, and color
   */
  const getLocationConfig = useCallback((locationId) => {
    const configs = {
      remote: { flag: '🌍', label: 'Remote', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
      sf: { flag: '🇺🇸', label: 'San Francisco, CA', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
      nyc: { flag: '🇺🇸', label: 'New York, NY', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
      london: { flag: '🇬🇧', label: 'London, UK', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
      bangalore: { flag: '🇮🇳', label: 'Bangalore, India', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' }
    };
    return configs[locationId] || { flag: '🌍', label: locationId, color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' };
  }, []);

  /**
   * Toggle favorite status for a program
   */
  const handleFavoriteProgram = useCallback((programId) => {
    setFavoritePrograms((prev) =>
      prev.includes(programId) ? prev.filter((id) => id !== programId) : [...prev, programId]
    );
  }, []);

  /**
   * Toggle expanded state for a program
   */
  const toggleExpanded = useCallback((programId) => {
    setExpandedProgram((prev) => (prev === programId ? null : programId));
  }, []);

  /**
   * Open apply modal
   */
  const openApplyModal = useCallback((program) => {
    setSelectedProgramForApply(program);
    setFormData((prev) => ({ ...prev, programId: program.id, programTitle: program.title }));
    setShowApplyModal(true);
  }, []);

  /**
   * Close apply modal
   */
  const closeApplyModal = useCallback(() => {
    setShowApplyModal(false);
    setSelectedProgramForApply(null);
    setErrors({});
  }, []);

  /**
   * Handle form input change
   */
  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  /**
   * Validate form
   */
  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.university) newErrors.university = 'University is required';
    if (!formData.graduationYear) newErrors.graduationYear = 'Graduation year is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        closeApplyModal();
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          university: '',
          major: '',
          graduationYear: '',
          programId: '',
          resume: null,
          linkedin: '',
          portfolio: '',
          hearAbout: '',
          message: '',
          agreeToTerms: false
        });
      }, 2000);
    },
    [validateForm, closeApplyModal]
  );

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedProgram('all');
    setSelectedLocation('all');
    setSelectedDuration('all');
    setSortBy('featured');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================
  const filteredPrograms = useMemo(() => {
    let programs = [...allPrograms];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      programs = programs.filter(
        (p) =>
          p.title?.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query) ||
          p.skills?.some((skill) => skill.toLowerCase().includes(query))
      );
    }

    if (selectedProgram !== 'all') {
      programs = programs.filter((p) => p.type === selectedProgram);
    }

    if (selectedLocation !== 'all') {
      programs = programs.filter((p) => p.location === selectedLocation);
    }

    if (selectedDuration !== 'all') {
      programs = programs.filter((p) => p.duration === selectedDuration);
    }

    // Sorting
    if (sortBy === 'featured') {
      programs.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    } else if (sortBy === 'deadline') {
      programs.sort((a, b) => new Date(a.deadlineDate) - new Date(b.deadlineDate));
    } else if (sortBy === 'title') {
      programs.sort((a, b) => a.title.localeCompare(b.title));
    }

    return programs;
  }, [allPrograms, searchQuery, selectedProgram, selectedLocation, selectedDuration, sortBy]);

  // Update program type counts for display
  const programTypesWithCount = useMemo(() => {
    return programTypes.map((prog) => {
      if (prog.id === 'all') {
        return { ...prog, count: filteredPrograms.length };
      }
      const count = allPrograms.filter((p) => p.type === prog.id).length;
      return { ...prog, count };
    });
  }, [programTypes, allPrograms, filteredPrograms.length]);

  const activeFiltersCount = [
    selectedProgram !== 'all',
    selectedLocation !== 'all',
    selectedDuration !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Internship Programs Directory"
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
              {getIcon('academic', 'w-4 h-4 text-blue-600 dark:text-blue-400')}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || 'Internship Programs'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Launch Your'}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Career'}
              </span>{' '}
              {config?.title?.suffix || 'with Us'}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Gain real-world experience, work on impactful projects, and learn from industry experts. Our internship programs are designed to help you grow and succeed.'}
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
                config?.searchPlaceholder || 'Search programs by title, department, or skills...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search internship programs"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Sort programs"
            >
              <option value="featured">Featured First</option>
              <option value="deadline">Soonest Deadline</option>
              <option value="title">Alphabetical</option>
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
              {/* Program Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Program Type
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by program type"
                >
                  <option value="all">All Types</option>
                  {programTypes
                    .filter((p) => p.id !== 'all')
                    .map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.label}
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
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Duration
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by duration"
                >
                  {durations.map((dur) => (
                    <option key={dur.id} value={dur.id}>
                      {dur.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Option */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Sort programs"
                >
                  <option value="featured">Featured First</option>
                  <option value="deadline">Soonest Deadline</option>
                  <option value="title">Alphabetical</option>
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

        {/* ==================== PROGRAM TYPE PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {programTypesWithCount.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedProgram(type.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedProgram === type.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${type.label}`}
            >
              {getIcon(type.icon, 'w-4 h-4')}
              {type.label}
              {type.count !== undefined && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedProgram === type.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                >
                  {type.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== LOCATION PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {locations
            .filter((l) => l.id !== 'all')
            .map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
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

        {/* ==================== FEATURED PROGRAMS ROW ==================== */}
        {featuredPrograms.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon('star', 'w-5 h-5 text-amber-500')}
              Featured Internships
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredPrograms.map((program) => {
                const programConfig = getProgramConfig(program.type);
                const locationConfig = getLocationConfig(program.location);
                return (
                  <div
                    key={program.id}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group cursor-pointer"
                    onClick={() => openApplyModal(program)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openApplyModal(program)}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-r ${programConfig.gradient} flex items-center justify-center`}
                    >
                      {getIcon(programConfig.icon, 'w-6 h-6 text-white')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {program.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${programConfig.color}`}>
                          {programConfig.label}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${locationConfig.color}`}>
                          {locationConfig.flag} {locationConfig.label}
                        </span>
                      </div>
                    </div>
                    <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
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
              {filteredPrograms.length}
            </span>{' '}
            internship programs
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== PROGRAMS GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
            }`}
        >
          {filteredPrograms.map((program) => {
            const programConfig = getProgramConfig(program.type);
            const locationConfig = getLocationConfig(program.location);
            const isExpanded = expandedProgram === program.id;
            const isFavorite = favoritePrograms.includes(program.id);
            const deadlineDate = new Date(program.deadlineDate);
            const isUrgent = (deadlineDate - new Date()) / (1000 * 60 * 60 * 24) < 14;

            return (
              <div
                key={program.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
              >
                {/* Program Icon Area */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''
                    }`}
                >
                  <div
                    className={`h-32 ${viewMode === 'list' ? 'h-full' : ''
                      } bg-linear-to-br ${programConfig.gradient} flex items-center justify-center p-6`}
                  >
                    {getIcon(programConfig.icon, 'w-12 h-12 text-white opacity-80')}
                  </div>
                  {program.isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-md">
                        {getIcon('star', 'w-3 h-3')}
                        Featured
                      </span>
                    </div>
                  )}
                  {isUrgent && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-md">
                        Urgent
                      </span>
                    </div>
                  )}
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Type and Location Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${programConfig.color}`}>
                      {programConfig.label}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${locationConfig.color}`}>
                      {locationConfig.flag} {locationConfig.label}
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      {getIcon('clock', 'w-4 h-4')}
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon('calendar', 'w-4 h-4')}
                      <span>{program.startDate}</span>
                    </div>
                  </div>

                  {/* Expandable Skills */}
                  {program.skills && program.skills.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(program.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium"
                        aria-label={isExpanded ? 'Show less' : `View ${program.skills.length} skills`}
                      >
                        {isExpanded
                          ? 'Show less'
                          : `View ${program.skills.length} skills`}
                        {getIcon('chevron-down', `w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`)}
                      </button>
                      {isExpanded && (
                        <div className="mt-3 flex flex-wrap gap-2 animate-fadeIn">
                          {program.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Deadline Indicator */}
                  <div className={`text-xs font-semibold mb-4 ${isUrgent ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'
                    }`}>
                    {isUrgent ? '⚠️ ' : '📅 '}Application Deadline: {program.deadline}
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleFavoriteProgram(program.id)}
                        className={`flex items-center gap-1 text-sm transition-colors ${isFavorite
                          ? 'text-red-500'
                          : 'text-gray-400 hover:text-red-500'
                          }`}
                        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {getIcon('heart', `w-4 h-4 ${isFavorite ? 'fill-current' : ''}`)}
                        <span>Save</span>
                      </button>
                    </div>
                    <button
                      onClick={() => openApplyModal(program)}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Apply Now
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('academic', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No internship programs found
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

        {/* ==================== APPLICATION MODAL ==================== */}
        {showApplyModal && selectedProgramForApply && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={closeApplyModal}
            role="dialog"
            aria-label="Application form"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-32 bg-linear-to-r from-blue-600 to-purple-600">
                <button
                  onClick={closeApplyModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="Close modal"
                >
                  <HiOutlineX className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 text-white">
                  <h2 className="text-xl font-bold">{selectedProgramForApply.title}</h2>
                  <p className="text-sm text-white/80">
                    {getProgramConfig(selectedProgramForApply.type).label}
                  </p>
                </div>
              </div>

              <div className="p-6 max-h-[70vh] overflow-y-auto">
                {formSubmitted ? (
                  <div className="text-center py-12 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      {getIcon('check', 'w-8 h-8 text-emerald-600 dark:text-emerald-400')}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Application Submitted!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for applying to {selectedProgramForApply.title}. Our recruiting team will review your application and reach out within 5 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          University *
                        </label>
                        <input
                          type="text"
                          name="university"
                          value={formData.university}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.university
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                        />
                        {errors.university && <p className="text-red-500 text-xs mt-1">{errors.university}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Major
                        </label>
                        <input
                          type="text"
                          name="major"
                          value={formData.major}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Graduation Year *
                        </label>
                        <select
                          name="graduationYear"
                          value={formData.graduationYear}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.graduationYear
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                        >
                          <option value="">Select year</option>
                          {graduationYears.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                        {errors.graduationYear && <p className="text-red-500 text-xs mt-1">{errors.graduationYear}</p>}
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Resume/CV *
                        </label>
                        <input
                          type="file"
                          name="resume"
                          onChange={handleInputChange}
                          accept=".pdf,.doc,.docx"
                          className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.resume
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-gray-200`}
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          PDF, DOC, or DOCX (Max 5MB)
                        </p>
                        {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          LinkedIn URL
                        </label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Portfolio/GitHub
                        </label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                          placeholder="https://..."
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          How did you hear about us?
                        </label>
                        <select
                          name="hearAbout"
                          value={formData.hearAbout}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        >
                          <option value="">Select an option</option>
                          {hearAboutOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Additional Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                          placeholder="Tell us why you're interested in this internship..."
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            I agree to the{' '}
                            <a href="/privacy-policy" className="text-blue-600 hover:underline">
                              privacy policy
                            </a>{' '}
                            and confirm that the information provided is accurate. *
                          </span>
                        </label>
                        {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <button
                        type="button"
                        onClick={closeApplyModal}
                        className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                )}
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

export default InternshipProgramsSection2;