// page/frontend/Home/CareerSection/CareerSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineBriefcase,
  HiOutlineUserGroup,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineLightningBolt,
  HiOutlineOfficeBuilding,
  HiOutlineArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineSparkles,
} from 'react-icons/hi';

const CareerSection1 = ({ config }) => {
  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Careers section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Careers badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
              )}
              <HiOutlineBriefcase className={`w-4 h-4 mr-2 ${config.badge.textColor}`} />
              <span className={`text-sm font-medium ${config.badge.textColor}`}>
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.heading?.prefix}{' '}
            <span className={`${config?.heading?.highlightColor} relative inline-block`}>
              {config?.heading?.highlightedText}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                aria-hidden="true"
              >
                <line
                  x1="0" y1="4" x2="200" y2="4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  className={config?.heading?.highlightColor}
                />
              </svg>
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Why Join Us */}
        {config?.whyJoin?.show && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.whyJoin.title}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config.whyJoin.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-14 h-14 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon === 'users' && <HiOutlineUserGroup className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
                    {item.icon === 'heart' && <HiOutlineHeart className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
                    {item.icon === 'lightning' && <HiOutlineLightningBolt className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
                    {item.icon === 'academic' && <HiOutlineAcademicCap className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Open Positions */}
        {config?.positions?.show && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {config.positions.title}
              </h3>
              <Link
                href={config.positions.viewAllUrl || '/careers'}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center"
              >
                View All Positions
                <HiOutlineArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.positions.items.map((position, index) => (
                <div
                  key={position.id || index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {position.title}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        {position.department}
                      </p>
                    </div>
                    {position.isNew && (
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs px-2 py-1 rounded-full flex items-center">
                        <HiOutlineSparkles className="w-3 h-3 mr-1" />
                        New
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineLocationMarker className="w-4 h-4 mr-2 text-blue-500" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineClock className="w-4 h-4 mr-2 text-blue-500" />
                      {position.type}
                    </div>
                    {position.salary && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineCurrencyDollar className="w-4 h-4 mr-2 text-blue-500" />
                        {position.salary}
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {position.description}
                  </p>

                  <Link
                    href={position.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                  >
                    Apply Now
                    <HiOutlineArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Life at Company */}
        {config?.life?.show && (
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {config.life.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {config.life.description}
                </p>

                <div className="space-y-4 mb-6">
                  {config.life.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <HiOutlineBadgeCheck className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={config.life.link}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Learn More About Our Culture
                  <HiOutlineArrowRight className="ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {config.life.images.map((image, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl overflow-hidden shadow-lg ${index === 0 ? 'row-span-2' : ''
                      }`}
                  >
                    <img
                      src={image}
                      alt={`Life at ${config.life.companyName}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Perks & Benefits */}
        {config?.perks?.show && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.perks.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {config.perks.items.map((perk, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {perk.icon === 'health' && <HiOutlineHeart className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                    {perk.icon === 'office' && <HiOutlineOfficeBuilding className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                    {perk.icon === 'clock' && <HiOutlineClock className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                    {perk.icon === 'academic' && <HiOutlineAcademicCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{perk.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        {config?.cta?.show && (
          <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                {config.cta.title}
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                {config.cta.description}
              </p>
              <Link
                href={config.cta.button.url}
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {config.cta.button.text}
                <HiOutlineArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
};

export default CareerSection1;