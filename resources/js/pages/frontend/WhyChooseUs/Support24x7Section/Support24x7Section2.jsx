// frontend/Support/Support24x7Section/Support24x7Section2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineSearch,
    HiOutlineClock,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlineShieldCheck,
    HiOutlineUsers,
    HiOutlineX,
    HiOutlineThumbUp,
    HiOutlineThumbDown,
    HiOutlineExternalLink,
    HiOutlineFilter,
    HiOutlineBookmark,
    HiOutlinePrinter,
    HiOutlineDownload,
    HiOutlinePaperAirplane,
} from 'react-icons/hi';
import { HiOutlineDocumentText } from 'react-icons/hi2';

const Support24x7Section2 = ({ config }) => {
    const [openFaq, setOpenFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [sortBy, setSortBy] = useState('recent');
    const [showFilters, setShowFilters] = useState(false);
    const [helpfulVotes, setHelpfulVotes] = useState({});
    const [savedFaqs, setSavedFaqs] = useState([]);
    const [showTicketForm, setShowTicketForm] = useState(false);
    const [ticketForm, setTicketForm] = useState({
        name: '',
        email: '',
        subject: '',
        category: 'technical',
        priority: 'normal',
        message: '',
        attachments: [],
        systemLogs: '',
    });
    const [ticketSubmitted, setTicketSubmitted] = useState(false);
    const [ticketNumber, setTicketNumber] = useState('');
    const [showStatusCheck, setShowStatusCheck] = useState(false);
    const [ticketTrackingId, setTicketTrackingId] = useState('');
    const [ticketStatus, setTicketStatus] = useState('');
    const searchRef = useRef(null);
    const fileInputRef = useRef(null);

    const faqs = config?.faqs || [];
    const categories = config?.categories || [];
    const stats = config?.stats || [];
    const supportChannels = config?.supportChannels || [];
    const slas = config?.slas || [];
    const ticketCategories = config?.ticketCategories || [];

    useEffect(() => {
        const savedVotes = localStorage.getItem('supportFaqHelpfulVotes');
        if (savedVotes) {
            setHelpfulVotes(JSON.parse(savedVotes));
        }
        const saved = localStorage.getItem('savedSupportFaqs');
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
            localStorage.setItem('supportFaqHelpfulVotes', JSON.stringify(newVotes));
            return newVotes;
        });
    };

    const handleSaveFaq = (faqId) => {
        setSavedFaqs(prev => {
            const newSaved = prev.includes(faqId)
                ? prev.filter(id => id !== faqId)
                : [...prev, faqId];
            localStorage.setItem('savedSupportFaqs', JSON.stringify(newSaved));
            return newSaved;
        });
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setTicketForm(prev => ({
            ...prev,
            attachments: [...prev.attachments, ...files],
        }));
    };

    const removeAttachment = (index) => {
        setTicketForm(prev => ({
            ...prev,
            attachments: prev.attachments.filter((_, i) => i !== index),
        }));
    };

    const handleTicketSubmit = (e) => {
        e.preventDefault();
        if (!ticketForm.name || !ticketForm.email || !ticketForm.subject || !ticketForm.message) return;

        const newTicketNumber = `TKT-${Math.floor(Math.random() * 100000)}`;
        setTicketNumber(newTicketNumber);

        setTimeout(() => {
            setTicketSubmitted(true);
            setTimeout(() => {
                setShowTicketForm(false);
                setTicketSubmitted(false);
                setTicketForm({
                    name: '', email: '', subject: '', category: 'technical', priority: 'normal',
                    message: '', attachments: [], systemLogs: '',
                });
                setTicketNumber('');
                if (fileInputRef.current) fileInputRef.current.value = '';
            }, 3000);
        }, 1000);
    };

    const handleCheckTicketStatus = (e) => {
        e.preventDefault();
        if (!ticketTrackingId) return;
        const statuses = ['Received', 'In Review', 'Assigned', 'In Progress', 'Resolved', 'Closed'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        setTicketStatus(randomStatus);
    };

    const handleExport = () => {
        const exportData = filteredFaqs.map(faq => ({
            question: faq.question,
            answer: faq.answer,
            category: categories.find(c => c.id === faq.category)?.name || faq.category,
            tags: faq.tags
        }));
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', 'support-faq-export.json');
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
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="24/7 Support Help Center"
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

                {/* Emergency Support Banner */}
                <div className="mb-12 bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center animate-pulse">
                                <HiOutlineClock className="w-6 h-6 text-red-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg">24/7 Emergency Support</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">For critical system issues affecting your business operations</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href={`tel:${config?.emergencyNumber || "+18889999999"}`} className="text-2xl font-bold text-red-600 hover:underline">
                                {config?.emergencyNumber || "+1 (888) 999-9999"}
                            </a>
                            <p className="text-xs text-gray-500 mt-1">Available 24/7 for enterprise customers</p>
                        </div>
                    </div>
                </div>

                {/* Support Channels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {supportChannels.map((channel, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center">
                            <div className="text-4xl mb-3">{channel.icon}</div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{channel.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{channel.description}</p>
                            <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-4">
                                <HiOutlineClock className="w-3 h-3" />
                                {channel.availability}
                            </div>
                            <Link
                                href={channel.link}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                            >
                                {channel.buttonText}
                                <HiOutlineArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* SLA Information */}
                <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <HiOutlineShieldCheck className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Service Level Agreements (SLA)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {slas.map((sla, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                                <div className="text-lg font-bold text-blue-600 mb-1">{sla.plan}</div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">{sla.responseTime}</div>
                                <div className="text-xs text-gray-500 mt-1">{sla.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setShowTicketForm(true)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2 shadow-lg"
                    >
                        <HiOutlinePaperAirplane className="w-5 h-5" />
                        Submit Support Ticket
                    </button>
                    <button
                        onClick={() => setShowStatusCheck(!showStatusCheck)}
                        className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 transition-all inline-flex items-center gap-2"
                    >
                        <HiOutlineSearch className="w-5 h-5" />
                        Check Ticket Status
                    </button>
                </div>

                {/* Ticket Status Check */}
                {showStatusCheck && (
                    <div className="max-w-md mx-auto mb-12">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Check Ticket Status</h3>
                            <form onSubmit={handleCheckTicketStatus} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ticket Number</label>
                                    <input
                                        type="text"
                                        value={ticketTrackingId}
                                        onChange={(e) => setTicketTrackingId(e.target.value)}
                                        placeholder="e.g., TKT-12345"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                                >
                                    Check Status
                                </button>
                                {ticketStatus && (
                                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-center">
                                        <div className="text-sm text-gray-500 mb-1">Current Status</div>
                                        <div className="font-semibold text-blue-600">{ticketStatus}</div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                )}

                {/* Search and Action Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative" ref={searchRef}>
                        <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search support FAQs..."
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
                        <div className="text-6xl mb-4">🛟</div>
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

                {/* Ticket Form Modal */}
                {showTicketForm && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowTicketForm(false)}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                            <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Submit Support Ticket</h3>
                                <button onClick={() => setShowTicketForm(false)} className="text-gray-500 hover:text-gray-700">✕</button>
                            </div>
                            <div className="p-6">
                                {!ticketSubmitted ? (
                                    <form onSubmit={handleTicketSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                                                <input
                                                    type="text"
                                                    value={ticketForm.name}
                                                    onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                                                <input
                                                    type="email"
                                                    value={ticketForm.email}
                                                    onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                                            <input
                                                type="text"
                                                value={ticketForm.subject}
                                                onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                                                required
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Issue Category</label>
                                                <select
                                                    value={ticketForm.category}
                                                    onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                                                >
                                                    {ticketCategories.map((cat, idx) => (
                                                        <option key={idx} value={cat.value}>{cat.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
                                                <select
                                                    value={ticketForm.priority}
                                                    onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                                                >
                                                    <option value="low">Low - General question</option>
                                                    <option value="normal">Normal - Minor issue</option>
                                                    <option value="high">High - Major issue</option>
                                                    <option value="critical">Critical - System down</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description *</label>
                                            <textarea
                                                rows={5}
                                                value={ticketForm.message}
                                                onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                                                placeholder="Please describe your issue in detail. Include steps to reproduce, expected vs actual behavior, and any relevant information..."
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">System Logs (Optional)</label>
                                            <textarea
                                                rows={3}
                                                value={ticketForm.systemLogs}
                                                onChange={(e) => setTicketForm({ ...ticketForm, systemLogs: e.target.value })}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 font-mono text-xs"
                                                placeholder="Paste any relevant error logs or console output here..."
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Attachments (Optional)</label>
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                onChange={handleFileUpload}
                                                multiple
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                            />
                                            {ticketForm.attachments.length > 0 && (
                                                <div className="mt-2 space-y-1">
                                                    {ticketForm.attachments.map((file, idx) => (
                                                        <div key={idx} className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                                                            <span>{file.name}</span>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeAttachment(idx)}
                                                                className="text-red-500 hover:text-red-700"
                                                            >
                                                                <HiOutlineX className="w-3 h-3" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            <p className="text-xs text-gray-500 mt-1">Max file size: 10MB. Supported: PNG, JPG, PDF, DOC, TXT, LOG</p>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                                        >
                                            Submit Ticket
                                        </button>
                                    </form>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="text-5xl mb-3">✅</div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Ticket Submitted Successfully!</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mb-2">Your support ticket has been created.</p>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                                            <HiOutlineDocumentText className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm font-mono text-gray-700 dark:text-gray-300">{ticketNumber}</span>
                                        </div>
                                        <p className="text-sm text-gray-500">A support representative will respond within the SLA timeframe.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                        <HiOutlineUsers className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {config?.contactText || "Need immediate assistance? Our support team is ready 24/7."}
                        </span>
                        <Link
                            href={config?.contactLink || "/support/chat"}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Start Live Chat"}
                            <HiOutlineArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>

                {/* Response Guarantee */}
                {config?.showGuarantee && (
                    <div className="text-center mt-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
                            <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-xs text-gray-600 dark:text-gray-400">
                                {config?.guaranteeText || "All support tickets receive a response within SLA timeframe. Enterprise customers get priority 1-hour response."}
                            </span>
                        </div>
                    </div>
                )}
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

export default Support24x7Section2;
