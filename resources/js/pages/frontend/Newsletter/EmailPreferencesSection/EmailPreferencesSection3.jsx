// page/frontend/Newsletter/EmailPreferencesSection/EmailPreferencesSection3.jsx

// React
import { useState, useEffect, useCallback, useRef } from 'react';

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
    HiOutlineBell,
    HiOutlineShieldCheck,
    HiOutlineRefresh,
    HiOutlineTag,
    HiOutlineChartBar,
    HiOutlineX,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlinePlay,
    HiOutlineChat,
} from 'react-icons/hi';

const EmailPreferencesSection3 = ({ config }) => {
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
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationError, setVerificationError] = useState('');
    const [errors, setErrors] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
    const videoRef = useRef(null);

    // Carousel navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.testimonials?.length || 1));
    }, [config?.testimonials?.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + (config?.testimonials?.length || 1)) % (config?.testimonials?.length || 1));
    }, [config?.testimonials?.length]);

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.testimonials?.length > 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.testimonials?.length, nextSlide]);

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

    // Testimonials
    const testimonials = config?.testimonials || [
        {
            name: "Sarah Johnson",
            role: "Supply Chain Director",
            quote: "The ability to customize my email preferences has been a game-changer. I get exactly the content I need, when I need it.",
            avatar: "/testimonials/sarah.jpg",
            videoUrl: "/videos/testimonial-sarah.mp4"
        },
        {
            name: "Michael Chen",
            role: "Operations Manager",
            quote: "I love that I can choose weekly digests instead of daily emails. It fits perfectly with my workflow.",
            avatar: "/testimonials/michael.jpg"
        },
        {
            name: "Emily Rodriguez",
            role: "Logistics Director",
            quote: "The category selection lets me focus on what matters most to my role. Highly recommend!",
            avatar: "/testimonials/emily.jpg"
        }
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
        { id: 'history', label: 'History', icon: 'clock' },
        { id: 'stories', label: 'Stories', icon: 'chat' }
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
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Email Preferences Hub"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-email" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-email)" />
                </svg>
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineCog className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Email Preferences"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Customize Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Email Experience"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Choose what emails you'd like to receive and how often. Your preferences can be changed at any time."}
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    {stat.icon === 'users' ? <HiOutlineUserGroup className="w-4 h-4 text-blue-600" /> :
                                        stat.icon === 'eye' ? <HiOutlineEye className="w-4 h-4 text-blue-600" /> :
                                            stat.icon === 'chart' ? <HiOutlineChartBar className="w-4 h-4 text-blue-600" /> :
                                                <HiOutlineStar className="w-4 h-4 text-blue-600" />}
                                </div>
                                <div className="text-left">
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                    {stat.trend && (
                                        <div className={`text-xs ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                                            {stat.trend}
                                        </div>
                                    )}
                                </div>
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
                                    <HiOutlineChat className="w-4 h-4" />}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Testimonials Carousel */}
                {activeTab === 'stories' && testimonials.length > 0 && (
                    <div className="relative mb-12">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {testimonials.map((testimonial, idx) => (
                                    <div key={idx} className="w-full shrink-0">
                                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                                            <div className="flex items-center gap-4 mb-6">
                                                {testimonial.avatar ? (
                                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                                                ) : (
                                                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                        <HiOutlineUserGroup className="w-8 h-8 text-blue-600" />
                                                    </div>
                                                )}
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="flex gap-1 text-yellow-500 mb-3">
                                                    {[...Array(5)].map((_, i) => (
                                                        <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                                                    ))}
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-400 italic text-lg">"{testimonial.quote}"</p>
                                            </div>
                                            {testimonial.videoUrl && (
                                                <button
                                                    onClick={() => { setCurrentVideo(testimonial.videoUrl); setShowVideoModal(true); }}
                                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                                                >
                                                    <HiOutlinePlay className="w-4 h-4" />
                                                    Watch Full Story
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {testimonials.length > 1 && (
                                <>
                                    <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                                        <HiOutlineChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                                        <HiOutlineChevronRight className="w-6 h-6" />
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {testimonials.map((_, idx) => (
                                            <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-blue-600' : 'bg-gray-400'}`} />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

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

                {/* Video Modal */}
                {showVideoModal && currentVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowVideoModal(false)}>
                        <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
                                <HiOutlineX className="w-6 h-6" />
                            </button>
                            <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

export default EmailPreferencesSection3;