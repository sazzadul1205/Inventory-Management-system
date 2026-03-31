// page/frontend/GlobalPresence/RegionalOfficesSection/RegionalOfficesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

// Icons
import {
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
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
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineChevronLeft,
    HiOutlineChevronRight
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';

const RegionalOfficesSection2 = ({ config }) => {
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [selectedService, setSelectedService] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [expandedOffice, setExpandedOffice] = useState(null);
    const [savedOffices, setSavedOffices] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('region'); // region, name, employees

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
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
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />
        };
        return icons[iconName] || <HiOutlineOfficeBuilding className={className} />;
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'globe', label: 'North America', flag: '🇺🇸', borderColor: 'border-blue-200 dark:border-blue-800', gradient: 'from-blue-500 to-blue-600' },
            'europe': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'globe', label: 'Europe', flag: '🇪🇺', borderColor: 'border-purple-200 dark:border-purple-800', gradient: 'from-purple-500 to-purple-600' },
            'asia-pacific': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'globe', label: 'Asia Pacific', flag: '🌏', borderColor: 'border-green-200 dark:border-green-800', gradient: 'from-green-500 to-green-600' },
            'latin-america': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'globe', label: 'Latin America', flag: '🌎', borderColor: 'border-orange-200 dark:border-orange-800', gradient: 'from-orange-500 to-orange-600' },
            'middle-east': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'globe', label: 'Middle East', flag: '🕌', borderColor: 'border-red-200 dark:border-red-800', gradient: 'from-red-500 to-red-600' },
            'africa': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Africa', flag: '🌍', borderColor: 'border-emerald-200 dark:border-emerald-800', gradient: 'from-emerald-500 to-emerald-600' }
        };
        return configs[region] || configs['north-america'];
    };

    // Handle save office
    const handleSaveOffice = (officeId) => {
        setSavedOffices(prev =>
            prev.includes(officeId)
                ? prev.filter(id => id !== officeId)
                : [...prev, officeId]
        );
    };

    // Get unique countries from offices
    const getUniqueCountries = () => {
        const countries = new Set();
        config?.offices?.forEach(office => {
            if (office.country) {
                countries.add(office.country);
            }
        });
        return Array.from(countries).sort();
    };

    // Get unique services from offices
    const getUniqueServices = () => {
        const services = new Set();
        config?.offices?.forEach(office => {
            if (office.services) {
                office.services.forEach(service => services.add(service));
            }
        });
        return Array.from(services).sort();
    };

    // Filter and sort offices
    const getFilteredOffices = useCallback(() => {
        let offices = config?.offices || [];

        if (searchQuery) {
            offices = offices.filter(o =>
                o.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                o.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                o.address?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                o.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedRegion !== 'all') {
            offices = offices.filter(o => o.region === selectedRegion);
        }

        if (selectedCountry !== 'all') {
            offices = offices.filter(o => o.country === selectedCountry);
        }

        if (selectedService !== 'all') {
            offices = offices.filter(o => o.services?.includes(selectedService));
        }

        if (sortBy === 'region') {
            offices = [...offices].sort((a, b) => (a.region || '').localeCompare(b.region || ''));
        } else if (sortBy === 'name') {
            offices = [...offices].sort((a, b) => a.city.localeCompare(b.city));
        } else if (sortBy === 'employees') {
            offices = [...offices].sort((a, b) => (b.employees || 0) - (a.employees || 0));
        }

        return offices;
    }, [config?.offices, searchQuery, selectedRegion, selectedCountry, selectedService, sortBy]);

    const filteredOffices = getFilteredOffices();
    const regions = config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: config?.offices?.length || 0 },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' }
    ];

    const uniqueCountries = getUniqueCountries();
    const uniqueServices = getUniqueServices();

    // Stats cards
    const stats = config?.stats || [
        { value: "6", label: "Regional Hubs", icon: "globe", trend: "+1", trendUp: true },
        { value: "50+", label: "Office Locations", icon: "office", trend: "+8", trendUp: true },
        { value: "1000+", label: "Local Experts", icon: "users", trend: "+150", trendUp: true },
        { value: "24/7", label: "Regional Support", icon: "clock", trend: "Always", trendUp: true }
    ];

    // Active filters count
    const activeFiltersCount = [selectedRegion !== 'all', selectedCountry !== 'all', selectedService !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedRegion('all');
        setSelectedCountry('all');
        setSelectedService('all');
        setSortBy('region');
    };

    // Group offices by region for list view
    const officesByRegion = filteredOffices.reduce((groups, office) => {
        const region = office.region || 'other';
        if (!groups[region]) groups[region] = [];
        groups[region].push(office);
        return groups;
    }, {});

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Regional Offices Directory"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Stats */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
                            <HiOutlineOfficeBuilding className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Regional Offices"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Regional Hubs"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Connect with our regional teams around the world. Our local experts understand your market and are ready to help you succeed."}
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                {stat.trend && (
                                    <div className={`text-xs mt-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                                        {stat.trend}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Search and Filters Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={config?.searchPlaceholder || "Search by city, country, or address..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-label="Search offices"
                        />
                    </div>

                    <div className="flex gap-2">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="region">Sort by Region</option>
                            <option value="name">Sort by City</option>
                            <option value="employees">Sort by Size</option>
                        </select>

                        {/* Filter Toggle Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            <HiOutlineFilter className="w-4 h-4" />
                            Filters
                            {activeFiltersCount > 0 && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                                    {activeFiltersCount}
                                </span>
                            )}
                        </button>

                        {/* View Mode Toggle */}
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
                </div>

                {/* Expanded Filters Panel */}
                {showFilters && (
                    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-4 gap-6">
                            {/* Region Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
                                <select
                                    value={selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Regions</option>
                                    {regions.filter(r => r.id !== 'all').map(region => (
                                        <option key={region.id} value={region.id}>{region.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Country Filter */}
                            {uniqueCountries.length > 0 && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Country</label>
                                    <select
                                        value={selectedCountry}
                                        onChange={(e) => setSelectedCountry(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="all">All Countries</option>
                                        {uniqueCountries.map(country => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* Service Filter */}
                            {uniqueServices.length > 0 && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Service Type</label>
                                    <select
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="all">All Services</option>
                                        {uniqueServices.map(service => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* Sort Option */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="region">By Region</option>
                                    <option value="name">By City</option>
                                    <option value="employees">By Size</option>
                                </select>
                            </div>
                        </div>

                        {activeFiltersCount > 0 && (
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={clearAllFilters}
                                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Region Pills (Quick Filters) */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {regions.map((region) => (
                        <button
                            key={region.id}
                            onClick={() => setSelectedRegion(region.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedRegion === region.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(region.icon, "w-4 h-4")}
                            {region.label}
                            {region.count !== undefined && (
                                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedRegion === region.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                    }`}>
                                    {region.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredOffices.length}</span> office locations
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Grid View */}
                {viewMode === 'grid' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredOffices.map((office) => {
                            const regionConfig = getRegionConfig(office.region);
                            const isExpanded = expandedOffice === office.id;
                            const isSaved = savedOffices.includes(office.id);

                            return (
                                <div
                                    key={office.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src={office.image}
                                            alt={office.city}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${regionConfig.color}`}>
                                                {regionConfig.label}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => handleSaveOffice(office.id)}
                                            className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                                        >
                                            <HiOutlineBookmark className={`w-4 h-4 ${isSaved ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'}`} />
                                        </button>
                                        {office.isRegionalHub && (
                                            <div className="absolute bottom-3 right-3">
                                                <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                                                    Regional HQ
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xl">{regionConfig.flag}</span>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{office.city}</h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 line-clamp-2">{office.address}</p>

                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                            <HiOutlinePhone className="w-4 h-4" />
                                            <span>{office.phone}</span>
                                        </div>

                                        {office.employees && (
                                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                                <HiOutlineUsers className="w-4 h-4" />
                                                <span>{office.employees} employees</span>
                                            </div>
                                        )}

                                        {/* Services Preview */}
                                        {office.services && office.services.length > 0 && (
                                            <div className="mb-3">
                                                <div className="flex flex-wrap gap-1">
                                                    {office.services.slice(0, 2).map((service, idx) => (
                                                        <span key={idx} className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full">
                                                            {service}
                                                        </span>
                                                    ))}
                                                    {office.services.length > 2 && (
                                                        <button
                                                            onClick={() => setExpandedOffice(isExpanded ? null : office.id)}
                                                            className="text-xs text-blue-600 hover:underline"
                                                        >
                                                            +{office.services.length - 2} more
                                                        </button>
                                                    )}
                                                </div>
                                                {isExpanded && office.services.length > 2 && (
                                                    <div className="mt-2 flex flex-wrap gap-1">
                                                        {office.services.slice(2).map((service, idx) => (
                                                            <span key={idx} className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full">
                                                                {service}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                            <a
                                                href={office.mapLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                            >
                                                Get Directions
                                                <HiOutlineExternalLink className="w-4 h-4" />
                                            </a>
                                            <a
                                                href={`mailto:${office.email}`}
                                                className="text-gray-400 hover:text-blue-600 transition-colors"
                                            >
                                                <HiOutlineMail className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* List View - Grouped by Region */}
                {viewMode === 'list' && (
                    <div className="space-y-8 mb-12">
                        {Object.entries(officesByRegion).map(([region, offices]) => {
                            const regionConfig = getRegionConfig(region);
                            return (
                                <div key={region}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full ${regionConfig.color} flex items-center justify-center`}>
                                            <span className="text-sm">{regionConfig.flag}</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{regionConfig.label}</h2>
                                        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                                        <span className="text-sm text-gray-500">{offices.length} offices</span>
                                    </div>
                                    <div className="space-y-3">
                                        {offices.map((office) => {
                                            const isSaved = savedOffices.includes(office.id);
                                            return (
                                                <div key={office.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <h3 className="font-semibold text-gray-900 dark:text-white">{office.city}</h3>
                                                                <span className="text-xs text-gray-500">{office.country}</span>
                                                                {office.isRegionalHub && (
                                                                    <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">
                                                                        Regional HQ
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{office.address}</p>
                                                            <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                                                                <span>{office.phone}</span>
                                                                <span>{office.email}</span>
                                                                {office.employees && <span>{office.employees} employees</span>}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => handleSaveOffice(office.id)}
                                                                className={`p-2 rounded-lg transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                                            >
                                                                <HiOutlineBookmark className="w-4 h-4" />
                                                            </button>
                                                            <a
                                                                href={office.mapLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                                                            >
                                                                Map
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* No Results */}
                {filteredOffices.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineOfficeBuilding className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No offices found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={clearAllFilters}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Regional Support Banner */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Need Regional Support?</h3>
                            <p className="text-blue-100 max-w-2xl">
                                Connect with your local regional office for personalized support and service in your language and time zone.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                            Find Your Regional Contact
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Regional Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive news about regional events, office openings, and local initiatives."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email for regional updates"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                            {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. Get 1-2 emails per month."}
                        </p>
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
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </section>
    );
};

export default RegionalOfficesSection2;