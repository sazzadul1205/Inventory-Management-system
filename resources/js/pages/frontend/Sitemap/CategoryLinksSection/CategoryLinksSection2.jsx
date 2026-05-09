// page/frontend/Sitemap/CategoryLinksSection/CategoryLinksSection2.jsx

/**
 * Category Links Section II - Interactive Navigation Hub
 *
 * Unique Design Elements:
 * - Multi-Tab Interface (Categories, Popular Links, Recent Updates)
 * - Expandable Category Cards with Link Previews
 * - Grid/List View Toggle for Categories Display
 * - Popular Links Table with Click Counts
 * - Recently Updated Timeline with Author Attribution
 * - Search Functionality with Live Filtering
 * - Modal View for Complete Category Details
 * - Stats Dashboard with Categories and Links Count
 * - Print Functionality for Documentation
 * - Animated Background Grid Pattern
 * - Fully Responsive Layout with Dark Mode Support
 *
 * All icons from react-icons (hi, hi2, md)
 * Fully responsive with dark mode support
 */

import { useState, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, and Material Design
import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineUser,
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineMail,
  HiOutlineGlobe,
  HiOutlineDatabase,
  HiOutlineChip,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineSearch,
  HiOutlineChevronRight,
  HiOutlineInformationCircle,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineDeviceMobile,
  HiOutlineDesktopComputer,
  HiOutlineCloud,
  HiOutlineLockClosed,
  HiOutlineFlag,
  HiOutlineBan,
  HiOutlineExclamation,
  HiOutlineDownload,
  HiOutlinePrinter,
  HiOutlineX,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineFolder,
  HiOutlineStar,
  HiOutlineTrendingUp,
} from 'react-icons/hi';
import {
  HiOutlineUserGroup,
  HiOutlineBuildingOffice,
  HiOutlineFingerPrint,
} from 'react-icons/hi2';
import { MdOutlineCookie as HiOutlineCookie } from "react-icons/md";

const CategoryLinksSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('categories');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // ==================== MEMOIZED DATA ====================
  // Tabs configuration
  const tabs = useMemo(() => config?.tabs || [
    { id: 'categories', label: 'All Categories', icon: 'folder' },
    { id: 'popular', label: 'Popular Links', icon: 'star' },
    { id: 'recent', label: 'Recent Updates', icon: 'trending-up' },
  ], [config?.tabs]);

  // Popular links
  const popularLinks = useMemo(() => config?.popularLinks || [
    { name: 'Pricing Plans', path: '/pricing', category: 'Product', clicks: '12.5K' },
    { name: 'Android App Download', path: '/mobile/android', category: 'Mobile', clicks: '8.2K' },
    { name: 'iOS App Download', path: '/mobile/ios', category: 'Mobile', clicks: '7.8K' },
    { name: 'API Documentation', path: '/api/docs', category: 'Product', clicks: '6.5K' },
    { name: 'Contact Support', path: '/support', category: 'Support', clicks: '5.9K' },
    { name: 'Features Overview', path: '/features', category: 'Product', clicks: '5.2K' },
    { name: 'Privacy Policy', path: '/legal/privacy', category: 'Legal', clicks: '4.1K' },
    { name: 'Terms of Service', path: '/legal/terms', category: 'Legal', clicks: '3.8K' },
    { name: 'Request Demo', path: '/demo', category: 'Product', clicks: '3.2K' },
    { name: 'Security Overview', path: '/security/overview', category: 'Security', clicks: '2.9K' },
  ], [config?.popularLinks]);

  // Recently updated links
  const recentlyUpdated = useMemo(() => config?.recentlyUpdated || [
    { name: 'GDPR Compliance', path: '/legal/gdpr', category: 'Legal', date: 'April 8, 2026', author: 'Legal Team' },
    { name: 'Security Policy', path: '/legal/security', category: 'Legal', date: 'April 5, 2026', author: 'Security Team' },
    { name: 'Data Processing Agreement', path: '/legal/dpa', category: 'Legal', date: 'April 1, 2026', author: 'Legal Team' },
    { name: 'Android App v3.0', path: '/mobile/android', category: 'Mobile', date: 'March 28, 2026', author: 'Mobile Team' },
    { name: 'iOS App v3.0', path: '/mobile/ios', category: 'Mobile', date: 'March 28, 2026', author: 'Mobile Team' },
    { name: 'Cookie Policy', path: '/legal/cookies', category: 'Legal', date: 'March 25, 2026', author: 'Legal Team' },
    { name: 'Acceptable Use Policy', path: '/legal/aup', category: 'Legal', date: 'March 20, 2026', author: 'Legal Team' },
    { name: 'Bug Bounty Program', path: '/security/bug-bounty', category: 'Security', date: 'March 15, 2026', author: 'Security Team' },
  ], [config?.recentlyUpdated]);

  // Category links data
  const categoryLinks = useMemo(() => config?.categoryLinks || [
    {
      id: 'home',
      name: 'Home & Overview',
      icon: 'home',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Main website pages and company information',
      linkCount: 6,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page', updated: 'April 8, 2026' },
        { name: 'About Us', path: '/about', description: 'Company information and mission', updated: 'March 15, 2026' },
        { name: 'Contact', path: '/contact', description: 'Contact information and support', updated: 'April 1, 2026' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities at SupplyChainPro', updated: 'March 20, 2026' },
        { name: 'Blog', path: '/blog', description: 'Latest news and updates', updated: 'April 7, 2026' },
        { name: 'Press', path: '/press', description: 'Press releases and media kit', updated: 'March 10, 2026' },
      ],
    },
    {
      id: 'product',
      name: 'Product',
      icon: 'briefcase',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      description: 'Product features, pricing, and documentation',
      linkCount: 7,
      links: [
        { name: 'Features', path: '/features', description: 'All product features', updated: 'April 5, 2026' },
        { name: 'Pricing', path: '/pricing', description: 'Subscription plans and pricing', updated: 'March 25, 2026' },
        { name: 'Demo', path: '/demo', description: 'Request a product demo', updated: 'April 2, 2026' },
        { name: 'Integrations', path: '/integrations', description: 'Third-party integrations', updated: 'March 28, 2026' },
        { name: 'API Documentation', path: '/api/docs', description: 'API reference and documentation', updated: 'April 6, 2026' },
        { name: 'Release Notes', path: '/release-notes', description: 'Version history and updates', updated: 'March 30, 2026' },
        { name: 'Roadmap', path: '/roadmap', description: 'Product development roadmap', updated: 'April 3, 2026' },
      ],
    },
    {
      id: 'mobile',
      name: 'Mobile Apps',
      icon: 'mobile',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      description: 'iOS and Android mobile applications',
      linkCount: 6,
      links: [
        { name: 'iOS App', path: '/mobile/ios', description: 'iPhone and iPad mobile application', updated: 'March 28, 2026' },
        { name: 'Android App', path: '/mobile/android', description: 'Android mobile application', updated: 'March 28, 2026' },
        { name: 'Mobile Features', path: '/mobile/features', description: 'Mobile app features overview', updated: 'March 15, 2026' },
        { name: 'App Store', path: '/mobile/app-store', description: 'Apple App Store listing', updated: 'March 28, 2026' },
        { name: 'Google Play', path: '/mobile/google-play', description: 'Google Play Store listing', updated: 'March 28, 2026' },
        { name: 'Mobile Security', path: '/mobile/security', description: 'Mobile app security practices', updated: 'April 1, 2026' },
      ],
    },
    {
      id: 'solutions',
      name: 'Solutions',
      icon: 'cloud',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      description: 'Industry-specific supply chain solutions',
      linkCount: 9,
      links: [
        { name: 'Supply Chain Management', path: '/solutions/supply-chain', description: 'End-to-end supply chain solutions', updated: 'March 20, 2026' },
        { name: 'Inventory Management', path: '/solutions/inventory', description: 'Real-time inventory tracking', updated: 'March 18, 2026' },
        { name: 'Warehouse Management', path: '/solutions/warehouse', description: 'Warehouse optimization', updated: 'March 22, 2026' },
        { name: 'Logistics & Shipping', path: '/solutions/logistics', description: 'Shipping and logistics management', updated: 'March 25, 2026' },
        { name: 'Procurement', path: '/solutions/procurement', description: 'Procurement automation', updated: 'March 19, 2026' },
        { name: 'Demand Forecasting', path: '/solutions/forecasting', description: 'AI-powered demand predictions', updated: 'March 30, 2026' },
        { name: 'Retail', path: '/solutions/retail', description: 'Solutions for retailers', updated: 'March 21, 2026' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', description: 'Solutions for manufacturers', updated: 'March 23, 2026' },
        { name: 'Healthcare', path: '/solutions/healthcare', description: 'Healthcare supply chain', updated: 'March 26, 2026' },
      ],
    },
    {
      id: 'industries',
      name: 'Industries',
      icon: 'building',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      description: 'Solutions by industry vertical',
      linkCount: 7,
      links: [
        { name: 'Retail & E-commerce', path: '/industries/retail', description: 'Retail supply chain solutions', updated: 'March 15, 2026' },
        { name: 'Manufacturing', path: '/industries/manufacturing', description: 'Manufacturing supply chain', updated: 'March 16, 2026' },
        { name: 'Healthcare', path: '/industries/healthcare', description: 'Healthcare logistics', updated: 'March 17, 2026' },
        { name: 'Pharmaceutical', path: '/industries/pharmaceutical', description: 'Pharma supply chain', updated: 'March 18, 2026' },
        { name: 'Automotive', path: '/industries/automotive', description: 'Auto parts logistics', updated: 'March 19, 2026' },
        { name: 'Food & Beverage', path: '/industries/food-beverage', description: 'Food supply chain', updated: 'March 20, 2026' },
        { name: 'Logistics & 3PL', path: '/industries/logistics', description: 'Third-party logistics', updated: 'March 21, 2026' },
      ],
    },
    {
      id: 'resources',
      name: 'Resources',
      icon: 'document',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      description: 'Documentation, guides, and learning materials',
      linkCount: 9,
      links: [
        { name: 'Documentation', path: '/docs', description: 'Product documentation', updated: 'April 5, 2026' },
        { name: 'Help Center', path: '/help', description: 'Support and FAQs', updated: 'April 4, 2026' },
        { name: 'Tutorials', path: '/tutorials', description: 'Video tutorials and guides', updated: 'April 3, 2026' },
        { name: 'Webinars', path: '/webinars', description: 'Live and recorded webinars', updated: 'April 2, 2026' },
        { name: 'Case Studies', path: '/case-studies', description: 'Customer success stories', updated: 'April 1, 2026' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research papers', updated: 'March 30, 2026' },
        { name: 'E-books', path: '/ebooks', description: 'Free e-books and guides', updated: 'March 28, 2026' },
        { name: 'Infographics', path: '/infographics', description: 'Visual data insights', updated: 'March 25, 2026' },
        { name: 'Glossary', path: '/glossary', description: 'Supply chain terminology', updated: 'March 20, 2026' },
      ],
    },
    {
      id: 'support',
      name: 'Support',
      icon: 'heart',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      description: 'Customer support and assistance',
      linkCount: 7,
      links: [
        { name: 'Support Center', path: '/support', description: 'Customer support portal', updated: 'April 7, 2026' },
        { name: 'FAQs', path: '/faq', description: 'Frequently asked questions', updated: 'April 6, 2026' },
        { name: 'Knowledge Base', path: '/knowledge-base', description: 'Articles and guides', updated: 'April 5, 2026' },
        { name: 'Community Forum', path: '/community', description: 'User community', updated: 'April 4, 2026' },
        { name: 'Status Page', path: '/status', description: 'System status and uptime', updated: 'April 8, 2026' },
        { name: 'Submit Ticket', path: '/support/ticket', description: 'Create support ticket', updated: 'April 3, 2026' },
        { name: 'Live Chat', path: '/support/chat', description: 'Live chat support', updated: 'April 2, 2026' },
      ],
    },
    {
      id: 'legal',
      name: 'Legal & Compliance',
      icon: 'scale',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      description: 'Legal documents and compliance information',
      linkCount: 10,
      links: [
        { name: 'Terms of Service', path: '/legal/terms', description: 'Terms and conditions', updated: 'April 8, 2026' },
        { name: 'Privacy Policy', path: '/legal/privacy', description: 'Privacy practices', updated: 'April 8, 2026' },
        { name: 'Cookie Policy', path: '/legal/cookies', description: 'Cookie usage', updated: 'April 8, 2026' },
        { name: 'GDPR Compliance', path: '/legal/gdpr', description: 'GDPR information', updated: 'April 8, 2026' },
        { name: 'Data Processing Agreement', path: '/legal/dpa', description: 'DPA for customers', updated: 'April 1, 2026' },
        { name: 'Security Policy', path: '/legal/security', description: 'Security practices', updated: 'April 5, 2026' },
        { name: 'Acceptable Use Policy', path: '/legal/aup', description: 'AUP guidelines', updated: 'March 20, 2026' },
        { name: 'Subprocessors', path: '/legal/subprocessors', description: 'List of subprocessors', updated: 'March 15, 2026' },
        { name: 'Compliance Reports', path: '/legal/compliance', description: 'SOC 2, ISO reports', updated: 'March 10, 2026' },
        { name: 'Data Request Form', path: '/legal/data-request', description: 'Submit DSAR', updated: 'March 5, 2026' },
      ],
    },
    {
      id: 'company',
      name: 'Company',
      icon: 'building',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      description: 'Company information and news',
      linkCount: 7,
      links: [
        { name: 'About Us', path: '/company/about', description: 'Company overview', updated: 'March 15, 2026' },
        { name: 'Leadership', path: '/company/leadership', description: 'Executive team', updated: 'March 10, 2026' },
        { name: 'Mission & Values', path: '/company/values', description: 'Core values', updated: 'March 5, 2026' },
        { name: 'Newsroom', path: '/company/news', description: 'Latest news', updated: 'April 7, 2026' },
        { name: 'Events', path: '/company/events', description: 'Upcoming events', updated: 'April 1, 2026' },
        { name: 'Partners', path: '/company/partners', description: 'Partner program', updated: 'March 25, 2026' },
        { name: 'Customers', path: '/company/customers', description: 'Customer stories', updated: 'March 20, 2026' },
      ],
    },
    {
      id: 'security',
      name: 'Security',
      icon: 'shield',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      description: 'Security practices and certifications',
      linkCount: 6,
      links: [
        { name: 'Security Overview', path: '/security/overview', description: 'Security program', updated: 'April 5, 2026' },
        { name: 'Certifications', path: '/security/certifications', description: 'SOC 2, ISO certifications', updated: 'April 4, 2026' },
        { name: 'Vulnerability Disclosure', path: '/security/disclosure', description: 'Report vulnerabilities', updated: 'April 3, 2026' },
        { name: 'Bug Bounty', path: '/security/bug-bounty', description: 'Bug bounty program', updated: 'April 2, 2026' },
        { name: 'Data Encryption', path: '/security/encryption', description: 'Encryption standards', updated: 'April 1, 2026' },
        { name: 'Incident Response', path: '/security/incident-response', description: 'Breach procedures', updated: 'March 30, 2026' },
      ],
    },
  ], [config?.categoryLinks]);

  // ==================== HELPER FUNCTIONS ====================
  const getTotalLinks = useMemo(() => {
    return categoryLinks.reduce((acc, cat) => acc + cat.links.length, 0);
  }, [categoryLinks]);

  const getFilteredCategories = useMemo(() => {
    if (!searchQuery) return categoryLinks;
    const query = searchQuery.toLowerCase();
    return categoryLinks
      .map(category => ({
        ...category,
        links: category.links.filter(link =>
          link.name.toLowerCase().includes(query) ||
          link.description.toLowerCase().includes(query) ||
          link.path.toLowerCase().includes(query)
        ),
      }))
      .filter(category => category.links.length > 0);
  }, [categoryLinks, searchQuery]);

  const getFilteredPopularLinks = useMemo(() => {
    if (!searchQuery) return popularLinks;
    const query = searchQuery.toLowerCase();
    return popularLinks.filter(link =>
      link.name.toLowerCase().includes(query) ||
      link.category.toLowerCase().includes(query) ||
      link.path.toLowerCase().includes(query)
    );
  }, [popularLinks, searchQuery]);

  const getFilteredRecentLinks = useMemo(() => {
    if (!searchQuery) return recentlyUpdated;
    const query = searchQuery.toLowerCase();
    return recentlyUpdated.filter(link =>
      link.name.toLowerCase().includes(query) ||
      link.category.toLowerCase().includes(query) ||
      link.path.toLowerCase().includes(query)
    );
  }, [recentlyUpdated, searchQuery]);

  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      home: <HiOutlineHome className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      user: <HiOutlineUser className={className} />,
      'user-group': <HiOutlineUserGroup className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      scale: <HiOutlineScale className={className} />,
      mail: <HiOutlineMail className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      database: <HiOutlineDatabase className={className} />,
      chip: <HiOutlineChip className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      search: <HiOutlineSearch className={className} />,
      info: <HiOutlineInformationCircle className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      heart: <HiOutlineHeart className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      cloud: <HiOutlineCloud className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      flag: <HiOutlineFlag className={className} />,
      ban: <HiOutlineBan className={className} />,
      exclamation: <HiOutlineExclamation className={className} />,
      download: <HiOutlineDownload className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      cookie: <HiOutlineCookie className={className} />,
      fingerprint: <HiOutlineFingerPrint className={className} />,
      folder: <HiOutlineFolder className={className} />,
      star: <HiOutlineStar className={className} />,
      'trending-up': <HiOutlineTrendingUp className={className} />,
      'view-grid': <HiOutlineViewGrid className={className} />,
      'view-list': <HiOutlineViewList className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Category Links Center"
    >
      {/* ==================== BACKGROUND PATTERN ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

      {/* ==================== ANIMATED GRADIENT ORBS ==================== */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-6">
            <HiOutlineGlobe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Category Links"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Browse by"} <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{config?.title?.highlight || "Category"}</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {config?.description || "Navigate our website by category. Find the information you need quickly and easily."}
          </p>

          {/* ==================== STATS ROW ==================== */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineFolder className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Categories:</strong> {categoryLinks.length}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineDocumentText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Total Links:</strong> {getTotalLinks}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Last Updated:</strong> {lastUpdated}
              </span>
            </div>
          </div>

          {/* ==================== ACTION BUTTONS ==================== */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-sm font-medium"
              aria-label="Print category links"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* ==================== NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {tab.icon === 'folder' ? <HiOutlineFolder className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  <HiOutlineTrendingUp className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search categories or links..."
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            aria-label="Search categories or links"
          />
        </div>

        {/* ==================== VIEW MODE TOGGLE (for categories tab) ==================== */}
        {activeTab === 'categories' && (
          <div className="flex justify-end mb-6">
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Grid view"
              >
                <HiOutlineViewGrid className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="List view"
              >
                <HiOutlineViewList className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        )}

        {/* ==================== CATEGORIES TAB ==================== */}
        {activeTab === 'categories' && (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {getFilteredCategories.map((category) => (
              <div
                key={category.id}
                className={`${category.bgColor} rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl ${viewMode === 'list' ? 'w-full' : ''}`}
              >
                {/* Category Header */}
                <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${category.color} flex items-center justify-center shadow-md`}>
                      {getIcon(category.icon, "w-6 h-6 text-white")}
                    </div>
                    <div>
                      <button
                        onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                        className="font-semibold text-gray-900 dark:text-white text-lg hover:text-blue-600 transition-colors text-left"
                        aria-label={`Toggle ${category.name} category`}
                      >
                        {category.name}
                      </button>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{category.linkCount} links</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {category.description}
                  </p>
                </div>

                {/* Category Links */}
                {expandedCategory === category.id && (
                  <div className="p-5 pt-0">
                    <ul className="space-y-3 mt-3">
                      {category.links.slice(0, 5).map((link, idx) => (
                        <li key={idx}>
                          <a
                            href={link.path}
                            className="group flex items-center justify-between p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                            aria-label={`Navigate to ${link.name}`}
                          >
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white text-sm">
                                {link.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{link.description}</p>
                              <p className="text-xs text-gray-400 mt-0.5">Updated: {link.updated}</p>
                            </div>
                            <HiOutlineChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                    {category.links.length > 5 && (
                      <button
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowCategoryModal(true);
                        }}
                        className="mt-3 w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium py-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                        aria-label={`View all ${category.linkCount} links in ${category.name}`}
                      >
                        View all {category.linkCount} links →
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ==================== POPULAR LINKS TAB ==================== */}
        {activeTab === 'popular' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineStar className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
              Most Popular Links
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Link Name</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Category</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Path</th>
                    <th className="text-right p-3 font-semibold text-gray-900 dark:text-white">Clicks</th>
                  </tr>
                </thead>
                <tbody>
                  {getFilteredPopularLinks.map((link, idx) => (
                    <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="p-3">
                        <a href={link.path} className="font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                          {link.name}
                        </a>
                      </td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                          {link.category}
                        </span>
                      </td>
                      <td className="p-3 text-xs text-gray-500 dark:text-gray-400 font-mono">{link.path}</td>
                      <td className="p-3 text-right text-gray-600 dark:text-gray-400">{link.clicks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {getFilteredPopularLinks.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">No popular links match your search.</p>
              </div>
            )}
          </div>
        )}

        {/* ==================== RECENT UPDATES TAB ==================== */}
        {activeTab === 'recent' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineTrendingUp className="w-5 h-5 text-green-500 dark:text-green-400" />
              Recently Updated Links
            </h2>
            <div className="space-y-3">
              {getFilteredRecentLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.path}
                  className="block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-md"
                  aria-label={`Navigate to ${link.name}`}
                >
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 dark:text-white">{link.name}</p>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                          {link.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mt-1">{link.path}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{link.date}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">By {link.author}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {getFilteredRecentLinks.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">No recent updates match your search.</p>
              </div>
            )}
          </div>
        )}

        {/* ==================== NO RESULTS ==================== */}
        {activeTab === 'categories' && getFilteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
            <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
            <p className="text-gray-500 dark:text-gray-400">No categories match your search.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-blue-600 dark:text-blue-400 hover:underline text-sm"
              aria-label="Clear search"
            >
              Clear search
            </button>
          </div>
        )}

        {/* ==================== FOOTER NOTE ==================== */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Can't find what you're looking for? <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact our support team</a></p>
        </div>

        {/* ==================== CATEGORY LINKS MODAL ==================== */}
        {showCategoryModal && selectedCategory && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowCategoryModal(false)}
            role="dialog"
            aria-label={`All links in ${selectedCategory.name}`}
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`bg-linear-to-r ${selectedCategory.color} p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      {getIcon(selectedCategory.icon, "w-5 h-5 text-white")}
                    </div>
                    <h3 className="text-white font-bold text-lg">{selectedCategory.name}</h3>
                  </div>
                  <button
                    onClick={() => setShowCategoryModal(false)}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedCategory.description}</p>
                <ul className="space-y-3">
                  {selectedCategory.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.path}
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setShowCategoryModal(false)}
                        aria-label={`Navigate to ${link.name}`}
                      >
                        <p className="font-medium text-gray-900 dark:text-white">{link.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{link.description}</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-mono">{link.path}</p>
                      </a>
                    </li>
                  ))}
                </ul>
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default CategoryLinksSection2;