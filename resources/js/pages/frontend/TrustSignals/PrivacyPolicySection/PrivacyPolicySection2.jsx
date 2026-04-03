// page/frontend/TrustSignals/PrivacyPolicySection/PrivacyPolicySection2.jsx

// React
import { useState, } from 'react';

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
    HiOutlineChevronRight
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const PrivacyPolicySection2 = ({ config }) => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [cookiePreferences, setCookiePreferences] = useState({
        necessary: true,
        functional: true,
        analytics: false,
        marketing: false
    });
    const [preferencesSaved, setPreferencesSaved] = useState(false);
    const [, setShowCookieModal] = useState(false);

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
            'chevron-right': <HiOutlineChevronRight className={className} />
        };
        return icons[iconName] || <HiOutlineShieldCheck className={className} />;
    };

    // Handle cookie preference change
    const handleCookieChange = (type) => {
        setCookiePreferences({
            ...cookiePreferences,
            [type]: !cookiePreferences[type]
        });
    };

    // Save cookie preferences
    const saveCookiePreferences = () => {
        localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
        setPreferencesSaved(true);
        setTimeout(() => setPreferencesSaved(false), 3000);
        setShowCookieModal(false);
    };

    // Filter sections based on search
    const filteredSections = config?.sections?.filter(section =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.content.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    // Toggle FAQ
    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    // Privacy policy sections
    const sections = config?.sections || [
        {
            id: 'introduction',
            title: 'Introduction',
            icon: 'document',
            summary: 'Overview of our privacy commitment and policy scope.',
            content: 'We at SupplyChainPro are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services. Please read this policy carefully to understand our views and practices regarding your personal data.',
            lastUpdated: 'March 15, 2024'
        },
        {
            id: 'information-collection',
            title: 'Information We Collect',
            icon: 'database',
            summary: 'Types of personal data we collect from users.',
            content: 'We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, phone number, company information, and payment details. We also automatically collect certain information about your device and usage of our services, including IP address, browser type, and pages visited.',
            dataTypes: ['Account Information', 'Usage Data', 'Device Information', 'Location Data']
        },
        {
            id: 'use-of-information',
            title: 'How We Use Your Information',
            icon: 'cog',
            summary: 'Purposes for processing your personal data.',
            content: 'We use the information we collect to provide, maintain, and improve our services; to process transactions; to communicate with you; to personalize your experience; and to comply with legal obligations.',
            purposes: ['Service Delivery', 'Analytics & Improvement', 'Customer Support', 'Legal Compliance']
        },
        {
            id: 'data-sharing',
            title: 'Data Sharing & Disclosure',
            icon: 'share',
            summary: 'When and why we share your information.',
            content: 'We do not sell your personal information. We may share your information with service providers who perform services on our behalf, with your consent, or as required by law.',
            thirdParties: ['Cloud Providers', 'Payment Processors', 'Analytics Services', 'Customer Support Tools']
        },
        {
            id: 'data-security',
            title: 'Data Security',
            icon: 'shield',
            summary: 'Measures we take to protect your data.',
            content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
            securityMeasures: ['AES-256 Encryption', 'TLS 1.3', 'Access Controls', 'Regular Audits']
        },
        {
            id: 'your-rights',
            title: 'Your Privacy Rights',
            icon: 'users',
            summary: 'Control you have over your personal data.',
            content: 'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data.',
            rights: ['Right to Access', 'Right to Rectification', 'Right to Erasure', 'Right to Portability']
        },
        {
            id: 'cookies',
            title: 'Cookies & Tracking',
            icon: 'tag',
            summary: 'How we use cookies and similar technologies.',
            content: 'We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools.',
            cookieTypes: ['Necessary', 'Functional', 'Analytics', 'Marketing']
        },
        {
            id: 'data-retention',
            title: 'Data Retention',
            icon: 'clock',
            summary: 'How long we keep your information.',
            content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.',
            retentionPeriods: ['Account Data: 7 years', 'Usage Data: 2 years', 'Log Data: 1 year']
        },
        {
            id: 'international-transfers',
            title: 'International Data Transfers',
            icon: 'globe',
            summary: 'How we handle cross-border data transfers.',
            content: 'Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.',
            transferMechanisms: ['Standard Contractual Clauses', 'Data Processing Agreements', 'Privacy Shield Framework']
        },
        {
            id: 'policy-updates',
            title: 'Updates to This Policy',
            icon: 'refresh',
            summary: 'How we notify you of changes.',
            content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.',
            notificationMethods: ['Email Notification', 'Website Notice', 'In-App Notification']
        },
        {
            id: 'contact-us',
            title: 'Contact Us',
            icon: 'mail',
            summary: 'How to reach our privacy team.',
            content: 'If you have questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@supplychainpro.com.',
            contactInfo: {
                email: 'privacy@supplychainpro.com',
                dpo: 'dpo@supplychainpro.com',
                address: '123 Supply Chain Way, San Francisco, CA 94105'
            }
        }
    ];

    // FAQ items
    const faqs = config?.faqs || [
        {
            question: "How do I request access to my personal data?",
            answer: "You can submit a data access request through our Privacy Request form or by emailing privacy@supplychainpro.com. We will respond within 30 days."
        },
        {
            question: "How long do you keep my data?",
            answer: "We retain data as long as necessary to provide our services and as required by law. Account data is kept for 7 years, usage data for 2 years, and log data for 1 year."
        },
        {
            question: "Do you sell my personal information?",
            answer: "No, we do not sell your personal information. We only share data with service providers who help us deliver our services, under strict confidentiality agreements."
        },
        {
            question: "How do I delete my account?",
            answer: "You can delete your account through your account settings or by contacting our support team. We will permanently delete your data within 30 days of request."
        },
        {
            question: "What security measures do you have in place?",
            answer: "We use industry-standard security measures including AES-256 encryption, TLS 1.3, multi-factor authentication, and regular security audits by third-party firms."
        },
        {
            question: "How do you handle data breaches?",
            answer: "We have an incident response plan that includes notification to affected users and regulatory authorities within 72 hours of detection, as required by GDPR and other regulations."
        }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "GDPR", label: "Compliant", icon: "globe", color: "from-blue-500 to-blue-600" },
        { value: "CCPA", label: "Ready", icon: "shield", color: "from-green-500 to-green-600" },
        { value: "ISO 27001", label: "Certified", icon: "certificate", color: "from-purple-500 to-purple-600" },
        { value: "ePrivacy", label: "Compliant", icon: "lock", color: "from-orange-500 to-orange-600" }
    ];

    const lastUpdated = config?.lastUpdated || "March 15, 2024";

    // Get section badge color
    const getSectionBadgeColor = (id) => {
        const colors = {
            'introduction': 'bg-blue-100 text-blue-700',
            'information-collection': 'bg-purple-100 text-purple-700',
            'use-of-information': 'bg-green-100 text-green-700',
            'data-sharing': 'bg-orange-100 text-orange-700',
            'data-security': 'bg-red-100 text-red-700',
            'your-rights': 'bg-indigo-100 text-indigo-700',
            'cookies': 'bg-yellow-100 text-yellow-700',
            'data-retention': 'bg-pink-100 text-pink-700',
            'international-transfers': 'bg-cyan-100 text-cyan-700',
            'policy-updates': 'bg-gray-100 text-gray-700',
            'contact-us': 'bg-emerald-100 text-emerald-700'
        };
        return colors[id] || 'bg-gray-100 text-gray-700';
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Privacy Policy Center"
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
                                {config?.badge || "Privacy Policy"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Privacy"}</span> {config?.title?.suffix || "Matters to Us"}
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "We are committed to transparency about how we collect, use, and protect your personal information. This policy explains our data practices."}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Last Updated: {lastUpdated}</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {stats.map((stat, idx) => (
                            <div key={idx} className={`bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24 bg-linear-to-br ${stat.color} text-white`}>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-xs opacity-90">{stat.label}</div>
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
                        placeholder="Search the privacy policy..."
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Quick Navigation */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {sections.slice(0, 8).map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeSection === section.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(section.icon, "w-4 h-4")}
                            {section.title}
                        </button>
                    ))}
                </div>

                {/* Main Content - Accordion Style */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-12">
                    {filteredSections.map((section) => (
                        <div
                            key={section.id}
                            className={`border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${activeSection === section.id ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''}`}
                        >
                            <button
                                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl ${getSectionBadgeColor(section.id)} flex items-center justify-center`}>
                                        {getIcon(section.icon, "w-5 h-5")}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                                        <p className="text-sm text-gray-500">{section.summary}</p>
                                    </div>
                                </div>
                                <HiOutlineChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeSection === section.id ? 'rotate-180' : ''}`} />
                            </button>
                            {activeSection === section.id && (
                                <div className="px-6 pb-6 pt-0">
                                    <div className="prose prose-sm dark:prose-invert max-w-none">
                                        <p className="text-gray-600 dark:text-gray-400">{section.content}</p>
                                        
                                        {section.dataTypes && (
                                            <div className="mt-4">
                                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Data Types:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {section.dataTypes.map((type, i) => (
                                                        <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{type}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        
                                        {section.purposes && (
                                            <div className="mt-4">
                                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Purposes:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {section.purposes.map((purpose, i) => (
                                                        <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{purpose}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        
                                        {section.thirdParties && (
                                            <div className="mt-4">
                                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Third Parties:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {section.thirdParties.map((party, i) => (
                                                        <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{party}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        
                                        {section.rights && (
                                            <div className="mt-4">
                                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Rights:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {section.rights.map((right, i) => (
                                                        <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{right}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Cookie Preferences Section */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <HiOutlineTag className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cookie Preferences</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Manage your cookie preferences. Essential cookies are always enabled as they are necessary for the website to function properly.</p>
                    
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Necessary Cookies</p>
                                <p className="text-sm text-gray-500">Required for basic site functionality</p>
                            </div>
                            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Always Active</div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Functional Cookies</p>
                                <p className="text-sm text-gray-500">Enable enhanced features and personalization</p>
                            </div>
                            <button
                                onClick={() => handleCookieChange('functional')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${cookiePreferences.functional ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${cookiePreferences.functional ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Analytics Cookies</p>
                                <p className="text-sm text-gray-500">Help us understand how visitors interact with our site</p>
                            </div>
                            <button
                                onClick={() => handleCookieChange('analytics')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${cookiePreferences.analytics ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${cookiePreferences.analytics ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Marketing Cookies</p>
                                <p className="text-sm text-gray-500">Used to deliver relevant advertisements</p>
                            </div>
                            <button
                                onClick={() => handleCookieChange('marketing')}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${cookiePreferences.marketing ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${cookiePreferences.marketing ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>
                    </div>
                    
                    {preferencesSaved && (
                        <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-700 dark:text-green-400 text-sm text-center">
                            Preferences saved successfully!
                        </div>
                    )}
                    
                    <button
                        onClick={saveCookiePreferences}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                        Save Cookie Preferences
                    </button>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md"
                            >
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full p-5 flex items-center justify-between text-left"
                                >
                                    <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                                    <HiOutlineChevronDown className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === idx && (
                                    <div className="px-5 pb-5">
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Download and Contact Section */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <a
                            href="/privacy-policy.pdf"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                            <HiOutlineDownload className="w-4 h-4" />
                            Download Privacy Policy (PDF)
                        </a>
                        <a
                            href="mailto:privacy@supplychainpro.com"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            <HiOutlineMail className="w-4 h-4" />
                            Contact Privacy Team
                        </a>
                    </div>
                    <p className="text-blue-100 text-sm">For privacy-related inquiries, please contact our Data Protection Officer at <a href="mailto:dpo@supplychainpro.com" className="underline hover:text-white">dpo@supplychainpro.com</a></p>
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

export default PrivacyPolicySection2;