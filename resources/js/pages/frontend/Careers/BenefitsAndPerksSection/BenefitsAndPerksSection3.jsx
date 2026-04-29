// page/frontend/Careers/BenefitsAndPerksSection/BenefitsAndPerksSection3.jsx

/**
 * Benefits & Perks Section III - Full Benefits Hub with Stories & Application
 *
 * Unique Design Elements:
 * - Tabbed Interface (All Benefits, Featured, Favorites, Employee Stories)
 * - Featured Benefits Carousel with Auto-play and Manual Navigation
 * - Employee Stories Carousel with Testimonials and Star Ratings
 * - Benefit Detail Expansion with Show More/Less
 * - Favorite Benefits with LocalStorage Persistence
 * - Application Modal with Form Validation
 * - Success Message on Application Submission
 * - Category Filter Pills with Icons
 * - Multi-category Benefit Grid Display
 * - Eligibility Badge Display
 * - Interactive Benefit Cards with Hover Effects
 * - Stats Cards for Key Metrics (Remote-First, Rating, Stipend, Benefits)
 * - Just Apply CTA Banner with Modal Trigger
 * - Video Modal for Employee Story Playback
 * - Responsive Grid Layout for Benefit Cards
 * - Animated Pulse Badge in Header
 * - Circuit Board Background Pattern
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

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
  HiOutlineLibrary,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineQrcode,
  HiOutlinePrinter,
  HiOutlinePhone,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import {
  HiArrowRight,
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import {
  MdOutlineCoffee as HiOutlineCoffee,
  MdOutlineFullscreen as HiOutlineFullscreen,
  MdOutlineClosedCaption as HiOutlineClosedCaption,
} from "react-icons/md";

const BenefitsAndPerksSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [expandedBenefit, setExpandedBenefit] = useState(null);
  const [favoriteBenefits, setFavoriteBenefits] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', resume: null, message: '' });

  // ==================== REFERENCE MANAGEMENT ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('favoriteBenefits');
    if (saved) setFavoriteBenefits(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteBenefits', JSON.stringify(favoriteBenefits));
  }, [favoriteBenefits]);

  // ==================== MEMOIZED DATA ====================
  const allBenefits = useMemo(() => config?.benefits || [], [config?.benefits]);
  const employeeStories = useMemo(() => config?.employeeStories || [], [config?.employeeStories]);
  const featuredBenefits = useMemo(() => config?.featuredBenefits || [], [config?.featuredBenefits]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Benefits', icon: 'gift' },
        { id: 'health', label: 'Health & Wellness', icon: 'heart' },
        { id: 'financial', label: 'Financial', icon: 'credit' },
        { id: 'work-life', label: 'Work-Life', icon: 'home' },
        { id: 'professional', label: 'Professional', icon: 'academic' },
        { id: 'lifestyle', label: 'Lifestyle', icon: 'coffee' },
        { id: 'family', label: 'Family', icon: 'users' }
      ],
    [config?.categories]
  );

  const tabs = useMemo(
    () => [
      { id: 'overview', label: 'All Benefits', icon: 'gift' },
      { id: 'featured', label: 'Featured', icon: 'star' },
      { id: 'favorites', label: 'Favorites', icon: 'heart' },
      { id: 'stories', label: 'Employee Stories', icon: 'users' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "100%", label: "Remote-First", icon: "wifi" },
        { value: "4.9", label: "Employee Rating", icon: "star" },
        { value: "$2k", label: "Learning Stipend", icon: "academic" },
        { value: "20+", label: "Benefits", icon: "gift" }
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
      library: <HiOutlineLibrary className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <HiOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <HiOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />,
      rocket: <HiOutlineRocket className={className} />
    };
    return icons[iconName] || <HiOutlineGift className={className} />;
  }, []);

  /**
   * Returns category configuration with color, icon, label, and gradient
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      health: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'heart', label: 'Health & Wellness', gradient: 'from-emerald-500 to-emerald-600' },
      financial: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'credit', label: 'Financial Benefits', gradient: 'from-blue-500 to-blue-600' },
      'work-life': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'home', label: 'Work-Life Balance', gradient: 'from-purple-500 to-purple-600' },
      professional: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'academic', label: 'Professional Growth', gradient: 'from-orange-500 to-orange-600' },
      lifestyle: { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'coffee', label: 'Lifestyle Perks', gradient: 'from-pink-500 to-pink-600' },
      family: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'users', label: 'Family Support', gradient: 'from-indigo-500 to-indigo-600' }
    };
    return configs[categoryId] || configs.health;
  }, []);

  /**
   * Toggle favorite status for a benefit
   */
  const handleFavoriteBenefit = useCallback((benefitId) => {
    setFavoriteBenefits((prev) =>
      prev.includes(benefitId) ? prev.filter((id) => id !== benefitId) : [...prev, benefitId]
    );
  }, []);

  /**
   * Toggle expanded state for a benefit
   */
  const toggleExpanded = useCallback((benefitId) => {
    setExpandedBenefit((prev) => (prev === benefitId ? null : benefitId));
  }, []);

  /**
   * Open apply modal
   */
  const openApplyModal = useCallback(() => {
    setShowApplyModal(true);
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
      setShowApplyModal(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        resume: null,
        message: ''
      });
    }, 3000);
  }, []);

  // ==================== CAROUSEL NAVIGATION ====================
  const featuredCount = featuredBenefits.length;
  const storiesCount = employeeStories.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (activeTab === 'stories' ? storiesCount : featuredCount));
  }, [activeTab, featuredCount, storiesCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (activeTab === 'stories' ? storiesCount : featuredCount)) % (activeTab === 'stories' ? storiesCount : featuredCount));
  }, [activeTab, featuredCount, storiesCount]);

  // Auto-play carousel
  useEffect(() => {
    const count = activeTab === 'stories' ? storiesCount : featuredCount;
    if (config?.autoPlayCarousel && count > 1 && (activeTab === 'overview' || activeTab === 'stories')) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuredCount, storiesCount, activeTab, nextSlide]);

  // ==================== FILTERING LOGIC ====================
  const filteredBenefits = useMemo(() => {
    let benefits = [...allBenefits];

    if (selectedCategory !== 'all') {
      benefits = benefits.filter((b) => b.category === selectedCategory);
    }

    if (activeTab === 'featured') {
      benefits = benefits.filter((b) => b.isFeatured);
    } else if (activeTab === 'favorites') {
      benefits = benefits.filter((b) => favoriteBenefits.includes(b.id));
    }

    return benefits;
  }, [allBenefits, selectedCategory, activeTab, favoriteBenefits]);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Benefits & Perks Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-benefits" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-benefits)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineGift className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Benefits & Perks"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Benefits That"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Empower You"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "We believe in taking care of our team. From comprehensive health coverage to professional development, we offer benefits that support your whole life."}
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
              {tab.id === 'favorites' && favoriteBenefits.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoriteBenefits.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED BENEFITS CAROUSEL ==================== */}
        {activeTab === 'overview' && featuredBenefits.length > 0 && (
          <div className="relative mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Benefits</h2>
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredBenefits.map((benefit) => {
                  const categoryConfig = getCategoryConfig(benefit.category);
                  return (
                    <div key={benefit.id} className="w-full shrink-0">
                      <div className="relative h-80 rounded-3xl overflow-hidden cursor-pointer">
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                              {categoryConfig.label}
                            </span>
                            {benefit.isFeatured && (
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-white">
                                {getIcon('star', 'w-3 h-3 inline mr-1')}
                                Featured
                              </span>
                            )}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-2">{benefit.title}</h2>
                          <p className="text-white/80 mb-4 max-w-2xl line-clamp-2">{benefit.description}</p>
                          <button
                            onClick={() => handleFavoriteBenefit(benefit.id)}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${favoriteBenefits.includes(benefit.id)
                              ? 'bg-red-500 text-white'
                              : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white'
                              }`}
                            aria-label={favoriteBenefits.includes(benefit.id) ? 'Remove from favorites' : 'Save benefit'}
                          >
                            {getIcon('heart', 'w-4 h-4 inline mr-2')}
                            {favoriteBenefits.includes(benefit.id) ? 'Saved' : 'Save Benefit'}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {featuredBenefits.length > 1 && (
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
                    {featuredBenefits.map((_, idx) => (
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

        {/* ==================== CATEGORY PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${category.label} benefits`}
            >
              {getIcon(category.icon, "w-4 h-4")}
              {category.label}
            </button>
          ))}
        </div>

        {/* ==================== BENEFITS GRID ==================== */}
        {activeTab !== 'stories' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredBenefits.map((benefit) => {
              const categoryConfig = getCategoryConfig(benefit.category);
              const isExpanded = expandedBenefit === benefit.id;
              const isFavorite = favoriteBenefits.includes(benefit.id);

              return (
                <div
                  key={benefit.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`h-2 bg-linear-to-r ${categoryConfig.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl ${categoryConfig.color} flex items-center justify-center`}>
                          {getIcon(benefit.icon, "w-6 h-6")}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${categoryConfig.color}`}>
                            {categoryConfig.label}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleFavoriteBenefit(benefit.id)}
                        className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                          }`}
                        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {getIcon('heart', `w-5 h-5 ${isFavorite ? 'fill-current' : ''}`)}
                      </button>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {benefit.description}
                    </p>

                    {/* Expandable Details */}
                    {benefit.details && benefit.details.length > 0 && (
                      <div className="mb-3">
                        <button
                          onClick={() => toggleExpanded(benefit.id)}
                          className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-medium"
                          aria-label={isExpanded ? 'Show less' : 'View details'}
                        >
                          {isExpanded ? 'Show less' : 'View details'}
                          {getIcon('chevron-down', `w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`)}
                        </button>
                        {isExpanded && (
                          <div className="mt-2 space-y-1 animate-fadeIn">
                            {benefit.details.map((detail, idx) => (
                              <p key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                {getIcon('check', 'w-3 h-3 text-emerald-500 mt-0.5 shrink-0')}
                                {detail}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        {getIcon('users', 'w-3 h-3 text-gray-400')}
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {benefit.eligibility || "All Employees"}
                        </span>
                      </div>
                      <button
                        onClick={openApplyModal}
                        className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline"
                        aria-label="Learn more and apply"
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== EMPLOYEE STORIES TAB ==================== */}
        {activeTab === 'stories' && employeeStories.length > 0 && (
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {employeeStories.map((story, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-4 mb-6">
                        {story.avatar ? (
                          <img
                            src={story.avatar}
                            alt={story.name}
                            className="w-16 h-16 rounded-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            {getIcon("users", "w-8 h-8 text-blue-600 dark:text-blue-400")}
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{story.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{story.role}</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">{story.location}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex gap-1 text-amber-500 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 italic text-lg">
                          "{story.quote}"
                        </p>
                      </div>
                      {story.benefitsMentioned && story.benefitsMentioned.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {story.benefitsMentioned.map((benefit, bid) => (
                            <span key={bid} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      )}
                      {story.videoUrl && (
                        <button
                          onClick={() => { setCurrentVideo(story.videoUrl); setShowVideoModal(true); }}
                          className="mt-4 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                          aria-label="Watch full story"
                        >
                          {getIcon('play', 'w-4 h-4')}
                          Watch Full Story
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {employeeStories.length > 1 && (
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
                    {employeeStories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-400'
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

        {/* ==================== EMPTY STATE ==================== */}
        {filteredBenefits.length === 0 && activeTab !== 'stories' && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('gift', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No benefits found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {activeTab === 'favorites' ? "You haven't saved any benefits yet." : "Try adjusting your filter criteria"}
            </p>
            {activeTab === 'favorites' && (
              <button onClick={() => setActiveTab('overview')} className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Browse All Benefits
              </button>
            )}
            {selectedCategory !== 'all' && (
              <button onClick={() => setSelectedCategory('all')} className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline ml-4">
                Clear Category Filter
              </button>
            )}
          </div>
        )}

        {/* ==================== JOIN OUR TEAM CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          {getIcon('usergroup', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Us?</h3>
          <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
            Explore open positions and become part of a team that values your well-being and growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={openApplyModal}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              aria-label="Open application form"
            >
              Apply Now
              <HiArrowRight className="w-4 h-4" />
            </button>
            <Link
              href={config?.careersLink || "/careers/openings"}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
            >
              View Open Positions
              {getIcon('briefcase', 'w-4 h-4')}
            </Link>
          </div>
        </div>

        {/* ==================== APPLICATION MODAL ==================== */}
        {showApplyModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setShowApplyModal(false)}
            role="dialog"
            aria-label="Application form"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Apply to SupplyChainPro</h3>
                  <button
                    onClick={() => setShowApplyModal(false)}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-6 text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getIcon('check', 'w-8 h-8 text-emerald-600 dark:text-emerald-400')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for your interest. Our recruiting team will review your application.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Position Interested In *
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      >
                        <option value="">Select a position</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Product Manager">Product Manager</option>
                        <option value="Data Scientist">Data Scientist</option>
                        <option value="UX Designer">UX Designer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Resume/CV *
                      </label>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleInputChange}
                        required
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-gray-200"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        PDF, DOC, or DOCX (Max 5MB)
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Why are you interested in joining us?
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        placeholder="Tell us about your interest..."
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && currentVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setShowVideoModal(false)}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
              <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
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
            `}</style>
    </section>
  );
};

export default BenefitsAndPerksSection3;