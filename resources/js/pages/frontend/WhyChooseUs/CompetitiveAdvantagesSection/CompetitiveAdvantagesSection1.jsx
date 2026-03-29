// frontend/WhyChooseUs/CompetitiveAdvantagesSection/CompetitiveAdvantagesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineSearch,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlineTrendingUp,
} from 'react-icons/hi';

const CompetitiveAdvantagesSection1 = ({ config }) => {
    const [openFaq, setOpenFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const faqs = config?.faqs || [];
    const categories = config?.categories || [];
    const stats = config?.stats || [];
    const advantages = config?.advantages || [];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = searchQuery === '' ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesCategory && matchesSearch;
    });

    return (
        <section
            className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Competitive Advantages"
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

                {/* Competitive Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{advantage.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{advantage.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{advantage.description}</p>
                            <div className="flex items-center gap-2 text-sm text-blue-600">
                                <HiOutlineCheckCircle className="w-4 h-4" />
                                <span>{advantage.feature}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        How We Compare
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-md">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Inventory Platform</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500">Competitors</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                <tr>
                                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">AI-Powered Forecasting</td>
                                    <td className="px-6 py-4 text-center text-sm text-green-600">✓ Included</td>
                                    <td className="px-6 py-4 text-center text-sm text-gray-400">Limited or Premium</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Real-Time Inventory Sync</td>
                                    <td className="px-6 py-4 text-center text-sm text-green-600">✓ Instant</td>
                                    <td className="px-6 py-4 text-center text-sm text-gray-400">Delayed (15-30 min)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Integration Marketplace</td>
                                    <td className="px-6 py-4 text-center text-sm text-green-600">100+ Integrations</td>
                                    <td className="px-6 py-4 text-center text-sm text-gray-400">20-50 Integrations</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Support Response Time</td>
                                    <td className="px-6 py-4 text-center text-sm text-green-600">&lt; 2 minutes (Live Chat)</td>
                                    <td className="px-6 py-4 text-center text-sm text-gray-400">24-48 hours</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Implementation Time</td>
                                    <td className="px-6 py-4 text-center text-sm text-green-600">2-4 weeks</td>
                                    <td className="px-6 py-4 text-center text-sm text-gray-400">2-6 months</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="relative">
                        <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search advantages FAQs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'all'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                            }`}
                    >
                        All Questions
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${activeCategory === category.id
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                }`}
                        >
                            <span>{category.icon}</span>
                            {category.name}
                        </button>
                    ))}
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
                        <div className="text-6xl mb-4">🏆</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                        <HiOutlineTrendingUp className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {config?.contactText || "Ready to experience the difference? Start your free trial today."}
                        </span>
                        <Link
                            href={config?.contactLink || "/signup"}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Start Free Trial"}
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

export default CompetitiveAdvantagesSection1;