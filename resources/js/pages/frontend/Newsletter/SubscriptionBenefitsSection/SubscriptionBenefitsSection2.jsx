// page/frontend/Newsletter/SubscriptionBenefitsSection/SubscriptionBenefitsSection2.jsx

/**
 * Subscription Benefits Section II - Advanced Benefits Hub with Tabs
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Subscribers, Open Rate, CTR, Satisfaction)
 * - Multi-tab UI (Benefits, Testimonials, Subscribe)
 * - Benefits Grid with Expandable Details and Metrics
 * - Testimonials Grid with Avatars and Star Ratings
 * - Enhanced Subscription Form with Additional Fields (First Name, Last Name, Role, Interests)
 * - Success Message on Form Submission
 * - Trust Indicators with GDPR Compliance
 * - Animated Gradient Orbs in Background
 * - Responsive Grid Layout for Benefits and Testimonials
 * - Interactive Benefit Cards with Click-to-Expand
 *
 * All icons from react-icons (hi)
 * Fully responsive with dark mode support
 */

import { useState } from 'react';

// React Icons - Heroicons
import {
  HiOutlineMail,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineUserGroup,
  HiOutlineNewspaper,
  HiOutlineAcademicCap,
  HiOutlineChip,
  HiOutlineLightningBolt,
  HiOutlineStar,
  HiOutlineGift,
  HiOutlineSparkles,
  HiOutlineChevronDown,
  HiOutlineChat,
  HiOutlineEye,
  HiOutlineChartBar,
  HiOutlineCalendar,
  HiOutlineGlobe,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
} from 'react-icons/hi';

const SubscriptionBenefitsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('benefits');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandedBenefit, setExpandedBenefit] = useState(null);
  const [formData, setFormData] = useState({ email: '', firstName: '', lastName: '', role: '', interests: [], agreeToTerms: false, subscribeToUpdates: false });

  // ==================== MEMOIZED DATA ====================

  const benefits = config?.benefits || [
    {
      id: 1,
      title: "Weekly Industry Insights",
      description: "Stay ahead with the latest supply chain trends, news, and analysis delivered every Tuesday.",
      longDescription: "Each week, our team curates the most important developments in supply chain management, including emerging trends, regulatory changes, and innovative technologies. You'll get a comprehensive overview of what's happening in the industry.",
      icon: "newspaper",
      gradient: "from-blue-500 to-blue-600",
      stats: "50+ issues published",
      metrics: { views: "2.4M", subscribers: "15K+" }
    },
    {
      id: 2,
      title: "Expert Tips & Strategies",
      description: "Actionable advice from industry leaders and supply chain experts to improve your operations.",
      longDescription: "Learn from experienced supply chain professionals who have successfully implemented strategies that drive results. Each tip is practical, actionable, and backed by real-world examples.",
      icon: "academic",
      gradient: "from-emerald-500 to-emerald-600",
      stats: "200+ expert tips",
      metrics: { saves: "12K", shares: "8.5K" }
    },
    {
      id: 3,
      title: "Product Updates",
      description: "Be the first to know about new features, integrations, and platform enhancements.",
      longDescription: "Get early access to product announcements, feature releases, and platform improvements. You'll never miss an update that could benefit your supply chain operations.",
      icon: "chip",
      gradient: "from-purple-500 to-purple-600",
      stats: "Monthly releases",
      metrics: { features: "45+", integrations: "30+" }
    },
    {
      id: 4,
      title: "Exclusive Content",
      description: "Access subscriber-only resources including case studies, templates, and whitepapers.",
      longDescription: "Unlock a library of premium content including in-depth case studies, downloadable templates, research reports, and whitepapers created exclusively for subscribers.",
      icon: "gift",
      gradient: "from-amber-500 to-amber-600",
      stats: "25+ exclusive resources",
      metrics: { downloads: "50K+", resources: "25+" }
    },
    {
      id: 5,
      title: "Early Access",
      description: "Get early access to new features, beta programs, and special events before the general public.",
      longDescription: "Be among the first to try new features, join beta programs, and register for exclusive events. Your feedback helps shape our product roadmap.",
      icon: "bolt",
      gradient: "from-rose-500 to-rose-600",
      stats: "Beta access",
      metrics: { betaPrograms: "12", events: "8" }
    },
    {
      id: 6,
      title: "Community Network",
      description: "Connect with thousands of supply chain professionals in our subscriber community.",
      longDescription: "Join a growing community of supply chain professionals who share insights, ask questions, and collaborate on solving industry challenges.",
      icon: "users",
      gradient: "from-indigo-500 to-indigo-600",
      stats: "15,000+ subscribers",
      metrics: { members: "15K+", discussions: "2K+" }
    }
  ];

  const interestOptions = config?.interestOptions || [
    { value: "supply-chain", label: "Supply Chain Trends", icon: "globe" },
    { value: "technology", label: "Technology & AI", icon: "chip" },
    { value: "product", label: "Product Updates", icon: "gift" },
    { value: "events", label: "Events & Webinars", icon: "calendar" },
    { value: "case-studies", label: "Case Studies", icon: "document" },
    { value: "best-practices", label: "Best Practices", icon: "star" }
  ];

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

  const stats = config?.stats || [
    { value: "15,000+", label: "Active Subscribers", icon: "users", trend: "+22%", trendUp: true },
    { value: "94%", label: "Open Rate", icon: "eye", trend: "+5%", trendUp: true },
    { value: "45%", label: "Click-through Rate", icon: "chart", trend: "+8%", trendUp: true },
    { value: "4.9/5", label: "Reader Satisfaction", icon: "star", trend: "4.9", trendUp: true }
  ];

  const tabs = [
    { id: 'benefits', label: 'Benefits', icon: 'gift' },
    { id: 'testimonials', label: 'Testimonials', icon: 'chat' },
    { id: 'subscribe', label: 'Subscribe', icon: 'mail' }
  ];

  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "Global Retail Corp",
      quote: "This newsletter has become essential reading for our team. The insights are always relevant and actionable. I've shared it with my entire department.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "HealthTech Solutions",
      quote: "I've implemented several strategies from this newsletter. The ROI has been tremendous. The expert tips alone have saved us thousands.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Logistics Director",
      company: "EuroLogistics",
      quote: "The expert tips alone are worth the subscription. Highly recommended for any supply chain professional. Best newsletter in the industry.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
    },
    {
      name: "David Kim",
      role: "Procurement Lead",
      company: "AutoParts Inc.",
      quote: "I look forward to this newsletter every week. The content is always timely and relevant to my work.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop"
    }
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons set
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      newspaper: <HiOutlineNewspaper className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      chip: <HiOutlineChip className={className} />,
      gift: <HiOutlineGift className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      eye: <HiOutlineEye className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      star: <HiOutlineStar className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      chat: <HiOutlineChat className={className} />,
      mail: <HiOutlineMail className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
    };
    return icons[iconName] || <HiOutlineGift className={className} />;
  };

  /**
   * Handle form input change
   */
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

  /**
   * Validate form
   */
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to receive emails';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
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
        role: '',
        interests: [],
        agreeToTerms: false,
        subscribeToUpdates: false
      });
    }, 3000);
  };

  /**
   * Toggle benefit expansion
   */
  const toggleBenefit = (benefitId) => {
    setExpandedBenefit(expandedBenefit === benefitId ? null : benefitId);
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Subscription Benefits Center"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Why Subscribe?"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Get More with"}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || "Premium Benefits"}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                "Join thousands of supply chain professionals who stay ahead with our newsletter. Get exclusive insights, expert tips, and valuable resources delivered to your inbox."}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                {stat.trend && (
                  <div className={`text-xs mt-1 ${stat.trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
                    {stat.trend}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== BENEFITS TAB ==================== */}
        {activeTab === 'benefits' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit) => {
              const isExpanded = expandedBenefit === benefit.id;
              return (
                <div
                  key={benefit.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => toggleBenefit(benefit.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleBenefit(benefit.id)}
                >
                  <div className={`h-1.5 bg-linear-to-r ${benefit.gradient}`} />
                  <div className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-linear-to-r ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {getIcon(benefit.icon, "w-7 h-7 text-white")}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{benefit.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-400">
                        {benefit.stats}
                      </span>
                      <button
                        className="text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center gap-1"
                        aria-label={isExpanded ? "Show less" : "Learn more"}
                      >
                        {isExpanded ? 'Show less' : 'Learn more'}
                        <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{benefit.longDescription}</p>
                        <div className="flex justify-around text-center">
                          {Object.entries(benefit.metrics).map(([key, value], idx) => (
                            <div key={idx}>
                              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{value}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                                {key === 'views' ? 'Total Views' :
                                  key === 'subscribers' ? 'Subscribers' :
                                    key === 'saves' ? 'Saves' :
                                      key === 'shares' ? 'Shares' :
                                        key === 'features' ? 'Features' :
                                          key === 'integrations' ? 'Integrations' :
                                            key === 'downloads' ? 'Downloads' :
                                              key === 'resources' ? 'Resources' :
                                                key === 'betaPrograms' ? 'Beta Programs' :
                                                  key === 'events' ? 'Events' :
                                                    key === 'members' ? 'Members' :
                                                      key === 'discussions' ? 'Discussions' : key}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== TESTIMONIALS TAB ==================== */}
        {activeTab === 'testimonials' && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-amber-500 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        )}

        {/* ==================== SUBSCRIBE TAB ==================== */}
        {activeTab === 'subscribe' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Subscribe Now - It's Free</h2>
              <p className="text-gray-600 dark:text-gray-400">Join 15,000+ professionals who never miss an update.</p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thanks for Subscribing!</h3>
                <p className="text-gray-600 dark:text-gray-400">Please check your inbox to confirm your subscription.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    aria-label="First name"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    aria-label="Last name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      }`}
                    aria-label="Email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Select your role"
                  >
                    <option value="">Select your role (optional)</option>
                    {roleOptions.map(role => <option key={role} value={role}>{role}</option>)}
                  </select>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Areas of Interest (optional)</p>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map((option) => (
                      <label key={option.value} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="interests"
                          value={option.value}
                          checked={formData.interests.includes(option.value)}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">I agree to receive email communications from SupplyChainPro. *</span>
                  </label>
                  {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="subscribeToUpdates"
                      checked={formData.subscribeToUpdates}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Subscribe to product updates and feature announcements (optional)</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Subscribe"
                >
                  Subscribe Now
                  <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">No spam. Unsubscribe anytime. We respect your privacy.</p>
              </form>
            )}
          </div>
        )}

        {/* ==================== TRUST INDICATORS ==================== */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Unsubscribe anytime</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Privacy protected</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
            <span>GDPR compliant</span>
          </div>
        </div>
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
          -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
        }
      `}</style>
    </section>
  );
};

export default SubscriptionBenefitsSection2;