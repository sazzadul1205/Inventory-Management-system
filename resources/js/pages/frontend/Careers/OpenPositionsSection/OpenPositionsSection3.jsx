// page/frontend/Careers/OpenPositionsSection/OpenPositionsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef } from 'react';

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
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineLibrary,
    HiOutlineNewspaper,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlineZoomIn,
    HiOutlineVolumeUp,
    HiOutlineQrcode,
    HiOutlinePrinter,
    HiOutlineCalendar as HiOutlineCalendarIcon,
    HiOutlineChartBar as HiOutlineChartBarIcon,
    HiOutlineTrendingUp as HiOutlineTrendingUpIcon,
    HiOutlineUserCircle,
    HiOutlineDocumentSearch,
    HiOutlineClipboardList,
    HiOutlineOfficeBuilding,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import {
    MdOutlineFullscreen as HiOutlineFullscreen,
    MdOutlineHeadphones as HiOutlineHeadphones,
    MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const OpenPositionsSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [showPositionModal, setShowPositionModal] = useState(false);
    const [favoritePositions, setFavoritePositions] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [applicationStep, setApplicationStep] = useState(1);
    const [applicationSubmitted, setApplicationSubmitted] = useState(false);
    const [applicationData, setApplicationData] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
        linkedIn: '',
        portfolio: '',
        startDate: '',
        salaryExpectation: '',
        heardFrom: ''
    });
    const carouselRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('favoritePositions');
        if (saved) setFavoritePositions(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('favoritePositions', JSON.stringify(favoritePositions));
    }, [favoritePositions]);

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
            chartBar: <HiOutlineChartBarIcon className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            calendarIcon: <HiOutlineCalendarIcon className={className} />,
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
            trendingUp: <HiOutlineTrendingUpIcon className={className} />,
            fire: <HiOutlineFire className={className} />,
            heart: <HiOutlineHeart className={className} />,
            map: <HiOutlineMap className={className} />,
            headphones: <HiOutlineHeadphones className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            library: <HiOutlineLibrary className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            fullscreen: <HiOutlineFullscreen className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            caption: <HiOutlineClosedCaption className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            printer: <HiOutlinePrinter className={className} />,
            userCircle: <HiOutlineUserCircle className={className} />,
            documentSearch: <HiOutlineDocumentSearch className={className} />,
            clipboardList: <HiOutlineClipboardList className={className} />,
            officeBuilding: <HiOutlineOfficeBuilding className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />
        };
        return icons[iconName] || <HiOutlineBriefcase className={className} />;
    };

    // Get department configuration
    const getDepartmentConfig = (department) => {
        const configs = {
            'engineering': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'code', label: 'Engineering', gradient: 'from-blue-500 to-blue-600' },
            'product': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'lightbulb', label: 'Product', gradient: 'from-purple-500 to-purple-600' },
            'sales': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'chart', label: 'Sales', gradient: 'from-green-500 to-green-600' },
            'marketing': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'trending', label: 'Marketing', gradient: 'from-orange-500 to-orange-600' },
            'customer-success': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'users', label: 'Customer Success', gradient: 'from-red-500 to-red-600' },
            'operations': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Operations', gradient: 'from-indigo-500 to-indigo-600' }
        };
        return configs[department] || { color: 'bg-gray-100 text-gray-700', icon: 'briefcase', label: department };
    };

    // Get employment type configuration
    const getTypeConfig = (type) => {
        const configs = {
            'full-time': { color: 'bg-green-100 text-green-700', label: 'Full-Time', badge: '🔵 Full-Time', gradient: 'from-green-500 to-green-600' },
            'part-time': { color: 'bg-blue-100 text-blue-700', label: 'Part-Time', badge: '🟢 Part-Time', gradient: 'from-blue-500 to-blue-600' },
            'contract': { color: 'bg-orange-100 text-orange-700', label: 'Contract', badge: '🟠 Contract', gradient: 'from-orange-500 to-orange-600' },
            'internship': { color: 'bg-purple-100 text-purple-700', label: 'Internship', badge: '🟣 Internship', gradient: 'from-purple-500 to-purple-600' },
            'remote': { color: 'bg-indigo-100 text-indigo-700', label: 'Remote', badge: '🌐 Remote', gradient: 'from-indigo-500 to-indigo-600' }
        };
        return configs[type] || { color: 'bg-gray-100 text-gray-700', label: type, badge: type };
    };

    // Get experience level configuration
    const getExperienceConfig = (level) => {
        const configs = {
            'entry': { color: 'bg-green-100 text-green-700', label: 'Entry Level', badge: '🎓 Entry Level' },
            'mid': { color: 'bg-blue-100 text-blue-700', label: 'Mid Level', badge: '📈 Mid Level' },
            'senior': { color: 'bg-purple-100 text-purple-700', label: 'Senior', badge: '🏆 Senior' },
            'lead': { color: 'bg-orange-100 text-orange-700', label: 'Lead', badge: '⭐ Lead' }
        };
        return configs[level] || { color: 'bg-gray-100 text-gray-700', label: level, badge: level };
    };

    // Handle favorite position
    const handleFavoritePosition = (positionId) => {
        setFavoritePositions(prev =>
            prev.includes(positionId)
                ? prev.filter(id => id !== positionId)
                : [...prev, positionId]
        );
    };

    // Open position modal with application form
    const openPositionModal = (position) => {
        setSelectedPosition(position);
        setApplicationStep(1);
        setApplicationSubmitted(false);
        setApplicationData({
            fullName: '',
            email: '',
            phone: '',
            resume: null,
            coverLetter: '',
            linkedIn: '',
            portfolio: '',
            startDate: '',
            salaryExpectation: '',
            heardFrom: ''
        });
        setShowPositionModal(true);
    };

    // Handle application input change
    const handleApplicationChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'resume') {
            setApplicationData({ ...applicationData, [name]: files[0] });
        } else {
            setApplicationData({ ...applicationData, [name]: value });
        }
    };

    // Submit application
    const handleSubmitApplication = () => {
        // Simulate API call
        setTimeout(() => {
            setApplicationSubmitted(true);
        }, 1000);
    };

    // Carousel navigation for departments
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.featuredDepartments?.length || 1));
    }, [config?.featuredDepartments?.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + (config?.featuredDepartments?.length || 1)) % (config?.featuredDepartments?.length || 1));
    }, [config?.featuredDepartments?.length]);

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.featuredDepartments?.length > 1 && activeTab === 'departments') {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.featuredDepartments?.length, activeTab, nextSlide]);

    // Filter positions
    const getFilteredPositions = useCallback(() => {
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

        if (activeTab === 'favorites') {
            positions = positions.filter(p => favoritePositions.includes(p.id));
        } else if (activeTab === 'featured') {
            positions = positions.filter(p => p.isFeatured);
        } else if (activeTab === 'remote') {
            positions = positions.filter(p => p.location === 'Remote');
        }

        return positions;
    }, [config?.positions, searchQuery, selectedDepartment, selectedLocation, selectedType, activeTab, favoritePositions]);

    const filteredPositions = getFilteredPositions();
    const departments = config?.departments || [
        { id: 'all', label: 'All Positions', icon: 'briefcase', count: config?.positions?.length || 0 },
        { id: 'engineering', label: 'Engineering', icon: 'code' },
        { id: 'product', label: 'Product', icon: 'lightbulb' },
        { id: 'sales', label: 'Sales', icon: 'chart' },
        { id: 'marketing', label: 'Marketing', icon: 'trending' },
        { id: 'customer-success', label: 'Customer Success', icon: 'users' },
        { id: 'operations', label: 'Operations', icon: 'cog' }
    ];

    const locations = config?.locations || [
        { id: 'all', label: 'All Locations', flag: '🌐' },
        { id: 'remote', label: 'Remote', flag: '🏠' },
        { id: 'new-york', label: 'New York, NY', flag: '🗽' },
        { id: 'san-francisco', label: 'San Francisco, CA', flag: '🌉' },
        { id: 'london', label: 'London, UK', flag: '🇬🇧' },
        { id: 'singapore', label: 'Singapore', flag: '🇸🇬' }
    ];

    const employmentTypes = [
        { id: 'all', label: 'All Types', icon: 'briefcase' },
        { id: 'full-time', label: 'Full-Time', icon: 'clock' },
        { id: 'part-time', label: 'Part-Time', icon: 'clock' },
        { id: 'contract', label: 'Contract', icon: 'document' },
        { id: 'internship', label: 'Internship', icon: 'academic' },
        { id: 'remote', label: 'Remote', icon: 'globe' }
    ];

    const tabs = [
        { id: 'all', label: 'All Positions', icon: 'briefcase' },
        { id: 'featured', label: 'Featured', icon: 'star' },
        { id: 'remote', label: 'Remote', icon: 'wifi' },
        { id: 'departments', label: 'Departments', icon: 'officeBuilding' },
        { id: 'favorites', label: 'Favorites', icon: 'heart' }
    ];

    const featuredDepartments = config?.featuredDepartments || [
        { name: 'Engineering', description: 'Build the future of supply chain technology', icon: 'code', image: '/departments/engineering.jpg', openRoles: 8 },
        { name: 'Product', description: 'Shape the product strategy and user experience', icon: 'lightbulb', image: '/departments/product.jpg', openRoles: 5 },
        { name: 'Sales', description: 'Drive growth and build customer relationships', icon: 'chart', image: '/departments/sales.jpg', openRoles: 6 },
        { name: 'Customer Success', description: 'Ensure customer satisfaction and retention', icon: 'users', image: '/departments/customer-success.jpg', openRoles: 4 }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "25+", label: "Open Positions", icon: "briefcase" },
        { value: "8", label: "Departments", icon: "officeBuilding" },
        { value: "6", label: "Locations", icon: "globe" },
        { value: "100+", label: "Team Members", icon: "users" }
    ];

    // Active filters count
    const activeFiltersCount = [selectedDepartment !== 'all', selectedLocation !== 'all', selectedType !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedDepartment('all');
        setSelectedLocation('all');
        setSelectedType('all');
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Open Positions Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-careers" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-careers)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineBriefcase className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Join Our Team"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Current"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Open Positions"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Join our mission to transform supply chain management. Explore opportunities to grow your career with a team of innovators and problem-solvers."}
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    {getIcon(stat.icon, "w-4 h-4 text-blue-600")}
                                </div>
                                <div className="text-left">
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {getIcon(tab.icon, "w-4 h-4")}
                            {tab.label}
                            {tab.id === 'favorites' && favoritePositions.length > 0 && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoritePositions.length}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Departments Carousel Tab */}
                {activeTab === 'departments' && (
                    <div className="relative mb-12">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {featuredDepartments.map((dept, idx) => (
                                    <div key={idx} className="w-full shrink-0">
                                        <div className="relative h-96 rounded-3xl overflow-hidden cursor-pointer" onClick={() => setSelectedDepartment(dept.id)}>
                                            <img
                                                src={dept.image}
                                                alt={dept.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                                        {getIcon(dept.icon, "w-5 h-5")}
                                                    </div>
                                                    <h2 className="text-3xl md:text-4xl font-bold">{dept.name}</h2>
                                                </div>
                                                <p className="text-white/80 mb-4 max-w-2xl">{dept.description}</p>
                                                <div className="flex items-center gap-4">
                                                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                                        {dept.openRoles} open roles
                                                    </span>
                                                    <button
                                                        onClick={() => setSelectedDepartment(dept.id)}
                                                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                                                    >
                                                        View Positions
                                                        <HiArrowRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {featuredDepartments.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                                    >
                                        <HiOutlineChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                                    >
                                        <HiOutlineChevronRight className="w-6 h-6" />
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {featuredDepartments.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentSlide(idx)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* All Positions / Favorites Tab */}
                {(activeTab === 'all' || activeTab === 'featured' || activeTab === 'remote' || activeTab === 'favorites') && (
                    <>
                        {/* Search and Filters */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by job title, department, or keyword..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Search positions"
                                />
                            </div>

                            <div className="flex gap-2">
                                <select
                                    value={selectedDepartment}
                                    onChange={(e) => setSelectedDepartment(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Departments</option>
                                    {departments.filter(d => d.id !== 'all').map(dept => (
                                        <option key={dept.id} value={dept.id}>{dept.label}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {locations.map(loc => (
                                        <option key={loc.id} value={loc.id}>{loc.flag} {loc.label}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {employmentTypes.map(type => (
                                        <option key={type.id} value={type.id}>{type.label}</option>
                                    ))}
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
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredPositions.length}</span> positions
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        </div>

                        {/* Positions Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {filteredPositions.map((position) => {
                                const deptConfig = getDepartmentConfig(position.department);
                                const typeConfig = getTypeConfig(position.type);
                                const expConfig = getExperienceConfig(position.experience);
                                const isFavorite = favoritePositions.includes(position.id);

                                return (
                                    <div
                                        key={position.id}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                        onClick={() => openPositionModal(position)}
                                    >
                                        <div className={`p-5 bg-linear-to-r ${deptConfig.gradient} text-white`}>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="font-bold text-lg">{position.title}</h3>
                                                    <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block bg-white/20">
                                                        {deptConfig.label}
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleFavoritePosition(position.id); }}
                                                    className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-white/70 hover:text-red-500'}`}
                                                >
                                                    <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                <span className={`text-xs px-2 py-1 rounded-full ${typeConfig.color}`}>
                                                    {typeConfig.badge}
                                                </span>
                                                <span className={`text-xs px-2 py-1 rounded-full ${expConfig.color}`}>
                                                    {expConfig.badge}
                                                </span>
                                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                                    <HiOutlineLocationMarker className="w-3 h-3" />
                                                    <span>{position.location}</span>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                                {position.description}
                                            </p>

                                            <div className="flex items-center justify-between text-sm mb-3">
                                                <div className="flex items-center gap-1 text-green-600 font-medium">
                                                    <HiOutlineCurrencyDollar className="w-4 h-4" />
                                                    <span>{position.salary}</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-gray-500">
                                                    <HiOutlineCalendarIcon className="w-4 h-4" />
                                                    <span>Posted {position.postedDate}</span>
                                                </div>
                                            </div>

                                            {position.tags && position.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-1 mb-3">
                                                    {position.tags.slice(0, 3).map((tag, idx) => (
                                                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <div className="flex items-center gap-2">
                                                    <HiOutlineEye className="w-4 h-4 text-gray-400" />
                                                    <span className="text-xs text-gray-500">{position.views || '1.2k'} views</span>
                                                </div>
                                                <span className="text-blue-600 text-xs font-semibold hover:underline">Apply Now →</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                {/* No Results */}
                {(activeTab === 'all' || activeTab === 'featured' || activeTab === 'remote' || activeTab === 'favorites') && filteredPositions.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineBriefcase className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No positions found</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {activeTab === 'favorites' ? "You haven't saved any positions yet." : "Try adjusting your search or filter criteria"}
                        </p>
                        {activeTab === 'favorites' && (
                            <button onClick={() => setActiveTab('all')} className="mt-4 text-blue-600 hover:underline">
                                Browse All Positions
                            </button>
                        )}
                        {activeFiltersCount > 0 && (
                            <button onClick={clearAllFilters} className="mt-4 text-blue-600 hover:underline ml-4">
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {/* Position Application Modal */}
                {showPositionModal && selectedPosition && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowPositionModal(false)}>
                        <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-90vh overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                            <div className={`sticky top-0 p-6 bg-linear-to-r ${getDepartmentConfig(selectedPosition.department).gradient} text-white`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold">{selectedPosition.title}</h2>
                                        <p className="text-sm text-white/80">{selectedPosition.department} • {selectedPosition.location}</p>
                                    </div>
                                    <button onClick={() => setShowPositionModal(false)} className="text-white/80 hover:text-white">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {!applicationSubmitted ? (
                                <div className="p-6">
                                    {/* Application Steps */}
                                    <div className="flex mb-6">
                                        {[1, 2, 3].map((step) => (
                                            <div key={step} className="flex-1 text-center">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${applicationStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                                                    }`}>
                                                    {step}
                                                </div>
                                                <span className="text-xs text-gray-500">
                                                    {step === 1 && 'Personal Info'}
                                                    {step === 2 && 'Resume'}
                                                    {step === 3 && 'Review'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Step 1 - Personal Information */}
                                    {applicationStep === 1 && (
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={applicationData.fullName}
                                                    onChange={handleApplicationChange}
                                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={applicationData.email}
                                                    onChange={handleApplicationChange}
                                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={applicationData.phone}
                                                    onChange={handleApplicationChange}
                                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">LinkedIn Profile</label>
                                                <input
                                                    type="url"
                                                    name="linkedIn"
                                                    value={applicationData.linkedIn}
                                                    onChange={handleApplicationChange}
                                                    placeholder="https://linkedin.com/in/..."
                                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 2 - Resume & Cover Letter */}
                                    {applicationStep === 2 && (
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resume/CV *</label>
                                                <input
                                                    type="file"
                                                    name="resume"
                                                    onChange={handleApplicationChange}
                                                    accept=".pdf,.doc,.docx"
                                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                />
                                                <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cover Letter</label>
                                                <textarea
                                                    name="coverLetter"
                                                    value={applicationData.coverLetter}
                                                    onChange={handleApplicationChange}
                                                    rows="5"
                                                    placeholder="Tell us why you're interested in this position..."
                                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Portfolio/Website</label>
                                                <input
                                                    type="url"
                                                    name="portfolio"
                                                    value={applicationData.portfolio}
                                                    onChange={handleApplicationChange}
                                                    placeholder="https://..."
                                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 3 - Review & Submit */}
                                    {applicationStep === 3 && (
                                        <div className="space-y-4">
                                            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Position Summary</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Role:</strong> {selectedPosition.title}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Department:</strong> {getDepartmentConfig(selectedPosition.department).label}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Location:</strong> {selectedPosition.location}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Type:</strong> {getTypeConfig(selectedPosition.type).label}</p>
                                            </div>
                                            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Your Information</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Name:</strong> {applicationData.fullName || 'Not provided'}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Email:</strong> {applicationData.email || 'Not provided'}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Resume:</strong> {applicationData.resume ? applicationData.resume.name : 'Not uploaded'}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                                <span className="text-sm text-gray-600 dark:text-gray-400">I confirm that the information provided is accurate and I agree to the terms of application.</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Navigation Buttons */}
                                    <div className="flex justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        {applicationStep > 1 && (
                                            <button
                                                onClick={() => setApplicationStep(applicationStep - 1)}
                                                className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                            >
                                                Previous
                                            </button>
                                        )}
                                        {applicationStep < 3 ? (
                                            <button
                                                onClick={() => setApplicationStep(applicationStep + 1)}
                                                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                            >
                                                Next
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleSubmitApplication}
                                                className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                                            >
                                                Submit Application
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="p-12 text-center">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">Thank you for applying for the {selectedPosition.title} position.</p>
                                    <p className="text-sm text-gray-500">Our recruiting team will review your application and contact you within 5-7 business days.</p>
                                    <button
                                        onClick={() => setShowPositionModal(false)}
                                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Join Talent Community CTA */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Don't See the Right Fit?</h3>
                            <p className="text-blue-100 max-w-2xl">
                                Join our talent community to receive updates about future opportunities that match your skills and interests.
                            </p>
                        </div>
                        <Link
                            href="/talent-community"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                            Join Talent Community
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .max-h-90vh {
          max-height: 90vh;
        }
      `}</style>
        </section>
    );
};

export default OpenPositionsSection3;