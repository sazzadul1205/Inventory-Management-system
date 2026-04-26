// page/frontend/Partners/PartnerDirectorySection/PartnerDirectorySection1.jsx

/**
 * Partner Directory Section - Global Partner Directory Hub
 *
 * Unique design elements:
 * - Stats cards for partner metrics (global partners, countries, projects, satisfaction)
 * - Featured partner spotlight with hero layout
 * - Program type filter chips with custom icons (Technology, Solution, Consulting, Reseller, Integration)
 * - Region filter for geographic targeting
 * - Industry filter for specialized expertise
 * - Partner expertise tags with expandable show more
 * - Rating display with star icons
 * - Location display with region flags
 * - Save/bookmark functionality for partners
 * - Contact email link for partner inquiries
 * - Search across partner names, descriptions, and tags
 * - Newsletter subscription integration
 * - Become a partner CTA banner
 * - Animated gradient background orbs (blue/purple theme)
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
  HiOutlineUserGroup,
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
  HiOutlineCode,
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
  HiOutlinePhone,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineHeart,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy, HiOutlineRocketLaunch } from 'react-icons/hi2';

const PartnerDirectorySection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedPartners, setSavedPartners] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [expandedPartner, setExpandedPartner] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const allPartners = useMemo(() => config?.partners || [], [config?.partners]);

  const programTypes = useMemo(
    () =>
      config?.programTypes || [
        { id: 'all', label: 'All Partners', icon: 'usergroup', count: allPartners.length },
        { id: 'technology', label: 'Technology Partners', icon: 'chip' },
        { id: 'solution', label: 'Solution Partners', icon: 'briefcase' },
        { id: 'consulting', label: 'Consulting Partners', icon: 'users' },
        { id: 'reseller', label: 'Reseller Partners', icon: 'globe' },
        { id: 'integration', label: 'Integration Partners', icon: 'code' },
      ],
    [config?.programTypes, allPartners.length]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '500+', label: 'Global Partners', icon: 'usergroup' },
        { value: '50+', label: 'Countries', icon: 'globe' },
        { value: '1000+', label: 'Successful Projects', icon: 'trophy' },
        { value: '95%', label: 'Partner Satisfaction', icon: 'star' },
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
      usergroup: <HiOutlineUserGroup className={className} />,
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
      code: <HiOutlineCode className={className} />,
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
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      heart: <HiOutlineHeart className={className} />,
      rocket: <HiOutlineRocketLaunch className={className} />,
    };
    return icons[iconName] || <HiOutlineUserGroup className={className} />;
  }, []);

  /**
   * Returns program badge configuration with color and label
   */
  const getProgramConfig = useCallback((programId) => {
    const configs = {
      technology: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'chip',
        label: 'Technology Partner',
      },
      solution: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'briefcase',
        label: 'Solution Partner',
      },
      consulting: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'users',
        label: 'Consulting Partner',
      },
      reseller: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Reseller Partner',
      },
      integration: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'code',
        label: 'Integration Partner',
      },
    };
    return (
      configs[programId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'usergroup',
        label: 'Partner',
      }
    );
  }, []);

  /**
   * Returns region configuration with flag emoji
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': { flag: '🇺🇸', label: 'North America' },
      europe: { flag: '🇪🇺', label: 'Europe' },
      'asia-pacific': { flag: '🌏', label: 'Asia Pacific' },
      'latin-america': { flag: '🌎', label: 'Latin America' },
      'middle-east': { flag: '🕌', label: 'Middle East' },
      africa: { flag: '🌍', label: 'Africa' },
    };
    return (
      configs[regionId] || { flag: '🌐', label: regionId || 'Global' }
    );
  }, []);

  /**
   * Returns industry badge configuration with color and label
   */
  const getIndustryConfig = useCallback((industryId) => {
    const configs = {
      retail: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        label: 'Retail',
      },
      manufacturing: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        label: 'Manufacturing',
      },
      healthcare: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        label: 'Healthcare',
      },
      logistics: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        label: 'Logistics',
      },
      automotive: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        label: 'Automotive',
      },
      'consumer-goods': {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        label: 'Consumer Goods',
      },
    };
    return (
      configs[industryId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        label: industryId,
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
   * Get unique industries from partners for filter dropdown
   */
  const getUniqueIndustries = useCallback(() => {
    const industries = new Set();
    allPartners.forEach((partner) => {
      if (partner.industries) {
        partner.industries.forEach((industry) => industries.add(industry));
      }
    });
    return Array.from(industries);
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
    setSelectedProgram('all');
    setSelectedRegion('all');
    setSelectedIndustry('all');
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

    if (selectedProgram !== 'all') {
      partners = partners.filter((p) => p.program === selectedProgram);
    }

    if (selectedRegion !== 'all') {
      partners = partners.filter((p) => p.region === selectedRegion);
    }

    if (selectedIndustry !== 'all') {
      partners = partners.filter((p) => p.industries?.includes(selectedIndustry));
    }

    return partners;
  }, [allPartners, searchQuery, selectedProgram, selectedRegion, selectedIndustry]);

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
  const uniqueIndustries = getUniqueIndustries();

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Partner Directory"
      itemScope
      itemType="https://schema.org/ItemList"
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
            {getIcon('usergroup', 'w-4 h-4 text-blue-600 dark:text-blue-400 mr-2')}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'Partner Directory'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Find the'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Right Partner'}
            </span>{' '}
            {config?.title?.suffix || 'for Your Business'}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              'Discover trusted partners who can help you implement, integrate, and optimize SupplyChainPro solutions for your specific needs.'}
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
              config?.searchPlaceholder || 'Search partners by name, expertise, or location...'
            }
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search partners"
          />
        </div>

        {/* ==================== PROGRAM TYPE FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {programTypes.map((program) => (
            <button
              key={program.id}
              onClick={() => setSelectedProgram(program.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedProgram === program.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${program.label}`}
            >
              {getIcon(program.icon, 'w-4 h-4')}
              {program.label}
              {program.count !== undefined && (
                <span className="ml-1 text-xs opacity-80">{program.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== REGION AND INDUSTRY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {/* Region Filter Dropdown */}
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
                  {getRegionConfig(region).label}
                </option>
              ))}
            </select>
          </div>

          {/* Industry Filter Dropdown */}
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
            {getIcon('briefcase', 'w-4 h-4 text-gray-500')}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
              aria-label="Filter by industry"
            >
              <option value="all">All Industries</option>
              {uniqueIndustries.map((industry) => (
                <option key={industry} value={industry}>
                  {getIndustryConfig(industry).label}
                </option>
              ))}
            </select>
          </div>
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
                        Featured Partner
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getProgramConfig(featuredPartner.program).color}`}
                        >
                          {getProgramConfig(featuredPartner.program).label}
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

                    {/* Expertise Tags */}
                    {featuredPartner.expertise && featuredPartner.expertise.length > 0 && (
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Core Expertise:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {featuredPartner.expertise.slice(0, 4).map((exp, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Location and Rating */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('location', 'w-4 h-4')}
                        <span>{featuredPartner.location}</span>
                      </div>
                      {featuredPartner.rating && (
                        <div className="flex items-center gap-1 text-sm">
                          {getIcon('star', 'w-4 h-4 text-yellow-500')}
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {featuredPartner.rating}
                          </span>
                          <span className="text-gray-500">
                            ({featuredPartner.reviews} reviews)
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredPartner.link}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        View Profile
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
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
            const programConfig = getProgramConfig(partner.program);
            const regionConfig = getRegionConfig(partner.region);
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
                          className={`w-10 h-10 rounded-xl ${programConfig.color} flex items-center justify-center`}
                        >
                          {getIcon(programConfig.icon, 'w-5 h-5')}
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {partner.name}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${programConfig.color}`}>
                          {programConfig.label}
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

                  {/* Expertise Tags */}
                  {partner.expertise && partner.expertise.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {partner.expertise.slice(0, 3).map((exp, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                          >
                            {exp}
                          </span>
                        ))}
                        {partner.expertise.length > 3 && (
                          <button
                            onClick={() => toggleExpanded(partner.id)}
                            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                            aria-label={`Show ${partner.expertise.length - 3} more expertise areas`}
                          >
                            +{partner.expertise.length - 3} more
                          </button>
                        )}
                      </div>

                      {isExpanded && partner.expertise.length > 3 && (
                        <div className="mt-2 flex flex-wrap gap-2 animate-fadeIn">
                          {partner.expertise.slice(3).map((exp, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Location and Rating */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      {getIcon('location', 'w-4 h-4')}
                      <span>{partner.location}</span>
                      <span className="text-xs">{regionConfig.flag}</span>
                    </div>
                    {partner.rating && (
                      <div className="flex items-center gap-1">
                        {getIcon('star', 'w-4 h-4 text-yellow-500')}
                        <span className="font-medium">{partner.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Industries Served */}
                  {partner.industries && partner.industries.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {partner.industries.slice(0, 2).map((industry, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-full ${getIndustryConfig(industry).color}`}
                        >
                          {getIndustryConfig(industry).label}
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
                      View Profile
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                    {partner.contactEmail && (
                      <a
                        href={`mailto:${partner.contactEmail}`}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
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
              {getIcon('usergroup', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No partners found
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
          {getIcon('usergroup', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {config?.ctaTitle || 'Become a Partner'}
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {config?.ctaDescription ||
              'Join our global partner ecosystem and get listed in the partner directory. Reach thousands of potential customers.'}
          </p>
          <Link
            href={config?.becomePartnerLink || '/become-partner'}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Apply Now
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Partner Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive updates about new partners, success stories, and partner program news.'}
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
                aria-label="Email for partner updates"
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

export default PartnerDirectorySection1;