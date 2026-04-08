// page/frontend/Newsletter/SubscribeFormSection/SubscribeFormSection2.jsx

// React
import { useState } from 'react';

// Icons
import {
    HiOutlineMail,
    HiOutlineBell,
    HiOutlineCheckCircle,
    HiOutlineNewspaper,
    HiOutlineAcademicCap,
    HiOutlineChip,
    HiOutlineStar,
    HiOutlineClock,
    HiOutlineGift,
    HiArrowRight,
} from 'react-icons/hi';

const SubscribeFormSection2 = ({ config }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [activeTab, setActiveTab] = useState('subscribe');
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        role: '',
        interests: [],
        frequency: 'weekly',
        agreeToTerms: false,
        subscribeToUpdates: false
    });
    const [errors, setErrors] = useState({});

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (name === 'interests') {
                const currentInterests = [...formData.interests];
                if (checked) {
                    currentInterests.push(value);
                } else {
                    const index = currentInterests.indexOf(value);
                    if (index > -1) currentInterests.splice(index, 1);
                }
                setFormData({ ...formData, interests: currentInterests });
            } else {
                setFormData({ ...formData, [name]: checked });
            }
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
                lastName: '',
                company: '',
                role: '',
                interests: [],
                frequency: 'weekly',
                agreeToTerms: false,
                subscribeToUpdates: false
            });
        }, 3000);
    };

    // Sample newsletter content
    const recentNewsletters = config?.recentNewsletters || [
        {
            title: "Supply Chain Trends 2024",
            date: "March 15, 2024",
            description: "The top 10 trends shaping supply chain management this year",
            readTime: "5 min read",
            category: "Trends",
            image: "/newsletters/trends-2024.jpg"
        },
        {
            title: "AI in Supply Chain",
            date: "March 8, 2024",
            description: "How artificial intelligence is revolutionizing logistics",
            readTime: "4 min read",
            category: "Technology",
            image: "/newsletters/ai-supply-chain.jpg"
        },
        {
            title: "Sustainability Strategies",
            date: "March 1, 2024",
            description: "Building a greener supply chain",
            readTime: "6 min read",
            category: "Sustainability",
            image: "/newsletters/sustainability.jpg"
        }
    ];

    // Benefits
    const benefits = config?.benefits || [
        { title: "Weekly Insights", description: "Get the latest supply chain trends", icon: "newspaper", color: "from-blue-500 to-blue-600" },
        { title: "Expert Tips", description: "Actionable advice from leaders", icon: "academic", color: "from-green-500 to-green-600" },
        { title: "Product Updates", description: "Stay informed about new features", icon: "chip", color: "from-purple-500 to-purple-600" },
        { title: "Exclusive Content", description: "Access subscriber-only resources", icon: "star", color: "from-orange-500 to-orange-600" }
    ];

    // Interest options
    const interestOptions = config?.interestOptions || [
        { value: "supply-chain", label: "Supply Chain Trends", icon: "globe" },
        { value: "technology", label: "Technology & AI", icon: "chip" },
        { value: "product", label: "Product Updates", icon: "gift" },
        { value: "events", label: "Events & Webinars", icon: "calendar" },
        { value: "case-studies", label: "Case Studies", icon: "document" },
        { value: "best-practices", label: "Best Practices", icon: "star" }
    ];

    // Role options
    const roleOptions = config?.roleOptions || [
        "Supply Chain Manager",
        "Logistics Director",
        "Operations Manager",
        "Procurement Specialist",
        "CEO/Founder",
        "Consultant",
        "Student",
        "Other"
    ];

    // Frequency options
    const frequencyOptions = [
        { value: "weekly", label: "Weekly (Every Tuesday)" },
        { value: "biweekly", label: "Bi-weekly" },
        { value: "monthly", label: "Monthly" }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "50,000+", label: "Subscribers", icon: "users", trend: "+2,500 this month", trendUp: true },
        { value: "92%", label: "Open Rate", icon: "eye", trend: "Industry avg: 35%", trendUp: true },
        { value: "45%", label: "Click-through Rate", icon: "chart", trend: "+8% vs last month", trendUp: true },
        { value: "4.9/5", label: "Reader Satisfaction", icon: "star", trend: "From 2,000+ reviews", trendUp: true }
    ];

    const tabs = [
        { id: 'subscribe', label: 'Subscribe', icon: 'mail' },
        { id: 'preview', label: 'Preview Newsletter', icon: 'newspaper' },
        { id: 'benefits', label: 'Benefits', icon: 'gift' }
    ];

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Newsletter Subscribe Center"
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
                            <HiOutlineBell className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Stay Connected"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Subscribe to Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Newsletter"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Get the latest supply chain insights, product updates, and industry trends delivered straight to your inbox. Join thousands of professionals who stay ahead with our newsletter."}
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
                            {tab.icon === 'mail' ? <HiOutlineMail className="w-4 h-4" /> :
                                tab.icon === 'newspaper' ? <HiOutlineNewspaper className="w-4 h-4" /> :
                                    <HiOutlineGift className="w-4 h-4" />}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Subscribe Tab */}
                {activeTab === 'subscribe' && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                        <div className="text-center mb-8">
                            <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Subscribe Now
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                No spam. Unsubscribe anytime. We respect your privacy.
                            </p>
                        </div>

                        {formSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thanks for Subscribing!</h3>
                                <p className="text-gray-600 dark:text-gray-400">Please check your inbox to confirm your subscription.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl" placeholder="Doe" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} placeholder="john@example.com" />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                                        <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl" placeholder="Your Company" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Role</label>
                                        <select name="role" value={formData.role} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="">Select your role</option>
                                            {roleOptions.map(role => <option key={role} value={role}>{role}</option>)}
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Areas of Interest</label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {interestOptions.map((option) => (
                                                <label key={option.value} className="flex items-center gap-2">
                                                    <input type="checkbox" name="interests" value={option.value} checked={formData.interests.includes(option.value)} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded" />
                                                    <span className="text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Frequency</label>
                                        <select name="frequency" value={formData.frequency} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            {frequencyOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">I agree to receive email communications from SupplyChainPro. *</span>
                                        </label>
                                        {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" name="subscribeToUpdates" checked={formData.subscribeToUpdates} onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Subscribe to product updates and feature announcements (optional)</span>
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                    Subscribe Now
                                    <HiArrowRight className="inline ml-2 w-4 h-4" />
                                </button>
                                <p className="text-xs text-gray-500 text-center mt-4">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
                            </form>
                        )}
                    </div>
                )}

                {/* Preview Tab */}
                {activeTab === 'preview' && (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Recent Newsletters</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recentNewsletters.map((newsletter, idx) => (
                                <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                                    <div className="h-40 bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                        <HiOutlineNewspaper className="w-12 h-12 text-white opacity-50" />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-semibold text-blue-600">{newsletter.category}</span>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <HiOutlineClock className="w-3 h-3" />
                                                <span>{newsletter.readTime}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{newsletter.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{newsletter.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500">{newsletter.date}</span>
                                            <button className="text-blue-600 text-sm font-semibold hover:underline">Read More →</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <button className="text-blue-600 font-semibold hover:underline">View all past issues →</button>
                        </div>
                    </div>
                )}

                {/* Benefits Tab */}
                {activeTab === 'benefits' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center group">
                                <div className={`w-14 h-14 rounded-2xl bg-linear-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                    {benefit.icon === 'newspaper' ? <HiOutlineNewspaper className="w-7 h-7 text-white" /> :
                                        benefit.icon === 'academic' ? <HiOutlineAcademicCap className="w-7 h-7 text-white" /> :
                                            benefit.icon === 'chip' ? <HiOutlineChip className="w-7 h-7 text-white" /> :
                                                <HiOutlineStar className="w-7 h-7 text-white" />}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap justify-center gap-6">
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
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                        <span>GDPR compliant</span>
                    </div>
                </div>

                {/* Social Proof */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Trusted by professionals at leading companies worldwide
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 mt-4 opacity-60">
                        <span className="text-xs font-semibold text-gray-400">GLOBAL RETAIL CORP</span>
                        <span className="text-xs font-semibold text-gray-400">HEALTHTECH SOLUTIONS</span>
                        <span className="text-xs font-semibold text-gray-400">EUROLOGISTICS</span>
                        <span className="text-xs font-semibold text-gray-400">FINSERVE GLOBAL</span>
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

export default SubscribeFormSection2;