// frontend/Industries/Shared/ClientSuccessMetricsSection1/ClientSuccessMetricsSection1.jsx

/**
 * Client Success Metrics Section Component
 * A versatile section to showcase key performance metrics, client testimonials,
 * and ROI calculations. Designed to be industry-agnostic and highly configurable.
 *
 * Features:
 * - Animated counter for numerical metrics
 * - Client testimonials carousel/grid
 * - ROI calculator preview
 * - Trust indicators (client logos)
 * - Fully responsive and dark-mode compatible
 *
 * All icons are from react-icons library.
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaWindows } from 'react-icons/fa';
import {
  HiOutlineTrendingUp,
  HiOutlineCurrencyDollar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineChip,
  HiOutlineCloud,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineRefresh,
  HiOutlineLightBulb,
} from 'react-icons/hi';
import { TbBrandGoogle, TbBrandAmazon, TbBrandApple } from 'react-icons/tb';

const ClientSuccessMetricsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [animatedValues, setAnimatedValues] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ==================== DATA ====================
  const metrics = useMemo(() => config?.metrics || [], [config?.metrics]);
  const testimonials = useMemo(() => config?.testimonials || [], [config?.testimonials]);

  // ==================== HELPER FUNCTIONS ====================
  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'trending': HiOutlineTrendingUp,
      'dollar': HiOutlineCurrencyDollar,
      'check': HiOutlineCheckCircle,
      'arrow': HiArrowRight,
      'star': HiOutlineStar,
      'users': HiOutlineUserGroup,
      'chart': HiOutlineChartBar,
      'chip': HiOutlineChip,
      'cloud': HiOutlineCloud,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'sparkles': HiOutlineSparkles,
      'refresh': HiOutlineRefresh,
      'bulb': HiOutlineLightBulb,
      'google': TbBrandGoogle,
      'microsoft': FaWindows,
      'amazon': TbBrandAmazon,
      'apple': TbBrandApple,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  // ==================== ANIMATION & VISIBILITY ====================
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timers = [];
      metrics.forEach((metric, index) => {
        const match = metric.value.match(/(\d+)(.*)/);
        const targetValue = match ? parseInt(match[1], 10) : 0;
        const suffix = match ? match[2] : '';

        let current = 0;
        const duration = 2000;
        const increment = targetValue / (duration / 16);

        const timer = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setAnimatedValues(prev => ({ ...prev, [index]: metric.value }));
            clearInterval(timer);
          } else {
            setAnimatedValues(prev => ({ ...prev, [index]: Math.floor(current) + suffix }));
          }
        }, 16);

        timers.push(timer);
      });

      return () => {
        timers.forEach(timer => clearInterval(timer));
      };
    }
  }, [isVisible, metrics]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Client Success Metrics Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/30 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-50/20 dark:bg-purple-900/5 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-indigo-100 dark:bg-indigo-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-indigo-200 dark:border-indigo-800'}`}
            aria-label="Section badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-indigo-700 dark:text-indigo-300'}`}>
              {config?.badge?.text || "Trusted by Industry Leaders"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Real'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-indigo-600 to-blue-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Results'}
            </span>{' '}
            {config?.title?.suffix || 'That Speak Volumes'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "See how we've helped businesses achieve remarkable growth and efficiency."}
          </p>
        </div>

        {/* ==================== METRICS GRID ==================== */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="relative group text-center p-6 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                  {getIcon(metric.icon, "w-10 h-10")}
                </div>

                {/* Animated Value */}
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 font-mono tracking-tight">
                  {animatedValues[index] !== undefined ? animatedValues[index] : metric.value}
                </div>

                {/* Label */}
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {metric.label}
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {metric.description}
                </p>

                {/* Trend Indicator */}
                {metric.trend && (
                  <div className="absolute top-3 right-3 flex items-center gap-0.5 text-green-600 dark:text-green-400 text-xs bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded-full">
                    <HiOutlineTrendingUp className="w-3 h-3" />
                    <span>{metric.trend}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ==================== FEATURED TESTIMONIALS ==================== */}
        {testimonials.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.testimonialsTitle || "What Our Clients Say"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  {/* Quote Icon */}
                  <div className="text-4xl text-indigo-400 dark:text-indigo-500 mb-3">"</div>

                  {/* Quote Text */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-5 leading-relaxed">
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      {getIcon(testimonial.icon || 'user', "w-5 h-5")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== SUCCESS HIGHLIGHTS & INDUSTRY BREAKDOWN ==================== */}
        {config?.showHighlights && (
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Key Achievements */}
              <div className="bg-linear-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800">
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-indigo-600 dark:text-indigo-400">
                    {getIcon('sparkles', "w-7 h-7")}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {config?.highlightTitle || "Key Achievements"}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {config?.highlights?.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      {getIcon("check", "w-5 h-5 text-green-500 mt-0.5 shrink-0")}
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industry Breakdown */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-indigo-600 dark:text-indigo-400">
                    {getIcon('chart', "w-7 h-7")}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {config?.industryBreakdownTitle || "Client Distribution by Industry"}
                  </h3>
                </div>
                <div className="space-y-4">
                  {config?.industryBreakdown?.map((industry, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{industry.name}</span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{industry.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-linear-to-r from-indigo-500 to-blue-500 rounded-full h-2 transition-all duration-1000"
                          style={{ width: industry.percentage }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ROI CALCULATOR PREVIEW ==================== */}
        {config?.showROI && (
          <div className="bg-linear-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 mb-16 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  {getIcon("dollar", "w-6 h-6 text-white")}
                  <h3 className="font-bold text-xl">Calculate Your Potential ROI</h3>
                </div>
                <p className="text-indigo-100 text-sm mb-5 leading-relaxed">
                  Based on our clients' success metrics, see what you could achieve with our solutions.
                </p>
                <div className="flex flex-wrap gap-6">
                  {config?.roiMetrics?.map((metric, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 min-w-25">
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-xs text-indigo-200">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Link
                  href={config?.roiLink || "/roi-calculator"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Calculate Your ROI
                  {getIcon("arrow", "w-4 h-4")}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TRUST INDICATORS ==================== */}
        {config?.showTrustIndicators && config?.trustLogos?.length > 0 && (
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 tracking-wide uppercase">
              {config?.trustText || "Trusted by industry leaders worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {config.trustLogos.map((logo, index) => (
                <div
                  key={index}
                  className="transition-all duration-300 hover:opacity-100 hover:scale-110"
                  aria-label={logo.name}
                >
                  {getIcon(logo.icon, "w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400")}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== FINAL CALL TO ACTION ==================== */}
        {config?.showFinalCta && (
          <div className="text-center mt-16">
            <Link
              href={config?.finalCtaLink || "/contact"}
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {config?.finalCtaText || "Start Your Success Story Today"}
              {getIcon("arrow", "w-5 h-5")}
            </Link>
          </div>
        )}
      </div>

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
          animation: fadeIn 0.5s ease-out;
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

export default ClientSuccessMetricsSection1;