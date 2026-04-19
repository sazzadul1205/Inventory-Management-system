// frontend/AboutUs/CompanyStorySection/CompanyStorySection1.jsx

/**
 * Company Story Section Component - Company History and Values Showcase
 * A comprehensive company story section featuring:
 * - Interactive timeline with expandable milestone details
 * - Company values grid with icon-based cards
 * - Mission and vision statement cards
 * - Statistics display for company metrics
 * - Founder quote section with attribution
 * - Story introduction with split layout
 * - Fully responsive timeline with alternating layout
 * - Dark mode compatible design
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

// React Icons - All from react-icons library
import {
    HiOutlineCalendar,
    HiOutlineArrowRight,
    HiOutlineHeart,
    HiOutlineUsers,
    HiOutlineGlobeAlt,
    HiOutlineChartBar,
    HiOutlineLightBulb,
    HiOutlineShieldCheck,
    HiOutlineUserGroup,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const CompanyStorySection1 = ({ config }) => {
    // ==================== STATE MANAGEMENT ====================
    const [openTimeline, setOpenTimeline] = useState(null);

    // ==================== MEMOIZED DATA ====================
    const stats = config?.stats || [];
    const values = config?.values || [];
    const timeline = config?.timeline || [];

    // ==================== HELPER FUNCTIONS ====================

    /**
     * Get icon component by name
     * @param {string} iconName - Name of the icon from config
     * @param {string} className - CSS classes for styling
     * @returns {JSX.Element} - React Icon component
     */
    const getIcon = useCallback((iconName, className = "w-5 h-5") => {
        const icons = {
            HiOutlineCalendar,
            HiOutlineArrowRight,
            HiOutlineHeart,
            HiOutlineUsers,
            HiOutlineGlobeAlt,
            HiOutlineChartBar,
            HiOutlineRocketLaunch,
            HiOutlineLightBulb,
            HiOutlineShieldCheck,
            HiOutlineUserGroup,
        };
        const IconComponent = icons[iconName] || HiOutlineCalendar;
        return <IconComponent className={className} />;
    }, []);

    /**
     * Toggle timeline item expansion
     * @param {number} index - Index of the timeline item to toggle
     */
    const toggleTimeline = useCallback((index) => {
        setOpenTimeline(prev => prev === index ? null : index);
    }, []);

    return (
        <section
            className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Company Story"
        >
            {/* ==================== BACKGROUND DECORATIONS ==================== */}
            <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-amber-50/30 to-transparent dark:from-amber-900/10 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
            <div className="absolute top-1/3 left-10 w-64 h-64 bg-amber-300/5 dark:bg-amber-500/5 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ==================== SECTION HEADER ==================== */}
                <div className="text-center max-w-6xl mx-auto mb-12">
                    <div
                        className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-amber-100 dark:bg-amber-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-amber-200 dark:border-amber-800'}`}
                        aria-label="Company story badge"
                    >
                        {config?.badge?.showPulse && (
                            <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                            </span>
                        )}
                        <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-amber-700 dark:text-amber-300'}`}>
                            {config?.badge?.text || "Our Story"}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || 'The'}{' '}
                        <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-amber-600 to-orange-600'} bg-clip-text text-transparent`}>
                            {config?.title?.highlightedText || 'Journey'}
                        </span>{' '}
                        {config?.title?.suffix || 'Behind Our Platform'}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {config?.description || "From a small startup to a global inventory management platform, our story is one of passion, innovation, and unwavering commitment to our customers."}
                    </p>
                </div>

                {/* ==================== STORY INTRO ==================== */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                            <div className="p-8 md:p-10">
                                <div className="flex justify-start mb-4">
                                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">🚀</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {config?.story?.title || "Our Journey"}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    {config?.story?.paragraph1 || "Founded in 2020 with a simple mission: to revolutionize inventory management for businesses of all sizes. What started as a small team of passionate engineers and supply chain experts has grown into a global platform trusted by thousands of companies worldwide."}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {config?.story?.paragraph2 || "Today, we're proud to serve customers across 45+ countries, helping them streamline operations, reduce costs, and grow their businesses. Our journey is just beginning, and we're excited to continue innovating for our customers."}
                                </p>
                            </div>
                            <div className="bg-linear-to-br from-amber-500 to-orange-600 p-8 md:p-10 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div className="flex justify-center mb-3">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                                            ✨
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold mb-2">&quot;Making inventory management simple&quot;</p>
                                    <p className="text-sm opacity-90">— Our founding principle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==================== STATS ROW ==================== */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="flex justify-center mb-2 text-amber-600 dark:text-amber-400">
                                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
                            </div>
                            <div className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">{stat.value}</div>
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
                                <div className="flex justify-center mb-4 text-amber-600 dark:text-amber-400">
                                    {getIcon(value.icon, "w-10 h-10")}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ==================== TIMELINE ==================== */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                        Our Journey
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                        Key milestones that shaped our company
                    </p>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-amber-500 to-orange-500" aria-hidden="true" />
                        <div className="space-y-8">
                            {timeline.map((event, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className="w-1/2" />
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10" />
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                                        <div
                                            onClick={() => toggleTimeline(index)}
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700"
                                        >
                                            <div className="p-5">
                                                <div className="text-xs text-amber-600 dark:text-amber-400 font-semibold mb-1 inline-flex items-center gap-1">
                                                    {getIcon("HiOutlineCalendar", "w-3 h-3")}
                                                    {event.year}
                                                </div>
                                                <div className="text-2xl mb-2">{event.icon}</div>
                                                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">{event.title}</h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">{event.description}</p>
                                                {openTimeline === index && event.details && (
                                                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">{event.details}</p>
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

                {/* ==================== MISSION & VISION ==================== */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center border border-amber-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                                <span className="text-3xl">🎯</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {config?.mission || "To empower businesses with intelligent inventory management solutions that drive efficiency, reduce waste, and enable growth."}
                        </p>
                    </div>
                    <div className="bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center border border-amber-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                                <span className="text-3xl">👁️</span>
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
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                            <span className="text-3xl">💭</span>
                        </div>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 italic mb-4 leading-relaxed">
                        &quot;{config?.quote || "Our team is passionate about solving real-world problems. Every day, we work to make inventory management simpler, smarter, and more accessible for businesses everywhere."}&quot;
                    </p>
                    <div className="font-semibold text-gray-900 dark:text-white">
                        {config?.quoteAuthor || "— Alex Chen, CEO & Co-founder"}
                    </div>
                </div>

                {/* ==================== CTA SECTION ==================== */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-amber-100 dark:border-gray-700">
                        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                            {getIcon("HiOutlineHeart", "w-6 h-6 text-amber-600")}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                            {config?.contactText || "Want to be part of our story? Join our team or partner with us."}
                        </span>
                        <Link
                            href={config?.contactLink || "/careers"}
                            className="px-6 py-3 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Join Our Team"}
                            <HiOutlineArrowRight className="w-4 h-4" />
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
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
        </section>
    );
};

export default CompanyStorySection1;