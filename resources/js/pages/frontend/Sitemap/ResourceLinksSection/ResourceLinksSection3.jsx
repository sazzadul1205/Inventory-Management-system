// page/frontend/Sitemap/ResourceLinksSection/ResourceLinksSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

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
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineFilter,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlay,
} from 'react-icons/hi';
import {
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
} from 'react-icons/hi2';

const ResourceLinksSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const videoRef = useRef(null);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Carousel navigation for featured resources
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (config?.featuredResources?.length || featuredResources.length));
  }, [config?.featuredResources?.length, featuredResources.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (config?.featuredResources?.length || featuredResources.length)) % (config?.featuredResources?.length || featuredResources.length));
  }, [config?.featuredResources?.length, featuredResources.length]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && (config?.featuredResources?.length || featuredResources.length) > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, config?.featuredResources?.length, featuredResources.length, nextSlide]);

  // Featured resources for carousel
  const featuredResources = config?.featuredResources || [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of SupplyChainPro in under 30 minutes.",
      icon: "document",
      color: "from-blue-500 to-blue-600",
      path: "/docs/getting-started",
      videoUrl: "/videos/getting-started.mp4"
    },
    {
      title: "API Masterclass",
      description: "Deep dive into our API with practical examples.",
      icon: "video",
      color: "from-purple-500 to-purple-600",
      path: "/webinars/api-best-practices",
      videoUrl: "/videos/api-masterclass.mp4"
    },
    {
      title: "Supply Chain Trends 2026",
      description: "Industry insights and predictions from experts.",
      icon: "presentation",
      color: "from-green-500 to-green-600",
      path: "/webinars/trends-2026",
      videoUrl: "/videos/trends-2026.mp4"
    },
    {
      title: "Security Best Practices",
      description: "Keep your data secure with our security guide.",
      icon: "shield",
      color: "from-red-500 to-red-600",
      path: "/docs/security",
      videoUrl: "/videos/security-best-practices.mp4"
    },
  ];

  // Tabs configuration
  const tabs = [
    { id: 'all', label: 'All Resources', icon: 'folder' },
    { id: 'popular', label: 'Popular', icon: 'star' },
    { id: 'recent', label: 'Recently Added', icon: 'trending-up' },
  ];

  // Resource types for filtering
  const resourceTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'Guide', label: 'Guides' },
    { id: 'Video', label: 'Videos' },
    { id: 'Technical', label: 'Technical Docs' },
    { id: 'Recording', label: 'Webinar Recordings' },
    { id: 'Case Study', label: 'Case Studies' },
    { id: 'White Paper', label: 'White Papers' },
    { id: 'E-book', label: 'E-books' },
  ];

  // Popular resources
  const popularResources = config?.popularResources || [
    { name: 'Getting Started Guide', path: '/docs/getting-started', category: 'Documentation', type: 'Guide', downloads: '15.2K', videoUrl: "/videos/getting-started.mp4" },
    { name: 'API Reference', path: '/api/docs', category: 'Documentation', type: 'Technical', downloads: '12.8K' },
    { name: 'Video: Getting Started', path: '/tutorials/getting-started', category: 'Tutorials', type: 'Video', views: '8.5K', videoUrl: "/videos/getting-started.mp4" },
    { name: 'Supply Chain Management Guide', path: '/ebooks/scm-guide', category: 'E-books', type: 'E-book', downloads: '7.2K' },
    { name: 'Global Retail Corp Case Study', path: '/case-studies/global-retail', category: 'Case Studies', type: 'Case Study', downloads: '5.6K' },
    { name: 'Inventory Optimization Workbook', path: '/ebooks/inventory-workbook', category: 'E-books', type: 'E-book', downloads: '4.9K' },
  ];

  // Recently added resources
  const recentlyAdded = config?.recentlyAdded || [
    { name: 'Introducing SupplyChainPro v3.0', path: '/blog/v3-launch', category: 'Blog', type: 'Article', date: 'April 8, 2026', videoUrl: "/videos/v3-launch.mp4" },
    { name: 'Security Policy Update', path: '/legal/security', category: 'Legal', type: 'Policy', date: 'April 5, 2026' },
    { name: 'Data Processing Agreement v2', path: '/legal/dpa', category: 'Legal', type: 'Agreement', date: 'April 1, 2026' },
    { name: 'Android App v3.0 Guide', path: '/docs/android-v3', category: 'Documentation', type: 'Guide', date: 'March 28, 2026' },
    { name: 'iOS App v3.0 Guide', path: '/docs/ios-v3', category: 'Documentation', type: 'Guide', date: 'March 28, 2026' },
    { name: 'Cookie Policy Update', path: '/legal/cookies', category: 'Legal', type: 'Policy', date: 'March 25, 2026' },
  ];

  // Resource categories and links
  const resourceCategories = useMemo(() => config?.resourceCategories || [
    {
      id: 'documentation',
      name: 'Documentation',
      icon: 'document',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Technical documentation and product guides',
      resourceCount: 8,
      videoUrl: "/videos/documentation-overview.mp4",
      resources: [
        { name: 'Getting Started Guide', path: '/docs/getting-started', description: 'Learn the basics of SupplyChainPro', type: 'Guide', updated: 'April 1, 2026', downloads: '15.2K', videoUrl: "/videos/getting-started.mp4" },
        { name: 'API Reference', path: '/api/docs', description: 'Complete API documentation', type: 'Technical', updated: 'April 5, 2026', downloads: '12.8K' },
        { name: 'Integration Guide', path: '/docs/integrations', description: 'Connect with third-party services', type: 'Guide', updated: 'March 28, 2026', downloads: '8.3K' },
        { name: 'Security Best Practices', path: '/docs/security', description: 'Keep your data secure', type: 'Guide', updated: 'March 25, 2026', downloads: '6.7K', videoUrl: "/videos/security-best-practices.mp4" },
        { name: 'Data Modeling Guide', path: '/docs/data-modeling', description: 'Understand data structures', type: 'Technical', updated: 'March 20, 2026', downloads: '5.2K' },
        { name: 'Troubleshooting Guide', path: '/docs/troubleshooting', description: 'Common issues and solutions', type: 'Guide', updated: 'March 15, 2026', downloads: '4.8K' },
        { name: 'SDK Documentation', path: '/docs/sdk', description: 'Mobile SDK documentation', type: 'Technical', updated: 'March 10, 2026', downloads: '3.9K' },
        { name: 'Release Notes', path: '/release-notes', description: 'Version history and updates', type: 'Reference', updated: 'April 8, 2026', downloads: '11.2K' },
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
      videoUrl: "/videos/tutorials-overview.mp4",
      resources: [
        { name: 'Video: Getting Started', path: '/tutorials/getting-started', description: '5-minute overview of SupplyChainPro', type: 'Video', duration: '5:32', updated: 'April 2, 2026', views: '8.5K', videoUrl: "/videos/getting-started.mp4" },
        { name: 'Video: Inventory Management', path: '/tutorials/inventory', description: 'Manage your inventory effectively', type: 'Video', duration: '12:15', updated: 'March 28, 2026', views: '6.2K', videoUrl: "/videos/inventory-management.mp4" },
        { name: 'Video: API Integration', path: '/tutorials/api-integration', description: 'Connect your systems', type: 'Video', duration: '18:45', updated: 'March 25, 2026', views: '5.1K', videoUrl: "/videos/api-integration.mp4" },
        { name: 'Written Tutorial: Analytics', path: '/tutorials/analytics', description: 'Master the analytics dashboard', type: 'Guide', updated: 'March 20, 2026', views: '4.3K' },
        { name: 'Video: Mobile App Setup', path: '/tutorials/mobile-setup', description: 'Configure mobile access', type: 'Video', duration: '8:22', updated: 'March 15, 2026', views: '3.8K', videoUrl: "/videos/mobile-setup.mp4" },
        { name: 'Written Tutorial: Reports', path: '/tutorials/reports', description: 'Create custom reports', type: 'Guide', updated: 'March 10, 2026', views: '3.2K' },
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
      videoUrl: "/videos/webinars-overview.mp4",
      resources: [
        { name: 'Supply Chain Trends 2026', path: '/webinars/trends-2026', description: 'Industry insights and predictions', type: 'Recording', date: 'March 15, 2026', duration: '45:00', attendees: '1.2K', videoUrl: "/videos/trends-2026.mp4" },
        { name: 'Advanced Analytics Workshop', path: '/webinars/analytics-workshop', description: 'Deep dive into analytics', type: 'Recording', date: 'February 28, 2026', duration: '60:00', attendees: '856', videoUrl: "/videos/analytics-workshop.mp4" },
        { name: 'API Best Practices', path: '/webinars/api-best-practices', description: 'Optimize your API usage', type: 'Recording', date: 'February 10, 2026', duration: '50:00', attendees: '1.1K', videoUrl: "/videos/api-best-practices.mp4" },
        { name: 'Security Deep Dive (Upcoming)', path: '/webinars/security-deep-dive', description: 'Learn about our security framework', type: 'Upcoming', date: 'May 5, 2026', duration: '55:00' },
        { name: 'Mobile App Masterclass', path: '/webinars/mobile-masterclass', description: 'Get the most from mobile', type: 'Recording', date: 'January 20, 2026', duration: '40:00', attendees: '934', videoUrl: "/videos/mobile-masterclass.mp4" },
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
        { name: 'Global Retail Corp: 50% Efficiency Gain', path: '/case-studies/global-retail', description: 'How a major retailer transformed operations', type: 'Case Study', industry: 'Retail', updated: 'March 20, 2026', downloads: '5.6K' },
        { name: 'HealthTech Solutions: Compliance Success', path: '/case-studies/healthtech', description: 'Meeting healthcare compliance requirements', type: 'Case Study', industry: 'Healthcare', updated: 'March 15, 2026', downloads: '4.2K' },
        { name: 'EuroLogistics: Real-time Tracking', path: '/case-studies/eurologistics', description: 'Improved visibility across Europe', type: 'Case Study', industry: 'Logistics', updated: 'March 10, 2026', downloads: '3.8K' },
        { name: 'Manufacturing Co: Inventory Optimization', path: '/case-studies/manufacturing', description: 'Reduced inventory costs by 30%', type: 'Case Study', industry: 'Manufacturing', updated: 'March 5, 2026', downloads: '3.5K' },
        { name: 'Food Distributor: Cold Chain Management', path: '/case-studies/food-distributor', description: 'Maintaining temperature compliance', type: 'Case Study', industry: 'Food & Beverage', updated: 'February 28, 2026', downloads: '2.9K' },
        { name: 'Pharma Company: Serialization', path: '/case-studies/pharma', description: 'Track and trace compliance', type: 'Case Study', industry: 'Pharmaceutical', updated: 'February 20, 2026', downloads: '2.7K' },
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
        { name: 'The Future of Supply Chain AI', path: '/white-papers/ai-supply-chain', description: 'How AI is transforming logistics', type: 'White Paper', pages: 24, updated: 'March 1, 2026', downloads: '3.2K' },
        { name: 'Sustainability in Supply Chain', path: '/white-papers/sustainability', description: 'Green logistics strategies', type: 'White Paper', pages: 32, updated: 'February 15, 2026', downloads: '2.8K' },
        { name: 'Blockchain for Traceability', path: '/white-papers/blockchain', description: 'Distributed ledger applications', type: 'White Paper', pages: 28, updated: 'January 20, 2026', downloads: '2.3K' },
        { name: 'Supply Chain Risk Management', path: '/white-papers/risk-management', description: 'Mitigating disruptions', type: 'White Paper', pages: 36, updated: 'December 10, 2025', downloads: '2.1K' },
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
        { name: 'Supply Chain Management Guide', path: '/ebooks/scm-guide', description: 'Comprehensive introduction', type: 'E-book', pages: 48, updated: 'March 10, 2026', downloads: '7.2K' },
        { name: 'Inventory Optimization Workbook', path: '/ebooks/inventory-workbook', description: 'Practical exercises and templates', type: 'E-book', pages: 32, updated: 'February 20, 2026', downloads: '4.9K' },
        { name: 'API Integration Handbook', path: '/ebooks/api-handbook', description: 'Developer guide to APIs', type: 'E-book', pages: 56, updated: 'January 25, 2026', downloads: '3.8K' },
        { name: 'Data Security Checklist', path: '/ebooks/security-checklist', description: 'Essential security practices', type: 'E-book', pages: 24, updated: 'January 5, 2026', downloads: '3.1K' },
        { name: 'Mobile App User Guide', path: '/ebooks/mobile-guide', description: 'Tips and tricks for mobile users', type: 'E-book', pages: 40, updated: 'December 15, 2025', downloads: '2.6K' },
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
        { name: 'Supply Chain Metrics', path: '/infographics/metrics', description: 'Key performance indicators', type: 'Infographic', updated: 'March 5, 2026', downloads: '2.1K' },
        { name: 'Digital Transformation Roadmap', path: '/infographics/roadmap', description: 'Step-by-step guide', type: 'Infographic', updated: 'February 25, 2026', downloads: '1.9K' },
        { name: 'Data Flow Architecture', path: '/infographics/architecture', description: 'How data moves through our system', type: 'Infographic', updated: 'February 10, 2026', downloads: '1.6K' },
        { name: 'Compliance Overview', path: '/infographics/compliance', description: 'GDPR, SOC 2, ISO explained', type: 'Infographic', updated: 'January 30, 2026', downloads: '1.8K' },
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
        { name: 'Introducing SupplyChainPro v3.0', path: '/blog/v3-launch', description: 'What\'s new in our latest release', type: 'Article', author: 'Product Team', date: 'April 8, 2026', reads: '3.2K', videoUrl: "/videos/v3-launch.mp4" },
        { name: 'Top 10 Supply Chain Trends for 2026', path: '/blog/trends-2026', description: 'Industry predictions', type: 'Article', author: 'Industry Analyst', date: 'April 1, 2026', reads: '2.8K' },
        { name: 'How to Reduce Inventory Costs', path: '/blog/reduce-inventory-costs', description: 'Practical strategies', type: 'Article', author: 'Operations Expert', date: 'March 25, 2026', reads: '2.1K' },
        { name: 'Company Announcement: New Funding', path: '/blog/funding-announcement', description: '$50M Series C round', type: 'Announcement', author: 'CEO', date: 'March 18, 2026', reads: '4.5K' },
        { name: 'Customer Spotlight: Global Retail Corp', path: '/blog/customer-spotlight', description: 'How they achieved 50% efficiency gain', type: 'Article', author: 'Customer Success', date: 'March 10, 2026', reads: '1.9K' },
        { name: 'Security Update: SOC 2 Certification', path: '/blog/soc2-certification', description: 'Achieving SOC 2 Type II', type: 'Announcement', author: 'Security Team', date: 'March 5, 2026', reads: '2.3K' },
      ],
    },
  ], [config?.resourceCategories]);

  // Get all resources flattened for filtering
  const allResources = useMemo(() => {
    const resources = [];
    resourceCategories.forEach(category => {
      category.resources.forEach(resource => {
        resources.push({
          ...resource,
          categoryName: category.name,
          categoryId: category.id,
          categoryIcon: category.icon,
          categoryColor: category.color,
        });
      });
    });
    return resources;
  }, [resourceCategories]);

  // Filter resources based on search and type
  const filteredResources = useMemo(() => {
    let filtered = allResources;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource =>
        resource.name.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.categoryName.toLowerCase().includes(query)
      );
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(resource => resource.type === selectedType);
    }

    return filtered;
  }, [allResources, searchQuery, selectedType]);

  // Filter categories for the grid view
  const filteredCategories = useMemo(() => {
    if (!searchQuery && selectedType === 'all') return resourceCategories;

    return resourceCategories
      .map(category => ({
        ...category,
        resources: category.resources.filter(resource => {
          if (searchQuery && !resource.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !resource.description.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
          }
          if (selectedType !== 'all' && resource.type !== selectedType) {
            return false;
          }
          return true;
        }),
      }))
      .filter(category => category.resources.length > 0);
  }, [resourceCategories, searchQuery, selectedType]);

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
      star: <HiOutlineStar className={className} />,
      'trending-up': <HiOutlineTrendingUp className={className} />,
      'view-grid': <HiOutlineViewGrid className={className} />,
      'view-list': <HiOutlineViewList className={className} />,
      filter: <HiOutlineFilter className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Resource Links Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-resource" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-resource)" />
        </svg>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-teal-200 dark:bg-teal-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineBookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Resources"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Learning"} <span className="bg-linear-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">{config?.title?.highlight || "Resources"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Access our library of documentation, tutorials, case studies, and other resources to help you succeed with SupplyChainPro."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineDocumentText className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Total Resources:</strong> {totalResources}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineFolder className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Categories:</strong> {resourceCategories.length}
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

        {/* Featured Resources Carousel */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              ref={carouselRef}
            >
              {featuredResources.map((resource, idx) => (
                <div key={idx} className="w-full shrink-0">
                  <div className={`relative h-80 rounded-3xl overflow-hidden bg-linear-to-r ${resource.color}`}>
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                        {getIcon(resource.icon, "w-10 h-10 text-white")}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{resource.title}</h2>
                      <p className="text-white/90 text-lg mb-6 max-w-2xl">{resource.description}</p>
                      <div className="flex gap-3">
                        <a
                          href={resource.path}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                        >
                          Explore Now
                          <HiOutlineArrowRight className="w-4 h-4" />
                        </a>
                        {resource.videoUrl && (
                          <button
                            onClick={() => { setCurrentVideo(resource.videoUrl); setShowVideoModal(true); }}
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

            {featuredResources.length > 1 && (
              <>
                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                  <HiOutlineChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                  <HiOutlineChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {featuredResources.map((_, idx) => (
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
                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
            >
              {tab.icon === 'folder' ? <HiOutlineFolder className="w-4 h-4" /> :
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
              placeholder="Search resources..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineFilter className="w-5 h-5 text-gray-400" />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none cursor-pointer"
            >
              {resourceTypes.map(type => (
                <option key={type.id} value={type.id}>{type.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* All Resources Tab */}
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

            {/* Resources Display - Grid or List */}
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
                          {getIcon(category.icon, "w-6 h-6 text-white")}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                            {category.name}
                          </h3>
                          <p className="text-xs text-gray-500">{category.resources.length} resources</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {category.description}
                      </p>
                      {category.videoUrl && (
                        <button
                          onClick={() => { setCurrentVideo(category.videoUrl); setShowVideoModal(true); }}
                          className="mt-2 text-xs text-green-600 hover:text-green-700 flex items-center gap-1"
                        >
                          <HiOutlinePlay className="w-3 h-3" />
                          Watch Overview
                        </button>
                      )}
                    </div>

                    {/* Category Resources */}
                    <div className="p-5">
                      <ul className="space-y-3">
                        {category.resources.slice(0, 3).map((resource, idx) => (
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
                                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                                    {resource.type}
                                  </span>
                                  {resource.videoUrl && (
                                    <span className="text-blue-500 text-xs flex items-center gap-1">
                                      <HiOutlinePlay className="w-3 h-3" />
                                      Video
                                    </span>
                                  )}
                                </div>
                              </div>
                              <HiOutlineChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors ml-2 shrink-0" />
                            </button>
                          </li>
                        ))}
                      </ul>
                      {category.resources.length > 3 && (
                        <button
                          onClick={() => {
                            setSelectedResource({
                              name: category.name,
                              description: category.description,
                              category: category.name,
                              allResources: category.resources,
                              isCategoryView: true
                            });
                            setShowResourceModal(true);
                          }}
                          className="mt-3 w-full text-center text-sm text-green-600 hover:text-green-700 font-medium py-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                        >
                          View all {category.resources.length} resources →
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-3">
                {filteredResources.map((resource, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedResource(resource);
                      setShowResourceModal(true);
                    }}
                    className="w-full text-left bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{resource.name}</h3>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                            {resource.type}
                          </span>
                          <span className="text-xs text-gray-400">{resource.categoryName}</span>
                          {resource.videoUrl && (
                            <span className="text-blue-500 text-xs flex items-center gap-1">
                              <HiOutlinePlay className="w-3 h-3" />
                              Video
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{resource.description}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                          {resource.updated && <span>Updated: {resource.updated}</span>}
                          {resource.date && <span>Date: {resource.date}</span>}
                          {resource.duration && <span>Duration: {resource.duration}</span>}
                          {resource.pages && <span>{resource.pages} pages</span>}
                          {resource.downloads && <span>⬇️ {resource.downloads} downloads</span>}
                          {resource.views && <span>👁️ {resource.views} views</span>}
                        </div>
                      </div>
                      <HiOutlineChevronRight className="w-5 h-5 text-gray-400 self-center" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredCategories.length === 0 && filteredResources.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
                <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-gray-500">No resources match your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedType('all');
                  }}
                  className="mt-3 text-green-600 hover:underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}

        {/* Popular Tab */}
        {activeTab === 'popular' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineStar className="w-5 h-5 text-yellow-500" />
              Most Popular Resources
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Resource Name</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Category</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Type</th>
                    <th className="text-right p-3 font-semibold text-gray-900 dark:text-white">Downloads/Views</th>
                  </tr>
                </thead>
                <tbody>
                  {popularResources.map((resource, idx) => (
                    <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="p-3">
                        <button
                          onClick={() => {
                            setSelectedResource({ ...resource, category: resource.category });
                            setShowResourceModal(true);
                          }}
                          className="font-medium text-gray-900 dark:text-white hover:text-green-600 transition-colors flex items-center gap-2"
                        >
                          {resource.name}
                          {resource.videoUrl && <HiOutlinePlay className="w-3 h-3 text-blue-500" />}
                        </button>
                      </td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">{resource.category}</td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                          {resource.type}
                        </span>
                      </td>
                      <td className="p-3 text-right text-gray-600 dark:text-gray-400">
                        {resource.downloads || resource.views}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Recent Tab */}
        {activeTab === 'recent' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineTrendingUp className="w-5 h-5 text-green-500" />
              Recently Added Resources
            </h2>
            <div className="space-y-3">
              {recentlyAdded.map((resource, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedResource({ ...resource, category: resource.category });
                    setShowResourceModal(true);
                  }}
                  className="w-full text-left block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 dark:text-white">{resource.name}</p>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                          {resource.type}
                        </span>
                        {resource.videoUrl && <HiOutlinePlay className="w-3 h-3 text-blue-500" />}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Category: {resource.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{resource.date}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Can't find what you're looking for? <a href="/contact" className="text-green-600 hover:underline">Contact our support team</a></p>
        </div>

        {/* Resource Detail Modal */}
        {showResourceModal && selectedResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowResourceModal(false)}>
            <div className="relative max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-green-600 to-teal-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">{selectedResource.name}</h3>
                  <button onClick={() => setShowResourceModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto">
                {selectedResource.isCategoryView ? (
                  <>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedResource.description}</p>
                    <ul className="space-y-3">
                      {selectedResource.allResources.map((resource, idx) => (
                        <li key={idx}>
                          <a
                            href={resource.path}
                            className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setShowResourceModal(false)}
                          >
                            <p className="font-medium text-gray-900 dark:text-white">{resource.name}</p>
                            <p className="text-sm text-gray-500 mt-0.5">{resource.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                                {resource.type}
                              </span>
                              {resource.videoUrl && (
                                <span className="text-blue-500 text-xs flex items-center gap-1">
                                  <HiOutlinePlay className="w-3 h-3" />
                                  Video
                                </span>
                              )}
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedResource.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Category:</span>
                        <span className="text-gray-900 dark:text-white">{selectedResource.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Type:</span>
                        <span className="text-gray-900 dark:text-white">{selectedResource.type}</span>
                      </div>
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
                      {selectedResource.downloads && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Downloads:</span>
                          <span className="text-gray-900 dark:text-white">{selectedResource.downloads}</span>
                        </div>
                      )}
                      {selectedResource.views && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Views:</span>
                          <span className="text-gray-900 dark:text-white">{selectedResource.views}</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-6 flex gap-3">
                      <a
                        href={selectedResource.path}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
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
                      {selectedResource.videoUrl && (
                        <button
                          onClick={() => { setCurrentVideo(selectedResource.videoUrl); setShowVideoModal(true); setShowResourceModal(false); }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
                        >
                          <HiOutlinePlay className="w-4 h-4" />
                          Watch
                        </button>
                      )}
                    </div>
                  </>
                )}
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

export default ResourceLinksSection3;