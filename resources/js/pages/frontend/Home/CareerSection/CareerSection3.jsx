// page/frontend/Home/CareerSection/CareerSection3.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
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
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
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
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Careers section"
    >
      {/* Background Pattern - Magazine Style */}
      <div className="absolute inset-0 bg-magazine-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Magazine Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Careers badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
              )}
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
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {config?.heading?.highlightedText}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 6 L300 6"
                  stroke="url(#headingGradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="headingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
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

        {/* Featured Role */}
        {config?.featuredRole?.show && (
          <div className="mb-16">
            <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <HiOutlineSparkles className="w-4 h-4 mr-2" />
                    FEATURED ROLE
                  </span>
                  <h3 className="text-3xl font-bold mb-3">
                    {config.featuredRole.title}
                  </h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    {config.featuredRole.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center">
                      <HiOutlineBriefcase className="w-5 h-5 mr-2" />
                      <span>{config.featuredRole.department}</span>
                    </div>
                    <div className="flex items-center">
                      <HiOutlineLocationMarker className="w-5 h-5 mr-2" />
                      <span>{config.featuredRole.location}</span>
                    </div>
                    <div className="flex items-center">
                      <HiOutlineClock className="w-5 h-5 mr-2" />
                      <span>{config.featuredRole.type}</span>
                    </div>
                  </div>
                  <Link
                    href={config.featuredRole.link}
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Apply Now
                    <HiOutlineArrowRight className="ml-2" />
                  </Link>
                </div>
                <div className="lg:w-80 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="font-semibold mb-3">Why you'll love this role:</h4>
                  <ul className="space-y-2">
                    {config.featuredRole.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <HiOutlineBadgeCheck className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content - Magazine Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column - Jobs */}
          <div className="lg:col-span-2 space-y-8">
            {/* Department Tabs */}
            {config?.departments && (
              <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 pb-4">
                {config.departments.map((dept, index) => (
                  <button
                    key={dept.id || index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 rounded-t-lg font-medium transition-all duration-300 ${activeTab === index
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {config.departments[activeTab].name} ({config.departments[activeTab].jobs.length})
                  </h3>
                </div>

                <div className="space-y-4">
                  {config.departments[activeTab].jobs.map((job, index) => (
                    <div
                      key={job.id || index}
                      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            {job.title}
                          </h4>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center">
                              <HiOutlineLocationMarker className="w-4 h-4 mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <HiOutlineClock className="w-4 h-4 mr-1" />
                              {job.type}
                            </span>
                            {job.salary && (
                              <span className="flex items-center">
                                <HiOutlineCurrencyDollar className="w-4 h-4 mr-1" />
                                {job.salary}
                              </span>
                            )}
                          </div>
                        </div>
                        <Link
                          href={job.link}
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                        >
                          Apply
                          <HiOutlineArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Why Join Us */}
            {config?.whyJoin?.show && (
              <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <HiOutlineHeart className="w-5 h-5 mr-2" />
                    Why Join Us?
                  </h3>
                  <ul className="space-y-3">
                    {config.whyJoin.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <HiOutlineBadgeCheck className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Perks */}
            {config?.perks?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Perks & Benefits
                </h3>
                <div className="space-y-4">
                  {config.perks.items.map((perk, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3 shrink-0">
                        {perk.icon === 'health' && <HiOutlineHeart className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                        {perk.icon === 'remote' && <HiOutlineGlobe className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                        {perk.icon === 'flex' && <HiOutlineClock className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                        {perk.icon === 'learn' && <HiOutlineBookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                        {perk.icon === 'food' && <MdOutlineCoffee className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                        {perk.icon === 'cake' && <HiOutlineCake className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{perk.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{perk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Team Member Spotlight */}
            {config?.team?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Team Spotlight
                </h3>

                {/* Carousel */}
                <div className="relative">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-100 dark:border-blue-900">
                      <img
                        src={config.team.members[currentSlide].image}
                        alt={config.team.members[currentSlide].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {config.team.members[currentSlide].name}
                    </h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                      {config.team.members[currentSlide].role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-4 italic">
                      "{config.team.members[currentSlide].quote}"
                    </p>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex justify-center space-x-2 mt-4">
                    <button
                      onClick={prevSlide}
                      className="p-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <HiOutlineArrowRight className="w-4 h-4 transform rotate-180" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Social Connect */}
            {config?.social?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex justify-center space-x-3">
                  <a
                    href={config.social.linkedin || "#"}
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href={config.social.twitter || "#"}
                    className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href={config.social.facebook || "#"}
                    className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* View All Button */}
        {config?.viewAll?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.viewAll.url}
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {config.viewAll.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #e5e7eb 1px, transparent 1px),
            linear-gradient(-45deg, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #374151 1px, transparent 1px),
            linear-gradient(-45deg, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default CareerSection3;