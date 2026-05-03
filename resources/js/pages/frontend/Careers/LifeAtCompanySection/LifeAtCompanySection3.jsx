// page/frontend/Careers/LifeAtCompanySection/LifeAtCompanySection3.jsx

/**
 * Life At Company Section III - Full Culture Hub with Video & Stories
 *
 * Unique Design Elements:
 * - Multi-tab UI (Life Moments, Our Values, Employee Stories, Favorites)
 * - Featured Moments Carousel with Auto-play and Manual Navigation
 * - Video Support with Play Overlay and Modal Player
 * - Core Values Cards with Employee Quotes and Author Attribution
 * - Employee Stories Grid with Rating Stars and Tenure Display
 * - Favorite Moments with LocalStorage Persistence
 * - Category Filter Pills with Icons
 * - Search across captions, descriptions, and tags
 * - Video/Photo Media Type Detection
 * - Responsive Grid Layout for Gallery
 * - Animated Pulse Badge in Header
 * - Circuit Board Background Pattern
 * - Stats Cards for Key Metrics
 * - Join Us CTA Banner with Dual Buttons
 * - Image Modal with Lightbox Effect
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
  HiOutlineEmojiHappy,
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
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineCamera, HiOutlineBuildingOffice, HiOutlineSparkles, HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';
import {
  MdOutlineCoffee as HiOutlineCoffee,
  MdOutlineFullscreen as HiOutlineFullscreen,
  MdOutlineClosedCaption as HiOutlineClosedCaption,
} from "react-icons/md";

const LifeAtCompanySection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('moments');
  const [showFilters, setShowFilters] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [favoriteMoments, setFavoriteMoments] = useState([]);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  // ==================== REFS ====================
  const carouselRef = useRef(null);
  const videoRef = useRef(null);

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('favoriteLifeMoments');
    if (saved) setFavoriteMoments(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteLifeMoments', JSON.stringify(favoriteMoments));
  }, [favoriteMoments]);

  // ==================== MEMOIZED DATA ====================
  const allImages = useMemo(() => config?.galleryImages || [], [config?.galleryImages]);
  const featuredMoments = useMemo(() => config?.featuredMoments || [], [config?.featuredMoments]);
  const values = useMemo(() => config?.values || [], [config?.values]);
  const employeeStories = useMemo(() => config?.employeeStories || [], [config?.employeeStories]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Moments', icon: 'camera' },
        { id: 'culture', label: 'Culture', icon: 'users' },
        { id: 'events', label: 'Events', icon: 'calendar' },
        { id: 'office', label: 'Office Life', icon: 'building' },
        { id: 'volunteer', label: 'Volunteer', icon: 'heart' },
        { id: 'celebrations', label: 'Celebrations', icon: 'gift' }
      ],
    [config?.categories]
  );

  const tabs = useMemo(
    () => [
      { id: 'moments', label: 'Life Moments', icon: 'camera' },
      { id: 'values', label: 'Our Values', icon: 'sparkles' },
      { id: 'stories', label: 'Employee Stories', icon: 'chat' },
      { id: 'favorites', label: 'Favorites', icon: 'heart' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "500+", label: "Employees Worldwide", icon: "users" },
        { value: "25+", label: "Countries", icon: "globe" },
        { value: "15+", label: "Years of Excellence", icon: "trophy" },
        { value: "95%", label: "Employee Satisfaction", icon: "star" }
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
      coffee: <HiOutlineCoffee className={className} />,
      emoji: <HiOutlineEmojiHappy className={className} />,
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
      library: <HiOutlineLibrary className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <HiOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <HiOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      camera: <HiOutlineCamera className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineUserGroup className={className} />;
  }, []);

  /**
   * Returns category configuration with color, icon, label, and gradient
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      culture: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'users', label: 'Culture', gradient: 'from-blue-500 to-blue-600' },
      events: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'calendar', label: 'Events', gradient: 'from-purple-500 to-purple-600' },
      office: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'building', label: 'Office Life', gradient: 'from-emerald-500 to-emerald-600' },
      volunteer: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'heart', label: 'Volunteer', gradient: 'from-orange-500 to-orange-600' },
      celebrations: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'gift', label: 'Celebrations', gradient: 'from-red-500 to-red-600' }
    };
    return configs[categoryId] || configs.culture;
  }, []);

  /**
   * Toggle favorite status for a moment
   */
  const handleFavoriteMoment = useCallback((momentId) => {
    setFavoriteMoments((prev) =>
      prev.includes(momentId) ? prev.filter((id) => id !== momentId) : [...prev, momentId]
    );
  }, []);

  /**
   * Open gallery modal
   */
  const openGalleryModal = useCallback((image) => {
    setSelectedImage(image);
    setShowGalleryModal(true);
  }, []);

  /**
   * Open video modal
   */
  const openVideoModal = useCallback((videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideoModal(true);
  }, []);

  /**
   * Close gallery modal
   */
  const closeGalleryModal = useCallback(() => {
    setShowGalleryModal(false);
    setSelectedImage(null);
  }, []);

  /**
   * Close video modal
   */
  const closeVideoModal = useCallback(() => {
    setShowVideoModal(false);
    setCurrentVideo(null);
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  // ==================== CAROUSEL NAVIGATION ====================
  const featuredCount = featuredMoments.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredCount);
  }, [featuredCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuredCount) % featuredCount);
  }, [featuredCount]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && featuredCount > 1 && activeTab === 'moments') {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuredCount, activeTab, nextSlide]);

  // ==================== FILTERING LOGIC ====================
  const filteredImages = useMemo(() => {
    let images = [...allImages];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      images = images.filter(
        (img) =>
          img.caption?.toLowerCase().includes(query) ||
          img.description?.toLowerCase().includes(query) ||
          img.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      images = images.filter((img) => img.category === selectedCategory);
    }

    if (activeTab === 'favorites') {
      images = images.filter((img) => favoriteMoments.includes(img.id));
    }

    return images;
  }, [allImages, searchQuery, selectedCategory, activeTab, favoriteMoments]);

  const activeFiltersCount = [selectedCategory !== 'all', searchQuery !== ''].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Life at Company - Culture Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-life" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-life)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineSparkles className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Life at SupplyChainPro"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "More Than Just"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Work"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "We're building a culture where innovation thrives, collaboration flourishes, and everyone feels valued. Join us and experience what makes SupplyChainPro a great place to work."}
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
              {tab.id === 'favorites' && favoriteMoments.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoriteMoments.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED MOMENTS CAROUSEL ==================== */}
        {activeTab === 'moments' && featuredMoments.length > 0 && (
          <div className="relative mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Moments</h2>
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredMoments.map((moment, idx) => {
                  const categoryConfig = getCategoryConfig(moment.category);
                  return (
                    <div
                      key={idx}
                      className="w-full shrink-0 cursor-pointer"
                      onClick={() => openGalleryModal(moment)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openGalleryModal(moment)}
                    >
                      <div className="relative h-96 rounded-3xl overflow-hidden">
                        <img
                          src={moment.src}
                          alt={moment.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                              {categoryConfig.label}
                            </span>
                            {moment.type === 'video' && (
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500 text-white">
                                {getIcon('play', 'w-3 h-3 inline mr-1')}
                                Video
                              </span>
                            )}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-2">{moment.caption}</h2>
                          <p className="text-white/80 mb-4 max-w-2xl line-clamp-2">{moment.description}</p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                              {getIcon('calendar', 'w-4 h-4')}
                              <span>{moment.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              {getIcon('heart', 'w-4 h-4')}
                              <span>{moment.likes || 0} likes</span>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); handleFavoriteMoment(moment.id); }}
                              className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${favoriteMoments.includes(moment.id)
                                ? 'bg-red-500 text-white'
                                : 'bg-white/20 hover:bg-white/30'
                                }`}
                              aria-label={favoriteMoments.includes(moment.id) ? 'Remove from favorites' : 'Save moment'}
                            >
                              {getIcon('heart', 'w-4 h-4')}
                              {favoriteMoments.includes(moment.id) ? 'Saved' : 'Save'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {featuredMoments.length > 1 && (
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
                    {featuredMoments.map((_, idx) => (
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

        {/* ==================== VALUES TAB ==================== */}
        {activeTab === 'values' && values.length > 0 && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 text-center group cursor-pointer"
                  onClick={() => {
                    if (value.videoUrl) {
                      openVideoModal(value.videoUrl);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && value.videoUrl && openVideoModal(value.videoUrl)}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${value.gradient} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {getIcon(value.icon, "w-8 h-8 text-white")}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{value.description}</p>
                  {value.quote && (
                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-xs text-blue-600 dark:text-blue-400 italic">"{value.quote}"</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">— {value.author}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== EMPLOYEE STORIES TAB ==================== */}
        {activeTab === 'stories' && employeeStories.length > 0 && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {employeeStories.map((story, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    {story.avatar ? (
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        {getIcon("users", "w-6 h-6 text-blue-600 dark:text-blue-400")}
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{story.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{story.role}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{story.location}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 italic text-sm">"{story.quote}"</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-emerald-600 dark:text-emerald-400">{story.tenure}</span>
                    {story.videoUrl && (
                      <button
                        onClick={() => openVideoModal(story.videoUrl)}
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                        aria-label="Watch story video"
                      >
                        {getIcon('play', 'w-4 h-4')}
                        Watch Story
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== MOMENTS / FAVORITES TAB - SEARCH AND FILTERS ==================== */}
        {(activeTab === 'moments' || activeTab === 'favorites') && (
          <>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon('search', 'w-5 h-5 text-gray-400')}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search moments by caption, description, or tags..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search gallery images"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by category"
                >
                  <option value="all">All Categories</option>
                  {categories
                    .filter((c) => c.id !== 'all')
                    .map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                </select>
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
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    >
                      <option value="all">All Categories</option>
                      {categories
                        .filter((c) => c.id !== 'all')
                        .map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.label}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Sort By
                    </label>
                    <select
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      aria-label="Sort gallery items"
                    >
                      <option>Latest First</option>
                      <option>Most Popular</option>
                      <option>Oldest First</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Media Type
                    </label>
                    <select
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      aria-label="Filter by media type"
                    >
                      <option>All Media</option>
                      <option>Photos</option>
                      <option>Videos</option>
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

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  aria-label={`Show ${category.label}`}
                >
                  {getIcon(category.icon, 'w-4 h-4')}
                  {category.label}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {filteredImages.length}
                </span>{' '}
                moments
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredImages.map((image, idx) => {
                const categoryConfig = getCategoryConfig(image.category);
                const isFavorite = favoriteMoments.includes(image.id);

                return (
                  <div
                    key={idx}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => openGalleryModal(image)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openGalleryModal(image)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                          {categoryConfig.label}
                        </span>
                      </div>
                      {image.type === 'video' && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            {getIcon('play', 'w-6 h-6 text-blue-600 ml-1')}
                          </div>
                        </div>
                      )}
                      {image.isFeatured && (
                        <div className="absolute top-3 right-3">
                          <span className="flex items-center gap-1 px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-md">
                            {getIcon('star', 'w-3 h-3')}
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {getIcon('calendar', 'w-4 h-4')}
                        <span>{image.date}</span>
                        <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
                        {getIcon('eye', 'w-4 h-4')}
                        <span>{image.views || 0} views</span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {image.caption}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                        {image.description}
                      </p>

                      {image.tags && image.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {image.tags.slice(0, 3).map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <button
                          onClick={(e) => { e.stopPropagation(); handleFavoriteMoment(image.id); }}
                          className={`flex items-center gap-1 text-sm transition-colors ${isFavorite
                            ? 'text-red-500'
                            : 'text-gray-400 hover:text-red-500'
                            }`}
                          aria-label={isFavorite ? 'Remove from favorites' : 'Save moment'}
                        >
                          {getIcon('heart', `w-4 h-4 ${isFavorite ? 'fill-current' : ''}`)}
                          <span>{isFavorite ? 'Saved' : 'Save'}</span>
                        </button>
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                          View Details →
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
        {(activeTab === 'moments' || activeTab === 'favorites') && filteredImages.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('camera', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No moments found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {activeTab === 'favorites' ? "You haven't saved any moments yet." : "Try adjusting your search or filter criteria"}
            </p>
            {activeTab === 'favorites' && (
              <button onClick={() => setActiveTab('moments')} className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Browse All Moments
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button onClick={clearAllFilters} className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline ml-4">
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== JOIN OUR TEAM CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Join Us?</h3>
              <p className="text-blue-100 dark:text-blue-200 max-w-2xl">
                Explore open positions and become part of a team that's transforming supply chains worldwide.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href={config?.openingsLink || "/careers/openings"}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                View Open Positions
                <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={config?.cultureLink || "/careers/culture"}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              >
                Learn About Our Culture
                {getIcon('external', 'w-4 h-4')}
              </Link>
            </div>
          </div>
        </div>

        {/* ==================== GALLERY MODAL ==================== */}
        {showGalleryModal && selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeGalleryModal}
            role="dialog"
            aria-label="Gallery image"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeGalleryModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
              {selectedImage.type === 'video' ? (
                <video src={selectedImage.src} className="w-full h-auto max-h-[80vh]" controls autoPlay />
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  loading="lazy"
                />
              )}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(selectedImage.category).color}`}>
                    {getCategoryConfig(selectedImage.category).label}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{selectedImage.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedImage.caption}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedImage.description}</p>
                {selectedImage.tags && selectedImage.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedImage.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && currentVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeVideoModal}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
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

export default LifeAtCompanySection3;