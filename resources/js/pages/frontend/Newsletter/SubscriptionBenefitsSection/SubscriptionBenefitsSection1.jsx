// page/frontend/Newsletter/SubscriptionBenefitsSection/SubscriptionBenefitsSection1.jsx

// React
import { useState } from 'react';

// Icons
import {
    HiOutlineMail,
    HiOutlineCheckCircle,
    HiOutlineArrowRight,
    HiOutlineUserGroup,
    HiOutlineNewspaper,
    HiOutlineAcademicCap,
    HiOutlineChartBar,
    HiOutlineChip,
    HiOutlineLightningBolt,
    HiOutlineStar,
    HiOutlineEye,
    HiOutlineGift,
    HiOutlineSparkles,
} from 'react-icons/hi';

const SubscriptionBenefitsSection1 = ({ config }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email address is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to receive emails';
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
                email: '',
                firstName: '',
                agreeToTerms: false
            });
        }, 3000);
    };

    // Benefits data
    const benefits = config?.benefits || [
        {
            title: "Weekly Industry Insights",
            description: "Stay ahead with the latest supply chain trends, news, and analysis delivered every Tuesday.",
            icon: "newspaper",
            color: "from-blue-500 to-blue-600",
            stats: "50+ issues published"
        },
        {
            title: "Expert Tips & Strategies",
            description: "Actionable advice from industry leaders and supply chain experts to improve your operations.",
            icon: "academic",
            color: "from-green-500 to-green-600",
            stats: "200+ expert tips"
        },
        {
            title: "Product Updates",
            description: "Be the first to know about new features, integrations, and platform enhancements.",
            icon: "chip",
            color: "from-purple-500 to-purple-600",
            stats: "Monthly releases"
        },
        {
            title: "Exclusive Content",
            description: "Access subscriber-only resources including case studies, templates, and whitepapers.",
            icon: "gift",
            color: "from-orange-500 to-orange-600",
            stats: "25+ exclusive resources"
        },
        {
            title: "Early Access",
            description: "Get early access to new features, beta programs, and special events before the general public.",
            icon: "bolt",
            color: "from-yellow-500 to-amber-500",
            stats: "Beta access"
        },
        {
            title: "Community Network",
            description: "Connect with thousands of supply chain professionals in our subscriber community.",
            icon: "users",
            color: "from-indigo-500 to-indigo-600",
            stats: "15,000+ subscribers"
        }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "15,000+", label: "Active Subscribers", icon: "users" },
        { value: "94%", label: "Open Rate", icon: "eye" },
        { value: "45%", label: "Click-through Rate", icon: "chart" },
        { value: "4.9/5", label: "Reader Satisfaction", icon: "star" }
    ];

    // Testimonials
    const testimonials = config?.testimonials || [
        {
            name: "Sarah Johnson",
            role: "Supply Chain Director",
            company: "Global Retail Corp",
            quote: "This newsletter has become essential reading for our team. The insights are always relevant and actionable.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Operations Manager",
            company: "HealthTech Solutions",
            quote: "I've implemented several strategies from this newsletter. The ROI has been tremendous.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "Logistics Director",
            company: "EuroLogistics",
            quote: "The expert tips alone are worth the subscription. Highly recommended for any supply chain professional.",
            rating: 5
        }
    ];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Subscription Benefits Section"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Why Subscribe?"}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Get More with"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Premium Benefits"}</span> {config?.title?.suffix || ""}
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Join thousands of supply chain professionals who stay ahead with our newsletter. Get exclusive insights, expert tips, and valuable resources delivered to your inbox."}
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

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                            <div className={`w-14 h-14 rounded-2xl bg-linear-to-r ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                {benefit.icon === 'newspaper' ? <HiOutlineNewspaper className="w-7 h-7 text-white" /> :
                                 benefit.icon === 'academic' ? <HiOutlineAcademicCap className="w-7 h-7 text-white" /> :
                                 benefit.icon === 'chip' ? <HiOutlineChip className="w-7 h-7 text-white" /> :
                                 benefit.icon === 'gift' ? <HiOutlineGift className="w-7 h-7 text-white" /> :
                                 benefit.icon === 'bolt' ? <HiOutlineLightningBolt className="w-7 h-7 text-white" /> :
                                 <HiOutlineUserGroup className="w-7 h-7 text-white" />}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{benefit.description}</p>
                            <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-400">
                                {benefit.stats}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        What Our Subscribers Say
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                                <div className="flex gap-1 text-yellow-500 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 italic text-sm mb-4">"{testimonial.quote}"</p>
                                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subscription Form */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                    <div className="text-center mb-8">
                        <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Subscribe Now - It's Free</h3>
                        <p className="text-blue-100">Join 15,000+ professionals who never miss an update.</p>
                    </div>

                    {formSubmitted ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HiOutlineCheckCircle className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Thanks for Subscribing!</h4>
                            <p className="text-blue-100">Please check your inbox to confirm your subscription.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email address"
                                        className={`w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white ${errors.email ? 'border-2 border-red-500' : ''}`}
                                    />
                                    {errors.email && <p className="text-red-200 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                                >
                                    Subscribe
                                    <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-2 mt-4">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 rounded"
                                />
                                <label className="text-sm text-blue-100">
                                    I agree to receive email communications from SupplyChainPro.
                                </label>
                            </div>
                            {errors.agreeToTerms && <p className="text-red-200 text-xs text-center mt-1">{errors.agreeToTerms}</p>}
                        </form>
                    )}

                    <p className="text-center text-blue-100 text-xs mt-6">
                        No spam. Unsubscribe anytime. We respect your privacy.
                    </p>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                        <span>No spam, ever</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                        <span>Unsubscribe anytime</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                        <span>Privacy protected</span>
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

export default SubscriptionBenefitsSection1;