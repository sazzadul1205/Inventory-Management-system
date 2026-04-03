// page/frontend/Careers/InternshipProgramsSection/InternshipProgramsSection3.jsx

// React
import { useState, useEffect, useCallback, useRef } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
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
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineHeart,
    HiOutlineSparkles,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineTrendingUp,
    HiOutlineFire,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineLibrary,
    HiOutlineNewspaper as HiOutlineNewspaperAlt,
    HiOutlineVideoCamera as HiOutlineVideoCameraAlt,
    HiOutlineMicrophone as HiOutlineMicrophoneAlt,
    HiOutlineZoomIn,
    HiOutlineVolumeUp,
    HiOutlineQrcode,
    HiOutlinePrinter
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import {
    MdOutlineFullscreen as HiOutlineFullscreen,
    MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const InternshipProgramsSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('programs');
    const [selectedProgram, setSelectedProgram] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState('all');
    const [selectedDuration, setSelectedDuration] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedProgram, setExpandedProgram] = useState(null);
    const [favoritePrograms, setFavoritePrograms] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [showApplyModal, setShowApplyModal] = useState(false);
    const [selectedProgramForApply, setSelectedProgramForApply] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [applicationId, setApplicationId] = useState('');
    const [formStep, setFormStep] = useState(1);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [formData, setFormData] = useState({
        // Step 1 - Personal Info
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        // Step 2 - Education
        university: '',
        major: '',
        graduationYear: '',
        gpa: '',
        // Step 3 - Program & Documents
        programId: '',
        resume: null,
        coverLetter: null,
        linkedin: '',
        portfolio: '',
        // Step 4 - Additional
        hearAbout: '',
        availability: '',
        message: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});
    const carouselRef = useRef(null);
    const videoRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('favoriteInternships');
        if (saved) setFavoritePrograms(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteInternships', JSON.stringify(favoritePrograms));
    }, [favoritePrograms]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
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
            sparkles: <HiOutlineSparkles className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            library: <HiOutlineLibrary className={className} />,
            newspaperAlt: <HiOutlineNewspaperAlt className={className} />,
            videoAlt: <HiOutlineVideoCameraAlt className={className} />,
            microphoneAlt: <HiOutlineMicrophoneAlt className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            fullscreen: <HiOutlineFullscreen className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            caption: <HiOutlineClosedCaption className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            printer: <HiOutlinePrinter className={className} />
        };
        return icons[iconName] || <HiOutlineAcademicCap className={className} />;
    };

    // Get program configuration
    const getProgramConfig = (program) => {
        const configs = {
            'engineering': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'code', label: 'Software Engineering', gradient: 'from-blue-500 to-blue-600' },
            'product': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'briefcase', label: 'Product Management', gradient: 'from-purple-500 to-purple-600' },
            'data': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'chart', label: 'Data Science & Analytics', gradient: 'from-green-500 to-green-600' },
            'marketing': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'chart', label: 'Marketing', gradient: 'from-orange-500 to-orange-600' },
            'sales': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'briefcase', label: 'Sales', gradient: 'from-red-500 to-red-600' },
            'design': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'template', label: 'Product Design', gradient: 'from-indigo-500 to-indigo-600' }
        };
        return configs[program] || configs.engineering;
    };

    // Get location configuration
    const getLocationConfig = (location) => {
        const configs = {
            'remote': { flag: '🌍', label: 'Remote', color: 'bg-green-100 text-green-700' },
            'sf': { flag: '🇺🇸', label: 'San Francisco', color: 'bg-blue-100 text-blue-700' },
            'nyc': { flag: '🇺🇸', label: 'New York', color: 'bg-purple-100 text-purple-700' },
            'london': { flag: '🇬🇧', label: 'London', color: 'bg-red-100 text-red-700' },
            'bangalore': { flag: '🇮🇳', label: 'Bangalore', color: 'bg-orange-100 text-orange-700' }
        };
        return configs[location] || { flag: '🌍', label: location, color: 'bg-gray-100 text-gray-700' };
    };

    // Handle favorite program
    const handleFavoriteProgram = (programId) => {
        setFavoritePrograms(prev =>
            prev.includes(programId)
                ? prev.filter(id => id !== programId)
                : [...prev, programId]
        );
    };

    // Open apply modal
    const openApplyModal = (program) => {
        setSelectedProgramForApply(program);
        setFormData({ ...formData, programId: program.id });
        setFormStep(1);
        setErrors({});
        setShowApplyModal(true);
    };

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // Validate current step
    const validateStep = () => {
        const newErrors = {};

        if (formStep === 1) {
            if (!formData.firstName) newErrors.firstName = 'First name is required';
            if (!formData.lastName) newErrors.lastName = 'Last name is required';
            if (!formData.email) newErrors.email = 'Email is required';
            else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        } else if (formStep === 2) {
            if (!formData.university) newErrors.university = 'University is required';
            if (!formData.graduationYear) newErrors.graduationYear = 'Graduation year is required';
        } else if (formStep === 3) {
            if (!formData.resume) newErrors.resume = 'Resume is required';
        } else if (formStep === 4) {
            if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Next step
    const nextStep = () => {
        if (validateStep()) {
            setFormStep(formStep + 1);
        }
    };

    // Previous step
    const prevStep = () => {
        setFormStep(formStep - 1);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateStep()) return;

        const newId = `INT-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        setApplicationId(newId);
        setFormSubmitted(true);

        setTimeout(() => {
            setFormSubmitted(false);
            setShowApplyModal(false);
            setFormStep(1);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                university: '',
                major: '',
                graduationYear: '',
                gpa: '',
                programId: '',
                resume: null,
                coverLetter: null,
                linkedin: '',
                portfolio: '',
                hearAbout: '',
                availability: '',
                message: '',
                agreeToTerms: false
            });
        }, 3000);
    };

    // Carousel navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.successStories?.length || 1));
    }, [config?.successStories?.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + (config?.successStories?.length || 1)) % (config?.successStories?.length || 1));
    }, [config?.successStories?.length]);

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.successStories?.length > 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.successStories?.length, nextSlide]);

    // Filter programs
    const getFilteredPrograms = useCallback(() => {
        let programs = config?.programs || [];

        if (searchQuery) {
            programs = programs.filter(p =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.skills?.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedProgram !== 'all') {
            programs = programs.filter(p => p.type === selectedProgram);
        }

        if (selectedLocation !== 'all') {
            programs = programs.filter(p => p.location === selectedLocation);
        }

        if (selectedDuration !== 'all') {
            programs = programs.filter(p => p.duration === selectedDuration);
        }

        if (activeTab === 'featured') {
            programs = programs.filter(p => p.isFeatured);
        } else if (activeTab === 'favorites') {
            programs = programs.filter(p => favoritePrograms.includes(p.id));
        }

        return programs;
    }, [config?.programs, searchQuery, selectedProgram, selectedLocation, selectedDuration, activeTab, favoritePrograms]);

    const filteredPrograms = getFilteredPrograms();
    const programTypes = config?.programTypes || [
        { id: 'all', label: 'All Programs', icon: 'academic' },
        { id: 'engineering', label: 'Engineering', icon: 'code' },
        { id: 'product', label: 'Product', icon: 'briefcase' },
        { id: 'data', label: 'Data Science', icon: 'chart' },
        { id: 'marketing', label: 'Marketing', icon: 'chart' },
        { id: 'design', label: 'Design', icon: 'template' }
    ];

    const tabs = [
        { id: 'programs', label: 'All Programs', icon: 'library' },
        { id: 'featured', label: 'Featured', icon: 'star' },
        { id: 'favorites', label: 'Favorites', icon: 'heart' },
        { id: 'stories', label: 'Success Stories', icon: 'trophy' }
    ];

    const locations = config?.locations || [
        { id: 'all', label: 'All Locations', flag: '🌐' },
        { id: 'remote', label: 'Remote', flag: '🌍' },
        { id: 'sf', label: 'San Francisco', flag: '🇺🇸' },
        { id: 'nyc', label: 'New York', flag: '🇺🇸' },
        { id: 'london', label: 'London', flag: '🇬🇧' }
    ];

    const durations = [
        { id: 'all', label: 'All Durations' },
        { id: 'summer', label: 'Summer (10-12 weeks)' },
        { id: 'fall', label: 'Fall (12-16 weeks)' },
        { id: 'spring', label: 'Spring (12-16 weeks)' }
    ];

    const hearAboutOptions = [
        'LinkedIn', 'Handshake', 'University Career Fair', 'Professor Referral',
        'Friend/Family', 'Company Website', 'Instagram', 'Other'
    ];

    const graduationYears = ['2024', '2025', '2026', '2027', '2028'];

    const successStories = config?.successStories || [];

    // Stats
    const stats = config?.stats || [
        { value: "200+", label: "Interns Hired", icon: "users" },
        { value: "85%", label: "Conversion Rate", icon: "trophy" },
        { value: "15+", label: "Countries", icon: "globe" },
        { value: "4.9", label: "Program Rating", icon: "star" }
    ];

    // Active filters count
    const activeFiltersCount = [selectedProgram !== 'all', selectedLocation !== 'all', selectedDuration !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedProgram('all');
        setSelectedLocation('all');
        setSelectedDuration('all');
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Internship Programs Hub"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-internship" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-internship)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineAcademicCap className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Internship Programs"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Launch Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Career"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Gain real-world experience, work on impactful projects, and learn from industry experts. Our internship programs are designed to help you grow and succeed."}
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
                            {tab.id === 'favorites' && favoritePrograms.length > 0 && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{favoritePrograms.length}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Success Stories Carousel */}
                {activeTab === 'stories' && successStories.length > 0 && (
                    <div className="relative mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Intern Success Stories</h2>
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {successStories.map((story, idx) => (
                                    <div key={idx} className="w-full shrink-0">
                                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                                            <div className="flex items-center gap-4 mb-6">
                                                {story.avatar ? (
                                                    <img src={story.avatar} alt={story.name} className="w-16 h-16 rounded-full object-cover" />
                                                ) : (
                                                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                        {getIcon("users", "w-8 h-8 text-blue-600")}
                                                    </div>
                                                )}
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{story.name}</h3>
                                                    <p className="text-sm text-gray-500">{story.role}</p>
                                                    <p className="text-xs text-gray-400">{story.university}</p>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="flex gap-1 text-yellow-500 mb-3">
                                                    {[...Array(5)].map((_, i) => (
                                                        <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                                                    ))}
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-400 italic text-lg">"{story.quote}"</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                {story.metrics?.map((metric, mIdx) => (
                                                    <div key={mIdx} className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                                                        <div className="text-xs text-gray-500">{metric.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            {story.videoUrl && (
                                                <button
                                                    onClick={() => {
                                                        setCurrentVideo(story.videoUrl);
                                                        setShowVideoModal(true);
                                                    }}
                                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                                                >
                                                    <HiOutlinePlay className="w-4 h-4" />
                                                    Watch Full Story
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {successStories.length > 1 && (
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
                                        {successStories.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentSlide(idx)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-blue-600' : 'bg-gray-400'}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Programs Tab - Search and Filters */}
                {(activeTab === 'programs' || activeTab === 'featured' || activeTab === 'favorites') && (
                    <>
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search programs by title, department, or skills..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Search internship programs"
                                />
                            </div>

                            <div className="flex gap-2">
                                <select
                                    value={selectedProgram}
                                    onChange={(e) => setSelectedProgram(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Types</option>
                                    {programTypes.filter(p => p.id !== 'all').map(type => (
                                        <option key={type.id} value={type.id}>{type.label}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {locations.map(loc => (
                                        <option key={loc.id} value={loc.id}>{loc.label}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedDuration}
                                    onChange={(e) => setSelectedDuration(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {durations.map(dur => (
                                        <option key={dur.id} value={dur.id}>{dur.label}</option>
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

                        {/* Expanded Filters Panel */}
                        {showFilters && (
                            <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Program Type</label>
                                        <select
                                            value={selectedProgram}
                                            onChange={(e) => setSelectedProgram(e.target.value)}
                                            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="all">All Types</option>
                                            {programTypes.filter(p => p.id !== 'all').map(type => (
                                                <option key={type.id} value={type.id}>{type.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                                        <select
                                            value={selectedLocation}
                                            onChange={(e) => setSelectedLocation(e.target.value)}
                                            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {locations.map(loc => (
                                                <option key={loc.id} value={loc.id}>{loc.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Duration</label>
                                        <select
                                            value={selectedDuration}
                                            onChange={(e) => setSelectedDuration(e.target.value)}
                                            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {durations.map(dur => (
                                                <option key={dur.id} value={dur.id}>{dur.label}</option>
                                            ))}
                                        </select>
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

                        {/* Category Pills */}
                        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                            {programTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setSelectedProgram(type.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedProgram === type.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                        }`}
                                >
                                    {getIcon(type.icon, "w-4 h-4")}
                                    {type.label}
                                </button>
                            ))}
                        </div>

                        {/* Location Pills */}
                        <div className="flex flex-wrap gap-2 mb-12">
                            {locations.filter(l => l.id !== 'all').map((loc) => (
                                <button
                                    key={loc.id}
                                    onClick={() => setSelectedLocation(loc.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedLocation === loc.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                        }`}
                                >
                                    <span>{loc.flag}</span>
                                    {loc.label}
                                </button>
                            ))}
                        </div>

                        {/* Results Count */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredPrograms.length}</span> internship programs
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        </div>

                        {/* Programs Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {filteredPrograms.map((program) => {
                                const programConfig = getProgramConfig(program.type);
                                const locationConfig = getLocationConfig(program.location);
                                const isExpanded = expandedProgram === program.id;
                                const isFavorite = favoritePrograms.includes(program.id);
                                const deadlineDate = new Date(program.deadlineDate);
                                const isUrgent = (deadlineDate - new Date()) / (1000 * 60 * 60 * 24) < 14;

                                return (
                                    <div
                                        key={program.id}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                        onClick={() => openApplyModal(program)}
                                    >
                                        <div className={`relative h-32 bg-linear-to-r ${programConfig.gradient} flex items-center justify-center`}>
                                            {getIcon(programConfig.icon, "w-12 h-12 text-white opacity-80")}
                                            {program.isFeatured && (
                                                <div className="absolute top-3 right-3">
                                                    <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                                                        <HiOutlineStar className="w-3 h-3" />
                                                        Featured
                                                    </span>
                                                </div>
                                            )}
                                            {isUrgent && (
                                                <div className="absolute bottom-3 left-3">
                                                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                                                        Urgent
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-5">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{program.title}</h3>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${programConfig.color}`}>
                                                            {programConfig.label}
                                                        </span>
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${locationConfig.color}`}>
                                                            {locationConfig.flag} {locationConfig.label}
                                                        </span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleFavoriteProgram(program.id); }}
                                                    className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                                >
                                                    <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                                                </button>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2 mt-2">
                                                {program.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
                                                <div className="flex items-center gap-1">
                                                    <HiOutlineClock className="w-3 h-3" />
                                                    <span>{program.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <HiOutlineCalendar className="w-3 h-3" />
                                                    <span>{program.startDate}</span>
                                                </div>
                                            </div>

                                            {program.skills && program.skills.length > 0 && (
                                                <div className="mb-3">
                                                    <div className="flex flex-wrap gap-1">
                                                        {program.skills.slice(0, 3).map((skill, idx) => (
                                                            <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                        {program.skills.length > 3 && (
                                                            <button
                                                                onClick={(e) => { e.stopPropagation(); setExpandedProgram(isExpanded ? null : program.id); }}
                                                                className="text-xs text-blue-600 hover:underline"
                                                            >
                                                                +{program.skills.length - 3}
                                                            </button>
                                                        )}
                                                    </div>
                                                    {isExpanded && program.skills.length > 3 && (
                                                        <div className="mt-2 flex flex-wrap gap-1">
                                                            {program.skills.slice(3).map((skill, idx) => (
                                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <div className={`text-xs font-semibold ${isUrgent ? 'text-red-500' : 'text-green-600'}`}>
                                                    Deadline: {program.deadline}
                                                </div>
                                                <span className="text-blue-600 text-sm font-semibold hover:underline">Apply Now →</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* No Results */}
                        {filteredPrograms.length === 0 && (
                            <div className="text-center py-12">
                                <HiOutlineAcademicCap className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No internship programs found</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {activeTab === 'favorites' ? "You haven't saved any programs yet." : "Try adjusting your search or filter criteria"}
                                </p>
                                {activeTab === 'favorites' && (
                                    <button onClick={() => setActiveTab('programs')} className="mt-4 text-blue-600 hover:underline">
                                        Browse All Programs
                                    </button>
                                )}
                                {activeFiltersCount > 0 && (
                                    <button onClick={clearAllFilters} className="mt-4 text-blue-600 hover:underline ml-4">
                                        Clear all filters
                                    </button>
                                )}
                            </div>
                        )}
                    </>
                )}

                {/* Application Modal */}
                {showApplyModal && selectedProgramForApply && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowApplyModal(false)}>
                        <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl my-8" onClick={(e) => e.stopPropagation()}>
                            <div className={`relative h-28 bg-linear-to-r ${getProgramConfig(selectedProgramForApply.type).gradient}`}>
                                <button
                                    onClick={() => setShowApplyModal(false)}
                                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                >
                                    <HiOutlineX className="w-5 h-5" />
                                </button>
                                <div className="absolute bottom-4 left-6 text-white">
                                    <h2 className="text-xl font-bold">{selectedProgramForApply.title}</h2>
                                    <p className="text-sm text-white/80">{getProgramConfig(selectedProgramForApply.type).label}</p>
                                </div>
                            </div>

                            <div className="p-6 max-h-[70vh] overflow-y-auto">
                                {formSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h3>
                                        <p className="text-gray-600 dark:text-gray-400">Thank you for applying to {selectedProgramForApply.title}. Our recruiting team will review your application.</p>
                                        <p className="text-sm text-blue-600 mt-2">Reference ID: {applicationId}</p>
                                        <button
                                            onClick={() => setShowApplyModal(false)}
                                            className="mt-4 text-blue-600 hover:underline"
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        {/* Progress Steps */}
                                        <div className="mb-6">
                                            <div className="flex justify-between items-center">
                                                {[1, 2, 3, 4].map((step) => (
                                                    <div key={step} className="flex-1 text-center">
                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${formStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                                                            {step}
                                                        </div>
                                                        <span className="text-xs text-gray-500 hidden sm:inline">
                                                            {step === 1 && 'Personal'}
                                                            {step === 2 && 'Education'}
                                                            {step === 3 && 'Documents'}
                                                            {step === 4 && 'Review'}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="relative mt-2">
                                                <div className="absolute top-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full w-full" />
                                                <div className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${(formStep - 1) * 33.33}%` }} />
                                            </div>
                                        </div>

                                        {/* Step 1 - Personal Info */}
                                        {formStep === 1 && (
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name *</label>
                                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg ${errors.firstName ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />
                                                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name *</label>
                                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg ${errors.lastName ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />
                                                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                                    </div>
                                                    <div className="col-span-2">
                                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />
                                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                                    </div>
                                                    <div className="col-span-2">
                                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                                                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 2 - Education */}
                                        {formStep === 2 && (
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Education</h3>
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">University *</label>
                                                        <input type="text" name="university" value={formData.university} onChange={handleInputChange} className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg ${errors.university ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />
                                                        {errors.university && <p className="text-red-500 text-xs mt-1">{errors.university}</p>}
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Major</label>
                                                        <input type="text" name="major" value={formData.major} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Graduation Year *</label>
                                                        <select name="graduationYear" value={formData.graduationYear} onChange={handleInputChange} className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg ${errors.graduationYear ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}>
                                                            <option value="">Select year</option>
                                                            {graduationYears.map(year => <option key={year} value={year}>{year}</option>)}
                                                        </select>
                                                        {errors.graduationYear && <p className="text-red-500 text-xs mt-1">{errors.graduationYear}</p>}
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">GPA (optional)</label>
                                                        <input type="text" name="gpa" value={formData.gpa} onChange={handleInputChange} placeholder="e.g., 3.8" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 3 - Documents */}
                                        {formStep === 3 && (
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Documents & Links</h3>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resume/CV *</label>
                                                    <input type="file" name="resume" onChange={handleInputChange} accept=".pdf,.doc,.docx" className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg ${errors.resume ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />
                                                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                                                    {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cover Letter (optional)</label>
                                                    <input type="file" name="coverLetter" onChange={handleInputChange} accept=".pdf,.doc,.docx" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">LinkedIn URL</label>
                                                    <input type="url" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/..." className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Portfolio/GitHub</label>
                                                    <input type="url" name="portfolio" value={formData.portfolio} onChange={handleInputChange} placeholder="https://..." className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg" />
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 4 - Additional */}
                                        {formStep === 4 && (
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Additional Information</h3>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">How did you hear about us?</label>
                                                    <select name="hearAbout" value={formData.hearAbout} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
                                                        <option value="">Select an option</option>
                                                        {hearAboutOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Availability</label>
                                                    <select name="availability" value={formData.availability} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
                                                        <option value="">Select availability</option>
                                                        <option value="summer">Summer 2024</option>
                                                        <option value="fall">Fall 2024</option>
                                                        <option value="spring">Spring 2025</option>
                                                        <option value="flexible">Flexible</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Additional Message</label>
                                                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows="3" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg" placeholder="Tell us why you're interested in this internship..." />
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded mt-1" />
                                                    <label className="text-sm text-gray-600 dark:text-gray-400">
                                                        I agree to the <a href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</a> and confirm that the information provided is accurate. *
                                                    </label>
                                                </div>
                                                {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}
                                            </div>
                                        )}

                                        {/* Navigation Buttons */}
                                        <div className="flex justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                            {formStep > 1 && (
                                                <button type="button" onClick={prevStep} className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                                                    Previous
                                                </button>
                                            )}
                                            {formStep < 4 ? (
                                                <button type="button" onClick={nextStep} className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                                                    Next
                                                    <HiArrowRight className="w-4 h-4" />
                                                </button>
                                            ) : (
                                                <button type="submit" className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
                                                    Submit Application
                                                    <HiOutlineCheckCircle className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Modal */}
                {showVideoModal && currentVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowVideoModal(false)}>
                        <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
                                <HiOutlineX className="w-6 h-6" />
                            </button>
                            <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
                        </div>
                    </div>
                )}
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
      `}</style>
        </section>
    );
};

export default InternshipProgramsSection3;