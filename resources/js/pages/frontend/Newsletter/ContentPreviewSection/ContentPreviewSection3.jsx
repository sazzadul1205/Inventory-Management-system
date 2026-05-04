// page/frontend/Newsletter/ContentPreviewSection/ContentPreviewSection3.jsx

/**
 * Content Preview Section III - Full Content Hub with Video & Expert Insights
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Subscribers, Issues, Open Rate, Rating)
 * - Multi-tab UI (Featured, Trending, All Articles)
 * - Featured Article Hero Layout with Author Info and Quote Block
 * - Video Preview Modal for Featured Content
 * - Articles Grid with Hover Effects and Category Badges
 * - Trending Articles with Fire Badge Indicator
 * - Expert Insights Section with Quotes and Avatars
 * - Upcoming Topics Preview with Interactive Pill Badges
 * - Subscribe Modal with Email Collection
 * - Download Sample Issue CTA
 * - Circuit Board Background Pattern
 * - Animated Pulse Badge in Header
 * - Responsive Grid Layout for All Sections
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useRef } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineNewspaper,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineTag,
  HiOutlineMail,
  HiOutlineHeart,
  HiOutlineThumbUp,
  HiOutlineBookmark,
  HiOutlineShare,
  HiOutlineDownload,
  HiOutlinePlay,
  HiOutlineMicrophone,
  HiOutlineVideoCamera,
  HiOutlineX,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineSparkles,
  HiOutlineFire,
  HiOutlineTrendingUp,
  HiOutlineChat,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const ContentPreviewSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState('featured');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  // ==================== REFERENCE MANAGEMENT ====================
  const videoRef = useRef(null);

  // ==================== MEMOIZED DATA ====================

  const featuredContent = config?.featuredContent || {
    id: 1,
    title: "The Future of Supply Chain: AI-Driven Logistics",
    description: "Discover how artificial intelligence is transforming supply chain operations, from predictive analytics to autonomous delivery systems. This week's featured article explores real-world applications and ROI metrics.",
    author: "Sarah Johnson",
    authorRole: "Senior Supply Chain Analyst",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    highlights: [
      "How AI predicts demand with 95% accuracy",
      "Case study: 40% reduction in logistics costs",
      "The rise of autonomous delivery vehicles",
      "Implementation roadmap for mid-size companies"
    ],
    stats: {
      views: "2.4K",
      likes: "342",
      saves: "156",
      comments: "28"
    },
    quote: "AI isn't just the future of supply chain—it's the present. Companies that embrace AI-driven logistics are seeing unprecedented efficiency gains."
  };

  const carouselArticles = config?.carouselArticles || [
    {
      id: 1,
      title: "Sustainability Metrics That Matter",
      description: "Key performance indicators for measuring supply chain sustainability and carbon footprint reduction.",
      author: "Michael Chen",
      readTime: "5 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      trending: true,
      stats: { views: "1.8K", likes: "234" }
    },
    {
      id: 2,
      title: "Warehouse Automation Trends",
      description: "The latest innovations in warehouse robotics and automation technology.",
      author: "Emily Rodriguez",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      trending: true,
      stats: { views: "2.1K", likes: "456" }
    },
    {
      id: 3,
      title: "Supply Chain Risk Management",
      description: "Strategies for building resilient supply chains in an uncertain world.",
      author: "David Kim",
      readTime: "7 min read",
      category: "Risk Management",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      trending: false,
      stats: { views: "1.2K", likes: "189" }
    },
    {
      id: 4,
      title: "Procurement Best Practices",
      description: "How leading companies are transforming their procurement processes.",
      author: "Lisa Wong",
      readTime: "4 min read",
      category: "Procurement",
      image: "https://images.unsplash.com/photo-1556742049-0cfed2f13f2b?w=600&h=400&fit=crop",
      trending: false,
      stats: { views: "956", likes: "123" }
    }
  ];

  const additionalArticles = config?.additionalArticles || [
    {
      id: 5,
      title: "Cross-border Logistics Challenges",
      description: "Navigating international trade regulations and customs compliance.",
      author: "James Wilson",
      readTime: "6 min read",
      category: "Logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Inventory Optimization Strategies",
      description: "Balancing stock levels with demand variability using AI.",
      author: "Anna Martinez",
      readTime: "5 min read",
      category: "Inventory",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Supplier Relationship Management",
      description: "Building stronger partnerships for supply chain resilience.",
      author: "Robert Taylor",
      readTime: "4 min read",
      category: "Procurement",
      image: "https://images.unsplash.com/photo-1556741533-6e6a3bd4b0a2?w=600&h=300&fit=crop"
    }
  ];

  const upcomingTopics = config?.upcomingTopics || [
    "Blockchain in Supply Chain",
    "Circular Economy Models",
    "Supply Chain Talent Development",
    "Cross-border Logistics",
    "Inventory Optimization Strategies",
    "Last-Mile Delivery Innovation"
  ];

  const expertInsights = config?.expertInsights || [
    {
      name: "Dr. Maria Garcia",
      role: "Supply Chain Professor, MIT",
      quote: "The next decade will see AI become as fundamental to supply chains as electricity is to manufacturing.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop"
    },
    {
      name: "James Chen",
      role: "CEO, Logistics Tech Inc.",
      quote: "Companies that fail to digitize their supply chains will be left behind. The ROI is clear and compelling.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
    }
  ];

  const stats = config?.stats || [
    { value: "25,000+", label: "Subscribers", icon: "users", trend: "+15%", trendUp: true },
    { value: "50+", label: "Issues Published", icon: "newspaper", trend: "Weekly", trendUp: true },
    { value: "94%", label: "Open Rate", icon: "eye", trend: "+2%", trendUp: true },
    { value: "4.9/5", label: "Reader Rating", icon: "star", trend: "4.9", trendUp: true }
  ];

  const tabs = [
    { id: 'featured', label: 'Featured', icon: 'star' },
    { id: 'trending', label: 'Trending', icon: 'fire' },
    { id: 'all', label: 'All Articles', icon: 'newspaper' }
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons and Heroicons 2 sets
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      newspaper: <HiOutlineNewspaper className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      arrow: <HiOutlineArrowRight className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      star: <HiOutlineStar className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      chip: <HiOutlineChip className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      tag: <HiOutlineTag className={className} />,
      mail: <HiOutlineMail className={className} />,
      heart: <HiOutlineHeart className={className} />,
      thumbsup: <HiOutlineThumbUp className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      share: <HiOutlineShare className={className} />,
      download: <HiOutlineDownload className={className} />,
      play: <HiOutlinePlay className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      fire: <HiOutlineFire className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      bulb: <HiOutlineLightBulb className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />
    };
    return icons[iconName] || <HiOutlineNewspaper className={className} />;
  };

  /**
   * Handle modal subscription submission
   */
  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setModalSubmitted(true);
      setTimeout(() => {
        setShowNewsletterModal(false);
        setModalSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  /**
   * Open video modal
   */
  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideoModal(true);
  };

  /**
   * Close video modal
   */
  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideo(null);
  };

  /**
   * Get filtered articles based on active tab
   */
  const getFilteredArticles = () => {
    if (activeTab === 'featured') {
      return [featuredContent];
    } else if (activeTab === 'trending') {
      return carouselArticles.filter(article => article.trending);
    }
    return [...carouselArticles, ...additionalArticles];
  };

  const filteredArticles = getFilteredArticles();

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Content Preview Hub"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-preview" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-preview)" />
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
            <span className="text-sm font-medium">{config?.badge || "Coming This Week"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Preview Our"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Latest Issue"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              "Get a sneak peek of what's coming in this week's newsletter. Subscribe to receive the full issue delivered to your inbox."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, "w-4 h-4 text-blue-600 dark:text-blue-400")}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  {stat.trend && (
                    <div className={`text-xs ${stat.trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
                      {stat.trend}
                    </div>
                  )}
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
            </button>
          ))}
        </div>

        {/* ==================== FEATURED ARTICLE - HERO LAYOUT ==================== */}
        {activeTab === 'featured' && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        Featured Article
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {featuredContent.category}
                      </span>
                      {featuredContent.videoUrl && (
                        <button
                          onClick={() => openVideoModal(featuredContent.videoUrl)}
                          className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                          aria-label="Watch video preview"
                        >
                          <HiOutlinePlay className="w-4 h-4" />
                          Watch Preview
                        </button>
                      )}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredContent.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {featuredContent.description}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <img
                          src={featuredContent.authorAvatar}
                          alt={featuredContent.author}
                          className="w-10 h-10 rounded-full object-cover"
                          loading="lazy"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">{featuredContent.author}</p>
                          <p className="text-xs text-gray-500">{featuredContent.authorRole}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <HiOutlineClock className="w-4 h-4" />
                        <span>{featuredContent.readTime}</span>
                      </div>
                    </div>

                    {/* Quote Block */}
                    <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 mb-6 border border-gray-200 dark:border-gray-700">
                      <p className="text-sm italic text-gray-700 dark:text-gray-300">
                        "{featuredContent.quote}"
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">What you'll learn:</p>
                      <ul className="space-y-2">
                        {featuredContent.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setShowNewsletterModal(true)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        aria-label="Subscribe to read full issue"
                      >
                        Subscribe to Read Full Issue
                        <HiOutlineArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600"
                        aria-label="Save for later"
                      >
                        <HiOutlineBookmark className="w-4 h-4" />
                        Save for Later
                      </button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                    <img
                      src={featuredContent.image}
                      alt={featuredContent.title}
                      className="relative rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs flex items-center gap-1">
                        <HiOutlineEye className="w-3 h-3" />
                        {featuredContent.stats.views}
                      </div>
                      <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs flex items-center gap-1">
                        <HiOutlineHeart className="w-3 h-3" />
                        {featuredContent.stats.likes}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ARTICLES GRID ==================== */}
        {(activeTab === 'trending' || activeTab === 'all') && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && {}}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  {article.trending && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                        <HiOutlineFire className="w-3 h-3" />
                        Trending
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <HiOutlineClock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <div className="flex items-center gap-1">
                      <HiOutlineEye className="w-3 h-3" />
                      <span>{article.stats?.views || '1.2K'} views</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-gray-500">{article.author}</span>
                    <button className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline flex items-center gap-1" aria-label="Read more">
                      Read More
                      <HiOutlineArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== EXPERT INSIGHTS SECTION ==================== */}
        <div className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <HiOutlineLightBulb className="w-6 h-6 text-amber-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Expert Insights</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {expertInsights.map((expert, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-gray-600 dark:text-gray-400 italic text-sm">"{expert.quote}"</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mt-2">{expert.name}</p>
                  <p className="text-xs text-gray-500">{expert.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== UPCOMING TOPICS PREVIEW ==================== */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <HiOutlineCalendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Coming Up in Future Issues</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {upcomingTopics.map((topic, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* ==================== SUBSCRIBE CTA ==================== */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss an Issue</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights delivered straight to your inbox every week.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setShowNewsletterModal(true)}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Subscribe to newsletter"
            >
              Subscribe Now
              <HiOutlineArrowRight className="w-4 h-4" />
            </button>
            <button
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Download sample issue"
            >
              <HiOutlineDownload className="w-4 h-4" />
              Download Sample Issue
            </button>
          </div>
        </div>

        {/* ==================== SUBSCRIBE MODAL ==================== */}
        {showNewsletterModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setShowNewsletterModal(false)}
            role="dialog"
            aria-label="Subscribe to newsletter"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Subscribe to Newsletter</h3>
                  <button
                    onClick={() => setShowNewsletterModal(false)}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {modalSubmitted ? (
                  <div className="text-center py-6 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thanks for Subscribing!</h3>
                    <p className="text-gray-600 dark:text-gray-400">Check your inbox to confirm your subscription.</p>
                  </div>
                ) : (
                  <form onSubmit={handleModalSubmit}>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Get the latest insights delivered straight to your inbox.
                    </p>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                      required
                      aria-label="Email address"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                      aria-label="Subscribe"
                    >
                      Subscribe
                    </button>
                    <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

export default ContentPreviewSection3;