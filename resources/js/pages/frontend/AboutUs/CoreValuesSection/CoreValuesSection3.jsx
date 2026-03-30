// frontend/AboutUs/CoreValuesSection/CoreValuesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineSearch,
    HiOutlineHeart,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlineGlobeAlt,
    HiOutlineSparkles,
    HiOutlineX,
    HiOutlineThumbUp,
    HiOutlineThumbDown,
    HiOutlineExternalLink,
    HiOutlineFilter,
    HiOutlineBookmark,
    HiOutlinePrinter,
    HiOutlineDownload,
    HiOutlinePlay,
    HiOutlinePause,
    HiOutlineUserGroup,
    HiOutlineFlag,
    HiOutlineBookOpen,
    HiOutlineQuestionMarkCircle,
} from 'react-icons/hi';
import { HiOutlineTrophy } from "react-icons/hi2";

const CoreValuesSection3 = ({ config }) => {
    const [openFaq, setOpenFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [sortBy, setSortBy] = useState('recent');
    const [showFilters, setShowFilters] = useState(false);
    const [helpfulVotes, setHelpfulVotes] = useState({});
    const [savedFaqs, setSavedFaqs] = useState([]);
    const [activeValue, setActiveValue] = useState(0);
    const [autoplayValues, setAutoplayValues] = useState(true);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [showRecognitionModal, setShowRecognitionModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedRecognition, setSelectedRecognition] = useState(null);
    const [activeTab, setActiveTab] = useState('values');
    const searchRef = useRef(null);
    const intervalRef = useRef(null);

    const faqs = config?.faqs || [];
    const categories = config?.categories || [];
    const stats = config?.stats || [];
    const values = config?.values || [];
    const testimonials = config?.testimonials || [];
    const videos = config?.videos || [];
    const recognitions = config?.recognitions || [];
    const initiatives = config?.initiatives || [];

    useEffect(() => {
        const savedVotes = localStorage.getItem('valuesFaqHelpfulVotes');
        if (savedVotes) {
            setHelpfulVotes(JSON.parse(savedVotes));
        }
        const saved = localStorage.getItem('savedValuesFaqs');
        if (saved) {
            setSavedFaqs(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        if (autoplayValues && values.length > 0 && activeTab === 'values') {
            intervalRef.current = setInterval(() => {
                setActiveValue((prev) => (prev + 1) % values.length);
            }, 6000);
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoplayValues, values.length, activeTab]);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleHelpful = (faqId, isHelpful) => {
        setHelpfulVotes(prev => {
            const newVotes = { ...prev, [faqId]: isHelpful };
            localStorage.setItem('valuesFaqHelpfulVotes', JSON.stringify(newVotes));
            return newVotes;
        });
    };

    const handleSaveFaq = (faqId) => {
        setSavedFaqs(prev => {
            const newSaved = prev.includes(faqId)
                ? prev.filter(id => id !== faqId)
                : [...prev, faqId];
            localStorage.setItem('savedValuesFaqs', JSON.stringify(newSaved));
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
        linkElement.setAttribute('download', 'values-faq-export.json');
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
            className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Core Values Knowledge Base"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
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

                {/* Tab Navigation */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('values')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'values'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineHeart className="inline w-4 h-4 mr-2" />
                        Our Values
                    </button>
                    <button
                        onClick={() => setActiveTab('stories')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'stories'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineUserGroup className="inline w-4 h-4 mr-2" />
                        Team Stories
                    </button>
                    <button
                        onClick={() => setActiveTab('impact')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'impact'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineTrophy className="inline w-4 h-4 mr-2" />
                        Impact & Recognition
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

                {/* Values Tab */}
                {activeTab === 'values' && (
                    <>
                        {/* Values Carousel */}
                        {values.length > 0 && (
                            <div className="mb-16">
                                <div className="relative max-w-4xl mx-auto">
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                                        <div className="relative h-56 bg-linear-to-r from-blue-500 to-indigo-600">
                                            <div className="absolute inset-0 bg-black/20" />
                                            <div className="absolute bottom-4 left-6 text-white">
                                                <div className="text-6xl mb-2">{values[activeValue]?.icon}</div>
                                                <div className="text-2xl font-bold">{values[activeValue]?.title}</div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">{values[activeValue]?.description}</p>
                                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                                                <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                                                    <HiOutlineCheckCircle className="w-5 h-5" />
                                                    <span className="font-semibold">How We Live This Value:</span>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{values[activeValue]?.example}</p>
                                            </div>
                                            {values[activeValue]?.initiative && (
                                                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                                                    <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                                                        <HiOutlineSparkles className="w-5 h-5" />
                                                        <span className="font-semibold">Featured Initiative:</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">{values[activeValue]?.initiative}</p>
                                                </div>
                                            )}
                                            <div className="flex justify-between items-center mt-4">
                                                <div className="flex gap-2">
                                                    {values.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setActiveValue(idx)}
                                                            className={`h-2 rounded-full transition-all ${activeValue === idx ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <button
                                                    onClick={() => setAutoplayValues(!autoplayValues)}
                                                    className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1"
                                                >
                                                    {autoplayValues ? <HiOutlinePause className="w-3 h-3" /> : <HiOutlinePlay className="w-3 h-3" />}
                                                    {autoplayValues ? 'Pause' : 'Play'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Values Grid (Alternative View) */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                Our Core Values at a Glance
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {values.map((value, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center group cursor-pointer" onClick={() => setActiveValue(index)}>
                                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{value.description}</p>
                                        <button className="mt-3 text-xs text-blue-600 hover:underline">Learn more →</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Initiatives */}
                        {initiatives.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                    Our Values in Action
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {initiatives.map((initiative, index) => (
                                        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="text-4xl">{initiative.icon}</div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{initiative.title}</h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{initiative.description}</p>
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">{initiative.value}</span>
                                                        <span className="text-gray-400">•</span>
                                                        <span className="text-gray-500">Impact: {initiative.impact}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* Stories Tab */}
                {activeTab === 'stories' && (
                    <>
                        {/* Video Stories */}
                        {videos.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                    Watch Our Stories
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {videos.map((video, index) => (
                                        <div
                                            key={index}
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer group"
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
                                                <p className="text-sm text-gray-500">{video.author} • {video.role}</p>
                                                <p className="text-xs text-gray-400 mt-2">{video.duration}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Written Testimonials */}
                        {testimonials.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                    What Our Team Says
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {testimonials.map((testimonial, index) => (
                                        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6">
                                            <div className="flex items-center gap-1 mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="text-yellow-400">★</span>
                                                ))}
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 italic mb-4">"{testimonial.quote}"</p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl">
                                                    {testimonial.icon}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                                                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                                                    <div className="text-xs text-blue-600 mt-1">{testimonial.value}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* Impact Tab */}
                {activeTab === 'impact' && (
                    <>
                        {/* Recognitions */}
                        {recognitions.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                    Awards & Recognition
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {recognitions.map((recognition, index) => (
                                        <div
                                            key={index}
                                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center cursor-pointer group"
                                            onClick={() => {
                                                setSelectedRecognition(recognition);
                                                setShowRecognitionModal(true);
                                            }}
                                        >
                                            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{recognition.icon}</div>
                                            <div className="font-bold text-gray-900 dark:text-white mb-1">{recognition.title}</div>
                                            <div className="text-sm text-blue-600 mb-2">{recognition.awarder}</div>
                                            <div className="text-xs text-gray-500">{recognition.year}</div>
                                            {recognition.description && (
                                                <p className="text-xs text-gray-400 mt-2 line-clamp-2">{recognition.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Community Impact */}
                        <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <HiOutlineGlobeAlt className="w-8 h-8 text-green-600" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Community Impact</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">$1.2M+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Donated to causes</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">3,500+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Volunteer hours</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">25+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Nonprofits supported</div>
                                </div>
                            </div>
                        </div>

                        {/* Sustainability Impact */}
                        <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <HiOutlineFlag className="w-8 h-8 text-blue-600" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Sustainability Impact</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">30%</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Avg waste reduction for customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">2,500+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Tons CO2 reduced</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">2030</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Carbon neutrality target</div>
                                </div>
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
                                    placeholder="Search core values FAQs..."
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

                        {/* Empty State */}
                        {filteredFaqs.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">❤️</div>
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
                                                        View in {categories.find(c => c.id === faq.category)?.name}
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
                    </>
                )}

                {/* Culture Book Download */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HiOutlineBookOpen className="w-8 h-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Culture Book</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        Learn more about our values, culture, and what makes our team special. Download our Culture Book to get an inside look.
                    </p>
                    <Link
                        href="/downloads/culture-book.pdf"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                    >
                        <HiOutlineDownload className="w-4 h-4" />
                        Download Culture Book
                    </Link>
                </div>

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
                                    <p className="text-gray-400 text-sm mt-1">{selectedVideo.author} • {selectedVideo.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Recognition Modal */}
                {showRecognitionModal && selectedRecognition && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowRecognitionModal(false)}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-5xl">{selectedRecognition.icon}</div>
                                <button onClick={() => setShowRecognitionModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{selectedRecognition.title}</h3>
                            <p className="text-sm text-blue-600 mb-2">{selectedRecognition.awarder} • {selectedRecognition.year}</p>
                            {selectedRecognition.description && (
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{selectedRecognition.description}</p>
                            )}
                            {selectedRecognition.details && (
                                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                                    <p className="text-xs text-gray-500">{selectedRecognition.details}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                        <HiOutlineHeart className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {config?.contactText || "Share our values? Join our team and help us make a difference."}
                        </span>
                        <Link
                            href={config?.contactLink || "/careers"}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "View Open Positions"}
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

export default CoreValuesSection3;

