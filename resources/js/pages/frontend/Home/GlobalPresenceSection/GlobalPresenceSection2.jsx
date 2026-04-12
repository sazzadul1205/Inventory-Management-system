// page/frontend/Home/GlobalPresenceSection/GlobalPresenceSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import {
  HiOutlineGlobeAlt,
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineArrowRight,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineSparkles,
} from 'react-icons/hi';

const GlobalPresenceSection2 = ({ config }) => {
  
  // State for active continent
  const [activeContinent, setActiveContinent] = useState(0);

  // Get icon component
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-emerald-600 dark:text-emerald-400`;

    switch (iconName) {
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'building':
        return <HiOutlineOfficeBuilding className={iconClasses} />;
      case 'users':
        return <HiOutlineUserGroup className={iconClasses} />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} />;
      default:
        return <HiOutlineGlobeAlt className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-emerald-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Stats with Icons */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8")}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Continent Tabs */}
        {config?.continents && config.continents.length > 0 && (
          <div className="mb-10 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {config.continents.map((continent, index) => (
                <button
                  key={continent.id || index}
                  onClick={() => setActiveContinent(index)}
                  className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${activeContinent === index
                      ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                >
                  {continent.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active Continent Content */}
        {config?.continents && config.continents[activeContinent] && (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">

            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={config.continents[activeContinent].image}
                  alt={config.continents[activeContinent].name}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 md:-bottom-6 md:-right-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-400">
                      {config.continents[activeContinent].officeCount}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Offices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-400">
                      {config.continents[activeContinent].countryCount}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Countries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {config.continents[activeContinent].name}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {config.continents[activeContinent].description}
              </p>

              {/* Headquarters */}
              <div className="flex items-start">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shrink-0">
                  <HiOutlineOfficeBuilding className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Headquarters</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                    {config.continents[activeContinent].headquarters}
                  </p>
                </div>
              </div>

              {/* Coverage */}
              <div className="flex items-start">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shrink-0">
                  <HiOutlineGlobeAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Coverage</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                    {config.continents[activeContinent].coverage}
                  </p>
                </div>
              </div>

              {/* Timezones */}
              <div className="flex items-start">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shrink-0">
                  <HiOutlineClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Time Zones</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                    {config.continents[activeContinent].timezones}
                  </p>
                </div>
              </div>

              {/* View Offices Button */}
              <div className="pt-2 sm:pt-4">
                <Link
                  href={config.continents[activeContinent].link || '#'}
                  className="inline-flex items-center bg-linear-to-r from-emerald-500 to-teal-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg group text-sm sm:text-base"
                >
                  View All Offices in {config.continents[activeContinent].name}
                  <HiOutlineArrowRight className="ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Office Locations Grid */}
        {config?.offices?.show && config?.offices?.items && (
          <div className="mb-16 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6 md:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Key Office Locations
              </h3>
              <Link
                href="/locations"
                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold flex items-center text-sm sm:text-base"
              >
                View All Locations
                <HiOutlineArrowRight className="ml-1 sm:ml-2" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {config.offices.items.map((office, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3 shrink-0">
                      <HiOutlineLocationMarker className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-0.5 sm:mb-1">
                        {office.city}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-1.5 sm:mb-2">
                        {office.address}
                      </p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <a
                          href={`tel:${office.phone}`}
                          className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center text-[10px] sm:text-xs"
                        >
                          <HiOutlinePhone className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                          Call
                        </a>
                        {office.email && (
                          <a
                            href={`mailto:${office.email}`}
                            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center text-[10px] sm:text-xs"
                          >
                            <HiOutlineMail className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                            Email
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timezone Coverage */}
        {config?.timezone?.show && (
          <div className="mb-16 sm:mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                    {config.timezone.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                    {config.timezone.description}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                    {config.timezone.zones?.map((zone, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-[10px] sm:text-xs md:text-sm"
                      >
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:w-56 xl:w-64 text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-1 sm:mb-2">
                    {config.timezone.coverage}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Hours Coverage
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global Support CTA */}
        {config?.cta?.show && (
          <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.cta.title}
                </h3>
                <p className="text-emerald-100 text-sm sm:text-base mb-5 sm:mb-6 max-w-2xl">
                  {config.cta.description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link
                    href={config.cta.primaryButton.url}
                    className="inline-flex items-center bg-white text-emerald-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    {config.cta.primaryButton.text}
                    <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
                  </Link>
                  {config.cta.secondaryButton?.show && (
                    <Link
                      href={config.cta.secondaryButton.url}
                      className="inline-flex items-center border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                    >
                      {config.cta.secondaryButton.text}
                    </Link>
                  )}
                </div>
              </div>

              {/* Social Connect */}
              {config.cta.social?.show && (
                <div className="lg:w-56 xl:w-64 text-center">
                  <p className="text-xs sm:text-sm text-emerald-100 mb-2 sm:mb-3">Connect with us</p>
                  <div className="flex justify-center space-x-2 sm:space-x-3">
                    <a
                      href={config.cta.social.linkedin || "#"}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <FaLinkedinIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                    <a
                      href={config.cta.social.twitter || "#"}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <FaTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                    <a
                      href={config.cta.social.facebook || "#"}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <FaFacebookF className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GlobalPresenceSection2;