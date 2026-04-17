// frontend/PricingPlans/EnterprisePlanSection/EnterprisePlanSection1.jsx

/**
 * Enterprise Plan Section Component - Hero & Overview
 * A comprehensive enterprise plan showcase featuring:
 * - Animated stats dashboard with scroll-triggered counters
 * - Enterprise hero card with key features and CTAs
 * - Enterprise-grade features grid
 * - Benefits showcase with key statistics
 * - Industry-specific solutions with interactive filters
 * - Security & compliance badges showcase
 * - Customer success stories carousel
 * - Contact sales modal form
 * - Dark mode compatible and fully responsive
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import {
  FaBuilding,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaHeadset,
} from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineChip,
  HiOutlineDatabase,
  HiOutlineCloud,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineX,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { MdSecurity } from 'react-icons/md';

const EnterprisePlanSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedIndustryId, setSelectedIndustryId] = useState('all');
  const [animatedStats, setAnimatedStats] = useState({});
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isStoryPlaying, setIsStoryPlaying] = useState(true);
  const sectionRef = useRef(null);
  const storyIntervalRef = useRef(null);

  // ==================== DATA DESTRUCTURING ====================
  const {
    badge = {},
    title = {},
    description = "Custom solutions for large organizations with complex needs, offering unmatched scalability, security, and support.",
    ctaText = "Ready to take your enterprise operations to the next level?",
    ctaButtonText = "Contact Sales",
    stats = [],
    features = [],
    benefits = [],
    industries = [],
    complianceBadges = [],
    successStories = [],
    enterpriseFeatures = [],
  } = config || {};

  // ==================== ICON MAPS ====================
  const iconMap = {
    building: FaBuilding,
    rocket: FaRocket,
    shield: FaShieldAlt,
    chart: FaChartLine,
    headset: FaHeadset,
    security: MdSecurity,
    sparkles: HiOutlineSparkles,
    chip: HiOutlineChip,
    database: HiOutlineDatabase,
    cloud: HiOutlineCloud,
    lock: HiOutlineLockClosed,
    mail: HiOutlineMail,
    phone: HiOutlinePhone,
    users: HiOutlineUserGroup,
    statChart: HiOutlineChartBar,
    statClock: HiOutlineClock,
    statTrending: HiOutlineTrendingUp,
  };

  const industryIconMap = {
    retail: HiOutlineBuildingOffice,
    finance: HiOutlineShieldCheck,
    healthcare: MdSecurity,
    manufacturing: HiOutlineChip,
    technology: HiOutlineSparkles,
  };

  const statIconMap = {
    chart: HiOutlineChartBar,
    clock: HiOutlineClock,
    trending: HiOutlineTrendingUp,
  };

  const complianceIconMap = {
    'SOC 2 Type II': HiOutlineShieldCheck,
    'ISO 27001': HiOutlineLockClosed,
    'GDPR': HiOutlineShieldCheck,
    'HIPAA': MdSecurity,
  };

  // ==================== HELPER FUNCTIONS ====================
  const getIcon = (iconName, className = "w-8 h-8") => {
    const Icon = iconMap[iconName] || FaBuilding;
    return <Icon className={className} />;
  };

  const getIndustryIcon = (iconName, className = "w-5 h-5") => {
    const Icon = industryIconMap[iconName] || HiOutlineBuildingOffice;
    return <Icon className={className} />;
  };

  const getStatIcon = (iconName, className = "w-10 h-10") => {
    const Icon = statIconMap[iconName] || HiOutlineChartBar;
    return <Icon className={className} />;
  };

  const getComplianceIcon = (badgeName, className = "w-4 h-4") => {
    const Icon = complianceIconMap[badgeName] || HiOutlineShieldCheck;
    return <Icon className={className} />;
  };

  // ==================== ANIMATE STATS ON SCROLL ====================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && Object.keys(animatedStats).length === 0) {
            stats.forEach((stat, index) => {
              const targetValue = parseFloat(stat.value.replace(/[^0-9.-]/g, '')) || 0;
              const suffix = stat.value.replace(/[0-9.-]/g, '');
              let current = 0;
              const increment = targetValue / 60;

              const interval = setInterval(() => {
                current += increment;
                if (current >= targetValue) {
                  setAnimatedStats((prev) => ({ ...prev, [index]: stat.value }));
                  clearInterval(interval);
                } else {
                  setAnimatedStats((prev) => ({
                    ...prev,
                    [index]: Math.floor(current) + suffix,
                  }));
                }
              }, 25);

              return () => clearInterval(interval);
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stats, animatedStats]);

  // ==================== SUCCESS STORIES AUTO-PLAY ====================
  useEffect(() => {
    if (isStoryPlaying && successStories.length > 1) {
      storyIntervalRef.current = setInterval(() => {
        setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
      }, 5000);
    }
    return () => {
      if (storyIntervalRef.current) {
        clearInterval(storyIntervalRef.current);
      }
    };
  }, [isStoryPlaying, successStories.length]);

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
    setIsStoryPlaying(false);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
    setIsStoryPlaying(false);
  };

  // ==================== MODAL HANDLERS ====================
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showContactModal) {
        setShowContactModal(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showContactModal]);

  useEffect(() => {
    document.body.style.overflow = showContactModal ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showContactModal]);

  // ==================== CURRENT INDUSTRY ====================
  const currentIndustry = industries.find((i) => i.id === selectedIndustryId) || industries[0];

  // ==================== RENDER ====================
  return (
    <section
      ref={sectionRef}
      id="enterprise-section"
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Enterprise Plan Overview"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/30 to-transparent dark:from-blue-900/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/30 to-transparent dark:from-indigo-900/5 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${badge.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${badge.borderColor || 'border-blue-200 dark:border-blue-800'}`}
          >
            {badge.showPulse && (
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${badge.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {badge.text || 'Enterprise Plan'}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {title.prefix || 'Built for'}{' '}
            <span className={`bg-linear-to-r ${title.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {title.highlightedText || 'Enterprise'}
            </span>{' '}
            {title.suffix || 'Scale'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        {/* ==================== ENTERPRISE HERO CARD ==================== */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Info */}
            <div className="p-8 lg:p-12 text-white">
              <div className="text-blue-200 mb-4">{getIcon('building', 'w-12 h-12')}</div>
              <h3 className="text-3xl font-bold mb-3">Enterprise Plan</h3>
              <p className="text-blue-100 text-lg mb-6">Custom solutions for large organizations with complex needs</p>

              <div className="space-y-4 mb-8">
                {enterpriseFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <HiOutlineCheck className="w-6 h-6 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowContactModal(true)}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Contact Sales
                <HiArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-blue-200 mt-4">No commitment. Free consultation.</p>
            </div>

            {/* Right Column - Stats */}
            <div className="bg-black/20 p-8 lg:p-12 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold">{animatedStats[index] || stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== FEATURES GRID ==================== */}
        {features.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Enterprise-Grade Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-blue-600 dark:text-blue-400 mb-3">
                    {getIcon(feature.icon, 'w-8 h-8')}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== BENEFITS SECTION ==================== */}
        {benefits.length > 0 && (
          <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Why Enterprises Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                    {getStatIcon(benefit.icon, 'w-10 h-10')}
                  </div>
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">{benefit.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{benefit.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== INDUSTRY SOLUTIONS ==================== */}
        {industries.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Industry-Specific Solutions
            </h3>

            {/* Industry Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustryId(industry.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedIndustryId === industry.id
                      ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {getIndustryIcon(industry.icon, 'w-4 h-4')}
                  {industry.name}
                </button>
              ))}
            </div>

            {/* Selected Industry Content */}
            {currentIndustry && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {getIndustryIcon(currentIndustry.icon, 'w-8 h-8')}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {currentIndustry.name} Solutions
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{currentIndustry.description}</p>
                    <ul className="space-y-2">
                      {currentIndustry.highlights?.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== SECURITY & COMPLIANCE ==================== */}
        <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-blue-600 dark:text-blue-400 mb-3">{getIcon('shield', 'w-10 h-10')}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Enterprise-Grade Security & Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our platform meets the highest security standards to protect your data.
              </p>
              <div className="flex flex-wrap gap-2">
                {complianceBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-white dark:bg-gray-700 rounded-full shadow-sm flex items-center gap-1"
                  >
                    {getComplianceIcon(badge, 'w-3 h-3')}
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['SOC 2 Type II', 'ISO 27001', 'GDPR', 'HIPAA'].map((standard, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{standard}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {standard === 'SOC 2 Type II'
                      ? 'Audited annually'
                      : standard === 'HIPAA'
                        ? 'Ready'
                        : 'Certified'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== CUSTOMER SUCCESS STORIES ==================== */}
        {successStories.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Enterprise Success Stories
            </h3>

            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentStoryIndex * 100}%)` }}
                >
                  {successStories.map((story, index) => (
                    <div key={index} className="w-full shrink-0 px-4">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-blue-600 dark:text-blue-400">
                            {getIcon(story.icon, 'w-10 h-10')}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 dark:text-white">{story.company}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{story.industry}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">"{story.quote}"</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{story.result}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Annual Savings</div>
                          </div>
                          <Link
                            href={story.link}
                            className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline inline-flex items-center gap-1 group"
                          >
                            Read Story
                            <HiArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {successStories.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={prevStory}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    aria-label="Previous story"
                  >
                    <HiOutlineChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  <div className="flex gap-2">
                    {successStories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentStoryIndex(idx);
                          setIsStoryPlaying(false);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentStoryIndex === idx ? 'w-6 bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        aria-label={`Go to story ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextStory}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    aria-label="Next story"
                  >
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineBuildingOffice className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">{ctaText}</span>
            <button
              onClick={() => setShowContactModal(true)}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {ctaButtonText}
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
          aria-label="Contact sales form"
          aria-modal="true"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Sales</h3>
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>1-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>500-1,000 employees</option>
                  <option>1,000+ employees</option>
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
              <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Submit Request
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              Our team will respond within 24 hours.
            </p>
          </div>
        </div>
      )}

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
          animation: fadeIn 0.3s ease-out forwards;
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

export default EnterprisePlanSection1;