// page/frontend/Home/TrustSignalsSection/TrustSignalsSection2.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineBadgeCheck,
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineClock,
  HiOutlineHeart,
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineLockClosed,
  HiOutlineServer,
  HiOutlineScale,
} from 'react-icons/hi';
import { HiOutlineTrophy } from "react-icons/hi2";
import { FaAward, FaCertificate, FaRibbon } from 'react-icons/fa';


const TrustSignalsSection2 = ({ config }) => {
  // State for active tab
  const [activeTab, setActiveTab] = useState(0);

  // Get icon for certification
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className} text-green-600 dark:text-green-400`;

    switch (iconName) {
      case 'shield':
        return <HiOutlineShieldCheck className={iconClasses} />;
      case 'lock':
        return <HiOutlineLockClosed className={iconClasses} />;
      case 'server':
        return <HiOutlineServer className={iconClasses} />;
      case 'scale':
        return <HiOutlineScale className={iconClasses} />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} />;
      case 'trophy':
        return <HiOutlineTrophy className={iconClasses} />;
      case 'heart':
        return <HiOutlineHeart className={iconClasses} />;
      case 'star':
        return <HiOutlineStar className={iconClasses} />;
      default:
        return <HiOutlineBadgeCheck className={iconClasses} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Trust signals section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-green-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "TRUST & SECURITY"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            {config?.description}
          </p>
        </div>

        {/* Stats with Icons */}
        {config?.stats?.show && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center group hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-linear-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon, "w-8 h-8")}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Tabs */}
        {config?.tabs?.show && (
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {config.tabs.items.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === index
                    ? 'bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {config.tabs.items[activeTab] && (
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {config.tabs.items[activeTab].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {config.tabs.items[activeTab].description}
                    </p>
                    <ul className="space-y-3">
                      {config.tabs.items[activeTab].points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {config.tabs.items[activeTab].badges?.map((badge, idx) => (
                      <div key={idx} className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                        <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-2">
                          {badge.icon === 'award' && <FaAward className="w-6 h-6 text-green-600" />}
                          {badge.icon === 'certificate' && <FaCertificate className="w-6 h-6 text-green-600" />}
                          {badge.icon === 'ribbon' && <FaRibbon className="w-6 h-6 text-green-600" />}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Certification Grid */}
        {config?.certifications?.show && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.certifications.title}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.certifications.items.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-linear-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <FaCertificate className="w-7 h-7 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                      {cert.year}
                    </span>
                    {cert.link && (
                      <Link href={cert.link} className="text-xs text-gray-500 hover:text-green-600 dark:text-gray-500 dark:hover:text-green-400">
                        View Certificate →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security Features */}
        {config?.security?.show && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.security.title}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {config.security.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mr-4 shrink-0">
                    {getIcon(item.icon, "w-6 h-6")}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Customer Logos / Trusted By */}
        {config?.trustedBy?.show && (
          <div className="mb-16">
            <p className="text-sm text-gray-500 dark:text-gray-500 text-center mb-8 uppercase tracking-wider">
              {config.trustedBy.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {config.trustedBy.logos.map((logo, index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-8 md:h-10 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Carousel */}
        {config?.testimonials?.show && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.testimonials.title}
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {config.testimonials.items.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <HiOutlineStar
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compliance Badges */}
        {config?.compliance?.show && (
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {config.compliance.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {config.compliance.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full"
                  >
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        {config?.cta?.show && (
          <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {config.cta.title}
                </h3>
                <p className="text-green-100 mb-6 max-w-2xl">
                  {config.cta.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link
                    href={config.cta.primaryButton.url}
                    className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {config.cta.primaryButton.text}
                    <HiOutlineArrowRight className="ml-2" />
                  </Link>
                  {config.cta.secondaryButton?.show && (
                    <Link
                      href={config.cta.secondaryButton.url}
                      className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      {config.cta.secondaryButton.text}
                    </Link>
                  )}
                </div>
              </div>

              {/* Social Proof */}
              <div className="lg:w-64 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex -space-x-2">
                    {config.cta.avatars?.map((avatar, idx) => (
                      <img
                        key={idx}
                        src={avatar}
                        alt="Customer"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">1,500+</span>
                </div>
                <p className="text-xs text-center text-green-100">
                  Join these companies that trust us
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default TrustSignalsSection2;