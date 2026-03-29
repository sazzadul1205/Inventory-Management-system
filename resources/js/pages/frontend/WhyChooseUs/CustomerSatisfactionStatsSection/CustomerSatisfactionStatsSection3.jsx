// frontend/WhyChooseUs/CustomerSatisfactionStatsSection/CustomerSatisfactionStatsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineSearch,
    HiOutlineStar,
    HiOutlineUsers,
    HiOutlineChartBar,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlineHeart,
    HiOutlineTrendingUp,
    HiOutlineX,
    HiOutlineThumbUp,
    HiOutlineThumbDown,
    HiOutlineExternalLink,
    HiOutlineFilter,
    HiOutlineBookmark,
    HiOutlinePrinter,
    HiOutlineDownload,
    HiOutlinePlay,
    HiOutlineCalendar,
} from 'react-icons/hi';

const CustomerSatisfactionStatsSection3 = ({ config }) => {
    const [openFaq, setOpenFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [sortBy, setSortBy] = useState('recent');
    const [showFilters, setShowFilters] = useState(false);
    const [helpfulVotes, setHelpfulVotes] = useState({});
    const [savedFaqs, setSavedFaqs] = useState([]);
    const [activeTab, setActiveTab] = useState('stats');
    const [expandedCategories, setExpandedCategories] = useState({});
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [autoplayTestimonials, setAutoplayTestimonials] = useState(true);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const searchRef = useRef(null);
    const intervalRef = useRef(null);

    const faqs = config?.faqs || [];
    const categories = config?.categories || [];
    const stats = config?.stats || [];
    const testimonials = config?.testimonials || [];
    const videos = config?.videos || [];
    const metrics = config?.metrics || [];
    const npsData = config?.npsData || [];

    useEffect(() => {
        const savedVotes = localStorage.getItem('satisfactionFaqHelpfulVotes');
        if (savedVotes) {
            setHelpfulVotes(JSON.parse(savedVotes));
        }
        const saved = localStorage.getItem('savedSatisfactionFaqs');
        if (saved) {
            setSavedFaqs(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        if (autoplayTestimonials && testimonials.length > 0 && activeTab === 'stories') {
            intervalRef.current = setInterval(() => {
                setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
            }, 6000);
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoplayTestimonials, testimonials.length, activeTab]);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const toggleCategory = (categoryId) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    };

    const handleHelpful = (faqId, isHelpful) => {
        setHelpfulVotes(prev => {
            const newVotes = { ...prev, [faqId]: isHelpful };
            localStorage.setItem('satisfactionFaqHelpfulVotes', JSON.stringify(newVotes));
            return newVotes;
        });
    };

    const handleSaveFaq = (faqId) => {
        setSavedFaqs(prev => {
            const newSaved = prev.includes(faqId)
                ? prev.filter(id => id !== faqId)
                : [...prev, faqId];
            localStorage.setItem('savedSatisfactionFaqs', JSON.stringify(newSaved));
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
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', 'satisfaction-faq-export.json');
        linkElement.click();
    };

    const handlePrint = () => {
        window.print();
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

    const groupedFaqs = categories.reduce((acc, category) => {
        acc[category.id] = filteredFaqs.filter(faq => faq.category === category.id);
        return acc;
    }, {});

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

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section
            className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Customer Satisfaction Stats Knowledge Base"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
            <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
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

                {/* Tab Navigation */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('stats')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'stats'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineChartBar className="inline w-4 h-4 mr-2" />
                        Key Metrics
                    </button>
                    <button
                        onClick={() => setActiveTab('stories')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'stories'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlinePlay className="inline w-4 h-4 mr-2" />
                        Customer Stories
                    </button>
                    <button
                        onClick={() => setActiveTab('nps')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'nps'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineTrendingUp className="inline w-4 h-4 mr-2" />
                        NPS & Trends
                    </button>
                    <button
                        onClick={() => setActiveTab('faq')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'faq'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineQuestionMarkCircle className="inline w-4 h-4 mr-2" />
                        FAQs
                    </button>
                </div>

                {/* Key Metrics Tab */}
                {activeTab === 'stats' && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {metrics.map((metric, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center group">
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{metric.icon}</div>
                                    <div className="text-3xl font-bold text-blue-600 mb-1">{metric.value}</div>
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{metric.label}</div>
                                    <p className="text-xs text-gray-500 mt-2">{metric.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Overall Rating */}
                        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white mb-12">
                            <div className="text-5xl mb-3">⭐</div>
                            <div className="text-7xl font-bold mb-2">{config?.overallRating || "4.9"}/5</div>
                            <div className="text-xl mb-4">Average Customer Rating</div>
                            <div className="flex items-center justify-center gap-2 text-sm text-blue-100">
                                <HiOutlineUsers className="w-4 h-4" />
                                <span>Based on {config?.reviewCount || "1,200+"} verified reviews across platforms</span>
                            </div>
                            <div className="flex justify-center gap-4 mt-4">
                                {config?.reviewPlatforms?.map((platform, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-lg font-bold">{platform.rating}</div>
                                        <div className="text-xs text-blue-200">{platform.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Rating Distribution */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-12">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Rating Distribution</h3>
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((stars) => (
                                    <div key={stars} className="flex items-center gap-3">
                                        <div className="w-12 text-sm text-gray-600 dark:text-gray-400">{stars} ★</div>
                                        <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-yellow-400 rounded-full"
                                                style={{ width: `${config?.ratingDistribution?.[stars] || 0}%` }}
                                            ></div>
                                        </div>
                                        <div className="w-12 text-sm text-gray-600 dark:text-gray-400">
                                            {config?.ratingDistribution?.[stars] || 0}%
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Customer Stories Tab */}
                {activeTab === 'stories' && (
                    <>
                        {/* Video Stories */}
                        {videos.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                    Watch Customer Stories
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {videos.map((video, index) => (
                                        <div
                                            key={index}
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden cursor-pointer group"
                                            onClick={() => {
                                                setSelectedVideo(video);
                                                setShowVideoModal(true);
                                            }}
                                        >
                                            <div className="relative h-48 bg-linear-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                                                    <HiOutlinePlay className="w-8 h-8 text-white" />
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{video.title}</h4>
                                                <p className="text-sm text-gray-500">{video.author} • {video.company}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Written Testimonials Carousel */}
                        {testimonials.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                    What Our Customers Say
                                </h3>
                                <div className="relative max-w-3xl mx-auto">
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
                                        <div className="flex items-center justify-center gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 italic text-lg mb-6">
                                            "{testimonials[activeTestimonial]?.quote}"
                                        </p>
                                        <div>
                                            <div className="font-bold text-gray-900 dark:text-white">{testimonials[activeTestimonial]?.name}</div>
                                            <div className="text-sm text-gray-500">{testimonials[activeTestimonial]?.role}, {testimonials[activeTestimonial]?.company}</div>
                                            <div className="text-xs text-blue-600 mt-1">{testimonials[activeTestimonial]?.result}</div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={prevTestimonial}
                                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all"
                                    >
                                        <HiOutlineChevronUp className="w-5 h-5 rotate-270" />
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all"
                                    >
                                        <HiOutlineChevronUp className="w-5 h-5 rotate-90" />
                                    </button>
                                    <div className="flex justify-center gap-2 mt-4">
                                        {testimonials.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveTestimonial(idx)}
                                                className={`h-2 rounded-full transition-all ${activeTestimonial === idx ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => setAutoplayTestimonials(!autoplayTestimonials)}
                                        className="absolute bottom-0 right-0 text-xs text-gray-400 hover:text-blue-600"
                                    >
                                        {autoplayTestimonials ? 'Pause' : 'Play'}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* All Testimonials Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 cursor-pointer"
                                    onClick={() => {
                                        setSelectedTestimonial(testimonial);
                                        setShowModal(true);
                                    }}
                                >
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <HiOutlineStar
                                                key={i}
                                                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4 line-clamp-3">"{testimonial.quote}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xl">
                                            {testimonial.icon}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                                            <div className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</div>
                                        </div>
                                    </div>
                                    {testimonial.verified && (
                                        <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                                            <HiOutlineCheckCircle className="w-3 h-3" />
                                            Verified Customer
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* NPS & Trends Tab */}
                {activeTab === 'nps' && (
                    <>
                        <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center mb-12">
                            <div className="text-5xl mb-3">📊</div>
                            <div className="text-6xl font-bold text-blue-600 mb-2">{config?.nps || "85"}</div>
                            <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Net Promoter Score (NPS)</div>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Our NPS of 85 places us in the top 5% of B2B software companies, reflecting exceptional customer loyalty and satisfaction.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-12">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">NPS Trend Over Time</h3>
                            <div className="space-y-4">
                                {npsData.map((data, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                                            <span>{data.quarter}</span>
                                            <span className="font-semibold text-blue-600">{data.score}</span>
                                        </div>
                                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-linear-to-r from-blue-500 to-indigo-600 rounded-full"
                                                style={{ width: `${(data.score / 100) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center">
                                <div className="text-3xl mb-2">😊</div>
                                <div className="text-2xl font-bold text-green-600">{config?.promoters || "75%"}%</div>
                                <div className="text-sm font-semibold text-gray-900 dark:text-white">Promoters</div>
                                <div className="text-xs text-gray-500 mt-1">Would enthusiastically recommend</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center">
                                <div className="text-3xl mb-2">😐</div>
                                <div className="text-2xl font-bold text-yellow-600">{config?.passives || "20%"}%</div>
                                <div className="text-sm font-semibold text-gray-900 dark:text-white">Passives</div>
                                <div className="text-xs text-gray-500 mt-1">Satisfied but not enthusiastic</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center">
                                <div className="text-3xl mb-2">😞</div>
                                <div className="text-2xl font-bold text-red-600">{config?.detractors || "5%"}%</div>
                                <div className="text-sm font-semibold text-gray-900 dark:text-white">Detractors</div>
                                <div className="text-xs text-gray-500 mt-1">Unlikely to recommend</div>
                            </div>
                        </div>
                    </>
                )}

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                    <>
                        {/* Search and Action Bar */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1 relative" ref={searchRef}>
                                <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search satisfaction FAQs..."
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

                        {/* FAQ Category Accordion */}
                        <div className="space-y-6 mb-12">
                            {categories.map((category) => {
                                const categoryFaqs = groupedFaqs[category.id] || [];
                                if (categoryFaqs.length === 0 && searchQuery) return null;

                                const isExpanded = expandedCategories[category.id] || searchQuery !== '';

                                return (
                                    <div key={category.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                                        <button
                                            onClick={() => toggleCategory(category.id)}
                                            className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{category.icon}</span>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.name}</h3>
                                                    <p className="text-sm text-gray-500">{category.description}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm text-gray-400">{categoryFaqs.length} questions</span>
                                                {isExpanded ? (
                                                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                                                ) : (
                                                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                                                )}
                                            </div>
                                        </button>

                                        {isExpanded && (
                                            <div className="border-t border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
                                                {categoryFaqs.map((faq, idx) => (
                                                    <div key={idx} className="p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                                        <button
                                                            onClick={() => toggleFaq(`${category.id}-${idx}`)}
                                                            className="w-full text-left flex justify-between items-center"
                                                        >
                                                            <div className="flex items-start gap-3 pr-4">
                                                                <div className="text-xl mt-0.5">{faq.icon}</div>
                                                                <div className="flex-1">
                                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                                        {highlightedText(faq.question, searchQuery)}
                                                                    </div>
                                                                    {faq.tags && (
                                                                        <div className="flex flex-wrap gap-1 mt-1">
                                                                            {faq.tags.slice(0, 2).map((tag, tagIdx) => (
                                                                                <span key={tagIdx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                                                                                    {tag}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleSaveFaq(faq.id);
                                                                    }}
                                                                    className="text-gray-400 hover:text-blue-600 transition-colors"
                                                                >
                                                                    <HiOutlineBookmark className={`w-4 h-4 ${savedFaqs.includes(faq.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                                                                </button>
                                                                <div className="text-blue-500">
                                                                    {openFaq === `${category.id}-${idx}` ? (
                                                                        <HiOutlineChevronUp className="w-5 h-5" />
                                                                    ) : (
                                                                        <HiOutlineChevronDown className="w-5 h-5" />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </button>

                                                        {openFaq === `${category.id}-${idx}` && (
                                                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
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
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Empty State */}
                        {filteredFaqs.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">⭐</div>
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
                    </>
                )}

                {/* Testimonial Modal */}
                {showModal && selectedTestimonial && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowModal(false)}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                            <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6 rounded-t-3xl text-white">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <HiOutlineStar key={i} className={`w-5 h-5 ${i < selectedTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/50'}`} />
                                        ))}
                                    </div>
                                    <button onClick={() => setShowModal(false)} className="text-white hover:text-gray-200">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                                <p className="text-lg italic mt-4">"{selectedTestimonial.quote}"</p>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl">
                                        {selectedTestimonial.icon}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 dark:text-white">{selectedTestimonial.name}</div>
                                        <div className="text-sm text-gray-500">{selectedTestimonial.role}, {selectedTestimonial.company}</div>
                                    </div>
                                </div>
                                {selectedTestimonial.verified && (
                                    <div className="flex items-center gap-1 text-sm text-green-600 mb-4">
                                        <HiOutlineCheckCircle className="w-4 h-4" />
                                        Verified Customer
                                    </div>
                                )}
                                {selectedTestimonial.detail && (
                                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{selectedTestimonial.detail}</p>
                                    </div>
                                )}
                                <div className="mt-4 text-xs text-gray-400 flex items-center gap-1">
                                    <HiOutlineCalendar className="w-3 h-3" />
                                    {selectedTestimonial.date}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Modal */}
                {showVideoModal && selectedVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setShowVideoModal(false)}>
                        <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setShowVideoModal(false)}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                            >
                                <HiOutlineX className="w-6 h-6" />
                            </button>
                            <div className="bg-black rounded-2xl overflow-hidden">
                                <div className="aspect-video flex items-center justify-center">
                                    <video
                                        src={selectedVideo.url}
                                        controls
                                        autoPlay
                                        className="w-full h-full"
                                        poster={selectedVideo.thumbnail}
                                    />
                                </div>
                                <div className="p-4 bg-gray-900">
                                    <h3 className="text-white font-bold">{selectedVideo.title}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{selectedVideo.author} • {selectedVideo.company}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                        <HiOutlineHeart className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {config?.contactText || "Join thousands of satisfied customers. Start your free trial today."}
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .rotate-90 {
          transform: rotate(90deg);
        }
        .rotate-270 {
          transform: rotate(270deg);
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

export default CustomerSatisfactionStatsSection3;