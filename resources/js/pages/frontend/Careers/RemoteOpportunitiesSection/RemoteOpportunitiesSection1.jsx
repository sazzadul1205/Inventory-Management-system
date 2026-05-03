// page/frontend/Careers/RemoteOpportunitiesSection/RemoteOpportunitiesSection1.jsx

/**
 * Remote Opportunities Section I - Work From Anywhere Hub
 *
 * Unique Design Elements:
 * - Stats Cards for remote metrics (Remote-First, Countries, Open Roles, Rating)
 * - Remote Work Benefits Grid with Icon Cards
 * - Featured Job Spotlight with Hero Layout
 * - Department Filter Chips with Custom Icons
 * - Experience Level Filter (Entry, Mid, Senior, Lead, Manager)
 * - Region Filter with Timezone Display
 * - Expandable Skills Section with Show More/Less
 * - Save/Bookmark Functionality for Jobs
 * - Region Flag Indicators with Timezone Info
 * - Search across job titles, descriptions, and skills
 * - Application Form with Validation and Success Message
 * - Contact Section with Email and Phone
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Grid Layout for Job Cards
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
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';
import { MdOutlineCoffee as HiOutlineCoffee } from "react-icons/md";

const RemoteOpportunitiesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJob, setExpandedJob] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', location: '', resume: null, linkedin: '', message: '' });

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
      { id: 'all', label: 'All Levels' },
      { id: 'entry', label: 'Entry Level' },
      { id: 'mid', label: 'Mid Level' },
      { id: 'senior', label: 'Senior' },
      { id: 'lead', label: 'Lead' },
      { id: 'manager', label: 'Manager' }
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

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "100%", label: "Remote-First", icon: "wifi" },
        { value: "25+", label: "Countries", icon: "globe" },
        { value: "40+", label: "Open Roles", icon: "briefcase" },
        { value: "4.9", label: "Employee Rating", icon: "star" }
      ],
    [config?.stats]
  );

  const benefits = useMemo(
    () =>
      config?.benefits || [
        { title: "Work from Anywhere", description: "Choose your ideal workspace, whether at home, a co-working space, or while traveling.", icon: "wifi" },
        { title: "Flexible Hours", description: "Focus on outcomes, not hours. Design your schedule around what works best for you.", icon: "clock" },
        { title: "Home Office Stipend", description: "$1,000 annual budget for home office equipment and setup.", icon: "desktop" },
        { title: "Wellness Reimbursement", description: "Monthly stipend for gym memberships, mental health support, and wellness activities.", icon: "heart" },
        { title: "Global Meetups", description: "Annual team retreats in amazing locations around the world.", icon: "globe" },
        { title: "Learning & Development", description: "$2,000 annual budget for courses, conferences, and professional development.", icon: "academic" }
      ],
    [config?.benefits]
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
      coffee: <HiOutlineCoffee className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineWifi className={className} />;
  }, []);

  /**
   * Returns department configuration with color, icon, and label
   */
  const getDepartmentConfig = useCallback((departmentId) => {
    const configs = {
      engineering: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'code', label: 'Engineering', borderColor: 'border-blue-200 dark:border-blue-800' },
      product: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'briefcase', label: 'Product', borderColor: 'border-purple-200 dark:border-purple-800' },
      design: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'template', label: 'Design', borderColor: 'border-emerald-200 dark:border-emerald-800' },
      marketing: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'chart', label: 'Marketing', borderColor: 'border-orange-200 dark:border-orange-800' },
      sales: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'briefcase', label: 'Sales', borderColor: 'border-red-200 dark:border-red-800' },
      'customer-success': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'users', label: 'Customer Success', borderColor: 'border-indigo-200 dark:border-indigo-800' }
    };
    return configs[departmentId] || configs.engineering;
  }, []);

  /**
   * Returns level configuration with color and label
   */
  const getLevelConfig = useCallback((levelId) => {
    const configs = {
      entry: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Entry Level' },
      mid: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Mid Level' },
      senior: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', label: 'Senior' },
      lead: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', label: 'Lead' },
      manager: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', label: 'Manager' }
    };
    return configs[levelId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', label: levelId };
  }, []);

  /**
   * Returns region configuration with flag, label, and timezone
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': { flag: '🇺🇸', label: 'North America', timezone: 'EST/PST' },
      europe: { flag: '🇪🇺', label: 'Europe', timezone: 'GMT/CET' },
      'asia-pacific': { flag: '🌏', label: 'Asia Pacific', timezone: 'IST/SGT' },
      'latin-america': { flag: '🌎', label: 'Latin America', timezone: 'BRT/COT' },
      global: { flag: '🌍', label: 'Global', timezone: 'Flexible' }
    };
    return configs[regionId] || { flag: '🌍', label: regionId, timezone: 'Flexible' };
  }, []);

  /**
   * Toggle save/bookmark status for a job
   */
  const handleSaveJob = useCallback((jobId) => {
    setSavedJobs((prev) =>
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
   * Handle form input change
   */
  const handleInputChange = useCallback((e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        location: '',
        resume: null,
        linkedin: '',
        message: ''
      });
    }, 3000);
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedDepartment('all');
    setSelectedLevel('all');
    setSelectedRegion('all');
  }, []);

  /**
   * Scroll to application form
   */
  const scrollToForm = useCallback((jobTitle) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // ==================== FILTERING LOGIC ====================
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

    return jobs;
  }, [allJobs, searchQuery, selectedDepartment, selectedLevel, selectedRegion]);

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

  // Get featured job (first marked as featured, otherwise first in filtered list)
  const featuredJob = useMemo(() => {
    const featured = allJobs.find((j) => j.isFeatured);
    return featured || filteredJobs[0];
  }, [allJobs, filteredJobs]);

  // Regular jobs (excluding featured job)
  const regularJobs = useMemo(() => {
    if (!featuredJob) return filteredJobs;
    return filteredJobs.filter((j) => j.id !== featuredJob.id);
  }, [filteredJobs, featuredJob]);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Remote Opportunities - Work From Anywhere"
      itemScope
      itemType="https://schema.org/Organization"
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
            {getIcon('wifi', 'w-4 h-4 text-blue-600 dark:text-blue-400 mr-2')}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'Remote Opportunities'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Work from'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Anywhere'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              'Join our fully remote team and build your career from anywhere in the world. We\'re hiring across multiple departments and time zones.'}
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

        {/* ==================== REMOTE WORK BENEFITS GRID ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {config?.benefitsTitle || 'Remote Work Benefits'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(benefit.icon, 'w-6 h-6 text-blue-600 dark:text-blue-400')}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
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
              config?.searchPlaceholder || 'Search jobs by title, department, or skills...'
            }
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search remote jobs"
          />
        </div>

        {/* ==================== DEPARTMENT FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {departmentsWithCount.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedDepartment === dept.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${dept.label} jobs`}
            >
              {getIcon(dept.icon, 'w-4 h-4')}
              {dept.label}
              {dept.count !== undefined && (
                <span className="ml-1 text-xs opacity-80">{dept.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== LEVEL AND REGION FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {/* Level Filter Dropdown */}
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
            {getIcon('chart', 'w-4 h-4 text-gray-500')}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
              aria-label="Filter by experience level"
            >
              {levels.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          {/* Region Filter Dropdown */}
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
            {getIcon('globe', 'w-4 h-4 text-gray-500')}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
              aria-label="Filter by region"
            >
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ==================== FEATURED JOB ==================== */}
        {featuredJob && (
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
                        Featured Role
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getDepartmentConfig(featuredJob.department).color}`}
                        >
                          {getDepartmentConfig(featuredJob.department).label}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelConfig(featuredJob.level).color}`}
                        >
                          {getLevelConfig(featuredJob.level).label}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredJob.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredJob.description}
                    </p>

                    {/* Job Details */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('globe', 'w-4 h-4')}
                        <span>
                          {getRegionConfig(featuredJob.region).flag}{' '}
                          {getRegionConfig(featuredJob.region).label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('clock', 'w-4 h-4')}
                        <span>{getRegionConfig(featuredJob.region).timezone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('calendar', 'w-4 h-4')}
                        <span>Posted {featuredJob.postedDate}</span>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    {featuredJob.skills && featuredJob.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredJob.skills.slice(0, 5).map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => scrollToForm(featuredJob.title)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Apply Now
                        <HiArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleSaveJob(featuredJob.id)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedJobs.includes(featuredJob.id)
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                          }`}
                        aria-label={
                          savedJobs.includes(featuredJob.id)
                            ? 'Remove from saved'
                            : 'Save for later'
                        }
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                        {savedJobs.includes(featuredJob.id) ? 'Saved' : 'Save for Later'}
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
                      src={featuredJob.image}
                      alt={featuredJob.title}
                      className="relative rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== JOBS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularJobs.map((job) => {
            const deptConfig = getDepartmentConfig(job.department);
            const levelConfig = getLevelConfig(job.level);
            const regionConfig = getRegionConfig(job.region);
            const isExpanded = expandedJob === job.id;
            const isSaved = savedJobs.includes(job.id);

            return (
              <div
                key={job.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6">
                  {/* Job Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${deptConfig.color} flex items-center justify-center`}
                      >
                        {getIcon(deptConfig.icon, 'w-5 h-5')}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${deptConfig.color}`}>
                            {deptConfig.label}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${levelConfig.color}`}>
                            {levelConfig.label}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSaveJob(job.id)}
                      className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                        }`}
                      aria-label={isSaved ? 'Remove from saved' : 'Save job'}
                    >
                      {getIcon('bookmark', 'w-4 h-4')}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  {/* Job Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon('globe', 'w-4 h-4')}
                      <span>
                        {regionConfig.flag} {regionConfig.label} ({regionConfig.timezone})
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon('calendar', 'w-4 h-4')}
                      <span>Posted {job.postedDate}</span>
                    </div>
                  </div>

                  {/* Expandable Skills */}
                  {job.skills && job.skills.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(job.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={
                          isExpanded
                            ? 'Show less'
                            : `View ${job.skills.length} skills`
                        }
                      >
                        {isExpanded
                          ? 'Show less'
                          : `View ${job.skills.length} skills`}
                        <HiArrowRight className="w-4 h-4" />
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
                    <button
                      onClick={() => scrollToForm(job.title)}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Apply Now
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400">
                      {job.remoteType}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularJobs.length === 0 && (
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

        {/* ==================== APPLICATION FORM ==================== */}
        <div
          id="application-form"
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            {getIcon('wifi', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.formTitle || 'Apply for Remote Position'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {config?.formDescription ||
                'Fill out the form below and our recruiting team will review your application.'}
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                {getIcon('check', 'w-8 h-8 text-emerald-600 dark:text-emerald-400')}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thank you for your interest. Our recruiting team will review your application and reach out within 5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Position *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a position</option>
                    {allJobs.map((j) => (
                      <option key={j.id} value={j.title}>
                        {j.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location (City, Country) *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="San Francisco, USA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Resume / CV *
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-gray-200"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  PDF, DOC, or DOCX (Max 5MB)
                </p>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Why are you interested in this role?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  placeholder="Tell us about your experience and why you're excited about this opportunity..."
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Application
                  <HiArrowRight className="inline ml-2 w-4 h-4" />
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of application.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          {getIcon('mail', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl font-bold mb-4">Questions About Remote Work?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our recruiting team is here to help. Reach out to us directly for any questions about remote opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:careers@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              aria-label="Email recruiting team"
            >
              {getIcon('mail', 'w-4 h-4')}
              careers@supplychainpro.com
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Call recruiting team"
            >
              {getIcon('phone', 'w-4 h-4')}
              +1 (555) 123-4567
            </a>
          </div>
        </div>
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
            `}</style>
    </section>
  );
};

export default RemoteOpportunitiesSection1;