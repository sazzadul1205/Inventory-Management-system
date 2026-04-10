// page/frontend/Sitemap/ResourceLinksSection/ResourceLinksSection1.jsx

// React
import { useState } from 'react';

// Icons
import {
  HiOutlineDocumentText,
  HiOutlineBookOpen,
  HiOutlineVideoCamera,
  HiOutlinePresentationChartLine,
  HiOutlineNewspaper,
  HiOutlineDownload,
  HiOutlineExternalLink,
  HiOutlineSearch,
  HiOutlineChevronRight,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineGlobe,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlinePrinter,
  HiOutlineX,
  HiOutlineFolder,
} from 'react-icons/hi';
import {
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
} from 'react-icons/hi2';

const ResourceLinksSection1 = ({ config }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Resource categories and links
  const resourceCategories = config?.resourceCategories || [
    {
      id: 'documentation',
      name: 'Documentation',
      icon: 'document',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Technical documentation and product guides',
      resourceCount: 8,
      resources: [
        { name: 'Getting Started Guide', path: '/docs/getting-started', description: 'Learn the basics of SupplyChainPro', type: 'Guide', updated: 'April 1, 2026' },
        { name: 'API Reference', path: '/api/docs', description: 'Complete API documentation', type: 'Technical', updated: 'April 5, 2026' },
        { name: 'Integration Guide', path: '/docs/integrations', description: 'Connect with third-party services', type: 'Guide', updated: 'March 28, 2026' },
        { name: 'Security Best Practices', path: '/docs/security', description: 'Keep your data secure', type: 'Guide', updated: 'March 25, 2026' },
        { name: 'Data Modeling Guide', path: '/docs/data-modeling', description: 'Understand data structures', type: 'Technical', updated: 'March 20, 2026' },
        { name: 'Troubleshooting Guide', path: '/docs/troubleshooting', description: 'Common issues and solutions', type: 'Guide', updated: 'March 15, 2026' },
        { name: 'SDK Documentation', path: '/docs/sdk', description: 'Mobile SDK documentation', type: 'Technical', updated: 'March 10, 2026' },
        { name: 'Release Notes', path: '/release-notes', description: 'Version history and updates', type: 'Reference', updated: 'April 8, 2026' },
      ],
    },
    {
      id: 'tutorials',
      name: 'Tutorials & Videos',
      icon: 'video',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      description: 'Step-by-step tutorials and video guides',
      resourceCount: 6,
      resources: [
        { name: 'Video: Getting Started', path: '/tutorials/getting-started', description: '5-minute overview of SupplyChainPro', type: 'Video', duration: '5:32', updated: 'April 2, 2026' },
        { name: 'Video: Inventory Management', path: '/tutorials/inventory', description: 'Manage your inventory effectively', type: 'Video', duration: '12:15', updated: 'March 28, 2026' },
        { name: 'Video: API Integration', path: '/tutorials/api-integration', description: 'Connect your systems', type: 'Video', duration: '18:45', updated: 'March 25, 2026' },
        { name: 'Written Tutorial: Analytics', path: '/tutorials/analytics', description: 'Master the analytics dashboard', type: 'Written', updated: 'March 20, 2026' },
        { name: 'Video: Mobile App Setup', path: '/tutorials/mobile-setup', description: 'Configure mobile access', type: 'Video', duration: '8:22', updated: 'March 15, 2026' },
        { name: 'Written Tutorial: Reports', path: '/tutorials/reports', description: 'Create custom reports', type: 'Written', updated: 'March 10, 2026' },
      ],
    },
    {
      id: 'webinars',
      name: 'Webinars & Events',
      icon: 'presentation',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      description: 'Live and recorded webinars',
      resourceCount: 5,
      resources: [
        { name: 'Supply Chain Trends 2026', path: '/webinars/trends-2026', description: 'Industry insights and predictions', type: 'Recording', date: 'March 15, 2026', duration: '45:00' },
        { name: 'Advanced Analytics Workshop', path: '/webinars/analytics-workshop', description: 'Deep dive into analytics', type: 'Recording', date: 'February 28, 2026', duration: '60:00' },
        { name: 'API Best Practices', path: '/webinars/api-best-practices', description: 'Optimize your API usage', type: 'Recording', date: 'February 10, 2026', duration: '50:00' },
        { name: 'Security Deep Dive (Upcoming)', path: '/webinars/security-deep-dive', description: 'Learn about our security framework', type: 'Upcoming', date: 'May 5, 2026', duration: '55:00' },
        { name: 'Mobile App Masterclass', path: '/webinars/mobile-masterclass', description: 'Get the most from mobile', type: 'Recording', date: 'January 20, 2026', duration: '40:00' },
      ],
    },
    {
      id: 'case-studies',
      name: 'Case Studies',
      icon: 'document',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      description: 'Customer success stories',
      resourceCount: 6,
      resources: [
        { name: 'Global Retail Corp: 50% Efficiency Gain', path: '/case-studies/global-retail', description: 'How a major retailer transformed operations', industry: 'Retail', updated: 'March 20, 2026' },
        { name: 'HealthTech Solutions: Compliance Success', path: '/case-studies/healthtech', description: 'Meeting healthcare compliance requirements', industry: 'Healthcare', updated: 'March 15, 2026' },
        { name: 'EuroLogistics: Real-time Tracking', path: '/case-studies/eurologistics', description: 'Improved visibility across Europe', industry: 'Logistics', updated: 'March 10, 2026' },
        { name: 'Manufacturing Co: Inventory Optimization', path: '/case-studies/manufacturing', description: 'Reduced inventory costs by 30%', industry: 'Manufacturing', updated: 'March 5, 2026' },
        { name: 'Food Distributor: Cold Chain Management', path: '/case-studies/food-distributor', description: 'Maintaining temperature compliance', industry: 'Food & Beverage', updated: 'February 28, 2026' },
        { name: 'Pharma Company: Serialization', path: '/case-studies/pharma', description: 'Track and trace compliance', industry: 'Pharmaceutical', updated: 'February 20, 2026' },
      ],
    },
    {
      id: 'white-papers',
      name: 'White Papers',
      icon: 'academic',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      description: 'In-depth research and analysis',
      resourceCount: 4,
      resources: [
        { name: 'The Future of Supply Chain AI', path: '/white-papers/ai-supply-chain', description: 'How AI is transforming logistics', pages: 24, updated: 'March 1, 2026' },
        { name: 'Sustainability in Supply Chain', path: '/white-papers/sustainability', description: 'Green logistics strategies', pages: 32, updated: 'February 15, 2026' },
        { name: 'Blockchain for Traceability', path: '/white-papers/blockchain', description: 'Distributed ledger applications', pages: 28, updated: 'January 20, 2026' },
        { name: 'Supply Chain Risk Management', path: '/white-papers/risk-management', description: 'Mitigating disruptions', pages: 36, updated: 'December 10, 2025' },
      ],
    },
    {
      id: 'ebooks',
      name: 'E-books & Guides',
      icon: 'book',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      description: 'Free downloadable guides',
      resourceCount: 5,
      resources: [
        { name: 'Supply Chain Management Guide', path: '/ebooks/scm-guide', description: 'Comprehensive introduction', pages: 48, updated: 'March 10, 2026' },
        { name: 'Inventory Optimization Workbook', path: '/ebooks/inventory-workbook', description: 'Practical exercises and templates', pages: 32, updated: 'February 20, 2026' },
        { name: 'API Integration Handbook', path: '/ebooks/api-handbook', description: 'Developer guide to APIs', pages: 56, updated: 'January 25, 2026' },
        { name: 'Data Security Checklist', path: '/ebooks/security-checklist', description: 'Essential security practices', pages: 24, updated: 'January 5, 2026' },
        { name: 'Mobile App User Guide', path: '/ebooks/mobile-guide', description: 'Tips and tricks for mobile users', pages: 40, updated: 'December 15, 2025' },
      ],
    },
    {
      id: 'infographics',
      name: 'Infographics',
      icon: 'document',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      description: 'Visual data and insights',
      resourceCount: 4,
      resources: [
        { name: 'Supply Chain Metrics', path: '/infographics/metrics', description: 'Key performance indicators', type: 'PDF', updated: 'March 5, 2026' },
        { name: 'Digital Transformation Roadmap', path: '/infographics/roadmap', description: 'Step-by-step guide', type: 'PDF', updated: 'February 25, 2026' },
        { name: 'Data Flow Architecture', path: '/infographics/architecture', description: 'How data moves through our system', type: 'PDF', updated: 'February 10, 2026' },
        { name: 'Compliance Overview', path: '/infographics/compliance', description: 'GDPR, SOC 2, ISO explained', type: 'PDF', updated: 'January 30, 2026' },
      ],
    },
    {
      id: 'blog',
      name: 'Blog & News',
      icon: 'newspaper',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      description: 'Latest articles and company news',
      resourceCount: 6,
      resources: [
        { name: 'Introducing SupplyChainPro v3.0', path: '/blog/v3-launch', description: 'What\'s new in our latest release', author: 'Product Team', date: 'April 8, 2026' },
        { name: 'Top 10 Supply Chain Trends for 2026', path: '/blog/trends-2026', description: 'Industry predictions', author: 'Industry Analyst', date: 'April 1, 2026' },
        { name: 'How to Reduce Inventory Costs', path: '/blog/reduce-inventory-costs', description: 'Practical strategies', author: 'Operations Expert', date: 'March 25, 2026' },
        { name: 'Company Announcement: New Funding', path: '/blog/funding-announcement', description: '$50M Series C round', author: 'CEO', date: 'March 18, 2026' },
        { name: 'Customer Spotlight: Global Retail Corp', path: '/blog/customer-spotlight', description: 'How they achieved 50% efficiency gain', author: 'Customer Success', date: 'March 10, 2026' },
        { name: 'Security Update: SOC 2 Certification', path: '/blog/soc2-certification', description: 'Achieving SOC 2 Type II', author: 'Security Team', date: 'March 5, 2026' },
      ],
    },
  ];

  // Filter categories based on search
  const filteredCategories = resourceCategories.filter(category => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      category.name.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query) ||
      category.resources.some(resource =>
        resource.name.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query)
      )
    );
  });

  // Get total resource count
  const totalResources = resourceCategories.reduce((acc, cat) => acc + cat.resources.length, 0);

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      book: <HiOutlineBookOpen className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      presentation: <HiOutlinePresentationChartLine className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      download: <HiOutlineDownload className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      search: <HiOutlineSearch className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      user: <HiOutlineUser className={className} />,
      'user-group': <HiOutlineUserGroup className={className} />,
      mail: <HiOutlineMail className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      heart: <HiOutlineHeart className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      folder: <HiOutlineFolder className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Resource Links Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-green-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-green-100 dark:border-gray-700">
            <HiOutlineBookOpen className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              {config?.badge || "Resources"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Learning"} <span className="bg-linear-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">{config?.title?.highlight || "Resources"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Access our library of documentation, tutorials, case studies, and other resources to help you succeed with SupplyChainPro."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineDocumentText className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Total Resources:</strong> {totalResources}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineFolder className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Categories:</strong> {resourceCategories.length}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineCalendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Last Updated:</strong> {lastUpdated}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
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
            placeholder="Search resources..."
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Resources Grid */}
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
                    {getIcon(category.icon, "w-6 h-6 text-white")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500">{category.resourceCount} resources</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {category.description}
                </p>
              </div>

              {/* Category Resources */}
              <div className="p-5">
                <ul className="space-y-3">
                  {category.resources.slice(0, 4).map((resource, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => {
                          setSelectedResource({ ...resource, category: category.name });
                          setShowResourceModal(true);
                        }}
                        className="group w-full text-left flex items-center justify-between p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white text-sm">
                            {resource.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                            {resource.description}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            {resource.type && (
                              <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                                {resource.type}
                              </span>
                            )}
                            {resource.duration && (
                              <span className="text-xs text-gray-400">{resource.duration}</span>
                            )}
                            {resource.pages && (
                              <span className="text-xs text-gray-400">{resource.pages} pages</span>
                            )}
                          </div>
                        </div>
                        <HiOutlineChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors ml-2 shrink-0" />
                      </button>
                    </li>
                  ))}
                </ul>
                {category.resources.length > 4 && (
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                    className="mt-3 w-full text-center text-sm text-green-600 hover:text-green-700 font-medium py-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  >
                    {expandedCategory === category.id ? 'Show less ↑' : `View all ${category.resourceCount} resources →`}
                  </button>
                )}
                {expandedCategory === category.id && (
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <ul className="space-y-3">
                      {category.resources.slice(4).map((resource, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => {
                              setSelectedResource({ ...resource, category: category.name });
                              setShowResourceModal(true);
                            }}
                            className="group w-full text-left flex items-center justify-between p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex-1">
                              <p className="font-medium text-gray-900 dark:text-white text-sm">
                                {resource.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                {resource.description}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                {resource.type && (
                                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                                    {resource.type}
                                  </span>
                                )}
                                {resource.duration && (
                                  <span className="text-xs text-gray-400">{resource.duration}</span>
                                )}
                                {resource.pages && (
                                  <span className="text-xs text-gray-400">{resource.pages} pages</span>
                                )}
                              </div>
                            </div>
                            <HiOutlineChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors ml-2 shrink-0" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
            <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
            <p className="text-gray-500">No resources match your search.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-green-600 hover:underline text-sm"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Need help finding a resource? <a href="/contact" className="text-green-600 hover:underline">Contact our support team</a></p>
        </div>

        {/* Resource Detail Modal */}
        {showResourceModal && selectedResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowResourceModal(false)}>
            <div className="relative max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-green-600 to-teal-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">{selectedResource.name}</h3>
                  <button onClick={() => setShowResourceModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedResource.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Category:</span>
                    <span className="text-gray-900 dark:text-white">{selectedResource.category}</span>
                  </div>
                  {selectedResource.type && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Type:</span>
                      <span className="text-gray-900 dark:text-white">{selectedResource.type}</span>
                    </div>
                  )}
                  {selectedResource.duration && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="text-gray-900 dark:text-white">{selectedResource.duration}</span>
                    </div>
                  )}
                  {selectedResource.pages && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Pages:</span>
                      <span className="text-gray-900 dark:text-white">{selectedResource.pages}</span>
                    </div>
                  )}
                  {selectedResource.date && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date:</span>
                      <span className="text-gray-900 dark:text-white">{selectedResource.date}</span>
                    </div>
                  )}
                  {selectedResource.updated && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Updated:</span>
                      <span className="text-gray-900 dark:text-white">{selectedResource.updated}</span>
                    </div>
                  )}
                  {selectedResource.author && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Author:</span>
                      <span className="text-gray-900 dark:text-white">{selectedResource.author}</span>
                    </div>
                  )}
                  {selectedResource.industry && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Industry:</span>
                      <span className="text-gray-900 dark:text-white">{selectedResource.industry}</span>
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <a
                    href={selectedResource.path}
                    className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    onClick={() => setShowResourceModal(false)}
                  >
                    {selectedResource.type === 'Video' ? (
                      <>Watch Video <HiOutlineExternalLink className="w-4 h-4" /></>
                    ) : selectedResource.type === 'Recording' ? (
                      <>Watch Recording <HiOutlineExternalLink className="w-4 h-4" /></>
                    ) : selectedResource.type === 'Upcoming' ? (
                      <>Register Now <HiOutlineExternalLink className="w-4 h-4" /></>
                    ) : (
                      <>View Resource <HiOutlineExternalLink className="w-4 h-4" /></>
                    )}
                  </a>
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
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ResourceLinksSection1;