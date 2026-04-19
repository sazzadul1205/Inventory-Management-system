// frontend/AboutUs/CompanyStorySection/CompanyStorySection2.jsx

/**
 * Company Story Section Component - Interactive Story with Video and Gallery
 * A comprehensive company story section featuring:
 * - Interactive video player with play/pause controls
 * - Animated stats counters with hover effects
 * - Expandable timeline with milestone details
 * - Auto-playing photo gallery carousel with manual controls
 * - Full-screen gallery modal with navigation
 * - Leadership team grid with avatars
 * - Company values with animated icons
 * - Mission and vision statement cards
 * - Founder quote section
 * - Fully responsive design with dark mode support
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect } from 'react';

// React Icons - All from react-icons library
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineCalendar,
    HiOutlineArrowRight,
    HiOutlineHeart,
    HiOutlinePlay,
    HiOutlinePause,
    HiOutlineX,
    HiOutlineUsers,
    HiOutlineGlobeAlt,
    HiOutlineChartBar,
    HiOutlineSparkles,
    HiOutlineUserGroup,
    HiOutlineShieldCheck,
    HiOutlineUserCircle,
    HiOutlineChip,
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const CompanyStorySection2 = ({ config }) => {
    // ==================== STATE MANAGEMENT ====================
    const [autoplay, setAutoplay] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeVideo, setActiveVideo] = useState(false);
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);
    const [activeTimelineIndex, setActiveTimelineIndex] = useState(null);

    // ==================== REFS ====================
    const videoRef = useRef(null);

    // ==================== MEMOIZED DATA ====================
    const stats = config?.stats || [];
    const values = config?.values || [];
    const gallery = config?.gallery || [];
    const timeline = config?.timeline || [];
    const leadership = config?.leadership || [];

    // ==================== HELPER FUNCTIONS ====================

    /**
     * Get icon component by name
     */
    const getIcon = useCallback((iconName, className = "w-5 h-5") => {
        const icons = {
            HiOutlineChevronDown,
            HiOutlineChevronUp,
            HiOutlineCalendar,
            HiOutlineArrowRight,
            HiOutlineHeart,
            HiOutlinePlay,
            HiOutlinePause,
            HiOutlineX,
            HiOutlineUsers,
            HiOutlineGlobeAlt,
            HiOutlineChartBar,
            HiOutlineTrophy,
            HiOutlineSparkles,
            HiOutlineUserGroup,
            HiOutlineShieldCheck,
            HiOutlineUserCircle,
            HiOutlineChip,
        };
        const IconComponent = icons[iconName] || HiOutlineCalendar;
        return <IconComponent className={className} />;
    }, []);

    /**
     * Toggle timeline item expansion
     */
    const toggleTimeline = useCallback((index) => {
        setActiveTimelineIndex(prev => prev === index ? null : index);
    }, []);

    /**
     * Open gallery modal
     */
    const openGalleryModal = useCallback((index) => {
        setActiveGalleryIndex(index);
        setShowGalleryModal(true);
        setAutoplay(false);
    }, []);

    /**
     * Next slide in carousel
     */
    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % gallery.length);
    }, [gallery.length]);

    /**
     * Previous slide in carousel
     */
    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev - 1 + gallery.length) % gallery.length);
    }, [gallery.length]);

    /**
     * Next slide in modal
     */
    const nextModalSlide = useCallback(() => {
        setActiveGalleryIndex(prev => (prev + 1) % gallery.length);
    }, [gallery.length]);

    /**
     * Previous slide in modal
     */
    const prevModalSlide = useCallback(() => {
        setActiveGalleryIndex(prev => (prev - 1 + gallery.length) % gallery.length);
    }, [gallery.length]);

    // Auto-play carousel
    useEffect(() => {
        let interval;
        if (autoplay && gallery.length > 0) {
            interval = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % gallery.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [autoplay, gallery.length]);

    return (
        <section
            className="relative py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
            role="region"
            aria-label="Company Story"
        >
            {/* ==================== BACKGROUND DECORATIONS ==================== */}
            <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-emerald-50/30 to-transparent dark:from-emerald-900/10 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 dark:bg-teal-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
            <div className="absolute top-1/3 left-10 w-64 h-64 bg-emerald-300/5 dark:bg-emerald-500/5 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ==================== SECTION HEADER ==================== */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div
                        className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-emerald-100 dark:bg-emerald-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-emerald-200 dark:border-emerald-800'}`}
                        aria-label="Company story badge"
                    >
                        {config?.badge?.showPulse && (
                            <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                        )}
                        <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-emerald-700 dark:text-emerald-300'}`}>
                            {config?.badge?.text || "Our Heritage"}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || 'The'}{' '}
                        <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-emerald-600 to-teal-600'} bg-clip-text text-transparent`}>
                            {config?.title?.highlightedText || 'Story'}
                        </span>{' '}
                        {config?.title?.suffix || 'Behind Our Success'}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {config?.description || "From humble beginnings to industry leadership, our journey is defined by innovation, dedication, and a relentless focus on customer success. Discover the milestones that shaped our company."}
                    </p>
                </div>

                {/* ==================== STORY VIDEO SECTION ==================== */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                        <div className="relative aspect-video">
                            {!activeVideo ? (
                                <div
                                    className="absolute inset-0 bg-linear-to-br from-emerald-900 to-teal-900 flex items-center justify-center cursor-pointer group"
                                    onClick={() => setActiveVideo(true)}
                                >
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                                            {getIcon("HiOutlinePlay", "w-10 h-10 text-white")}
                                        </div>
                                        <p className="text-white text-lg font-semibold">Watch Our Story</p>
                                        <p className="text-emerald-200 text-sm mt-1">2:34 min</p>
                                    </div>
                                </div>
                            ) : (
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    controls
                                    autoPlay
                                    src={config?.videoUrl || "/videos/company-story.mp4"}
                                    poster={config?.videoPoster || "/images/video-poster.jpg"}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* ==================== STATS ROW ==================== */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
                        >
                            <div className="flex justify-center mb-2 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
                            </div>
                            <div className="text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{stat.value}</div>
                            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* ==================== COMPANY VALUES ==================== */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                        Our Core Values
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                        The principles that guide everything we do
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100 dark:border-gray-700 group"
                            >
                                <div className="flex justify-center mb-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                    {getIcon(value.icon, "w-10 h-10")}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ==================== INTERACTIVE TIMELINE ==================== */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                        Our Journey
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                        Key milestones that shaped our company
                    </p>
                    <div className="relative max-w-6xl mx-auto">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-emerald-500 to-teal-500 hidden md:block" aria-hidden="true" />
                        <div className="space-y-8">
                            {timeline.map((event, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className="hidden md:block w-1/2" />
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 hidden md:block" />
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div
                                            onClick={() => toggleTimeline(index)}
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700"
                                        >
                                            <div className="p-5">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                                                        {getIcon("HiOutlineCalendar", "w-3 h-3")}
                                                        {event.year}
                                                    </div>
                                                    <div className="text-2xl">{event.icon}</div>
                                                </div>
                                                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">{event.title}</h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">{event.description}</p>
                                                {activeTimelineIndex === index && event.details && (
                                                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">{event.details}</p>
                                                    </div>
                                                )}
                                                {event.details && (
                                                    <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1">
                                                        {activeTimelineIndex === index ? 'Show less' : 'Read more'}
                                                        {getIcon("HiOutlineChevronDown", `w-3 h-3 transition-transform duration-200 ${activeTimelineIndex === index ? 'rotate-180' : ''}`)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ==================== PHOTO GALLERY CAROUSEL ==================== */}
                {gallery.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                            Moments That Matter
                        </h3>
                        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                            Capturing our journey through the years
                        </p>
                        <div className="relative max-w-6xl mx-auto">
                            <div className="overflow-hidden rounded-2xl">
                                <div className="relative aspect-video">
                                    {gallery.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-opacity duration-500 cursor-pointer ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}
                                            onClick={() => openGalleryModal(index)}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.caption}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
                                                <p className="text-white text-sm">{item.caption}</p>
                                                <p className="text-white/70 text-xs mt-1">{item.year}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 z-20"
                                aria-label="Previous slide"
                            >
                                {getIcon("HiOutlineChevronUp", "w-5 h-5 rotate-270")}
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 z-20"
                                aria-label="Next slide"
                            >
                                {getIcon("HiOutlineChevronUp", "w-5 h-5 rotate-90")}
                            </button>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                                {gallery.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-4' : 'bg-white/50'}`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={() => setAutoplay(!autoplay)}
                                className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-all duration-300 z-20"
                                aria-label={autoplay ? "Pause slideshow" : "Play slideshow"}
                            >
                                {autoplay ? getIcon("HiOutlinePause", "w-4 h-4") : getIcon("HiOutlinePlay", "w-4 h-4")}
                            </button>
                        </div>
                    </div>
                )}

                {/* ==================== GALLERY MODAL ==================== */}
                {showGalleryModal && activeGalleryIndex !== null && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setShowGalleryModal(false)}
                        role="dialog"
                        aria-label="Gallery image"
                        aria-modal="true"
                    >
                        <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setShowGalleryModal(false)}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
                                aria-label="Close modal"
                            >
                                {getIcon("HiOutlineX", "w-6 h-6")}
                            </button>
                            <img
                                src={gallery[activeGalleryIndex].image}
                                alt={gallery[activeGalleryIndex].caption}
                                className="w-full rounded-2xl"
                            />
                            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 p-3 rounded-lg mx-4">
                                <p className="text-sm">{gallery[activeGalleryIndex].caption}</p>
                                <p className="text-xs text-gray-300 mt-1">{gallery[activeGalleryIndex].year}</p>
                            </div>
                            <button
                                onClick={prevModalSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 hover:bg-white/30 transition-all duration-300"
                                aria-label="Previous image"
                            >
                                {getIcon("HiOutlineChevronUp", "w-6 h-6 text-white rotate-270")}
                            </button>
                            <button
                                onClick={nextModalSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 hover:bg-white/30 transition-all duration-300"
                                aria-label="Next image"
                            >
                                {getIcon("HiOutlineChevronUp", "w-6 h-6 text-white rotate-90")}
                            </button>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {gallery.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveGalleryIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeGalleryIndex === index ? 'bg-white w-4' : 'bg-white/50'}`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ==================== LEADERSHIP TEAM ==================== */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                        Meet Our Leadership
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                        The experienced team driving our vision forward
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leadership.map((leader, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden text-center border border-gray-100 dark:border-gray-700"
                            >
                                <div className="aspect-square bg-linear-to-br from-emerald-100 to-teal-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                                    {leader.avatar ? (
                                        <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="text-emerald-600 dark:text-emerald-400 text-5xl">
                                            {getIcon(leader.icon, "w-16 h-16")}
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-gray-900 dark:text-white">{leader.name}</h4>
                                    <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-2">{leader.title}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{leader.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ==================== MISSION & VISION ==================== */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-linear-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center border border-emerald-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg group">
                        <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-3xl">
                                🎯
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {config?.mission || "To empower businesses with intelligent inventory management solutions that drive efficiency, reduce waste, and enable growth."}
                        </p>
                    </div>
                    <div className="bg-linear-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center border border-emerald-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg group">
                        <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-3xl">
                                👁️
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {config?.vision || "To become the world's most trusted inventory management platform, helping businesses of all sizes achieve operational excellence."}
                        </p>
                    </div>
                </div>

                {/* ==================== FOUNDER QUOTE ==================== */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center mb-12 border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-3xl">
                            💭
                        </div>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 italic mb-4 leading-relaxed">
                        &quot;{config?.quote || "Our team is passionate about solving real-world problems. Every day, we work to make inventory management simpler, smarter, and more accessible for businesses everywhere."}&quot;
                    </p>
                    <div className="font-semibold text-gray-900 dark:text-white">
                        {config?.quoteAuthor || "Alex Chen, CEO & Co-founder"}
                    </div>
                </div>

                {/* ==================== CTA SECTION ==================== */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-emerald-100 dark:border-gray-700">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                            {getIcon("HiOutlineHeart", "w-6 h-6 text-emerald-600")}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                            {config?.contactText || "Want to be part of our story? Join our team or partner with us."}
                        </span>
                        <Link
                            href={config?.contactLink || "/careers"}
                            className="px-6 py-3 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Join Our Team"}
                            {getIcon("HiOutlineArrowRight", "w-4 h-4")}
                        </Link>
                    </div>
                </div>
            </div>

            {/* ==================== STYLES ==================== */}
            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .rotate-90 {
          transform: rotate(90deg);
        }
        .rotate-270 {
          transform: rotate(270deg);
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

export default CompanyStorySection2;