// frontend/AboutUs/CompanyTimelineSection/CompanyTimelineSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineCalendar,
    HiOutlineChartBar,
    HiOutlineArrowRight,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch, HiOutlineTrophy } from "react-icons/hi2";

const CompanyTimelineSection1 = ({ config }) => {
    const [openYear, setOpenYear] = useState(null);
    const [activeEra, setActiveEra] = useState('all');

    const timeline = config?.timeline || [];
    const eras = config?.eras || [];
    const stats = config?.stats || [];

    const toggleYear = (index) => {
        setOpenYear(openYear === index ? null : index);
    };

    const filteredTimeline = timeline.filter(event => {
        return activeEra === 'all' || event.era === activeEra;
    });

    return (
        <section
            className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Company Timeline"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div
                        className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
                    >
                        {config?.badge?.showPulse && (
                            <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
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

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all">
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Era Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveEra('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeEra === 'all'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                            }`}
                    >
                        All Eras
                    </button>
                    {eras.map((era) => (
                        <button
                            key={era.id}
                            onClick={() => setActiveEra(era.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${activeEra === era.id
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                }`}
                        >
                            <span>{era.icon}</span>
                            {era.name}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto mb-16">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-blue-500 to-indigo-500 hidden md:block" aria-hidden="true" />
                    <div className="space-y-8">
                        {filteredTimeline.map((event, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="hidden md:block w-1/2" />
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 hidden md:block" />
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div
                                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer"
                                        onClick={() => toggleYear(index)}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
                                                <HiOutlineCalendar className="w-4 h-4" />
                                                {event.year}
                                            </div>
                                            <div className="text-2xl">{event.icon}</div>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{event.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{event.description}</p>
                                        {openYear === index && event.details && (
                                            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-xs text-gray-500">{event.details}</p>
                                                {event.metric && (
                                                    <div className="mt-2 flex items-center gap-2 text-xs text-blue-600">
                                                        <HiOutlineChartBar className="w-3 h-3" />
                                                        <span>{event.metric}</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {event.details && (
                                            <button className="mt-2 text-xs text-blue-600 hover:underline flex items-center gap-1">
                                                {openYear === index ? 'Show less' : 'Read more'}
                                                <HiOutlineChevronDown className={`w-3 h-3 transition-transform ${openYear === index ? 'rotate-180' : ''}`} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Milestone Summary */}
                <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HiOutlineTrophy className="w-8 h-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Key Milestones</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">2020</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Company Founded</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">2021</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Global Expansion</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">2022</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Industry Recognition</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">2024</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">10,000+ Customers</div>
                        </div>
                    </div>
                </div>

                {/* Future Vision */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center mb-12">
                    <div className="text-4xl mb-3">🔮</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">What's Next?</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
                        {config?.futureVision || "We're just getting started. In the coming years, we plan to expand to 100+ countries, launch AI-powered forecasting with 99% accuracy, and help 100,000 businesses achieve operational excellence."}
                    </p>
                    <Link
                        href="/roadmap"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                        View Our Roadmap
                        <HiOutlineArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                        <HiOutlineRocketLaunch className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {config?.contactText || "Be part of our journey. Join us as we shape the future of inventory management."}
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

export default CompanyTimelineSection1;
