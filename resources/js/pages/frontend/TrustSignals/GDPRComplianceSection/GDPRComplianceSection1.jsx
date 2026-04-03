// page/frontend/TrustSignals/GDPRComplianceSection/GDPRComplianceSection1.jsx

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
    HiOutlineUserGroup
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const GDPRComplianceSection1 = ({ config }) => {
    const [activePrinciple, setActivePrinciple] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        requestType: '',
        message: ''
    });

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
            usergroup: <HiOutlineUserGroup className={className} />
        };
        return icons[iconName] || <HiOutlineShieldCheck className={className} />;
    };

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
                name: '',
                email: '',
                requestType: '',
                message: ''
            });
        }, 3000);
    };

    // GDPR principles
    const principles = config?.principles || [
        {
            title: "Lawfulness, Fairness & Transparency",
            description: "Personal data must be processed lawfully, fairly, and in a transparent manner. We clearly communicate how we collect, use, and store your data.",
            icon: "eye",
            color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
            details: [
                "Clear privacy notices",
                "Explicit consent mechanisms",
                "Transparent data processing",
                "Legal basis documentation"
            ]
        },
        {
            title: "Purpose Limitation",
            description: "Data is collected for specified, explicit, and legitimate purposes only. We don't use data for purposes beyond what we've disclosed.",
            icon: "flag",
            color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
            details: [
                "Specified purpose documentation",
                "No unauthorized secondary uses",
                "Regular purpose reviews",
                "Consent-based processing"
            ]
        },
        {
            title: "Data Minimization",
            description: "We only collect data that is adequate, relevant, and limited to what is necessary for the intended purposes.",
            icon: "database",
            color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
            details: [
                "Limited data collection",
                "Regular data retention reviews",
                "Automatic deletion policies",
                "Purpose-specific data usage"
            ]
        },
        {
            title: "Accuracy",
            description: "We maintain processes to ensure personal data is accurate and kept up to date.",
            icon: "check",
            color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
            details: [
                "User access to update data",
                "Automated validation checks",
                "Regular data quality reviews",
                "Correction procedures"
            ]
        },
        {
            title: "Storage Limitation",
            description: "Data is retained only as long as necessary for the purposes for which it was collected.",
            icon: "clock",
            color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
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
            color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
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
            color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
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
            action: "Learn More"
        },
        {
            title: "Right of Access",
            description: "You can request a copy of all personal data we hold about you.",
            icon: "document",
            action: "Request Access"
        },
        {
            title: "Right to Rectification",
            description: "You can correct inaccurate or incomplete personal data.",
            icon: "edit",
            action: "Correct Data"
        },
        {
            title: "Right to Erasure",
            description: "You can request deletion of your personal data (right to be forgotten).",
            icon: "trash",
            action: "Request Deletion"
        },
        {
            title: "Right to Restrict Processing",
            description: "You can limit how we use your personal data.",
            icon: "pause",
            action: "Restrict Processing"
        },
        {
            title: "Right to Data Portability",
            description: "You can receive your data in a machine-readable format.",
            icon: "download",
            action: "Export Data"
        },
        {
            title: "Right to Object",
            description: "You can object to data processing for specific purposes.",
            icon: "x",
            action: "Object to Processing"
        },
        {
            title: "Rights Related to Automated Decision Making",
            description: "You have rights regarding automated decisions and profiling.",
            icon: "chip",
            action: "Learn More"
        }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "100%", label: "GDPR Compliant", icon: "globe" },
        { value: "72h", label: "Breach Notification", icon: "clock" },
        { value: "30", label: "Days Response Time", icon: "calendar" },
        { value: "DPO", label: "Appointed", icon: "badge" }
    ];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="GDPR Compliance Section"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineGlobe className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "GDPR Compliance"}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Committed to"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "GDPR Compliance"}</span> {config?.title?.suffix || ""}
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "We fully comply with the General Data Protection Regulation (GDPR), ensuring your personal data is protected, processed lawfully, and that your privacy rights are respected."}
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

                {/* GDPR Principles */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        GDPR Data Protection Principles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {principles.map((principle, idx) => (
                            <div
                                key={idx}
                                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                onClick={() => setActivePrinciple(activePrinciple === idx ? -1 : idx)}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${principle.color} flex items-center justify-center`}>
                                        {getIcon(principle.icon, "w-6 h-6")}
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{principle.title}</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{principle.description}</p>
                                {activePrinciple === idx && (
                                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">How we implement this:</p>
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
                </div>

                {/* Your Rights Under GDPR */}
                <div className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        Your Rights Under GDPR
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {rights.map((right, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-600">
                                <div className="flex items-center gap-2 mb-2">
                                    {getIcon(right.icon, "w-4 h-4 text-blue-600")}
                                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{right.title}</h4>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{right.description}</p>
                                <button
                                    onClick={() => {
                                        setFormData({ ...formData, requestType: right.title });
                                        document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                                >
                                    {right.action} →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Data Protection Officer */}
                <div className="mb-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                        <HiOutlineBadgeCheck className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Data Protection Officer (DPO)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
                        We have appointed a Data Protection Officer to oversee GDPR compliance and serve as your point of contact for privacy matters.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="mailto:dpo@supplychainpro.com"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                        >
                            <HiOutlineMail className="w-4 h-4" />
                            dpo@supplychainpro.com
                        </a>
                    </div>
                </div>

                {/* GDPR Request Form */}
                <div id="request-form" className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
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
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Request Type *
                                    </label>
                                    <select
                                        name="requestType"
                                        value={formData.requestType}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select a request type</option>
                                        <option value="Right of Access">Right of Access</option>
                                        <option value="Right to Rectification">Right to Rectification</option>
                                        <option value="Right to Erasure">Right to Erasure</option>
                                        <option value="Right to Restrict Processing">Right to Restrict Processing</option>
                                        <option value="Right to Data Portability">Right to Data Portability</option>
                                        <option value="Right to Object">Right to Object</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Additional Information
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Please provide any additional information to help us process your request..."
                                    />
                                </div>
                            </div>

                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Submit Request
                                    <HiArrowRight className="inline ml-2 w-4 h-4" />
                                </button>
                                <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">
                                    We'll process your request in accordance with GDPR requirements.
                                </p>
                            </div>
                        </form>
                    )}
                </div>

                {/* Contact Section */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">
                        Questions About GDPR?
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Our Data Protection Officer is available to answer questions about GDPR compliance and your privacy rights.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="mailto:gdpr@supplychainpro.com"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                            <HiOutlineMail className="w-4 h-4" />
                            gdpr@supplychainpro.com
                        </a>
                        <a
                            href="/privacy-policy"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            <HiOutlineDocumentText className="w-4 h-4" />
                            View Privacy Policy
                        </a>
                    </div>
                </div>
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
            `}</style>
        </section>
    );
};

export default GDPRComplianceSection1;