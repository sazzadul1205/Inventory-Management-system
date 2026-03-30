// frontend/AboutUs/AwardsAndRecognitionSection/AwardsAndRecognitionSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineSearch,
    HiOutlineArrowRight,
    HiOutlineCalendar,
    HiOutlineX,
    HiOutlineThumbUp,
    HiOutlineThumbDown,
    HiOutlineExternalLink,
    HiOutlineFilter,
    HiOutlineBookmark,
    HiOutlinePrinter,
    HiOutlineDownload,
    HiOutlineSparkles,
} from 'react-icons/hi';
import { HiOutlineTrophy } from "react-icons/hi2";

const AwardsAndRecognitionSection2 = ({ config }) => {
    const [openFaq, setOpenFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeYear, setActiveYear] = useState('all');
    const [activeType, setActiveType] = useState('all');
    const [sortBy, setSortBy] = useState('year');
    const [showFilters, setShowFilters] = useState(false);
    const [helpfulVotes, setHelpfulVotes] = useState({});
    const [savedFaqs, setSavedFaqs] = useState([]);
    const [selectedAward, setSelectedAward] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const searchRef = useRef(null);

    const faqs = config?.faqs || [];
    const categories = config?.categories || [];
    const stats = config?.stats || [];
    const awards = config?.awards || [];
    const years = config?.years || [];
    const awardTypes = config?.awardTypes || [];

    useEffect(() => {
        const savedVotes = localStorage.getItem('awardsFaqHelpfulVotes');
        if (savedVotes) {
            setHelpfulVotes(JSON.parse(savedVotes));
        }
        const saved = localStorage.getItem('savedAwardsFaqs');
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
            localStorage.setItem('awardsFaqHelpfulVotes', JSON.stringify(newVotes));
            return newVotes;
        });
    };

    const handleSaveFaq = (faqId) => {
        setSavedFaqs(prev => {
            const newSaved = prev.includes(faqId)
                ? prev.filter(id => id !== faqId)
                : [...prev, faqId];
            localStorage.setItem('savedAwardsFaqs', JSON.stringify(newSaved));
            return newSaved;
        });
    };

    const handleExport = () => {
        const exportData = filteredAwards.map(award => ({
            title: award.title,
            awarder: award.awarder,
            year: award.year,
            type: award.type,
            description: award.description,
        }));
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = `data:application/json;charset=utf-8,${  encodeURIComponent(dataStr)}`;
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', 'awards-export.json');
        linkElement.click();
    };

    const handlePrint = () => {
        window.print();
    };

    const filteredAwards = awards
        .filter(award => {
            const matchesYear = activeYear === 'all' || award.year === activeYear;
            const matchesType = activeType === 'all' || award.type === activeType;
            const matchesSearch = searchQuery === '' ||
                award.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                award.awarder.toLowerCase().includes(searchQuery.toLowerCase()) ||
                award.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesYear && matchesType && matchesSearch;
        })
        .sort((a, b) => {
            if (sortBy === 'year') return parseInt(b.year) - parseInt(a.year);
            if (sortBy === 'title') return a.title.localeCompare(b.title);
            if (sortBy === 'awarder') return a.awarder.localeCompare(b.awarder);
            return 0;
        });

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

    const getTypeColor = (type) => {
        switch (type) {
            case 'product': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
            case 'company': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
            case 'customer': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
            case 'workplace': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
            case 'innovation': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
            default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'product': return 'Product Award';
            case 'company': return 'Company Award';
            case 'customer': return 'Customer Success';
            case 'workplace': return 'Workplace Culture';
            case 'innovation': return 'Innovation Award';
            default: return 'Award';
        }
    };

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Awards & Recognition Help Center"
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

                {/* Featured Award */}
                {config?.featuredAward && (
                    <div className="mb-16">
                        <div className="bg-linear-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-8 text-center border border-yellow-200 dark:border-yellow-800 cursor-pointer hover:shadow-xl transition-all" onClick={() => {
                            setSelectedAward(config.featuredAward);
                            setShowModal(true);
                        }}>
                            <div className="text-6xl mb-3 animate-pulse">🏆</div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{config.featuredAward.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">{config.featuredAward.awarder} • {config.featuredAward.year}</p>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{config.featuredAward.description}</p>
                            <div className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm font-semibold">
                                View Details
                                <HiOutlineArrowRight className="w-3 h-3" />
                            </div>
                        </div>
                    </div>
                )}

                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative" ref={searchRef}>
                        <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search awards by title, awarder, or description..."
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
                            <option value="year">Sort by Year (Recent First)</option>
                            <option value="title">Sort by Title</option>
                            <option value="awarder">Sort by Awarder</option>
                        </select>
                        <button
                            onClick={handleExport}
                            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                            title="Export Awards"
                        >
                            <HiOutlineDownload className="w-4 h-4" />
                        </button>
                        <button
                            onClick={handlePrint}
                            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                            title="Print Awards"
                        >
                            <HiOutlinePrinter className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Expanded Filters */}
                {showFilters && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Year</label>
                                <select
                                    value={activeYear}
                                    onChange={(e) => setActiveYear(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                >
                                    <option value="all">All Years</option>
                                    {years.map((year) => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Award Type</label>
                                <select
                                    value={activeType}
                                    onChange={(e) => setActiveType(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                >
                                    <option value="all">All Types</option>
                                    {awardTypes.map((type) => (
                                        <option key={type.value} value={type.value}>{type.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                >
                                    <option value="year">Year (Recent First)</option>
                                    <option value="title">Title</option>
                                    <option value="awarder">Awarder</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {/* Results Count */}
                {searchQuery && (
                    <div className="text-center mb-4 text-sm text-gray-500">
                        Found {filteredAwards.length} awards for &quot;{searchQuery}&quot;
                    </div>
                )}

                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredAwards.map((award, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer group"
                            onClick={() => {
                                setSelectedAward(award);
                                setShowModal(true);
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-4xl group-hover:scale-110 transition-transform">{award.icon}</div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{award.title}</h3>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(award.type)}`}>
                                            {getTypeLabel(award.type)}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                        <span className="text-blue-600">{award.awarder}</span>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineCalendar className="w-3 h-3" />
                                            {award.year}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{award.description}</p>
                                    <div className="mt-3 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Details →
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredAwards.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🏆</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No awards found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter to find what you&apos;re looking for.</p>
                    </div>
                )}

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                        Frequently Asked Questions
                    </h3>

                    {/* Category Filters for FAQs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeCategory === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                                }`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${activeCategory === category.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4 mb-12">
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
                                        <span role="button" tabIndex={0}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSaveFaq(faq.id);
                                            }}
                                            className="text-gray-400 hover:text-blue-600 transition-colors"
                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }}
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

                    {/* FAQ Empty State */}
                    {filteredFaqs.length === 0 && searchQuery && (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No FAQs found for &quot;{searchQuery}&quot;</p>
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
                                            <span role="button" tabIndex={0}
                                                onClick={() => handleSaveFaq(faq.id)}
                                                className="text-gray-400 hover:text-red-600"
                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }}
                                            >
                                                <HiOutlineX className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Award Modal */}
                {showModal && selectedAward && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowModal(false)}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
                            <div className="bg-linear-to-r from-yellow-500 to-amber-500 p-6 rounded-t-3xl text-white">
                                <div className="flex justify-between items-start">
                                    <div className="text-5xl">{selectedAward.icon}</div>
                                    <button onClick={() => setShowModal(false)} className="text-white hover:text-gray-200">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                                <h3 className="text-xl font-bold mt-3">{selectedAward.title}</h3>
                                <p className="text-sm opacity-90 mt-1">{selectedAward.awarder} • {selectedAward.year}</p>
                            </div>
                            <div className="p-6">
                                <div className="mb-4">
                                    <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(selectedAward.type)}`}>
                                        {getTypeLabel(selectedAward.type)}
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedAward.description}</p>
                                {selectedAward.details && (
                                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What the judges said:</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{selectedAward.details}</p>
                                    </div>
                                )}
                                {selectedAward.link && (
                                    <Link
                                        href={selectedAward.link}
                                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                                    >
                                        Read the announcement
                                        <HiOutlineExternalLink className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Press & Media CTA */}
                <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HiOutlineSparkles className="w-8 h-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Press & Media Inquiries</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
                        For press inquiries, interview requests, or to request our media kit, please contact our media relations team.
                    </p>
                    <Link
                        href="/press"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                    >
                        Contact Media Team
                        <HiOutlineArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                        <HiOutlineTrophy className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {config?.contactText || "Want to learn more about our achievements? Contact our media team."}
                        </span>
                        <Link
                            href={config?.contactLink || "/press"}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Press & Media"}
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default AwardsAndRecognitionSection2;

