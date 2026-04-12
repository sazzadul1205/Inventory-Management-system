// page/frontend/Home/GlobalPresenceSection/GlobalPresenceSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import {
  HiOutlineGlobeAlt,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineArrowRight,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineCalendar,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const GlobalPresenceSection3 = ({ config }) => {
  
  // State for active region
  const [activeRegion, setActiveRegion] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Get icon for region
  const getRegionIcon = (regionName) => {
    switch (regionName?.toLowerCase()) {
      case 'north america':
        return <HiOutlineGlobeAlt className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />;
      case 'europe':
        return <HiOutlineBuildingOffice className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />;
      case 'asia pacific':
        return <HiOutlineTruck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />;
      case 'middle east & africa':
        return <HiOutlineCube className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />;
      default:
        return <HiOutlineGlobeAlt className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />;
    }
  };

  // Next slide
  const nextSlide = () => {
    if (config?.featuredOffices?.items) {
      setCurrentSlide((prev) =>
        prev === config.featuredOffices.items.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Previous slide
  const prevSlide = () => {
    if (config?.featuredOffices?.items) {
      setCurrentSlide((prev) =>
        prev === 0 ? config.featuredOffices.items.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(45deg,#e5e7eb_1px,transparent_1px),linear-gradient(-45deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,#374151_1px,transparent_1px),linear-gradient(-45deg,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-teal-200 dark:bg-teal-900/20 rounded-full filter blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-emerald-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-emerald-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
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

        {/* Global Stats */}
        {config?.globalStats?.show && config?.globalStats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-16">
            {config.globalStats.items.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Main Column - Regions */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">

            {/* Region Tabs */}
            <div className="flex flex-wrap gap-1 sm:gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 sm:pb-3 md:pb-4">
              {config?.regions?.map((region, index) => (
                <button
                  key={region.id || index}
                  onClick={() => setActiveRegion(index)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-t-lg font-medium transition-all duration-300 flex items-center text-xs sm:text-sm ${activeRegion === index
                      ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                >
                  <span className="mr-1 sm:mr-2">{getRegionIcon(region.name)}</span>
                  {region.name}
                </button>
              ))}
            </div>

            {/* Active Region Content */}
            {config?.regions && config.regions[activeRegion] && (
              <div className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">

                {/* Region Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {config.regions[activeRegion].name}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm sm:text-base">
                      {config.regions[activeRegion].headquarters}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                      {config.regions[activeRegion].officeCount}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">Offices</div>
                  </div>
                </div>

                {/* Region Details Grid */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">

                  {/* Coverage */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                    <h4 className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">Coverage</h4>
                    <p className="text-sm sm:text-base text-gray-900 dark:text-white">{config.regions[activeRegion].coverage}</p>
                  </div>

                  {/* Time Zones */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                    <h4 className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">Time Zones</h4>
                    <p className="text-sm sm:text-base text-gray-900 dark:text-white">{config.regions[activeRegion].timezones}</p>
                  </div>

                  {/* Key Markets */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm sm:col-span-2">
                    <h4 className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">Key Markets</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {config.regions[activeRegion].markets?.map((market, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full text-[10px] sm:text-xs"
                        >
                          {market}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Offices Button */}
                <Link
                  href={config.regions[activeRegion].link || '#'}
                  className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group text-sm sm:text-base"
                >
                  Explore all offices in {config.regions[activeRegion].name}
                  <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}

            {/* Featured Offices Carousel */}
            {config?.featuredOffices?.show && config?.featuredOffices?.items && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    Featured Offices
                  </h3>
                  <div className="flex space-x-1.5 sm:space-x-2">
                    <button
                      onClick={prevSlide}
                      className="p-1.5 sm:p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <HiOutlineChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-1.5 sm:p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <HiOutlineChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {config.featuredOffices.items.map((office, index) => (
                      <div key={index} className="w-full shrink-0">
                        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">

                          {/* Office Image */}
                          <div className="rounded-lg sm:rounded-xl overflow-hidden h-48 sm:h-56 md:h-64">
                            <img
                              src={office.image}
                              alt={office.city}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          {/* Office Details */}
                          <div className="space-y-2 sm:space-y-3 md:space-y-4">
                            <div>
                              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                                {office.city}
                              </h4>
                              <p className="text-emerald-600 dark:text-emerald-400 text-sm sm:text-base">{office.country}</p>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                              {office.description}
                            </p>

                            <div className="space-y-1.5 sm:space-y-2">
                              <div className="flex items-center">
                                <HiOutlineLocationMarker className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-1.5 sm:mr-2 shrink-0" />
                                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{office.address}</span>
                              </div>
                              <div className="flex items-center">
                                <HiOutlinePhone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-1.5 sm:mr-2 shrink-0" />
                                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{office.phone}</span>
                              </div>
                              <div className="flex items-center">
                                <HiOutlineMail className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-1.5 sm:mr-2 shrink-0" />
                                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{office.email}</span>
                              </div>
                            </div>

                            <div className="pt-2 sm:pt-3 md:pt-4">
                              <Link
                                href={office.link || '#'}
                                className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 text-xs sm:text-sm"
                              >
                                View Office Details
                                <HiOutlineArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
                  {config.featuredOffices.items.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all rounded-full ${currentSlide === index
                          ? 'w-4 sm:w-6 md:w-8 h-1.5 sm:h-2 bg-emerald-500'
                          : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 dark:bg-gray-600'
                        }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5 sm:space-y-6 md:space-y-8">

            {/* Business Hours Card */}
            {config?.businessHours?.show && config?.businessHours?.items && (
              <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-lg sm:rounded-xl p-5 sm:p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative">
                  <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center">
                    <HiOutlineClock className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {config.businessHours.items.map((item, index) => (
                      <div key={index} className="flex flex-wrap justify-between text-xs sm:text-sm">
                        <span className="text-emerald-100">{item.region}</span>
                        <span className="font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] sm:text-xs text-emerald-100 mt-3 sm:mt-4">
                    *24/7 support available for enterprise customers
                  </p>
                </div>
              </div>
            )}

            {/* Upcoming Events */}
            {config?.events?.show && config?.events?.items && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <HiOutlineCalendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-emerald-500" />
                  Upcoming Events
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {config.events.items.map((event, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex flex-col items-center justify-center mr-2 sm:mr-3 shrink-0">
                        <span className="text-[10px] sm:text-xs text-emerald-600 dark:text-emerald-400">{event.month}</span>
                        <span className="text-sm sm:text-base md:text-lg font-bold text-emerald-600 dark:text-emerald-400">{event.day}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">{event.title}</h4>
                        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mb-0.5 sm:mb-1">{event.location}</p>
                        <Link
                          href={event.link}
                          className="text-[10px] sm:text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regional Contacts */}
            {config?.contacts?.show && config?.contacts?.items && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Regional Contacts
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {config.contacts.items.map((contact, index) => (
                    <div key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-3 sm:pb-4 last:pb-0">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{contact.region}</p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{contact.name}</p>
                      <p className="text-[10px] sm:text-xs text-emerald-600 dark:text-emerald-400">{contact.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Social Connect */}
            {config?.social?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Connect Globally
                </h3>
                <div className="flex justify-center space-x-2 sm:space-x-3">
                  <a
                    href={config.social.linkedin || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={config.social.twitter || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <FaTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={config.social.facebook || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  >
                    <FaFacebookF className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* View All Button */}
        {config?.viewAll?.show && config?.viewAll?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.viewAll.url}
              className="inline-flex items-center bg-linear-to-r from-emerald-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              {config.viewAll.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default GlobalPresenceSection3;