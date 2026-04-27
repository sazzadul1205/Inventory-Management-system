// page/frontend/GlobalPresence/RegionalOfficesSection/RegionalOfficesSection1.jsx

/**
 * Regional Offices Section - Global Regional Hub Directory
 *
 * Unique design elements:
 * - Stats cards for regional metrics (regional hubs, office locations, local experts, support)
 * - Regional map visualization with interactive hub markers
 * - Region filter chips with custom icons and count badges
 * - Country filter dropdown for geographic targeting
 * - Featured regional offices spotlight with hero layout
 * - Office details expansion with services list
 * - Save/bookmark functionality for offices
 * - Get directions link with external map integration
 * - Contact information display (phone, email, hours)
 * - Search across cities, countries, and addresses
 * - Newsletter subscription integration
 * - Regional support CTA banner
 * - Animated gradient background orbs
 * - Responsive grid layout for office cards
 * - Regional headquarters designation with flag icons
 *
 * All icons from react-icons (hi, hi2, fa)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Ant Design
import { FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineOfficeBuilding,
  HiOutlineGlobe,
  HiOutlineLocationMarker,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineCalendar,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineHeart,
  HiOutlineMap,
} from 'react-icons/hi';
import { HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';

const RegionalOfficesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedOffices, setSavedOffices] = useState([]);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [expandedOffice, setExpandedOffice] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const allOffices = useMemo(() => config?.offices || [], [config?.offices]);

  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: allOffices.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' },
      ],
    [config?.regions, allOffices.length]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '6', label: 'Regional Hubs', icon: 'globe' },
        { value: '50+', label: 'Office Locations', icon: 'office' },
        { value: '1000+', label: 'Local Experts', icon: 'users' },
        { value: '24/7', label: 'Regional Support', icon: 'clock' },
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
      office: <HiOutlineOfficeBuilding className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      users: <HiOutlineUsers className={className} />,
      clock: <HiOutlineClock className={className} />,
      phone: <HiOutlinePhone className={className} />,
      mail: <HiOutlineMail className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      eye: <HiOutlineEye className={className} />,
      tag: <HiOutlineTag className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      bell: <HiOutlineBell className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      usergroup: <HiOutlineUserGroup className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      arrow: <HiArrowRight className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      presentation: <HiOutlinePresentationChartLine className={className} />,
      star: <HiOutlineStar className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      template: <HiOutlineTemplate className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      heart: <HiOutlineHeart className={className} />,
      map: <HiOutlineMap className={className} />,
    };
    return icons[iconName] || <HiOutlineOfficeBuilding className={className} />;
  }, []);

  /**
   * Returns region configuration with color, label, and flag
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'globe',
        label: 'North America',
        flag: '🇺🇸',
      },
      europe: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'Europe',
        flag: '🇪🇺',
      },
      'asia-pacific': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Asia Pacific',
        flag: '🌏',
      },
      'latin-america': {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Latin America',
        flag: '🌎',
      },
      'middle-east': {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'Middle East',
        flag: '🕌',
      },
      africa: {
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'globe',
        label: 'Africa',
        flag: '🌍',
      },
    };
    return (
      configs[regionId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'globe',
        label: regionId,
        flag: '🌐',
      }
    );
  }, []);

  /**
   * Get unique countries from offices for filter dropdown
   */
  const getUniqueCountries = useCallback(() => {
    const countries = new Set();
    allOffices.forEach((office) => {
      if (office.country) {
        countries.add(office.country);
      }
    });
    return Array.from(countries).sort();
  }, [allOffices]);

  /**
   * Toggle save/bookmark status for an office
   */
  const handleSaveOffice = useCallback((officeId) => {
    setSavedOffices((prev) =>
      prev.includes(officeId) ? prev.filter((id) => id !== officeId) : [...prev, officeId]
    );
  }, []);

  /**
   * Toggle expanded state for an office
   */
  const toggleExpanded = useCallback((officeId) => {
    setExpandedOffice((prev) => (prev === officeId ? null : officeId));
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedCountry('all');
  }, []);

  // ==================== FILTERING LOGIC ====================

  const filteredOffices = useMemo(() => {
    let offices = [...allOffices];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      offices = offices.filter(
        (o) =>
          o.city?.toLowerCase().includes(query) ||
          o.country?.toLowerCase().includes(query) ||
          o.address?.toLowerCase().includes(query) ||
          o.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedRegion !== 'all') {
      offices = offices.filter((o) => o.region === selectedRegion);
    }

    if (selectedCountry !== 'all') {
      offices = offices.filter((o) => o.country === selectedCountry);
    }

    return offices;
  }, [allOffices, searchQuery, selectedRegion, selectedCountry]);

  // Get featured offices (first 3 marked as featured or first 3 in filtered list)
  const featuredOffices = useMemo(() => {
    const featured = allOffices.filter((o) => o.isRegionalHub);
    return featured.length > 0 ? featured.slice(0, 3) : filteredOffices.slice(0, 3);
  }, [allOffices, filteredOffices]);

  // Get regional hubs for map
  const regionalHubs = useMemo(() => {
    return allOffices.filter((o) => o.isRegionalHub);
  }, [allOffices]);

  const uniqueCountries = getUniqueCountries();

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Regional Offices - Global Regional Hub Directory"
      itemScope
      itemType="https://schema.org/Place"
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
            {getIcon('office', 'w-4 h-4 text-blue-600 dark:text-blue-400 mr-2')}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'Regional Offices'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Our'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Regional Hubs'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              'Connect with our regional teams around the world. Our local experts understand your market and are ready to help you succeed.'}
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
              config?.searchPlaceholder || 'Search by city, country, or region...'
            }
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search offices"
          />
        </div>

        {/* ==================== REGION FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedRegion === region.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${region.label} offices`}
            >
              {getIcon(region.icon, 'w-4 h-4')}
              {region.label}
              {region.count !== undefined && (
                <span className="ml-1 text-xs opacity-80">{region.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== COUNTRY FILTER ==================== */}
        {uniqueCountries.length > 0 && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
              {getIcon('location', 'w-4 h-4 text-gray-500')}
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
                aria-label="Filter by country"
              >
                <option value="all">All Countries</option>
                {uniqueCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* ==================== REGIONAL MAP VISUALIZATION ==================== */}
        <div className="mb-16 bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Global Regional Hubs
          </h3>
          <div className="relative aspect-video bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4">
            <div className="relative w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradient-regions" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <rect width="1200" height="500" fill="url(#gradient-regions)" />
                {/* Simplified continent outlines */}
                <path
                  d="M200,150 L280,120 L350,140 L380,180 L350,220 L280,240 L200,220 L170,180 Z"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />
                <path
                  d="M500,170 L600,140 L700,150 L750,190 L720,230 L620,240 L520,220 L480,190 Z"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />
                <path
                  d="M900,190 L1000,170 L1080,190 L1100,230 L1050,260 L950,250 L880,230 Z"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />
                <path
                  d="M300,350 L400,330 L480,340 L520,380 L480,420 L380,430 L280,410 L260,380 Z"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />
                <path
                  d="M700,390 L780,370 L850,390 L880,430 L820,460 L730,450 L680,420 Z"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />

                {/* Regional Hub Markers */}
                {regionalHubs.map((office, idx) => (
                  <g
                    key={idx}
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => setSelectedRegion(office.region)}
                    onMouseEnter={() => setHoveredMarker(office.id)}
                    onMouseLeave={() => setHoveredMarker(null)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedRegion(office.region)}
                  >
                    <circle
                      cx={office.mapX}
                      cy={office.mapY}
                      r={hoveredMarker === office.id ? 14 : 10}
                      fill={selectedRegion === office.region ? "#F59E0B" : "#3B82F6"}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />
                    <circle cx={office.mapX} cy={office.mapY} r="20" fill={selectedRegion === office.region ? "#F59E0B" : "#3B82F6"} opacity="0.2">
                      <animate attributeName="r" values="10;20;10" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                    {hoveredMarker === office.id && (
                      <text
                        x={office.mapX}
                        y={office.mapY - 18}
                        textAnchor="middle"
                        fill="#1F2937"
                        fontSize="10"
                        fontWeight="bold"
                        className="dark:fill-white"
                      >
                        {office.city}
                      </text>
                    )}
                  </g>
                ))}
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-gray-500 dark:text-gray-400">
              {regionalHubs.length} Regional Hubs
            </div>
          </div>
        </div>

        {/* ==================== FEATURED REGIONAL OFFICES ==================== */}
        {featuredOffices.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon('star', 'w-5 h-5 text-yellow-500')}
              Regional Headquarters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredOffices.map((office) => {
                const regionConfig = getRegionConfig(office.region);
                const isSaved = savedOffices.includes(office.id);

                return (
                  <div
                    key={office.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={office.image}
                        alt={office.city}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${regionConfig.color}`}
                        >
                          {regionConfig.label} HQ
                        </span>
                      </div>
                      <button
                        onClick={() => handleSaveOffice(office.id)}
                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group/btn"
                        aria-label={isSaved ? 'Remove from saved' : 'Save office'}
                      >
                        {getIcon('bookmark', `w-4 h-4 ${isSaved ? 'text-amber-500 fill-amber-500' : 'text-gray-600'}`)}
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{regionConfig.flag}</span>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {office.city}
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{office.address}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {getIcon('phone', 'w-4 h-4')}
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {getIcon('mail', 'w-4 h-4')}
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{office.country}</span>
                        <a
                          href={office.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                        >
                          Get Directions
                          {getIcon('external', 'w-4 h-4')}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==================== REGIONAL OFFICES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredOffices.map((office) => {
            const regionConfig = getRegionConfig(office.region);
            const isExpanded = expandedOffice === office.id;
            const isSaved = savedOffices.includes(office.id);

            return (
              <div
                key={office.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="p-6">
                  {/* Office Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${regionConfig.color} flex items-center justify-center`}
                      >
                        <span className="text-xl">{regionConfig.flag}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {office.city}
                        </h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${regionConfig.color}`}
                        >
                          {regionConfig.label}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSaveOffice(office.id)}
                      className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                        }`}
                      aria-label={isSaved ? 'Remove from saved' : 'Save office'}
                    >
                      {getIcon('bookmark', 'w-4 h-4')}
                    </button>
                  </div>

                  {/* Address */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{office.address}</p>

                  {/* Contact Information */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon('phone', 'w-4 h-4')}
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon('mail', 'w-4 h-4')}
                      <span>{office.email}</span>
                    </div>
                    {office.hours && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('clock', 'w-4 h-4')}
                        <span>{office.hours}</span>
                      </div>
                    )}
                  </div>

                  {/* Expandable Details */}
                  {office.details && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(office.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : 'View office details'}
                      >
                        {isExpanded ? 'Show less' : 'View office details'}
                        <HiArrowRight className="w-4 h-4" />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 space-y-2 animate-fadeIn">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {office.details}
                          </p>
                          {office.services && office.services.length > 0 && (
                            <div className="mt-2">
                              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                Services:
                              </p>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {office.services.map((service, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                                  >
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {office.tags && office.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {office.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer Action */}
                  <div className="flex items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Get Directions
                      {getIcon('external', 'w-4 h-4')}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredOffices.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('office', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No offices found
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

        {/* ==================== REGIONAL SUPPORT BANNER ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
          {getIcon('globe', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {config?.supportTitle || 'Need Regional Support?'}
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {config?.supportDescription ||
              'Connect with your local regional office for personalized support and service in your language and time zone.'}
          </p>
          <Link
            href={config?.supportLink || '/contact'}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Find Your Regional Contact
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Regional Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive news about regional events, office openings, and local initiatives.'}
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
                aria-label="Email for regional updates"
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
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default RegionalOfficesSection1;