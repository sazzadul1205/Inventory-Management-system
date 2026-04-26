// page/frontend/Partners/TechnologyPartnersSection/TechnologyPartnersSection1.jsx

/**
 * Technology Partners Section - Partner Ecosystem Hub
 *
 * Unique design elements:
 * - Stats cards for partner metrics (partners, integrations, API calls, uptime SLA)
 * - Featured partner spotlight with hero layout
 * - Category filter chips with custom icons (Cloud, AI/ML, Analytics, Integration, Security, IoT)
 * - Integration type filter (REST API, Pre-built Connector, SDK, Webhook)
 * - Partner capability expansion with checkmark list
 * - Save/bookmark functionality for partners
 * - Documentation link with document icon
 * - Become a partner CTA banner with dual buttons
 * - Search across partner names, descriptions, and tags
 * - Newsletter subscription integration for partner updates
 * - Animated gradient background orbs
 * - Responsive grid layout for partner cards
 * - Technology partner badges with color coding
 *
 * All icons from react-icons (hi, hi2, fa)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Ant Design
import { FaQuoteLeft as HiOutlineQuote, FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineCode,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineGlobe,
  HiOutlineCalendar,
  HiOutlineTag,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineBell,
  HiOutlineDownload,
  HiOutlinePlay,
  HiOutlineDocumentText,
  HiOutlineCog,
  HiOutlineRefresh,
  HiOutlineStar,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineNewspaper,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineWifi,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice } from 'react-icons/hi2';

const TechnologyPartnersSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIntegration, setSelectedIntegration] = useState('all');
  const [savedPartners, setSavedPartners] = useState([]);
  const [expandedPartner, setExpandedPartner] = useState(null);

  // ==================== MEMOIZED DATA ====================
  const allPartners = useMemo(() => config?.partners || [], [config?.partners]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Partners', icon: 'chip' },
        { id: 'cloud', label: 'Cloud Infrastructure', icon: 'cloud' },
        { id: 'ai-ml', label: 'AI & Machine Learning', icon: 'chip' },
        { id: 'analytics', label: 'Analytics & BI', icon: 'chart' },
        { id: 'integration', label: 'Integration Platforms', icon: 'code' },
        { id: 'security', label: 'Security & Compliance', icon: 'shield' },
        { id: 'iot', label: 'IoT & Sensors', icon: 'wifi' },
      ],
    [config?.categories]
  );

  const integrationTypes = useMemo(
    () =>
      config?.integrationTypes || [
        { id: 'all', label: 'All Integration Types' },
        { id: 'api', label: 'REST API' },
        { id: 'pre-built', label: 'Pre-built Connector' },
        { id: 'sdk', label: 'SDK' },
        { id: 'webhook', label: 'Webhook' },
      ],
    [config?.integrationTypes]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '50+', label: 'Technology Partners', icon: 'chip' },
        { value: '100+', label: 'Pre-built Integrations', icon: 'code' },
        { value: '1M+', label: 'API Calls Daily', icon: 'cloud' },
        { value: '99.9%', label: 'Uptime SLA', icon: 'shield' },
      ],
    [config?.stats]
  );

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Ant Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      database: <HiOutlineDatabase className={className} />,
      server: <HiOutlineServer className={className} />,
      code: <HiOutlineCode className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      users: <HiOutlineUsers className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      tag: <HiOutlineTag className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      bell: <HiOutlineBell className={className} />,
      download: <HiOutlineDownload className={className} />,
      play: <HiOutlinePlay className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      cog: <HiOutlineCog className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      star: <HiOutlineStar className={className} />,
      flag: <HiOutlineFlag className={className} />,
      gift: <HiOutlineGift className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      mail: <HiOutlineMail className={className} />,
      'thumbs-up': <HiOutlineThumbUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      quote: <HiOutlineQuote className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      template: <HiOutlineTemplate className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      phone: <HiOutlinePhone className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
    };
    return icons[iconName] || <HiOutlineChip className={className} />;
  }, []);

  /**
   * Returns partner category badge configuration with color and label
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      cloud: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'cloud',
        label: 'Cloud Infrastructure',
      },
      'ai-ml': {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'chip',
        label: 'AI & Machine Learning',
      },
      analytics: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'chart',
        label: 'Analytics & BI',
      },
      integration: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'code',
        label: 'Integration Platforms',
      },
      security: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'shield',
        label: 'Security & Compliance',
      },
      iot: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'wifi',
        label: 'IoT & Sensors',
      },
    };
    return (
      configs[categoryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'chip',
        label: 'Technology Partner',
      }
    );
  }, []);

  /**
   * Returns integration type badge configuration
   */
  const getIntegrationConfig = useCallback((integrationType) => {
    const configs = {
      api: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        label: 'REST API',
      },
      'pre-built': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        label: 'Pre-built Connector',
      },
      sdk: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        label: 'SDK',
      },
      webhook: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        label: 'Webhook',
      },
    };
    return (
      configs[integrationType] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        label: integrationType,
      }
    );
  }, []);

  /**
   * Toggle save/bookmark status for a partner
   */
  const handleSavePartner = useCallback((partnerId) => {
    setSavedPartners((prev) =>
      prev.includes(partnerId) ? prev.filter((id) => id !== partnerId) : [...prev, partnerId]
    );
  }, []);

  /**
   * Toggle expanded state for a partner
   */
  const toggleExpanded = useCallback((partnerId) => {
    setExpandedPartner((prev) => (prev === partnerId ? null : partnerId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedIntegration('all');
  }, []);

  // ==================== FILTERING LOGIC ====================

  const filteredPartners = useMemo(() => {
    let partners = [...allPartners];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      partners = partners.filter(
        (p) =>
          p.name?.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      partners = partners.filter((p) => p.category === selectedCategory);
    }

    if (selectedIntegration !== 'all') {
      partners = partners.filter((p) => p.integrationType === selectedIntegration);
    }

    return partners;
  }, [allPartners, searchQuery, selectedCategory, selectedIntegration]);

  // Get featured partner (first marked as featured, otherwise first in filtered list)
  const featuredPartner = useMemo(() => {
    const featured = allPartners.find((p) => p.isFeatured);
    return featured || filteredPartners[0];
  }, [allPartners, filteredPartners]);

  // Regular partners (excluding featured partner)
  const regularPartners = useMemo(() => {
    if (!featuredPartner) return filteredPartners;
    return filteredPartners.filter((p) => p.id !== featuredPartner.id);
  }, [filteredPartners, featuredPartner]);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Technology Partners - Partner Ecosystem Hub"
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
            {getIcon('chip', 'w-4 h-4 text-blue-600 dark:text-blue-400 mr-2')}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'Technology Partners'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Connect with'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Best-in-Class'}
            </span>{' '}
            {config?.title?.suffix || 'Technology'}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              'Integrate with leading technology platforms to extend the power of SupplyChainPro. Our technology partners provide the tools and services you need to build a complete supply chain ecosystem.'}
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
                {getIcon(stat.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {getIcon('search', 'w-5 h-5 text-gray-400')}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              config?.searchPlaceholder || 'Search partners by name, technology, or capability...'
            }
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search technology partners"
          />
        </div>

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${category.label}`}
            >
              {getIcon(category.icon, 'w-4 h-4')}
              {category.label}
            </button>
          ))}
        </div>

        {/* ==================== INTEGRATION TYPE FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {integrationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedIntegration(type.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedIntegration === type.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${type.label} integrations`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED PARTNER ==================== */}
        {featuredPartner && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl"
                aria-hidden="true"
              />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        Featured Technology Partner
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(featuredPartner.category).color}`}
                        >
                          {getCategoryConfig(featuredPartner.category).label}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      {featuredPartner.logo && (
                        <img
                          src={featuredPartner.logo}
                          alt={featuredPartner.name}
                          className="h-12 w-auto object-contain"
                          loading="lazy"
                        />
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {featuredPartner.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredPartner.description}
                    </p>

                    {/* Integration Capabilities */}
                    {featuredPartner.integrationCapabilities &&
                      featuredPartner.integrationCapabilities.length > 0 && (
                        <div className="mb-6">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Integration Capabilities:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {featuredPartner.integrationCapabilities.map((cap, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredPartner.link}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Learn More
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      {featuredPartner.docsLink && (
                        <a
                          href={featuredPartner.docsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {getIcon('document', 'w-4 h-4')}
                          View Documentation
                        </a>
                      )}
                      <button
                        onClick={() => handleSavePartner(featuredPartner.id)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedPartners.includes(featuredPartner.id)
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                          }`}
                        aria-label={
                          savedPartners.includes(featuredPartner.id)
                            ? 'Remove from saved'
                            : 'Save for later'
                        }
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                        {savedPartners.includes(featuredPartner.id) ? 'Saved' : 'Save for Later'}
                      </button>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative">
                    <div
                      className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl"
                      aria-hidden="true"
                    />
                    <img
                      src={featuredPartner.image}
                      alt={featuredPartner.name}
                      className="relative rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== PARTNERS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPartners.map((partner) => {
            const categoryConfig = getCategoryConfig(partner.category);
            const integrationConfig = getIntegrationConfig(partner.integrationType);
            const isExpanded = expandedPartner === partner.id;
            const isSaved = savedPartners.includes(partner.id);

            return (
              <div
                key={partner.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6">
                  {/* Partner Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-10 w-auto object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className={`w-10 h-10 rounded-xl ${categoryConfig.color} flex items-center justify-center`}
                        >
                          {getIcon(categoryConfig.icon, 'w-5 h-5')}
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {partner.name}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${categoryConfig.color}`}>
                          {categoryConfig.label}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSavePartner(partner.id)}
                      className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                        }`}
                      aria-label={isSaved ? 'Remove from saved' : 'Save partner'}
                    >
                      {getIcon('bookmark', 'w-4 h-4')}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {partner.description}
                  </p>

                  {/* Integration Type Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${integrationConfig.color}`}>
                      {integrationConfig.label}
                    </span>
                  </div>

                  {/* Expandable Integration Capabilities */}
                  {partner.integrationCapabilities &&
                    partner.integrationCapabilities.length > 0 && (
                      <div className="mb-4">
                        <button
                          onClick={() => toggleExpanded(partner.id)}
                          className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                          aria-label={
                            isExpanded
                              ? 'Show less'
                              : `View ${partner.integrationCapabilities.length} capabilities`
                          }
                        >
                          {isExpanded
                            ? 'Show less'
                            : `View ${partner.integrationCapabilities.length} capabilities`}
                          <HiArrowRight className="w-4 h-4" />
                        </button>

                        {isExpanded && (
                          <div className="mt-3 animate-fadeIn">
                            <ul className="space-y-2">
                              {partner.integrationCapabilities.map((cap, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  {getIcon('check', 'w-4 h-4 text-emerald-500 mt-0.5 shrink-0')}
                                  <span className="text-gray-700 dark:text-gray-300">{cap}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                  {/* Tags */}
                  {partner.tags && partner.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {partner.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={partner.link}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Learn More
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                    {partner.docsLink && (
                      <a
                        href={partner.docsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="View documentation"
                      >
                        {getIcon('document', 'w-4 h-4')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularPartners.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('chip', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No technology partners found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== BECOME A PARTNER CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
          {getIcon('chip', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {config?.ctaTitle || 'Become a Technology Partner'}
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {config?.ctaDescription ||
              'Join our ecosystem of leading technology partners. Integrate your solutions with SupplyChainPro and reach a global audience.'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={config?.applyLink || '/become-technology-partner'}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply Now
              <HiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={config?.programLink || '/partner-program'}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
            >
              Learn About Program
              {getIcon('external', 'w-4 h-4')}
            </Link>
          </div>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Technology Partner Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive updates on new technology partners, integrations, and developer resources.'}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const email = formData.get('email');
                if (email && email.includes('@')) {
                  // Handle subscription logic here
                  e.target.reset();
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for technology partner updates"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
              {config?.newsletter?.disclaimer ||
                'No spam, unsubscribe anytime. Get 1-2 emails per month.'}
            </p>
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
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
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
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TechnologyPartnersSection1;