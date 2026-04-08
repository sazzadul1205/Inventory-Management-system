// page/frontend/Newsletter/EmailPreferencesSection/EmailPreferencesSection2.jsx

// React
import { useState } from 'react';

// Icons
import {
    HiOutlineMail,
    HiOutlineCheckCircle,
    HiOutlineArrowRight,
    HiOutlineHeart,
    HiOutlineClock,
    HiOutlineEye,
    HiOutlineCog,
    HiOutlineBell,
    HiOutlineShieldCheck,
    HiOutlineRefresh,
    HiOutlineTag,
    HiOutlineX,
} from 'react-icons/hi';

const EmailPreferencesSection2 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('preferences');
    const [preferencesSaved, setPreferencesSaved] = useState(false);
    const [frequency, setFrequency] = useState('weekly');
    const [emailDigest, setEmailDigest] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([
        'trends',
        'technology',
        'product'
    ]);
    const [email, setEmail] = useState('');
    const [showVerifyModal, setShowVerifyModal] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationError, setVerificationError] = useState('');
    const [errors, setErrors] = useState({});

    // Frequency options
    const frequencyOptions = config?.frequencyOptions || [
        { value: 'daily', label: 'Daily', description: 'Get updates every day', icon: 'calendar' },
        { value: 'weekly', label: 'Weekly', description: 'Get updates once a week (recommended)', icon: 'clock', recommended: true },
        { value: 'biweekly', label: 'Bi-weekly', description: 'Get updates every two weeks', icon: 'refresh' },
        { value: 'monthly', label: 'Monthly', description: 'Get updates once a month', icon: 'calendar' }
    ];

    // Category options
    const categoryOptions = config?.categoryOptions || [
        { id: 'trends', label: 'Supply Chain Trends', description: 'Latest industry trends and forecasts', icon: 'chart', color: 'from-blue-500 to-blue-600' },
        { id: 'technology', label: 'Technology & AI', description: 'AI, automation, and digital transformation', icon: 'chip', color: 'from-purple-500 to-purple-600' },
        { id: 'product', label: 'Product Updates', description: 'New features and improvements', icon: 'star', color: 'from-green-500 to-green-600' },
        { id: 'events', label: 'Events & Webinars', description: 'Upcoming conferences and online events', icon: 'calendar', color: 'from-orange-500 to-orange-600' },
        { id: 'case-studies', label: 'Case Studies', description: 'Real-world success stories', icon: 'document', color: 'from-red-500 to-red-600' },
        { id: 'best-practices', label: 'Best Practices', description: 'Actionable tips and strategies', icon: 'academic', color: 'from-indigo-500 to-indigo-600' }
    ];

    // Email history
    const emailHistory = config?.emailHistory || [
        { id: 1, subject: "Supply Chain Trends 2024", date: "March 15, 2024", status: "delivered", category: "trends" },
        { id: 2, subject: "AI in Supply Chain", date: "March 8, 2024", status: "opened", category: "technology" },
        { id: 3, subject: "Sustainability Strategies", date: "March 1, 2024", status: "clicked", category: "trends" },
        { id: 4, subject: "Digital Transformation", date: "February 16, 2024", status: "delivered", category: "technology" }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "15,000+", label: "Active Subscribers", icon: "users", trend: "+22%", trendUp: true },
        { value: "94%", label: "Open Rate", icon: "eye", trend: "+5%", trendUp: true },
        { value: "45%", label: "Click-through Rate", icon: "chart", trend: "+8%", trendUp: true },
        { value: "4.9/5", label: "Reader Satisfaction", icon: "star", trend: "4.9", trendUp: true }
    ];

    const tabs = [
        { id: 'preferences', label: 'Preferences', icon: 'cog' },
        { id: 'history', label: 'Email History', icon: 'clock' },
        { id: 'security', label: 'Security', icon: 'shield' }
    ];

    // Handle category toggle
    const toggleCategory = (categoryId) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    };

    // Handle save preferences
    const handleSavePreferences = () => {
        if (!email) {
            setErrors({ email: 'Email address is required' });
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors({ email: 'Please enter a valid email address' });
            return;
        }
        setShowVerifyModal(true);
    };

    // Handle verify code
    const handleVerifyCode = () => {
        if (verificationCode === '123456') {
            setPreferencesSaved(true);
            setShowVerifyModal(false);
            setVerificationCode('');
            setVerificationError('');
            setTimeout(() => {
                setPreferencesSaved(false);
            }, 3000);
        } else {
            setVerificationError('Invalid verification code. Please try again.');
        }
    };

    // Handle resend code
    const handleResendCode = () => {
        alert('Verification code resent to your email.');
    };

    // Get status badge color
    const getStatusBadgeColor = (status) => {
        const colors = {
            'delivered': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
            'opened': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            'clicked': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
        };
        return colors[status] || colors.delivered;
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Email Preferences Center"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Stats */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
                            <HiOutlineCog className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Email Preferences"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Customize Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Email Experience"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Choose what emails you'd like to receive and how often. Your preferences can be changed at any time."}
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
                            {tab.icon === 'cog' ? <HiOutlineCog className="w-4 h-4" /> :
                                tab.icon === 'clock' ? <HiOutlineClock className="w-4 h-4" /> :
                                    <HiOutlineShieldCheck className="w-4 h-4" />}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Preferences Tab */}
                {activeTab === 'preferences' && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-8 md:p-10">
                            {/* Email Address Section */}
                            <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                        <HiOutlineMail className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Address</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    We'll send your newsletter to this email address.
                                </p>
                                <div className="max-w-md">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            {/* Digest Option */}
                            <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                                <HiOutlineBell className="w-5 h-5 text-green-600" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Digest</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Receive a weekly digest of all our content instead of individual emails.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setEmailDigest(!emailDigest)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${emailDigest ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                                    >
                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailDigest ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </button>
                                </div>
                            </div>

                            {/* Frequency Section */}
                            <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                        <HiOutlineClock className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Frequency</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    How often would you like to receive emails?
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {frequencyOptions.map((option) => (
                                        <label
                                            key={option.value}
                                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${frequency === option.value
                                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="frequency"
                                                value={option.value}
                                                checked={frequency === option.value}
                                                onChange={(e) => setFrequency(e.target.value)}
                                                className="w-4 h-4 text-blue-600 mt-1"
                                            />
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                                    {option.label}
                                                    {option.recommended && (
                                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Recommended</span>
                                                    )}
                                                </div>
                                                <div className="text-sm text-gray-500">{option.description}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Content Categories Section */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                        <HiOutlineTag className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Content Interests</h3>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    Select the topics you're interested in (select all that apply).
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {categoryOptions.map((category) => (
                                        <label
                                            key={category.id}
                                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${selectedCategories.includes(category.id)
                                                    ? `border-${category.color.split('-')[1]}-500 bg-${category.color.split('-')[1]}-50 dark:bg-${category.color.split('-')[1]}-900/20`
                                                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category.id)}
                                                onChange={() => toggleCategory(category.id)}
                                                className="w-4 h-4 text-blue-600 rounded mt-1"
                                            />
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">{category.label}</div>
                                                <div className="text-sm text-gray-500">{category.description}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Save Button */}
                            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                <button
                                    onClick={handleSavePreferences}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Save Preferences
                                    <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    You can change these preferences at any time. We respect your privacy.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Email History Tab */}
                {activeTab === 'history' && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    <HiOutlineClock className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Email History</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                        <tr>
                                            <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</th>
                                            <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Date</th>
                                            <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
                                            <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Category</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                        {emailHistory.map((email) => (
                                            <tr key={email.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">
                                                <td className="p-4 text-sm text-gray-900 dark:text-white">{email.subject}</td>
                                                <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{email.date}</td>
                                                <td className="p-4">
                                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(email.status)}`}>
                                                        {email.status === 'delivered' && <HiOutlineMail className="w-3 h-3" />}
                                                        {email.status === 'opened' && <HiOutlineEye className="w-3 h-3" />}
                                                        {email.status === 'clicked' && <HiOutlineArrowRight className="w-3 h-3" />}
                                                        {email.status}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-sm text-gray-600 dark:text-gray-400">
                                                    {categoryOptions.find(c => c.id === email.category)?.label || email.category}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                    <HiOutlineShieldCheck className="w-5 h-5 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Security Settings</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h4>
                                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                                    </div>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                                        Enable
                                    </button>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">Login Alerts</h4>
                                        <p className="text-sm text-gray-500">Get notified when someone logs into your account</p>
                                    </div>
                                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                                        <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white" />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">Active Sessions</h4>
                                        <p className="text-sm text-gray-500">Manage devices where you're logged in</p>
                                    </div>
                                    <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">
                                        Manage
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <HiOutlineShieldCheck className="w-4 h-4 text-green-500" />
                        <span>Your privacy is protected</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <HiOutlineRefresh className="w-4 h-4 text-blue-500" />
                        <span>Update preferences anytime</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <HiOutlineHeart className="w-4 h-4 text-red-500" />
                        <span>We value your inbox</span>
                    </div>
                </div>

                {/* Success Toast */}
                {preferencesSaved && (
                    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
                        <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl p-4 shadow-lg">
                            <div className="flex items-center gap-3">
                                <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />
                                <p className="text-sm text-green-700 dark:text-green-300">Preferences saved successfully!</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Verification Modal */}
                {showVerifyModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowVerifyModal(false)}>
                        <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className="bg-blue-600 p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-bold text-lg">Verify Your Email</h3>
                                    <button onClick={() => setShowVerifyModal(false)} className="text-white hover:text-gray-200">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    We've sent a verification code to <span className="font-semibold">{email}</span>.
                                </p>
                                <input
                                    type="text"
                                    value={verificationCode}
                                    onChange={(e) => setVerificationCode(e.target.value)}
                                    placeholder="Enter 6-digit code"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {verificationError && <p className="text-red-500 text-sm mb-4">{verificationError}</p>}
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleResendCode}
                                        className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                                    >
                                        Resend Code
                                    </button>
                                    <button
                                        onClick={handleVerifyCode}
                                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        Verify
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
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
        </section>
    );
};

export default EmailPreferencesSection2;