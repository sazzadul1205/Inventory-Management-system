// page/frontend/TrustSignals/TermsOfServiceSection/TermsOfServiceSection2.jsx

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
    HiOutlineScale,
    HiOutlineClipboardList,
    HiOutlineReceiptTax,
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
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy, HiOutlinePrinter } from 'react-icons/hi2';

const TermsOfServiceSection2 = ({ config }) => {
    const [activeSection, setActiveSection] = useState('acceptance');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSection, setExpandedSection] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: '',
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
            scale: <HiOutlineScale className={className} />,
            clipboard: <HiOutlineClipboardList className={className} />,
            receipt: <HiOutlineReceiptTax className={className} />,
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
        return icons[iconName] || <HiOutlineScale className={className} />;
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
        if (!formData.question) newErrors.question = 'Question is required';
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
                question: '',
                agreeToTerms: false
            });
        }, 3000);
    };

    // Terms sections
    const sections = config?.sections || [
        {
            id: 'acceptance',
            title: 'Acceptance of Terms',
            icon: 'clipboard',
            summary: 'Agreement to be bound by these terms',
            content: 'By accessing or using SupplyChainPro\'s platform, services, or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and SupplyChainPro.',
            keyPoints: ['Legally binding agreement', 'Acceptance by use', 'Right to refuse']
        },
        {
            id: 'definitions',
            title: 'Definitions',
            icon: 'document',
            summary: 'Key terms used throughout this agreement',
            content: '"Platform" refers to SupplyChainPro\'s software and services. "User" refers to any individual or entity accessing our services. "Account" refers to the user\'s registered account. "Content" refers to any data, information, or materials uploaded or processed through the platform.',
            keyPoints: ['Platform definition', 'User definition', 'Account definition']
        },
        {
            id: 'account-registration',
            title: 'Account Registration',
            icon: 'users',
            summary: 'Requirements for creating and maintaining an account',
            content: 'To access certain features, you must register for an account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
            keyPoints: ['Accurate information required', 'Account security responsibility', 'Age requirements apply']
        },
        {
            id: 'user-obligations',
            title: 'User Obligations',
            icon: 'shield',
            summary: 'Your responsibilities when using our platform',
            content: 'You agree to use our services in compliance with all applicable laws and regulations. You shall not: misuse the platform, attempt to gain unauthorized access, interfere with service operations, or use the platform for any illegal purpose.',
            keyPoints: ['Comply with laws', 'No unauthorized access', 'No interference with services']
        },
        {
            id: 'intellectual-property',
            title: 'Intellectual Property',
            icon: 'badge',
            summary: 'Ownership of platform and user content',
            content: 'SupplyChainPro owns all rights, title, and interest in the platform, including software, trademarks, and content. You retain ownership of your data. You grant us a license to use your data to provide and improve our services.',
            keyPoints: ['Platform owned by SupplyChainPro', 'User retains data ownership', 'License to provide services']
        },
        {
            id: 'payment-terms',
            title: 'Payment Terms',
            icon: 'credit',
            summary: 'Fees, billing, and refund policies',
            content: 'Fees for paid services are described on our pricing page. Payments are due in accordance with your subscription plan. Fees are non-refundable except as required by law. We may change fees with notice.',
            keyPoints: ['Fees as described', 'Non-refundable', 'Fee changes with notice']
        },
        {
            id: 'data-privacy',
            title: 'Data Privacy',
            icon: 'lock',
            summary: 'How we handle your personal information',
            content: 'Our Privacy Policy governs how we collect, use, and protect your personal information. By using our services, you consent to our data practices as described in the Privacy Policy.',
            keyPoints: ['Privacy Policy applies', 'Consent to data practices', 'GDPR compliant']
        },
        {
            id: 'service-level',
            title: 'Service Level',
            icon: 'chart',
            summary: 'Uptime and support commitments',
            content: 'We strive to maintain high availability and performance. Our service level agreement (SLA) outlines uptime commitments and support response times. We are not liable for downtime caused by factors beyond our control.',
            keyPoints: ['99.9% uptime target', 'SLA commitments', 'Force majeure exceptions']
        },
        {
            id: 'termination',
            title: 'Termination',
            icon: 'x',
            summary: 'How and when this agreement ends',
            content: 'Either party may terminate this agreement. You may cancel your account at any time. We may suspend or terminate your access for violation of these terms. Upon termination, your right to use the service ends immediately.',
            keyPoints: ['Account cancellation allowed', 'Termination for violation', 'Immediate effect upon termination']
        },
        {
            id: 'limitation-liability',
            title: 'Limitation of Liability',
            icon: 'shield',
            summary: 'Limits on our legal responsibility',
            content: 'To the maximum extent permitted by law, SupplyChainPro shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by you for the services.',
            keyPoints: ['No indirect damages', 'Liability capped at fees paid', 'Exceptions where required by law']
        },
        {
            id: 'indemnification',
            title: 'Indemnification',
            icon: 'shield',
            summary: 'Your obligation to protect us from claims',
            content: 'You agree to indemnify and hold harmless SupplyChainPro from any claims arising from your use of the service, violation of these terms, or infringement of any third-party rights.',
            keyPoints: ['Indemnify SupplyChainPro', 'Cover legal fees', 'Third-party claims included']
        },
        {
            id: 'governing-law',
            title: 'Governing Law',
            icon: 'globe',
            summary: 'Which laws apply to this agreement',
            content: 'These terms shall be governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.',
            keyPoints: ['Delaware law applies', 'Venue in California', 'No conflict of laws']
        },
        {
            id: 'modifications',
            title: 'Modifications to Terms',
            icon: 'refresh',
            summary: 'How we may update these terms',
            content: 'We may update these terms from time to time. We will notify you of material changes via email or through the platform. Your continued use of the service constitutes acceptance of the modified terms.',
            keyPoints: ['Terms may be updated', 'Notice of material changes', 'Continued use equals acceptance']
        },
        {
            id: 'contact',
            title: 'Contact Information',
            icon: 'mail',
            summary: 'How to reach our legal team',
            content: 'For questions about these Terms of Service, please contact us at legal@supplychainpro.com or by mail at the address provided on our website. Our legal team will respond to inquiries promptly.',
            keyPoints: ['Email: legal@supplychainpro.com', 'Legal team available', 'Prompt responses']
        }
    ];

    // Filter sections based on search
    const filteredSections = sections.filter(section =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.keyPoints.some(point => point.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Toggle section on mobile
    const toggleSection = (id) => {
        setExpandedSection(expandedSection === id ? null : id);
        setActiveSection(id);
    };

    // Stats
    const stats = config?.stats || [
        { value: "14", label: "Sections", icon: "document", trend: "Complete", trendUp: true },
        { value: "24/7", label: "Legal Support", icon: "chat", trend: "Available", trendUp: true },
        { value: "99.9%", label: "SLA", icon: "chart", trend: "Guaranteed", trendUp: true },
        { value: "Global", label: "Jurisdiction", icon: "globe", trend: "Delaware", trendUp: true }
    ];

    const effectiveDate = config?.effectiveDate || "January 1, 2024";

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Terms of Service Center"
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
                            <HiOutlineScale className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Terms of Service"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Terms"}</span> {config?.title?.suffix || "of Service"}
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "These terms govern your use of SupplyChainPro's platform and services. Please read them carefully before using our platform."}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Effective Date: {effectiveDate}</p>
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

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-8">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search the terms of service..."
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Quick Navigation */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center overflow-x-auto pb-2">
                    {sections.slice(0, 8).map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${activeSection === section.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(section.icon, "w-4 h-4")}
                            {section.title}
                        </button>
                    ))}
                </div>

                {/* Main Content - Accordion Style (Mobile) / Sidebar (Desktop) */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Desktop Sidebar Navigation */}
                    <div className="hidden lg:block lg:w-1/4">
                        <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div className="p-4 bg-gray-50 dark:bg-gray-700/30 border-b border-gray-200 dark:border-gray-700">
                                <h3 className="font-semibold text-gray-900 dark:text-white">On this page</h3>
                            </div>
                            <nav className="p-2 max-h-[70vh] overflow-y-auto">
                                {filteredSections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => setActiveSection(section.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 ${activeSection === section.id
                                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                            }`}
                                    >
                                        {getIcon(section.icon, "w-4 h-4")}
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Desktop Content */}
                    <div className="hidden lg:block lg:w-3/4">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8">
                            {filteredSections.map((section) => (
                                <div
                                    key={section.id}
                                    className={`transition-all duration-300 ${activeSection === section.id ? 'block' : 'hidden'}`}
                                >
                                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            {getIcon(section.icon, "w-5 h-5 text-blue-600")}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                                    </div>
                                    <div className="prose prose-sm dark:prose-invert max-w-none">
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                            {section.content}
                                        </p>
                                        <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mt-4">
                                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Points:</p>
                                            <ul className="space-y-2">
                                                {section.keyPoints.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Accordion */}
                    <div className="lg:hidden w-full">
                        <div className="space-y-4">
                            {filteredSections.map((section) => (
                                <div
                                    key={section.id}
                                    className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleSection(section.id)}
                                        className="w-full p-5 flex items-center justify-between text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                {getIcon(section.icon, "w-4 h-4 text-blue-600")}
                                            </div>
                                            <span className="font-semibold text-gray-900 dark:text-white">{section.title}</span>
                                        </div>
                                        <HiOutlineChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSection === section.id ? 'rotate-180' : ''}`} />
                                    </button>
                                    {expandedSection === section.id && (
                                        <div className="px-5 pb-5">
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{section.content}</p>
                                            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4">
                                                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Points:</p>
                                                <ul className="space-y-2">
                                                    {section.keyPoints.map((point, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                            <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Download and Print Section */}
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <button className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                        <HiOutlineDownload className="w-4 h-4" />
                        Download PDF
                    </button>
                    <button className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                        <HiOutlinePrinter className="w-4 h-4" />
                        Print Version
                    </button>
                </div>

                {/* Terms Questions Form */}
                <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-8">
                        <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Questions About Our Terms?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Submit your questions and our legal team will respond within 5 business days.
                        </p>
                    </div>

                    {formSubmitted ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Question Submitted!</h3>
                            <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. Our legal team will respond within 5 business days.</p>
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
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Question *</label>
                                    <textarea name="question" value={formData.question} onChange={handleInputChange} rows="4" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.question ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} placeholder="Please describe your question about our terms of service..." />
                                    {errors.question && <p className="text-red-500 text-xs mt-1">{errors.question}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">I have read and understand the terms of service. *</span>
                                    </label>
                                    {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
                                </div>
                            </div>
                            <button type="submit" className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                Submit Question
                                <HiArrowRight className="inline ml-2 w-4 h-4" />
                            </button>
                        </form>
                    )}
                </div>

                {/* Contact Section */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Contact Our Legal Team</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">If you have questions about these Terms of Service or wish to discuss legal matters, contact our legal department.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="mailto:legal@supplychainpro.com" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                            <HiOutlineMail className="w-4 h-4" /> legal@supplychainpro.com
                        </a>
                        <a href="/legal-request" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                            <HiOutlineDocumentText className="w-4 h-4" /> Submit Legal Request
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
      `}</style>
        </section>
    );
};

export default TermsOfServiceSection2;