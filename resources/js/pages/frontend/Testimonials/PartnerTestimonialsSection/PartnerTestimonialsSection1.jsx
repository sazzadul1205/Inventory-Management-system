// frontend/Testimonials/PartnerTestimonialsSection/PartnerTestimonialsSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineStar,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineBookmark,
  HiOutlineBadgeCheck
} from 'react-icons/hi';
import { MdOutlineHandshake } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

const PartnerTestimonialsSection1 = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  const [savedTestimonials, setSavedTestimonials] = useState([]);

  const testimonials = config?.testimonials || [];
  const categories = config?.categories || ['all', 'technology', 'implementation', 'reseller', 'strategic'];
  const stats = config?.stats || [];

  useEffect(() => {
    const saved = localStorage.getItem('savedPartnerTestimonials');
    if (saved) {
      setSavedTestimonials(JSON.parse(saved));
    }
  }, []);

  const handleSaveTestimonial = (id) => {
    setSavedTestimonials(prev => {
      const newSaved = prev.includes(id)
        ? prev.filter(savedId => savedId !== id)
        : [...prev, id];
      localStorage.setItem('savedPartnerTestimonials', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const filteredTestimonials = testimonials.filter(testimonial => {
    return activeCategory === 'all' || testimonial.category === activeCategory;
  });

  const getCategoryIcon = (category) => {
    const icons = {
      technology: '🔌',
      implementation: '⚙️',
      reseller: '🤝',
      strategic: '🏆'
    };
    return icons[category] || '🤝';
  };

  const getCategoryColor = (category) => {
    const colors = {
      technology: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      implementation: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      reseller: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      strategic: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <HiOutlineStar
            key={i}
            className={`w-4 h-4 ${i < rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300 dark:text-gray-600'
              }`}
          />
        ))}
      </div>
    );
  };

  const featuredTestimonial = filteredTestimonials.find(t => t.featured === true) || filteredTestimonials[0];

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Partner Testimonials"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
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

        {/* Partner Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${activeCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                }`}
            >
              <span>{getCategoryIcon(category)}</span>
              {category === 'all' ? 'All Partners' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Featured Partner Testimonial */}
        {featuredTestimonial && (
          <div className="mb-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 p-8 lg:p-10 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <HiOutlineBadgeCheck className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm text-white/80">Featured Partner</span>
                </div>
                <FaQuoteLeft className="w-10 h-10 text-white/30 mb-3" />
                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                  "{featuredTestimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    {featuredTestimonial.avatar || featuredTestimonial.icon}
                  </div>
                  <div>
                    <div className="font-bold text-xl">{featuredTestimonial.author}</div>
                    <div className="text-white/80">{featuredTestimonial.role}, {featuredTestimonial.company}</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 p-8 flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-3">{getCategoryIcon(featuredTestimonial.category)}</div>
                <div className="text-white font-bold text-2xl mb-1">{featuredTestimonial.partnerType}</div>
                <div className="text-white/80 text-sm">Partner since {featuredTestimonial.partnerSince}</div>
                {featuredTestimonial.results && (
                  <div className="mt-4 space-y-2">
                    {featuredTestimonial.results.map((result, idx) => (
                      <div key={idx} className="text-sm text-white/90">{result}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getCategoryColor(testimonial.category)}`}>
                    <span>{getCategoryIcon(testimonial.category)}</span>
                    {testimonial.partnerType}
                  </span>
                  <button
                    onClick={() => handleSaveTestimonial(testimonial.id)}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <HiOutlineBookmark
                      className={`w-4 h-4 ${savedTestimonials.includes(testimonial.id) ? 'fill-blue-600 text-blue-600' : ''}`}
                    />
                  </button>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-lg">
                    {testimonial.avatar || testimonial.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>

                {testimonial.rating && (
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4">
                  "{testimonial.quote}"
                </p>

                {testimonial.results && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-700 dark:text-green-400">
                        {testimonial.results[0]}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <HiOutlineCalendar className="w-3 h-3" />
                    Partner since {testimonial.partnerSince}
                  </div>
                  <button
                    onClick={() => setExpandedId(expandedId === testimonial.id ? null : testimonial.id)}
                    className="text-blue-600 text-xs font-semibold hover:underline"
                  >
                    {expandedId === testimonial.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>

                {expandedId === testimonial.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {testimonial.fullQuote || testimonial.quote}
                    </p>
                    {testimonial.collaboration && (
                      <div className="mt-3">
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Collaboration Highlights:</div>
                        <ul className="space-y-1">
                          {testimonial.collaboration.map((item, idx) => (
                            <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                              <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Link
                      href={testimonial.link}
                      className="inline-flex items-center gap-1 text-blue-600 text-xs font-semibold mt-3 hover:gap-2 transition-all"
                    >
                      Learn More
                      <HiArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Partner Program CTA */}
        {config?.showPartnerProgram && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <MdOutlineHandshake className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.partnerCtaText || "Ready to become a partner?"}
              </span>
              <Link
                href={config?.partnerCtaLink || "/partners"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.partnerCtaButtonText || "Join Our Partner Program"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS */}
      <style>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default PartnerTestimonialsSection1;