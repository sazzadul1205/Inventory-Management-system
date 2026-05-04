// page/frontend/Newsletter/ContentPreviewSection/ContentPreviewSection1.jsx

/**
 * Content Preview Section I - Sneak Peek & Engagement Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Newsletter Metrics (Subscribers, Issues, Open Rate, Rating)
 * - Featured Article Card with Highlights and Author Information
 * - Additional Articles Grid with Hover Effects
 * - Upcoming Topics Preview with Pill Badges
 * - Subscribe Modal with Email Collection
 * - Download Sample Issue CTA
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Grid Layout for Additional Articles
 * - Interactive Featured Content Section with Call-to-Action
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState } from 'react';

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
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const ContentPreviewSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [email, setEmail] = useState('');
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  // ==================== MEMOIZED DATA ====================

  const featuredContent = config?.featuredContent || {
    title: "The Future of Supply Chain: AI-Driven Logistics",
    description: "Discover how artificial intelligence is transforming supply chain operations, from predictive analytics to autonomous delivery systems. This week's featured article explores real-world applications and ROI metrics.",
    author: "Sarah Johnson",
    authorRole: "Senior Supply Chain Analyst",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    highlights: [
      "How AI predicts demand with 95% accuracy",
      "Case study: 40% reduction in logistics costs",
      "The rise of autonomous delivery vehicles",
      "Implementation roadmap for mid-size companies"
    ],
    stats: {
      views: "2.4K",
      shares: "342",
      saves: "156"
    }
  };

  const additionalArticles = config?.additionalArticles || [
    {
      id: 1,
      title: "Sustainability Metrics That Matter",
      description: "Key performance indicators for measuring supply chain sustainability and carbon footprint reduction.",
      author: "Michael Chen",
      readTime: "5 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Warehouse Automation Trends",
      description: "The latest innovations in warehouse robotics and automation technology.",
      author: "Emily Rodriguez",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Supply Chain Risk Management",
      description: "Strategies for building resilient supply chains in an uncertain world.",
      author: "David Kim",
      readTime: "7 min read",
      category: "Risk Management",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Procurement Best Practices",
      description: "How leading companies are transforming their procurement processes.",
      author: "Lisa Wong",
      readTime: "4 min read",
      category: "Procurement",
      image: "https://images.unsplash.com/photo-1556742049-0cfed2f13f2b?w=400&h=250&fit=crop",
      featured: false
    }
  ];

  const upcomingTopics = config?.upcomingTopics || [
    "Blockchain in Supply Chain",
    "Circular Economy Models",
    "Supply Chain Talent Development",
    "Cross-border Logistics",
    "Inventory Optimization Strategies"
  ];

  const stats = config?.stats || [
    { value: "15,000+", label: "Subscribers", icon: "users" },
    { value: "45+", label: "Issues Published", icon: "newspaper" },
    { value: "92%", label: "Open Rate", icon: "eye" },
    { value: "4.9/5", label: "Reader Rating", icon: "star" }
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
      x: <HiOutlineX className={className} />
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

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Content Preview"
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
            <HiOutlineSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Coming This Week"}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Preview Our"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Latest Issue"}
            </span>{' '}
            {config?.title?.suffix || ""}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "Get a sneak peek of what's coming in this week's newsletter. Subscribe to receive the full issue delivered to your inbox."}
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
                {getIcon(stat.icon, "w-5 h-5 text-blue-600 dark:text-blue-400")}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== FEATURED CONTENT CARD ==================== */}
        <div className="mb-16">
          <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />

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
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredContent.title}
                  </h3>

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
                      {featuredContent.stats.shares}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== ADDITIONAL ARTICLES GRID ==================== */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Also in This Issue</h3>
            <button
              className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
              aria-label="View all articles"
            >
              View All Articles →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalArticles.map((article) => (
              <div
                key={article.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {article.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                        <HiOutlineStar className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{article.category}</span>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <div className="flex items-center gap-1">
                      <HiOutlineClock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-gray-500">{article.author}</span>
                    <button
                      className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                      aria-label="Read more"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== UPCOMING TOPICS PREVIEW ==================== */}
        <div className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <HiOutlineCalendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Coming Up in Future Issues</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {upcomingTopics.map((topic, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-600"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* ==================== NEWSLETTER SAMPLE PREVIEW ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
              <HiOutlineNewspaper className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              See What You're Missing
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get the full newsletter delivered to your inbox every Tuesday morning.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowNewsletterModal(true)}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Subscribe to newsletter"
            >
              <HiOutlineMail className="w-5 h-5" />
              Subscribe Now
              <HiOutlineArrowRight className="w-4 h-4" />
            </button>
            <button
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Download sample issue"
            >
              <HiOutlineDownload className="w-5 h-5" />
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

export default ContentPreviewSection1;