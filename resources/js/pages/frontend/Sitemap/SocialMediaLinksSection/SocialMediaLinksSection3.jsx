// page/frontend/Sitemap/SocialMediaLinksSection/SocialMediaLinksSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaMedium,
  FaDev,
  FaStackOverflow,
  FaReddit,
  FaDiscord,
  FaSlack,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
  FaPinterest,
  FaTwitch,
} from 'react-icons/fa';
import {
  HiOutlineShare,
  HiOutlineExternalLink,
  HiOutlineSearch,
  HiOutlineCalendar,
  HiOutlinePrinter,
  HiOutlineX,
  HiOutlineGlobe,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineFilter,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlay,
} from 'react-icons/hi';
import { SiHashnode, SiProducthunt, SiIndiehackers } from 'react-icons/si';

const SocialMediaLinksSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSocialModal, setShowSocialModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const videoRef = useRef(null);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Carousel navigation for featured social content
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (config?.featuredContent?.length || featuredContent.length));
  }, [config?.featuredContent?.length, featuredContent.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (config?.featuredContent?.length || featuredContent.length)) % (config?.featuredContent?.length || featuredContent.length));
  }, [config?.featuredContent?.length, featuredContent.length]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && (config?.featuredContent?.length || featuredContent.length) > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, config?.featuredContent?.length, featuredContent.length, nextSlide]);

  // Featured social content for carousel
  const featuredContent = config?.featuredContent || [
    {
      title: "Join Our Discord Community",
      description: "Connect with developers and supply chain professionals in real-time.",
      icon: "discord",
      color: "from-indigo-500 to-indigo-600",
      path: "https://discord.gg/supplychainpro",
      videoUrl: "/videos/discord-community.mp4"
    },
    {
      title: "Follow on Twitter",
      description: "Get real-time updates and industry news.",
      icon: "twitter",
      color: "from-blue-500 to-blue-600",
      path: "https://twitter.com/supplychainpro",
      videoUrl: "/videos/twitter-updates.mp4"
    },
    {
      title: "Subscribe on YouTube",
      description: "Watch tutorials, webinars, and product demos.",
      icon: "youtube",
      color: "from-red-500 to-red-600",
      path: "https://youtube.com/@supplychainpro",
      videoUrl: "/videos/youtube-channel.mp4"
    },
    {
      title: "Connect on LinkedIn",
      description: "Follow our company page for professional insights.",
      icon: "linkedin",
      color: "from-blue-700 to-blue-800",
      path: "https://linkedin.com/company/supplychainpro",
      videoUrl: "/videos/linkedin-company.mp4"
    },
  ];

  // Tabs configuration
  const tabs = [
    { id: 'all', label: 'All Platforms', icon: 'globe' },
    { id: 'popular', label: 'Most Active', icon: 'star' },
    { id: 'recent', label: 'Recent Posts', icon: 'trending-up' },
  ];

  // Category filters
  const categoryFilters = [
    { id: 'all', label: 'All Categories' },
    { id: 'main', label: 'Main Social Platforms' },
    { id: 'developer', label: 'Developer Communities' },
    { id: 'community', label: 'Community & Chat' },
    { id: 'messaging', label: 'Messaging Apps' },
    { id: 'content', label: 'Content Platforms' },
  ];

  // Popular/Active platforms (based on engagement)
  const activePlatforms = config?.activePlatforms || [
    { name: 'Twitter', path: 'https://twitter.com/supplychainpro', username: '@supplychainpro', engagement: 'High', posts: '125/month', icon: 'twitter', color: '#1DA1F2', videoUrl: "/videos/twitter-activity.mp4" },
    { name: 'LinkedIn', path: 'https://linkedin.com/company/supplychainpro', username: 'SupplyChainPro', engagement: 'High', posts: '45/month', icon: 'linkedin', color: '#0077B5', videoUrl: "/videos/linkedin-activity.mp4" },
    { name: 'GitHub', path: 'https://github.com/supplychainpro', username: 'supplychainpro', engagement: 'Medium', commits: '85/month', icon: 'github', color: '#181717' },
    { name: 'YouTube', path: 'https://youtube.com/@supplychainpro', username: '@supplychainpro', engagement: 'High', videos: '8/month', icon: 'youtube', color: '#FF0000', videoUrl: "/videos/youtube-activity.mp4" },
    { name: 'Discord', path: 'https://discord.gg/supplychainpro', username: 'SupplyChainPro', engagement: 'High', messages: '2.5K/day', icon: 'discord', color: '#5865F2', videoUrl: "/videos/discord-activity.mp4" },
    { name: 'Stack Overflow', path: 'https://stackoverflow.com/companies/supplychainpro', username: 'supplychainpro', engagement: 'Medium', answers: '45/month', icon: 'stackoverflow', color: '#F58025' },
  ];

  // Recent posts from social media
  const recentPosts = config?.recentPosts || [
    { platform: 'Twitter', content: 'Introducing SupplyChainPro v3.0 with advanced AI features!', date: 'April 8, 2026', likes: '1.2K', retweets: '345', icon: 'twitter', color: '#1DA1F2', videoUrl: "/videos/twitter-post.mp4" },
    { platform: 'LinkedIn', content: 'How we achieved SOC 2 Type II certification - read our latest blog post', date: 'April 5, 2026', likes: '856', comments: '42', icon: 'linkedin', color: '#0077B5' },
    { platform: 'GitHub', content: 'Released version 3.0 of our Android SDK', date: 'April 3, 2026', stars: '67', forks: '23', icon: 'github', color: '#181717' },
    { platform: 'YouTube', content: 'New tutorial: Getting Started with SupplyChainPro API', date: 'April 1, 2026', views: '3.2K', likes: '234', icon: 'youtube', color: '#FF0000', videoUrl: "/videos/youtube-tutorial.mp4" },
    { platform: 'Discord', content: 'Community AMA with our CTO - Thursday at 2PM EST', date: 'March 30, 2026', attendees: '156', icon: 'discord', color: '#5865F2' },
    { platform: 'Dev.to', content: 'Building a Scalable Supply Chain API - Best Practices', date: 'March 28, 2026', reactions: '89', comments: '23', icon: 'dev', color: '#0A0A0A' },
  ];

  // Social media categories and links
  const socialCategories = useMemo(() => config?.socialCategories || [
    {
      id: 'main',
      name: 'Main Social Platforms',
      icon: 'globe',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Our primary social media presence',
      linkCount: 6,
      videoUrl: "/videos/social-overview.mp4",
      links: [
        { name: 'Twitter', path: 'https://twitter.com/supplychainpro', username: '@supplychainpro', followers: '25.5K', icon: 'twitter', color: '#1DA1F2', active: true, videoUrl: "/videos/twitter.mp4" },
        { name: 'LinkedIn', path: 'https://linkedin.com/company/supplychainpro', username: 'SupplyChainPro', followers: '42.1K', icon: 'linkedin', color: '#0077B5', active: true, videoUrl: "/videos/linkedin.mp4" },
        { name: 'GitHub', path: 'https://github.com/supplychainpro', username: 'supplychainpro', followers: '3.2K', icon: 'github', color: '#181717', active: true },
        { name: 'YouTube', path: 'https://youtube.com/@supplychainpro', username: '@supplychainpro', subscribers: '12.8K', icon: 'youtube', color: '#FF0000', active: true, videoUrl: "/videos/youtube.mp4" },
        { name: 'Instagram', path: 'https://instagram.com/supplychainpro', username: '@supplychainpro', followers: '8.5K', icon: 'instagram', color: '#E4405F' },
        { name: 'Facebook', path: 'https://facebook.com/supplychainpro', username: '@supplychainpro', followers: '15.2K', icon: 'facebook', color: '#1877F2' },
      ],
    },
    {
      id: 'developer',
      name: 'Developer Communities',
      icon: 'code',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      description: 'Where our developers engage with the community',
      linkCount: 6,
      videoUrl: "/videos/dev-communities.mp4",
      links: [
        { name: 'Stack Overflow', path: 'https://stackoverflow.com/companies/supplychainpro', username: 'supplychainpro', reputation: '2.5K', icon: 'stackoverflow', color: '#F58025', active: true },
        { name: 'Dev.to', path: 'https://dev.to/supplychainpro', username: '@supplychainpro', followers: '1.8K', icon: 'dev', color: '#0A0A0A', active: true, videoUrl: "/videos/devto.mp4" },
        { name: 'Hashnode', path: 'https://hashnode.com/@supplychainpro', username: '@supplychainpro', followers: '950', icon: 'hashnode', color: '#2962FF' },
        { name: 'Medium', path: 'https://medium.com/@supplychainpro', username: '@supplychainpro', followers: '3.2K', icon: 'medium', color: '#000000' },
        { name: 'Product Hunt', path: 'https://www.producthunt.com/@supplychainpro', username: '@supplychainpro', followers: '1.2K', icon: 'producthunt', color: '#DA552F' },
        { name: 'Indie Hackers', path: 'https://www.indiehackers.com/supplychainpro', username: 'supplychainpro', followers: '780', icon: 'indiehackers', color: '#4A4A4A' },
      ],
    },
    {
      id: 'community',
      name: 'Community & Chat',
      icon: 'chat',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      description: 'Join our community discussions',
      linkCount: 4,
      videoUrl: "/videos/community-chat.mp4",
      links: [
        { name: 'Discord', path: 'https://discord.gg/supplychainpro', username: 'SupplyChainPro', members: '4.5K', icon: 'discord', color: '#5865F2', active: true, videoUrl: "/videos/discord.mp4" },
        { name: 'Slack', path: 'https://slack.supplychainpro.com', username: 'supplychainpro.slack.com', members: '2.8K', icon: 'slack', color: '#4A154B' },
        { name: 'Reddit', path: 'https://reddit.com/r/supplychainpro', username: 'r/supplychainpro', members: '3.1K', icon: 'reddit', color: '#FF4500', active: true },
        { name: 'Telegram', path: 'https://t.me/supplychainpro', username: '@supplychainpro', members: '1.5K', icon: 'telegram', color: '#26A5E4' },
      ],
    },
    {
      id: 'messaging',
      name: 'Messaging Apps',
      icon: 'message',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      description: 'Get updates via messaging apps',
      linkCount: 2,
      links: [
        { name: 'WhatsApp', path: 'https://whatsapp.com/channel/supplychainpro', username: 'SupplyChainPro', subscribers: '2.1K', icon: 'whatsapp', color: '#25D366' },
        { name: 'Telegram Channel', path: 'https://t.me/supplychainpro_news', username: '@supplychainpro_news', subscribers: '1.2K', icon: 'telegram', color: '#26A5E4' },
      ],
    },
    {
      id: 'content',
      name: 'Content Platforms',
      icon: 'video',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      description: 'Video and streaming content',
      linkCount: 3,
      links: [
        { name: 'Twitch', path: 'https://twitch.tv/supplychainpro', username: 'supplychainpro', followers: '1.2K', icon: 'twitch', color: '#9146FF' },
        { name: 'TikTok', path: 'https://tiktok.com/@supplychainpro', username: '@supplychainpro', followers: '5.2K', icon: 'tiktok', color: '#000000' },
        { name: 'Pinterest', path: 'https://pinterest.com/supplychainpro', username: 'supplychainpro', followers: '890', icon: 'pinterest', color: '#BD081C' },
      ],
    },
  ], [config?.socialCategories]);

  // Get all links flattened for filtering
  const allLinks = useMemo(() => {
    const links = [];
    socialCategories.forEach(category => {
      category.links.forEach(link => {
        links.push({
          ...link,
          categoryName: category.name,
          categoryId: category.id,
        });
      });
    });
    return links;
  }, [socialCategories]);

  // Filter links based on search and category
  const filteredLinks = useMemo(() => {
    let filtered = allLinks;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(link =>
        link.name.toLowerCase().includes(query) ||
        link.username.toLowerCase().includes(query) ||
        link.categoryName.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(link => link.categoryId === selectedCategory);
    }

    return filtered;
  }, [allLinks, searchQuery, selectedCategory]);

  // Filter categories for the grid view
  const filteredCategories = useMemo(() => {
    if (!searchQuery && selectedCategory === 'all') return socialCategories;

    return socialCategories
      .map(category => ({
        ...category,
        links: category.links.filter(link => {
          if (searchQuery && !link.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !link.username.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
          }
          return true;
        }),
      }))
      .filter(category => category.links.length > 0);
  }, [socialCategories, searchQuery, selectedCategory]);

  // Get total link count
  const totalLinks = socialCategories.reduce((acc, cat) => acc + cat.links.length, 0);

  // Helper function to render social media icons
  const getSocialIcon = (iconName, className = "w-6 h-6") => {
    const icons = {
      twitter: <FaTwitter className={className} />,
      linkedin: <FaLinkedin className={className} />,
      github: <FaGithub className={className} />,
      youtube: <FaYoutube className={className} />,
      instagram: <FaInstagram className={className} />,
      facebook: <FaFacebook className={className} />,
      medium: <FaMedium className={className} />,
      dev: <FaDev className={className} />,
      stackoverflow: <FaStackOverflow className={className} />,
      reddit: <FaReddit className={className} />,
      discord: <FaDiscord className={className} />,
      slack: <FaSlack className={className} />,
      whatsapp: <FaWhatsapp className={className} />,
      telegram: <FaTelegram className={className} />,
      tiktok: <FaTiktok className={className} />,
      pinterest: <FaPinterest className={className} />,
      twitch: <FaTwitch className={className} />,
      hashnode: <SiHashnode className={className} />,
      producthunt: <SiProducthunt className={className} />,
      indiehackers: <SiIndiehackers className={className} />,
    };
    return icons[iconName] || <FaTwitter className={className} />;
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Social Media Links Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-social" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-social)" />
        </svg>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineShare className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Social Media"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Connect With"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Us"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Follow us on social media to stay updated with the latest news, product updates, and community discussions."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineGlobe className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Platforms:</strong> {totalLinks}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineShare className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Categories:</strong> {socialCategories.length}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineCalendar className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Last Updated:</strong> {lastUpdated}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-sm font-medium"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* Featured Social Content Carousel */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              ref={carouselRef}
            >
              {featuredContent.map((content, idx) => (
                <div key={idx} className="w-full shrink-0">
                  <div className={`relative h-80 rounded-3xl overflow-hidden bg-linear-to-r ${content.color}`}>
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                        {getSocialIcon(content.icon, "w-10 h-10 text-white")}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
                      <p className="text-white/90 text-lg mb-6 max-w-2xl">{content.description}</p>
                      <div className="flex gap-3">
                        <a
                          href={content.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                        >
                          Join Now
                          <HiOutlineExternalLink className="w-4 h-4" />
                        </a>
                        {content.videoUrl && (
                          <button
                            onClick={() => { setCurrentVideo(content.videoUrl); setShowVideoModal(true); }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/30 transition-colors"
                          >
                            <HiOutlinePlay className="w-5 h-5" />
                            Watch Video
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {featuredContent.length > 1 && (
              <>
                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                  <HiOutlineChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                  <HiOutlineChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {featuredContent.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50'}`} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
            >
              {tab.icon === 'globe' ? <HiOutlineGlobe className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  <HiOutlineTrendingUp className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search social platforms..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineFilter className="w-5 h-5 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
            >
              {categoryFilters.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* All Platforms Tab */}
        {activeTab === 'all' && (
          <>
            {/* View Mode Toggle */}
            <div className="flex justify-end mb-6">
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                  aria-label="Grid view"
                >
                  <HiOutlineViewGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                  aria-label="List view"
                >
                  <HiOutlineViewList className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Platforms Display - Grid or List */}
            {viewMode === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`${category.bgColor} rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl`}
                  >
                    {/* Category Header */}
                    <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${category.color} flex items-center justify-center`}>
                          {category.icon === 'globe' ? <HiOutlineGlobe className="w-6 h-6 text-white" /> :
                            category.icon === 'code' ? <FaGithub className="w-6 h-6 text-white" /> :
                              category.icon === 'chat' ? <FaDiscord className="w-6 h-6 text-white" /> :
                                category.icon === 'message' ? <FaWhatsapp className="w-6 h-6 text-white" /> :
                                  <FaYoutube className="w-6 h-6 text-white" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                            {category.name}
                          </h3>
                          <p className="text-xs text-gray-500">{category.links.length} platforms</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {category.description}
                      </p>
                      {category.videoUrl && (
                        <button
                          onClick={() => { setCurrentVideo(category.videoUrl); setShowVideoModal(true); }}
                          className="mt-2 text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1"
                        >
                          <HiOutlinePlay className="w-3 h-3" />
                          Watch Overview
                        </button>
                      )}
                    </div>

                    {/* Category Links */}
                    <div className="p-5">
                      <ul className="space-y-3">
                        {category.links.slice(0, 3).map((link, idx) => (
                          <li key={idx}>
                            <a
                              href={link.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center justify-between p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                                  style={{ backgroundColor: link.color, color: 'white' }}
                                >
                                  {getSocialIcon(link.icon, "w-5 h-5")}
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                                    {link.name}
                                  </p>
                                  <p className="text-xs text-gray-500">{link.username}</p>
                                  {link.followers && (
                                    <p className="text-xs text-gray-400 mt-0.5">{link.followers} followers</p>
                                  )}
                                  {link.active && (
                                    <span className="inline-block text-xs px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 mt-1">
                                      Active
                                    </span>
                                  )}
                                  {link.videoUrl && (
                                    <span className="text-blue-500 text-xs flex items-center gap-1 mt-1">
                                      <HiOutlinePlay className="w-3 h-3" />
                                      Video
                                    </span>
                                  )}
                                </div>
                              </div>
                              <HiOutlineExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors shrink-0" />
                            </a>
                          </li>
                        ))}
                      </ul>
                      {category.links.length > 3 && (
                        <button
                          onClick={() => {
                            setSelectedPlatform({ ...category, allLinks: category.links, isCategoryView: true });
                            setShowSocialModal(true);
                          }}
                          className="mt-3 w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium py-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                        >
                          View all {category.links.length} platforms →
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-3">
                {filteredLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: link.color, color: 'white' }}
                        >
                          {getSocialIcon(link.icon, "w-6 h-6")}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-gray-900 dark:text-white">{link.name}</h3>
                            <span className="text-xs text-gray-400">{link.categoryName}</span>
                            {link.active && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                                Active
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{link.username}</p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                            {link.followers && <span>👥 {link.followers} followers</span>}
                            {link.subscribers && <span>📺 {link.subscribers} subscribers</span>}
                            {link.members && <span>👥 {link.members} members</span>}
                          </div>
                          {link.videoUrl && (
                            <button
                              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentVideo(link.videoUrl); setShowVideoModal(true); }}
                              className="text-blue-500 text-xs flex items-center gap-1 mt-1 hover:underline"
                            >
                              <HiOutlinePlay className="w-3 h-3" />
                              Watch Video
                            </button>
                          )}
                        </div>
                      </div>
                      <HiOutlineExternalLink className="w-5 h-5 text-gray-400" />
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredCategories.length === 0 && filteredLinks.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
                <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-gray-500">No social platforms match your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-3 text-blue-600 hover:underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}

        {/* Most Active Tab */}
        {activeTab === 'popular' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineStar className="w-5 h-5 text-yellow-500" />
              Most Active Platforms
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Platform</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Username</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Activity</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Engagement</th>
                  </tr>
                </thead>
                <tbody>
                  {activePlatforms.map((platform, idx) => (
                    <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: platform.color, color: 'white' }}
                          >
                            {getSocialIcon(platform.icon, "w-4 h-4")}
                          </div>
                          <a href={platform.path} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors flex items-center gap-1">
                            {platform.name}
                            {platform.videoUrl && <HiOutlinePlay className="w-3 h-3 text-blue-500" />}
                          </a>
                        </div>
                      </td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">{platform.username}</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">
                        {platform.posts || platform.commits || platform.videos || platform.messages || platform.answers}
                      </td>
                      <td className="p-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${platform.engagement === 'High' ? 'bg-green-100 text-green-700' :
                          platform.engagement === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                          {platform.engagement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Recent Posts Tab */}
        {activeTab === 'recent' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineTrendingUp className="w-5 h-5 text-green-500" />
              Recent Social Posts
            </h2>
            <div className="space-y-3">
              {recentPosts.map((post, idx) => (
                <div key={idx} className="block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: post.color, color: 'white' }}
                    >
                      {getSocialIcon(post.icon, "w-5 h-5")}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900 dark:text-white">{post.platform}</p>
                          {post.videoUrl && <HiOutlinePlay className="w-3 h-3 text-blue-500" />}
                        </div>
                        <p className="text-xs text-gray-400">{post.date}</p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{post.content}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                        {post.likes && <span>❤️ {post.likes} likes</span>}
                        {post.retweets && <span>🔄 {post.retweets} retweets</span>}
                        {post.comments && <span>💬 {post.comments} comments</span>}
                        {post.views && <span>👁️ {post.views} views</span>}
                        {post.stars && <span>⭐ {post.stars} stars</span>}
                        {post.attendees && <span>👥 {post.attendees} attendees</span>}
                      </div>
                      {post.videoUrl && (
                        <button
                          onClick={() => { setCurrentVideo(post.videoUrl); setShowVideoModal(true); }}
                          className="mt-2 text-blue-500 text-xs flex items-center gap-1 hover:underline"
                        >
                          <HiOutlinePlay className="w-3 h-3" />
                          Watch Video
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Follow us for the latest updates, tips, and community news!</p>
        </div>

        {/* Social Platform Modal */}
        {showSocialModal && selectedPlatform && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSocialModal(false)}>
            <div className="relative max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className={`bg-linear-to-r ${selectedPlatform.color} p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      {selectedPlatform.icon === 'globe' ? <HiOutlineGlobe className="w-5 h-5 text-white" /> :
                        selectedPlatform.icon === 'code' ? <FaGithub className="w-5 h-5 text-white" /> :
                          selectedPlatform.icon === 'chat' ? <FaDiscord className="w-5 h-5 text-white" /> :
                            <FaYoutube className="w-5 h-5 text-white" />}
                    </div>
                    <h3 className="text-white font-bold text-lg">{selectedPlatform.name}</h3>
                  </div>
                  <button onClick={() => setShowSocialModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedPlatform.description}</p>
                <ul className="space-y-3">
                  {selectedPlatform.allLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setShowSocialModal(false)}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: link.color, color: 'white' }}
                          >
                            {getSocialIcon(link.icon, "w-5 h-5")}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{link.name}</p>
                            <p className="text-sm text-gray-500">{link.username}</p>
                          </div>
                        </div>
                        <HiOutlineExternalLink className="w-4 h-4 text-gray-400" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {showVideoModal && currentVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowVideoModal(false)}>
            <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
                <HiOutlineX className="w-6 h-6" />
              </button>
              <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default SocialMediaLinksSection3;