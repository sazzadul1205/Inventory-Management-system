// frontend/PricingPlans/EnterprisePlanSection/EnterprisePlanSection2.jsx

/**
 * Enterprise Plan Section Component - Tabbed Overview
 * A comprehensive enterprise plan showcase featuring:
 * - Tab navigation (Overview, Features, Case Studies)
 * - Hero stats dashboard with key metrics
 * - Enterprise value proposition card
 * - Auto-playing testimonial carousel with controls
 * - Feature categories with expandable details
 * - Full feature list grid
 * - Case studies grid with images and metrics
 * - Contact sales modal form
 * - Dark mode compatible and fully responsive
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// React Icons - All from react-icons library
import {
  FaBuilding,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaHeadset,
  FaUserCircle
} from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlineCog,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineX,
  HiOutlineSparkles,
  HiOutlineDatabase,
  HiOutlineCloud,
  HiOutlineLockClosed,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdSecurity } from 'react-icons/md';

const EnterprisePlanSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  // ==================== MEMOIZED DATA ====================
  const features = config?.features || [];
  const caseStudies = config?.caseStudies || [];
  const testimonials = config?.testimonials || [];
  const enterprisePlan = config?.enterprisePlan || {};

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = (iconName, className = "w-8 h-8") => {
    const icons = {
      'building': FaBuilding,
      'rocket': FaRocket,
      'shield': FaShieldAlt,
      'chart': FaChartLine,
      'headset': FaHeadset,
      'security': MdSecurity,
      'sparkles': HiOutlineSparkles,
      'database': HiOutlineDatabase,
      'cloud': HiOutlineCloud,
      'lock': HiOutlineLockClosed,
      'users': HiOutlineUsers,
    };
    const IconComponent = icons[iconName] || FaBuilding;
    return <IconComponent className={className} />;
  };

  /**
   * Get stat icon by name
   * @param {string} iconName - Name of the stat icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getStatIcon = (iconName, className = "w-8 h-8") => {
    const statIcons = {
      'chart': HiOutlineChartBar,
      'clock': HiOutlineClock,
      'trending': HiOutlineTrendingUp,
      'users': HiOutlineUsers,
      'shield': HiOutlineShieldCheck,
    };
    const IconComponent = statIcons[iconName] || HiOutlineChartBar;
    return <IconComponent className={className} />;
  };

  /**
   * Get avatar icon for testimonials
   * @param {string} avatarName - Name of the avatar icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getAvatarIcon = (avatarName, className = "w-6 h-6") => {
    const avatarIcons = {
      'sarah': FaUserCircle,
      'michael': FaUserCircle,
      'emily': FaUserCircle,
      'david': FaUserCircle,
    };
    const IconComponent = avatarIcons[avatarName] || FaUserCircle;
    return <IconComponent className={className} />;
  };

  /**
   * Get feature icon by name
   * @param {string} iconName - Name of the feature icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getFeatureIcon = (iconName, className = "w-6 h-6") => {
    const featureIcons = {
      'security': HiOutlineShieldCheck,
      'analytics': HiOutlineChartBar,
      'support': FaHeadset,
      'integrations': HiOutlineSparkles,
      'scalability': HiOutlineTrendingUp,
      'compliance': MdSecurity,
    };
    const IconComponent = featureIcons[iconName] || HiOutlineSparkles;
    return <IconComponent className={className} />;
  };

  // ==================== AUTO-PLAY TESTIMONIAL CAROUSEL ====================
  useEffect(() => {
    let interval;
    if (isPlaying && testimonials.length > 1) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  /**
   * Navigate to next testimonial
   */
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  };

  /**
   * Navigate to previous testimonial
   */
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  /**
   * Close contact modal on escape key
   */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showContactModal) {
        setShowContactModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showContactModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showContactModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showContactModal]);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Enterprise Plan Features"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Enterprise badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Enterprise Plan"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Enterprise-Grade'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Solutions'}
            </span>{' '}
            {config?.title?.suffix || 'for Global Operations'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Everything you need to run your enterprise with confidence, security, and scale."}
          </p>
        </div>

        {/* ==================== TAB NAVIGATION ==================== */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-12">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'overview'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show overview tab"
          >
            <HiOutlineBuildingOffice className="w-4 h-4" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'features'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show features tab"
          >
            <HiOutlineCog className="w-4 h-4" />
            Features
          </button>
          <button
            onClick={() => setActiveTab('caseStudies')}
            className={`px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'caseStudies'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            aria-label="Show case studies tab"
          >
            <HiOutlineDocumentText className="w-4 h-4" />
            Case Studies
          </button>
        </div>

        {/* ==================== OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {config?.stats?.map((stat, index) => (
                <div key={index} className="bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                    {getStatIcon(stat.icon, "w-8 h-8")}
                  </div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enterprise Value Proposition */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-blue-200 mb-3">
                    <FaBuilding className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">The Enterprise Advantage</h3>
                  <p className="text-blue-100 mb-6">
                    Get everything you need to run your global operations with confidence, security, and scale.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-400" />
                      <span>Custom pricing and flexible contract terms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-400" />
                      <span>Dedicated account team with 24/7 support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-400" />
                      <span>99.9% uptime SLA with financial backing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-400" />
                      <span>Enterprise-grade security and compliance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2">Custom Quote</div>
                  <p className="text-blue-100 text-sm mb-4">Priced based on your specific needs</p>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    aria-label="Get custom quote"
                  >
                    Get Custom Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Client Testimonials Carousel */}
            {testimonials.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                  What Enterprise Clients Say
                </h3>
                <div className="relative">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-500 ease-out"
                      style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                    >
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full shrink-0 px-4">
                          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
                            <div className="flex justify-center mb-4">
                              {[...Array(5)].map((_, i) => (
                                <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 italic text-lg mb-6">
                              "{testimonial.quote}"
                            </p>
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                                {getAvatarIcon(testimonial.avatar, "w-6 h-6")}
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</div>
                              </div>
                            </div>
                            <div className="mt-4 text-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                              {testimonial.result}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {testimonials.length > 1 && (
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <button
                        onClick={prevTestimonial}
                        className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                        aria-label="Previous testimonial"
                      >
                        <HiOutlineChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                      <div className="flex gap-2">
                        {testimonials.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => { setCurrentTestimonial(idx); setIsPlaying(false); }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === idx ? 'w-6 bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                              }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                      >
                        {isPlaying ? (
                          <HiOutlinePause className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        ) : (
                          <HiOutlinePlay className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        )}
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                        aria-label="Next testimonial"
                      >
                        <HiOutlineChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== FEATURES TAB ==================== */}
        {activeTab === 'features' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Feature Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFeature(index)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 ${selectedFeature === index
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500'
                    : 'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg'
                    }`}
                  aria-label={`Select ${feature.title} feature`}
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-3">
                    {getFeatureIcon(feature.icon, "w-8 h-8")}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.shortDescription}</p>
                </button>
              ))}
            </div>

            {/* Selected Feature Details */}
            {features[selectedFeature] && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="text-blue-600 dark:text-blue-400 mb-3">
                      {getFeatureIcon(features[selectedFeature]?.icon, "w-10 h-10")}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {features[selectedFeature]?.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {features[selectedFeature]?.description}
                    </p>
                    <ul className="space-y-3">
                      {features[selectedFeature]?.highlights?.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                    <div className="text-center">
                      <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                        {getStatIcon(features[selectedFeature]?.statIcon, "w-10 h-10")}
                      </div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{features[selectedFeature]?.statValue}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{features[selectedFeature]?.statLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Full Feature List */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">All Enterprise Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {enterprisePlan?.fullFeatures?.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== CASE STUDIES TAB ==================== */}
        {activeTab === 'caseStudies' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${study.image})` }}
                    aria-label={`${study.company} case study image`}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-blue-600 dark:text-blue-400">
                        {getIcon(study.icon, "w-6 h-6")}
                      </div>
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{study.company}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{study.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{study.result}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Annual Savings</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{study.roi}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">ROI</div>
                      </div>
                    </div>
                    <Link
                      href={study.link}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-2 transition-all duration-300 group"
                    >
                      Read Full Case Study
                      <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineBuildingOffice className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Ready to discuss your enterprise needs?"}
            </span>
            <button
              onClick={() => setShowContactModal(true)}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              aria-label="Contact sales"
            >
              {config?.ctaButtonText || "Contact Sales"}
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ==================== CONTACT MODAL ==================== */}
      {showContactModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowContactModal(false)}
          role="dialog"
          aria-label="Contact enterprise sales form"
          aria-modal="true"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Enterprise Sales</h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                aria-label="Close modal"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Annual Revenue</label>
                <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>$10M - $50M</option>
                  <option>$50M - $100M</option>
                  <option>$100M - $500M</option>
                  <option>$500M+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Submit Request
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              Our enterprise team will respond within 24 hours.
            </p>
          </div>
        </div>
      )}

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default EnterprisePlanSection2;