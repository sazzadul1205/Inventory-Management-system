// page/frontend/TrustSignals/SOC2TypeSection/SOC2TypeSection2.jsx

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

const SOC2TypeSection2 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [activeTrustService, setActiveTrustService] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        title: '',
        reason: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});

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
        return icons[iconName] || <HiOutlineCertificate className={className} />;
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
        if (!formData.company) newErrors.company = 'Company is required';
        if (!formData.reason) newErrors.reason = 'Reason is required';
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
                company: '',
                title: '',
                reason: '',
                agreeToTerms: false
            });
        }, 3000);
    };

    // Trust service criteria
    const trustServices = config?.trustServices || [
        {
            title: "Security",
            description: "The system is protected against unauthorized access, both logical and physical. Our security controls ensure data confidentiality and integrity.",
            icon: "shield",
            gradient: "from-blue-500 to-blue-600",
            controls: [
                "Access controls and authentication",
                "Firewalls and intrusion detection",
                "Encryption for data at rest and in transit",
                "Regular vulnerability assessments",
                "Security incident response plan"
            ],
            metrics: "100% of controls implemented"
        },
        {
            title: "Availability",
            description: "The system is available for operation and use as committed or agreed. Our infrastructure is designed for high availability and resilience.",
            icon: "clock",
            gradient: "from-green-500 to-green-600",
            controls: [
                "99.9% uptime SLA",
                "Redundant infrastructure",
                "Disaster recovery planning",
                "Performance monitoring",
                "Incident response procedures"
            ],
            metrics: "99.99% actual uptime"
        },
        {
            title: "Processing Integrity",
            description: "System processing is complete, accurate, timely, and authorized. Our processes ensure data processing integrity.",
            icon: "check",
            gradient: "from-purple-500 to-purple-600",
            controls: [
                "Data validation checks",
                "Processing monitoring",
                "Error handling procedures",
                "Data quality controls",
                "Audit trails"
            ],
            metrics: "100% processing accuracy"
        },
        {
            title: "Confidentiality",
            description: "Information designated as confidential is protected as committed or agreed. We maintain strict confidentiality controls.",
            icon: "lock",
            gradient: "from-red-500 to-red-600",
            controls: [
                "Data classification policies",
                "Access controls",
                "Encryption standards",
                "Confidentiality agreements",
                "Data loss prevention"
            ],
            metrics: "0 confidentiality breaches"
        },
        {
            title: "Privacy",
            description: "Personal information is collected, used, retained, disclosed, and disposed of in conformity with privacy principles.",
            icon: "users",
            gradient: "from-orange-500 to-orange-600",
            controls: [
                "Privacy by design",
                "Consent management",
                "Data subject rights",
                "Privacy impact assessments",
                "GDPR/CCPA compliance"
            ],
            metrics: "100% privacy compliant"
        }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "SOC 2", label: "Type II", icon: "certificate", trend: "Certified", trendUp: true },
        { value: "99.9%", label: "Uptime SLA", icon: "clock", trend: "Exceeded", trendUp: true },
        { value: "24/7", label: "Monitoring", icon: "eye", trend: "Continuous", trendUp: true },
        { value: "Annual", label: "Audit Cycle", icon: "calendar", trend: "Completed", trendUp: true }
    ];

    const tabs = [
        { id: 'overview', label: 'Trust Services', icon: 'shield' },
        { id: 'report', label: 'Request Report', icon: 'document' },
        { id: 'faq', label: 'FAQ', icon: 'chat' }
    ];

    // FAQ items
    const faqs = config?.faqs || [
        {
            question: "What is the difference between SOC 2 Type I and Type II?",
            answer: "SOC 2 Type I evaluates the design of controls at a specific point in time, while Type II evaluates the operating effectiveness of controls over a period of time (typically 6-12 months). Type II provides greater assurance."
        },
        {
            question: "How often is the SOC 2 audit performed?",
            answer: "We undergo a full SOC 2 Type II audit annually, with continuous monitoring and quarterly control testing throughout the year."
        },
        {
            question: "Can I get a copy of the SOC 2 report?",
            answer: "Yes, qualified customers and prospects can request the SOC 2 Type II report by completing the request form. We'll verify your request and provide access within 2 business days."
        },
        {
            question: "What trust service criteria are included?",
            answer: "Our SOC 2 report covers all five trust service criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy."
        },
        {
            question: "Who performs the SOC 2 audit?",
            answer: "Our SOC 2 Type II audit is performed by Deloitte & Touche LLP, a leading independent auditing firm."
        }
    ];

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="SOC 2 Type II Compliance Center"
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
                            <HiOutlineCertificate className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "SOC 2 Type II"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Validated by"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "SOC 2 Type II"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Our SOC 2 Type II certification demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy. This independent audit validates our controls over an extended period."}
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

                {/* Trust Services Tab */}
                {activeTab === 'overview' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {trustServices.map((service, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                onClick={() => setActiveTrustService(activeTrustService === idx ? null : idx)}
                            >
                                <div className={`h-1.5 bg-linear-to-r ${service.gradient}`} />
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${service.gradient} flex items-center justify-center`}>
                                                {getIcon(service.icon, "w-6 h-6 text-white")}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white">{service.title}</h3>
                                                <p className="text-xs text-green-600">{service.metrics}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {service.description}
                                    </p>
                                    
                                    {activeTrustService === idx && (
                                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Controls:</p>
                                            <ul className="space-y-2">
                                                {service.controls.map((control, cIdx) => (
                                                    <li key={cIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                        <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                        <span>{control}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Request Report Tab */}
                {activeTab === 'report' && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                        <div className="text-center mb-8">
                            <HiOutlineDocumentText className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Request SOC 2 Type II Report
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Complete the form below to request access to our SOC 2 Type II report. We'll verify your request and provide access within 2 business days.
                            </p>
                        </div>

                        {formSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h3>
                                <p className="text-gray-600 dark:text-gray-400">Thank you for your request. Our security team will review and provide access to the SOC 2 Type II report within 2 business days.</p>
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
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company Name *</label>
                                        <input type="text" name="company" value={formData.company} onChange={handleInputChange} className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.company ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />
                                        {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Title</label>
                                        <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Reason for Request *</label>
                                        <textarea name="reason" value={formData.reason} onChange={handleInputChange} rows="3" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.reason ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} placeholder="Please tell us why you need access to the SOC 2 report..." />
                                        {errors.reason && <p className="text-red-500 text-xs mt-1">{errors.reason}</p>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">I agree to the terms and confirm that the information provided is accurate. *</span>
                                        </label>
                                        {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
                                    </div>
                                </div>
                                <button type="submit" className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                    Request Report
                                    <HiArrowRight className="inline ml-2 w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </div>
                )}

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                    <div className="grid md:grid-cols-2 gap-4 mb-12">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Audit Details Section */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12">
                    <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Audit Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                                <HiOutlineCalendar className="w-6 h-6 text-blue-600" />
                            </div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Audit Period</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">December 1, 2023 - November 30, 2024</p>
                        </div>
                        <div>
                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                                <HiOutlineBadgeCheck className="w-6 h-6 text-green-600" />
                            </div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Auditor</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Deloitte & Touche LLP</p>
                        </div>
                        <div>
                            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                                <HiOutlineGlobe className="w-6 h-6 text-purple-600" />
                            </div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Scope</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">All core services and infrastructure</p>
                        </div>
                        <div>
                            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-3">
                                <HiOutlineCheckCircle className="w-6 h-6 text-orange-600" />
                            </div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Result</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Unqualified Opinion</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Questions About SOC 2?</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Our security team is available to answer questions about our SOC 2 certification and compliance program.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="mailto:security@supplychainpro.com" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                            <HiOutlineMail className="w-4 h-4" /> security@supplychainpro.com
                        </a>
                        <a href="/security" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                            <HiOutlineShieldCheck className="w-4 h-4" /> Visit Security Center
                        </a>
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

export default SOC2TypeSection2;