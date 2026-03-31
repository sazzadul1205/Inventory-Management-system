// page/frontend/Partners/BecomeAPartnerSection/BecomeAPartnerSection3.jsx

// React
import { Link } from '@inertiajs/react';
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
    HiOutlinePrinter,
    HiOutlineCalendar as HiOutlineCalendarIcon
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice } from 'react-icons/hi2';
import {
    MdOutlineFullscreen as HiOutlineFullscreen,
    MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const BecomeAPartnerSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedProgram, setSelectedProgram] = useState('technology');
    const [applicationStep, setApplicationStep] = useState(1);
    const [applicationSubmitted, setApplicationSubmitted] = useState(false);
    const [applicationId, setApplicationId] = useState('');
    const [formData, setFormData] = useState({
        // Personal Information
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: '',
        // Company Information
        companyName: '',
        companyWebsite: '',
        companySize: '',
        yearsInBusiness: '',
        headquarters: '',
        // Program Selection
        programType: 'technology',
        targetTier: '',
        targetRegions: [],
        // Capabilities
        primaryServices: [],
        industriesServed: [],
        certifications: [],
        // Additional
        referralSource: '',
        message: '',
        agreeToTerms: false,
        subscribeToNewsletter: false
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const formRef = useRef(null);
    const carouselRef = useRef(null);

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
            calendarIcon: <HiOutlineCalendarIcon className={className} />,
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
        return icons[iconName] || <HiOutlineUserGroup className={className} />;
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

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // Handle multi-select
    const handleMultiSelect = (name, value) => {
        const current = formData[name];
        if (current.includes(value)) {
            setFormData({ ...formData, [name]: current.filter(item => item !== value) });
        } else {
            setFormData({ ...formData, [name]: [...current, value] });
        }
    };

    // Validate current step
    const validateStep = () => {
        const newErrors = {};

        if (applicationStep === 1) {
            if (!formData.firstName) newErrors.firstName = 'First name is required';
            if (!formData.lastName) newErrors.lastName = 'Last name is required';
            if (!formData.email) newErrors.email = 'Email is required';
            else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
            if (!formData.companyName) newErrors.companyName = 'Company name is required';
        } else if (applicationStep === 2) {
            if (!formData.programType) newErrors.programType = 'Please select a program type';
        } else if (applicationStep === 3) {
            if (!formData.primaryServices.length) newErrors.primaryServices = 'Please select at least one service';
        } else if (applicationStep === 4) {
            if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Next step
    const nextStep = () => {
        if (validateStep()) {
            setApplicationStep(applicationStep + 1);
            formRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Previous step
    const prevStep = () => {
        setApplicationStep(applicationStep - 1);
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Submit application
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep()) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            const newId = `PART-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
            setApplicationId(newId);
            setApplicationSubmitted(true);
            setIsSubmitting(false);
            setApplicationStep(1);

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                jobTitle: '',
                companyName: '',
                companyWebsite: '',
                companySize: '',
                yearsInBusiness: '',
                headquarters: '',
                programType: 'technology',
                targetTier: '',
                targetRegions: [],
                primaryServices: [],
                industriesServed: [],
                certifications: [],
                referralSource: '',
                message: '',
                agreeToTerms: false,
                subscribeToNewsletter: false
            });
        }, 1500);
    };

    // Program details
    const programDetails = {
        technology: {
            title: 'Technology Partner',
            description: 'Integrate your technology with SupplyChainPro to deliver joint solutions.',
            icon: 'chip',
            benefits: ['API access & documentation', 'Co-marketing opportunities', 'Technical support', 'Joint solution validation', 'Early access to new features']
        },
        solution: {
            title: 'Solution Partner',
            description: 'Deliver end-to-end supply chain solutions leveraging our platform.',
            icon: 'briefcase',
            benefits: ['Sales enablement', 'Partner training & certification', 'Lead sharing', 'Joint go-to-market programs', 'Solution co-creation']
        },
        consulting: {
            title: 'Consulting Partner',
            description: 'Provide expert advisory and implementation services to mutual clients.',
            icon: 'users',
            benefits: ['Implementation methodology', 'Practice development', 'Co-branding opportunities', 'Exclusive events', 'Thought leadership collaboration']
        },
        reseller: {
            title: 'Reseller Partner',
            description: 'Sell and distribute SupplyChainPro solutions to your customer base.',
            icon: 'globe',
            benefits: ['Competitive margins', 'Sales training', 'Marketing development funds', 'Dedicated channel support', 'Volume incentives']
        }
    };

    // Options for selects
    const companySizes = [
        '1-10 employees',
        '11-50 employees',
        '51-200 employees',
        '201-500 employees',
        '501-1000 employees',
        '1000+ employees'
    ];

    const yearsOptions = [
        'Less than 1 year',
        '1-3 years',
        '3-5 years',
        '5-10 years',
        '10+ years'
    ];

    const serviceOptions = [
        'Supply Chain Consulting',
        'Implementation Services',
        'Technology Integration',
        'Managed Services',
        'Training & Enablement',
        'Support Services',
        'Custom Development'
    ];

    const industryOptions = [
        'Retail',
        'Manufacturing',
        'Healthcare',
        'Logistics & Transportation',
        'Automotive',
        'Consumer Goods',
        'Technology',
        'Other'
    ];

    const regionOptions = [
        'North America',
        'Europe',
        'Asia Pacific',
        'Latin America',
        'Middle East & Africa'
    ];

    const certificationOptions = [
        'Supply Chain Professional (CSCP)',
        'Project Management Professional (PMP)',
        'Six Sigma Black Belt',
        'AI/ML Certification',
        'Cloud Architecture',
        'Other'
    ];

    const referralOptions = [
        'Search Engine',
        'Social Media',
        'Partner Referral',
        'Conference/Event',
        'Webinar',
        'Email Newsletter',
        'Word of Mouth',
        'Other'
    ];

    // Stats
    const stats = config?.stats || [
        { value: "500+", label: "Active Partners", icon: "usergroup" },
        { value: "50+", label: "Countries", icon: "globe" },
        { value: "$100M+", label: "Partner Revenue", icon: "credit" },
        { value: "95%", label: "Partner Satisfaction", icon: "star" }
    ];

    // Success stories
    const successStories = config?.successStories || [];

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Become a Partner - Application Hub"
        >
            {/* Background Pattern - Circuit Board */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-become" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-become)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineUserGroup className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Partner Program"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Become a"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Partner"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Join our global partner ecosystem and accelerate your business growth. Complete the application below to start your journey."}
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
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'overview'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                            }`}
                    >
                        <HiOutlineGlobe className="w-4 h-4" />
                        Program Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('apply')}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'apply'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                            }`}
                    >
                        <HiOutlineDocumentText className="w-4 h-4" />
                        Apply Now
                    </button>
                    <button
                        onClick={() => setActiveTab('stories')}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'stories'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                            }`}
                    >
                        <HiOutlineTrophy className="w-4 h-4" />
                        Success Stories
                    </button>
                </div>

                {/* Program Overview Tab */}
                {activeTab === 'overview' && (
                    <>
                        {/* Program Selector */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {['technology', 'solution', 'consulting', 'reseller'].map((program) => (
                                <button
                                    key={program}
                                    onClick={() => setSelectedProgram(program)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedProgram === program
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                        }`}
                                >
                                    {getIcon(programDetails[program].icon, "w-4 h-4")}
                                    {programDetails[program].title}
                                </button>
                            ))}
                        </div>

                        {/* Program Details */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                            <div className="grid lg:grid-cols-2 gap-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            {getIcon(programDetails[selectedProgram].icon, "w-6 h-6 text-blue-600")}
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {programDetails[selectedProgram].title}
                                        </h2>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        {programDetails[selectedProgram].description}
                                    </p>
                                    <div className="mb-6">
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Key Benefits:</h3>
                                        <ul className="space-y-2">
                                            {programDetails[selectedProgram].benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                                    <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Program Requirements</h3>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-start gap-2">
                                            <HiOutlineStar className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                            <span className="text-gray-600 dark:text-gray-400">Proven expertise in supply chain or related field</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <HiOutlineStar className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                            <span className="text-gray-600 dark:text-gray-400">Commitment to customer success</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <HiOutlineStar className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                            <span className="text-gray-600 dark:text-gray-400">Dedicated team for partnership</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <HiOutlineStar className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                            <span className="text-gray-600 dark:text-gray-400">Completion of required training</span>
                                        </li>
                                    </ul>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                                        <HiOutlineBadgeCheck className="w-6 h-6 text-blue-600 mb-2" />
                                        <p className="text-sm text-gray-700 dark:text-gray-300">
                                            Ready to get started? Apply now and our partner team will reach out within 2 business days.
                                        </p>
                                        <button
                                            onClick={() => setActiveTab('apply')}
                                            className="mt-3 inline-flex items-center gap-2 text-blue-600 font-semibold text-sm"
                                        >
                                            Apply Now
                                            <HiArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partner Tiers */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">Partner Tiers</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {config?.tiers?.map((tier, idx) => (
                                    <div key={idx} className={`text-center p-6 rounded-2xl border ${idx === 1 ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700'}`}>
                                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                                            {getIcon(tier.icon, "w-6 h-6 text-blue-600")}
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h4>
                                        <p className="text-sm text-gray-500 mb-3">{tier.description}</p>
                                        <div className="space-y-1">
                                            {tier.benefits?.slice(0, 3).map((benefit, bid) => (
                                                <p key={bid} className="text-xs text-gray-600">✓ {benefit}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Success Stories Tab */}
                {activeTab === 'stories' && successStories.length > 0 && (
                    <div className="relative mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Partner Success Stories</h2>
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
                                                {story.logo && <img src={story.logo} alt={story.partner} className="h-12 w-auto object-contain" />}
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{story.partner}</h3>
                                                    <p className="text-sm text-gray-500">{story.industry}</p>
                                                </div>
                                            </div>
                                            <div className="mb-6">
                                                <div className="flex gap-1 text-yellow-500 mb-3">
                                                    {[...Array(5)].map((_, i) => (
                                                        <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                                                    ))}
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-400 italic text-lg">"{story.quote}"</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                {story.metrics?.map((metric, mIdx) => (
                                                    <div key={mIdx} className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                                                        <div className="text-xs text-gray-500">{metric.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <Link href={story.link} className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                                                Read Full Story
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
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

                {/* Application Form Tab */}
                {activeTab === 'apply' && (
                    <div ref={formRef} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                        {/* Progress Steps */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center">
                                {[1, 2, 3, 4].map((step) => (
                                    <div key={step} className="flex-1 text-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${applicationStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                                            }`}>
                                            {step}
                                        </div>
                                        <span className="text-xs text-gray-500 hidden sm:inline">
                                            {step === 1 && 'Company'}
                                            {step === 2 && 'Program'}
                                            {step === 3 && 'Capabilities'}
                                            {step === 4 && 'Review'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="relative mt-2">
                                <div className="absolute top-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full w-full" />
                                <div className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${(applicationStep - 1) * 33.33}%` }} />
                            </div>
                        </div>

                        {applicationSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h3>
                                <p className="text-gray-600 dark:text-gray-400">Thank you for your interest. Our partner team will contact you within 2 business days.</p>
                                <p className="text-sm text-blue-600 mt-2">Reference ID: {applicationId}</p>
                                <button
                                    onClick={() => setApplicationSubmitted(false)}
                                    className="mt-6 text-blue-600 hover:underline"
                                >
                                    Submit Another Application
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                {/* Step 1 - Company Information */}
                                {applicationStep === 1 && (
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Company Information</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name *</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                                                        }`}
                                                />
                                                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name *</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                                                        }`}
                                                />
                                                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                                                        }`}
                                                />
                                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company Name *</label>
                                                <input
                                                    type="text"
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.companyName ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                                                        }`}
                                                />
                                                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company Website</label>
                                                <input
                                                    type="url"
                                                    name="companyWebsite"
                                                    value={formData.companyWebsite}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="https://"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company Size</label>
                                                <select
                                                    name="companySize"
                                                    value={formData.companySize}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                >
                                                    <option value="">Select size</option>
                                                    {companySizes.map(size => <option key={size} value={size}>{size}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Years in Business</label>
                                                <select
                                                    name="yearsInBusiness"
                                                    value={formData.yearsInBusiness}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                >
                                                    <option value="">Select years</option>
                                                    {yearsOptions.map(year => <option key={year} value={year}>{year}</option>)}
                                                </select>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Headquarters Location</label>
                                                <input
                                                    type="text"
                                                    name="headquarters"
                                                    value={formData.headquarters}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="City, Country"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2 - Program Selection */}
                                {applicationStep === 2 && (
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Program Selection</h3>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Partnership Program *</label>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {['technology', 'solution', 'consulting', 'reseller'].map((program) => (
                                                    <label key={program} className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all duration-300 ${formData.programType === program
                                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                                                        }`}>
                                                        <input
                                                            type="radio"
                                                            name="programType"
                                                            value={program}
                                                            checked={formData.programType === program}
                                                            onChange={handleInputChange}
                                                            className="w-4 h-4 text-blue-600"
                                                        />
                                                        <div>
                                                            <div className="font-medium text-gray-900 dark:text-white">{programDetails[program].title}</div>
                                                            <div className="text-xs text-gray-500">{programDetails[program].description}</div>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                            {errors.programType && <p className="text-red-500 text-xs mt-2">{errors.programType}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Target Regions (Select all that apply)</label>
                                            <div className="flex flex-wrap gap-3">
                                                {regionOptions.map(region => (
                                                    <label key={region} className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            checked={formData.targetRegions.includes(region)}
                                                            onChange={() => handleMultiSelect('targetRegions', region)}
                                                            className="w-4 h-4 text-blue-600 rounded"
                                                        />
                                                        <span className="text-sm text-gray-700 dark:text-gray-300">{region}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3 - Capabilities */}
                                {applicationStep === 3 && (
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Capabilities & Expertise</h3>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Primary Services *</label>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {serviceOptions.map(service => (
                                                    <label key={service} className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            checked={formData.primaryServices.includes(service)}
                                                            onChange={() => handleMultiSelect('primaryServices', service)}
                                                            className="w-4 h-4 text-blue-600 rounded"
                                                        />
                                                        <span className="text-sm text-gray-700 dark:text-gray-300">{service}</span>
                                                    </label>
                                                ))}
                                            </div>
                                            {errors.primaryServices && <p className="text-red-500 text-xs mt-2">{errors.primaryServices}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Industries Served</label>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                {industryOptions.map(industry => (
                                                    <label key={industry} className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            checked={formData.industriesServed.includes(industry)}
                                                            onChange={() => handleMultiSelect('industriesServed', industry)}
                                                            className="w-4 h-4 text-blue-600 rounded"
                                                        />
                                                        <span className="text-sm text-gray-700 dark:text-gray-300">{industry}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Certifications</label>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {certificationOptions.map(cert => (
                                                    <label key={cert} className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            checked={formData.certifications.includes(cert)}
                                                            onChange={() => handleMultiSelect('certifications', cert)}
                                                            className="w-4 h-4 text-blue-600 rounded"
                                                        />
                                                        <span className="text-sm text-gray-700 dark:text-gray-300">{cert}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4 - Additional Information */}
                                {applicationStep === 4 && (
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Additional Information</h3>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">How did you hear about us?</label>
                                            <select
                                                name="referralSource"
                                                value={formData.referralSource}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="">Select an option</option>
                                                {referralOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Additional Notes</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows="4"
                                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Tell us more about your business and why you're interested in partnering..."
                                            />
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="checkbox"
                                                name="agreeToTerms"
                                                checked={formData.agreeToTerms}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 text-blue-600 rounded mt-1"
                                            />
                                            <label className="text-sm text-gray-600 dark:text-gray-400">
                                                I agree to the <a href="/partner-terms" className="text-blue-600 hover:underline">partner program terms and conditions</a> and confirm that the information provided is accurate.
                                            </label>
                                        </div>
                                        {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="checkbox"
                                                name="subscribeToNewsletter"
                                                checked={formData.subscribeToNewsletter}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 text-blue-600 rounded mt-1"
                                            />
                                            <label className="text-sm text-gray-600 dark:text-gray-400">
                                                Subscribe to partner newsletter for updates, training opportunities, and exclusive resources.
                                            </label>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                    {applicationStep > 1 && (
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
                                        >
                                            Previous
                                        </button>
                                    )}
                                    {applicationStep < 4 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
                                        >
                                            Next
                                            <HiArrowRight className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="ml-auto px-6 py-2 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                            {!isSubmitting && <HiOutlineCheckCircle className="w-4 h-4" />}
                                        </button>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                )}

                {/* Contact Section */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Questions About Partner Program?</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Our partner team is here to help. Reach out to us directly for any questions about the program.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="mailto:partners@supplychainpro.com" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                            <HiOutlineMail className="w-4 h-4" />
                            partners@supplychainpro.com
                        </a>
                        <a href="tel:+15551234567" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                            <HiOutlinePhone className="w-4 h-4" />
                            +1 (555) 123-4567
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
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

export default BecomeAPartnerSection3;