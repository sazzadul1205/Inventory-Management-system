// page/frontend/GlobalPresence/GlobalCoverageMapSection/GlobalCoverageMapSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// Icons
import {
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
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
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineZoomIn
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';

const GlobalCoverageMapSection2 = ({ config }) => {
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'map');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [hoveredCountry, setHoveredCountry] = useState(null);
    const [sortBy, setSortBy] = useState('name'); // name, offices, employees, customers

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
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
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />
        };
        return icons[iconName] || <HiOutlineGlobe className={className} />;
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'globe', label: 'North America', flag: '🇺🇸', gradient: 'from-blue-500 to-blue-600' },
            'europe': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'globe', label: 'Europe', flag: '🇪🇺', gradient: 'from-purple-500 to-purple-600' },
            'asia-pacific': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'globe', label: 'Asia Pacific', flag: '🌏', gradient: 'from-green-500 to-green-600' },
            'latin-america': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'globe', label: 'Latin America', flag: '🌎', gradient: 'from-orange-500 to-orange-600' },
            'middle-east': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'globe', label: 'Middle East', flag: '🕌', gradient: 'from-red-500 to-red-600' },
            'africa': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Africa', flag: '🌍', gradient: 'from-emerald-500 to-emerald-600' }
        };
        return configs[region] || configs['north-america'];
    };

    // Country data
    const countryCoverage = useMemo(() => (
        config?.countryCoverage || [
            { name: "United States", code: "US", region: "north-america", offices: 8, employees: 650, customers: 1200, growth: "+15%", mapX: 750, mapY: 250 },
            { name: "Canada", code: "CA", region: "north-america", offices: 3, employees: 180, customers: 450, growth: "+12%", mapX: 720, mapY: 220 },
            { name: "Mexico", code: "MX", region: "north-america", offices: 2, employees: 120, customers: 280, growth: "+20%", mapX: 680, mapY: 320 },
            { name: "United Kingdom", code: "GB", region: "europe", offices: 4, employees: 250, customers: 580, growth: "+10%", mapX: 520, mapY: 210 },
            { name: "Germany", code: "DE", region: "europe", offices: 3, employees: 200, customers: 520, growth: "+8%", mapX: 490, mapY: 190 },
            { name: "France", code: "FR", region: "europe", offices: 2, employees: 140, customers: 380, growth: "+14%", mapX: 510, mapY: 200 },
            { name: "Italy", code: "IT", region: "europe", offices: 2, employees: 110, customers: 290, growth: "+11%", mapX: 530, mapY: 230 },
            { name: "Spain", code: "ES", region: "europe", offices: 2, employees: 95, customers: 260, growth: "+16%", mapX: 480, mapY: 240 },
            { name: "Netherlands", code: "NL", region: "europe", offices: 1, employees: 65, customers: 180, growth: "+22%", mapX: 500, mapY: 195 },
            { name: "China", code: "CN", region: "asia-pacific", offices: 4, employees: 320, customers: 680, growth: "+25%", mapX: 980, mapY: 310 },
            { name: "Japan", code: "JP", region: "asia-pacific", offices: 3, employees: 210, customers: 520, growth: "+9%", mapX: 1020, mapY: 330 },
            { name: "Singapore", code: "SG", region: "asia-pacific", offices: 2, employees: 150, customers: 380, growth: "+18%", mapX: 940, mapY: 380 },
            { name: "Australia", code: "AU", region: "asia-pacific", offices: 3, employees: 180, customers: 420, growth: "+13%", mapX: 1080, mapY: 470 },
            { name: "India", code: "IN", region: "asia-pacific", offices: 3, employees: 280, customers: 620, growth: "+32%", mapX: 860, mapY: 340 },
            { name: "South Korea", code: "KR", region: "asia-pacific", offices: 2, employees: 140, customers: 350, growth: "+17%", mapX: 1000, mapY: 320 },
            { name: "Brazil", code: "BR", region: "latin-america", offices: 3, employees: 220, customers: 480, growth: "+21%", mapX: 320, mapY: 440 },
            { name: "Argentina", code: "AR", region: "latin-america", offices: 1, employees: 65, customers: 150, growth: "+15%", mapX: 310, mapY: 470 },
            { name: "Chile", code: "CL", region: "latin-america", offices: 1, employees: 55, customers: 130, growth: "+12%", mapX: 330, mapY: 480 },
            { name: "UAE", code: "AE", region: "middle-east", offices: 2, employees: 120, customers: 280, growth: "+28%", mapX: 470, mapY: 340 },
            { name: "Saudi Arabia", code: "SA", region: "middle-east", offices: 1, employees: 70, customers: 160, growth: "+24%", mapX: 450, mapY: 330 },
            { name: "South Africa", code: "ZA", region: "africa", offices: 2, employees: 110, customers: 250, growth: "+19%", mapX: 580, mapY: 510 },
            { name: "Nigeria", code: "NG", region: "africa", offices: 1, employees: 55, customers: 130, growth: "+30%", mapX: 540, mapY: 490 }
        ]
    ), [config?.countryCoverage]);

    // Get unique regions
    const regions = config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: countryCoverage.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' }
    ];

    // Filter countries
    const getFilteredCountries = useCallback(() => {
        let countries = [...countryCoverage];

        if (searchQuery) {
            countries = countries.filter(c =>
                c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.code.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedRegion !== 'all') {
            countries = countries.filter(c => c.region === selectedRegion);
        }

        if (sortBy === 'name') {
            countries.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'offices') {
            countries.sort((a, b) => b.offices - a.offices);
        } else if (sortBy === 'employees') {
            countries.sort((a, b) => b.employees - a.employees);
        } else if (sortBy === 'customers') {
            countries.sort((a, b) => b.customers - a.customers);
        }

        return countries;
    }, [countryCoverage, searchQuery, selectedRegion, sortBy]);

    const filteredCountries = getFilteredCountries();

    // Stats
    const totalOffices = filteredCountries.reduce((sum, c) => sum + c.offices, 0);
    const totalEmployees = filteredCountries.reduce((sum, c) => sum + c.employees, 0);

    // Active filters count
    const activeFiltersCount = [selectedRegion !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedRegion('all');
        setSortBy('name');
    };

    // Get color for region
    const getRegionColor = (region) => {
        const colors = {
            'north-america': '#3B82F6',
            'europe': '#8B5CF6',
            'asia-pacific': '#10B981',
            'latin-america': '#F97316',
            'middle-east': '#EF4444',
            'africa': '#10B981'
        };
        return colors[region] || '#6B7280';
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Global Coverage Map"
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
                            <HiOutlineGlobe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Global Coverage"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Global Footprint"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "With a presence across 45+ countries and 6 continents, we deliver supply chain solutions wherever you need them."}
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{filteredCountries.length}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Countries</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{totalOffices}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Offices</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{totalEmployees.toLocaleString()}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Employees</div>
                        </div>
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
                            placeholder="Search by country name or code..."
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Search countries"
                        />
                    </div>

                    <div className="flex gap-2">
                        <select
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {regions.map(region => (
                                <option key={region.id} value={region.id}>{region.label}</option>
                            ))}
                        </select>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="name">Sort by Name</option>
                            <option value="offices">Sort by Offices</option>
                            <option value="employees">Sort by Employees</option>
                            <option value="customers">Sort by Customers</option>
                        </select>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
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
                        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                            <button
                                onClick={() => setViewMode('map')}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'map' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="Map view"
                            >
                                <HiOutlineMap className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="List view"
                            >
                                <HiOutlineViewList className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="Grid view"
                            >
                                <HiOutlineViewGrid className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Expanded Filters Panel */}
                {showFilters && (
                    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
                                <select
                                    value={selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {regions.map(region => (
                                        <option key={region.id} value={region.id}>{region.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="name">Country Name</option>
                                    <option value="offices">Number of Offices</option>
                                    <option value="employees">Number of Employees</option>
                                    <option value="customers">Number of Customers</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Minimum Offices</label>
                                <input type="number" placeholder="0" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg" />
                            </div>
                        </div>
                        {activeFiltersCount > 0 && (
                            <div className="mt-4 flex justify-end">
                                <button onClick={clearAllFilters} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Region Pills */}
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
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredCountries.length}</span> countries
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Map View */}
                {viewMode === 'map' && (
                    <div className="mb-12 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                        <div className="relative aspect-video bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                            {/* Zoom Controls */}
                            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                                <button
                                    onClick={() => setZoomLevel(Math.min(zoomLevel + 0.2, 2))}
                                    className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                                >
                                    <HiOutlineZoomIn className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setZoomLevel(Math.max(zoomLevel - 0.2, 0.5))}
                                    className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                                >
                                    <HiOutlineZoomIn className="w-4 h-4 rotate-180" />
                                </button>
                            </div>

                            <svg
                                className="w-full h-full transition-transform duration-300"
                                viewBox="0 0 1200 600"
                                preserveAspectRatio="none"
                                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
                            >
                                <rect width="1200" height="600" fill="url(#map-gradient)" className="opacity-30" />
                                <defs>
                                    <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                                {/* Simplified continent outlines */}
                                <path d="M200,150 L280,120 L350,140 L380,180 L350,220 L280,240 L200,220 L170,180 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                <path d="M500,180 L600,150 L700,160 L750,200 L720,240 L620,250 L520,230 L480,200 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                <path d="M900,200 L1000,180 L1080,200 L1100,240 L1050,270 L950,260 L880,240 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                <path d="M300,350 L400,330 L480,340 L520,380 L480,420 L380,430 L280,410 L260,380 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />
                                <path d="M700,400 L780,380 L850,400 L880,440 L820,470 L730,460 L680,430 Z" fill="none" stroke="#9CA3AF" strokeWidth="1" />

                                {/* Country markers */}
                                {filteredCountries.map((country, idx) => {
                                    const isHovered = hoveredCountry === country.code;
                                    return (
                                        <g
                                            key={idx}
                                            className="cursor-pointer transition-all duration-300"
                                            onMouseEnter={() => setHoveredCountry(country.code)}
                                            onMouseLeave={() => setHoveredCountry(null)}
                                            onClick={() => setSelectedCountry(selectedCountry === country.code ? null : country.code)}
                                        >
                                            <circle
                                                cx={country.mapX}
                                                cy={country.mapY}
                                                r={isHovered ? 12 : 8}
                                                fill={getRegionColor(country.region)}
                                                stroke="white"
                                                strokeWidth="2"
                                                className="transition-all duration-300"
                                            />
                                            {isHovered && (
                                                <>
                                                    <circle cx={country.mapX} cy={country.mapY} r="20" fill={getRegionColor(country.region)} fillOpacity="0.2" />
                                                    <text x={country.mapX} y={country.mapY - 15} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                                                        {country.name}
                                                    </text>
                                                </>
                                            )}
                                        </g>
                                    );
                                })}
                            </svg>

                            {/* Map Legend */}
                            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-md">
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                                        <span className="text-xs text-gray-600">North America</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                                        <span className="text-xs text-gray-600">Europe</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="text-xs text-gray-600">Asia Pacific</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                                        <span className="text-xs text-gray-600">Latin America</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* List View */}
                {viewMode === 'list' && (
                    <div className="mb-12 overflow-x-auto">
                        <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700/50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Offices</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Employees</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Customers</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {filteredCountries.map((country) => {
                                    const regionConfig = getRegionConfig(country.region);
                                    return (
                                        <tr key={country.code} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors cursor-pointer" onClick={() => setSelectedCountry(selectedCountry === country.code ? null : country.code)}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <span className={`w-8 h-8 rounded-full ${regionConfig.color} flex items-center justify-center text-sm font-bold`}>
                                                        {country.code}
                                                    </span>
                                                    <span className="font-medium text-gray-900 dark:text-white">{country.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`text-xs px-2 py-1 rounded-full ${regionConfig.color}`}>
                                                    {regionConfig.label}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-gray-900 dark:text-white">{country.offices}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-gray-900 dark:text-white">{country.employees}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-gray-900 dark:text-white">{country.customers}+</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-green-600 font-semibold">{country.growth}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Grid View */}
                {viewMode === 'grid' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredCountries.map((country) => {
                            const regionConfig = getRegionConfig(country.region);
                            return (
                                <div
                                    key={country.code}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                    onClick={() => setSelectedCountry(selectedCountry === country.code ? null : country.code)}
                                >
                                    <div className="p-5">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-12 h-12 rounded-xl ${regionConfig.color} flex items-center justify-center text-xl`}>
                                                {country.code}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{country.name}</h3>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${regionConfig.color}`}>
                                                    {regionConfig.label}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3 mb-4">
                                            <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                <div className="text-lg font-bold text-blue-600">{country.offices}</div>
                                                <div className="text-xs text-gray-500">Offices</div>
                                            </div>
                                            <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                <div className="text-lg font-bold text-green-600">{country.employees}</div>
                                                <div className="text-xs text-gray-500">Employees</div>
                                            </div>
                                            <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                <div className="text-lg font-bold text-purple-600">{country.customers}+</div>
                                                <div className="text-xs text-gray-500">Customers</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                            <span className="text-xs text-green-600 font-semibold">Growth: {country.growth}</span>
                                            <button className="text-blue-600 text-sm font-semibold hover:underline">View Details →</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* No Results */}
                {filteredCountries.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineGlobe className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No countries found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button onClick={clearAllFilters} className="mt-4 text-blue-600 hover:underline">
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Global Support Banner */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Global Support, Local Expertise</h3>
                            <p className="text-blue-100 max-w-2xl">
                                No matter where you are, our local teams are ready to provide personalized support in your language and time zone.
                            </p>
                        </div>
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                            Find Your Local Office
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
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
      `}</style>
        </section>
    );
};

export default GlobalCoverageMapSection2;
