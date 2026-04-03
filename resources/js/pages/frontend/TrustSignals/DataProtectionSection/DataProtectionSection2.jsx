// page/frontend/TrustSignals/DataProtectionSection/DataProtectionSection2.jsx

// React
import { useState } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineShieldCheck,
    HiOutlineLockClosed,
    HiOutlineGlobe,
    HiOutlineChip,
    HiOutlineCloudUpload,
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
    HiOutlineDatabase,
    HiOutlineServer,
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
    HiOutlineClipboardCheck
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const DataProtectionSection2 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [activePrinciple, setActivePrinciple] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        requestType: '',
        subjectId: '',
        message: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);
    const [selectedRight, setSelectedRight] = useState(null);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            shield: <HiOutlineShieldCheck className={className} />,
            lock: <HiOutlineLockClosed className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            chip: <HiOutlineChip className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
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
            database: <HiOutlineDatabase className={className} />,
            server: <HiOutlineServer className={className} />,
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
            clipboard: <HiOutlineClipboardCheck className={className} />
        };
        return icons[iconName] || <HiOutlineShieldCheck className={className} />;
    };

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.requestType) newErrors.requestType = 'Request type is required';
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
                name: '',
                email: '',
                requestType: '',
                subjectId: '',
                message: '',
                agreeToTerms: false
            });
        }, 3000);
    };

    // Open privacy modal
    const openPrivacyModal = (right) => {
        setSelectedRight(right);
        setShowPrivacyModal(true);
    };

    // Data protection principles
    const principles = config?.principles || [
        {
            title: "Data Minimization",
            description: "We only collect data that is necessary for providing our services.",
            icon: "database",
            status: "Implemented",
            metrics: "30% less data collected",
            gradient: "from-blue-500 to-blue-600",
            details: [
                "Limited data collection to essential information",
                "Regular data retention reviews",
                "Automatic data deletion policies"
            ]
        },
        {
            title: "Purpose Limitation",
            description: "Data is collected for specified, explicit, and legitimate purposes only.",
            icon: "flag",
            status: "Implemented",
            metrics: "100% purpose alignment",
            gradient: "from-green-500 to-green-600",
            details: [
                "Clear purpose documentation",
                "Consent-based processing",
                "No undisclosed data usage"
            ]
        },
        {
            title: "Storage Limitation",
            description: "Data is retained only as long as necessary.",
            icon: "clock",
            status: "Implemented",
            metrics: "Automated deletion",
            gradient: "from-purple-500 to-purple-600",
            details: [
                "Defined retention periods",
                "Automated deletion schedules",
                "Secure data disposal"
            ]
        },
        {
            title: "Integrity & Confidentiality",
            description: "Data is processed securely with appropriate measures.",
            icon: "shield",
            status: "Certified",
            metrics: "AES-256 | TLS 1.3",
            gradient: "from-red-500 to-red-600",
            details: [
                "AES-256 encryption at rest",
                "TLS 1.3 encryption in transit",
                "Access controls and authentication"
            ]
        }
    ];

    // Data subject rights
    const rights = config?.rights || [
        {
            title: "Right to Access",
            description: "Request a copy of all personal data we hold about you.",
            icon: "eye",
            processTime: "30 days",
            formRequired: true,
            details: "You have the right to obtain confirmation that your data is being processed, access to your personal data, and information about how it's being used."
        },
        {
            title: "Right to Rectification",
            description: "Correct inaccurate or incomplete data.",
            icon: "edit",
            processTime: "15 days",
            formRequired: true,
            details: "You have the right to have inaccurate personal data rectified and incomplete data completed."
        },
        {
            title: "Right to Erasure",
            description: "Request deletion of your personal data.",
            icon: "trash",
            processTime: "30 days",
            formRequired: true,
            details: "Also known as the 'right to be forgotten', you can request deletion of your data when it's no longer necessary or if consent is withdrawn."
        },
        {
            title: "Right to Restrict Processing",
            description: "Limit how we use your data.",
            icon: "pause",
            processTime: "15 days",
            formRequired: true,
            details: "You can request that we stop processing your data while we verify its accuracy or the lawfulness of processing."
        },
        {
            title: "Right to Data Portability",
            description: "Receive your data in a machine-readable format.",
            icon: "download",
            processTime: "30 days",
            formRequired: true,
            details: "You have the right to receive your data in a structured, commonly used, machine-readable format and transmit it to another controller."
        },
        {
            title: "Right to Object",
            description: "Object to data processing for specific purposes.",
            icon: "x",
            processTime: "15 days",
            formRequired: true,
            details: "You have the right to object to processing based on legitimate interests, direct marketing, or for scientific/historical research."
        }
    ];

    // Data processing activities
    const processingActivities = config?.processingActivities || [
        {
            purpose: "Service Delivery",
            categories: ["Account Data", "Usage Data", "Transaction Data"],
            legalBasis: "Contract Performance",
            retention: "7 years",
            location: "US, EU"
        },
        {
            purpose: "Analytics & Improvement",
            categories: ["Usage Data", "Technical Data"],
            legalBasis: "Legitimate Interest",
            retention: "2 years",
            location: "US, EU"
        },
        {
            purpose: "Marketing Communications",
            categories: ["Contact Data", "Preferences"],
            legalBasis: "Consent",
            retention: "Until consent withdrawn",
            location: "Global"
        },
        {
            purpose: "Security & Fraud Prevention",
            categories: ["Log Data", "Technical Data"],
            legalBasis: "Legal Obligation",
            retention: "1 year",
            location: "US, EU"
        }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "100%", label: "GDPR Compliant", icon: "globe", trend: "Certified", trendUp: true },
        { value: "256-bit", label: "Encryption", icon: "lock", trend: "AES-256", trendUp: true },
        { value: "<30", label: "Days Response", icon: "clock", trend: "Average", trendUp: true },
        { value: "0", label: "Data Breaches", icon: "shield", trend: "2024", trendUp: true }
    ];

    const tabs = [
        { id: 'overview', label: 'Overview', icon: 'shield' },
        { id: 'rights', label: 'Your Rights', icon: 'users' },
        { id: 'processing', label: 'Data Processing', icon: 'database' }
    ];

    const requestTypes = ["Right to Access", "Right to Rectification", "Right to Erasure", "Right to Restrict Processing", "Right to Data Portability", "Right to Object"];

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Data Protection Center"
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
                            <HiOutlineLockClosed className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Data Protection"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Your Data is"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Protected"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "We take data protection seriously. Our practices are designed to give you control over your personal information while ensuring the highest level of security."}
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
                        </button>
                    ))}
                </div>

                {/* Overview Tab - Protection Principles */}
                {activeTab === 'overview' && (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {principles.map((principle, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer group"
                                    onClick={() => setActivePrinciple(activePrinciple === idx ? null : idx)}
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${principle.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        {getIcon(principle.icon, "w-6 h-6 text-white")}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{principle.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{principle.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-green-600 font-semibold">{principle.status}</span>
                                        <span className="text-xs text-gray-500">{principle.metrics}</span>
                                    </div>
                                    {activePrinciple === idx && (
                                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <ul className="space-y-2">
                                                {principle.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                        <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Data Processing Locations Map */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
                            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Global Data Processing Locations</h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                                        <HiOutlineGlobe className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">North America</h4>
                                    <p className="text-sm text-gray-500">us-east-1, us-west-2</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                                        <HiOutlineGlobe className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Europe</h4>
                                    <p className="text-sm text-gray-500">eu-west-1, eu-central-1</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                                        <HiOutlineGlobe className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Asia Pacific</h4>
                                    <p className="text-sm text-gray-500">ap-southeast-1, ap-northeast-1</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-3">
                                        <HiOutlineGlobe className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Data Residency</h4>
                                    <p className="text-sm text-gray-500">Customer-selectable regions</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Your Rights Tab */}
                {activeTab === 'rights' && (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {rights.map((right, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                    onClick={() => openPrivacyModal(right)}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            {getIcon(right.icon, "w-5 h-5 text-blue-600")}
                                        </div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{right.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{right.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-blue-600 flex items-center gap-1">
                                            <HiOutlineClock className="w-3 h-3" />
                                            {right.processTime}
                                        </span>
                                        <span className="text-xs text-green-600">Learn More →</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Data Protection Request Form */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="text-center mb-8">
                                <HiOutlineClipboardCheck className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Submit a Data Protection Request
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Exercise your data protection rights by submitting a request below.
                                </p>
                            </div>

                            {formSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h3>
                                    <p className="text-gray-600 dark:text-gray-400">We'll process your request and respond within 30 days.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />
                                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Request Type *</label>
                                            <select name="requestType" value={formData.requestType} onChange={handleInputChange} className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.requestType ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}>
                                                <option value="">Select request type</option>
                                                {requestTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                            </select>
                                            {errors.requestType && <p className="text-red-500 text-xs mt-1">{errors.requestType}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject ID (optional)</label>
                                            <input type="text" name="subjectId" value={formData.subjectId} onChange={handleInputChange} placeholder="Account ID or reference" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Additional Information</label>
                                            <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl" placeholder="Please provide any additional details to help us process your request..." />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="flex items-center gap-2">
                                                <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded" />
                                                <span className="text-sm text-gray-600 dark:text-gray-400">I confirm that I am the data subject or authorized to make this request on behalf of the data subject. *</span>
                                            </label>
                                            {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                        Submit Request
                                        <HiArrowRight className="inline ml-2 w-4 h-4" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </>
                )}

                {/* Data Processing Tab */}
                {activeTab === 'processing' && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Data Processing Activities</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                    <tr>
                                        <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Purpose</th>
                                        <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Data Categories</th>
                                        <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Legal Basis</th>
                                        <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Retention</th>
                                        <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Location</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {processingActivities.map((activity, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">
                                            <td className="p-4 text-sm font-medium text-gray-900 dark:text-white">{activity.purpose}</td>
                                            <td className="p-4 text-sm text-gray-600 dark:text-gray-400">
                                                {activity.categories.map((cat, i) => (
                                                    <span key={i} className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-0.5 text-xs mr-1 mb-1">{cat}</span>
                                                ))}
                                            </td>
                                            <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{activity.legalBasis}</td>
                                            <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{activity.retention}</td>
                                            <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{activity.location}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Contact Section */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Questions About Data Protection?</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Our Data Protection Officer is available to answer questions about how we handle your personal data.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="mailto:dpo@supplychainpro.com" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                            <HiOutlineMail className="w-4 h-4" /> dpo@supplychainpro.com
                        </a>
                        <a href="/privacy-policy" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                            <HiOutlineDocumentText className="w-4 h-4" /> View Privacy Policy
                        </a>
                    </div>
                </div>

                {/* Privacy Rights Modal */}
                {showPrivacyModal && selectedRight && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowPrivacyModal(false)}>
                        <div className="relative max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl my-8" onClick={(e) => e.stopPropagation()}>
                            <div className="bg-blue-600 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        {getIcon(selectedRight.icon, "w-5 h-5 text-white")}
                                        <h3 className="text-white font-bold text-lg">{selectedRight.title}</h3>
                                    </div>
                                    <button onClick={() => setShowPrivacyModal(false)} className="text-white hover:text-gray-200">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedRight.details}</p>
                                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-4">
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Process Time:</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedRight.processTime}</p>
                                </div>
                                {selectedRight.formRequired && (
                                    <button
                                        onClick={() => {
                                            setShowPrivacyModal(false);
                                            setActiveTab('rights');
                                            document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                                    >
                                        Submit Request
                                    </button>
                                )}
                            </div>
                        </div>
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
      `}</style>
        </section>
    );
};

export default DataProtectionSection2;