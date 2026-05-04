// page/frontend/Newsletter/SubscribeFormSection/SubscribeFormSection3.jsx

/**
 * Newsletter Subscribe Form Section III - Full Subscription Hub with Multi-step Form
 *
 * Unique Design Elements:
 * - Stats Cards for Newsletter Metrics (Subscribers, Open Rate, CTR, Satisfaction)
 * - Testimonials Carousel with Auto-play and Manual Navigation
 * - Multi-step Subscription Form with Progress Indicator
 * - Application ID Generation on Successful Submission
 * - Interest Selection with Checkboxes
 * - Professional Information Collection (Company, Role)
 * - Frequency Selection (Weekly, Bi-weekly, Monthly)
 * - Video Modal for Testimonial Playback
 * - Circuit Board Background Pattern
 * - Animated Pulse Badge in Header
 * - Responsive Multi-step Form Layout
 * - Trust Indicators and Success Message with Reference ID
 *
 * All icons from react-icons (hi)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useRef } from 'react';

// React Icons - Heroicons
import {
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineCheckCircle,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineStar,
  HiOutlineX,
  HiOutlineEye,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlay,
  HiArrowRight,
  HiOutlineCalendar,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineDocumentText,
  HiOutlineSparkles,
} from 'react-icons/hi';

const SubscribeFormSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [formStep, setFormStep] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [applicationId, setApplicationId] = useState('');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1 - Basic Info
    email: '',
    firstName: '',
    lastName: '',
    // Step 2 - Preferences
    interests: [],
    frequency: 'weekly',
    // Step 3 - Professional Info
    company: '',
    role: '',
    // Step 4 - Confirmation
    agreeToTerms: false,
    subscribeToUpdates: false
  });

  // ==================== REFERENCE MANAGEMENT ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================

  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "Global Retail Corp",
      quote: "This newsletter has become my go-to resource for industry insights. The weekly updates keep me informed about the latest trends and best practices.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "HealthTech Solutions",
      quote: "The expert tips and case studies have helped me implement several process improvements. Highly recommended for any supply chain professional.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Logistics Director",
      company: "EuroLogistics",
      quote: "I've been a subscriber for over two years. The content is always relevant, timely, and actionable. It's helped me stay ahead of industry changes.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
  ];

  const interestOptions = config?.interestOptions || [
    { value: "supply-chain", label: "Supply Chain Trends", icon: "globe" },
    { value: "technology", label: "Technology & AI", icon: "chip" },
    { value: "product", label: "Product Updates", icon: "sparkles" },
    { value: "events", label: "Events & Webinars", icon: "calendar" },
    { value: "case-studies", label: "Case Studies", icon: "document" },
    { value: "best-practices", label: "Best Practices", icon: "academic" }
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

  const frequencyOptions = [
    { value: "weekly", label: "Weekly (Every Tuesday)", icon: "calendar" },
    { value: "biweekly", label: "Bi-weekly", icon: "calendar" },
    { value: "monthly", label: "Monthly", icon: "calendar" }
  ];

  const stats = config?.stats || [
    { value: "50,000+", label: "Subscribers", icon: "users" },
    { value: "92%", label: "Open Rate", icon: "eye" },
    { value: "45%", label: "CTR", icon: "chart" },
    { value: "4.9/5", label: "Satisfaction", icon: "star" }
  ];

  const steps = [
    { id: 1, title: "Email", icon: "mail" },
    { id: 2, title: "Interests", icon: "star" },
    { id: 3, title: "Profile", icon: "briefcase" },
    { id: 4, title: "Confirm", icon: "check" }
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons set
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      mail: <HiOutlineMail className={className} />,
      star: <HiOutlineStar className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      eye: <HiOutlineEye className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      chip: <HiOutlineChip className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      academic: <HiOutlineAcademicCap className={className} />
    };
    return icons[iconName] || <HiOutlineBell className={className} />;
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
   * Validate current step
   */
  const validateStep = () => {
    const newErrors = {};

    if (formStep === 1) {
      if (!formData.email) newErrors.email = 'Email address is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    } else if (formStep === 4) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to receive emails';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Next step
   */
  const nextStep = () => {
    if (validateStep()) {
      setFormStep(formStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  /**
   * Previous step
   */
  const prevStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Generate application ID
   */
  const generateApplicationId = () => {
    return `SUB-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    const newId = generateApplicationId();
    setApplicationId(newId);
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setFormStep(1);
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        interests: [],
        frequency: 'weekly',
        company: '',
        role: '',
        agreeToTerms: false,
        subscribeToUpdates: false
      });
    }, 3000);
  };

  /**
   * Open video modal
   */
  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideoModal(true);
  };

  /**
   * Close video modal
   */
  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideo(null);
  };

  // ==================== CAROUSEL NAVIGATION ====================
  const storiesCount = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % storiesCount);
  }, [storiesCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + storiesCount) % storiesCount);
  }, [storiesCount]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && storiesCount > 1) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, storiesCount, nextSlide]);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Newsletter Subscription Hub"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-subscribe" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80"
                stroke="#9CA3AF"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-subscribe)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineBell className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Stay Connected"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Subscribe to Our"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Newsletter"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              "Get the latest supply chain insights, product updates, and industry trends delivered straight to your inbox."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, 'w-4 h-4 text-blue-600 dark:text-blue-400')}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== TESTIMONIALS CAROUSEL ==================== */}
        {testimonials.length > 0 && (
          <div className="relative mb-16">
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
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                          <p className="text-xs text-gray-400">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex gap-1 text-amber-500 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 italic text-lg">"{testimonial.quote}"</p>
                      </div>
                      {testimonial.videoUrl && (
                        <button
                          onClick={() => openVideoModal(testimonial.videoUrl)}
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                          aria-label="Watch full testimonial"
                        >
                          <HiOutlinePlay className="w-4 h-4" />
                          Watch Full Testimonial
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {testimonials.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Previous slide"
                  >
                    <HiOutlineChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Next slide"
                  >
                    <HiOutlineChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-400'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ==================== MULTI-STEP SUBSCRIBE FORM ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Subscribe Now
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Join 50,000+ professionals who stay ahead with our newsletter
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thanks for Subscribing!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Reference ID: <span className="font-mono text-blue-600 dark:text-blue-400">{applicationId}</span>
              </p>
              <p className="text-gray-500 text-sm">Please check your inbox to confirm your subscription.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  {steps.map((step) => (
                    <div key={step.id} className="flex-1 text-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${formStep >= step.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                          }`}
                      >
                        {step.id}
                      </div>
                      <span className="text-xs text-gray-500 hidden sm:inline">{step.title}</span>
                    </div>
                  ))}
                </div>
                <div className="relative mt-2">
                  <div className="absolute top-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full w-full" />
                  <div
                    className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${(formStep - 1) * 33.33}%` }}
                  />
                </div>
              </div>

              {/* Step 1 - Email */}
              {formStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                    Where should we send your newsletter?
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                        } text-gray-900 dark:text-white`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 - Interests */}
              {formStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                    What topics interest you?
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {interestOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <input
                          type="checkbox"
                          name="interests"
                          value={option.value}
                          checked={formData.interests.includes(option.value)}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <div className="flex items-center gap-2">
                          {getIcon(option.icon, 'w-4 h-4 text-gray-500')}
                          <span className="text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Frequency
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {frequencyOptions.map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="frequency"
                            value={opt.value}
                            checked={formData.frequency === opt.value}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <div className="flex items-center gap-1">
                            {getIcon(opt.icon, 'w-3 h-3 text-gray-500')}
                            <span className="text-sm text-gray-700 dark:text-gray-300">{opt.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 - Professional Info */}
              {formStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                    Tell us about yourself (optional)
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      aria-label="Select your role"
                    >
                      <option value="">Select your role</option>
                      {roleOptions.map(role => <option key={role} value={role}>{role}</option>)}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 4 - Confirmation */}
              {formStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                    Almost there!
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Review your preferences:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Email:</span> {formData.email || 'Not provided'}
                      </p>
                      <p>
                        <span className="font-medium">Interests:</span>{' '}
                        {formData.interests.length > 0
                          ? formData.interests.map(i => interestOptions.find(opt => opt.value === i)?.label).join(', ')
                          : 'All topics'}
                      </p>
                      <p>
                        <span className="font-medium">Frequency:</span>{' '}
                        {frequencyOptions.find(f => f.value === formData.frequency)?.label}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        I agree to receive email communications from SupplyChainPro. *
                      </span>
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
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Subscribe to product updates and feature announcements (optional)
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                {formStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Previous
                  </button>
                )}
                {formStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                  >
                    Next
                    <HiArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                  >
                    Subscribe
                    <HiOutlineCheckCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

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

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && currentVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeVideoModal}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
              <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
            </div>
          </div>
        )}
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
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
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default SubscribeFormSection3;