// page/frontend/Partners/BecomeAPartnerSection/BecomeAPartnerSection1.jsx

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
    HiOutlineHeart
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice } from 'react-icons/hi2';

const BecomeAPartnerSection1 = ({ config }) => {
    const [, setSelectedProgram] = useState('all');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        website: '',
        program: '',
        message: ''
    });

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
            heart: <HiOutlineHeart className={className} />
        };
        return icons[iconName] || <HiOutlineUserGroup className={className} />;
    };

    // Handle form input change
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                website: '',
                program: '',
                message: ''
            });
        }, 3000);
    };

    // Partner program types
    const programTypes = config?.programTypes || [
        {
            id: 'technology',
            title: 'Technology Partner',
            description: 'Integrate your technology with SupplyChainPro to deliver joint solutions.',
            icon: 'chip',
            benefits: ['API access & documentation', 'Co-marketing opportunities', 'Technical support', 'Joint solution validation']
        },
        {
            id: 'solution',
            title: 'Solution Partner',
            description: 'Deliver end-to-end supply chain solutions leveraging our platform.',
            icon: 'briefcase',
            benefits: ['Sales enablement', 'Partner training & certification', 'Lead sharing', 'Joint go-to-market programs']
        },
        {
            id: 'consulting',
            title: 'Consulting Partner',
            description: 'Provide expert advisory and implementation services to mutual clients.',
            icon: 'users',
            benefits: ['Implementation methodology', 'Practice development', 'Co-branding opportunities', 'Exclusive events']
        },
        {
            id: 'reseller',
            title: 'Reseller Partner',
            description: 'Sell and distribute SupplyChainPro solutions to your customer base.',
            icon: 'globe',
            benefits: ['Competitive margins', 'Sales training', 'Marketing development funds', 'Dedicated channel support']
        }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "500+", label: "Active Partners", icon: "usergroup" },
        { value: "50+", label: "Countries", icon: "globe" },
        { value: "$100M+", label: "Partner Revenue", icon: "credit" },
        { value: "95%", label: "Partner Satisfaction", icon: "star" }
    ];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Become a Partner Section"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineUserGroup className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Join Our Ecosystem"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Become a"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Partner"}</span> {config?.title?.suffix || ""}
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Join a global network of trusted partners delivering innovative supply chain solutions. Grow your business with comprehensive support, training, and resources."}
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

                {/* Program Types Grid */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        Choose Your Partnership Path
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programTypes.map((program) => (
                            <div
                                key={program.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {getIcon(program.icon, "w-6 h-6 text-blue-600")}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{program.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{program.description}</p>
                                <ul className="space-y-2 mb-4">
                                    {program.benefits.slice(0, 3).map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                            <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => {
                                        setSelectedProgram(program.id);
                                        setFormData({ ...formData, program: program.title });
                                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group/link"
                                >
                                    Apply Now
                                    <HiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Partner With Us */}
                <div className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        Why Partner With SupplyChainPro?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {config?.benefits?.map((benefit, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                                    {getIcon(benefit.icon, "w-6 h-6 text-blue-600")}
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Application Form */}
                <div id="application-form" className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-8">
                        <HiOutlineUserGroup className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.formTitle || "Apply to Become a Partner"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {config?.formDescription || "Fill out the form below and our partner team will reach out within 2 business days."}
                        </p>
                    </div>

                    {formSubmitted ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h3>
                            <p className="text-gray-600 dark:text-gray-400">Thank you for your interest. Our partner team will contact you within 2 business days.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your Company"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Company Website
                                    </label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="https://www.company.com"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Partnership Program *
                                </label>
                                <select
                                    name="program"
                                    value={formData.program}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Select a program</option>
                                    <option value="Technology Partner">Technology Partner</option>
                                    <option value="Solution Partner">Solution Partner</option>
                                    <option value="Consulting Partner">Consulting Partner</option>
                                    <option value="Reseller Partner">Reseller Partner</option>
                                </select>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Why are you interested in partnering with us?
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Tell us about your business and why you're interested in partnering..."
                                />
                            </div>

                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Submit Application
                                    <HiArrowRight className="inline ml-2 w-4 h-4" />
                                </button>
                                <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">
                                    By submitting this form, you agree to our partner program terms and conditions.
                                </p>
                            </div>
                        </form>
                    )}
                </div>

                {/* FAQ Section */}
                {config?.showFaq && (
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                            Frequently Asked Questions
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {config?.faqs?.map((faq, idx) => (
                                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Contact Section */}
                <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">
                        Questions About Partner Program?
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Our partner team is here to help. Reach out to us directly for any questions about the program.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="mailto:partners@supplychainpro.com"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                            <HiOutlineMail className="w-4 h-4" />
                            partners@supplychainpro.com
                        </a>
                        <a
                            href="tel:+15551234567"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            <HiOutlinePhone className="w-4 h-4" />
                            +1 (555) 123-4567
                        </a>
                    </div>
                </div>
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

export default BecomeAPartnerSection1;