// page/frontend/TrustSignals/ISOCertificationsSection/ISOCertificationsSection2.jsx

// React
import { useState, useCallback, useMemo } from 'react';

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

const ISOCertificationsSection2 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('standards');
    const [activeStandard, setActiveStandard] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStandardType, setSelectedStandardType] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('name');
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

    // ISO Standards
    const standards = useMemo(() => config?.standards || [
        {
            id: 'iso27001',
            title: 'ISO/IEC 27001:2022',
            type: 'Information Security',
            description: 'International standard for information security management systems (ISMS). It specifies requirements for establishing, implementing, maintaining, and continually improving an information security management system.',
            scope: 'Global operations, all products and services',
            validUntil: 'October 2026',
            auditor: 'BSI Group',
            icon: 'shield',
            gradient: 'from-blue-500 to-blue-600',
            color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            requirements: [
                'Information security policy',
                'Risk assessment and treatment',
                'Security controls implementation',
                'Continuous improvement process',
                'Management review and internal audits'
            ],
            isFeatured: true
        },
        {
            id: 'iso27017',
            title: 'ISO/IEC 27017',
            type: 'Cloud Security',
            description: 'Code of practice for information security controls for cloud services. It provides additional guidance for cloud service providers and customers.',
            scope: 'Cloud infrastructure and services',
            validUntil: 'October 2026',
            auditor: 'BSI Group',
            icon: 'cloud',
            gradient: 'from-green-500 to-green-600',
            color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            requirements: [
                'Cloud-specific security controls',
                'Customer relationship management',
                'Shared responsibility clarity',
                'Virtualization security',
                'Cloud data protection'
            ]
        },
        {
            id: 'iso27018',
            title: 'ISO/IEC 27018',
            type: 'Data Privacy',
            description: 'Code of practice for protection of personally identifiable information (PII) in public clouds. It establishes controls for protecting PII in cloud environments.',
            scope: 'Cloud-based PII processing',
            validUntil: 'October 2026',
            auditor: 'BSI Group',
            icon: 'users',
            gradient: 'from-purple-500 to-purple-600',
            color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
            requirements: [
                'PII protection controls',
                'Consent management',
                'Data subject rights',
                'Transparency requirements',
                'Data breach notification'
            ],
            isFeatured: true
        },
        {
            id: 'iso9001',
            title: 'ISO 9001:2015',
            type: 'Quality Management',
            description: 'Quality management systems standard. It demonstrates our commitment to quality, customer satisfaction, and continuous improvement.',
            scope: 'All products and services',
            validUntil: 'December 2025',
            auditor: 'BSI Group',
            icon: 'badge',
            gradient: 'from-orange-500 to-orange-600',
            color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
            requirements: [
                'Quality management system',
                'Customer focus',
                'Process approach',
                'Continuous improvement',
                'Evidence-based decision making'
            ]
        }
    ], [config]);

    // Filter standards
    const getFilteredStandards = useCallback(() => {
        let filtered = [...standards];

        if (searchQuery) {
            filtered = filtered.filter(s =>
                s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedStandardType !== 'all') {
            filtered = filtered.filter(s => s.type === selectedStandardType);
        }

        if (sortBy === 'name') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'validUntil') {
            filtered.sort((a, b) => new Date(a.validUntil) - new Date(b.validUntil));
        }

        return filtered;
    }, [standards, searchQuery, selectedStandardType, sortBy]);

    const filteredStandards = getFilteredStandards();

    // Stats
    const stats = config?.stats || [
        { value: "4", label: "ISO Certifications", icon: "certificate", trend: "Active", trendUp: true },
        { value: "100%", label: "Audit Success", icon: "check", trend: "Pass Rate", trendUp: true },
        { value: "BSI", label: "Certification Body", icon: "badge", trend: "Global", trendUp: true },
        { value: "Global", label: "Scope", icon: "globe", trend: "Worldwide", trendUp: true }
    ];

    const tabs = [
        { id: 'standards', label: 'ISO Standards', icon: 'certificate' },
        { id: 'request', label: 'Request Documents', icon: 'document' },
        { id: 'faq', label: 'FAQ', icon: 'chat' }
    ];

    const standardTypes = [
        { id: 'all', label: 'All Standards' },
        { id: 'Information Security', label: 'Information Security' },
        { id: 'Cloud Security', label: 'Cloud Security' },
        { id: 'Data Privacy', label: 'Data Privacy' },
        { id: 'Quality Management', label: 'Quality Management' }
    ];

    // FAQ items
    const faqs = config?.faqs || [
        {
            question: "What is ISO 27001 certification?",
            answer: "ISO 27001 is the international standard for information security management systems (ISMS). It demonstrates that we have implemented a systematic approach to managing sensitive company and customer information."
        },
        {
            question: "How often are ISO certifications renewed?",
            answer: "ISO certifications are valid for three years with annual surveillance audits. We undergo recertification every three years to maintain our certifications."
        },
        {
            question: "What is the difference between ISO 27017 and ISO 27018?",
            answer: "ISO 27017 focuses on cloud security controls, while ISO 27018 focuses specifically on protecting personally identifiable information (PII) in cloud environments."
        },
        {
            question: "Can I get copies of your ISO certificates?",
            answer: "Yes, qualified customers and prospects can request our ISO certificates by completing the request form. We'll verify your request and provide access within 2 business days."
        },
        {
            question: "Who performs your ISO audits?",
            answer: "All our ISO certifications are audited by BSI Group, a leading global certification body recognized for its rigorous assessment standards."
        }
    ];

    // Active filters count
    const activeFiltersCount = [selectedStandardType !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedStandardType('all');
        setSortBy('name');
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="ISO Certifications Center"
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
                                {config?.badge || "ISO Certifications"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Certified by"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "International Standards"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "We maintain multiple ISO certifications demonstrating our commitment to information security, quality management, and data protection."}
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

                {/* Standards Tab */}
                {activeTab === 'standards' && (
                    <>
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
                                    placeholder="Search ISO standards..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex gap-2">
                                <select
                                    value={selectedStandardType}
                                    onChange={(e) => setSelectedStandardType(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {standardTypes.map(type => (
                                        <option key={type.id} value={type.id === 'all' ? 'all' : type.label}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="name">Sort by Name</option>
                                    <option value="validUntil">Sort by Expiry Date</option>
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
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Standard Type</label>
                                        <select
                                            value={selectedStandardType}
                                            onChange={(e) => setSelectedStandardType(e.target.value)}
                                            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {standardTypes.map(type => (
                                                <option key={type.id} value={type.id === 'all' ? 'all' : type.label}>
                                                    {type.label}
                                                </option>
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
                                            <option value="name">Name (A-Z)</option>
                                            <option value="validUntil">Expiry Date</option>
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

                        {/* Results Count */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredStandards.length}</span> ISO standards
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        </div>

                        {/* Standards Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {filteredStandards.map((standard, idx) => (
                                <div
                                    key={standard.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                    onClick={() => setActiveStandard(activeStandard === idx ? null : idx)}
                                >
                                    <div className={`h-1.5 bg-linear-to-r ${standard.gradient}`} />
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${standard.gradient} flex items-center justify-center`}>
                                                    {getIcon(standard.icon, "w-6 h-6 text-white")}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 dark:text-white">{standard.title}</h3>
                                                    <p className="text-xs text-gray-500">{standard.type}</p>
                                                </div>
                                            </div>
                                            {standard.isFeatured && (
                                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                                                    <HiOutlineStar className="w-3 h-3" />
                                                    Featured
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                            {standard.description}
                                        </p>

                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <HiOutlineCalendar className="w-3 h-3" />
                                                <span>Valid until: {standard.validUntil}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <HiOutlineBadgeCheck className="w-3 h-3" />
                                                <span>Auditor: {standard.auditor}</span>
                                            </div>
                                        </div>

                                        {activeStandard === idx && (
                                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Requirements:</p>
                                                <ul className="space-y-2">
                                                    {standard.requirements.map((req, rIdx) => (
                                                        <li key={rIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                            <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                            <span>{req}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* No Results */}
                        {filteredStandards.length === 0 && (
                            <div className="text-center py-12">
                                <HiOutlineCertificate className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No standards found</h3>
                                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                                <button onClick={clearAllFilters} className="mt-4 text-blue-600 hover:underline">Clear all filters</button>
                            </div>
                        )}
                    </>
                )}

                {/* Request Documents Tab */}
                {activeTab === 'request' && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                        <div className="text-center mb-8">
                            <HiOutlineDocumentText className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Request ISO Certification Documents
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Complete the form below to request our ISO certification documents. We'll verify your request and provide access within 2 business days.
                            </p>
                        </div>

                        {formSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h3>
                                <p className="text-gray-600 dark:text-gray-400">Thank you for your request. Our compliance team will review and provide access to the ISO certification documents within 2 business days.</p>
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
                                        <textarea name="reason" value={formData.reason} onChange={handleInputChange} rows="3" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.reason ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} placeholder="Please tell us why you need access to the ISO certification documents..." />
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
                                    Request Documents
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

                {/* Contact Section */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Questions About ISO Certifications?</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Our compliance team is available to answer questions about our ISO certifications and audit processes.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="mailto:compliance@supplychainpro.com" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                            <HiOutlineMail className="w-4 h-4" /> compliance@supplychainpro.com
                        </a>
                        <a href="/compliance" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                            <HiOutlineShieldCheck className="w-4 h-4" /> Visit Compliance Center
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

export default ISOCertificationsSection2;