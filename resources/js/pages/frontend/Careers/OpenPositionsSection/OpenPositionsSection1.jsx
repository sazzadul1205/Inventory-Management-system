// page/frontend/Careers/OpenPositionsSection/OpenPositionsSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineBriefcase,
    HiOutlineLocationMarker,
    HiOutlineClock,
    HiOutlineCurrencyDollar,
    HiOutlineUserGroup,
    HiOutlineAcademicCap,
    HiOutlineChartBar,
    HiOutlineLightBulb,
    HiOutlineGlobe,
    HiOutlineCalendar,
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
    HiOutlineUsers,
    HiOutlineCheckCircle,
    HiArrowRight,
    HiOutlineDocumentText,
    HiOutlinePresentationChartLine,
    HiOutlineStar,
    HiOutlineTrendingUp,
    HiOutlineFire,
    HiOutlineHeart,
    HiOutlineMap,
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from "react-icons/md";

const OpenPositionsSection1 = ({ config }) => {
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedPosition, setExpandedPosition] = useState(null);
    const [savedPositions, setSavedPositions] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            briefcase: <HiOutlineBriefcase className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            clock: <HiOutlineClock className={className} />,
            dollar: <HiOutlineCurrencyDollar className={className} />,
            users: <HiOutlineUserGroup className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
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
            usergroup: <HiOutlineUsers className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            arrow: <HiArrowRight className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            presentation: <HiOutlinePresentationChartLine className={className} />,
            star: <HiOutlineStar className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            heart: <HiOutlineHeart className={className} />,
            map: <HiOutlineMap className={className} />,
            headphones: <HiOutlineHeadphones className={className} />
        };
        return icons[iconName] || <HiOutlineBriefcase className={className} />;
    };

    // Get department configuration
    const getDepartmentConfig = (department) => {
        const configs = {
            'engineering': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'code', label: 'Engineering' },
            'product': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'lightbulb', label: 'Product' },
            'sales': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'chart', label: 'Sales' },
            'marketing': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'trending', label: 'Marketing' },
            'customer-success': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'users', label: 'Customer Success' },
            'operations': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Operations' },
            'hr': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Human Resources' },
            'finance': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'dollar', label: 'Finance' }
        };
        return configs[department] || { color: 'bg-gray-100 text-gray-700', icon: 'briefcase', label: department };
    };

    // Get employment type configuration
    const getTypeConfig = (type) => {
        const configs = {
            'full-time': { color: 'bg-green-100 text-green-700', label: 'Full-Time', badge: 'Full-Time' },
            'part-time': { color: 'bg-blue-100 text-blue-700', label: 'Part-Time', badge: 'Part-Time' },
            'contract': { color: 'bg-orange-100 text-orange-700', label: 'Contract', badge: 'Contract' },
            'internship': { color: 'bg-purple-100 text-purple-700', label: 'Internship', badge: 'Internship' },
            'remote': { color: 'bg-indigo-100 text-indigo-700', label: 'Remote', badge: 'Remote' }
        };
        return configs[type] || { color: 'bg-gray-100 text-gray-700', label: type, badge: type };
    };

    // Handle save position
    const handleSavePosition = (positionId) => {
        if (savedPositions.includes(positionId)) {
            setSavedPositions(savedPositions.filter(id => id !== positionId));
        } else {
            setSavedPositions([...savedPositions, positionId]);
        }
    };

    // Filter positions
    const getFilteredPositions = () => {
        let positions = config?.positions || [];

        if (searchQuery) {
            positions = positions.filter(p =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedDepartment !== 'all') {
            positions = positions.filter(p => p.department === selectedDepartment);
        }

        if (selectedLocation !== 'all') {
            positions = positions.filter(p => p.location === selectedLocation);
        }

        if (selectedType !== 'all') {
            positions = positions.filter(p => p.type === selectedType);
        }

        return positions;
    };

    const filteredPositions = getFilteredPositions();
    const departments = config?.departments || [
        { id: 'all', label: 'All Departments', icon: 'briefcase', count: config?.positions?.length || 0 },
        { id: 'engineering', label: 'Engineering', icon: 'code' },
        { id: 'product', label: 'Product', icon: 'lightbulb' },
        { id: 'sales', label: 'Sales', icon: 'chart' },
        { id: 'marketing', label: 'Marketing', icon: 'trending' },
        { id: 'customer-success', label: 'Customer Success', icon: 'users' },
        { id: 'operations', label: 'Operations', icon: 'cog' }
    ];

    const locations = config?.locations || [
        { id: 'all', label: 'All Locations' },
        { id: 'remote', label: 'Remote' },
        { id: 'new-york', label: 'New York, NY' },
        { id: 'san-francisco', label: 'San Francisco, CA' },
        { id: 'london', label: 'London, UK' },
        { id: 'singapore', label: 'Singapore' }
    ];

    const employmentTypes = [
        { id: 'all', label: 'All Types' },
        { id: 'full-time', label: 'Full-Time' },
        { id: 'part-time', label: 'Part-Time' },
        { id: 'contract', label: 'Contract' },
        { id: 'internship', label: 'Internship' },
        { id: 'remote', label: 'Remote' }
    ];

    // Featured position
    const featuredPosition = config?.featuredPosition || filteredPositions[0];

    // Stats
    const stats = config?.stats || [
        { value: "25+", label: "Open Positions", icon: "briefcase" },
        { value: "8", label: "Departments", icon: "users" },
        { value: "6", label: "Locations", icon: "globe" },
        { value: "100+", label: "Team Members", icon: "usergroup" }
    ];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Open Positions"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineBriefcase className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Join Our Team"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Current"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Open Positions"}</span> {config?.title?.suffix || ""}
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Join our mission to transform supply chain management. Explore opportunities to grow your career with a team of innovators and problem-solvers."}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                {getIcon(stat.icon, "w-5 h-5 text-blue-600")}
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-8">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={config?.searchPlaceholder || "Search by job title, department, or keyword..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search positions"
                    />
                </div>

                {/* Department Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {departments.map((dept) => (
                        <button
                            key={dept.id}
                            onClick={() => setSelectedDepartment(dept.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedDepartment === dept.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {getIcon(dept.icon, "w-4 h-4")}
                            {dept.label}
                            {dept.count !== undefined && (
                                <span className="ml-1 text-xs opacity-80">{dept.count}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Location and Type Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
                        <HiOutlineLocationMarker className="w-4 h-4 text-gray-500" />
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
                            aria-label="Filter by location"
                        >
                            {locations.map(loc => (
                                <option key={loc.id} value={loc.id}>{loc.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
                        <HiOutlineClock className="w-4 h-4 text-gray-500" />
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
                            aria-label="Filter by employment type"
                        >
                            {employmentTypes.map(type => (
                                <option key={type.id} value={type.id}>{type.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Featured Position */}
                {featuredPosition && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                                Featured Position
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDepartmentConfig(featuredPosition.department).color}`}>
                                                    {getDepartmentConfig(featuredPosition.department).label}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {featuredPosition.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-4 mb-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <HiOutlineLocationMarker className="w-4 h-4" />
                                                <span>{featuredPosition.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>{getTypeConfig(featuredPosition.type).label}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <HiOutlineCurrencyDollar className="w-4 h-4" />
                                                <span>{featuredPosition.salary}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredPosition.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {featuredPosition.requirements?.slice(0, 3).map((req, idx) => (
                                                <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full">
                                                    {req}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={featuredPosition.link}
                                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                Apply Now
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleSavePosition(featuredPosition.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedPositions.includes(featuredPosition.id)
                                                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedPositions.includes(featuredPosition.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                                        <img
                                            src={featuredPosition.image}
                                            alt={featuredPosition.title}
                                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Positions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredPositions.map((position) => {
                        const deptConfig = getDepartmentConfig(position.department);
                        const typeConfig = getTypeConfig(position.type);
                        const isExpanded = expandedPosition === position.id;
                        const isSaved = savedPositions.includes(position.id);

                        return (
                            <div
                                key={position.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                                {position.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${deptConfig.color}`}>
                                                    {deptConfig.label}
                                                </span>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${typeConfig.color}`}>
                                                    {typeConfig.badge}
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleSavePosition(position.id)}
                                            className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                        >
                                            <HiOutlineBookmark className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <HiOutlineLocationMarker className="w-4 h-4" />
                                            <span>{position.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <HiOutlineCurrencyDollar className="w-4 h-4" />
                                            <span>{position.salary}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <HiOutlineCalendar className="w-4 h-4" />
                                            <span>Posted {position.postedDate}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {position.description}
                                    </p>

                                    {/* Expandable Requirements */}
                                    {position.requirements && position.requirements.length > 0 && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => setExpandedPosition(isExpanded ? null : position.id)}
                                                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Show less' : `View ${position.requirements.length} requirements`}
                                                <HiArrowRight className="w-4 h-4" />
                                            </button>

                                            {isExpanded && (
                                                <ul className="mt-3 space-y-2">
                                                    {position.requirements.map((req, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                            <span className="text-gray-700 dark:text-gray-300">{req}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {position.tags && position.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {position.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <Link
                                            href={position.link}
                                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            Apply Now
                                            <HiArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredPositions.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineBriefcase className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No positions found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedDepartment('all');
                                setSelectedLocation('all');
                                setSelectedType('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Join Talent Community CTA */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {config?.talentTitle || "Don't See the Right Fit?"}
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        {config?.talentDescription || "Join our talent community to receive updates about future opportunities that match your skills and interests."}
                    </p>
                    <Link
                        href="/talent-community"
                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Join Talent Community
                        <HiArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Job Alert Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive notifications about new job openings and career opportunities."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email for job alerts"
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
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
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
      `}</style>
        </section>
    );
};

export default OpenPositionsSection1;