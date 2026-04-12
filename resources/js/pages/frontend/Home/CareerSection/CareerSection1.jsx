// page/frontend/Home/CareerSection/CareerSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
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
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
              )}
              <HiOutlineBriefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-700 dark:text-gray-300" />
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-blue-600 dark:text-blue-400 relative inline-block">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Why Join Us */}
        {config?.whyJoin?.show && config?.whyJoin?.items && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.whyJoin.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.whyJoin.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    {item.icon === 'users' && <HiOutlineUserGroup className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />}
                    {item.icon === 'heart' && <HiOutlineHeart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />}
                    {item.icon === 'lightning' && <HiOutlineLightningBolt className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />}
                    {item.icon === 'academic' && <HiOutlineAcademicCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Open Positions */}
        {config?.positions?.show && config?.positions?.items && (
          <div className="mb-16 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6 md:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                {config.positions.title}
              </h3>
              <Link
                href={config.positions.viewAllUrl || '/careers'}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center text-sm sm:text-base"
              >
                View All Positions
                <HiOutlineArrowRight className="ml-1 sm:ml-2" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {config.positions.items.map((position, index) => (
                <div
                  key={position.id || index}
                  className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3 sm:mb-4">
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                        {position.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                        {position.department}
                      </p>
                    </div>
                    {position.isNew && (
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center">
                        <HiOutlineSparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                        New
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                      <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-500" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                      <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-500" />
                      {position.type}
                    </div>
                    {position.salary && (
                      <div className="flex items-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        <HiOutlineCurrencyDollar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-500" />
                        {position.salary}
                      </div>
                    )}
                  </div>

                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                    {position.description}
                  </p>

                  <Link
                    href={position.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-[10px] sm:text-xs"
                  >
                    Apply Now
                    <HiOutlineArrowRight className="ml-0.5 sm:ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Life at Company */}
        {config?.life?.show && (
          <div className="mb-16 sm:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                  {config.life.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {config.life.description}
                </p>

                <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6">
                  {config.life.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <HiOutlineBadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 sm:mr-3 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={config.life.link}
                  className="inline-flex items-center bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  Learn More About Our Culture
                  <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {config.life.images.map((image, index) => (
                  <div
                    key={index}
                    className={`rounded-lg sm:rounded-xl overflow-hidden shadow-lg ${index === 0 ? 'row-span-2' : ''}`}
                  >
                    <img
                      src={image}
                      alt="Life at company"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Perks & Benefits */}
        {config?.perks?.show && config?.perks?.items && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.perks.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.perks.items.map((perk, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                    {perk.icon === 'health' && <HiOutlineHeart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-blue-600 dark:text-blue-400" />}
                    {perk.icon === 'office' && <HiOutlineOfficeBuilding className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-blue-600 dark:text-blue-400" />}
                    {perk.icon === 'clock' && <HiOutlineClock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-blue-600 dark:text-blue-400" />}
                    {perk.icon === 'academic' && <HiOutlineAcademicCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-0.5 sm:mb-1">{perk.title}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        {config?.cta?.show && (
          <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative text-center max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                {config.cta.title}
              </h3>
              <p className="text-blue-100 text-sm sm:text-base mb-6 sm:mb-8">
                {config.cta.description}
              </p>
              <Link
                href={config.cta.button.url}
                className="inline-flex items-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                {config.cta.button.text}
                <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
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