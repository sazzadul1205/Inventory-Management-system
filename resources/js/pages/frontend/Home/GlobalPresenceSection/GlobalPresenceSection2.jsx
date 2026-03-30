// page/frontend/Home/GlobalPresenceSection/GlobalPresenceSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
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
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'building':
        return <HiOutlineOfficeBuilding className={iconClasses} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUserGroup className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Global presence section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-emerald-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "WORLDWIDE REACH"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
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
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon, "w-8 h-8")}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Continent Tabs */}
        {config?.continents && (
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {config.continents.map((continent, index) => (
                <button
                  key={continent.id || index}
                  onClick={() => setActiveContinent(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeContinent === index
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
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={config.continents[activeContinent].image}
                  alt={config.continents[activeContinent].name}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                      {config.continents[activeContinent].officeCount}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Offices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                      {config.continents[activeContinent].countryCount}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Countries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {config.continents[activeContinent].name}
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                {config.continents[activeContinent].description}
              </p>

              {/* Headquarters */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-3 shrink-0">
                  <HiOutlineOfficeBuilding className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Headquarters</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {config.continents[activeContinent].headquarters}
                  </p>
                </div>
              </div>

              {/* Coverage */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-3 shrink-0">
                  <HiOutlineGlobeAlt className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Coverage</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {config.continents[activeContinent].coverage}
                  </p>
                </div>
              </div>

              {/* Timezones */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-3 shrink-0">
                  <HiOutlineClock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Time Zones</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {config.continents[activeContinent].timezones}
                  </p>
                </div>
              </div>

              {/* View Offices Button */}
              <div className="pt-4">
                <Link
                  href={config.continents[activeContinent].link || '#'}
                  className="inline-flex items-center bg-linear-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg group"
                >
                  View All Offices in {config.continents[activeContinent].name}
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Office Locations Grid */}
        {config?.offices?.show && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Key Office Locations
              </h3>
              <Link
                href="/locations"
                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold flex items-center"
              >
                View All Locations
                <HiOutlineArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.offices.items?.map((office, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mr-3 shrink-0">
                      <HiOutlineLocationMarker className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {office.city}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {office.address}
                      </p>
                      <div className="flex items-center space-x-3">
                        <a
                          href={`tel:${office.phone}`}
                          className="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center"
                        >
                          <HiOutlinePhone className="w-3 h-3 mr-1" />
                          Call
                        </a>
                        {office.email && (
                          <a
                            href={`mailto:${office.email}`}
                            className="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center"
                          >
                            <HiOutlineMail className="w-3 h-3 mr-1" />
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
          <div className="mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {config.timezone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {config.timezone.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {config.timezone.zones?.map((zone, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                      >
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:w-64 text-center">
                  <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    {config.timezone.coverage}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Hours Coverage
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global Support CTA */}
        {config?.cta?.show && (
          <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {config.cta.title}
                </h3>
                <p className="text-emerald-100 mb-6 max-w-2xl">
                  {config.cta.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link
                    href={config.cta.primaryButton.url}
                    className="inline-flex items-center bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
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

              {/* Social Connect */}
              {config.cta.social?.show && (
                <div className="lg:w-64 text-center">
                  <p className="text-sm text-emerald-100 mb-3">Connect with us</p>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={config.cta.social.linkedin || "#"}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <FaLinkedinIn className="w-4 h-4" />
                    </a>
                    <a
                      href={config.cta.social.twitter || "#"}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </a>
                    <a
                      href={config.cta.social.facebook || "#"}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <FaFacebookF className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
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

export default GlobalPresenceSection2;