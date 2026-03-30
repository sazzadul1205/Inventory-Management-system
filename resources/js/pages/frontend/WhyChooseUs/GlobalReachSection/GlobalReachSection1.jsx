// frontend/WhyChooseUs/GlobalReachSection/GlobalReachSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineSearch,
    HiOutlineGlobeAlt,
    HiOutlineLocationMarker,
    HiOutlineUsers,
    HiOutlineArrowRight,
    HiOutlineClock,
} from 'react-icons/hi';

const GlobalReachSection1 = ({ config }) => {
    const [openFaq, setOpenFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeRegion, setActiveRegion] = useState('all');

    const faqs = config?.faqs || [];
    const regions = config?.regions || [];
    const stats = config?.stats || [];
    const offices = config?.offices || [];
    const languages = config?.languages || [];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = searchQuery === '' ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesSearch;
    });

    const filteredOffices = offices.filter(office => {
        return activeRegion === 'all' || office.region === activeRegion;
    });

    return (
        <section
            className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Global Reach"
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
                        <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all group">
                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Global Map Visualization */}
                <div className="mb-16 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center">
                    <div className="text-5xl mb-4">🌍</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Global Footprint</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {regions.map((region, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4">
                                <div className="text-2xl mb-2">{region.icon}</div>
                                <div className="font-semibold text-gray-900 dark:text-white">{region.name}</div>
                                <div className="text-xs text-gray-500">{region.officeCount} offices</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Region Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveRegion('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeRegion === 'all'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                            }`}
                    >
                        All Locations
                    </button>
                    {regions.map((region) => (
                        <button
                            key={region.id}
                            onClick={() => setActiveRegion(region.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${activeRegion === region.id
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                }`}
                        >
                            <span>{region.icon}</span>
                            {region.name}
                        </button>
                    ))}
                </div>

                {/* Offices Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredOffices.map((office, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                        >
                            <div className="h-32 bg-linear-to-r from-blue-500 to-indigo-600 relative">
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-2xl font-bold">{office.city}</div>
                                    <div className="text-sm opacity-90">{office.country}</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start gap-3 mb-3">
                                    <HiOutlineLocationMarker className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {office.address}
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 mb-3">
                                    <HiOutlineClock className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {office.hours}
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 mb-4">
                                    <HiOutlineUsers className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {office.teamSize} team members
                                    </div>
                                </div>
                                {office.mapLink && (
                                    <Link
                                        href={office.mapLink}
                                        className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:gap-2 transition-all"
                                    >
                                        View on Map
                                        <HiOutlineArrowRight className="w-3 h-3" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Languages Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-12 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HiOutlineGlobeAlt className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Global Language Support</h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {languages.map((lang, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                                {lang}
                            </span>
                        ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our support team speaks your language, no matter where you are.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="relative">
                        <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search global reach FAQs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Results Count */}
                {searchQuery && (
                    <div className="text-center mb-4 text-sm text-gray-500">
                        Found {filteredFaqs.length} results for "{searchQuery}"
                    </div>
                )}

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto space-y-4 mb-12">
                    {filteredFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                            >
                                <div className="flex items-start gap-3 pr-4">
                                    <div className="text-xl mt-0.5">{faq.icon}</div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {faq.question}
                                        </div>
                                        {faq.tags && (
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                {faq.tags.slice(0, 2).map((tag, idx) => (
                                                    <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="text-blue-500">
                                    {openFaq === index ? (
                                        <HiOutlineChevronUp className="w-5 h-5" />
                                    ) : (
                                        <HiOutlineChevronDown className="w-5 h-5" />
                                    )}
                                </div>
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                    {faq.link && (
                                        <Link
                                            href={faq.link}
                                            className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-3 hover:gap-2 transition-all"
                                        >
                                            Learn more
                                            <HiOutlineArrowRight className="w-3 h-3" />
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredFaqs.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🌍</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                        <p className="text-gray-500">Try adjusting your search to find what you're looking for.</p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                        <HiOutlineGlobeAlt className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {config?.contactText || "Ready to expand globally? Our team can help you scale across borders."}
                        </span>
                        <Link
                            href={config?.contactLink || "/contact"}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Contact Global Team"}
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

export default GlobalReachSection1;