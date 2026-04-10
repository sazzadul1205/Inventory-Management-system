// page/frontend/Sitemap/AllPagesIndexSection/AllPagesIndexSection1.jsx

// React
import { useState } from 'react';

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
} from 'react-icons/hi';
import {
  HiOutlineBuildingOffice,
  HiOutlineUserGroup,
  HiOutlineDocumentDuplicate,
  HiOutlineFingerPrint,
} from 'react-icons/hi2';
import { MdOutlineCookie as HiOutlineCookie, } from "react-icons/md";

const AllPagesIndexSection1 = ({ config }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSitemapModal, setShowSitemapModal] = useState(false);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Sitemap categories and pages
  const sitemapCategories = config?.sitemapCategories || [
    {
      id: 'home',
      name: 'Home & Overview',
      icon: 'home',
      color: 'from-blue-500 to-blue-600',
      pages: [
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
      pages: [
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
      id: 'mobile-apps',
      name: 'Mobile Apps',
      icon: 'mobile',
      color: 'from-purple-500 to-purple-600',
      pages: [
        { name: 'iOS App', path: '/mobile/ios', description: 'iOS mobile application' },
        { name: 'Android App', path: '/mobile/android', description: 'Android mobile application' },
        { name: 'Mobile Features', path: '/mobile/features', description: 'Mobile app features' },
        { name: 'App Store Listing', path: '/mobile/app-store', description: 'Apple App Store page' },
        { name: 'Google Play Listing', path: '/mobile/google-play', description: 'Google Play Store page' },
        { name: 'Mobile Security', path: '/mobile/security', description: 'Mobile app security' },
      ],
    },
    {
      id: 'solutions',
      name: 'Solutions',
      icon: 'cloud',
      color: 'from-cyan-500 to-cyan-600',
      pages: [
        { name: 'Supply Chain Management', path: '/solutions/supply-chain', description: 'End-to-end supply chain solutions' },
        { name: 'Inventory Management', path: '/solutions/inventory', description: 'Real-time inventory tracking' },
        { name: 'Warehouse Management', path: '/solutions/warehouse', description: 'Warehouse optimization' },
        { name: 'Logistics & Shipping', path: '/solutions/logistics', description: 'Shipping and logistics management' },
        { name: 'Procurement', path: '/solutions/procurement', description: 'Procurement automation' },
        { name: 'Demand Forecasting', path: '/solutions/forecasting', description: 'AI-powered demand prediction' },
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
      pages: [
        { name: 'Retail & E-commerce', path: '/industries/retail', description: 'Retail supply chain solutions' },
        { name: 'Manufacturing', path: '/industries/manufacturing', description: 'Manufacturing supply chain' },
        { name: 'Healthcare', path: '/industries/healthcare', description: 'Healthcare logistics' },
        { name: 'Pharmaceutical', path: '/industries/pharmaceutical', description: 'Pharma supply chain' },
        { name: 'Automotive', path: '/industries/automotive', description: 'Automotive parts logistics' },
        { name: 'Food & Beverage', path: '/industries/food-beverage', description: 'Food supply chain' },
        { name: 'Logistics & 3PL', path: '/industries/logistics', description: 'Third-party logistics' },
      ],
    },
    {
      id: 'resources',
      name: 'Resources',
      icon: 'document',
      color: 'from-red-500 to-red-600',
      pages: [
        { name: 'Documentation', path: '/docs', description: 'Product documentation' },
        { name: 'Help Center', path: '/help', description: 'Support and FAQs' },
        { name: 'Tutorials', path: '/tutorials', description: 'Video tutorials and guides' },
        { name: 'Webinars', path: '/webinars', description: 'Live and recorded webinars' },
        { name: 'Case Studies', path: '/case-studies', description: 'Customer success stories' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research papers' },
        { name: 'E-books', path: '/ebooks', description: 'Free e-books and guides' },
        { name: 'InfoGraphics', path: '/infoGraphics', description: 'Visual data insights' },
        { name: 'Glossary', path: '/glossary', description: 'Supply chain terminology' },
      ],
    },
    {
      id: 'support',
      name: 'Support',
      icon: 'heart',
      color: 'from-pink-500 to-pink-600',
      pages: [
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
      pages: [
        { name: 'Terms of Service', path: '/legal/terms', description: 'Terms and conditions' },
        { name: 'Privacy Policy', path: '/legal/privacy', description: 'Privacy practices' },
        { name: 'Cookie Policy', path: '/legal/cookies', description: 'Cookie usage' },
        { name: 'GDPR Compliance', path: '/legal/gdpr', description: 'GDPR information' },
        { name: 'Data Processing Agreement', path: '/legal/dpa', description: 'DPA for customers' },
        { name: 'Security Policy', path: '/legal/security', description: 'Security practices' },
        { name: 'Acceptable Use Policy', path: '/legal/aup', description: 'AUP guidelines' },
        { name: 'SubProcessors', path: '/legal/subProcessors', description: 'List of subProcessors' },
        { name: 'Compliance Reports', path: '/legal/compliance', description: 'SOC 2, ISO reports' },
        { name: 'Data Request Form', path: '/legal/data-request', description: 'Submit DSAR' },
      ],
    },
    {
      id: 'company',
      name: 'Company',
      icon: 'building',
      color: 'from-teal-500 to-teal-600',
      pages: [
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
      pages: [
        { name: 'Security Overview', path: '/security/overview', description: 'Security program' },
        { name: 'Security Certifications', path: '/security/certifications', description: 'SOC 2, ISO 27001' },
        { name: 'Vulnerability Disclosure', path: '/security/disclosure', description: 'Report vulnerabilities' },
        { name: 'Bug Bounty Program', path: '/security/bug-bounty', description: 'Security researchers' },
        { name: 'Data Encryption', path: '/security/encryption', description: 'Encryption standards' },
        { name: 'Incident Response', path: '/security/incident-response', description: 'Breach procedures' },
      ],
    },
  ];

  // Filter categories based on search
  const filteredCategories = sitemapCategories.filter(category => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      category.name.toLowerCase().includes(query) ||
      category.pages.some(page =>
        page.name.toLowerCase().includes(query) ||
        page.path.toLowerCase().includes(query) ||
        page.description.toLowerCase().includes(query)
      )
    );
  });

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
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  // Get total page count
  const totalPages = sitemapCategories.reduce((acc, cat) => acc + cat.pages.length, 0);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Sitemap Index"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineGlobe className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Sitemap"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Site"} <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{config?.title?.highlight || "Map"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Find your way around SupplyChainPro. This sitemap provides an overview of all pages available on our website."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineDocumentText className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Total Pages:</strong> {totalPages}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineCalendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Last Updated:</strong> {lastUpdated}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineBuildingOffice className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Categories:</strong> {sitemapCategories.length}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setShowSitemapModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <HiOutlineDownload className="w-4 h-4" />
              Download XML Sitemap
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
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

        {/* Sitemap Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Category Header */}
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
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
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white text-sm">
                                {page.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">{page.description}</p>
                              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-mono">
                                {page.path}
                              </p>
                            </div>
                            <HiOutlineExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
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

        {/* No Results */}
        {filteredCategories.length === 0 && (
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
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
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

export default AllPagesIndexSection1;