// page/frontend/Careers/CompanyCultureSection/CompanyCultureSection3.jsx

/**
 * Company Culture Section III - Full Culture Hub with Quiz & Video
 *
 * Unique Design Elements:
 * - Multi-tab UI: All Stories, Featured, Core Values, Culture Quiz, Favorites
 * - Core Values Video Carousel with Auto-play and Manual Navigation
 * - Interactive Culture Quiz with Score Calculation
 * - Video Modal Player for Core Values
 * - Story Detail Modal with Complete Content
 * - Favorite Stories with LocalStorage Persistence
 * - Category & Value Filters for Stories
 * - Author Avatar and Role Display
 * - Quote Highlight within Story Content
 * - Search across story titles, content, and tags
 * - Stats Cards for Key Metrics
 * - Responsive Grid Layout for Story Cards
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
  HiOutlineHeart,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineCalendar,
  HiOutlineClock,
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
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineUsers,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineArchive,
  HiOutlinePhotograph,
  HiOutlineDocument,
  HiOutlineLink,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineAtSymbol,
  HiOutlinePrinter,
  HiOutlineDuplicate,
  HiOutlineQrcode,
  HiOutlinePlay,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlinePhone,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineBeaker,
  HiOutlinePuzzle,
  HiOutlineCamera,
  HiOutlineMusicNote,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineLibrary,
  HiOutlineNewspaper,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineUserCircle,
  HiOutlineDocumentSearch,
  HiOutlineClipboardList,
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
  MdOutlineHandshake as HiOutlineHandshake,
} from "react-icons/md";

const CompanyCultureSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeTab, setActiveTab] = useState('all');
  const [quizScore, setQuizScore] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedValue, setSelectedValue] = useState('all');
  const [favoriteStories, setFavoriteStories] = useState([]);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== REFERENCE MANAGEMENT ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('favoriteCultureStories');
    if (saved) setFavoriteStories(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteCultureStories', JSON.stringify(favoriteStories));
  }, [favoriteStories]);

  // ==================== MEMOIZED DATA ====================
  const allStories = useMemo(() => config?.stories || [], [config?.stories]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Stories', icon: 'heart', count: allStories.length },
        { id: 'values', label: 'Core Values', icon: 'heart' },
        { id: 'benefits', label: 'Benefits & Perks', icon: 'gift' },
        { id: 'events', label: 'Events & Activities', icon: 'calendar' },
        { id: 'testimonials', label: 'Employee Stories', icon: 'chat' },
        { id: 'diversity', label: 'Diversity & Inclusion', icon: 'users' },
      ],
    [config?.categories, allStories.length]
  );

  const values = useMemo(
    () => [
      { id: 'all', label: 'All Values' },
      { id: 'customer-first', label: 'Customer First' },
      { id: 'innovation', label: 'Innovation' },
      { id: 'integrity', label: 'Integrity' },
      { id: 'collaboration', label: 'Collaboration' },
      { id: 'excellence', label: 'Excellence' },
      { id: 'inclusion', label: 'Inclusion' }
    ],
    []
  );

  const tabs = useMemo(
    () => [
      { id: 'all', label: 'All Stories', icon: 'heart' },
      { id: 'featured', label: 'Featured', icon: 'star' },
      { id: 'values', label: 'Core Values', icon: 'badge' },
      { id: 'quiz', label: 'Culture Quiz', icon: 'academic' },
      { id: 'favorites', label: 'Favorites', icon: 'bookmark' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "98%", label: "Employee Satisfaction", icon: "star" },
        { value: "25+", label: "Countries", icon: "globe" },
        { value: "15+", label: "Employee Resource Groups", icon: "users" },
        { value: "1000+", label: "Team Members", icon: "usergroup" }
      ],
    [config?.stats]
  );

  const coreValues = useMemo(
    () =>
      config?.coreValues || [
        { title: "Customer First", description: "We put our customers at the center of everything we do. Their success is our success.", icon: "heart", color: "from-rose-500 to-pink-500", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { title: "Innovation", description: "We embrace curiosity and push boundaries to create breakthrough solutions that transform supply chains.", icon: "lightbulb", color: "from-amber-500 to-orange-500", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { title: "Integrity", description: "We act with honesty, transparency, and accountability in everything we do.", icon: "badge", color: "from-emerald-500 to-green-500", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { title: "Collaboration", description: "We achieve more together through teamwork and mutual respect across all boundaries.", icon: "handshake", color: "from-blue-500 to-cyan-500", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { title: "Excellence", description: "We strive for excellence in everything we do, delivering quality and value to our customers.", icon: "trophy", color: "from-purple-500 to-indigo-500", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { title: "Inclusion", description: "We celebrate diversity and create a culture where everyone belongs and can thrive.", icon: "users", color: "from-pink-500 to-rose-500", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" }
      ],
    [config?.coreValues]
  );

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      heart: <HiOutlineHeart className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
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
      star: <HiOutlineStar className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      usergroup: <HiOutlineUsers className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      'thumbs-up': <HiOutlineThumbUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      flag: <HiOutlineFlag className={className} />,
      gift: <HiOutlineGift className={className} />,
      archive: <HiOutlineArchive className={className} />,
      photo: <HiOutlinePhotograph className={className} />,
      doc: <HiOutlineDocument className={className} />,
      link: <HiOutlineLink className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      quote: <HiOutlineQuote className={className} />,
      at: <HiOutlineAtSymbol className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      duplicate: <HiOutlineDuplicate className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      play: <HiOutlinePlay className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      phone: <HiOutlinePhone className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      coffee: <HiOutlineCoffee className={className} />,
      beaker: <HiOutlineBeaker className={className} />,
      puzzle: <HiOutlinePuzzle className={className} />,
      handshake: <HiOutlineHandshake className={className} />,
      camera: <HiOutlineCamera className={className} />,
      music: <HiOutlineMusicNote className={className} />,
      library: <HiOutlineLibrary className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <HiOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <HiOutlineClosedCaption className={className} />,
      userCircle: <HiOutlineUserCircle className={className} />,
      documentSearch: <HiOutlineDocumentSearch className={className} />,
      clipboardList: <HiOutlineClipboardList className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineHeart className={className} />;
  }, []);

  /**
   * Returns category configuration with color, icon, label, and gradient
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      values: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'heart', label: 'Core Values', gradient: 'from-blue-500 to-blue-600' },
      benefits: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'gift', label: 'Benefits & Perks', gradient: 'from-emerald-500 to-emerald-600' },
      events: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'calendar', label: 'Events & Activities', gradient: 'from-purple-500 to-purple-600' },
      testimonials: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'chat', label: 'Employee Stories', gradient: 'from-orange-500 to-orange-600' },
      diversity: { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Diversity & Inclusion', gradient: 'from-pink-500 to-pink-600' },
      innovation: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'lightbulb', label: 'Innovation', gradient: 'from-indigo-500 to-indigo-600' }
    };
    return configs[categoryId] || configs.values;
  }, []);

  /**
   * Toggle favorite status for a story
   */
  const handleFavoriteStory = useCallback((storyId) => {
    setFavoriteStories((prev) =>
      prev.includes(storyId) ? prev.filter((id) => id !== storyId) : [...prev, storyId]
    );
  }, []);

  /**
   * Open story modal
   */
  const openStoryModal = useCallback((story) => {
    setSelectedStory(story);
    setShowStoryModal(true);
  }, []);

  /**
   * Handle quiz submission
   */
  const handleQuizSubmit = useCallback(() => {
    const correctAnswers = {
      q1: 'customer-first',
      q2: 'innovation',
      q3: 'collaboration'
    };
    let score = 0;
    Object.keys(correctAnswers).forEach(key => {
      if (quizAnswers[key] === correctAnswers[key]) {
        score++;
      }
    });
    setQuizScore(score);
  }, [quizAnswers]);

  // ==================== CAROUSEL NAVIGATION ====================
  const coreValuesCount = coreValues.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % coreValuesCount);
  }, [coreValuesCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + coreValuesCount) % coreValuesCount);
  }, [coreValuesCount]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && coreValuesCount > 1 && activeTab === 'values') {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, coreValuesCount, activeTab, nextSlide]);

  // ==================== FILTERING LOGIC ====================
  const filteredStories = useMemo(() => {
    let stories = [...allStories];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      stories = stories.filter(
        (s) =>
          s.title?.toLowerCase().includes(query) ||
          s.excerpt?.toLowerCase().includes(query) ||
          s.content?.toLowerCase().includes(query) ||
          s.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      stories = stories.filter((s) => s.category === selectedCategory);
    }

    if (selectedValue !== 'all') {
      stories = stories.filter((s) => s.values?.includes(selectedValue));
    }

    if (activeTab === 'favorites') {
      stories = stories.filter((s) => favoriteStories.includes(s.id));
    } else if (activeTab === 'featured') {
      stories = stories.filter((s) => s.isFeatured);
    }

    return stories;
  }, [allStories, searchQuery, selectedCategory, selectedValue, activeTab, favoriteStories]);

  const activeFiltersCount = [selectedCategory !== 'all', selectedValue !== 'all', searchQuery !== ''].filter(Boolean).length;

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedValue('all');
    setActiveTab('all');
  }, []);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Company Culture Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-culture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-culture)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineHeart className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Our Culture"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Life at"} <span className="bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "SupplyChainPro"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "We're building a workplace where innovation thrives, diversity is celebrated, and every team member feels valued and empowered."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, "w-4 h-4 text-pink-600 dark:text-pink-400")}
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
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
              {tab.id === 'favorites' && favoriteStories.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoriteStories.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== CORE VALUES CAROUSEL TAB ==================== */}
        {activeTab === 'values' && coreValues.length > 0 && (
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {coreValues.map((value, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <div className={`bg-linear-to-br ${value.color} rounded-3xl p-12 text-white text-center`}>
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        {getIcon(value.icon, "w-10 h-10 text-white")}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{value.title}</h2>
                      <p className="text-white/90 text-xl max-w-2xl mx-auto mb-6">{value.description}</p>
                      <button
                        onClick={() => {
                          setCurrentVideo(value.videoUrl);
                          setShowVideoModal(true);
                        }}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        aria-label="Watch video"
                      >
                        <HiOutlinePlay className="w-4 h-4" />
                        Watch Video
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {coreValues.length > 1 && (
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
                    {coreValues.map((_, idx) => (
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

        {/* ==================== CULTURE QUIZ TAB ==================== */}
        {activeTab === 'quiz' && (
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <HiOutlineAcademicCap className="w-12 h-12 mx-auto text-pink-600 dark:text-pink-400 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Culture Quiz</h2>
                <p className="text-gray-600 dark:text-gray-400">Test your knowledge about our company culture and values</p>
              </div>

              {quizScore === null ? (
                <div className="space-y-6 max-w-2xl mx-auto">
                  <div className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                    <p className="font-semibold text-gray-900 dark:text-white mb-3">1. What is our #1 core value?</p>
                    <div className="space-y-2">
                      {['Innovation', 'Customer First', 'Excellence', 'Collaboration'].map(option => (
                        <label key={option} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                          <input
                            type="radio"
                            name="q1"
                            value={option.toLowerCase().replace(' ', '-')}
                            onChange={(e) => setQuizAnswers({ ...quizAnswers, q1: e.target.value })}
                            className="w-4 h-4 text-pink-600 focus:ring-pink-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                    <p className="font-semibold text-gray-900 dark:text-white mb-3">2. Which value best describes our approach to new ideas?</p>
                    <div className="space-y-2">
                      {['Excellence', 'Integrity', 'Innovation', 'Inclusion'].map(option => (
                        <label key={option} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                          <input
                            type="radio"
                            name="q2"
                            value={option.toLowerCase().replace(' ', '-')}
                            onChange={(e) => setQuizAnswers({ ...quizAnswers, q2: e.target.value })}
                            className="w-4 h-4 text-pink-600 focus:ring-pink-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                    <p className="font-semibold text-gray-900 dark:text-white mb-3">3. What does "Together we achieve more" represent?</p>
                    <div className="space-y-2">
                      {['Excellence', 'Collaboration', 'Innovation', 'Integrity'].map(option => (
                        <label key={option} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                          <input
                            type="radio"
                            name="q3"
                            value={option.toLowerCase().replace(' ', '-')}
                            onChange={(e) => setQuizAnswers({ ...quizAnswers, q3: e.target.value })}
                            className="w-4 h-4 text-pink-600 focus:ring-pink-500"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleQuizSubmit}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-semibold transition-colors"
                    aria-label="Submit quiz"
                  >
                    Submit Quiz
                  </button>
                </div>
              ) : (
                <div className="text-center py-8 animate-fadeIn">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    {quizScore >= 2 ? (
                      <HiOutlineBadgeCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <HiOutlineAcademicCap className="w-10 h-10 text-orange-600 dark:text-orange-400" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    You scored {quizScore}/3
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {quizScore === 3 ? "Perfect! You really know our culture!" :
                      quizScore === 2 ? "Good job! Learn more about our values to get a perfect score." :
                        "Keep learning about our culture - check out our values section!"}
                  </p>
                  <button
                    onClick={() => {
                      setQuizScore(null);
                      setQuizAnswers({});
                    }}
                    className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors"
                    aria-label="Retake quiz"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== ALL STORIES / FAVORITES TAB ==================== */}
        {(activeTab === 'all' || activeTab === 'featured' || activeTab === 'favorites') && (
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
                  placeholder="Search stories, values, or experiences..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search culture stories"
                />
              </div>

              <div className="flex gap-2">
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 dark:text-white"
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
                {/* Value Filter */}
                <select
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 dark:text-white"
                  aria-label="Filter by value"
                >
                  {values.map((val) => (
                    <option key={val.id} value={val.id}>
                      {val.label}
                    </option>
                  ))}
                </select>
                {/* Filter Toggle Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                    ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/25'
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 dark:text-white"
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
                      Value
                    </label>
                    <select
                      value={selectedValue}
                      onChange={(e) => setSelectedValue(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900 dark:text-white"
                    >
                      {values.map((val) => (
                        <option key={val.id} value={val.id}>
                          {val.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {activeFiltersCount > 0 && (
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
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
                  {filteredStories.length}
                </span>{' '}
                stories
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* Stories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredStories.map((story) => {
                const categoryConfig = getCategoryConfig(story.category);
                const isFavorite = favoriteStories.includes(story.id);
                return (
                  <div
                    key={story.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => openStoryModal(story)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openStoryModal(story)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                          {categoryConfig.label}
                        </span>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleFavoriteStory(story.id); }}
                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group"
                        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {getIcon('bookmark', `w-4 h-4 ${isFavorite ? 'text-amber-500' : 'text-gray-600'}`)}
                      </button>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={story.author?.avatar}
                          alt={story.author?.name}
                          className="w-6 h-6 rounded-full object-cover"
                          loading="lazy"
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {story.author?.name}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          {getIcon('calendar', 'w-3 h-3')}
                          <span>{story.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          {getIcon('eye', 'w-3 h-3')}
                          <span>{story.views || '1.2k'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ==================== EMPTY STATE ==================== */}
        {(activeTab === 'all' || activeTab === 'featured' || activeTab === 'favorites') && filteredStories.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('heart', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No stories found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {activeTab === 'favorites' ? "You haven't saved any stories yet." : "Try adjusting your search or filter criteria"}
            </p>
            {activeTab === 'favorites' && (
              <button onClick={() => setActiveTab('all')} className="mt-4 text-pink-600 dark:text-pink-400 font-semibold hover:underline">
                Browse All Stories
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button onClick={clearAllFilters} className="mt-4 text-pink-600 dark:text-pink-400 font-semibold hover:underline ml-4">
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== STORY DETAIL MODAL ==================== */}
        {showStoryModal && selectedStory && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowStoryModal(false)}
            role="dialog"
            aria-label="Story details"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`sticky top-0 z-10 p-6 bg-linear-to-r ${getCategoryConfig(selectedStory.category).gradient} text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedStory.title}</h2>
                    <p className="text-sm text-white/80">{getCategoryConfig(selectedStory.category).label}</p>
                  </div>
                  <button
                    onClick={() => setShowStoryModal(false)}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={selectedStory.author?.avatar}
                    alt={selectedStory.author?.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{selectedStory.author?.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{selectedStory.author?.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {selectedStory.content}
                </p>
                {selectedStory.quote && (
                  <div className="mb-4 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl border-l-4 border-pink-500">
                    {getIcon('quote', 'w-5 h-5 text-pink-500 mb-2')}
                    <p className="text-sm italic text-gray-700 dark:text-gray-300">
                      "{selectedStory.quote.text}"
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      — {selectedStory.quote.author}
                    </p>
                  </div>
                )}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button
                    onClick={() => handleFavoriteStory(selectedStory.id)}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${favoriteStories.includes(selectedStory.id)
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    aria-label="Toggle favorite"
                  >
                    {getIcon('bookmark', 'w-5 h-5 inline mr-2')}
                    {favoriteStories.includes(selectedStory.id) ? 'Saved' : 'Save Story'}
                  </button>
                  <button
                    className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-semibold transition-colors"
                    aria-label="Share story"
                  >
                    {getIcon('share', 'w-5 h-5 inline mr-2')}
                    Share
                  </button>
                </div>
              </div>
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

        {/* ==================== JOIN US CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-pink-600 to-purple-600 dark:from-pink-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Join Our Team</h3>
              <p className="text-pink-100 dark:text-pink-200 max-w-2xl">
                Ready to be part of something special? Explore open positions and find your place at SupplyChainPro.
              </p>
            </div>
            <Link
              href={config?.ctaLink || "/careers"}
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-all duration-300"
            >
              View Open Positions
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

export default CompanyCultureSection3;