// page/frontend/Careers/OpenPositionsSection/OpenPositionsSection3.jsx

/**
 * Open Positions Section III - Full Career Hub with Application Modal
 *
 * Unique Design Elements:
 * - Multi-tab UI: All Positions, Featured, Remote, Departments, Favorites
 * - Featured Departments Carousel with Auto-play and Manual Navigation
 * - Embedded Application Modal with Multi-step Form
 * - Favorite Positions with LocalStorage Persistence
 * - Department Carousel with Open Roles Count
 * - Real-time Application Form with Step Indicator
 * - Resume/CV Upload with File Validation
 * - Application Success Message with Confirmation
 * - Position Detail Modal with Complete Application Flow
 * - Stats Cards for Key Metrics
 * - Location & Department Filters
 * - Search across job titles, descriptions, and tags
 * - Favorite/Bookmark Functionality with Heart Icon
 * - Responsive Grid Layout for Position Cards
 * - Animated Pulse Badge in Header
 * - Circuit Board Background Pattern
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

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
  HiOutlineLibrary,
  HiOutlineNewspaper,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineQrcode,
  HiOutlinePrinter,
  HiOutlineUserCircle,
  HiOutlineDocumentSearch,
  HiOutlineClipboardList,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineCode,
  HiOutlineCog,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineRocketLaunch as HiOutlineRocket,
  HiOutlineBuildingOffice,
} from 'react-icons/hi2';
import {
  MdOutlineFullscreen as HiOutlineFullscreen,
  MdOutlineHeadphones as HiOutlineHeadphones,
  MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const OpenPositionsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [applicationStep, setApplicationStep] = useState(1);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [favoritePositions, setFavoritePositions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicationData, setApplicationData] = useState({ fullName: '', email: '', phone: '', resume: null, coverLetter: '', linkedIn: '', portfolio: '', startDate: '', salaryExpectation: '', heardFrom: '' });

  // ==================== REFERENCE MANAGEMENT ====================
  const carouselRef = useRef(null);

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('favoritePositions');
    if (saved) setFavoritePositions(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritePositions', JSON.stringify(favoritePositions));
  }, [favoritePositions]);

  // ==================== MEMOIZED DATA ====================
  const allPositions = useMemo(() => config?.positions || [], [config?.positions]);

  const departments = useMemo(
    () =>
      config?.departments || [
        { id: 'all', label: 'All Positions', icon: 'briefcase', count: allPositions.length },
        { id: 'engineering', label: 'Engineering', icon: 'code' },
        { id: 'product', label: 'Product', icon: 'lightbulb' },
        { id: 'sales', label: 'Sales', icon: 'chart' },
        { id: 'marketing', label: 'Marketing', icon: 'trending' },
        { id: 'customer-success', label: 'Customer Success', icon: 'users' },
        { id: 'operations', label: 'Operations', icon: 'cog' }
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

  const tabs = useMemo(
    () => [
      { id: 'all', label: 'All Positions', icon: 'briefcase' },
      { id: 'featured', label: 'Featured', icon: 'star' },
      { id: 'remote', label: 'Remote', icon: 'wifi' },
      { id: 'departments', label: 'Departments', icon: 'building' },
      { id: 'favorites', label: 'Favorites', icon: 'heart' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "25+", label: "Open Positions", icon: "briefcase" },
        { value: "8", label: "Departments", icon: "building" },
        { value: "6", label: "Locations", icon: "globe" },
        { value: "100+", label: "Team Members", icon: "users" }
      ],
    [config?.stats]
  );

  const featuredDepartments = useMemo(
    () =>
      config?.featuredDepartments || [
        { name: 'Engineering', description: 'Build the future of supply chain technology', icon: 'code', openRoles: 8, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' },
        { name: 'Product', description: 'Shape the product strategy and user experience', icon: 'lightbulb', openRoles: 5, image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop' },
        { name: 'Sales', description: 'Drive growth and build customer relationships', icon: 'chart', openRoles: 6, image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop' },
        { name: 'Customer Success', description: 'Ensure customer satisfaction and retention', icon: 'users', openRoles: 4, image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop' }
      ],
    [config?.featuredDepartments]
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
      library: <HiOutlineLibrary className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <HiOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <HiOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      userCircle: <HiOutlineUserCircle className={className} />,
      documentSearch: <HiOutlineDocumentSearch className={className} />,
      clipboardList: <HiOutlineClipboardList className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      code: <HiOutlineCode className={className} />,
      cog: <HiOutlineCog className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
    };
    return icons[iconName] || <HiOutlineBriefcase className={className} />;
  }, []);

  /**
   * Returns department configuration with color, icon, label, and gradient
   */
  const getDepartmentConfig = useCallback((departmentId) => {
    const configs = {
      engineering: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'code', label: 'Engineering', gradient: 'from-blue-500 to-blue-600' },
      product: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'lightbulb', label: 'Product', gradient: 'from-purple-500 to-purple-600' },
      sales: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'chart', label: 'Sales', gradient: 'from-emerald-500 to-emerald-600' },
      marketing: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'trending', label: 'Marketing', gradient: 'from-orange-500 to-orange-600' },
      'customer-success': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'users', label: 'Customer Success', gradient: 'from-red-500 to-red-600' },
      operations: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Operations', gradient: 'from-indigo-500 to-indigo-600' }
    };
    return configs[departmentId] || { color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300', icon: 'briefcase', label: departmentId, gradient: 'from-gray-500 to-gray-600' };
  }, []);

  /**
   * Returns employment type configuration with color and badge
   */
  const getTypeConfig = useCallback((typeId) => {
    const configs = {
      'full-time': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', label: 'Full-Time', badge: 'Full-Time', gradient: 'from-emerald-500 to-emerald-600' },
      'part-time': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', label: 'Part-Time', badge: 'Part-Time', gradient: 'from-blue-500 to-blue-600' },
      contract: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', label: 'Contract', badge: 'Contract', gradient: 'from-orange-500 to-orange-600' },
      internship: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', label: 'Internship', badge: 'Internship', gradient: 'from-purple-500 to-purple-600' },
      remote: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', label: 'Remote', badge: 'Remote', gradient: 'from-indigo-500 to-indigo-600' }
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
   * Toggle favorite status for a position
   */
  const handleFavoritePosition = useCallback((positionId) => {
    setFavoritePositions((prev) =>
      prev.includes(positionId) ? prev.filter((id) => id !== positionId) : [...prev, positionId]
    );
  }, []);

  /**
   * Open position modal with application form
   */
  const openPositionModal = useCallback((position) => {
    setSelectedPosition(position);
    setApplicationStep(1);
    setApplicationSubmitted(false);
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: '',
      linkedIn: '',
      portfolio: '',
      startDate: '',
      salaryExpectation: '',
      heardFrom: ''
    });
    setShowPositionModal(true);
  }, []);

  /**
   * Handle application input change
   */
  const handleApplicationChange = useCallback((e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setApplicationData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setApplicationData((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  /**
   * Submit application
   */
  const handleSubmitApplication = useCallback(() => {
    // Simulate API call
    setTimeout(() => {
      setApplicationSubmitted(true);
    }, 1000);
  }, []);

  // ==================== CAROUSEL NAVIGATION ====================
  const featuredDepartmentsCount = featuredDepartments.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredDepartmentsCount);
  }, [featuredDepartmentsCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuredDepartmentsCount) % featuredDepartmentsCount);
  }, [featuredDepartmentsCount]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && featuredDepartmentsCount > 1 && activeTab === 'departments') {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuredDepartmentsCount, activeTab, nextSlide]);

  // ==================== FILTERING LOGIC ====================
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

    if (activeTab === 'favorites') {
      positions = positions.filter((p) => favoritePositions.includes(p.id));
    } else if (activeTab === 'featured') {
      positions = positions.filter((p) => p.isFeatured);
    } else if (activeTab === 'remote') {
      positions = positions.filter((p) => p.location === 'Remote');
    }

    return positions;
  }, [allPositions, searchQuery, selectedDepartment, selectedLocation, selectedType, activeTab, favoritePositions]);

  const activeFiltersCount = [selectedDepartment !== 'all', selectedLocation !== 'all', selectedType !== 'all', searchQuery !== ''].filter(Boolean).length;

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedDepartment('all');
    setSelectedLocation('all');
    setSelectedType('all');
    setActiveTab('all');
  }, []);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Open Positions Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-careers" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80"
                stroke="#9CA3AF"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-careers)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineBriefcase className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Join Our Team"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Current"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Open Positions"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Join our mission to transform supply chain management. Explore opportunities to grow your career with a team of innovators and problem-solvers."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, "w-4 h-4 text-blue-600 dark:text-blue-400")}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
              {tab.id === 'favorites' && favoritePositions.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoritePositions.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== DEPARTMENTS CAROUSEL TAB ==================== */}
        {activeTab === 'departments' && featuredDepartments.length > 0 && (
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredDepartments.map((dept, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <div
                      className="relative h-96 rounded-3xl overflow-hidden cursor-pointer"
                      onClick={() => setSelectedDepartment(dept.name.toLowerCase().replace(' ', '-'))}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedDepartment(dept.name.toLowerCase().replace(' ', '-'))}
                    >
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            {getIcon(dept.icon, "w-5 h-5")}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold">{dept.name}</h2>
                        </div>
                        <p className="text-white/80 mb-4 max-w-2xl">{dept.description}</p>
                        <div className="flex items-center gap-4">
                          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                            {dept.openRoles} open roles
                          </span>
                          <button
                            onClick={() => setSelectedDepartment(dept.name.toLowerCase().replace(' ', '-'))}
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                          >
                            View Positions
                            <HiArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {featuredDepartments.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Previous slide"
                  >
                    <HiOutlineChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Next slide"
                  >
                    <HiOutlineChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {featuredDepartments.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ==================== ALL POSITIONS / FEATURED / REMOTE / FAVORITES TAB ==================== */}
        {(activeTab === 'all' || activeTab === 'featured' || activeTab === 'remote' || activeTab === 'favorites') && (
          <>
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon('search', 'w-5 h-5 text-gray-400')}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by job title, department, or keyword..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search positions"
                />
              </div>

              <div className="flex gap-2">
                {/* Department Filter */}
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
                {/* Location Filter */}
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by location"
                >
                  {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.label}
                    </option>
                  ))}
                </select>
                {/* Employment Type Filter */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by employment type"
                >
                  {employmentTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {/* Filter Toggle Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
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
              </div>
            </div>

            {/* Expanded Filters Panel */}
            {showFilters && (
              <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Department
                    </label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Location
                    </label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    >
                      {locations.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Employment Type
                    </label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    >
                      {employmentTypes.map((type) => (
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

            {/* Results Count */}
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

            {/* Positions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredPositions.map((position) => {
                const deptConfig = getDepartmentConfig(position.department);
                const typeConfig = getTypeConfig(position.type);
                const expConfig = getExperienceConfig(position.experience);
                const isFavorite = favoritePositions.includes(position.id);

                return (
                  <div
                    key={position.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => openPositionModal(position)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openPositionModal(position)}
                  >
                    <div className={`p-5 bg-linear-to-r ${deptConfig.gradient} text-white`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{position.title}</h3>
                          <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block bg-white/20">
                            {deptConfig.label}
                          </span>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleFavoritePosition(position.id); }}
                          className={`transition-colors ${isFavorite ? 'text-amber-400' : 'text-white/70 hover:text-amber-400'}`}
                          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>
                    <div className="p-5">
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

                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                        {position.description}
                      </p>

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

                      {position.tags && position.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
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

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          {getIcon('eye', 'w-4 h-4 text-gray-400')}
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {position.views || '1.2k'} views
                          </span>
                        </div>
                        <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline">
                          Apply Now →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ==================== EMPTY STATE ==================== */}
        {(activeTab === 'all' || activeTab === 'featured' || activeTab === 'remote' || activeTab === 'favorites') && filteredPositions.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('briefcase', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No positions found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {activeTab === 'favorites' ? "You haven't saved any positions yet." : "Try adjusting your search or filter criteria"}
            </p>
            {activeTab === 'favorites' && (
              <button onClick={() => setActiveTab('all')} className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Browse All Positions
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button onClick={clearAllFilters} className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline ml-4">
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== POSITION APPLICATION MODAL ==================== */}
        {showPositionModal && selectedPosition && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowPositionModal(false)}
            role="dialog"
            aria-label="Application form"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`sticky top-0 z-10 p-6 bg-linear-to-r ${getDepartmentConfig(selectedPosition.department).gradient} text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedPosition.title}</h2>
                    <p className="text-sm text-white/80">
                      {getDepartmentConfig(selectedPosition.department).label} • {selectedPosition.location}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowPositionModal(false)}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {!applicationSubmitted ? (
                <div className="p-6">
                  {/* Application Steps Indicator */}
                  <div className="flex mb-6">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex-1 text-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${applicationStep >= step
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                            }`}
                        >
                          {step}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {step === 1 && 'Personal Info'}
                          {step === 2 && 'Resume'}
                          {step === 3 && 'Review'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Step 1 - Personal Information */}
                  {applicationStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={applicationData.fullName}
                          onChange={handleApplicationChange}
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={applicationData.email}
                          onChange={handleApplicationChange}
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={applicationData.phone}
                          onChange={handleApplicationChange}
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          name="linkedIn"
                          value={applicationData.linkedIn}
                          onChange={handleApplicationChange}
                          placeholder="https://linkedin.com/in/..."
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2 - Resume & Cover Letter */}
                  {applicationStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Resume/CV *
                        </label>
                        <input
                          type="file"
                          name="resume"
                          onChange={handleApplicationChange}
                          accept=".pdf,.doc,.docx"
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-gray-200"
                          required
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          PDF, DOC, or DOCX (Max 5MB)
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Cover Letter
                        </label>
                        <textarea
                          name="coverLetter"
                          value={applicationData.coverLetter}
                          onChange={handleApplicationChange}
                          rows="5"
                          placeholder="Tell us why you're interested in this position..."
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Portfolio/Website
                        </label>
                        <input
                          type="url"
                          name="portfolio"
                          value={applicationData.portfolio}
                          onChange={handleApplicationChange}
                          placeholder="https://..."
                          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3 - Review & Submit */}
                  {applicationStep === 3 && (
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Position Summary</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Role:</strong> {selectedPosition.title}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Department:</strong> {getDepartmentConfig(selectedPosition.department).label}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Location:</strong> {selectedPosition.location}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Type:</strong> {getTypeConfig(selectedPosition.type).label}
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Your Information</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Name:</strong> {applicationData.fullName || 'Not provided'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Email:</strong> {applicationData.email || 'Not provided'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Resume:</strong> {applicationData.resume ? applicationData.resume.name : 'Not uploaded'}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="termsAgree"
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="termsAgree" className="text-sm text-gray-600 dark:text-gray-400">
                          I confirm that the information provided is accurate and I agree to the terms of application.
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {applicationStep > 1 && (
                      <button
                        onClick={() => setApplicationStep(applicationStep - 1)}
                        className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        Previous
                      </button>
                    )}
                    {applicationStep < 3 ? (
                      <button
                        onClick={() => setApplicationStep(applicationStep + 1)}
                        className="ml-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmitApplication}
                        className="ml-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
                      >
                        Submit Application
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getIcon('check', 'w-8 h-8 text-emerald-600 dark:text-emerald-400')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Thank you for applying for the {selectedPosition.title} position.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our recruiting team will review your application and contact you within 5-7 business days.
                  </p>
                  <button
                    onClick={() => setShowPositionModal(false)}
                    className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
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
              href={config?.talentLink || "/talent-community"}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Join Talent Community
              <HiArrowRight className="w-4 h-4" />
            </Link>
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
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
                .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .max-h-90vh {
                    max-height: 90vh;
                }
            `}</style>
    </section>
  );
};

export default OpenPositionsSection3;