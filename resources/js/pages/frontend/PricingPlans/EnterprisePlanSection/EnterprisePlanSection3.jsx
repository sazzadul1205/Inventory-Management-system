// frontend/PricingPlans/EnterprisePlanSection/EnterprisePlanSection3.jsx

/**
 * Enterprise Plan Section Component - Comparison & ROI Focused
 * A comprehensive enterprise plan comparison showcase featuring:
 * - Animated ROI metrics dashboard with scroll-triggered counters
 * - Plan comparison toggle (Plan Comparison / Vendor Comparison)
 * - Detailed feature comparison tables with visual indicators
 * - Flexible deployment options grid
 * - Enterprise ROI calculator section
 * - Security & compliance badges showcase
 * - Client logos trust indicators
 * - Contact modal for enterprise demo requests
 * - Dark mode compatible and fully responsive
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { useState, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import {
  FaBuilding,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaHeadset
} from 'react-icons/fa';
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineCloud,
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineXCircle,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdSecurity, MdCloudQueue, MdDataUsage } from 'react-icons/md';

const EnterprisePlanSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [isVisible, setIsVisible] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState({});
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedComparison, setSelectedComparison] = useState('plans');

  // ==================== MEMOIZED DATA ====================
  const comparisonData = config?.comparisonData || [];
  const vendorComparison = config?.vendorComparison || [];
  const roiMetrics = useMemo(() => config?.roiMetrics || [], [config]);
  const deploymentOptions = config?.deploymentOptions || [];
  const complianceBadges = config?.complianceBadges || [];
  const clientLogos = config?.clientLogos || [];

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
      'cloud': MdCloudQueue,
      'database': MdDataUsage,
      'server': HiOutlineServer,
    };
    const IconComponent = icons[iconName] || FaBuilding;
    return <IconComponent className={className} />;
  };

  /**
   * Get ROI metric icon by name
   * @param {string} iconName - Name of the ROI metric icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getRoiIcon = (iconName, className = "w-8 h-8") => {
    const roiIcons = {
      'chart': HiOutlineChartBar,
      'clock': HiOutlineClock,
      'trending': HiOutlineTrendingUp,
    };
    const IconComponent = roiIcons[iconName] || HiOutlineChartBar;
    return <IconComponent className={className} />;
  };

  /**
   * Get compliance badge icon by name
   * @param {string} badgeName - Name of the compliance badge
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getComplianceIcon = (badgeName, className = "w-5 h-5") => {
    const complianceIcons = {
      'SOC 2 Type II': HiOutlineShieldCheck,
      'ISO 27001': HiOutlineShieldCheck,
      'GDPR': HiOutlineShieldCheck,
      'HIPAA': HiOutlineShieldCheck,
    };
    const IconComponent = complianceIcons[badgeName] || HiOutlineShieldCheck;
    return <IconComponent className={className} />;
  };

  /**
   * Get deployment icon by name
   * @param {string} iconName - Name of the deployment icon
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getDeploymentIcon = (iconName, className = "w-8 h-8") => {
    const deploymentIcons = {
      'cloud': HiOutlineCloud,
      'onprem': HiOutlineServer,
      'hybrid': HiOutlineDatabase,
    };
    const IconComponent = deploymentIcons[iconName] || HiOutlineCloud;
    return <IconComponent className={className} />;
  };

  // ==================== INTERSECTION OBSERVER ====================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('enterprise-metrics');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // ==================== ANIMATE ROI METRICS ====================
  useEffect(() => {
    if (isVisible) {
      roiMetrics.forEach((metric, index) => {
        const targetValue = parseInt(metric.value.replace(/[^0-9.-]/g, '')) || 0;
        const suffix = metric.value.replace(/[0-9.-]/g, '');
        let current = 0;
        const increment = targetValue / 50;

        const interval = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setAnimatedMetrics(prev => ({ ...prev, [index]: metric.value }));
            clearInterval(interval);
          } else {
            setAnimatedMetrics(prev => ({ ...prev, [index]: Math.floor(current) + suffix }));
          }
        }, 30);

        return () => clearInterval(interval);
      });
    }
  }, [isVisible, roiMetrics]);

  // ==================== MODAL HANDLERS ====================
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showContactForm) {
        setShowContactForm(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showContactForm]);

  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showContactForm]);

  return (
    <section
      id="enterprise-metrics"
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Enterprise Plan Comparison"
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
              {config?.badge?.text || "Enterprise Comparison"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Why'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Enterprises'}
            </span>{' '}
            {config?.title?.suffix || 'Choose Us'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Compare features, see ROI metrics, and discover why leading enterprises trust our platform."}
          </p>
        </div>

        {/* ==================== ROI METRICS DASHBOARD ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {roiMetrics.map((metric, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                {getRoiIcon(metric.icon, "w-8 h-8")}
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {animatedMetrics[index] || metric.value}
              </div>
              <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* ==================== COMPARISON TOGGLE ==================== */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedComparison('plans')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedComparison === 'plans'
              ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            aria-label="Show plan comparison"
          >
            Plan Comparison
          </button>
          <button
            onClick={() => setSelectedComparison('vendors')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedComparison === 'vendors'
              ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            aria-label="Show vendor comparison"
          >
            Vendor Comparison
          </button>
        </div>

        {/* ==================== PLAN COMPARISON TABLE ==================== */}
        {selectedComparison === 'plans' && (
          <div className="mb-12 overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Professional</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {comparisonData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {item.starter === true ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : item.starter === false ? (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.starter}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.professional === true ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : item.professional === false ? (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.professional}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50 dark:bg-blue-900/10">
                      {item.enterprise === true ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{item.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ==================== VENDOR COMPARISON TABLE ==================== */}
        {selectedComparison === 'vendors' && vendorComparison.length > 0 && (
          <div className="mb-12 overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Capability</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Competitor A</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Competitor B</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">Our Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {vendorComparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{item.capability}</td>
                    <td className="px-6 py-4 text-center">
                      {item.competitorA === true ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.competitorB === true ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50 dark:bg-blue-900/10">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ==================== DEPLOYMENT OPTIONS ==================== */}
        {deploymentOptions.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Flexible Deployment Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deploymentOptions.map((option, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center">
                  <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                    {getDeploymentIcon(option.icon, "w-10 h-10")}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{option.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{option.description}</p>
                  <ul className="text-left space-y-2">
                    {option.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <HiOutlineCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== ROI CALCULATOR SECTION ==================== */}
        <div className="mb-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-blue-200 mb-3">
                <HiOutlineChartBar className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Enterprise ROI Calculator</h3>
              <p className="text-blue-100 mb-4">
                See exactly how much your organization could save with our enterprise platform.
              </p>
              <div className="flex gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold">35-45%</div>
                  <div className="text-xs text-blue-200">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">6-9 mo</div>
                  <div className="text-xs text-blue-200">Payback Period</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">3.2x</div>
                  <div className="text-xs text-blue-200">Average ROI</div>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                aria-label="Get custom quote"
              >
                Get Custom Quote
                <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Custom Enterprise Pricing</div>
                <p className="text-blue-100 text-sm mb-4">Tailored to your specific requirements</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/20 rounded-lg p-2">Volume-based pricing</div>
                  <div className="bg-white/20 rounded-lg p-2">Annual contracts</div>
                  <div className="bg-white/20 rounded-lg p-2">Multi-year discounts</div>
                  <div className="bg-white/20 rounded-lg p-2">Custom SLA options</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SECURITY & COMPLIANCE BADGES ==================== */}
        {complianceBadges.length > 0 && (
          <div className="mb-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Enterprise Security & Compliance</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {complianceBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="text-blue-600 dark:text-blue-400">
                    {getComplianceIcon(badge.name, "w-5 h-5")}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CLIENT LOGOS ==================== */}
        {clientLogos.length > 0 && (
          <div className="mb-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Trusted by leading enterprises worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60 dark:opacity-50">
              {clientLogos.map((logo, index) => (
                <div key={index} className="flex flex-col items-center transition-all duration-300 hover:opacity-100 hover:scale-110">
                  <div className="text-gray-500 dark:text-gray-400 mb-1">
                    {getIcon(logo.icon, "w-8 h-8")}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineBuildingOffice className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Ready to transform your enterprise operations?"}
            </span>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              aria-label="Schedule enterprise demo"
            >
              {config?.ctaButtonText || "Schedule Enterprise Demo"}
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ==================== CONTACT MODAL ==================== */}
      {showContactForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowContactForm(false)}
          role="dialog"
          aria-label="Enterprise demo request form"
          aria-modal="true"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Demo Request</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                aria-label="Close modal"
              >
                <HiOutlineXCircle className="w-6 h-6" />
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
                  <option>100-500 employees</option>
                  <option>500-1,000 employees</option>
                  <option>1,000-5,000 employees</option>
                  <option>5,000+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Inventory Management System</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., SAP, Oracle, Custom"
                />
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
                Request Demo
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

export default EnterprisePlanSection3;