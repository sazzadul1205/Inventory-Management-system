// page/frontend/MobileApp/IOSAppSection/IOSAppSection2.jsx

// React
import { useState } from 'react';

// Icons
import {
    HiOutlineDownload,
    HiOutlineCheckCircle,
    HiOutlineArrowRight,
    HiOutlineStar,
    HiOutlineShieldCheck,
    HiOutlineDeviceMobile,
    HiOutlineQrcode,
    HiOutlineMail,
    HiOutlineUserGroup,
    HiOutlineGlobe,
    HiOutlineChartBar,
    HiOutlineWifi,
    HiOutlineX,
    HiOutlineViewGrid,
    HiOutlineSparkles,
    HiOutlineDeviceTablet,
    HiOutlineDesktopComputer,
    HiOutlineRefresh,
} from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi2';

const IOSAppSection2 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [showQrModal, setShowQrModal] = useState(false);
    const [expandedFeature, setExpandedFeature] = useState(null);

    // Handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (errors.email) {
            setErrors({});
        }
    };

    // Handle download link request
    const handleRequestLink = (e) => {
        e.preventDefault();
        if (!email) {
            setErrors({ email: 'Email address is required' });
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors({ email: 'Please enter a valid email address' });
            return;
        }
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setEmail('');
        }, 3000);
    };

    // Features data
    const features = config?.features || [
        {
            title: "Real-time Tracking",
            description: "Track shipments and inventory in real-time with live updates and push notifications.",
            icon: "globe",
            color: "from-blue-500 to-blue-600",
            details: [
                "Live GPS tracking of shipments",
                "Real-time inventory levels",
                "Push notifications for status changes",
                "ETA predictions and alerts"
            ],
            image: "/ios-features/tracking.jpg"
        },
        {
            title: "Offline Mode",
            description: "Access critical data and continue working even without an internet connection.",
            icon: "wifi",
            color: "from-green-500 to-green-600",
            details: [
                "Offline data synchronization",
                "Cached inventory information",
                "Scan barcodes offline",
                "Auto-sync when connection restored"
            ],
            image: "/ios-features/offline.jpg"
        },
        {
            title: "Barcode Scanning",
            description: "Quickly scan product barcodes using your device's camera for instant information.",
            icon: "qrcode",
            color: "from-purple-500 to-purple-600",
            details: [
                "Support for all major barcode types",
                "Batch scanning capability",
                "Real-time product lookup",
                "Inventory count automation"
            ],
            image: "/ios-features/scanning.jpg"
        },
        {
            title: "Analytics Dashboard",
            description: "View key metrics and performance indicators in a mobile-optimized dashboard.",
            icon: "chart",
            color: "from-orange-500 to-orange-600",
            details: [
                "Customizable KPIs",
                "Interactive charts",
                "Export reports",
                "Trend analysis"
            ],
            image: "/ios-features/analytics.jpg"
        },
        {
            title: "Team Collaboration",
            description: "Communicate and collaborate with team members directly within the app.",
            icon: "users",
            color: "from-red-500 to-red-600",
            details: [
                "Team messaging",
                "Task assignment",
                "File sharing",
                "Activity feed"
            ],
            image: "/ios-features/collaboration.jpg"
        },
        {
            title: "Secure Access",
            description: "Enterprise-grade security with biometric authentication and data encryption.",
            icon: "shield",
            color: "from-indigo-500 to-indigo-600",
            details: [
                "Face ID / Touch ID login",
                "End-to-end encryption",
                "Role-based access control",
                "Session management"
            ],
            image: "/ios-features/security.jpg"
        }
    ];

    // What's new in latest version
    const whatsNew = config?.whatsNew || [
        { version: "3.0.0", date: "March 15, 2024", features: ["Dark mode support", "Widgets for home screen", "Siri shortcuts integration", "Performance improvements"] },
        { version: "2.5.0", date: "February 1, 2024", features: ["Offline mode enhanced", "Batch scanning added", "Push notifications upgrade"] },
        { version: "2.0.0", date: "December 10, 2023", features: ["Analytics dashboard", "Team collaboration tools", "Biometric authentication"] }
    ];

    // Reviews
    const reviews = config?.reviews || [
        { name: "Sarah Johnson", rating: 5, title: "Game changer for our supply chain", comment: "This app has completely transformed how we manage our inventory. The offline mode is a lifesaver when I'm in the warehouse.", date: "March 15, 2024" },
        { name: "Michael Chen", rating: 5, title: "Best supply chain app on the App Store", comment: "The barcode scanning feature alone is worth the download. So fast and accurate!", date: "March 10, 2024" },
        { name: "Emily Rodriguez", rating: 4, title: "Great app, keeps getting better", comment: "Love the new dark mode and widgets. The team is constantly improving the app.", date: "March 5, 2024" }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "4.9", label: "App Store Rating", icon: "star", trend: "5,000+ reviews", trendUp: true },
        { value: "100K+", label: "Downloads", icon: "download", trend: "+25% this month", trendUp: true },
        { value: "99.9%", label: "Uptime", icon: "clock", trend: "Monthly average", trendUp: true },
        { value: "24/7", label: "Support", icon: "chat", trend: "Average 2-min response", trendUp: true }
    ];

    // Compatibility
    const compatibility = config?.compatibility || [
        { version: "iOS 15.0 or later", device: "iPhone, iPod touch", icon: "mobile" },
        { version: "iPadOS 15.0 or later", device: "iPad", icon: "tablet" },
        { version: "macOS 12.0 or later", device: "Mac with Apple M1 chip or later", icon: "desktop" }
    ];

    const tabs = [
        { id: 'overview', label: 'Overview', icon: 'sparkles' },
        { id: 'features', label: 'Features', icon: 'grid' },
        { id: 'reviews', label: 'Reviews', icon: 'star' },
        { id: 'whatsnew', label: 'What\'s New', icon: 'refresh' }
    ];

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="iOS App Center"
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
                            <HiOutlineDeviceMobile className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "iOS App"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "SupplyChainPro for"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "iOS"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Manage your supply chain on the go with our native iOS app. Available for iPhone, iPad, and Mac. Download now and take control of your operations anywhere."}
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
                            {tab.icon === 'sparkles' ? <HiOutlineSparkles className="w-4 h-4" /> :
                             tab.icon === 'grid' ? <HiOutlineViewGrid className="w-4 h-4" /> :
                             tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                             <HiOutlineRefresh className="w-4 h-4" />}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <>
                        {/* Hero Section with Phone Mockup */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
                            <div className="grid lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 py-1 mb-4">
                                        <HiOutlineSparkles className="w-4 h-4 text-blue-600" />
                                        <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Available on App Store</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                        Native iOS Experience
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        Built with Swift and optimized for all Apple devices. Enjoy seamless integration with iOS features like Face ID, Widgets, and Siri Shortcuts.
                                    </p>
                                    <div className="space-y-3 mb-8">
                                        {features.slice(0, 4).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                                    <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                                                </div>
                                                <span className="text-sm text-gray-700 dark:text-gray-300">{feature.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                            <HiOutlineDownload className="w-5 h-5" />
                                            Download on the App Store
                                            <HiOutlineArrowRight className="w-4 h-4" />
                                        </button>
                                        <button 
                                            onClick={() => setShowQrModal(true)}
                                            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                                        >
                                            <HiOutlineQrcode className="w-5 h-5" />
                                            Scan QR Code
                                        </button>
                                    </div>
                                </div>
                                <div className="relative flex justify-center">
                                    <div className="relative w-72 h-auto">
                                        <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl" />
                                        <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                                            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                                                <div className="bg-blue-600 p-3 flex items-center justify-between">
                                                    <div className="flex gap-1">
                                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                                    </div>
                                                    <span className="text-white text-xs font-medium">SupplyChainPro</span>
                                                    <div className="w-12" />
                                                </div>
                                                <div className="p-4 space-y-3">
                                                    <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                                        <HiOutlineChartBar className="w-8 h-8 text-gray-400" />
                                                    </div>
                                                    <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-lg w-3/4" />
                                                    <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-lg w-1/2" />
                                                    <div className="flex gap-2">
                                                        <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex-1" />
                                                        <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Compatibility Section */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
                            <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Compatibility</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {compatibility.map((item, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                                            {item.icon === 'mobile' ? <HiOutlineDeviceMobile className="w-6 h-6 text-blue-600" /> :
                                             item.icon === 'tablet' ? <HiOutlineDeviceTablet className="w-6 h-6 text-blue-600" /> :
                                             <HiOutlineDesktopComputer className="w-6 h-6 text-blue-600" />}
                                        </div>
                                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.version}</p>
                                        <p className="text-xs text-gray-500">{item.device}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Get App by Email Form */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="text-center mb-8">
                                <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Get App Download Link</h3>
                                <p className="text-gray-600 dark:text-gray-400">Enter your email address and we'll send you a direct download link for the App Store.</p>
                            </div>

                            {formSubmitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Link Sent!</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Check your inbox for the App Store download link.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleRequestLink} className="max-w-md mx-auto">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex-1">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={handleEmailChange}
                                                placeholder="Enter your email address"
                                                className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                        >
                                            Send Link
                                            <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-center text-xs text-gray-500 mt-4">By providing your email, you agree to receive a one-time download link.</p>
                                </form>
                            )}
                        </div>
                    </>
                )}

                {/* Features Tab */}
                {activeTab === 'features' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                onClick={() => setExpandedFeature(expandedFeature === idx ? null : idx)}
                            >
                                <div className={`h-1.5 bg-linear-to-r ${feature.color}`} />
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${feature.color} flex items-center justify-center`}>
                                            {feature.icon === 'globe' ? <HiOutlineGlobe className="w-6 h-6 text-white" /> :
                                             feature.icon === 'wifi' ? <HiOutlineWifi className="w-6 h-6 text-white" /> :
                                             feature.icon === 'qrcode' ? <HiOutlineQrcode className="w-6 h-6 text-white" /> :
                                             feature.icon === 'chart' ? <HiOutlineChartBar className="w-6 h-6 text-white" /> :
                                             feature.icon === 'users' ? <HiOutlineUserGroup className="w-6 h-6 text-white" /> :
                                             <HiOutlineShieldCheck className="w-6 h-6 text-white" />}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{feature.description}</p>
                                    {expandedFeature === idx && (
                                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</p>
                                            <ul className="space-y-2">
                                                {feature.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                        <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-xs text-gray-500">iOS native feature</span>
                                        <span className="text-blue-600 text-sm font-semibold">{expandedFeature === idx ? 'Show less' : 'Learn more'}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div className="space-y-6 mb-12">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                        <HiOutlineUser className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                                            <h4 className="font-semibold text-gray-900 dark:text-white">{review.name}</h4>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <HiOutlineStar key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">{review.title}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{review.comment}</p>
                                        <p className="text-xs text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="text-center">
                            <button className="text-blue-600 font-semibold hover:underline">Read all 5,000+ reviews on the App Store →</button>
                        </div>
                    </div>
                )}

                {/* What's New Tab */}
                {activeTab === 'whatsnew' && (
                    <div className="space-y-6 mb-12">
                        {whatsNew.map((update, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                                    <div className="flex items-center gap-2">
                                        <HiOutlineSparkles className="w-5 h-5 text-blue-600" />
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Version {update.version}</h3>
                                    </div>
                                    <span className="text-sm text-gray-500">{update.date}</span>
                                </div>
                                <ul className="space-y-2">
                                    {update.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {/* QR Code Modal */}
                {showQrModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowQrModal(false)}>
                        <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className="bg-blue-600 p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-bold text-lg">Scan QR Code</h3>
                                    <button onClick={() => setShowQrModal(false)} className="text-white hover:text-gray-200">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <div className="w-48 h-48 bg-gray-100 dark:bg-gray-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                    <HiOutlineQrcode className="w-32 h-32 text-gray-400" />
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Scan this QR code with your iPhone camera to download the app from the App Store.
                                </p>
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

export default IOSAppSection2;