// page/frontend/Careers/LifeAtCompanySection/LifeAtCompanySection2.jsx

/**
 * Life At Company Section II - Advanced Culture & Experience Hub
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Employees, Countries, Years, Satisfaction)
 * - Featured Moments Carousel with Auto-play and Manual Navigation
 * - Multi-filter System (Category, Sort, Search)
 * - Grid/List View Toggle for Gallery Browsing
 * - Favorite/Save Functionality with Heart Icon
 * - Core Values with Trend/Performance Indicators
 * - Perks & Benefits Grid with Icon List
 * - Employee Testimonials Carousel with Navigation Dots
 * - Photo Gallery with Hover Overlay and Metadata
 * - Search across captions, descriptions, and tags
 * - Active Filter Indicators with Count Badge
 * - Responsive Grid and List Layouts
 * - Animated Gradient Orbs in Background
 * - Join Us CTA Banner with Dual Buttons
 * - Image Modal with Lightbox Effect
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useMemo } from 'react';

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
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineCamera, HiOutlineBuildingOffice, HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';
import {
  MdOutlineCoffee as HiOutlineCoffee,
} from "react-icons/md";

const LifeAtCompanySection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('latest'); // latest, popular, oldest
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [favoriteMoments, setFavoriteMoments] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');

  // ==================== REFS ====================
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const allImages = useMemo(() => config?.galleryImages || [], [config?.galleryImages]);
  const featuredMoments = useMemo(() => config?.featuredMoments || [], [config?.featuredMoments]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Moments', icon: 'camera', count: allImages.length },
        { id: 'culture', label: 'Culture', icon: 'users' },
        { id: 'events', label: 'Events', icon: 'calendar' },
        { id: 'office', label: 'Office Life', icon: 'building' },
        { id: 'volunteer', label: 'Volunteer', icon: 'heart' },
        { id: 'celebrations', label: 'Celebrations', icon: 'gift' }
      ],
    [config?.categories, allImages.length]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "500+", label: "Employees Worldwide", icon: "users", trend: "+15%", trendUp: true },
        { value: "25+", label: "Countries", icon: "globe", trend: "+5", trendUp: true },
        { value: "15+", label: "Years of Excellence", icon: "trophy", trend: "15", trendUp: true },
        { value: "95%", label: "Employee Satisfaction", icon: "star", trend: "+2%", trendUp: true }
      ],
    [config?.stats]
  );

  const values = useMemo(
    () =>
      config?.values || [
        { title: "Innovation First", description: "We embrace creativity and push boundaries to solve complex challenges.", icon: "bolt", trend: "+45%", trendUp: true },
        { title: "Customer Obsession", description: "Our customers' success is our success. We go above and beyond.", icon: "heart", trend: "4.9/5", trendUp: true },
        { title: "One Team", description: "Collaboration and mutual respect drive our achievements.", icon: "users", trend: "98%", trendUp: true },
        { title: "Integrity Always", description: "We do the right thing, even when no one is watching.", icon: "shield", trend: "0", trendUp: true }
      ],
    [config?.values]
  );

  const testimonials = useMemo(() => config?.testimonials || [], [config?.testimonials]);
  const perks = useMemo(() => config?.perks || [], [config?.perks]);

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
   * Close gallery modal
   */
  const closeGalleryModal = useCallback(() => {
    setShowGalleryModal(false);
    setSelectedImage(null);
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('latest');
  }, []);

  // ==================== CAROUSEL NAVIGATION ====================
  const featuredCount = featuredMoments.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredCount);
  }, [featuredCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuredCount) % featuredCount);
  }, [featuredCount]);

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

    if (sortBy === 'latest') {
      images.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'oldest') {
      images.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'popular') {
      images.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    }

    return images;
  }, [allImages, searchQuery, selectedCategory, sortBy]);

  // Update category counts for display
  const categoriesWithCount = useMemo(() => {
    return categories.map((cat) => {
      if (cat.id === 'all') {
        return { ...cat, count: filteredImages.length };
      }
      const count = allImages.filter((img) => img.category === cat.id).length;
      return { ...cat, count };
    });
  }, [categories, allImages, filteredImages.length]);

  const activeFiltersCount = [selectedCategory !== 'all', searchQuery !== ''].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Life at Company - Experience Hub"
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
              {getIcon('emoji', 'w-4 h-4 text-blue-600 dark:text-blue-400')}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || 'Life at SupplyChainPro'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'More Than Just'}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Work'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                "We're building a culture where innovation thrives, collaboration flourishes, and everyone feels valued. Join us and experience what makes SupplyChainPro a great place to work."}
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

        {/* ==================== FEATURED MOMENTS CAROUSEL ==================== */}
        {featuredMoments.length > 0 && (
          <div className="relative mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon('star', 'w-5 h-5 text-amber-500')}
              Featured Moments
            </h2>
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

        {/* ==================== CORE VALUES SECTION WITH TRENDS ==================== */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(value.icon, "w-6 h-6 text-blue-600 dark:text-blue-400")}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {value.description}
                </p>
                {value.trend && (
                  <div className={`text-xs font-semibold ${value.trendUp ? 'text-emerald-500' : 'text-blue-500'}`}>
                    {value.trend}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== PERKS & BENEFITS GRID ==================== */}
        {perks.length > 0 && (
          <div className="mb-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              {config?.perksTitle || 'Perks & Benefits'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    {getIcon(perk.icon, "w-5 h-5 text-blue-600 dark:text-blue-400")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== EMPLOYEE TESTIMONIALS ==================== */}
        {testimonials.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              What Our Employees Say
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {getIcon('quote', 'w-6 h-6 text-blue-600 dark:text-blue-400')}
                </div>
                <div className="pt-8">
                  <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                    "{testimonials[activeTestimonial]?.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    {testimonials[activeTestimonial]?.avatar ? (
                      <img
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        {getIcon("users", "w-6 h-6 text-gray-500")}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonials[activeTestimonial]?.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[activeTestimonial]?.role}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-500">
                        {testimonials[activeTestimonial]?.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`transition-all duration-300 rounded-full ${activeTestimonial === idx ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-300 dark:bg-gray-600'
                      }`}
                    aria-label={`View testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

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
              placeholder="Search moments by caption, description, or tags..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search gallery images"
            />
          </div>

          <div className="flex gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Sort gallery items"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
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
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Sort gallery items"
                >
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  View Mode
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${viewMode === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    List
                  </button>
                </div>
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

        {/* ==================== CATEGORY PILLS ==================== */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {categoriesWithCount.map((category) => (
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
              {category.count !== undefined && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                >
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
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

        {/* ==================== GALLERY GRID/LIST VIEW ==================== */}
        <div
          className={`grid gap-6 mb-12 ${viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
            }`}
        >
          {filteredImages.map((image, idx) => {
            const categoryConfig = getCategoryConfig(image.category);
            const isFavorite = favoriteMoments.includes(image.id);

            return (
              <div
                key={idx}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  } cursor-pointer`}
                onClick={() => openGalleryModal(image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openGalleryModal(image)}
              >
                {/* Image Area */}
                <div
                  className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''
                    }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-40 md:h-full' : 'h-48'
                      }`}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                      {categoryConfig.label}
                    </span>
                  </div>
                  {image.isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-md">
                        {getIcon('star', 'w-3 h-3')}
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Date and Metadata */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      {getIcon('calendar', 'w-4 h-4')}
                      <span>{image.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon('eye', 'w-4 h-4')}
                      <span>{image.views || 0} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getIcon('heart', 'w-4 h-4')}
                      <span>{image.likes || 0} likes</span>
                    </div>
                  </div>

                  {/* Caption */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {image.caption}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {image.description}
                  </p>

                  {/* Tags */}
                  {image.tags && image.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
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

                  {/* Footer Actions */}
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

        {/* ==================== EMPTY STATE ==================== */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('camera', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No moments found
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
                href={config?.openingsLink || '/careers/openings'}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                View Open Positions
                <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={config?.cultureLink || '/careers/culture'}
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
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
                loading="lazy"
              />
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

export default LifeAtCompanySection2;