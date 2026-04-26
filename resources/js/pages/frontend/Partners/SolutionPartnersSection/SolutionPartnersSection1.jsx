// page/frontend/Partners/SolutionPartnersSection/SolutionPartnersSection1.jsx

/**
 * Solution Partners Section - Industry Solutions Hub
 *
 * Unique design elements:
 * - Stats cards for partner metrics (partners, industries, deployments, satisfaction)
 * - Featured partner spotlight with hero layout
 * - Industry filter chips with custom icons (Retail, Manufacturing, Healthcare, Logistics, Automotive, Consumer Goods)
 * - Solution area filter dropdown (Inventory, Warehouse, Transportation, Analytics, Procurement, Planning)
 * - Region filter for geographic targeting
 * - Solution area badges with color coding
 * - Success metrics grid with KPI values
 * - Save/bookmark functionality for partners
 * - Contact email link for partner inquiries
 * - Location display with region indicator
 * - Search across partner names, descriptions, and tags
 * - Newsletter subscription integration
 * - Become a partner CTA banner with dual buttons
 * - Animated gradient background orbs (green/blue theme)
 * - Responsive grid layout for partner cards
 *
 * All icons from react-icons (hi, hi2, fa)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Ant Design
import { FaQuoteLeft as HiOutlineQuote, FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineBriefcase,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineUsers,
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
  HiOutlineLocationMarker,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineDatabase,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch } from 'react-icons/hi2';

const SolutionPartnersSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedSolution, setSelectedSolution] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [savedPartners, setSavedPartners] = useState([]);
  const [expandedPartner, setExpandedPartner] = useState(null);

  // ==================== MEMOIZED DATA ====================
  const allPartners = useMemo(() => config?.partners || [], [config?.partners]);

  const industries = useMemo(
    () =>
      config?.industries || [
        { id: 'all', label: 'All Industries', icon: 'globe' },
        { id: 'retail', label: 'Retail', icon: 'building' },
        { id: 'manufacturing', label: 'Manufacturing', icon: 'cog' },
        { id: 'healthcare', label: 'Healthcare', icon: 'shield' },
        { id: 'logistics', label: 'Logistics', icon: 'globe' },
        { id: 'automotive', label: 'Automotive', icon: 'bolt' },
        { id: 'consumer-goods', label: 'Consumer Goods', icon: 'gift' },
      ],
    [config?.industries]
  );

  const solutionAreas = useMemo(
    () =>
      config?.solutionAreas || [
        { id: 'all', label: 'All Solutions' },
        { id: 'inventory', label: 'Inventory Optimization' },
        { id: 'warehouse', label: 'Warehouse Management' },
        { id: 'transportation', label: 'Transportation Management' },
        { id: 'analytics', label: 'Supply Chain Analytics' },
        { id: 'procurement', label: 'Procurement Solutions' },
        { id: 'planning', label: 'Supply Chain Planning' },
      ],
    [config?.solutionAreas]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '100+', label: 'Solution Partners', icon: 'briefcase' },
        { value: '50+', label: 'Industries Served', icon: 'globe' },
        { value: '500+', label: 'Successful Deployments', icon: 'trophy' },
        { value: '95%', label: 'Customer Satisfaction', icon: 'star' },
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
      briefcase: <HiOutlineBriefcase className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      users: <HiOutlineUsers className={className} />,
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
      location: <HiOutlineLocationMarker className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      template: <HiOutlineTemplate className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      phone: <HiOutlinePhone className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      database: <HiOutlineDatabase className={className} />,
      rocket: <HiOutlineRocketLaunch className={className} />,
    };
    return icons[iconName] || <HiOutlineBriefcase className={className} />;
  }, []);

  /**
   * Returns industry configuration with color, icon, and label
   */
  const getIndustryConfig = useCallback((industryId) => {
    const configs = {
      retail: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'building',
        label: 'Retail',
      },
      manufacturing: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'cog',
        label: 'Manufacturing',
      },
      healthcare: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'shield',
        label: 'Healthcare',
      },
      logistics: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Logistics',
      },
      automotive: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'bolt',
        label: 'Automotive',
      },
      'consumer-goods': {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'gift',
        label: 'Consumer Goods',
      },
    };
    return (
      configs[industryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'briefcase',
        label: 'Industry Partner',
      }
    );
  }, []);

  /**
   * Returns solution area badge configuration
   */
  const getSolutionConfig = useCallback((solutionId) => {
    const configs = {
      inventory: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'database',
        label: 'Inventory Optimization',
      },
      warehouse: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'building',
        label: 'Warehouse Management',
      },
      transportation: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Transportation Management',
      },
      analytics: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'chart',
        label: 'Supply Chain Analytics',
      },
      procurement: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'credit',
        label: 'Procurement Solutions',
      },
      planning: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'calendar',
        label: 'Supply Chain Planning',
      },
    };
    return (
      configs[solutionId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'briefcase',
        label: solutionId,
      }
    );
  }, []);

  /**
   * Get unique regions from partners for filter dropdown
   */
  const getUniqueRegions = useCallback(() => {
    const regions = new Set();
    allPartners.forEach((partner) => {
      if (partner.region) {
        regions.add(partner.region);
      }
    });
    return Array.from(regions);
  }, [allPartners]);

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
    setSelectedIndustry('all');
    setSelectedSolution('all');
    setSelectedRegion('all');
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

    if (selectedIndustry !== 'all') {
      partners = partners.filter((p) => p.industry === selectedIndustry);
    }

    if (selectedSolution !== 'all') {
      partners = partners.filter((p) => p.solutionAreas?.includes(selectedSolution));
    }

    if (selectedRegion !== 'all') {
      partners = partners.filter((p) => p.region === selectedRegion);
    }

    return partners;
  }, [allPartners, searchQuery, selectedIndustry, selectedSolution, selectedRegion]);

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

  const uniqueRegions = getUniqueRegions();

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Solution Partners - Industry Solutions Hub"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div className="inline-flex items-center bg-emerald-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-emerald-100 dark:border-gray-700">
            {getIcon('briefcase', 'w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2')}
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              {config?.badge || 'Solution Partners'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Expert'}{' '}
            <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Solution Partners'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              'Partner with industry-leading solution providers who deliver end-to-end supply chain transformations. Our solution partners bring deep expertise and proven methodologies.'}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                {getIcon(stat.icon, 'w-5 h-5 text-emerald-600 dark:text-emerald-400')}
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
              config?.searchPlaceholder || 'Search partners by name, industry, or solution area...'
            }
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search solution partners"
          />
        </div>

        {/* ==================== INDUSTRY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedIndustry === industry.id
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${industry.label} partners`}
            >
              {getIcon(industry.icon, 'w-4 h-4')}
              {industry.label}
            </button>
          ))}
        </div>

        {/* ==================== SOLUTION AREA AND REGION FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {/* Solution Area Filter Dropdown */}
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
            {getIcon('cog', 'w-4 h-4 text-gray-500')}
            <select
              value={selectedSolution}
              onChange={(e) => setSelectedSolution(e.target.value)}
              className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
              aria-label="Filter by solution area"
            >
              {solutionAreas.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.label}
                </option>
              ))}
            </select>
          </div>

          {/* Region Filter Dropdown */}
          {uniqueRegions.length > 0 && (
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
              {getIcon('globe', 'w-4 h-4 text-gray-500')}
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
                aria-label="Filter by region"
              >
                <option value="all">All Regions</option>
                {uniqueRegions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* ==================== FEATURED PARTNER ==================== */}
        {featuredPartner && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl"
                aria-hidden="true"
              />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                        Featured Solution Partner
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getIndustryConfig(featuredPartner.industry).color}`}
                        >
                          {getIndustryConfig(featuredPartner.industry).label}
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

                    {/* Solution Areas */}
                    {featuredPartner.solutionAreas && featuredPartner.solutionAreas.length > 0 && (
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Solution Areas:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {featuredPartner.solutionAreas.map((area, idx) => (
                            <span
                              key={idx}
                              className={`text-xs px-2 py-1 rounded-full ${getSolutionConfig(area).color}`}
                            >
                              {getSolutionConfig(area).label}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Success Metrics */}
                    {featuredPartner.successMetrics && featuredPartner.successMetrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {featuredPartner.successMetrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                          >
                            <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredPartner.link}
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Learn More
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleSavePartner(featuredPartner.id)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedPartners.includes(featuredPartner.id)
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-600'
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
                      {featuredPartner.contactEmail && (
                        <a
                          href={`mailto:${featuredPartner.contactEmail}`}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400"
                          aria-label="Contact partner"
                        >
                          {getIcon('mail', 'w-4 h-4')}
                          Contact
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative">
                    <div
                      className="absolute -inset-4 bg-emerald-600/20 rounded-2xl blur-2xl"
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
            const industryConfig = getIndustryConfig(partner.industry);
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
                          className={`w-10 h-10 rounded-xl ${industryConfig.color} flex items-center justify-center`}
                        >
                          {getIcon(industryConfig.icon, 'w-5 h-5')}
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {partner.name}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${industryConfig.color}`}>
                          {industryConfig.label}
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

                  {/* Solution Areas */}
                  {partner.solutionAreas && partner.solutionAreas.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {partner.solutionAreas.slice(0, 3).map((area, idx) => (
                          <span
                            key={idx}
                            className={`text-xs px-2 py-1 rounded-full ${getSolutionConfig(area).color}`}
                          >
                            {getSolutionConfig(area).label}
                          </span>
                        ))}
                        {partner.solutionAreas.length > 3 && (
                          <button
                            onClick={() => toggleExpanded(partner.id)}
                            className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline"
                            aria-label={`Show ${partner.solutionAreas.length - 3} more solutions`}
                          >
                            +{partner.solutionAreas.length - 3} more
                          </button>
                        )}
                      </div>

                      {isExpanded && partner.solutionAreas.length > 3 && (
                        <div className="mt-2 flex flex-wrap gap-2 animate-fadeIn">
                          {partner.solutionAreas.slice(3).map((area, idx) => (
                            <span
                              key={idx}
                              className={`text-xs px-2 py-1 rounded-full ${getSolutionConfig(area).color}`}
                            >
                              {getSolutionConfig(area).label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Location */}
                  {partner.location && (
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {getIcon('location', 'w-4 h-4')}
                      <span>{partner.location}</span>
                      {partner.region && <span className="text-xs">({partner.region})</span>}
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

                  {/* Success Metrics */}
                  {partner.successMetrics && partner.successMetrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mb-4 p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                      {partner.successMetrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={partner.link}
                      className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Learn More
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                    {partner.contactEmail && (
                      <a
                        href={`mailto:${partner.contactEmail}`}
                        className="text-gray-400 hover:text-emerald-600 transition-colors"
                        aria-label="Contact partner"
                      >
                        {getIcon('mail', 'w-4 h-4')}
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
              {getIcon('briefcase', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No solution partners found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== BECOME A SOLUTION PARTNER CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-500 rounded-3xl p-8 md:p-12 text-white text-center">
          {getIcon('briefcase', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {config?.ctaTitle || 'Become a Solution Partner'}
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            {config?.ctaDescription ||
              'Join our network of solution partners delivering transformative supply chain solutions. Leverage our platform to drive customer success.'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={config?.applyLink || '/become-solution-partner'}
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
            {getIcon('bell', 'w-12 h-12 mx-auto text-emerald-600 dark:text-emerald-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Solution Partner Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive updates on new solution partners, success stories, and industry insights.'}
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
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for solution partner updates"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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

export default SolutionPartnersSection1;