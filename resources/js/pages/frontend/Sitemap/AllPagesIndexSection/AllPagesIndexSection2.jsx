// page/frontend/Sitemap/AllPagesIndexSection/AllPagesIndexSection2.jsx

// React
import { useState, useMemo } from 'react';

// Icons
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
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineExternalLink,
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
  HiOutlineFolderOpen,
} from 'react-icons/hi';
import {
  HiOutlineUserGroup,
  HiOutlineDocumentDuplicate,
  HiOutlineFingerPrint,
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineBuildingOffice,
} from 'react-icons/hi2';
import { MdOutlineCookie as HiOutlineCookie, } from "react-icons/md";

const AllPagesIndexSection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('sitemap');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [showSitemapModal, setShowSitemapModal] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState([{ name: 'Home', path: '/' }]);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Tabs configuration
  const tabs = [
    { id: 'sitemap', label: 'Sitemap', icon: 'view-grid' },
    { id: 'popular', label: 'Popular Pages', icon: 'star' },
    { id: 'new', label: 'New & Updated', icon: 'sparkles' },
    { id: 'categories', label: 'Categories', icon: 'folder' },
  ];

  // Popular pages
  const popularPages = config?.popularPages || [
    { name: 'Home', path: '/', views: '1.2M', trend: '+12%' },
    { name: 'Pricing', path: '/pricing', views: '890K', trend: '+8%' },
    { name: 'Features', path: '/features', views: '756K', trend: '+15%' },
    { name: 'Android App', path: '/mobile/android', views: '234K', trend: '+25%' },
    { name: 'iOS App', path: '/mobile/ios', views: '198K', trend: '+18%' },
    { name: 'API Documentation', path: '/api/docs', views: '167K', trend: '+10%' },
    { name: 'Contact Support', path: '/support', views: '145K', trend: '+5%' },
    { name: 'Terms of Service', path: '/legal/terms', views: '98K', trend: '-2%' },
    { name: 'Privacy Policy', path: '/legal/privacy', views: '87K', trend: '+3%' },
    { name: 'Case Studies', path: '/case-studies', views: '76K', trend: '+22%' },
  ];

  // Recently updated pages
  const recentlyUpdated = config?.recentlyUpdated || [
    { name: 'GDPR Compliance', path: '/legal/gdpr', date: 'April 8, 2026', author: 'Legal Team' },
    { name: 'Security Policy', path: '/legal/security', date: 'April 5, 2026', author: 'Security Team' },
    { name: 'Data Processing Agreement', path: '/legal/dpa', date: 'April 1, 2026', author: 'Legal Team' },
    { name: 'Android App v3.0', path: '/mobile/android', date: 'March 28, 2026', author: 'Mobile Team' },
    { name: 'iOS App v3.0', path: '/mobile/ios', date: 'March 28, 2026', author: 'Mobile Team' },
    { name: 'Cookie Policy', path: '/legal/cookies', date: 'March 25, 2026', author: 'Legal Team' },
    { name: 'Acceptable Use Policy', path: '/legal/aup', date: 'March 20, 2026', author: 'Legal Team' },
    { name: 'Supply Chain Guide', path: '/resources/supply-chain-guide', date: 'March 15, 2026', author: 'Content Team' },
  ];

  // Sitemap categories and pages
  const sitemapCategories = useMemo(() => config?.sitemapCategories || [
    {
      id: 'home',
      name: 'Home & Overview',
      icon: 'home',
      color: 'from-blue-500 to-blue-600',
      count: 6,
      pages: [
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
      count: 7,
      pages: [
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
      id: 'mobile-apps',
      name: 'Mobile Apps',
      icon: 'mobile',
      color: 'from-purple-500 to-purple-600',
      count: 6,
      pages: [
        { name: 'iOS App', path: '/mobile/ios', description: 'iOS mobile application', updated: 'March 28, 2026' },
        { name: 'Android App', path: '/mobile/android', description: 'Android mobile application', updated: 'March 28, 2026' },
        { name: 'Mobile Features', path: '/mobile/features', description: 'Mobile app features', updated: 'March 15, 2026' },
        { name: 'App Store Listing', path: '/mobile/app-store', description: 'Apple App Store page', updated: 'March 28, 2026' },
        { name: 'Google Play Listing', path: '/mobile/google-play', description: 'Google Play Store page', updated: 'March 28, 2026' },
        { name: 'Mobile Security', path: '/mobile/security', description: 'Mobile app security', updated: 'April 1, 2026' },
      ],
    },
    {
      id: 'solutions',
      name: 'Solutions',
      icon: 'cloud',
      color: 'from-cyan-500 to-cyan-600',
      count: 9,
      pages: [
        { name: 'Supply Chain Management', path: '/solutions/supply-chain', description: 'End-to-end supply chain solutions', updated: 'March 20, 2026' },
        { name: 'Inventory Management', path: '/solutions/inventory', description: 'Real-time inventory tracking', updated: 'March 18, 2026' },
        { name: 'Warehouse Management', path: '/solutions/warehouse', description: 'Warehouse optimization', updated: 'March 22, 2026' },
        { name: 'Logistics & Shipping', path: '/solutions/logistics', description: 'Shipping and logistics management', updated: 'March 25, 2026' },
        { name: 'Procurement', path: '/solutions/procurement', description: 'Procurement automation', updated: 'March 19, 2026' },
        { name: 'Demand Forecasting', path: '/solutions/forecasting', description: 'AI-powered demand prediction', updated: 'March 30, 2026' },
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
      count: 7,
      pages: [
        { name: 'Retail & E-commerce', path: '/industries/retail', description: 'Retail supply chain solutions', updated: 'March 15, 2026' },
        { name: 'Manufacturing', path: '/industries/manufacturing', description: 'Manufacturing supply chain', updated: 'March 16, 2026' },
        { name: 'Healthcare', path: '/industries/healthcare', description: 'Healthcare logistics', updated: 'March 17, 2026' },
        { name: 'Pharmaceutical', path: '/industries/pharmaceutical', description: 'Pharma supply chain', updated: 'March 18, 2026' },
        { name: 'Automotive', path: '/industries/automotive', description: 'Automotive parts logistics', updated: 'March 19, 2026' },
        { name: 'Food & Beverage', path: '/industries/food-beverage', description: 'Food supply chain', updated: 'March 20, 2026' },
        { name: 'Logistics & 3PL', path: '/industries/logistics', description: 'Third-party logistics', updated: 'March 21, 2026' },
      ],
    },
    {
      id: 'resources',
      name: 'Resources',
      icon: 'document',
      color: 'from-red-500 to-red-600',
      count: 9,
      pages: [
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
      count: 7,
      pages: [
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
      count: 10,
      pages: [
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
      count: 7,
      pages: [
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
      count: 6,
      pages: [
        { name: 'Security Overview', path: '/security/overview', description: 'Security program', updated: 'April 5, 2026' },
        { name: 'Security Certifications', path: '/security/certifications', description: 'SOC 2, ISO 27001', updated: 'April 4, 2026' },
        { name: 'Vulnerability Disclosure', path: '/security/disclosure', description: 'Report vulnerabilities', updated: 'April 3, 2026' },
        { name: 'Bug Bounty Program', path: '/security/bug-bounty', description: 'Security researchers', updated: 'April 2, 2026' },
        { name: 'Data Encryption', path: '/security/encryption', description: 'Encryption standards', updated: 'April 1, 2026' },
        { name: 'Incident Response', path: '/security/incident-response', description: 'Breach procedures', updated: 'March 30, 2026' },
      ],
    },
  ], [config?.sitemapCategories]);

  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery) return sitemapCategories;
    const query = searchQuery.toLowerCase();
    return sitemapCategories
      .map(category => ({
        ...category,
        pages: category.pages.filter(page =>
          page.name.toLowerCase().includes(query) ||
          page.path.toLowerCase().includes(query) ||
          page.description.toLowerCase().includes(query)
        ),
      }))
      .filter(category => category.pages.length > 0);
  }, [sitemapCategories, searchQuery]);

  // Get total page count
  const totalPages = sitemapCategories.reduce((acc, cat) => acc + cat.pages.length, 0);

  // Handle breadcrumb navigation
  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category.id ? null : category.id);
    setBreadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Sitemap', path: '/sitemap' },
      { name: category.name, path: `#${category.id}` },
    ]);
  };

  // Helper function to render icons
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
      'view-grid': <HiOutlineViewGrid className={className} />,
      'view-list': <HiOutlineViewList className={className} />,
      folder: <HiOutlineFolder className={className} />,
      'folder-open': <HiOutlineFolderOpen className={className} />,
      star: <HiOutlineStar className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Sitemap Index"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          {breadcrumb.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {idx > 0 && <span>/</span>}
              <a href={item.path} className="hover:text-blue-600 transition-colors">
                {item.name}
              </a>
            </div>
          ))}
        </div>

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-6">
            <HiOutlineGlobe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Sitemap"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Site"} <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{config?.title?.highlight || "Map"}</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {config?.description || "Find your way around SupplyChainPro. This sitemap provides an overview of all pages available on our website."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineDocumentText className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Total Pages:</strong> {totalPages}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineCalendar className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Last Updated:</strong> {lastUpdated}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineBuildingOffice className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Categories:</strong> {sitemapCategories.length}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setShowSitemapModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
            >
              <HiOutlineDownload className="w-4 h-4" />
              Download XML Sitemap
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-sm font-medium"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
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
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {tab.icon === 'view-grid' ? <HiOutlineViewGrid className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  tab.icon === 'sparkles' ? <HiOutlineSparkles className="w-4 h-4" /> :
                    <HiOutlineFolder className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a page..."
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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

        {/* Sitemap Tab */}
        {activeTab === 'sitemap' && (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl ${viewMode === 'list' ? 'w-full' : ''}`}
              >
                {/* Category Header */}
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-linear-to-r ${category.color} flex items-center justify-center`}>
                      {getIcon(category.icon, "w-5 h-5 text-white")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                      <p className="text-xs text-gray-500">{category.pages.length} pages</p>
                    </div>
                  </div>
                  {expandedCategory === category.id ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {/* Category Pages */}
                {expandedCategory === category.id && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <ul className="space-y-3">
                      {category.pages.map((page, pIdx) => (
                        <li key={pIdx} className="group">
                          <a
                            href={page.path}
                            className="block p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="font-medium text-gray-900 dark:text-white text-sm">
                                  {page.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">{page.description}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">
                                    {page.path}
                                  </p>
                                  <span className="text-xs text-gray-400">•</span>
                                  <p className="text-xs text-gray-400">Updated: {page.updated}</p>
                                </div>
                              </div>
                              <HiOutlineExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0" />
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Popular Pages Tab */}
        {activeTab === 'popular' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineStar className="w-5 h-5 text-yellow-500" />
              Most Popular Pages
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Page Name</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Path</th>
                    <th className="text-right p-3 font-semibold text-gray-900 dark:text-white">Views</th>
                    <th className="text-right p-3 font-semibold text-gray-900 dark:text-white">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {popularPages.map((page, idx) => (
                    <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="p-3">
                        <a href={page.path} className="font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                          {page.name}
                        </a>
                      </td>
                      <td className="p-3 text-xs text-gray-500 font-mono">{page.path}</td>
                      <td className="p-3 text-right text-gray-600 dark:text-gray-400">{page.views}</td>
                      <td className={`p-3 text-right ${page.trend.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {page.trend}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* New & Updated Tab */}
        {activeTab === 'new' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineSparkles className="w-5 h-5 text-green-500" />
              Recently Updated Pages
            </h2>
            <div className="space-y-3">
              {recentlyUpdated.map((page, idx) => (
                <a
                  key={idx}
                  href={page.path}
                  className="block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{page.name}</p>
                      <p className="text-xs text-gray-500 font-mono mt-1">{page.path}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{page.date}</p>
                      <p className="text-xs text-gray-500">By {page.author}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab('sitemap');
                  setExpandedCategory(category.id);
                  setSearchQuery('');
                }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${category.color} flex items-center justify-center`}>
                  {getIcon(category.icon, "w-6 h-6 text-white")}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                  <p className="text-xs text-gray-500">{category.pages.length} pages</p>
                </div>
                <HiOutlineArrowRight className="w-4 h-4 text-gray-400" />
              </button>
            ))}
          </div>
        )}

        {/* No Results */}
        {activeTab === 'sitemap' && filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
            <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
            <p className="text-gray-500">No pages match your search.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-blue-600 hover:underline text-sm"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Need help finding something? <a href="/contact" className="text-blue-600 hover:underline">Contact our support team</a></p>
        </div>

        {/* XML Sitemap Modal */}
        {showSitemapModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSitemapModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Download XML Sitemap</h3>
                  <button onClick={() => setShowSitemapModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <HiOutlineDocumentDuplicate className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  The XML sitemap is available for search engines to crawl your site structure.
                </p>
                <div className="flex gap-3">
                  <a
                    href="/sitemap.xml"
                    download
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <HiOutlineDownload className="w-4 h-4" />
                    Download sitemap.xml
                  </a>
                  <button
                    onClick={() => setShowSitemapModal(false)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
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

export default AllPagesIndexSection2;