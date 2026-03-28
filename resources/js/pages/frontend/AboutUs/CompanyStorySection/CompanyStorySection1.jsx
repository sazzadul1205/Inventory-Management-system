// frontend/AboutUs/CompanyStorySection/CompanyStorySection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineCalendar,
    HiOutlineArrowRight,
    HiOutlineHeart,
} from 'react-icons/hi';

const CompanyStorySection1 = ({ config }) => {
    const [openTimeline, setOpenTimeline] = useState(null);

    const timeline = config?.timeline || [];
    const stats = config?.stats || [];
    const values = config?.values || [];

    const toggleTimeline = (index) => {
        setOpenTimeline(openTimeline === index ? null : index);
    };

    return (
        <section
            className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Company Story"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
            <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div
                        className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
                    >
                        {config?.badge?.showPulse && (
                            <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                        )}
                        <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
                            {config?.badge?.text}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix}{' '}
                        <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
                            {config?.title?.highlightedText}
                        </span>{' '}
                        {config?.title?.suffix}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {config?.description}
                    </p>
                </div>

                {/* Story Intro */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                            <div className="p-8 md:p-10">
                                <div className="text-4xl mb-4">🚀</div>
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
                            <div className="bg-linear-to-br from-blue-500 to-indigo-600 p-8 md:p-10 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div className="text-5xl mb-3">✨</div>
                                    <p className="text-lg font-semibold mb-2">"Making inventory management simple"</p>
                                    <p className="text-sm opacity-90">— Our founding principle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all">
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Company Values */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        Our Core Values
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center">
                                <div className="text-4xl mb-3">{value.icon}</div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        Our Journey
                    </h3>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-blue-500 to-indigo-500" aria-hidden="true"></div>
                        <div className="space-y-8">
                            {timeline.map((event, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className="w-1/2"></div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                                        <div
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer"
                                            onClick={() => toggleTimeline(index)}
                                        >
                                            <div className="text-sm text-blue-600 font-semibold mb-1 flex items-center gap-1 justify-end">
                                                <HiOutlineCalendar className="w-3 h-3" />
                                                {event.year}
                                            </div>
                                            <div className="text-2xl mb-2">{event.icon}</div>
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{event.title}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{event.description}</p>
                                            {event.details && (
                                                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                                                    <p className="text-xs text-gray-500">{event.details}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center">
                        <div className="text-4xl mb-3">🎯</div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {config?.mission || "To empower businesses with intelligent inventory management solutions that drive efficiency, reduce waste, and enable growth."}
                        </p>
                    </div>
                    <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center">
                        <div className="text-4xl mb-3">👁️</div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {config?.vision || "To become the world's most trusted inventory management platform, helping businesses of all sizes achieve operational excellence."}
                        </p>
                    </div>
                </div>

                {/* Team Quote */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center mb-12">
                    <div className="text-4xl mb-3">💭</div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 italic mb-4">
                        "{config?.quote || "Our team is passionate about solving real-world problems. Every day, we work to make inventory management simpler, smarter, and more accessible for businesses everywhere."}"
                    </p>
                    <div className="font-semibold text-gray-900 dark:text-white">
                        {config?.quoteAuthor || "— Alex Chen, CEO & Co-founder"}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                        <HiOutlineHeart className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {config?.contactText || "Want to be part of our story? Join our team or partner with us."}
                        </span>
                        <Link
                            href={config?.contactLink || "/careers"}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Join Our Team"}
                            <HiOutlineArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
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