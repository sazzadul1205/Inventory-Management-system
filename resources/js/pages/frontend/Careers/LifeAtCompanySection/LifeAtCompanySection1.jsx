// page/frontend/Careers/LifeAtCompanySection/LifeAtCompanySection1.jsx

/**
 * Life At Company Section I - Culture & Workplace Hub
 *
 * Unique Design Elements:
 * - Stats Cards for company metrics (Employees, Countries, Years, Satisfaction)
 * - Core Values Grid with Icon Cards
 * - Perks & Benefits Grid with Icon List
 * - Employee Testimonials Carousel with Quote Cards
 * - Photo Gallery Grid with Category Filters
 * - Image Modal with Lightbox Effect
 * - Hover Overlay with Caption and Eye Icon
 * - Category Filter Chips for Gallery
 * - Open-Source Gallery Images
 * - Join Us CTA Banner with Dual Buttons
 * - Employee Satisfaction Highlight
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Grid Layout for Gallery
 * - Testimonial Navigation Dots
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaQuoteLeft as HiOutlineQuote, FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineCalendar,
  HiOutlineTag,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineBell,
  HiOutlineDownload,
  HiOutlinePlay,
  HiOutlineDocumentText,
  HiOutlineCode,
  HiOutlineCog,
  HiOutlineRefresh,
  HiOutlineStar,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineNewspaper,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineHeart,
  HiOutlineEmojiHappy,
  HiOutlineX,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineCamera, HiOutlineBuildingOffice, HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';
import {
  MdOutlineCoffee as HiOutlineCoffee,
} from "react-icons/md";

const LifeAtCompanySection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  // ==================== MEMOIZED DATA ====================
  const allImages = useMemo(() => config?.galleryImages || [], [config?.galleryImages]);

  const categories = useMemo(
    () =>
      config?.categories || [
        { id: 'all', label: 'All Moments', icon: 'camera' },
        { id: 'culture', label: 'Culture', icon: 'users' },
        { id: 'events', label: 'Events', icon: 'calendar' },
        { id: 'office', label: 'Office Life', icon: 'building' },
        { id: 'volunteer', label: 'Volunteer', icon: 'heart' },
        { id: 'celebrations', label: 'Celebrations', icon: 'gift' }
      ],
    [config?.categories]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "500+", label: "Employees Worldwide", icon: "users" },
        { value: "25+", label: "Countries", icon: "globe" },
        { value: "15+", label: "Years of Excellence", icon: "trophy" },
        { value: "95%", label: "Employee Satisfaction", icon: "star" }
      ],
    [config?.stats]
  );

  const values = useMemo(
    () =>
      config?.values || [
        { title: "Innovation First", description: "We embrace creativity and push boundaries to solve complex challenges.", icon: "bolt" },
        { title: "Customer Obsession", description: "Our customers' success is our success. We go above and beyond.", icon: "heart" },
        { title: "One Team", description: "Collaboration and mutual respect drive our achievements.", icon: "users" },
        { title: "Integrity Always", description: "We do the right thing, even when no one is watching.", icon: "shield" }
      ],
    [config?.values]
  );

  const perks = useMemo(
    () =>
      config?.perks || [
        { title: "Remote-First Culture", description: "Work from anywhere with flexible hours and a global team.", icon: "wifi" },
        { title: "Learning Stipend", description: "$2,000 annual budget for courses, conferences, and books.", icon: "academic" },
        { title: "Health & Wellness", description: "Comprehensive health coverage and gym reimbursement.", icon: "heart" },
        { title: "Parental Leave", description: "Generous parental leave for all new parents.", icon: "gift" },
        { title: "Team Offsites", description: "Quarterly team retreats in amazing locations.", icon: "globe" },
        { title: "Stock Options", description: "Everyone is an owner with equity in the company.", icon: "chart" }
      ],
    [config?.perks]
  );

  const testimonials = useMemo(
    () =>
      config?.testimonials || [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "Senior Software Engineer",
          quote: "The culture here is truly special. I've never worked in a place where I feel so supported and empowered to grow. The team genuinely cares about each other's success.",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
          location: "San Francisco, CA"
        },
        {
          id: 2,
          name: "Michael Chen",
          role: "Product Manager",
          quote: "What I love most is the balance between hard work and fun. We're solving real problems, but we also take time to celebrate wins and enjoy each other's company.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
          location: "New York, NY"
        },
        {
          id: 3,
          name: "Emily Rodriguez",
          role: "Customer Success Lead",
          quote: "From day one, I felt welcomed. The mentorship program helped me grow, and the flexible work culture has been a game-changer for my work-life balance.",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
          location: "Austin, TX"
        }
      ],
    [config?.testimonials]
  );

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      usergroup: <HiOutlineUserGroup className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      users: <HiOutlineUsers className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      tag: <HiOutlineTag className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      bell: <HiOutlineBell className={className} />,
      download: <HiOutlineDownload className={className} />,
      play: <HiOutlinePlay className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      code: <HiOutlineCode className={className} />,
      cog: <HiOutlineCog className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      star: <HiOutlineStar className={className} />,
      flag: <HiOutlineFlag className={className} />,
      gift: <HiOutlineGift className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      mail: <HiOutlineMail className={className} />,
      'thumbs-up': <HiOutlineThumbUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      quote: <HiOutlineQuote className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      template: <HiOutlineTemplate className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      phone: <HiOutlinePhone className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      heart: <HiOutlineHeart className={className} />,
      coffee: <HiOutlineCoffee className={className} />,
      emoji: <HiOutlineEmojiHappy className={className} />,
      camera: <HiOutlineCamera className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineUserGroup className={className} />;
  }, []);

  /**
   * Returns category configuration with color, icon, and label
   */
  const getCategoryConfig = useCallback((categoryId) => {
    const configs = {
      culture: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'users', label: 'Culture', borderColor: 'border-blue-200 dark:border-blue-800' },
      events: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'calendar', label: 'Events', borderColor: 'border-purple-200 dark:border-purple-800' },
      office: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'building', label: 'Office Life', borderColor: 'border-emerald-200 dark:border-emerald-800' },
      volunteer: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'heart', label: 'Volunteer', borderColor: 'border-orange-200 dark:border-orange-800' },
      celebrations: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'gift', label: 'Celebrations', borderColor: 'border-red-200 dark:border-red-800' }
    };
    return configs[categoryId] || configs.culture;
  }, []);

  /**
   * Open gallery modal
   */
  const openGalleryModal = useCallback((image) => {
    setSelectedImage(image);
    setShowGalleryModal(true);
  }, []);

  /**
   * Close gallery modal
   */
  const closeGalleryModal = useCallback(() => {
    setShowGalleryModal(false);
    setSelectedImage(null);
  }, []);

  /**
   * Handle testimonial navigation
   */
  const goToTestimonial = useCallback((index) => {
    setActiveTestimonial(index);
  }, []);

  // ==================== FILTERING LOGIC ====================
  const filteredImages = useMemo(() => {
    let images = [...allImages];

    if (selectedCategory !== 'all') {
      images = images.filter((img) => img.category === selectedCategory);
    }

    return images;
  }, [allImages, selectedCategory]);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Life at Company - Culture & Workplace"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            {getIcon('emoji', 'w-4 h-4 text-blue-600 dark:text-blue-400 mr-2')}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'Life at SupplyChainPro'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'More Than Just'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Work'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "We're building a culture where innovation thrives, collaboration flourishes, and everyone feels valued. Join us and experience what makes SupplyChainPro a great place to work."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                {getIcon(stat.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== CORE VALUES SECTION ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(value.icon, 'w-6 h-6 text-blue-600 dark:text-blue-400')}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== PERKS & BENEFITS SECTION ==================== */}
        <div className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {config?.perksTitle || 'Perks & Benefits'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                  {getIcon(perk.icon, 'w-4 h-4 text-blue-600 dark:text-blue-400')}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {perk.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== EMPLOYEE TESTIMONIALS ==================== */}
        {testimonials.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              What Our Employees Say
            </h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {getIcon('quote', 'w-6 h-6 text-blue-600 dark:text-blue-400')}
                </div>
                <div className="pt-8">
                  <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                    "{testimonials[activeTestimonial]?.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      {testimonials[activeTestimonial]?.avatar ? (
                        <img
                          src={testimonials[activeTestimonial].avatar}
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        getIcon("users", "w-6 h-6 text-gray-500")
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonials[activeTestimonial]?.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[activeTestimonial]?.role}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-500">
                        {testimonials[activeTestimonial]?.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToTestimonial(idx)}
                    className={`transition-all duration-300 rounded-full ${activeTestimonial === idx ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-300 dark:bg-gray-600'
                      }`}
                    aria-label={`View testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== CATEGORY FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${category.label} photos`}
            >
              {getIcon(category.icon, 'w-4 h-4')}
              {category.label}
            </button>
          ))}
        </div>

        {/* ==================== GALLERY GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, idx) => {
            const categoryConfig = getCategoryConfig(image.category);
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => openGalleryModal(image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openGalleryModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color} mb-2`}>
                      {categoryConfig.label}
                    </span>
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    {getIcon('eye', 'w-4 h-4 text-gray-700')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('camera', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No images found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filter criteria
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              View all moments
            </button>
          </div>
        )}

        {/* ==================== JOIN OUR TEAM CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
          {getIcon('usergroup', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {config?.ctaTitle || 'Ready to Join Us?'}
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {config?.ctaDescription ||
              'Explore open positions and become part of a team that\'s transforming supply chains worldwide.'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={config?.openingsLink || '/careers/openings'}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Open Positions
              <HiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={config?.cultureLink || '/careers/culture'}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
            >
              Learn About Our Culture
              {getIcon('external', 'w-4 h-4')}
            </Link>
          </div>
        </div>

        {/* ==================== GALLERY MODAL ==================== */}
        {showGalleryModal && selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeGalleryModal}
            role="dialog"
            aria-label="Gallery image"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeGalleryModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
                loading="lazy"
              />
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-900 dark:text-white font-medium">{selectedImage.caption}</p>
                {selectedImage.description && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                                      linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
                    background-size: 50px 50px;
                }
                .dark .bg-grid-pattern {
                    background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                                      linear-gradient(to bottom, #374151 1px, transparent 1px);
                }
            `}</style>
    </section>
  );
};

export default LifeAtCompanySection1;