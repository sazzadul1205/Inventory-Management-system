// frontend/SuccessStories/ClientSuccessMetricsSection/ClientSuccessMetricsSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineCurrencyDollar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineTrendingUp,
} from 'react-icons/hi';

const ClientSuccessMetricsSection1 = ({ config }) => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const metrics = config?.metrics || [];
  const testimonials = config?.testimonials || [];

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

    const section = document.getElementById('metrics-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      metrics.forEach((metric, index) => {
        const targetValue = parseInt(metric.value.replace(/[^0-9.-]/g, '')) || 0;
        const suffix = metric.value.replace(/[0-9.-]/g, '');

        let start = 0;
        const duration = 2000;
        const increment = targetValue / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= targetValue) {
            setAnimatedValues(prev => ({
              ...prev,
              [index]: metric.value
            }));
            clearInterval(timer);
          } else {
            setAnimatedValues(prev => ({
              ...prev,
              [index]: Math.floor(start) + suffix
            }));
          }
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible, metrics]);

  return (
    <section
      id="metrics-section"
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Client Success Metrics Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50/30 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Success metrics badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="relative group text-center p-8 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{metric.icon}</div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {animatedValues[index] || metric.value}
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {metric.label}
              </div>

              {/* Description */}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {metric.description}
              </p>

              {/* Trend indicator */}
              {metric.trend && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-green-600 text-xs">
                  <HiOutlineTrendingUp className="w-3 h-3" />
                  <span>{metric.trend}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Featured Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {config?.testimonialsTitle || "What Our Clients Say"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="text-3xl text-blue-400 mb-3">"</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-lg">
                    {testimonial.avatar || testimonial.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Highlights */}
        {config?.showHighlights && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">🏆</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {config?.highlightTitle || "Key Achievements"}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {config?.highlights?.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">📊</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {config?.industryBreakdownTitle || "By Industry"}
                  </h3>
                </div>
                <div className="space-y-4">
                  {config?.industryBreakdown?.map((industry, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{industry.name}</span>
                        <span className="text-blue-600 font-semibold">{industry.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 rounded-full h-2 transition-all duration-1000"
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

        {/* ROI Calculator Preview */}
        {config?.showROI && (
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <HiOutlineCurrencyDollar className="w-6 h-6" />
                  <h3 className="font-bold text-xl">Calculate Your Potential ROI</h3>
                </div>
                <p className="text-blue-100 text-sm mb-4">
                  Based on our clients' success metrics, see what you could achieve:
                </p>
                <div className="flex flex-wrap gap-6">
                  {config?.roiMetrics?.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-xs text-blue-200">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <Link
                  href={config?.roiLink || "/roi-calculator"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Calculate Your ROI
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        {config?.showTrustIndicators && (
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              {config?.trustText || "Trusted by industry leaders worldwide"}
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {config?.trustLogos?.map((logo, index) => (
                <div key={index} className="text-2xl opacity-70 hover:opacity-100 transition-opacity">
                  {logo.icon}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
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