// page/frontend/Home/CareerSection/CareerSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import {
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
  HiOutlineArrowRight,
  HiOutlineBadgeCheck,
  HiOutlineSparkles,
  HiOutlineGlobe,
  HiOutlineBookOpen,
  HiOutlineCake,
} from 'react-icons/hi';
import { MdOutlineCoffee } from "react-icons/md";

const CareerSection3 = ({ config }) => {
  
  // State for active tab
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Next slide
  const nextSlide = () => {
    if (config?.team?.members) {
      setCurrentSlide((prev) =>
        prev === config.team.members.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Previous slide
  const prevSlide = () => {
    if (config?.team?.members) {
      setCurrentSlide((prev) =>
        prev === 0 ? config.team.members.length - 1 : prev - 1
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
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20" />

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
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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

        {/* Featured Role */}
        {config?.featuredRole?.show && (
          <div className="mb-12 sm:mb-16">
            <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <span className="inline-flex items-center bg-white/20 text-white px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold mb-3 sm:mb-4">
                    <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    FEATURED ROLE
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                    {config.featuredRole.title}
                  </h3>
                  <p className="text-blue-100 text-sm sm:text-base mb-4 sm:mb-6">
                    {config.featuredRole.description}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center text-xs sm:text-sm">
                      <HiOutlineBriefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      <span>{config.featuredRole.department}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm">
                      <HiOutlineLocationMarker className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      <span>{config.featuredRole.location}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm">
                      <HiOutlineClock className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      <span>{config.featuredRole.type}</span>
                    </div>
                  </div>
                  <Link
                    href={config.featuredRole.link}
                    className="inline-flex items-center bg-white text-blue-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    Apply Now
                    <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
                  </Link>
                </div>
                <div className="lg:w-64 xl:w-72 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                  <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Why you'll love this role:</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {config.featuredRole.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm">
                        <HiOutlineBadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Main Column - Jobs */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">

            {/* Department Tabs */}
            {config?.departments && config.departments.length > 0 && (
              <div className="flex flex-wrap gap-1 sm:gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 sm:pb-3 md:pb-4">
                {config.departments.map((dept, index) => (
                  <button
                    key={dept.id || index}
                    onClick={() => setActiveTab(index)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-t-lg font-medium transition-all duration-300 text-xs sm:text-sm ${activeTab === index
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-500'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
            )}

            {/* Active Department Jobs */}
            {config?.departments && config.departments[activeTab] && (
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {config.departments[activeTab].name} ({config.departments[activeTab].jobs.length})
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {config.departments[activeTab].jobs.map((job, index) => (
                    <div
                      key={job.id || index}
                      className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
                        <div className="flex-1">
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                            {job.title}
                          </h4>
                          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                            <span className="flex items-center">
                              <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                              {job.type}
                            </span>
                            {job.salary && (
                              <span className="flex items-center">
                                <HiOutlineCurrencyDollar className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                                {job.salary}
                              </span>
                            )}
                          </div>
                        </div>
                        <Link
                          href={job.link}
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-xs sm:text-sm"
                        >
                          Apply
                          <HiOutlineArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5 sm:space-y-6 md:space-y-8">

            {/* Why Join Us */}
            {config?.whyJoin?.show && config?.whyJoin?.items && (
              <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl p-5 sm:p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative">
                  <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center">
                    <HiOutlineHeart className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    Why Join Us?
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {config.whyJoin.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm">
                        <HiOutlineBadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Perks */}
            {config?.perks?.show && config?.perks?.items && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Perks & Benefits
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {config.perks.items.map((perk, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shrink-0">
                        {perk.icon === 'health' && <HiOutlineHeart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />}
                        {perk.icon === 'remote' && <HiOutlineGlobe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />}
                        {perk.icon === 'flex' && <HiOutlineClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />}
                        {perk.icon === 'learn' && <HiOutlineBookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />}
                        {perk.icon === 'food' && <MdOutlineCoffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />}
                        {perk.icon === 'cake' && <HiOutlineCake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{perk.title}</h4>
                        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">{perk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Team Member Spotlight */}
            {config?.team?.show && config?.team?.members && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Team Spotlight
                </h3>

                {/* Carousel */}
                <div className="relative">
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 border-4 border-blue-100 dark:border-blue-900">
                      <img
                        src={config.team.members[currentSlide].image}
                        alt={config.team.members[currentSlide].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                      {config.team.members[currentSlide].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
                      {config.team.members[currentSlide].role}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 italic">
                      "{config.team.members[currentSlide].quote}"
                    </p>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-3 sm:mt-4">
                    <button
                      onClick={prevSlide}
                      className="p-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <HiOutlineArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform rotate-180" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <HiOutlineArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Social Connect */}
            {config?.social?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Follow Us
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
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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

export default CareerSection3;