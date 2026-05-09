// page/frontend/Sitemap/CategoryLinksSection/CategoryLinksSection1.jsx

/**
 * Category Links Section I - Smart Navigation Hub
 *
 * Unique Design Elements:
 * - Interactive Category Cards with Hover Effects
 * - Search Functionality with Live Filtering
 * - Modal View for Complete Category Details
 * - Stats Dashboard with Total Categories and Links
 * - Color-Coded Category Headers with Gradient Accents
 * - Quick Stats Row with Key Metrics
 * - Print Functionality for Documentation
 * - Animated Background Gradient Orbs
 * - Fully Responsive Grid Layout
 * - Dark Mode Support
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
} from 'react-icons/hi';
import {
  HiOutlineUserGroup,
  HiOutlineFingerPrint,
  HiOutlineBuildingOffice,
  HiOutlineLink,
} from 'react-icons/hi2';
import { MdOutlineCookie as HiOutlineCookie } from "react-icons/md";

const CategoryLinksSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // ==================== MEMOIZED DATA ====================
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
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and mission' },
        { name: 'Contact', path: '/contact', description: 'Contact information and support' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities at SupplyChainPro' },
        { name: 'Blog', path: '/blog', description: 'Latest news and updates' },
        { name: 'Press', path: '/press', description: 'Press releases and media kit' },
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
        { name: 'Features', path: '/features', description: 'All product features' },
        { name: 'Pricing', path: '/pricing', description: 'Subscription plans and pricing' },
        { name: 'Demo', path: '/demo', description: 'Request a product demo' },
        { name: 'Integrations', path: '/integrations', description: 'Third-party integrations' },
        { name: 'API Documentation', path: '/api/docs', description: 'API reference and documentation' },
        { name: 'Release Notes', path: '/release-notes', description: 'Version history and updates' },
        { name: 'Roadmap', path: '/roadmap', description: 'Product development roadmap' },
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
        { name: 'iOS App', path: '/mobile/ios', description: 'iPhone and iPad mobile application' },
        { name: 'Android App', path: '/mobile/android', description: 'Android mobile application' },
        { name: 'Mobile Features', path: '/mobile/features', description: 'Mobile app features overview' },
        { name: 'App Store', path: '/mobile/app-store', description: 'Apple App Store listing' },
        { name: 'Google Play', path: '/mobile/google-play', description: 'Google Play Store listing' },
        { name: 'Mobile Security', path: '/mobile/security', description: 'Mobile app security practices' },
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
        { name: 'Supply Chain Management', path: '/solutions/supply-chain', description: 'End-to-end supply chain solutions' },
        { name: 'Inventory Management', path: '/solutions/inventory', description: 'Real-time inventory tracking' },
        { name: 'Warehouse Management', path: '/solutions/warehouse', description: 'Warehouse optimization' },
        { name: 'Logistics & Shipping', path: '/solutions/logistics', description: 'Shipping and logistics management' },
        { name: 'Procurement', path: '/solutions/procurement', description: 'Procurement automation' },
        { name: 'Demand Forecasting', path: '/solutions/forecasting', description: 'AI-powered demand predictions' },
        { name: 'Retail', path: '/solutions/retail', description: 'Solutions for retailers' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', description: 'Solutions for manufacturers' },
        { name: 'Healthcare', path: '/solutions/healthcare', description: 'Healthcare supply chain' },
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
        { name: 'Retail & E-commerce', path: '/industries/retail', description: 'Retail supply chain solutions' },
        { name: 'Manufacturing', path: '/industries/manufacturing', description: 'Manufacturing supply chain' },
        { name: 'Healthcare', path: '/industries/healthcare', description: 'Healthcare logistics' },
        { name: 'Pharmaceutical', path: '/industries/pharmaceutical', description: 'Pharma supply chain' },
        { name: 'Automotive', path: '/industries/automotive', description: 'Auto parts logistics' },
        { name: 'Food & Beverage', path: '/industries/food-beverage', description: 'Food supply chain' },
        { name: 'Logistics & 3PL', path: '/industries/logistics', description: 'Third-party logistics' },
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
        { name: 'Documentation', path: '/docs', description: 'Product documentation' },
        { name: 'Help Center', path: '/help', description: 'Support and FAQs' },
        { name: 'Tutorials', path: '/tutorials', description: 'Video tutorials and guides' },
        { name: 'Webinars', path: '/webinars', description: 'Live and recorded webinars' },
        { name: 'Case Studies', path: '/case-studies', description: 'Customer success stories' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research papers' },
        { name: 'E-books', path: '/ebooks', description: 'Free e-books and guides' },
        { name: 'Infographics', path: '/infographics', description: 'Visual data insights' },
        { name: 'Glossary', path: '/glossary', description: 'Supply chain terminology' },
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
        { name: 'Support Center', path: '/support', description: 'Customer support portal' },
        { name: 'FAQs', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Knowledge Base', path: '/knowledge-base', description: 'Articles and guides' },
        { name: 'Community Forum', path: '/community', description: 'User community' },
        { name: 'Status Page', path: '/status', description: 'System status and uptime' },
        { name: 'Submit Ticket', path: '/support/ticket', description: 'Create support ticket' },
        { name: 'Live Chat', path: '/support/chat', description: 'Live chat support' },
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
        { name: 'Terms of Service', path: '/legal/terms', description: 'Terms and conditions' },
        { name: 'Privacy Policy', path: '/legal/privacy', description: 'Privacy practices' },
        { name: 'Cookie Policy', path: '/legal/cookies', description: 'Cookie usage' },
        { name: 'GDPR Compliance', path: '/legal/gdpr', description: 'GDPR information' },
        { name: 'Data Processing Agreement', path: '/legal/dpa', description: 'DPA for customers' },
        { name: 'Security Policy', path: '/legal/security', description: 'Security practices' },
        { name: 'Acceptable Use Policy', path: '/legal/aup', description: 'AUP guidelines' },
        { name: 'Subprocessors', path: '/legal/subprocessors', description: 'List of subprocessors' },
        { name: 'Compliance Reports', path: '/legal/compliance', description: 'SOC 2, ISO reports' },
        { name: 'Data Request Form', path: '/legal/data-request', description: 'Submit DSAR' },
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
        { name: 'About Us', path: '/company/about', description: 'Company overview' },
        { name: 'Leadership', path: '/company/leadership', description: 'Executive team' },
        { name: 'Mission & Values', path: '/company/values', description: 'Core values' },
        { name: 'Newsroom', path: '/company/news', description: 'Latest news' },
        { name: 'Events', path: '/company/events', description: 'Upcoming events' },
        { name: 'Partners', path: '/company/partners', description: 'Partner program' },
        { name: 'Customers', path: '/company/customers', description: 'Customer stories' },
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
        { name: 'Security Overview', path: '/security/overview', description: 'Security program' },
        { name: 'Certifications', path: '/security/certifications', description: 'SOC 2, ISO certifications' },
        { name: 'Vulnerability Disclosure', path: '/security/disclosure', description: 'Report vulnerabilities' },
        { name: 'Bug Bounty', path: '/security/bug-bounty', description: 'Bug bounty program' },
        { name: 'Data Encryption', path: '/security/encryption', description: 'Encryption standards' },
        { name: 'Incident Response', path: '/security/incident-response', description: 'Breach procedures' },
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
    return categoryLinks.filter(category =>
      category.name.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query) ||
      category.links.some(link =>
        link.name.toLowerCase().includes(query) ||
        link.path.toLowerCase().includes(query)
      )
    );
  }, [categoryLinks, searchQuery]);

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
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Category Links Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineGlobe className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Category Links"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Browse by"} <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{config?.title?.highlight || "Category"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Navigate our website by category. Find the information you need quickly and easily."}
          </p>

          {/* ==================== STATS ROW ==================== */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineDocumentText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Total Categories:</strong> {categoryLinks.length}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineLink className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Total Links:</strong> {getTotalLinks}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Last Updated:</strong> {lastUpdated}
              </span>
            </div>
          </div>

          {/* ==================== ACTION BUTTONS ==================== */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
              aria-label="Print category links"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
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

        {/* ==================== CATEGORIES GRID ==================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredCategories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgColor} rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Category Header */}
              <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${category.color} flex items-center justify-center shadow-md`}>
                    {getIcon(category.icon, "w-6 h-6 text-white")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{category.linkCount} links</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {category.description}
                </p>
              </div>

              {/* Category Links */}
              <div className="p-5">
                <ul className="space-y-3">
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
            </div>
          ))}
        </div>

        {/* ==================== NO RESULTS ==================== */}
        {getFilteredCategories.length === 0 && (
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
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default CategoryLinksSection1;