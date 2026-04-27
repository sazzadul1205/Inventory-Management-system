// page/frontend/GlobalPresence/GlobalCoverageMapSection/GlobalCoverageMapSection1.jsx

/**
 * Global Coverage Map Section - Worldwide Presence Map Hub
 *
 * Unique design elements:
 * - Stats cards for global coverage metrics (countries, continents, offices, team members)
 * - Interactive world map visualization with country markers
 * - Region filter chips for geographic segmentation
 * - Country coverage grid with expandable details
 * - Office, employee, and customer metrics per country
 * - Hover tooltips on map markers
 * - Expandable country details with location info
 * - Flag/region badges for country identification
 * - Global support CTA banner
 * - Newsletter subscription integration
 * - Animated gradient background orbs
 * - Responsive grid layout for country cards
 * - Total coverage summary metrics row
 *
 * All icons from react-icons (hi, hi2, fa)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Ant Design
import { FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineGlobe,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
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
import { HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch as HiOutlineRocket, HiOutlineChevronUp, HiOutlineChevronDown } from 'react-icons/hi2';

const GlobalCoverageMapSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [expandedCoverage, setExpandedCoverage] = useState(null);

  // ==================== MEMOIZED DATA ====================
  const countryCoverage = useMemo(
    () =>
      config?.countryCoverage || [
        { name: 'United States', code: 'US', region: 'north-america', offices: 8, employees: 650, customers: 1200 },
        { name: 'Canada', code: 'CA', region: 'north-america', offices: 3, employees: 180, customers: 450 },
        { name: 'Mexico', code: 'MX', region: 'north-america', offices: 2, employees: 120, customers: 280 },
        { name: 'United Kingdom', code: 'GB', region: 'europe', offices: 4, employees: 250, customers: 580 },
        { name: 'Germany', code: 'DE', region: 'europe', offices: 3, employees: 200, customers: 520 },
        { name: 'France', code: 'FR', region: 'europe', offices: 2, employees: 140, customers: 380 },
        { name: 'Italy', code: 'IT', region: 'europe', offices: 2, employees: 110, customers: 290 },
        { name: 'Spain', code: 'ES', region: 'europe', offices: 2, employees: 95, customers: 260 },
        { name: 'Netherlands', code: 'NL', region: 'europe', offices: 1, employees: 65, customers: 180 },
        { name: 'China', code: 'CN', region: 'asia-pacific', offices: 4, employees: 320, customers: 680 },
        { name: 'Japan', code: 'JP', region: 'asia-pacific', offices: 3, employees: 210, customers: 520 },
        { name: 'Singapore', code: 'SG', region: 'asia-pacific', offices: 2, employees: 150, customers: 380 },
        { name: 'Australia', code: 'AU', region: 'asia-pacific', offices: 3, employees: 180, customers: 420 },
        { name: 'India', code: 'IN', region: 'asia-pacific', offices: 3, employees: 280, customers: 620 },
        { name: 'South Korea', code: 'KR', region: 'asia-pacific', offices: 2, employees: 140, customers: 350 },
        { name: 'Brazil', code: 'BR', region: 'latin-america', offices: 3, employees: 220, customers: 480 },
        { name: 'Argentina', code: 'AR', region: 'latin-america', offices: 1, employees: 65, customers: 150 },
        { name: 'Chile', code: 'CL', region: 'latin-america', offices: 1, employees: 55, customers: 130 },
        { name: 'UAE', code: 'AE', region: 'middle-east', offices: 2, employees: 120, customers: 280 },
        { name: 'Saudi Arabia', code: 'SA', region: 'middle-east', offices: 1, employees: 70, customers: 160 },
        { name: 'South Africa', code: 'ZA', region: 'africa', offices: 2, employees: 110, customers: 250 },
        { name: 'Nigeria', code: 'NG', region: 'africa', offices: 1, employees: 55, customers: 130 },
      ],
    [config?.countryCoverage]
  );

  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'Global', icon: 'globe', count: countryCoverage.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' },
      ],
    [config?.regions, countryCoverage.length]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '45+', label: 'Countries Served', icon: 'globe' },
        { value: '6', label: 'Continents', icon: 'globe' },
        { value: '50+', label: 'Office Locations', icon: 'office' },
        { value: '1000+', label: 'Global Team Members', icon: 'users' },
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
      globe: <HiOutlineGlobe className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      office: <HiOutlineOfficeBuilding className={className} />,
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
    return icons[iconName] || <HiOutlineGlobe className={className} />;
  }, []);

  /**
   * Returns region configuration with color and label
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'globe',
        label: 'North America',
        badgeColor: 'bg-blue-500',
      },
      europe: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'Europe',
        badgeColor: 'bg-purple-500',
      },
      'asia-pacific': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Asia Pacific',
        badgeColor: 'bg-emerald-500',
      },
      'latin-america': {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Latin America',
        badgeColor: 'bg-orange-500',
      },
      'middle-east': {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'Middle East',
        badgeColor: 'bg-red-500',
      },
      africa: {
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'globe',
        label: 'Africa',
        badgeColor: 'bg-yellow-500',
      },
    };
    return (
      configs[regionId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'globe',
        label: regionId,
      }
    );
  }, []);

  /**
   * Get filtered countries by region
   */
  const filteredCountries = useMemo(() => {
    if (selectedRegion === 'all') return countryCoverage;
    return countryCoverage.filter((c) => c.region === selectedRegion);
  }, [countryCoverage, selectedRegion]);

  /**
   * Total coverage metrics
   */
  const totalMetrics = useMemo(() => {
    const totalOffices = countryCoverage.reduce((sum, c) => sum + c.offices, 0);
    const totalEmployees = countryCoverage.reduce((sum, c) => sum + c.employees, 0);
    const totalCustomers = countryCoverage.reduce((sum, c) => sum + c.customers, 0);
    return { totalOffices, totalEmployees, totalCustomers };
  }, [countryCoverage]);

  /**
   * Toggle expanded state for a country
   */
  const toggleExpanded = useCallback((countryCode) => {
    setExpandedCoverage((prev) => (prev === countryCode ? null : countryCode));
  }, []);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Global Coverage Map - Worldwide Presence Map Hub"
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
            {getIcon('globe', 'w-4 h-4 text-blue-600 dark:text-blue-400 mr-2')}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'Global Coverage'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Our'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Global Footprint'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              'With a presence across 45+ countries and 6 continents, we deliver supply chain solutions wherever you need them.'}
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

        {/* ==================== GLOBAL COVERAGE METRICS ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            {getIcon('office', 'w-8 h-8 mx-auto text-blue-600 dark:text-blue-400 mb-3')}
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {totalMetrics.totalOffices}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Office Locations</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            {getIcon('users', 'w-8 h-8 mx-auto text-blue-600 dark:text-blue-400 mb-3')}
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {totalMetrics.totalEmployees}+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Global Team Members</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            {getIcon('star', 'w-8 h-8 mx-auto text-blue-600 dark:text-blue-400 mb-3')}
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {totalMetrics.totalCustomers}+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Customers Worldwide</div>
          </div>
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
              aria-label={`Show ${region.label} coverage`}
            >
              {getIcon(region.icon, 'w-4 h-4')}
              {region.label}
              {region.count !== undefined && (
                <span className="ml-1 text-xs opacity-80">{region.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== WORLD MAP VISUALIZATION ==================== */}
        <div className="mb-12 bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Global Coverage Map
          </h3>
          <div className="relative aspect-video bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4">
            <div className="relative w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradient-global" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <rect width="1200" height="600" fill="url(#gradient-global)" />
                {/* Continent Shapes - Simplified */}
                <path
                  d="M200,180 L280,140 L370,150 L400,190 L370,240 L280,260 L200,240 L160,200 Z"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />
                <path
                  d="M520,200 L620,160 L720,170 L760,210 L720,260 L620,270 L520,240 L490,220 Z"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />
                <path
                  d="M920,220 L1020,190 L1100,210 L1120,250 L1070,290 L970,280 L900,250 Z"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />
                <path
                  d="M300,380 L420,350 L500,360 L530,400 L490,440 L380,460 L280,430 L250,400 Z"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />
                <path
                  d="M720,420 L800,390 L870,410 L900,450 L840,490 L750,480 L690,450 Z"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                />

                {/* Country Markers - Sample positions */}
                {filteredCountries.slice(0, 30).map((country, idx) => {
                  const regionConfig = getRegionConfig(country.region);
                  // Calculate approximate map positions based on country code
                  const mapPositions = {
                    US: { x: 320, y: 260 },
                    CA: { x: 290, y: 240 },
                    MX: { x: 340, y: 310 },
                    GB: { x: 510, y: 280 },
                    DE: { x: 540, y: 285 },
                    FR: { x: 530, y: 300 },
                    IT: { x: 560, y: 310 },
                    ES: { x: 520, y: 320 },
                    NL: { x: 525, y: 275 },
                    CN: { x: 800, y: 290 },
                    JP: { x: 880, y: 290 },
                    SG: { x: 830, y: 340 },
                    AU: { x: 950, y: 400 },
                    IN: { x: 760, y: 320 },
                    KR: { x: 860, y: 280 },
                    BR: { x: 370, y: 430 },
                    AR: { x: 340, y: 460 },
                    CL: { x: 330, y: 470 },
                    AE: { x: 650, y: 300 },
                    SA: { x: 640, y: 320 },
                    ZA: { x: 580, y: 450 },
                    NG: { x: 540, y: 390 },
                  };
                  const pos = mapPositions[country.code] || { x: 400 + idx * 20, y: 300 };
                  const isHovered = hoveredCountry === country.code;

                  return (
                    <g
                      key={idx}
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredCountry(country.code)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => setSelectedCountry(selectedCountry === country.code ? null : country.code)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedCountry(selectedCountry === country.code ? null : country.code)}
                    >
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHovered ? 8 : 6}
                        fill={regionConfig.badgeColor || '#3B82F6'}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                      <circle cx={pos.x} cy={pos.y} r={12} fill={regionConfig.badgeColor || '#3B82F6'} opacity="0.2">
                        <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                      </circle>
                      {isHovered && (
                        <text
                          x={pos.x}
                          y={pos.y - 12}
                          textAnchor="middle"
                          fill="#1F2937"
                          fontSize="9"
                          fontWeight="bold"
                          className="dark:fill-white"
                        >
                          {country.name}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-gray-500 dark:text-gray-400">
              {filteredCountries.length} countries with coverage
            </div>
          </div>
        </div>

        {/* ==================== COUNTRY COVERAGE GRID ==================== */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            {getIcon('globe', 'w-5 h-5 text-blue-600')}
            Country Coverage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCountries.map((country) => {
              const regionConfig = getRegionConfig(country.region);
              const isExpanded = expandedCoverage === country.code;

              return (
                <div
                  key={country.code}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${regionConfig.color} flex items-center justify-center`}
                        >
                          <span className="text-lg font-bold">{country.code}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {country.name}
                          </h4>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${regionConfig.color}`}
                          >
                            {regionConfig.label}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleExpanded(country.code)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                        aria-label={isExpanded ? 'Show less' : 'Show more'}
                      >
                        {isExpanded ? (
                          <HiOutlineChevronUp className="w-5 h-5" />
                        ) : (
                          <HiOutlineChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {country.offices}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Offices</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {country.employees}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Employees</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {country.customers}+
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Customers</div>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Full-service operations with local teams dedicated to serving customers in{' '}
                          {country.name} and the surrounding region.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                          {getIcon('location', 'w-4 h-4')}
                          <span>{country.offices} office locations nationwide</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================== GLOBAL SUPPORT BANNER ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
          {getIcon('globe', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {config?.supportTitle || 'Global Support, Local Expertise'}
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {config?.supportDescription ||
              'No matter where you are, our local teams are ready to provide personalized support in your language and time zone.'}
          </p>
          <Link
            href={config?.supportLink || '/contact'}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Find Your Local Office
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Global Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive updates about our global expansion, new office openings, and international events.'}
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
                aria-label="Email for global updates"
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

export default GlobalCoverageMapSection1;