// frontend/AboutUs/MissionAndVisionSection/MissionAndVision3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineEye,
    HiOutlineHeart,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlineGlobeAlt,
    HiOutlineUsers,
    HiOutlineSparkles,
    HiOutlineShieldCheck,
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
    HiOutlinePause,
    HiOutlineStar,
    HiOutlineSearch,
    HiOutlineQuestionMarkCircle,
    HiOutlineMail,
} from 'react-icons/hi';
import { FiTarget } from "react-icons/fi";

const MissionAndVision3 = ({ config }) => {
    const [openFaq, setOpenFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [sortBy, setSortBy] = useState('recent');
    const [showFilters, setShowFilters] = useState(false);
    const [helpfulVotes, setHelpfulVotes] = useState({});
    const [savedFaqs, setSavedFaqs] = useState([]);
    const [activeTab, setActiveTab] = useState('overview');
    const [expandedPillar, setExpandedPillar] = useState(null);
    const [activeMilestone, setActiveMilestone] = useState(0);
    const [autoplayMilestones, setAutoplayMilestones] = useState(true);
    const [showNewsletterModal, setShowNewsletterModal] = useState(false);
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
    const searchRef = useRef(null);
    const milestoneIntervalRef = useRef(null);

    const faqs = config?.faqs || [];
    const categories = config?.categories || [];
    const stats = config?.stats || [];
    const pillars = config?.pillars || [];
    const goals = config?.goals || [];
    const initiatives = config?.initiatives || [];
    const impactMetrics = config?.impactMetrics || [];
    const milestones = config?.milestones || [];
    const quotes = config?.quotes || [];

    useEffect(() => {
        const savedVotes = localStorage.getItem('missionFaqHelpfulVotes');
        if (savedVotes) {
            setHelpfulVotes(JSON.parse(savedVotes));
        }
        const saved = localStorage.getItem('savedMissionFaqs');
        if (saved) {
            setSavedFaqs(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        if (autoplayMilestones && milestones.length > 0 && activeTab === 'overview') {
            milestoneIntervalRef.current = setInterval(() => {
                setActiveMilestone((prev) => (prev + 1) % milestones.length);
            }, 5000);
        }
        return () => {
            if (milestoneIntervalRef.current) {
                clearInterval(milestoneIntervalRef.current);
            }
        };
    }, [autoplayMilestones, milestones.length, activeTab]);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const togglePillar = (index) => {
        setExpandedPillar(expandedPillar === index ? null : index);
    };

    const handleHelpful = (faqId, isHelpful) => {
        setHelpfulVotes(prev => {
            const newVotes = { ...prev, [faqId]: isHelpful };
            localStorage.setItem('missionFaqHelpfulVotes', JSON.stringify(newVotes));
            return newVotes;
        });
    };

    const handleSaveFaq = (faqId) => {
        setSavedFaqs(prev => {
            const newSaved = prev.includes(faqId)
                ? prev.filter(id => id !== faqId)
                : [...prev, faqId];
            localStorage.setItem('savedMissionFaqs', JSON.stringify(newSaved));
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
        linkElement.setAttribute('download', 'mission-faq-export.json');
        linkElement.click();
    };

    const handlePrint = () => {
        window.print();
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (!newsletterEmail) return;
        setTimeout(() => {
            setNewsletterSubmitted(true);
            setTimeout(() => {
                setShowNewsletterModal(false);
                setNewsletterSubmitted(false);
                setNewsletterEmail('');
            }, 3000);
        }, 500);
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
            aria-label="Mission & Vision Knowledge Base"
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
                        onClick={() => setActiveTab('overview')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'overview'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <FiTarget className="inline w-4 h-4 mr-2" />
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('impact')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'impact'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineTrendingUp className="inline w-4 h-4 mr-2" />
                        Our Impact
                    </button>
                    <button
                        onClick={() => setActiveTab('initiatives')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'initiatives'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineSparkles className="inline w-4 h-4 mr-2" />
                        Initiatives
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

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <>
                        {/* Mission & Vision Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-6 text-white">
                                    <div className="flex items-center gap-3">
                                        <FiTarget className="w-8 h-8" />
                                        <h3 className="text-2xl font-bold">Our Mission</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                                        {config?.mission || "To empower businesses with intelligent inventory management solutions that drive efficiency, reduce waste, and enable sustainable growth."}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                                            <span>Guiding every decision we make</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="bg-linear-to-r from-indigo-500 to-purple-600 p-6 text-white">
                                    <div className="flex items-center gap-3">
                                        <HiOutlineEye className="w-8 h-8" />
                                        <h3 className="text-2xl font-bold">Our Vision</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                                        {config?.vision || "To become the world's most trusted inventory management platform, helping businesses of all sizes achieve operational excellence."}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <HiOutlineGlobeAlt className="w-4 h-4 text-blue-500" />
                                            <span>Building a better future for global commerce</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Milestones Carousel */}
                        {milestones.length > 0 && (
                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                    Our Journey Milestones
                                </h3>
                                <div className="relative max-w-4xl mx-auto">
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                                        <div className="relative h-48 bg-linear-to-r from-blue-500 to-indigo-600">
                                            <div className="absolute inset-0 bg-black/20"></div>
                                            <div className="absolute bottom-4 left-6 text-white">
                                                <div className="text-sm opacity-80">{milestones[activeMilestone]?.year}</div>
                                                <div className="text-xl font-bold">{milestones[activeMilestone]?.title}</div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-600 dark:text-gray-300 mb-4">{milestones[activeMilestone]?.description}</p>
                                            {milestones[activeMilestone]?.impact && (
                                                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                                                    <div className="flex items-center gap-2 text-sm text-blue-600">
                                                        <HiOutlineStar className="w-4 h-4" />
                                                        <span className="font-semibold">Impact:</span>
                                                        <span>{milestones[activeMilestone]?.impact}</span>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="flex justify-between items-center mt-4">
                                                <div className="flex gap-1">
                                                    {milestones.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setActiveMilestone(idx)}
                                                            className={`h-1.5 rounded-full transition-all ${activeMilestone === idx ? 'w-6 bg-blue-600' : 'w-1.5 bg-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <button
                                                    onClick={() => setAutoplayMilestones(!autoplayMilestones)}
                                                    className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1"
                                                >
                                                    {autoplayMilestones ? <HiOutlinePause className="w-3 h-3" /> : <HiOutlinePlay className="w-3 h-3" />}
                                                    {autoplayMilestones ? 'Pause' : 'Play'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Core Pillars */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                Our Core Pillars
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {pillars.map((pillar, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center cursor-pointer group" onClick={() => togglePillar(index)}>
                                        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pillar.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{pillar.description}</p>
                                        {expandedPillar === index && pillar.details && (
                                            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-xs text-gray-500">{pillar.details}</p>
                                            </div>
                                        )}
                                        {pillar.details && (
                                            <button className="mt-2 text-xs text-blue-600 hover:underline">
                                                {expandedPillar === index ? 'Show less' : 'Learn more'}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Strategic Goals with Progress Bars */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                Our Strategic Goals
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {goals.map((goal, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="text-3xl">{goal.icon}</div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{goal.title}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{goal.description}</p>
                                                {goal.target && (
                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1">
                                                            <span className="text-gray-500">Progress</span>
                                                            <span className="text-blue-600 font-semibold">{goal.progress || 0}%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                            <div className="bg-linear-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500" style={{ width: `${goal.progress || 0}%` }}></div>
                                                        </div>
                                                        <div className="text-xs text-gray-400 mt-1">Target: {goal.target}</div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Inspirational Quote */}
                        {quotes.length > 0 && (
                            <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center mb-16">
                                <div className="text-5xl mb-3">💭</div>
                                <p className="text-xl text-gray-600 dark:text-gray-300 italic mb-4">
                                    "{quotes[0]?.text || 'The best way to predict the future is to create it.'}"
                                </p>
                                <div className="font-semibold text-gray-900 dark:text-white">
                                    {quotes[0]?.author || "— Peter Drucker"}
                                </div>
                                {quotes[0]?.title && (
                                    <div className="text-sm text-gray-500 mt-1">{quotes[0]?.title}</div>
                                )}
                            </div>
                        )}
                    </>
                )}

                {/* Impact Tab */}
                {activeTab === 'impact' && (
                    <>
                        {/* Impact Metrics */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                                Our Impact by the Numbers
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {impactMetrics.map((metric, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center group">
                                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{metric.icon}</div>
                                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{metric.value}</div>
                                        <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{metric.label}</div>
                                        <p className="text-xs text-gray-500">{metric.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Environmental Impact */}
                        <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <HiOutlineShieldCheck className="w-8 h-8 text-green-600" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Environmental Commitment</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">30%</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Average inventory waste reduction for customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">2,500+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Tons of CO2 reduced through optimized logistics</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">2030</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Target year for carbon neutrality</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Impact */}
                        <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <HiOutlineUsers className="w-8 h-8 text-blue-600" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Social Impact</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">500+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Small businesses supported</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">$1M+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Donated to community programs</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">2,500+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Volunteer hours contributed</div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Initiatives Tab */}
                {activeTab === 'initiatives' && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                            Our Key Initiatives
                        </h3>
                        <div className="space-y-4">
                            {initiatives.map((initiative, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="text-3xl">{initiative.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{initiative.title}</h4>
                                                <span className={`text-xs px-2 py-1 rounded-full ${initiative.status === 'Active' ? 'bg-green-100 text-green-700' : initiative.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                                                    {initiative.status}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{initiative.description}</p>
                                            <div className="flex items-center justify-between flex-wrap gap-2">
                                                <div className="flex items-center gap-2 w-full max-w-xs">
                                                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${initiative.progress}%` }}></div>
                                                    </div>
                                                    <span className="text-xs text-gray-500">{initiative.progress}%</span>
                                                </div>
                                                {initiative.link && (
                                                    <Link href={initiative.link} className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1">
                                                        Learn more
                                                        <HiOutlineArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
                                    placeholder="Search mission and vision FAQs..."
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
                                <div className="text-6xl mb-4">🎯</div>
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

                {/* Newsletter Signup */}
                <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white mb-12">
                    <div className="text-4xl mb-3">📧</div>
                    <h3 className="text-2xl font-bold mb-2">Stay Updated on Our Journey</h3>
                    <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                        Subscribe to our newsletter to receive updates on our mission, impact, and initiatives.
                    </p>
                    <button
                        onClick={() => setShowNewsletterModal(true)}
                        className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
                    >
                        <HiOutlineMail className="w-4 h-4" />
                        Subscribe Now
                    </button>
                </div>

                {/* Newsletter Modal */}
                {showNewsletterModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowNewsletterModal(false)}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Subscribe to Our Newsletter</h3>
                                <button onClick={() => setShowNewsletterModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
                            </div>
                            {!newsletterSubmitted ? (
                                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Get updates on our mission, impact, and initiatives delivered to your inbox.
                                    </p>
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        value={newsletterEmail}
                                        onChange={(e) => setNewsletterEmail(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                                        required
                                    />
                                    <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                                        Subscribe
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-4">
                                    <div className="text-5xl mb-3">✅</div>
                                    <h4 className="text-lg font-bold mb-2">Subscribed!</h4>
                                    <p className="text-sm text-gray-500">Thanks for joining our journey.</p>
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
                            {config?.contactText || "Join us in our mission to transform inventory management."}
                        </span>
                        <Link
                            href={config?.contactLink || "/contact"}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Get Involved"}
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

export default MissionAndVision3;

