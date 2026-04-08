// page/frontend/Newsletter/EmailPreferencesSection/EmailPreferencesSection1.jsx

// React
import { useState } from 'react';

// Icons
import {
    HiOutlineMail,
    HiOutlineCheckCircle,
    HiOutlineArrowRight,
    HiOutlineUserGroup,
    HiOutlineHeart,
    HiOutlineStar,
    HiOutlineClock,
    HiOutlineEye,
    HiOutlineCog,
    HiOutlineShieldCheck,
    HiOutlineRefresh,
    HiOutlineTag,
    HiOutlineChartBar,
    HiOutlineX,
} from 'react-icons/hi';

const EmailPreferencesSection1 = ({ config }) => {
    const [preferencesSaved, setPreferencesSaved] = useState(false);
    const [frequency, setFrequency] = useState('weekly');
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

    // Stats
    const stats = config?.stats || [
        { value: "15,000+", label: "Active Subscribers", icon: "users" },
        { value: "94%", label: "Open Rate", icon: "eye" },
        { value: "45%", label: "CTR", icon: "chart" },
        { value: "4.9/5", label: "Satisfaction", icon: "star" }
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
        // Validate email if not already verified
        if (!email) {
            setErrors({ email: 'Email address is required' });
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors({ email: 'Please enter a valid email address' });
            return;
        }

        // Show verification modal
        setShowVerifyModal(true);
    };

    // Handle verify code
    const handleVerifyCode = () => {
        if (verificationCode === '123456') { // Mock verification
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

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Email Preferences Section"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineCog className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Email Preferences"}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Customize Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Email Experience"}</span> {config?.title?.suffix || ""}
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Choose what emails you'd like to receive and how often. Your preferences can be changed at any time."}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                {stat.icon === 'users' ? <HiOutlineUserGroup className="w-5 h-5 text-blue-600" /> :
                                    stat.icon === 'eye' ? <HiOutlineEye className="w-5 h-5 text-blue-600" /> :
                                        stat.icon === 'chart' ? <HiOutlineChartBar className="w-5 h-5 text-blue-600" /> :
                                            <HiOutlineStar className="w-5 h-5 text-blue-600" />}
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Preferences Form */}
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

                        {/* Frequency Section */}
                        <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <HiOutlineClock className="w-5 h-5 text-green-600" />
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
                                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                    <HiOutlineTag className="w-5 h-5 text-purple-600" />
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

export default EmailPreferencesSection1;