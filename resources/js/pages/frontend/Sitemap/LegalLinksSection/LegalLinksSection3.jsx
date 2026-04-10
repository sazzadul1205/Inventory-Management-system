// page/frontend/Sitemap/LegalLinksSection/LegalLinksSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineDocumentText,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlineGlobe,
  HiOutlineDatabase,
  HiOutlineChip,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineSearch,
  HiOutlineExternalLink,
  HiOutlineInformationCircle,
  HiOutlineBriefcase,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlinePrinter,
  HiOutlineX,
  HiOutlineFolder,
  HiOutlineFlag,
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
  HiOutlineFingerPrint,
  HiOutlineBuildingOffice,
  HiOutlineArrowRight,
} from 'react-icons/hi2';
import { MdOutlineCookie as HiOutlineCookie, } from "react-icons/md";

const LegalLinksSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const videoRef = useRef(null);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Carousel navigation for featured legal topics
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (config?.featuredTopics?.length || featuredTopics.length));
  }, [config?.featuredTopics?.length, featuredTopics.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (config?.featuredTopics?.length || featuredTopics.length)) % (config?.featuredTopics?.length || featuredTopics.length));
  }, [config?.featuredTopics?.length, featuredTopics.length]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && (config?.featuredTopics?.length || featuredTopics.length) > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, config?.featuredTopics?.length, featuredTopics.length, nextSlide]);

  // Featured legal topics for carousel
  const featuredTopics = config?.featuredTopics || [
    {
      title: "Data Privacy Rights",
      description: "Learn about your rights under GDPR and CCPA regulations.",
      icon: "lock",
      color: "from-green-500 to-green-600",
      path: "/legal/gdpr",
      videoUrl: "/videos/gdpr-overview.mp4"
    },
    {
      title: "Security Compliance",
      description: "Understanding our SOC 2 and ISO 27001 certifications.",
      icon: "shield",
      color: "from-purple-500 to-purple-600",
      path: "/legal/security",
      videoUrl: "/videos/security-compliance.mp4"
    },
    {
      title: "Terms of Service",
      description: "Key terms and conditions for using our platform.",
      icon: "scale",
      color: "from-blue-500 to-blue-600",
      path: "/legal/terms",
      videoUrl: "/videos/terms-overview.mp4"
    },
    {
      title: "Data Processing",
      description: "How we handle and protect your data as a processor.",
      icon: "database",
      color: "from-orange-500 to-orange-600",
      path: "/legal/dpa",
      videoUrl: "/videos/dpa-overview.mp4"
    },
  ];

  // Tabs configuration
  const tabs = [
    { id: 'all', label: 'All Documents', icon: 'folder' },
    { id: 'popular', label: 'Popular', icon: 'star' },
    { id: 'recent', label: 'Recently Updated', icon: 'trending-up' },
  ];

  // Category filters
  const categoryFilters = [
    { id: 'all', label: 'All Categories' },
    { id: 'agreements', label: 'Legal Agreements' },
    { id: 'privacy', label: 'Privacy & Data Protection' },
    { id: 'security', label: 'Security & Compliance' },
    { id: 'policies', label: 'Company Policies' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'compliance', label: 'Regulatory Compliance' },
    { id: 'disclosures', label: 'Legal Disclosures' },
    { id: 'reporting', label: 'Reporting & Transparency' },
  ];

  // Popular documents
  const popularDocuments = config?.popularDocuments || [
    { name: 'Terms of Service', path: '/legal/terms', category: 'Legal Agreements', views: '125K', version: 'v3.0', videoUrl: "/videos/terms-overview.mp4" },
    { name: 'Privacy Policy', path: '/legal/privacy', category: 'Privacy & Data Protection', views: '98K', version: 'v3.0', videoUrl: "/videos/privacy-policy.mp4" },
    { name: 'Data Processing Agreement', path: '/legal/dpa', category: 'Legal Agreements', views: '45K', version: 'v2.0', videoUrl: "/videos/dpa-overview.mp4" },
    { name: 'Cookie Policy', path: '/legal/cookies', category: 'Privacy & Data Protection', views: '32K', version: 'v2.0' },
    { name: 'Security Policy', path: '/legal/security', category: 'Security & Compliance', views: '28K', version: 'v2.0', videoUrl: "/videos/security-policy.mp4" },
    { name: 'GDPR Compliance', path: '/legal/gdpr', category: 'Privacy & Data Protection', views: '25K', version: 'v2.0', videoUrl: "/videos/gdpr-overview.mp4" },
  ];

  // Recently updated documents
  const recentlyUpdated = config?.recentlyUpdated || [
    { name: 'Terms of Service', path: '/legal/terms', category: 'Legal Agreements', date: 'April 8, 2026', version: 'v3.0', videoUrl: "/videos/terms-overview.mp4" },
    { name: 'Privacy Policy', path: '/legal/privacy', category: 'Privacy & Data Protection', date: 'April 8, 2026', version: 'v3.0', videoUrl: "/videos/privacy-policy.mp4" },
    { name: 'Cookie Policy', path: '/legal/cookies', category: 'Privacy & Data Protection', date: 'April 8, 2026', version: 'v2.0' },
    { name: 'GDPR Compliance', path: '/legal/gdpr', category: 'Privacy & Data Protection', date: 'April 8, 2026', version: 'v2.0', videoUrl: "/videos/gdpr-overview.mp4" },
    { name: 'Security Policy', path: '/legal/security', category: 'Security & Compliance', date: 'April 5, 2026', version: 'v2.0', videoUrl: "/videos/security-policy.mp4" },
    { name: 'Data Processing Agreement', path: '/legal/dpa', category: 'Legal Agreements', date: 'April 1, 2026', version: 'v2.0', videoUrl: "/videos/dpa-overview.mp4" },
  ];

  // Legal categories and links
  const legalCategories = useMemo(() => config?.legalCategories || [
    {
      id: 'agreements',
      name: 'Legal Agreements',
      icon: 'document',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Binding legal agreements governing our relationship',
      linkCount: 6,
      videoUrl: "/videos/legal-agreements.mp4",
      links: [
        { name: 'Terms of Service', path: '/legal/terms', description: 'Terms and conditions for using our Services', updated: 'April 8, 2026', version: 'v3.0', popular: true, videoUrl: "/videos/terms-overview.mp4" },
        { name: 'End User License Agreement (EULA)', path: '/legal/eula', description: 'Software license terms', updated: 'March 15, 2026', version: 'v2.1' },
        { name: 'Master Subscription Agreement', path: '/legal/msa', description: 'Enterprise subscription terms', updated: 'March 1, 2026', version: 'v2.0' },
        { name: 'Data Processing Agreement (DPA)', path: '/legal/dpa', description: 'GDPR-compliant data processing terms', updated: 'April 1, 2026', version: 'v2.0', popular: true, videoUrl: "/videos/dpa-overview.mp4" },
        { name: 'Service Level Agreement (SLA)', path: '/legal/sla', description: 'Service availability commitments', updated: 'February 15, 2026', version: 'v1.5' },
        { name: 'Business Associate Agreement (BAA)', path: '/legal/baa', description: 'HIPAA compliance agreement', updated: 'January 10, 2026', version: 'v1.0' },
      ],
    },
    {
      id: 'privacy',
      name: 'Privacy & Data Protection',
      icon: 'lock',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      description: 'How we collect, use, and protect your data',
      linkCount: 7,
      videoUrl: "/videos/privacy-overview.mp4",
      links: [
        { name: 'Privacy Policy', path: '/legal/privacy', description: 'How we handle your personal information', updated: 'April 8, 2026', version: 'v3.0', popular: true, videoUrl: "/videos/privacy-policy.mp4" },
        { name: 'Cookie Policy', path: '/legal/cookies', description: 'How we use cookies and tracking technologies', updated: 'April 8, 2026', version: 'v2.0', popular: true },
        { name: 'GDPR Compliance', path: '/legal/gdpr', description: 'EU data protection compliance', updated: 'April 8, 2026', version: 'v2.0', popular: true, videoUrl: "/videos/gdpr-overview.mp4" },
        { name: 'CCPA Compliance', path: '/legal/ccpa', description: 'California Consumer Privacy Act', updated: 'March 20, 2026', version: 'v1.5' },
        { name: 'Data Retention Policy', path: '/legal/data-retention', description: 'How long we keep your data', updated: 'March 10, 2026', version: 'v1.0' },
        { name: 'Data Subject Request Form', path: '/legal/data-request', description: 'Exercise your privacy rights', updated: 'February 28, 2026', version: 'v1.0' },
        { name: 'Privacy Shield Notice', path: '/legal/privacy-shield', description: 'EU-US data transfer framework', updated: 'January 15, 2026', version: 'v1.0' },
      ],
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: 'shield',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      description: 'Security practices and compliance certifications',
      linkCount: 8,
      videoUrl: "/videos/security-overview.mp4",
      links: [
        { name: 'Security Policy', path: '/legal/security', description: 'Our security program overview', updated: 'April 5, 2026', version: 'v2.0', popular: true, videoUrl: "/videos/security-policy.mp4" },
        { name: 'Acceptable Use Policy', path: '/legal/aup', description: 'Rules for using our Services', updated: 'March 20, 2026', version: 'v1.5' },
        { name: 'Vulnerability Disclosure Program', path: '/security/disclosure', description: 'Report security vulnerabilities', updated: 'April 3, 2026', version: 'v1.0' },
        { name: 'Bug Bounty Program', path: '/security/bug-bounty', description: 'Rewards for security researchers', updated: 'April 2, 2026', version: 'v1.0' },
        { name: 'SOC 2 Type II Report', path: '/legal/soc2', description: 'Service Organization Control report', updated: 'March 15, 2026', version: '2025' },
        { name: 'ISO 27001 Certification', path: '/legal/iso27001', description: 'Information security management', updated: 'March 10, 2026', version: '2025' },
        { name: 'PCI DSS Compliance', path: '/legal/pci', description: 'Payment card industry compliance', updated: 'February 28, 2026', version: 'v1.0' },
        { name: 'Subprocessor List', path: '/legal/subprocessors', description: 'Third-party data processors', updated: 'March 15, 2026', version: 'v2.0' },
      ],
    },
    {
      id: 'policies',
      name: 'Company Policies',
      icon: 'building',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      description: 'Internal and external company policies',
      linkCount: 6,
      links: [
        { name: 'Code of Conduct', path: '/legal/code-of-conduct', description: 'Ethical standards and behavior', updated: 'February 15, 2026', version: 'v1.0' },
        { name: 'Anti-Corruption Policy', path: '/legal/anti-corruption', description: 'Anti-bribery and corruption', updated: 'February 10, 2026', version: 'v1.0' },
        { name: 'Export Control Policy', path: '/legal/export-control', description: 'International trade compliance', updated: 'January 25, 2026', version: 'v1.0' },
        { name: 'Modern Slavery Statement', path: '/legal/modern-slavery', description: 'UK Modern Slavery Act compliance', updated: 'January 20, 2026', version: 'v1.0' },
        { name: 'Environmental Policy', path: '/legal/environmental', description: 'Sustainability commitments', updated: 'January 15, 2026', version: 'v1.0' },
        { name: 'Equal Opportunity Policy', path: '/legal/equal-opportunity', description: 'Non-discrimination statement', updated: 'January 10, 2026', version: 'v1.0' },
      ],
    },
    {
      id: 'intellectual-property',
      name: 'Intellectual Property',
      icon: 'scale',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      description: 'IP rights and usage guidelines',
      linkCount: 5,
      links: [
        { name: 'Copyright Policy', path: '/legal/copyright', description: 'Copyright infringement claims', updated: 'March 5, 2026', version: 'v1.0' },
        { name: 'Trademark Guidelines', path: '/legal/trademark', description: 'Use of our trademarks', updated: 'February 20, 2026', version: 'v1.0' },
        { name: 'DMCA Notice', path: '/legal/dmca', description: 'Digital Millennium Copyright Act', updated: 'February 15, 2026', version: 'v1.0' },
        { name: 'Open Source Attribution', path: '/legal/open-source', description: 'Third-party open source licenses', updated: 'March 28, 2026', version: 'v1.0' },
        { name: 'Patent Notice', path: '/legal/patents', description: 'Patent information', updated: 'January 5, 2026', version: 'v1.0' },
      ],
    },
    {
      id: 'compliance',
      name: 'Regulatory Compliance',
      icon: 'globe',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      description: 'Industry and regional compliance information',
      linkCount: 6,
      links: [
        { name: 'GDPR Compliance Center', path: '/legal/gdpr-center', description: 'GDPR resources and information', updated: 'April 8, 2026', version: 'v1.0' },
        { name: 'CCPA Compliance Center', path: '/legal/ccpa-center', description: 'California privacy rights', updated: 'March 20, 2026', version: 'v1.0' },
        { name: 'HIPAA Compliance', path: '/legal/hipaa', description: 'Healthcare data compliance', updated: 'February 28, 2026', version: 'v1.0' },
        { name: 'FedRAMP Compliance', path: '/legal/fedramp', description: 'Federal risk management', updated: 'February 15, 2026', version: 'v1.0' },
        { name: 'SOC Reports', path: '/legal/soc-reports', description: 'Service Organization Control reports', updated: 'March 15, 2026', version: '2025' },
        { name: 'Compliance Certificates', path: '/legal/certificates', description: 'Security and compliance certificates', updated: 'March 10, 2026', version: '2025' },
      ],
    },
    {
      id: 'disclosures',
      name: 'Legal Disclosures',
      icon: 'info',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      description: 'Required legal disclosures',
      linkCount: 5,
      links: [
        { name: 'Imprint', path: '/legal/imprint', description: 'Legal disclosure information', updated: 'January 1, 2026', version: 'v1.0' },
        { name: 'Terms of Sale', path: '/legal/terms-of-sale', description: 'Purchase terms and conditions', updated: 'February 1, 2026', version: 'v1.0' },
        { name: 'Return Policy', path: '/legal/returns', description: 'Refund and cancellation policy', updated: 'January 15, 2026', version: 'v1.0' },
        { name: 'Warranty Disclaimer', path: '/legal/warranty', description: 'Limited warranty information', updated: 'January 10, 2026', version: 'v1.0' },
        { name: 'Legal Notice', path: '/legal/notice', description: 'Copyright and legal information', updated: 'January 5, 2026', version: 'v1.0' },
      ],
    },
    {
      id: 'reporting',
      name: 'Reporting & Transparency',
      icon: 'flag',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      description: 'Transparency reports and disclosures',
      linkCount: 4,
      links: [
        { name: 'Transparency Report', path: '/legal/transparency', description: 'Government data requests', updated: 'March 1, 2026', version: '2025' },
        { name: 'Government Requests', path: '/legal/gov-requests', description: 'Law enforcement data requests', updated: 'February 15, 2026', version: '2025' },
        { name: 'Copyright Takedown Report', path: '/legal/copyright-report', description: 'DMCA takedown statistics', updated: 'February 1, 2026', version: '2025' },
        { name: 'Data Breach History', path: '/legal/breach-history', description: 'Security incident disclosures', updated: 'January 15, 2026', version: 'v1.0' },
      ],
    },
  ], [config?.legalCategories]);

  // Get all documents flattened for filtering
  const allDocuments = useMemo(() => {
    const docs = [];
    legalCategories.forEach(category => {
      category.links.forEach(link => {
        docs.push({
          ...link,
          categoryName: category.name,
          categoryId: category.id,
          categoryIcon: category.icon,
          categoryColor: category.color,
        });
      });
    });
    return docs;
  }, [legalCategories]);

  // Filter documents based on search and category
  const filteredDocuments = useMemo(() => {
    let filtered = allDocuments;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(doc =>
        doc.name.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query) ||
        doc.categoryName.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(doc => doc.categoryId === selectedCategory);
    }

    return filtered;
  }, [allDocuments, searchQuery, selectedCategory]);

  // Filter categories for the grid view
  const filteredCategories = useMemo(() => {
    if (!searchQuery && selectedCategory === 'all') return legalCategories;

    return legalCategories
      .map(category => ({
        ...category,
        links: category.links.filter(link => {
          if (searchQuery && !link.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !link.description.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
          }
          return true;
        }),
      }))
      .filter(category => category.links.length > 0);
  }, [legalCategories, searchQuery, selectedCategory]);

  // Get total link count
  const totalLinks = legalCategories.reduce((acc, cat) => acc + cat.links.length, 0);

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      scale: <HiOutlineScale className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
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
      heart: <HiOutlineHeart className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      folder: <HiOutlineFolder className={className} />,
      flag: <HiOutlineFlag className={className} />,
      cookie: <HiOutlineCookie className={className} />,
      fingerprint: <HiOutlineFingerPrint className={className} />,
      star: <HiOutlineStar className={className} />,
      'trending-up': <HiOutlineTrendingUp className={className} />,
      'view-grid': <HiOutlineViewGrid className={className} />,
      'view-list': <HiOutlineViewList className={className} />,
      filter: <HiOutlineFilter className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Legal Links Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-legal" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-legal)" />
        </svg>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineScale className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Legal & Compliance"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Legal"} <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Resources"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Access our legal documents, policies, and compliance information. Find terms of service, privacy policies, security documentation, and more."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineDocumentText className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Total Documents:</strong> {totalLinks}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <HiOutlineFolder className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Categories:</strong> {legalCategories.length}
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

        {/* Featured Topics Carousel */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              ref={carouselRef}
            >
              {featuredTopics.map((topic, idx) => (
                <div key={idx} className="w-full shrink-0">
                  <div className={`relative h-80 rounded-3xl overflow-hidden bg-linear-to-r ${topic.color}`}>
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                        {getIcon(topic.icon, "w-10 h-10 text-white")}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{topic.title}</h2>
                      <p className="text-white/90 text-lg mb-6 max-w-2xl">{topic.description}</p>
                      <div className="flex gap-3">
                        <a
                          href={topic.path}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                        >
                          Learn More
                          <HiOutlineArrowRight className="w-4 h-4" />
                        </a>
                        {topic.videoUrl && (
                          <button
                            onClick={() => { setCurrentVideo(topic.videoUrl); setShowVideoModal(true); }}
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

            {featuredTopics.length > 1 && (
              <>
                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                  <HiOutlineChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                  <HiOutlineChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {featuredTopics.map((_, idx) => (
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
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
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
              placeholder="Search legal documents..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineFilter className="w-5 h-5 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer"
            >
              {categoryFilters.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* All Documents Tab */}
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

            {/* Documents Display - Grid or List */}
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
                          <p className="text-xs text-gray-500">{category.links.length} documents</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {category.description}
                      </p>
                      {category.videoUrl && (
                        <button
                          onClick={() => { setCurrentVideo(category.videoUrl); setShowVideoModal(true); }}
                          className="mt-2 text-xs text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
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
                            <button
                              onClick={() => {
                                setSelectedDocument({ ...link, category: category.name });
                                setShowLegalModal(true);
                              }}
                              className="group w-full text-left flex items-center justify-between p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                                    {link.name}
                                  </p>
                                  {link.version && (
                                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500">
                                      {link.version}
                                    </span>
                                  )}
                                  {link.popular && (
                                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                                      Popular
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                  {link.description}
                                </p>
                                {link.videoUrl && (
                                  <span className="text-blue-500 text-xs flex items-center gap-1 mt-1">
                                    <HiOutlinePlay className="w-3 h-3" />
                                    Video available
                                  </span>
                                )}
                              </div>
                              <HiOutlineChevronRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors ml-2 shrink-0" />
                            </button>
                          </li>
                        ))}
                      </ul>
                      {category.links.length > 3 && (
                        <button
                          onClick={() => {
                            setSelectedDocument({
                              name: category.name,
                              description: category.description,
                              category: category.name,
                              allDocuments: category.links,
                              isCategoryView: true
                            });
                            setShowLegalModal(true);
                          }}
                          className="mt-3 w-full text-center text-sm text-indigo-600 hover:text-indigo-700 font-medium py-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                        >
                          View all {category.links.length} documents →
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-3">
                {filteredDocuments.map((doc, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedDocument({ ...doc, category: doc.categoryName });
                      setShowLegalModal(true);
                    }}
                    className="w-full text-left bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{doc.name}</h3>
                          {doc.version && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                              {doc.version}
                            </span>
                          )}
                          <span className="text-xs text-gray-400">{doc.categoryName}</span>
                          {doc.videoUrl && (
                            <span className="text-blue-500 text-xs flex items-center gap-1">
                              <HiOutlinePlay className="w-3 h-3" />
                              Video
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                          <span>Updated: {doc.updated}</span>
                        </div>
                      </div>
                      <HiOutlineChevronRight className="w-5 h-5 text-gray-400 self-center" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredCategories.length === 0 && filteredDocuments.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
                <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-gray-500">No legal documents match your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-3 text-indigo-600 hover:underline text-sm"
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
              Most Popular Legal Documents
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Document Name</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Category</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Version</th>
                    <th className="text-right p-3 font-semibold text-gray-900 dark:text-white">Views</th>
                  </tr>
                </thead>
                <tbody>
                  {popularDocuments.map((doc, idx) => (
                    <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="p-3">
                        <button
                          onClick={() => {
                            setSelectedDocument({ ...doc, description: 'Legal document', category: doc.category });
                            setShowLegalModal(true);
                          }}
                          className="font-medium text-gray-900 dark:text-white hover:text-indigo-600 transition-colors flex items-center gap-2"
                        >
                          {doc.name}
                          {doc.videoUrl && <HiOutlinePlay className="w-3 h-3 text-blue-500" />}
                        </button>
                      </td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">{doc.category}</td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                          {doc.version}
                        </span>
                      </td>
                      <td className="p-3 text-right text-gray-600 dark:text-gray-400">{doc.views}</td>
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
              Recently Updated Documents
            </h2>
            <div className="space-y-3">
              {recentlyUpdated.map((doc, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedDocument({ ...doc, description: 'Legal document', category: doc.category });
                    setShowLegalModal(true);
                  }}
                  className="w-full text-left block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900 dark:text-white">{doc.name}</p>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700">
                          {doc.version}
                        </span>
                        {doc.videoUrl && <HiOutlinePlay className="w-3 h-3 text-blue-500" />}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Category: {doc.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{doc.date}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>For legal inquiries, contact us at <a href="mailto:legal@supplychainpro.com" className="text-indigo-600 hover:underline">legal@supplychainpro.com</a></p>
        </div>

        {/* Legal Document Modal */}
        {showLegalModal && selectedDocument && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowLegalModal(false)}>
            <div className="relative max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">{selectedDocument.name}</h3>
                  <button onClick={() => setShowLegalModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto">
                {selectedDocument.isCategoryView ? (
                  <>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedDocument.description}</p>
                    <ul className="space-y-3">
                      {selectedDocument.allDocuments.map((doc, idx) => (
                        <li key={idx}>
                          <a
                            href={doc.path}
                            className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setShowLegalModal(false)}
                          >
                            <div className="flex items-center gap-2 flex-wrap">
                              <p className="font-medium text-gray-900 dark:text-white">{doc.name}</p>
                              {doc.version && (
                                <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                                  {doc.version}
                                </span>
                              )}
                              {doc.videoUrl && <HiOutlinePlay className="w-3 h-3 text-blue-500" />}
                            </div>
                            <p className="text-sm text-gray-500 mt-0.5">{doc.description}</p>
                            <p className="text-xs text-gray-400 mt-1">Updated: {doc.updated}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedDocument.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Category:</span>
                        <span className="text-gray-900 dark:text-white">{selectedDocument.category}</span>
                      </div>
                      {selectedDocument.version && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Version:</span>
                          <span className="text-gray-900 dark:text-white">{selectedDocument.version}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-500">Last Updated:</span>
                        <span className="text-gray-900 dark:text-white">{selectedDocument.updated}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Effective Date:</span>
                        <span className="text-gray-900 dark:text-white">{selectedDocument.updated}</span>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <a
                        href={selectedDocument.path}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                        onClick={() => setShowLegalModal(false)}
                      >
                        View Document
                        <HiOutlineExternalLink className="w-4 h-4" />
                      </a>
                      {selectedDocument.videoUrl && (
                        <button
                          onClick={() => { setCurrentVideo(selectedDocument.videoUrl); setShowVideoModal(true); setShowLegalModal(false); }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
                        >
                          <HiOutlinePlay className="w-4 h-4" />
                          Watch
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      This document is legally binding. Please read carefully.
                    </p>
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

export default LegalLinksSection3;