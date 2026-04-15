/**
 * Construction Section 3 Component - Features & FAQ
 * Comprehensive construction solution showcase featuring:
 * - Interactive feature tabs with detailed descriptions
 * - Technology badges (BIM, GPS, RFID, etc.)
 * - Before/After comparison table
 * - Technology stack integrations
 * - Step-by-step how it works guide
 * - Expandable FAQ section
 * - Helpful resources library
 * 
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineQrcode,
  HiOutlineRefresh,
  HiOutlineCloud,
  HiOutlineDocumentText,
  HiOutlinePlay,
  HiOutlineDownload,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiOutlineMinus,
  HiOutlinePlus
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { TbTool, TbHelmet } from 'react-icons/tb';

const ConstructionSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [expandedFaq, setExpandedFaq] = useState(null);                                 // Currently expanded FAQ index
  const [selectedFeature, setSelectedFeature] = useState(config?.initialFeature || 0);  // Currently selected feature index

  // ==================== DATA ====================
  const faqs = config?.faqs || [];
  const features = config?.features || [];
  const benefits = config?.benefits || [];

  // ==================== HELPER FUNCTIONS ====================
  /**
   * Toggle FAQ expand/collapse
   * @param {number} index - FAQ item index
   */
  const toggleFaq = useCallback((index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  }, [expandedFaq]);

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon
   * @param {string} className - CSS classes for the icon
   * @returns {JSX.Element} Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'check': HiOutlineCheckCircle,
      'arrow': HiArrowRight,
      'chart': HiOutlineChartBar,
      'trending': HiOutlineTrendingUp,
      'users': HiOutlineUsers,
      'clock': HiOutlineClock,
      'dollar': HiOutlineCurrencyDollar,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'sparkles': HiOutlineSparkles,
      'star': HiOutlineStar,
      'qrcode': HiOutlineQrcode,
      'refresh': HiOutlineRefresh,
      'cloud': HiOutlineCloud,
      'document': HiOutlineDocumentText,
      'play': HiOutlinePlay,
      'download': HiOutlineDownload,
      'bulb': HiOutlineLightBulb,
      'building': HiOutlineBuildingOffice,
      'cog': HiOutlineCog,
      'wrench': TbTool,
      'hardhat': TbHelmet,
      'question': HiOutlineQuestionMarkCircle,
      'minus': HiOutlineMinus,
      'plus': HiOutlinePlus
    };

    const IconComponent = icons[iconName] || HiOutlineBuildingOffice;
    return <IconComponent className={className} />;
  }, []);

  // Get current selected feature
  const currentFeature = features[selectedFeature];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Construction Features Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-100 dark:bg-amber-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 dark:bg-orange-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-10 w-24 h-24 bg-amber-300/5 dark:bg-amber-500/5 rounded-full blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-orange-300/5 dark:bg-orange-500/5 rounded-full blur-2xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Features badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* ==================== FEATURE HIGHLIGHTS GRID ==================== */}
        {config?.showFeatureGrid && benefits.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex justify-center mb-3">
                  {getIcon(benefit.icon, "w-8 h-8 text-amber-600")}
                </div>
                <div className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1 font-mono">
                  {benefit.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{benefit.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== MAIN FEATURES SECTION WITH INTERACTIVE TABS ==================== */}
        {features.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Feature Navigation Sidebar */}
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFeature(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 group ${selectedFeature === index
                      ? 'bg-linear-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500 shadow-md'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }`}
                    aria-label={`View ${feature.title} details`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="shrink-0">
                        {getIcon(feature.icon, "w-6 h-6 text-amber-600")}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                          {feature.title}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                          {feature.shortDescription}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Feature Detail Panel */}
              <div className="lg:col-span-2">
                {currentFeature && (
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 transition-all duration-300 animate-fadeIn">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                        {getIcon(currentFeature.icon, "w-6 h-6 text-amber-600")}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {currentFeature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                      {currentFeature.description}
                    </p>

                    {/* Key Capabilities */}
                    {currentFeature.capabilities && currentFeature.capabilities.length > 0 && (
                      <div className="mb-5">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wide">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-2">
                          {currentFeature.capabilities.map((cap, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              {getIcon("check", "w-4 h-4 text-green-500 mt-0.5 shrink-0")}
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technology Badges */}
                    {currentFeature.technologies && currentFeature.technologies.length > 0 && (
                      <div className="mb-5 flex flex-wrap gap-2">
                        {currentFeature.technologies.map((badge, idx) => (
                          <span key={idx} className="text-xs px-2.5 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-full flex items-center gap-1">
                            {getIcon("cog", "w-3 h-3")}
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={currentFeature.link || "/demo"}
                      className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold hover:gap-3 transition-all group"
                    >
                      Learn more about {currentFeature.title}
                      {getIcon("arrow", "w-4 h-4 group-hover:translate-x-1 transition-transform")}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== BEFORE VS AFTER COMPARISON TABLE ==================== */}
        {config?.showComparison && config?.comparison && (
          <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Before Column */}
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                <div className="text-center mb-5">
                  <div className="flex justify-center mb-3">
                    {getIcon("chart", "w-10 h-10 text-gray-400")}
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">Before Our Solution</h3>
                </div>
                <ul className="space-y-3">
                  {config.comparison.before?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-red-500 mt-0.5 text-sm">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Column */}
              <div className="p-6 md:p-8">
                <div className="text-center mb-5">
                  <div className="flex justify-center mb-3">
                    {getIcon("sparkles", "w-10 h-10 text-amber-500")}
                  </div>
                  <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400">After Our Solution</h3>
                </div>
                <ul className="space-y-3">
                  {config.comparison.after?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      {getIcon("check", "w-4 h-4 text-green-500 mt-0.5 shrink-0")}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TECHNOLOGY STACK / INTEGRATIONS ==================== */}
        {config?.showTechStack && config?.techStack?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.techStackTitle || "Seamlessly Integrates With Your Construction Stack"}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {config.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:shadow-md transition-all hover:-translate-y-1 group"
                >
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                    {getIcon(tech.icon, "w-8 h-8 text-gray-500")}
                  </div>
                  <div className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== HOW IT WORKS - STEP BY STEP ==================== */}
        {config?.showHowItWorks && config?.steps?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.howItWorksTitle || "How It Works"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {/* Connector Line */}
                  {index < config.steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-linear-to-r from-amber-200 to-orange-200 dark:from-amber-800 dark:to-orange-800" aria-hidden="true" />
                  )}

                  {/* Step Number */}
                  <div className="relative z-10 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-lg font-bold text-amber-600 mx-auto mb-4">
                    {index + 1}
                  </div>

                  {/* Step Icon */}
                  <div className="flex justify-center mb-3">
                    {getIcon(step.icon, "w-8 h-8 text-amber-600")}
                  </div>

                  {/* Step Content */}
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== FAQ SECTION ==================== */}
        {config?.showFaq && faqs.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.faqTitle || "Frequently Asked Questions"}
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
                    aria-label={`Toggle answer for ${faq.question}`}
                  >
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                    <span className="text-amber-500 text-xl shrink-0">
                      {expandedFaq === index ? (
                        getIcon("minus", "w-5 h-5")
                      ) : (
                        getIcon("plus", "w-5 h-5")
                      )}
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="p-5 pt-0 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== RESOURCES SECTION ==================== */}
        {config?.showResources && config?.resources?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.resourcesTitle || "Helpful Resources"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="group p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-3">
                    {getIcon(resource.icon, "w-10 h-10 text-amber-600")}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-center group-hover:text-amber-600 transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3 leading-relaxed">
                    {resource.description}
                  </p>
                  <span className="text-sm text-amber-600 dark:text-amber-400 font-semibold inline-flex items-center justify-center gap-1 w-full group-hover:gap-2 transition-all">
                    {resource.cta}
                    {getIcon("arrow", "w-3 h-3")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-amber-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                {getIcon("building", "w-6 h-6 text-amber-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to transform your construction operations?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Started Today"}
                {getIcon("arrow", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        /* Fade In Animation */
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
        
        /* Line Clamp Utility */
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Noise Pattern Background */
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default ConstructionSection3;