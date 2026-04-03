// page/frontend/TrustSignals/GDPRComplianceSection/GDPRComplianceSection2.jsx

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
    HiOutlineScale,
    HiOutlineUserGroup,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineTrendingUp,
    HiOutlineFire,
    HiOutlineChevronLeft,
    HiOutlineChevronRight
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const GDPRComplianceSection2 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [activePrinciple, setActivePrinciple] = useState(null);
    const [expandedRight, setExpandedRight] = useState(null);
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
    const [selectedRight] = useState(null);

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
            scale: <HiOutlineScale className={className} />,
            usergroup: <HiOutlineUserGroup className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />
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

    // Toggle right expansion
    const toggleRight = (index) => {
        setExpandedRight(expandedRight === index ? null : index);
    };

    // GDPR principles
    const principles = config?.principles || [
        {
            title: "Lawfulness, Fairness & Transparency",
            description: "Personal data must be processed lawfully, fairly, and in a transparent manner.",
            icon: "eye",
            status: "Implemented",
            gradient: "from-blue-500 to-blue-600",
            details: [
                "Clear privacy notices provided",
                "Explicit consent mechanisms in place",
                "Transparent data processing documented",
                "Legal basis for each processing activity"
            ]
        },
        {
            title: "Purpose Limitation",
            description: "Data is collected for specified, explicit, and legitimate purposes only.",
            icon: "flag",
            status: "Implemented",
            gradient: "from-green-500 to-green-600",
            details: [
                "Specified purpose documentation",
                "No unauthorized secondary uses",
                "Regular purpose reviews conducted",
                "Consent-based processing"
            ]
        },
        {
            title: "Data Minimization",
            description: "We only collect data that is adequate, relevant, and limited to what is necessary.",
            icon: "database",
            status: "Implemented",
            gradient: "from-purple-500 to-purple-600",
            details: [
                "Limited data collection practices",
                "Regular data retention reviews",
                "Automatic deletion policies",
                "Purpose-specific data usage"
            ]
        },
        {
            title: "Accuracy",
            description: "We maintain processes to ensure personal data is accurate and kept up to date.",
            icon: "check",
            status: "Implemented",
            gradient: "from-orange-500 to-orange-600",
            details: [
                "User access to update data",
                "Automated validation checks",
                "Regular data quality reviews",
                "Correction procedures in place"
            ]
        },
        {
            title: "Storage Limitation",
            description: "Data is retained only as long as necessary for the purposes for which it was collected.",
            icon: "clock",
            status: "Implemented",
            gradient: "from-red-500 to-red-600",
            details: [
                "Defined retention periods",
                "Automated deletion schedules",
                "Annual data reviews",
                "Secure data disposal"
            ]
        },
        {
            title: "Integrity & Confidentiality",
            description: "Data is processed securely with appropriate technical and organizational measures.",
            icon: "shield",
            status: "Certified",
            gradient: "from-indigo-500 to-indigo-600",
            details: [
                "AES-256 encryption at rest",
                "TLS 1.3 encryption in transit",
                "Access controls and authentication",
                "Regular security audits"
            ]
        },
        {
            title: "Accountability",
            description: "We're responsible for compliance with GDPR principles and can demonstrate our compliance.",
            icon: "badge",
            status: "Certified",
            gradient: "from-cyan-500 to-cyan-600",
            details: [
                "Designated Data Protection Officer",
                "Comprehensive documentation",
                "Regular compliance audits",
                "Transparent reporting"
            ]
        }
    ];

    // Data subject rights
    const rights = config?.rights || [
        {
            title: "Right to be Informed",
            description: "You have the right to know how your data is being collected, used, and shared.",
            icon: "eye",
            processTime: "Immediate",
            legalBasis: "Articles 13 & 14",
            details: "You have the right to be provided with clear, transparent, and easily understandable information about how we use your personal data and your rights."
        },
        {
            title: "Right of Access",
            description: "You can request a copy of all personal data we hold about you.",
            icon: "document",
            processTime: "30 days",
            legalBasis: "Article 15",
            details: "You have the right to obtain confirmation that your data is being processed, access to your personal data, and information about how it's being used."
        },
        {
            title: "Right to Rectification",
            description: "You can correct inaccurate or incomplete personal data.",
            icon: "edit",
            processTime: "15 days",
            legalBasis: "Article 16",
            details: "You have the right to have inaccurate personal data rectified and incomplete data completed."
        },
        {
            title: "Right to Erasure",
            description: "You can request deletion of your personal data (right to be forgotten).",
            icon: "trash",
            processTime: "30 days",
            legalBasis: "Article 17",
            details: "You have the right to request deletion of your data when it's no longer necessary, consent is withdrawn, or processing is unlawful."
        },
        {
            title: "Right to Restrict Processing",
            description: "You can limit how we use your personal data.",
            icon: "pause",
            processTime: "15 days",
            legalBasis: "Article 18",
            details: "You have the right to request that we stop processing your data while we verify its accuracy or the lawfulness of processing."
        },
        {
            title: "Right to Data Portability",
            description: "You can receive your data in a machine-readable format.",
            icon: "download",
            processTime: "30 days",
            legalBasis: "Article 20",
            details: "You have the right to receive your data in a structured, commonly used, machine-readable format and transmit it to another controller."
        },
        {
            title: "Right to Object",
            description: "You can object to data processing for specific purposes.",
            icon: "x",
            processTime: "15 days",
            legalBasis: "Article 21",
            details: "You have the right to object to processing based on legitimate interests, direct marketing, or for scientific/historical research."
        },
        {
            title: "Automated Decision Making",
            description: "You have rights regarding automated decisions and profiling.",
            icon: "chip",
            processTime: "30 days",
            legalBasis: "Article 22",
            details: "You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects."
        }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "100%", label: "GDPR Compliant", icon: "globe", trend: "Certified", trendUp: true },
        { value: "72h", label: "Breach Notification", icon: "clock", trend: "Compliant", trendUp: true },
        { value: "30", label: "Days Response", icon: "calendar", trend: "Guaranteed", trendUp: true },
        { value: "DPO", label: "Appointed", icon: "badge", trend: "Available", trendUp: true }
    ];

    const tabs = [
        { id: 'overview', label: 'Principles', icon: 'shield' },
        { id: 'rights', label: 'Your Rights', icon: 'users' },
        { id: 'request', label: 'Submit Request', icon: 'document' }
    ];

    const requestTypes = ["Right of Access", "Right to Rectification", "Right to Erasure", "Right to Restrict Processing", "Right to Data Portability", "Right to Object"];

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="GDPR Compliance Center"
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
                                {config?.badge || "GDPR Compliance"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Committed to"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "GDPR Compliance"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "We fully comply with the General Data Protection Regulation (GDPR), ensuring your personal data is protected, processed lawfully, and that your privacy rights are respected."}
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

                {/* Principles Tab */}
                {activeTab === 'overview' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                )}

                {/* Your Rights Tab */}
                {activeTab === 'rights' && (
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {rights.map((right, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            {getIcon(right.icon, "w-5 h-5 text-blue-600")}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white">{right.title}</h3>
                                            <p className="text-xs text-gray-500">{right.legalBasis}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-blue-600 flex items-center gap-1">
                                        <HiOutlineClock className="w-3 h-3" />
                                        {right.processTime}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{right.description}</p>
                                <button
                                    onClick={() => toggleRight(idx)}
                                    className="flex items-center gap-1 text-sm text-blue-600 font-medium"
                                >
                                    {expandedRight === idx ? 'Show less' : 'Learn more'}
                                    <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${expandedRight === idx ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedRight === idx && (
                                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{right.details}</p>
                                        <button
                                            onClick={() => {
                                                setActiveTab('request');
                                                setFormData({ ...formData, requestType: right.title });
                                            }}
                                            className="mt-3 inline-flex items-center gap-1 text-blue-600 text-sm font-semibold"
                                        >
                                            Submit Request
                                            <HiArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Submit Request Tab */}
                {activeTab === 'request' && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                        <div className="text-center mb-8">
                            <HiOutlineDocumentText className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Submit a GDPR Request
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Exercise your data protection rights by submitting a request. We'll respond within 30 days.
                            </p>
                        </div>

                        {formSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h3>
                                <p className="text-gray-600 dark:text-gray-400">Thank you for your request. Our privacy team will respond within 30 days.</p>
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
                                        <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl" placeholder="Please provide any additional information to help us process your request..." />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">I confirm that I am the data subject or authorized to make this request. *</span>
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
                )}

                {/* Data Protection Officer Section */}
                <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                        <HiOutlineBadgeCheck className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Data Protection Officer (DPO)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        We have appointed a Data Protection Officer to oversee GDPR compliance and serve as your point of contact for privacy matters.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="mailto:dpo@supplychainpro.com" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                            <HiOutlineMail className="w-4 h-4" />
                            dpo@supplychainpro.com
                        </a>
                        <a href="/privacy-policy" className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300">
                            <HiOutlineDocumentText className="w-4 h-4" />
                            View Privacy Policy
                        </a>
                    </div>
                </div>

                {/* Privacy Rights Modal */}
                {showPrivacyModal && selectedRight && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowPrivacyModal(false)}>
                        <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className="bg-blue-600 p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-bold text-lg">{selectedRight.title}</h3>
                                    <button onClick={() => setShowPrivacyModal(false)} className="text-white hover:text-gray-200">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedRight.details}</p>
                                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-4">
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Legal Basis:</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedRight.legalBasis}</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-4">
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response Time:</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedRight.processTime}</p>
                                </div>
                                <button
                                    onClick={() => {
                                        setShowPrivacyModal(false);
                                        setActiveTab('request');
                                        setFormData({ ...formData, requestType: selectedRight.title });
                                    }}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                                >
                                    Submit Request
                                </button>
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

export default GDPRComplianceSection2;