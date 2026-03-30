// frontend/SuccessStories/ClientSuccessMetricsSection/ClientSuccessMetricsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
  HiArrowRight,
  HiOutlineDownload,
} from 'react-icons/hi';

const ClientSuccessMetricsSection3 = ({ config }) => {
  const [selectedMetric, setSelectedMetric] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const sectionRef = useRef(null);

  const metrics = config?.metrics || [];
  const detailedMetrics = config?.detailedMetrics || [];
  const caseStudies = config?.caseStudies || [];
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      metrics.forEach((metric, index) => {
        const targetValue = parseInt(metric.value.replace(/[^0-9.-]/g, '')) || 0;
        const suffix = metric.value.replace(/[0-9.-]/g, '');
        let current = 0;
        const increment = targetValue / 50;

        const interval = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setAnimatedValues(prev => ({ ...prev, [index]: metric.value }));
            clearInterval(interval);
          } else {
            setAnimatedValues(prev => ({ ...prev, [index]: Math.floor(current) + suffix }));
          }
        }, 30);

        return () => clearInterval(interval);
      });
    }
  }, [isVisible, metrics]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Client Success Metrics & Case Studies"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Hero Metrics - Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{metric.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {animatedValues[index] || metric.value}
              </div>
              <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Metrics with Interactive Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {config?.detailedTitle || "Performance by Industry"}
            </h3>
            <div className="space-y-6">
              {detailedMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${selectedMetric === index
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  onClick={() => setSelectedMetric(index)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{metric.icon}</span>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {metric.industry}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">
                      {metric.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 rounded-full h-2 transition-all duration-1000"
                      style={{ width: metric.percentage }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>{metric.label}</span>
                    <span>{metric.improvement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {config?.caseStudyTitle || "Featured Case Study"}
            </h3>
            {caseStudies[selectedMetric] && (
              <div className="bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <div className="text-4xl mb-3">{caseStudies[selectedMetric].icon}</div>
                  <div className="text-sm text-blue-600 font-semibold mb-1">
                    {caseStudies[selectedMetric].industry}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {caseStudies[selectedMetric].title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {caseStudies[selectedMetric].description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {caseStudies[selectedMetric].results?.map((result, idx) => (
                      <div key={idx}>
                        <div className="text-lg font-bold text-blue-600">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={caseStudies[selectedMetric].link}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read Full Case Study
                    <HiArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ROI Impact Calculator */}
        {config?.showROICalculator && (
          <div className="mb-16 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 text-white">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-2xl font-bold mb-2">
                  {config?.roiTitle || "Calculate Your Potential ROI"}
                </h3>
                <p className="text-blue-100 text-sm mb-6">
                  {config?.roiDescription || "Based on data from 500+ implementations, see what you could achieve."}
                </p>
                <div className="flex gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold">{config?.avgROI || "2.5x"}</div>
                    <div className="text-xs text-blue-200">Average ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{config?.paybackPeriod || "4-6"}</div>
                    <div className="text-xs text-blue-200">Months Payback</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{config?.savingsRange || "25-35%"}</div>
                    <div className="text-xs text-blue-200">Cost Reduction</div>
                  </div>
                </div>
                <Link
                  href={config?.roiLink || "/roi-calculator"}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Calculate Your ROI
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">📊</div>
                  <div className="text-white font-semibold">Custom ROI Analysis</div>
                  <div className="text-sm text-blue-200 mt-1">Tailored to your business</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {config?.testimonialsTitle || "What Our Clients Say"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                      {i < testimonial.rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">
                  "{testimonial.quote}"
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
                {testimonial.result && (
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-xs text-gray-500">Result:</span>
                    <span className="text-xs font-semibold text-blue-600 ml-1">
                      {testimonial.result}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust & Recognition */}
        {config?.showTrust && (
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 mb-4">
              {config?.trustText || "Recognized by industry leaders and analysts"}
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {config?.trustBadges?.map((badge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <span className="text-xs text-gray-500">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Download Report CTA */}
        {config?.showDownload && (
          <div className="text-center mt-12">
            <Link
              href={config?.downloadLink || "/success-report"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              <HiOutlineDownload className="w-5 h-5" />
              {config?.downloadText || "Download Full Success Report"}
            </Link>
          </div>
        )}
      </div>

      {/* Required CSS */}
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

export default ClientSuccessMetricsSection3;