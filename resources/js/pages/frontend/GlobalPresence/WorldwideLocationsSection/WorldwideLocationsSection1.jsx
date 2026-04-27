// page/frontend/GlobalPresence/WorldwideLocationsSection/WorldwideLocationsSection1.jsx

/**
 * Worldwide Locations Section - Global Office Locations Hub
 *
 * Unique design elements:
 * - Stats cards for global presence metrics (countries, offices, employees, support)
 * - Interactive world map visualization with office location dots
 * - Region filter chips with custom icons
 * - Country filter dropdown for geographic targeting
 * - Featured locations spotlight with hero layout
 * - Office details expansion with hours information
 * - Save/bookmark functionality for locations
 * - Get directions link with external map integration
 * - Contact information display (phone, email)
 * - Search across cities, countries, and addresses
 * - Newsletter subscription integration
 * - Global support CTA banner
 * - Animated gradient background orbs
 * - Responsive grid layout for location cards
 * - Office hours display on expandable sections
 *
 * All icons from react-icons (hi, hi2, fa)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Ant Design
import { FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineLocationMarker,
  HiOutlineGlobe,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineMail,
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
  HiOutlinePhone,
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

const WorldwideLocationsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedLocations, setSavedLocations] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [expandedLocation, setExpandedLocation] = useState(null);

  // ==================== MEMOIZED DATA ====================
  const allLocations = useMemo(() => config?.locations || [], [config?.locations]);

  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe' },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' },
      ],
    [config?.regions]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '25+', label: 'Countries', icon: 'globe' },
        { value: '50+', label: 'Office Locations', icon: 'building' },
        { value: '1000+', label: 'Global Employees', icon: 'users' },
        { value: '24/7', label: 'Global Support', icon: 'clock' },
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
      location: <HiOutlineLocationMarker className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      office: <HiOutlineOfficeBuilding className={className} />,
      users: <HiOutlineUsers className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      tag: <HiOutlineTag className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      mail: <HiOutlineMail className={className} />,
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
      phone: <HiOutlinePhone className={className} />,
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
    return icons[iconName] || <HiOutlineLocationMarker className={className} />;
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
        mapX: 300,
        mapY: 250,
      },
      europe: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'Europe',
        mapX: 500,
        mapY: 280,
      },
      'asia-pacific': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Asia Pacific',
        mapX: 850,
        mapY: 290,
      },
      'latin-america': {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Latin America',
        mapX: 350,
        mapY: 420,
      },
      'middle-east': {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'Middle East',
        mapX: 650,
        mapY: 300,
      },
      africa: {
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'globe',
        label: 'Africa',
        mapX: 550,
        mapY: 400,
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
   * Get unique countries from locations for filter dropdown
   */
  const getUniqueCountries = useCallback(() => {
    const countries = new Set();
    allLocations.forEach((location) => {
      if (location.country) {
        countries.add(location.country);
      }
    });
    return Array.from(countries).sort();
  }, [allLocations]);

  /**
   * Toggle save/bookmark status for a location
   */
  const handleSaveLocation = useCallback((locationId) => {
    setSavedLocations((prev) =>
      prev.includes(locationId) ? prev.filter((id) => id !== locationId) : [...prev, locationId]
    );
  }, []);

  /**
   * Toggle expanded state for a location
   */
  const toggleExpanded = useCallback((locationId) => {
    setExpandedLocation((prev) => (prev === locationId ? null : locationId));
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

  const filteredLocations = useMemo(() => {
    let locations = [...allLocations];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      locations = locations.filter(
        (l) =>
          l.city?.toLowerCase().includes(query) ||
          l.country?.toLowerCase().includes(query) ||
          l.address?.toLowerCase().includes(query) ||
          l.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedRegion !== 'all') {
      locations = locations.filter((l) => l.region === selectedRegion);
    }

    if (selectedCountry !== 'all') {
      locations = locations.filter((l) => l.country === selectedCountry);
    }

    return locations;
  }, [allLocations, searchQuery, selectedRegion, selectedCountry]);

  // Get featured locations (first 3 marked as featured or first 3 in filtered list)
  const featuredLocations = useMemo(() => {
    const featured = allLocations.filter((l) => l.isFeatured);
    return featured.length > 0 ? featured.slice(0, 3) : filteredLocations.slice(0, 3);
  }, [allLocations, filteredLocations]);

  const uniqueCountries = getUniqueCountries();

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Worldwide Locations - Global Office Locations Hub"
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
              {config?.badge || 'Global Presence'}
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
              'With offices across the globe, we\'re strategically positioned to serve our customers wherever they are. Find a location near you.'}
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
              config?.searchPlaceholder || 'Search by city, country, or address...'
            }
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search locations"
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
              aria-label={`Show ${region.label} locations`}
            >
              {getIcon(region.icon, 'w-4 h-4')}
              {region.label}
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

        {/* ==================== WORLD MAP VISUALIZATION ==================== */}
        <div className="mb-16 bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="relative aspect-2/1 bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Simple world map representation - dots for office locations */}
                <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.15" />
                    </linearGradient>
                    <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="1200" height="600" fill="url(#gradient)" />
                  {/* Continents outline - simplified */}
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
                  {/* Location dots */}
                  {allLocations.map((loc, idx) => (
                    <g key={idx}>
                      <circle
                        cx={loc.mapX}
                        cy={loc.mapY}
                        r="6"
                        fill="#3B82F6"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-300 hover:r-8"
                      />
                      <circle cx={loc.mapX} cy={loc.mapY} r="12" fill="#3B82F6" opacity="0.3">
                        <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-gray-500 dark:text-gray-400">
              {filteredLocations.length} office locations worldwide
            </div>
          </div>
        </div>

        {/* ==================== FEATURED LOCATIONS ==================== */}
        {featuredLocations.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              {getIcon('star', 'w-5 h-5 text-yellow-500')}
              Featured Locations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredLocations.map((location) => {
                const regionConfig = getRegionConfig(location.region);
                const isSaved = savedLocations.includes(location.id);

                return (
                  <div
                    key={location.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={location.image}
                        alt={location.city}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${regionConfig.color}`}
                        >
                          {regionConfig.label}
                        </span>
                      </div>
                      <button
                        onClick={() => handleSaveLocation(location.id)}
                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group/btn"
                        aria-label={isSaved ? 'Remove from saved' : 'Save location'}
                      >
                        {getIcon('bookmark', `w-4 h-4 ${isSaved ? 'text-amber-500 fill-amber-500' : 'text-gray-600'}`)}
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        {getIcon('location', 'w-5 h-5 text-blue-600')}
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {location.city}
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{location.address}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        {getIcon('phone', 'w-4 h-4')}
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        {getIcon('mail', 'w-4 h-4')}
                        <span>{location.email}</span>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                        <a
                          href={location.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                        >
                          View on Map
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

        {/* ==================== LOCATIONS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredLocations.map((location) => {
            const regionConfig = getRegionConfig(location.region);
            const isExpanded = expandedLocation === location.id;
            const isSaved = savedLocations.includes(location.id);

            return (
              <div
                key={location.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="p-6">
                  {/* Location Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${regionConfig.color} flex items-center justify-center`}
                      >
                        {getIcon(regionConfig.icon, 'w-5 h-5')}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {location.city}
                        </h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${regionConfig.color}`}
                        >
                          {regionConfig.label}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSaveLocation(location.id)}
                      className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                        }`}
                      aria-label={isSaved ? 'Remove from saved' : 'Save location'}
                    >
                      {getIcon('bookmark', 'w-4 h-4')}
                    </button>
                  </div>

                  {/* Address */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{location.address}</p>

                  {/* Contact Information */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon('phone', 'w-4 h-4')}
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon('mail', 'w-4 h-4')}
                      <span>{location.email}</span>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  {location.details && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(location.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : 'View office details'}
                      >
                        {isExpanded ? 'Show less' : 'View office details'}
                        <HiArrowRight className="w-4 h-4" />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 space-y-2 animate-fadeIn">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {location.details}
                          </p>
                          {location.hours && (
                            <div className="pt-2">
                              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                Office Hours:
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {location.hours}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {location.tags && location.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {location.tags.slice(0, 3).map((tag, idx) => (
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
                      href={location.mapLink}
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
        {filteredLocations.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('globe', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No locations found
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

        {/* ==================== GLOBAL SUPPORT BANNER ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
          {getIcon('globe', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {config?.supportTitle || '24/7 Global Support'}
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {config?.supportDescription ||
              'No matter where you are, our global team is ready to assist you with dedicated support in your time zone.'}
          </p>
          <Link
            href={config?.supportLink || '/contact'}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Support
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Get Global Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive news about new office openings, regional events, and global initiatives.'}
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

export default WorldwideLocationsSection1;