// page/frontend/Careers/LifeAtCompanySection/LifeAtCompanySection1.jsx

// React
import { useState } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
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
    HiOutlineX
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy, HiOutlineCamera } from 'react-icons/hi2';
import { MdOutlineCoffee as HiOutlineCoffee, } from "react-icons/md";

const LifeAtCompanySection1 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
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
            emoji: <HiOutlineEmojiHappy className={className} />
        };
        return icons[iconName] || <HiOutlineUserGroup className={className} />;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'culture': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'users', label: 'Culture' },
            'events': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'calendar', label: 'Events' },
            'office': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'building', label: 'Office Life' },
            'volunteer': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'heart', label: 'Volunteer' },
            'celebrations': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'gift', label: 'Celebrations' }
        };
        return configs[category] || configs.culture;
    };

    // Open gallery modal
    const openGalleryModal = (image) => {
        setSelectedImage(image);
        setShowGalleryModal(true);
    };

    // Filter gallery images
    const getFilteredImages = () => {
        let images = config?.galleryImages || [];

        if (selectedCategory !== 'all') {
            images = images.filter(img => img.category === selectedCategory);
        }

        return images;
    };

    const filteredImages = getFilteredImages();
    const categories = config?.categories || [
        { id: 'all', label: 'All Moments', icon: 'camera' },
        { id: 'culture', label: 'Culture', icon: 'users' },
        { id: 'events', label: 'Events', icon: 'calendar' },
        { id: 'office', label: 'Office Life', icon: 'building' },
        { id: 'volunteer', label: 'Volunteer', icon: 'heart' },
        { id: 'celebrations', label: 'Celebrations', icon: 'gift' }
    ];

    // Values
    const values = config?.values || [
        { title: "Innovation First", description: "We embrace creativity and push boundaries to solve complex challenges.", icon: "bolt" },
        { title: "Customer Obsession", description: "Our customers' success is our success. We go above and beyond.", icon: "heart" },
        { title: "One Team", description: "Collaboration and mutual respect drive our achievements.", icon: "users" },
        { title: "Integrity Always", description: "We do the right thing, even when no one is watching.", icon: "shield" }
    ];

    // Employee testimonials
    const testimonials = config?.testimonials || [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Senior Software Engineer",
            quote: "The culture here is truly special. I've never worked in a place where I feel so supported and empowered to grow. The team genuinely cares about each other's success.",
            avatar: "/testimonials/sarah.jpg",
            location: "San Francisco, CA"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Product Manager",
            quote: "What I love most is the balance between hard work and fun. We're solving real problems, but we also take time to celebrate wins and enjoy each other's company.",
            avatar: "/testimonials/michael.jpg",
            location: "New York, NY"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Customer Success Lead",
            quote: "From day one, I felt welcomed. The mentorship program helped me grow, and the flexible work culture has been a game-changer for my work-life balance.",
            avatar: "/testimonials/emily.jpg",
            location: "Austin, TX"
        }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "500+", label: "Employees Worldwide", icon: "users" },
        { value: "25+", label: "Countries", icon: "globe" },
        { value: "15+", label: "Years of Excellence", icon: "trophy" },
        { value: "95%", label: "Employee Satisfaction", icon: "star" }
    ];

    // Perks
    const perks = config?.perks || [
        { title: "Remote-First Culture", description: "Work from anywhere with flexible hours and a global team.", icon: "wifi" },
        { title: "Learning Stipend", description: "$2,000 annual budget for courses, conferences, and books.", icon: "academic" },
        { title: "Health & Wellness", description: "Comprehensive health coverage and gym reimbursement.", icon: "heart" },
        { title: "Parental Leave", description: "Generous parental leave for all new parents.", icon: "gift" },
        { title: "Team Off sites", description: "Quarterly team retreats in amazing locations.", icon: "globe" },
        { title: "Stock Options", description: "Everyone is an owner with equity in the company.", icon: "chart" }
    ];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Life at Company Section"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineEmojiHappy className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Life at SupplyChainPro"}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "More Than Just"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Work"}</span> {config?.title?.suffix || ""}
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "We're building a culture where innovation thrives, collaboration flourishes, and everyone feels valued. Join us and experience what makes SupplyChainPro a great place to work."}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                {getIcon(stat.icon, "w-5 h-5 text-blue-600")}
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Values Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        Our Core Values
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                                    {getIcon(value.icon, "w-6 h-6 text-blue-600")}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Perks Section */}
                <div className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        {config?.perksTitle || "Perks & Benefits"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {perks.map((perk, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                    {getIcon(perk.icon, "w-4 h-4 text-blue-600")}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{perk.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{perk.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Employee Testimonials */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        What Our Employees Say
                    </h3>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <HiOutlineQuote className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="pt-8">
                                <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                                    "{testimonials[activeTestimonial]?.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        {getIcon("users", "w-6 h-6 text-gray-500")}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">{testimonials[activeTestimonial]?.name}</div>
                                        <div className="text-sm text-gray-500">{testimonials[activeTestimonial]?.role}</div>
                                        <div className="text-xs text-gray-400">{testimonials[activeTestimonial]?.location}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 mt-6">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTestimonial(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'w-6 bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                                    aria-label={`View testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {filteredImages.map((image, idx) => {
                        const categoryConfig = getCategoryConfig(image.category);
                        return (
                            <div
                                key={idx}
                                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                onClick={() => openGalleryModal(image)}
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
                                        <HiOutlineEye className="w-4 h-4 text-gray-700" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Images */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineCamera className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No images found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your filter criteria</p>
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            View all moments
                        </button>
                    </div>
                )}

                {/* Join Our Team CTA */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
                    <HiOutlineUserGroup className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {config?.ctaTitle || "Ready to Join Us?"}
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        {config?.ctaDescription || "Explore open positions and become part of a team that's transforming supply chains worldwide."}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="/careers/openings"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            View Open Positions
                            <HiArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/careers/culture"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            Learn About Our Culture
                            <HiOutlineExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Gallery Modal */}
                {showGalleryModal && selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                        onClick={() => setShowGalleryModal(false)}
                    >
                        <div
                            className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowGalleryModal(false)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                            >
                                <HiOutlineX className="w-6 h-6" />
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-gray-900 dark:text-white font-medium">{selectedImage.caption}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{selectedImage.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
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