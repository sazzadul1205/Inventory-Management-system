// page/frontend/TrustSignals/ComplianceStandardsSection/ComplianceStandardsSection2.jsx

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
    HiOutlineChevronRight,
    HiOutlineClipboardList
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const ComplianceStandardsSection2 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('standards');
    const [selectedStandard, setSelectedStandard] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('name');

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
            'chevron-right': <HiOutlineChevronRight className={className} />,
            clipboard: <HiOutlineClipboardList className={className} />
        };
        return icons[iconName] || <HiOutlineShieldCheck className={className} />;
    };

    // Open standard modal
    const openModal = (standard) => {
        setSelectedStandard(standard);
        setShowModal(true);
    };

    // Get category badge color
    const getCategoryBadgeColor = (category) => {
        const colors = {
            'Data Privacy': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            'Security Compliance': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
            'Security Management': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            'Healthcare Compliance': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
            'Payment Security': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
        };
        return colors[category] || 'bg-gray-100 text-gray-700';
    };

    // Get status badge color
    const getStatusBadgeColor = (status) => {
        const colors = {
            'Certified': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            'Compliant': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            'Ready': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
            'In Progress': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
        };
        return colors[status] || 'bg-gray-100 text-gray-700';
    };

    // Compliance standards data
    const standards = useMemo(() => config?.standards || [
        {
            id: 'gdpr',
            name: 'GDPR',
            fullName: 'General Data Protection Regulation',
            region: 'European Union',
            regionFlag: '🇪🇺',
            category: 'Data Privacy',
            status: 'Compliant',
            description: 'The GDPR is a comprehensive data protection law that sets guidelines for the collection, processing, and storage of personal information of individuals within the European Union.',
            keyRequirements: [
                'Data protection by design and default',
                'Right to access, rectification, and erasure',
                'Data breach notification within 72 hours',
                'Data Protection Officer (DPO) appointment',
                'Data Processing Agreements (DPAs)'
            ],
            certifications: ['GDPR Compliant'],
            icon: 'globe',
            gradient: 'from-blue-500 to-blue-600',
            lastAudit: 'January 2024',
            nextAudit: 'January 2025',
            documentation: '/compliance/gdpr-report.pdf'
        },
        {
            id: 'ccpa',
            name: 'CCPA',
            fullName: 'California Consumer Privacy Act',
            region: 'California, USA',
            regionFlag: '🇺🇸',
            category: 'Data Privacy',
            status: 'Compliant',
            description: 'The CCPA grants California residents new rights regarding their personal information, including the right to know what data is collected, request deletion, and opt-out of data sales.',
            keyRequirements: [
                'Right to know what personal information is collected',
                'Right to delete personal information',
                'Right to opt-out of data sales',
                'Right to non-discrimination for exercising rights',
                'Notice at collection requirements'
            ],
            certifications: ['CCPA Ready'],
            icon: 'shield',
            gradient: 'from-green-500 to-green-600',
            lastAudit: 'February 2024',
            nextAudit: 'February 2025',
            documentation: '/compliance/ccpa-report.pdf'
        },
        {
            id: 'soc2',
            name: 'SOC 2 Type II',
            fullName: 'Service Organization Control 2 Type II',
            region: 'Global',
            regionFlag: '🌐',
            category: 'Security Compliance',
            status: 'Certified',
            description: 'SOC 2 Type II certification demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy over an extended period.',
            keyRequirements: [
                'Security controls validated quarterly',
                'Availability monitoring and incident response',
                'Confidentiality and privacy protections',
                'Processing integrity verification',
                'Continuous monitoring and auditing'
            ],
            certifications: ['SOC 2 Type II'],
            icon: 'certificate',
            gradient: 'from-purple-500 to-purple-600',
            lastAudit: 'December 2023',
            nextAudit: 'December 2024',
            documentation: '/compliance/soc2-report.pdf'
        },
        {
            id: 'iso27001',
            name: 'ISO 27001',
            fullName: 'ISO/IEC 27001:2022',
            region: 'Global',
            regionFlag: '🌐',
            category: 'Security Management',
            status: 'Certified',
            description: 'ISO 27001 is the international standard for information security management systems (ISMS), specifying requirements for establishing, implementing, maintaining, and improving security controls.',
            keyRequirements: [
                'Information security management system',
                'Risk assessment and treatment',
                'Security policy and controls',
                'Continuous improvement framework',
                'Management review and internal audits'
            ],
            certifications: ['ISO 27001:2022'],
            icon: 'badge',
            gradient: 'from-orange-500 to-orange-600',
            lastAudit: 'October 2023',
            nextAudit: 'October 2024',
            documentation: '/compliance/iso27001-report.pdf'
        },
        {
            id: 'hipaa',
            name: 'HIPAA',
            fullName: 'Health Insurance Portability and Accountability Act',
            region: 'United States',
            regionFlag: '🇺🇸',
            category: 'Healthcare Compliance',
            status: 'Ready',
            description: 'HIPAA establishes national standards to protect sensitive patient health information from being disclosed without patient consent or knowledge.',
            keyRequirements: [
                'Privacy Rule compliance',
                'Security Rule safeguards',
                'Breach notification procedures',
                'Business Associate Agreements',
                'Administrative, physical, and technical safeguards'
            ],
            certifications: ['HIPAA Ready'],
            icon: 'shield',
            gradient: 'from-red-500 to-red-600',
            lastAudit: 'March 2024',
            nextAudit: 'March 2025',
            documentation: '/compliance/hipaa-readiness.pdf'
        },
        {
            id: 'pci-dss',
            name: 'PCI DSS',
            fullName: 'Payment Card Industry Data Security Standard',
            region: 'Global',
            regionFlag: '🌐',
            category: 'Payment Security',
            status: 'Compliant',
            description: 'PCI DSS is a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment.',
            keyRequirements: [
                'Secure network infrastructure',
                'Cardholder data protection',
                'Vulnerability management',
                'Access control measures',
                'Regular monitoring and testing'
            ],
            certifications: ['PCI DSS Level 1'],
            icon: 'credit',
            gradient: 'from-indigo-500 to-indigo-600',
            lastAudit: 'November 2023',
            nextAudit: 'November 2024',
            documentation: '/compliance/pci-dss-report.pdf'
        }
    ], [config?.standards]);

    // Filter standards
    const getFilteredStandards = useCallback(() => {
        let filtered = [...standards];

        if (searchQuery) {
            filtered = filtered.filter(s =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedRegion !== 'all') {
            filtered = filtered.filter(s => s.region === selectedRegion);
        }

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(s => s.category === selectedCategory);
        }

        if (sortBy === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'status') {
            filtered.sort((a, b) => a.status.localeCompare(b.status));
        } else if (sortBy === 'lastAudit') {
            filtered.sort((a, b) => new Date(b.lastAudit) - new Date(a.lastAudit));
        }

        return filtered;
    }, [standards, searchQuery, selectedRegion, selectedCategory, sortBy]);

    const filteredStandards = getFilteredStandards();

    // Regions for filter
    const regions = [
        { id: 'all', label: 'All Regions', flag: '🌐' },
        { id: 'European Union', label: 'European Union', flag: '🇪🇺' },
        { id: 'California, USA', label: 'California, USA', flag: '🇺🇸' },
        { id: 'United States', label: 'United States', flag: '🇺🇸' },
        { id: 'Global', label: 'Global', flag: '🌐' }
    ];

    // Categories for filter
    const categories = [
        { id: 'all', label: 'All Categories' },
        { id: 'Data Privacy', label: 'Data Privacy' },
        { id: 'Security Compliance', label: 'Security Compliance' },
        { id: 'Security Management', label: 'Security Management' },
        { id: 'Healthcare Compliance', label: 'Healthcare Compliance' },
        { id: 'Payment Security', label: 'Payment Security' }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "6", label: "Active Standards", icon: "check", trend: "All Compliant", trendUp: true },
        { value: "100%", label: "Audit Success Rate", icon: "chart", trend: "+2%", trendUp: true },
        { value: "24/7", label: "Compliance Monitoring", icon: "eye", trend: "Continuous", trendUp: true },
        { value: "Annual", label: "Third-Party Audits", icon: "calendar", trend: "Scheduled", trendUp: true }
    ];

    const tabs = [
        { id: 'standards', label: 'Compliance Standards', icon: 'shield' },
        { id: 'audits', label: 'Audit History', icon: 'calendar' },
        { id: 'certificates', label: 'Certificates', icon: 'certificate' }
    ];

    // Audit history
    const auditHistory = config?.auditHistory || [
        { year: '2024', standard: 'SOC 2 Type II', status: 'passed', date: 'December 2024', auditor: 'Deloitte' },
        { year: '2024', standard: 'ISO 27001', status: 'passed', date: 'October 2024', auditor: 'BSI' },
        { year: '2024', standard: 'PCI DSS', status: 'passed', date: 'November 2024', auditor: 'Trustwave' },
        { year: '2023', standard: 'GDPR', status: 'passed', date: 'January 2023', auditor: 'Internal' },
        { year: '2023', standard: 'SOC 2 Type II', status: 'passed', date: 'December 2023', auditor: 'Deloitte' }
    ];

    // Certificates
    const certificates = config?.certificates || [
        { name: 'SOC 2 Type II', issuer: 'AICPA', date: 'December 2023', validUntil: 'December 2024', image: '/certificates/soc2.png' },
        { name: 'ISO 27001:2022', issuer: 'BSI', date: 'October 2023', validUntil: 'October 2026', image: '/certificates/iso27001.png' },
        { name: 'PCI DSS Level 1', issuer: 'PCI Council', date: 'November 2023', validUntil: 'November 2024', image: '/certificates/pci.png' }
    ];

    // Active filters count
    const activeFiltersCount = [selectedRegion !== 'all', selectedCategory !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedRegion('all');
        setSelectedCategory('all');
        setSortBy('name');
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Compliance Standards Center"
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
                            <HiOutlineShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Compliance Standards"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Meeting Global"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Compliance"}</span> {config?.title?.suffix || "Standards"}
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "We adhere to the highest industry standards and regulations to ensure your data is protected and your business remains compliant."}
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
                                    placeholder="Search compliance standards..."
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex gap-2">
                                <select
                                    value={selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {regions.map(region => (
                                        <option key={region.id} value={region.id === 'all' ? 'all' : region.label}>
                                            {region.flag} {region.label}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id === 'all' ? 'all' : cat.label}>
                                            {cat.label}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="name">Sort by Name</option>
                                    <option value="status">Sort by Status</option>
                                    <option value="lastAudit">Sort by Last Audit</option>
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
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
                                        <select
                                            value={selectedRegion}
                                            onChange={(e) => setSelectedRegion(e.target.value)}
                                            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {regions.map(region => (
                                                <option key={region.id} value={region.id === 'all' ? 'all' : region.label}>
                                                    {region.flag} {region.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                        <select
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {categories.map(cat => (
                                                <option key={cat.id} value={cat.id === 'all' ? 'all' : cat.label}>
                                                    {cat.label}
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
                                            <option value="status">Status</option>
                                            <option value="lastAudit">Last Audit Date</option>
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
                                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredStandards.length}</span> compliance standards
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        </div>

                        {/* Standards Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {filteredStandards.map((standard) => (
                                <div
                                    key={standard.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                    onClick={() => openModal(standard)}
                                >
                                    <div className={`h-1.5 bg-linear-to-r ${standard.gradient}`} />
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${standard.gradient} flex items-center justify-center`}>
                                                    {getIcon(standard.icon, "w-6 h-6 text-white")}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 dark:text-white">{standard.name}</h3>
                                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                                        <span>{standard.regionFlag}</span> {standard.region}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeColor(standard.status)}`}>
                                                {standard.status}
                                            </span>
                                        </div>
                                        
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                            {standard.description}
                                        </p>
                                        
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <HiOutlineCalendar className="w-3 h-3" />
                                                <span>Last: {standard.lastAudit}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <HiOutlineClock className="w-3 h-3" />
                                                <span>Next: {standard.nextAudit}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadgeColor(standard.category)}`}>
                                                {standard.category}
                                            </span>
                                            {standard.certifications.map((cert, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    {cert}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <span className="text-xs text-gray-500">Audited by {standard.auditor || 'Third Party'}</span>
                                            <button className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300">
                                                View Details
                                                <HiArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* No Results */}
                        {filteredStandards.length === 0 && (
                            <div className="text-center py-12">
                                <HiOutlineShieldCheck className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No standards found</h3>
                                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                                <button onClick={clearAllFilters} className="mt-4 text-blue-600 hover:underline">Clear all filters</button>
                            </div>
                        )}
                    </>
                )}

                {/* Audit History Tab */}
                {activeTab === 'audits' && (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-gray-700/30">
                                    <tr>
                                        <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Year</th>
                                        <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Standard</th>
                                        <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Date</th>
                                        <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Auditor</th>
                                        <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {auditHistory.map((audit, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">
                                            <td className="p-4 text-sm font-medium text-gray-900 dark:text-white">{audit.year}</td>
                                            <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{audit.standard}</td>
                                            <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{audit.date}</td>
                                            <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{audit.auditor}</td>
                                            <td className="p-4">
                                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                                    <HiOutlineCheckCircle className="w-3 h-3" />
                                                    {audit.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Certificates Tab */}
                {activeTab === 'certificates' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {certificates.map((cert, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center">
                                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                                    <HiOutlineCertificate className="w-10 h-10 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{cert.name}</h3>
                                <p className="text-sm text-gray-500 mb-2">Issued by {cert.issuer}</p>
                                <p className="text-xs text-gray-400">Issued: {cert.date} | Valid until: {cert.validUntil}</p>
                                <button className="mt-4 text-blue-600 text-sm font-semibold hover:underline flex items-center justify-center gap-1">
                                    Download Certificate
                                    <HiOutlineDownload className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Compliance Commitment */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineShieldCheck className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Our Commitment to Compliance</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">We undergo regular third-party audits and maintain continuous compliance monitoring to ensure we meet the highest standards of security and privacy.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="/compliance/report" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                            <HiOutlineDocumentText className="w-4 h-4" />
                            Download Compliance Report
                        </a>
                        <a href="/security/request" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                            <HiOutlineMail className="w-4 h-4" />
                            Request Compliance Documentation
                        </a>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Compliance Questions?</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">Our compliance team is available to answer questions about our standards and provide documentation.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="mailto:compliance@supplychainpro.com" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                            <HiOutlineMail className="w-4 h-4" />
                            compliance@supplychainpro.com
                        </a>
                        <a href="/compliance-request" className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">
                            <HiOutlineDocumentText className="w-4 h-4" />
                            Request Documents
                        </a>
                    </div>
                </div>

                {/* Standard Detail Modal */}
                {showModal && selectedStandard && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowModal(false)}>
                        <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl my-8" onClick={(e) => e.stopPropagation()}>
                            <div className={`h-2 bg-linear-to-r ${selectedStandard.gradient}`} />
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${selectedStandard.gradient} flex items-center justify-center`}>
                                            {getIcon(selectedStandard.icon, "w-6 h-6 text-white")}
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selectedStandard.name}</h2>
                                            <p className="text-sm text-gray-500">{selectedStandard.fullName}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setShowModal(false)} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                                        <HiOutlineX className="w-5 h-5" />
                                    </button>
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeColor(selectedStandard.status)}`}>
                                        {selectedStandard.status}
                                    </span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadgeColor(selectedStandard.category)}`}>
                                        {selectedStandard.category}
                                    </span>
                                    <span className="text-xs text-gray-500 flex items-center gap-1">
                                        <span>{selectedStandard.regionFlag}</span> {selectedStandard.region}
                                    </span>
                                </div>
                                
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedStandard.description}</p>
                                
                                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-4">
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Requirements:</p>
                                    <ul className="space-y-2">
                                        {selectedStandard.keyRequirements.map((req, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-xs font-medium text-gray-500">Last Audit</p>
                                        <p className="text-sm text-gray-900 dark:text-white">{selectedStandard.lastAudit}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-500">Next Audit</p>
                                        <p className="text-sm text-gray-900 dark:text-white">{selectedStandard.nextAudit}</p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-3">
                                    <a href={selectedStandard.documentation} className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        Download Report
                                    </a>
                                    <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                                        Close
                                    </button>
                                </div>
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

export default ComplianceStandardsSection2;