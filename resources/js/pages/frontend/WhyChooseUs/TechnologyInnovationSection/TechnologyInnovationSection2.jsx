// frontend/WhyChooseUs/TechnologyInnovationSection/TechnologyInnovationSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineSearch,
    HiOutlineChip,
    HiOutlineShieldCheck,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlineSparkles,
    HiOutlineDatabase,
    HiOutlineX,
    HiOutlineThumbUp,
    HiOutlineThumbDown,
    HiOutlineExternalLink,
    HiOutlineFilter,
    HiOutlineBookmark,
    HiOutlinePrinter,
    HiOutlineDownload,
    HiOutlineCode,
} from 'react-icons/hi';

const TechnologyInnovationSection2 = ({ config }) => {
    const [openFaq, setOpenFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [sortBy, setSortBy] = useState('recent');
    const [showFilters, setShowFilters] = useState(false);
    const [helpfulVotes, setHelpfulVotes] = useState({});
    const [savedFaqs, setSavedFaqs] = useState([]);
    const [showApiDocs, setShowApiDocs] = useState(false);
    const [selectedApiEndpoint, setSelectedApiEndpoint] = useState(null);
    const [apiResponse, setApiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const searchRef = useRef(null);

    const faqs = config?.faqs || [];
    const categories = config?.categories || [];
    const stats = config?.stats || [];
    const technologies = config?.technologies || [];
    const innovations = config?.innovations || [];
    const performanceMetrics = config?.performanceMetrics || [];
    const apiEndpoints = config?.apiEndpoints || [];

    useEffect(() => {
        const savedVotes = localStorage.getItem('techFaqHelpfulVotes');
        if (savedVotes) {
            setHelpfulVotes(JSON.parse(savedVotes));
        }
        const saved = localStorage.getItem('savedTechFaqs');
        if (saved) {
            setSavedFaqs(JSON.parse(saved));
        }
    }, []);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleHelpful = (faqId, isHelpful) => {
        setHelpfulVotes(prev => {
            const newVotes = { ...prev, [faqId]: isHelpful };
            localStorage.setItem('techFaqHelpfulVotes', JSON.stringify(newVotes));
            return newVotes;
        });
    };

    const handleSaveFaq = (faqId) => {
        setSavedFaqs(prev => {
            const newSaved = prev.includes(faqId)
                ? prev.filter(id => id !== faqId)
                : [...prev, faqId];
            localStorage.setItem('savedTechFaqs', JSON.stringify(newSaved));
            return newSaved;
        });
    };

    const handleExport = () => {
        const exportData = filteredFaqs.map(faq => ({
            question: faq.question,
            answer: faq.answer,
            category: categories.find(c => c.id === faq.category)?.name || faq.category,
            tags: faq.tags
        }));
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = `data:application/json;charset=utf-8,${  encodeURIComponent(dataStr)}`;
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', 'tech-faq-export.json');
        linkElement.click();
    };

    const handlePrint = () => {
        window.print();
    };

    const handleApiTest = async (endpoint) => {
        setIsLoading(true);
        setApiResponse('');
        setSelectedApiEndpoint(endpoint);
        setTimeout(() => {
            setApiResponse(JSON.stringify({
                status: 'success',
                data: {
                    endpoint: endpoint.path,
                    method: endpoint.method,
                    timestamp: new Date().toISOString(),
                    sample_response: endpoint.sampleResponse
                }
            }, null, 2));
            setIsLoading(false);
        }, 800);
    };

    const filteredFaqs = faqs
        .filter(faq => {
            const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
            const matchesSearch = searchQuery === '' ||
                faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            if (sortBy === 'recent') return b.updatedAt?.localeCompare(a.updatedAt) || 0;
            if (sortBy === 'popular') return (b.views || 0) - (a.views || 0);
            if (sortBy === 'helpful') return (helpfulVotes[b.id] ? 1 : 0) - (helpfulVotes[a.id] ? 1 : 0);
            return 0;
        });

    const highlightedText = (text, query) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, i) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-white px-0.5 rounded">
                    {part}
                </mark>
            ) : (
                part
            )
        );
    };

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Technology & Innovation Help Center"
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
                        <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg transition-all group">
                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Performance Metrics Dashboard */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        Platform Performance
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {performanceMetrics.map((metric, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center">
                                <div className="text-3xl mb-2">{metric.icon}</div>
                                <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                                <div className="text-sm font-semibold text-gray-900 dark:text-white">{metric.label}</div>
                                <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        Our Technology Stack
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {technologies.map((tech, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center group">
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tech.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Innovations */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        Key Innovations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {innovations.map((innovation, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">{innovation.icon}</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{innovation.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{innovation.description}</p>
                                        <div className="inline-flex items-center gap-1 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-2 py-1 rounded-full">
                                            <HiOutlineCheckCircle className="w-3 h-3" />
                                            {innovation.benefit}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* API Playground */}
                <div className="mb-16">
                    <div className="flex justify-center mb-4">
                        <button
                            onClick={() => setShowApiDocs(!showApiDocs)}
                            className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all inline-flex items-center gap-2"
                        >
                            <HiOutlineCode className="w-4 h-4" />
                            {showApiDocs ? 'Hide API Playground' : 'Try API Playground'}
                        </button>
                    </div>

                    {showApiDocs && (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-4 text-white">
                                <div className="flex items-center gap-2">
                                    <HiOutlineCode className="w-5 h-5" />
                                    <span className="font-semibold">API Playground</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Test API Endpoints</h3>
                                        <div className="space-y-3">
                                            {apiEndpoints.map((endpoint, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleApiTest(endpoint)}
                                                    className={`w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group ${selectedApiEndpoint?.path === endpoint.path ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300' : ''}`}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <span className={`text-xs font-mono px-2 py-1 rounded ${endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                                                                endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                                                                    endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                                                                        'bg-red-100 text-red-700'
                                                                }`}>
                                                                {endpoint.method}
                                                            </span>
                                                            <span className="font-mono text-sm">{endpoint.path}</span>
                                                        </div>
                                                        <HiOutlineArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-1">{endpoint.description}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Response</h3>
                                        <div className="bg-gray-900 rounded-lg p-4 min-h-75">
                                            {isLoading ? (
                                                <div className="flex items-center justify-center h-full">
                                                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent" />
                                                </div>
                                            ) : (
                                                <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap overflow-x-auto">
                                                    {apiResponse || 'Click an endpoint to test...'}
                                                </pre>
                                            )}
                                        </div>
                                        <div className="mt-3 text-center text-xs text-gray-500">
                                            <HiOutlineShieldCheck className="inline w-3 h-3 mr-1" />
                                            This is a simulation. Real API calls require authentication.
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <Link
                                        href="/developers/api"
                                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                                    >
                                        View Full API Documentation
                                        <HiOutlineExternalLink className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Innovation Lab */}
                <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white mb-16">
                    <div className="text-4xl mb-3">🔬</div>
                    <h3 className="text-2xl font-bold mb-3">Our Innovation Lab</h3>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-4">
                        {config?.innovationLabText || "We invest 20% of engineering time in R&D, exploring emerging technologies to solve tomorrow's inventory challenges. Our innovation lab has produced 15+ patents and counting."}
                    </p>
                    <div className="flex justify-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                            <HiOutlineChip className="w-4 h-4" />
                            <span>15+ Patents</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <HiOutlineSparkles className="w-4 h-4" />
                            <span>20% R&D Time</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <HiOutlineDatabase className="w-4 h-4" />
                            <span>3 New Products</span>
                        </div>
                    </div>
                </div>

                {/* Search and Action Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative" ref={searchRef}>
                        <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search technology FAQs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                        >
                            <HiOutlineFilter className="w-4 h-4" />
                        </button>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        >
                            <option value="recent">Most Recent</option>
                            <option value="popular">Most Popular</option>
                            <option value="helpful">Most Helpful</option>
                        </select>
                        <button
                            onClick={handleExport}
                            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                            title="Export FAQs"
                        >
                            <HiOutlineDownload className="w-4 h-4" />
                        </button>
                        <button
                            onClick={handlePrint}
                            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                            title="Print FAQs"
                        >
                            <HiOutlinePrinter className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Expanded Filters */}
                {showFilters && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setActiveCategory('all')}
                                        className={`px-3 py-1 rounded-full text-sm transition-all ${activeCategory === 'all'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                            }`}
                                    >
                                        All
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-1 ${activeCategory === category.id
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                                }`}
                                        >
                                            <span>{category.icon}</span>
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                >
                                    <option value="recent">Most Recent</option>
                                    <option value="popular">Most Popular</option>
                                    <option value="helpful">Most Helpful</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

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
                                            {highlightedText(faq.question, searchQuery)}
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
                                <div className="flex items-center gap-2">
                                    <span
                                        role="button"
                                        tabIndex={0}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSaveFaq(faq.id);
                                        }}
                                        className="text-gray-400 hover:text-blue-600 transition-colors"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                e.currentTarget.click();
                                            }
                                        }}
                                    >
                                        <HiOutlineBookmark className={`w-4 h-4 ${savedFaqs.includes(faq.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                                    </span>
                                    <div className="text-blue-500">
                                        {openFaq === index ? (
                                            <HiOutlineChevronUp className="w-5 h-5" />
                                        ) : (
                                            <HiOutlineChevronDown className="w-5 h-5" />
                                        )}
                                    </div>
                                </div>
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {highlightedText(faq.answer, searchQuery)}
                                    </p>
                                    {faq.link && (
                                        <Link
                                            href={faq.link}
                                            className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-3 hover:gap-2 transition-all"
                                        >
                                            Learn more
                                            <HiOutlineExternalLink className="w-3 h-3" />
                                        </Link>
                                    )}

                                    {/* Helpful Section */}
                                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-gray-500">Was this helpful?</span>
                                            <button
                                                onClick={() => handleHelpful(faq.id, true)}
                                                className={`flex items-center gap-1 text-xs transition-colors ${helpfulVotes[faq.id] === true
                                                    ? 'text-green-600'
                                                    : 'text-gray-400 hover:text-green-600'
                                                    }`}
                                            >
                                                <HiOutlineThumbUp className="w-4 h-4" />
                                                Yes
                                            </button>
                                            <button
                                                onClick={() => handleHelpful(faq.id, false)}
                                                className={`flex items-center gap-1 text-xs transition-colors ${helpfulVotes[faq.id] === false
                                                    ? 'text-red-600'
                                                    : 'text-gray-400 hover:text-red-600'
                                                    }`}
                                            >
                                                <HiOutlineThumbDown className="w-4 h-4" />
                                                No
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredFaqs.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔬</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                )}

                {/* Saved FAQs Section */}
                {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <HiOutlineBookmark className="w-5 h-5 text-blue-600" />
                            Saved Questions
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                                    <div className="flex items-start gap-2">
                                        <div className="text-xl">{faq.icon}</div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                                            <button
                                                onClick={() => {
                                                    setActiveCategory(faq.category);
                                                    setSearchQuery('');
                                                    setOpenFaq(null);
                                                }}
                                                className="text-xs text-blue-600 mt-1 hover:underline"
                                            >
                                                View Answer
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => handleSaveFaq(faq.id)}
                                            className="text-gray-400 hover:text-red-600"
                                        >
                                            <HiOutlineX className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                        <HiOutlineChip className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {config?.contactText || "Want to learn more about our technology? Schedule a technical deep-dive."}
                        </span>
                        <Link
                            href={config?.contactLink || "/contact"}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Talk to Engineering"}
                            <HiOutlineArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
        mark {
          background-color: #fef08a;
          color: #1e293b;
          padding: 0 2px;
          border-radius: 4px;
        }
        .dark mark {
          background-color: #854d0e;
          color: #fef9c3;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media print {
          .no-print, button, .bg-noise-pattern {
            display: none !important;
          }
          body {
            background: white;
          }
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

export default TechnologyInnovationSection2;
