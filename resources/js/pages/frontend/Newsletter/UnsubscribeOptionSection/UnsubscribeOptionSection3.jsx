// page/frontend/Newsletter/UnsubscribeOptionSection/UnsubscribeOptionSection3.jsx

// React
import { useState, useEffect, useCallback, useRef } from 'react';

// Icons
import {
    HiOutlineMail,
    HiOutlineCheckCircle,
    HiOutlineArrowRight,
    HiOutlineX,
    HiOutlineUserGroup,
    HiOutlineHeart,
    HiOutlineStar,
    HiOutlineClock,
    HiOutlineRefresh,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog,
    HiOutlineExternalLink,
    HiOutlineShieldCheck,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlinePlay,
} from 'react-icons/hi';

const UnsubscribeOptionSection3 = ({ config }) => {
    const [step, setStep] = useState('form'); // form, confirm, preferences, success
    const [reason, setReason] = useState('');
    const [feedback, setFeedback] = useState('');
    const [email, setEmail] = useState('');
    const [selectedPreferences, setSelectedPreferences] = useState({
        weeklyNewsletter: true,
        productUpdates: true,
        eventInvites: true,
        marketingEmails: true
    });
    const [frequency, setFrequency] = useState('weekly');
    const [errors, setErrors] = useState({});
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
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

    // Unsubscribe reasons
    const reasons = config?.reasons || [
        { id: 'too-many-emails', label: 'Too many emails', icon: 'mail', description: 'You receive more emails than you\'d like' },
        { id: 'not-relevant', label: 'Content not relevant', icon: 'eye', description: 'The content doesn\'t match your interests' },
        { id: 'never-subscribed', label: 'Never subscribed', icon: 'x', description: 'You don\'t remember signing up' },
        { id: 'spam', label: 'Mark as spam', icon: 'flag', description: 'You consider these emails as spam' },
        { id: 'change-interests', label: 'Change interests', icon: 'refresh', description: 'Your interests have changed' },
        { id: 'other', label: 'Other reason', icon: 'question', description: 'Another reason not listed' }
    ];

    // Frequency options
    const frequencyOptions = [
        { value: 'daily', label: 'Daily', description: 'Get updates every day' },
        { value: 'weekly', label: 'Weekly', description: 'Get updates once a week (recommended)' },
        { value: 'biweekly', label: 'Bi-weekly', description: 'Get updates every two weeks' },
        { value: 'monthly', label: 'Monthly', description: 'Get updates once a month' }
    ];

    // Testimonials
    const testimonials = config?.testimonials || [
        {
            name: "Sarah Johnson",
            role: "Supply Chain Director",
            quote: "I almost unsubscribed, but after adjusting my preferences, I'm getting exactly the content I need. So glad I stayed!",
            avatar: "/testimonials/sarah.jpg",
            videoUrl: "/videos/testimonial-sarah.mp4"
        },
        {
            name: "Michael Chen",
            role: "Operations Manager",
            quote: "The ability to customize email frequency was a game-changer. Weekly digest is perfect for my schedule.",
            avatar: "/testimonials/michael.jpg"
        },
        {
            name: "Emily Rodriguez",
            role: "Logistics Director",
            quote: "I switched to product updates only and now I never miss important announcements. Great flexibility!",
            avatar: "/testimonials/emily.jpg"
        }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "94%", label: "Retention Rate", icon: "heart", trend: "+5% after preferences", trendUp: true },
        { value: "50K+", label: "Preferences Updated", icon: "cog", trend: "Monthly active", trendUp: true },
        { value: "4.9/5", label: "User Satisfaction", icon: "star", trend: "Post-preference update", trendUp: true },
        { value: "Instant", label: "Update Time", icon: "clock", trend: "Real-time sync", trendUp: true }
    ];

    // Validate email
    const validateEmail = () => {
        const newErrors = {};
        if (!email) newErrors.email = 'Email address is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email address';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle unsubscribe request
    const handleUnsubscribeRequest = () => {
        if (!validateEmail()) return;
        setShowConfirmModal(true);
    };

    // Handle confirm unsubscribe
    const handleConfirmUnsubscribe = () => {
        setShowConfirmModal(false);
        if (reason === 'change-interests') {
            setStep('preferences');
        } else {
            setStep('confirm');
        }
    };

    // Handle submit feedback
    const handleSubmitFeedback = () => {
        setStep('success');
        setShowSuccessToast(true);
        setTimeout(() => {
            setShowSuccessToast(false);
        }, 5000);
    };

    // Handle save preferences
    const handleSavePreferences = () => {
        setStep('success');
        setShowSuccessToast(true);
        setTimeout(() => {
            setShowSuccessToast(false);
        }, 5000);
    };

    // Handle manage all subscriptions
    const handleManageAllSubscriptions = () => {
        alert('This would redirect to the full subscription management center.');
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Unsubscribe Options Hub"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-unsubscribe" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-unsubscribe)" />
                </svg>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineCog className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Manage Subscription"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {step === 'success' ? "Preferences Updated!" :
                            step === 'confirm' ? "Help Us Improve" :
                                step === 'preferences' ? "Customize Your Experience" :
                                    "Manage Your Email Preferences"}
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {step === 'success' ? "Your email preferences have been updated successfully." :
                            step === 'confirm' ? "Please tell us why you're leaving to help us improve." :
                                step === 'preferences' ? "Choose what emails you'd like to receive and how often." :
                                    "Enter your email address to manage your subscription preferences."}
                    </p>

                    {/* Stats Row */}
                    {step === 'form' && (
                        <div className="flex flex-wrap justify-center gap-6 mt-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                        {stat.icon === 'heart' ? <HiOutlineHeart className="w-4 h-4 text-blue-600" /> :
                                            stat.icon === 'cog' ? <HiOutlineCog className="w-4 h-4 text-blue-600" /> :
                                                stat.icon === 'star' ? <HiOutlineStar className="w-4 h-4 text-blue-600" /> :
                                                    <HiOutlineClock className="w-4 h-4 text-blue-600" />}
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
                    )}
                </div>

                {/* Testimonials Carousel */}
                {step === 'form' && testimonials.length > 0 && (
                    <div className="relative mb-12">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {testimonials.map((testimonial, idx) => (
                                    <div key={idx} className="w-full shrink-0">
                                        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
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

                {/* Main Card */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">

                    {/* Step 1: Email Entry Form */}
                    {step === 'form' && (
                        <div className="p-8 md:p-10">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                                    <HiOutlineMail className="w-8 h-8 text-blue-600" />
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Enter your email address to manage your subscription preferences.
                                </p>
                            </div>

                            <form onSubmit={(e) => { e.preventDefault(); handleUnsubscribeRequest(); }} className="max-w-md mx-auto">
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Continue
                                    <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                                </button>

                                <div className="mt-6 text-center">
                                    <button
                                        type="button"
                                        onClick={handleManageAllSubscriptions}
                                        className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline flex items-center justify-center gap-1"
                                    >
                                        Manage all subscriptions
                                        <HiOutlineExternalLink className="w-3 h-3" />
                                    </button>
                                </div>
                            </form>

                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                                <div className="flex justify-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <HiOutlineShieldCheck className="w-4 h-4 text-green-500" />
                                        <span>Privacy protected</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <HiOutlineClock className="w-4 h-4 text-blue-500" />
                                        <span>Instant updates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Reason Selection */}
                    {step === 'confirm' && (
                        <div className="p-8 md:p-10">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mx-auto mb-4">
                                    <HiOutlineQuestionMarkCircle className="w-8 h-8 text-yellow-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    Help Us Improve
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Please tell us why you're unsubscribing (optional).
                                </p>
                            </div>

                            <div className="max-w-md mx-auto">
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                        Reason for leaving:
                                    </label>
                                    <div className="space-y-3">
                                        {reasons.map((r) => (
                                            <label key={r.id} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                                <input
                                                    type="radio"
                                                    name="reason"
                                                    value={r.id}
                                                    checked={reason === r.id}
                                                    onChange={(e) => setReason(e.target.value)}
                                                    className="w-4 h-4 text-blue-600 mt-1"
                                                />
                                                <div>
                                                    <div className="font-medium text-gray-900 dark:text-white text-sm">{r.label}</div>
                                                    <div className="text-xs text-gray-500">{r.description}</div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Additional feedback (optional):
                                    </label>
                                    <textarea
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        rows="4"
                                        placeholder="We'd love to hear how we can improve..."
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setStep('form')}
                                        className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                                    >
                                        Go Back
                                    </button>
                                    <button
                                        onClick={handleSubmitFeedback}
                                        className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                    >
                                        Unsubscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Preferences Management */}
                    {step === 'preferences' && (
                        <div className="p-8 md:p-10">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                                    <HiOutlineCog className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    Customize Your Email Preferences
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Choose what emails you'd like to receive.
                                </p>
                            </div>

                            <div className="max-w-md mx-auto">
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                        Email Frequency:
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {frequencyOptions.map((opt) => (
                                            <label key={opt.value} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                                <input
                                                    type="radio"
                                                    name="frequency"
                                                    value={opt.value}
                                                    checked={frequency === opt.value}
                                                    onChange={(e) => setFrequency(e.target.value)}
                                                    className="w-4 h-4 text-blue-600"
                                                />
                                                <div>
                                                    <div className="font-medium text-gray-900 dark:text-white text-sm">{opt.label}</div>
                                                    <div className="text-xs text-gray-500">{opt.description}</div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                        Email Types:
                                    </label>
                                    <div className="space-y-3">
                                        <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">Weekly Newsletter</div>
                                                <div className="text-xs text-gray-500">Industry insights and trends</div>
                                            </div>
                                            <input
                                                type="checkbox"
                                                checked={selectedPreferences.weeklyNewsletter}
                                                onChange={(e) => setSelectedPreferences({ ...selectedPreferences, weeklyNewsletter: e.target.checked })}
                                                className="w-5 h-5 text-blue-600 rounded"
                                            />
                                        </label>
                                        <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">Product Updates</div>
                                                <div className="text-xs text-gray-500">New features and improvements</div>
                                            </div>
                                            <input
                                                type="checkbox"
                                                checked={selectedPreferences.productUpdates}
                                                onChange={(e) => setSelectedPreferences({ ...selectedPreferences, productUpdates: e.target.checked })}
                                                className="w-5 h-5 text-blue-600 rounded"
                                            />
                                        </label>
                                        <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">Event Invites</div>
                                                <div className="text-xs text-gray-500">Webinars and conferences</div>
                                            </div>
                                            <input
                                                type="checkbox"
                                                checked={selectedPreferences.eventInvites}
                                                onChange={(e) => setSelectedPreferences({ ...selectedPreferences, eventInvites: e.target.checked })}
                                                className="w-5 h-5 text-blue-600 rounded"
                                            />
                                        </label>
                                        <label className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">Marketing Emails</div>
                                                <div className="text-xs text-gray-500">Special offers and promotions</div>
                                            </div>
                                            <input
                                                type="checkbox"
                                                checked={selectedPreferences.marketingEmails}
                                                onChange={(e) => setSelectedPreferences({ ...selectedPreferences, marketingEmails: e.target.checked })}
                                                className="w-5 h-5 text-blue-600 rounded"
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setStep('form')}
                                        className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSavePreferences}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                    >
                                        Save Preferences
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Success Message */}
                    {step === 'success' && (
                        <div className="p-8 md:p-10 text-center">
                            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                                <HiOutlineCheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Preferences Updated!
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Your email preferences have been updated successfully. You'll now receive emails based on your new settings.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <button
                                    onClick={() => window.location.href = '/'}
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                                >
                                    Return to Homepage
                                    <HiOutlineArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setStep('form')}
                                    className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                                >
                                    Manage Another Email
                                    <HiOutlineRefresh className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Help Section */}
                {step === 'form' && (
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">
                            Having trouble? <a href="/contact" className="text-blue-600 hover:underline">Contact our support team</a>
                        </p>
                    </div>
                )}

                {/* Success Toast */}
                {showSuccessToast && (
                    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
                        <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl p-4 shadow-lg">
                            <div className="flex items-center gap-3">
                                <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />
                                <p className="text-sm text-green-700 dark:text-green-300">Preferences saved successfully!</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Confirmation Modal */}
                {showConfirmModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowConfirmModal(false)}>
                        <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className="bg-red-600 p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-bold text-lg">Confirm Unsubscription</h3>
                                    <button onClick={() => setShowConfirmModal(false)} className="text-white hover:text-gray-200">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Are you sure you want to unsubscribe <span className="font-semibold">{email}</span> from our newsletter?
                                </p>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setShowConfirmModal(false)}
                                        className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleConfirmUnsubscribe}
                                        className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                                    >
                                        Yes, Unsubscribe
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

export default UnsubscribeOptionSection3;