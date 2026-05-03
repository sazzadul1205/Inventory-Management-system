// page/frontend/Careers/RemoteOpportunitiesSection/RemoteOpportunitiesSection2.jsx

/**
 * Remote Opportunities Section II - Advanced Remote Jobs Directory Hub
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Remote-First, Countries, Open Roles, Rating)
 * - Sort Dropdown (Featured First, Most Recent, Alphabetical)
 * - Grid/List View Toggle for Job Browsing
 * - Multi-filter System (Department, Level, Region, Remote Type)
 * - Active Filter Indicators with Count Badge
 * - Favorite/Save Functionality with Heart Icon
 * - Featured Jobs Row with Horizontal Cards
 * - Urgent Hire Badge with Visual Indicator
 * - Level Badges with Emoji-style Icons (Entry, Mid, Senior, Lead, Manager)
 * - Remote Type Badges (Fully Remote, Remote-First, Flexible, Timezone Specific)
 * - Region Flag Indicators with Timezone Display
 * - Salary Range Display
 * - Expandable Skills Section with Show More/Less
 * - Search across job titles, descriptions, and skills
 * - Responsive Grid and List Layouts
 * - Animated Gradient Orbs in Background
 * - Application Modal with Form Validation
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
  HiOutlineHome,
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

const RemoteOpportunitiesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJob, setExpandedJob] = useState(null);
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', location: '', positionId: '', resume: null, linkedin: '', portfolio: '', hearAbout: '', message: '', agreeToTerms: false });

  // ==================== MEMOIZED DATA ====================
  const allJobs = useMemo(() => config?.jobs || [], [config?.jobs]);

  const departments = useMemo(
    () =>
      config?.departments || [
        { id: 'all', label: 'All Departments', icon: 'users', count: allJobs.length },
        { id: 'engineering', label: 'Engineering', icon: 'code' },
        { id: 'product', label: 'Product', icon: 'briefcase' },
        { id: 'design', label: 'Design', icon: 'template' },
        { id: 'marketing', label: 'Marketing', icon: 'chart' },
        { id: 'sales', label: 'Sales', icon: 'briefcase' },
        { id: 'customer-success', label: 'Customer Success', icon: 'users' }
      ],
    [config?.departments, allJobs.length]
  );

  const levels = useMemo(
    () => [
      { id: 'all', label: 'All Levels', icon: 'chart' },
      { id: 'entry', label: 'Entry Level', icon: 'star' },
      { id: 'mid', label: 'Mid Level', icon: 'trending' },
      { id: 'senior', label: 'Senior', icon: 'fire' },
      { id: 'lead', label: 'Lead', icon: 'flag' },
      { id: 'manager', label: 'Manager', icon: 'briefcase' }
    ],
    []
  );

  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'All Regions', flag: '🌐' },
        { id: 'north-america', label: 'North America', flag: '🇺🇸' },
        { id: 'europe', label: 'Europe', flag: '🇪🇺' },
        { id: 'asia-pacific', label: 'Asia Pacific', flag: '🌏' },
        { id: 'latin-america', label: 'Latin America', flag: '🌎' },
        { id: 'global', label: 'Global', flag: '🌍' }
      ],
    [config?.regions]
  );

  const remoteTypes = useMemo(
    () => [
      { id: 'all', label: 'All Types', icon: 'wifi' },
      { id: 'fully-remote', label: 'Fully Remote', icon: 'home' },
      { id: 'remote-first', label: 'Remote-First', icon: 'globe' },
      { id: 'flexible', label: 'Flexible', icon: 'clock' },
      { id: 'timezone-specific', label: 'Timezone Specific', icon: 'location' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "100%", label: "Remote-First", icon: "wifi", trend: "100%", trendUp: true },
        { value: "25+", label: "Countries", icon: "globe", trend: "+5", trendUp: true },
        { value: "40+", label: "Open Roles", icon: "briefcase", trend: "+12", trendUp: true },
        { value: "4.9", label: "Employee Rating", icon: "star", trend: "+0.2", trendUp: true }
      ],
    [config?.stats]
  );

  const featuredJobs = useMemo(() => config?.featuredJobs || [], [config?.featuredJobs]);

  const hearAboutOptions = useMemo(
    () => ['LinkedIn', 'Remote.co', 'We Work Remotely', 'Friend Referral', 'Company Website', 'GitHub', 'Twitter', 'Other'],
    []
  );

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
      home: <HiOutlineHome className={className} />,
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
    return icons[iconName] || <HiOutlineWifi className={className} />;
  }, []);

  /**
   * Returns department configuration with color, icon, label, and gradient
   */
  const getDepartmentConfig = useCallback((departmentId) => {
    const configs = {
      engineering: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'code', label: 'Engineering', borderColor: 'border-blue-200 dark:border-blue-800', gradient: 'from-blue-500 to-blue-600' },
      product: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'briefcase', label: 'Product', borderColor: 'border-purple-200 dark:border-purple-800', gradient: 'from-purple-500 to-purple-600' },
      design: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'template', label: 'Design', borderColor: 'border-emerald-200 dark:border-emerald-800', gradient: 'from-emerald-500 to-emerald-600' },
      marketing: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'chart', label: 'Marketing', borderColor: 'border-orange-200 dark:border-orange-800', gradient: 'from-orange-500 to-orange-600' },
      sales: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'briefcase', label: 'Sales', borderColor: 'border-red-200 dark:border-red-800', gradient: 'from-red-500 to-red-600' },
      'customer-success': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'users', label: 'Customer Success', borderColor: 'border-indigo-200 dark:border-indigo-800', gradient: 'from-indigo-500 to-indigo-600' }
    };
    return configs[departmentId] || configs.engineering;
  }, []);

  /**
   * Returns level configuration with color, label, badge, and gradient
   */
  const getLevelConfig = useCallback((levelId) => {
    const configs = {
      entry: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Entry Level', badge: 'Entry', gradient: 'from-emerald-500 to-emerald-600' },
      mid: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Mid Level', badge: 'Mid', gradient: 'from-blue-500 to-blue-600' },
      senior: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', label: 'Senior', badge: 'Senior', gradient: 'from-purple-500 to-purple-600' },
      lead: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', label: 'Lead', badge: 'Lead', gradient: 'from-orange-500 to-orange-600' },
      manager: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', label: 'Manager', badge: 'Manager', gradient: 'from-red-500 to-red-600' }
    };
    return configs[levelId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', label: levelId, badge: levelId };
  }, []);

  /**
   * Returns region configuration with flag, label, timezone, and color
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': { flag: '🇺🇸', label: 'North America', timezone: 'EST/PST', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
      europe: { flag: '🇪🇺', label: 'Europe', timezone: 'GMT/CET', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
      'asia-pacific': { flag: '🌏', label: 'Asia Pacific', timezone: 'IST/SGT', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
      'latin-america': { flag: '🌎', label: 'Latin America', timezone: 'BRT/COT', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
      global: { flag: '🌍', label: 'Global', timezone: 'Flexible', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' }
    };
    return configs[regionId] || { flag: '🌍', label: regionId, timezone: 'Flexible', color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' };
  }, []);

  /**
   * Returns remote type configuration with color, label, and badge
   */
  const getRemoteTypeConfig = useCallback((typeId) => {
    const configs = {
      'fully-remote': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Fully Remote', badge: 'Fully Remote' },
      'remote-first': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Remote-First', badge: 'Remote-First' },
      flexible: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', label: 'Flexible', badge: 'Flexible' },
      'timezone-specific': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', label: 'Timezone Specific', badge: 'Timezone Specific' }
    };
    return configs[typeId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', label: typeId, badge: typeId };
  }, []);

  /**
   * Toggle favorite status for a job
   */
  const handleFavoriteJob = useCallback((jobId) => {
    setFavoriteJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  }, []);

  /**
   * Toggle expanded state for a job
   */
  const toggleExpanded = useCallback((jobId) => {
    setExpandedJob((prev) => (prev === jobId ? null : jobId));
  }, []);

  /**
   * Open apply modal
   */
  const openApplyModal = useCallback((job) => {
    setSelectedJobForApply(job);
    setFormData((prev) => ({ ...prev, positionId: job.id, positionTitle: job.title }));
    setShowApplyModal(true);
  }, []);

  /**
   * Close apply modal
   */
  const closeApplyModal = useCallback(() => {
    setShowApplyModal(false);
    setSelectedJobForApply(null);
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
    if (!formData.location) newErrors.location = 'Location is required';
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
          location: '',
          positionId: '',
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
    setSelectedDepartment('all');
    setSelectedLevel('all');
    setSelectedRegion('all');
    setSelectedType('all');
    setSortBy('featured');
  }, []);

  // ==================== FILTERING AND SORTING LOGIC ====================
  const filteredJobs = useMemo(() => {
    let jobs = [...allJobs];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      jobs = jobs.filter(
        (j) =>
          j.title?.toLowerCase().includes(query) ||
          j.description?.toLowerCase().includes(query) ||
          j.skills?.some((skill) => skill.toLowerCase().includes(query))
      );
    }

    if (selectedDepartment !== 'all') {
      jobs = jobs.filter((j) => j.department === selectedDepartment);
    }

    if (selectedLevel !== 'all') {
      jobs = jobs.filter((j) => j.level === selectedLevel);
    }

    if (selectedRegion !== 'all') {
      jobs = jobs.filter((j) => j.region === selectedRegion);
    }

    if (selectedType !== 'all') {
      jobs = jobs.filter((j) => j.remoteType === selectedType);
    }

    // Sorting
    if (sortBy === 'featured') {
      jobs.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    } else if (sortBy === 'recent') {
      jobs.sort((a, b) => new Date(b.postedDateRaw) - new Date(a.postedDateRaw));
    } else if (sortBy === 'title') {
      jobs.sort((a, b) => a.title.localeCompare(b.title));
    }

    return jobs;
  }, [allJobs, searchQuery, selectedDepartment, selectedLevel, selectedRegion, selectedType, sortBy]);

  // Update department counts for display
  const departmentsWithCount = useMemo(() => {
    return departments.map((dept) => {
      if (dept.id === 'all') {
        return { ...dept, count: filteredJobs.length };
      }
      const count = allJobs.filter((j) => j.department === dept.id).length;
      return { ...dept, count };
    });
  }, [departments, allJobs, filteredJobs.length]);

  const activeFiltersCount = [
    selectedDepartment !== 'all',
    selectedLevel !== 'all',
    selectedRegion !== 'all',
    selectedType !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Remote Opportunities Directory"
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
              {getIcon('wifi', 'w-4 h-4 text-blue-600 dark:text-blue-400')}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || 'Remote Opportunities'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Work from'}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Anywhere'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Join our fully remote team and build your career from anywhere in the world. We\'re hiring across multiple departments and time zones.'}
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
                config?.searchPlaceholder || 'Search jobs by title, department, or skills...'
              }
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search remote jobs"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Sort jobs"
            >
              <option value="featured">Featured First</option>
              <option value="recent">Most Recent</option>
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

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by level"
                >
                  {levels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Region
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by region"
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Remote Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Remote Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by remote type"
                >
                  {remoteTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
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
              aria-label={`Show ${dept.label} jobs`}
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

        {/* ==================== LEVEL PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8">
          {levels
            .filter((l) => l.id !== 'all')
            .map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 flex items-center gap-1 ${selectedLevel === level.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Filter by ${level.label}`}
              >
                {getIcon(level.icon, 'w-4 h-4')}
                {level.label}
              </button>
            ))}
        </div>

        {/* ==================== REMOTE TYPE PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-12">
          {remoteTypes
            .filter((t) => t.id !== 'all')
            .map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 flex items-center gap-1 ${selectedType === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Filter by ${type.label}`}
              >
                {getIcon(type.icon, 'w-4 h-4')}
                {type.label}
              </button>
            ))}
        </div>

        {/* ==================== FEATURED JOBS ROW ==================== */}
        {featuredJobs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon('star', 'w-5 h-5 text-amber-500')}
              Featured Remote Roles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredJobs.map((job) => {
                const deptConfig = getDepartmentConfig(job.department);
                const levelConfig = getLevelConfig(job.level);
                const regionConfig = getRegionConfig(job.region);
                const remoteConfig = getRemoteTypeConfig(job.remoteType);
                return (
                  <div
                    key={job.id}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group cursor-pointer"
                    onClick={() => openApplyModal(job)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openApplyModal(job)}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-r ${deptConfig.gradient} flex items-center justify-center`}
                    >
                      {getIcon(deptConfig.icon, 'w-6 h-6 text-white')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {job.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${deptConfig.color}`}>
                          {deptConfig.label}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${levelConfig.color}`}>
                          {levelConfig.badge}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${remoteConfig.color}`}>
                          {remoteConfig.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                        <span>{regionConfig.flag} {regionConfig.label}</span>
                        <span>•</span>
                        <span>Posted {job.postedDate}</span>
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
              {filteredJobs.length}
            </span>{' '}
            remote opportunities
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== JOBS GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
            }`}
        >
          {filteredJobs.map((job) => {
            const deptConfig = getDepartmentConfig(job.department);
            const levelConfig = getLevelConfig(job.level);
            const regionConfig = getRegionConfig(job.region);
            const remoteConfig = getRemoteTypeConfig(job.remoteType);
            const isExpanded = expandedJob === job.id;
            const isFavorite = favoriteJobs.includes(job.id);
            const isUrgent = job.isUrgent;

            return (
              <div
                key={job.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  } cursor-pointer`}
                onClick={() => openApplyModal(job)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openApplyModal(job)}
              >
                {/* Job Icon Area */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''
                    }`}
                >
                  <div
                    className={`h-32 ${viewMode === 'list' ? 'h-full' : ''
                      } bg-linear-to-br ${deptConfig.gradient} flex items-center justify-center p-6`}
                  >
                    {getIcon(deptConfig.icon, 'w-12 h-12 text-white opacity-80')}
                  </div>
                  {job.isFeatured && (
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
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${deptConfig.color}`}>
                      {deptConfig.label}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${levelConfig.color}`}>
                      {levelConfig.badge}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${remoteConfig.color}`}>
                      {remoteConfig.badge}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      {getIcon('globe', 'w-4 h-4')}
                      <span>
                        {regionConfig.flag} {regionConfig.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon('clock', 'w-4 h-4')}
                      <span>{regionConfig.timezone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon('calendar', 'w-4 h-4')}
                      <span>Posted {job.postedDate}</span>
                    </div>
                  </div>

                  {/* Expandable Skills */}
                  {job.skills && job.skills.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpanded(job.id);
                        }}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium"
                        aria-label={isExpanded ? 'Show less' : `View ${job.skills.length} skills`}
                      >
                        {isExpanded
                          ? 'Show less'
                          : `View ${job.skills.length} skills`}
                        {getIcon('chevron-down', `w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`)}
                      </button>
                      {isExpanded && (
                        <div className="mt-3 flex flex-wrap gap-2 animate-fadeIn">
                          {job.skills.map((skill, idx) => (
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

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFavoriteJob(job.id);
                        }}
                        className={`flex items-center gap-1 text-sm transition-colors ${isFavorite
                          ? 'text-red-500'
                          : 'text-gray-400 hover:text-red-500'
                          }`}
                        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {getIcon('heart', `w-4 h-4 ${isFavorite ? 'fill-current' : ''}`)}
                        <span>Save</span>
                      </button>
                      {job.salary && (
                        <span className="text-xs text-emerald-600 dark:text-emerald-400">
                          {job.salary}
                        </span>
                      )}
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                      Apply Now →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('wifi', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No remote opportunities found
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
        {showApplyModal && selectedJobForApply && (
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
              <div className={`relative h-28 bg-linear-to-r ${getDepartmentConfig(selectedJobForApply.department).gradient}`}>
                <button
                  onClick={closeApplyModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="Close modal"
                >
                  <HiOutlineX className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 text-white">
                  <h2 className="text-xl font-bold">{selectedJobForApply.title}</h2>
                  <p className="text-sm text-white/80">
                    {getDepartmentConfig(selectedJobForApply.department).label} •{' '}
                    {getRemoteTypeConfig(selectedJobForApply.remoteType).label}
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
                      Thank you for applying to {selectedJobForApply.title}. Our recruiting team will review your application and reach out within 5 business days.
                    </p>
                    <button
                      onClick={closeApplyModal}
                      className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Close
                    </button>
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
                      <div className="md:col-span-2">
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
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Location (City, Country) *
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.location
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                          placeholder="San Francisco, USA"
                        />
                        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
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
                          placeholder="Tell us why you're interested in this role..."
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

export default RemoteOpportunitiesSection2;