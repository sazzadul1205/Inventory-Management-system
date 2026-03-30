// frontend/AboutUs/CompanyTimelineSection/CompanyTimelineSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineCalendar,
    HiOutlineStar,
    HiOutlineChartBar,
    HiOutlineArrowRight,
    HiOutlineX,
    HiOutlinePlay,
    HiOutlinePause,
    HiOutlineFilter,
    HiOutlinePrinter,
    HiOutlineDownload,
    HiOutlineClock,
    HiOutlineFlag,
    HiOutlineLightBulb,
    HiOutlineSearch,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const CompanyTimelineSection3 = ({ config }) => {
    const [openYear, setOpenYear] = useState(null);
    const [activeEra, setActiveEra] = useState('all');
    const [activeView] = useState('timeline');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [currentMilestone, setCurrentMilestone] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const [showMilestoneModal, setShowMilestoneModal] = useState(false);
    const [selectedMilestone, setSelectedMilestone] = useState(null);
    const [expandedYear, setExpandedYear] = useState(null);
    const [activeTab, setActiveTab] = useState('timeline');
    const intervalRef = useRef(null);
    const searchRef = useRef(null);

    const timeline = config?.timeline || [];
    const eras = config?.eras || [];
    const stats = config?.stats || [];
    const milestones = config?.milestones || [];
    const yearlyBreakdown = config?.yearlyBreakdown || [];
    const quotes = config?.quotes || [];

    useEffect(() => {
        if (autoplay && milestones.length > 0 && activeView === 'carousel') {
            intervalRef.current = setInterval(() => {
                setCurrentMilestone((prev) => (prev + 1) % milestones.length);
            }, 5000);
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoplay, milestones.length, activeView]);

    const toggleYear = (index) => {
        setOpenYear(openYear === index ? null : index);
    };

    const toggleYearlyYear = (year) => {
        setExpandedYear(expandedYear === year ? null : year);
    };

    const handleExport = () => {
        const exportData = filteredTimeline.map(event => ({
            year: event.year,
            title: event.title,
            description: event.description,
            details: event.details,
            metric: event.metric,
            era: eras.find(e => e.id === event.era)?.name || event.era,
        }));
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = `data:application/json;charset=utf-8,${  encodeURIComponent(dataStr)}`;
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', 'company-timeline-export.json');
        linkElement.click();
    };

    const handlePrint = () => {
        window.print();
    };

    const filteredTimeline = timeline.filter(event => {
        const matchesEra = activeEra === 'all' || event.era === activeEra;
        const matchesSearch = searchQuery === '' ||
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.year.includes(searchQuery);
        return matchesEra && matchesSearch;
    });

    const nextMilestone = () => {
        setCurrentMilestone((prev) => (prev + 1) % milestones.length);
    };

    const prevMilestone = () => {
        setCurrentMilestone((prev) => (prev - 1 + milestones.length) % milestones.length);
    };

    const getEraColor = (eraId) => {
        switch (eraId) {
            case 'founding': return 'bg-blue-500';
            case 'growth': return 'bg-green-500';
            case 'innovation': return 'bg-purple-500';
            case 'global': return 'bg-orange-500';
            default: return 'bg-gray-500';
        }
    };

    const getEraBgLight = (eraId) => {
        switch (eraId) {
            case 'founding': return 'bg-blue-50 dark:bg-blue-900/20';
            case 'growth': return 'bg-green-50 dark:bg-green-900/20';
            case 'innovation': return 'bg-purple-50 dark:bg-purple-900/20';
            case 'global': return 'bg-orange-50 dark:bg-orange-900/20';
            default: return 'bg-gray-50 dark:bg-gray-700/50';
        }
    };

    return (
        <section
            className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Company Timeline Knowledge Base"
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
                        onClick={() => setActiveTab('timeline')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'timeline'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineCalendar className="inline w-4 h-4 mr-2" />
                        Timeline
                    </button>
                    <button
                        onClick={() => setActiveTab('milestones')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'milestones'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineStar className="inline w-4 h-4 mr-2" />
                        Milestones
                    </button>
                    <button
                        onClick={() => setActiveTab('yearly')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'yearly'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineClock className="inline w-4 h-4 mr-2" />
                        Year by Year
                    </button>
                    <button
                        onClick={() => setActiveTab('quotes')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'quotes'
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                    >
                        <HiOutlineLightBulb className="inline w-4 h-4 mr-2" />
                        Reflections
                    </button>
                </div>

                {/* Timeline Tab */}
                {activeTab === 'timeline' && (
                    <>
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

                        {/* Search and Action Bar */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1 relative" ref={searchRef}>
                                <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search timeline events by year or title..."
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
                                <button
                                    onClick={handleExport}
                                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                                    title="Export Timeline"
                                >
                                    <HiOutlineDownload className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handlePrint}
                                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all"
                                    title="Print Timeline"
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
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Era</label>
                                        <select
                                            value={activeEra}
                                            onChange={(e) => setActiveEra(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        >
                                            <option value="all">All Eras</option>
                                            {eras.map((era) => (
                                                <option key={era.id} value={era.id}>{era.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                        <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                                            <option>Chronological</option>
                                            <option>Recent First</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Results Count */}
                        {searchQuery && (
                            <div className="text-center mb-4 text-sm text-gray-500">
                                Found {filteredTimeline.length} events for "{searchQuery}"
                            </div>
                        )}

                        {/* Timeline */}
                        <div className="relative max-w-4xl mx-auto mb-16">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-blue-500 to-indigo-500 hidden md:block" aria-hidden="true" />
                            <div className="space-y-8">
                                {filteredTimeline.map((event, index) => (
                                    <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        <div className="hidden md:block w-1/2" />
                                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${getEraColor(event.era)} rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 hidden md:block`} />
                                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                            <div
                                                className={`${getEraBgLight(event.era)} rounded-2xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer`}
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
                                                            <div className="mt-2 inline-flex items-center gap-2 text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-blue-600">
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
                            {filteredTimeline.length === 0 && (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">📅</div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No events found</h3>
                                    <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* Milestones Tab */}
                {activeTab === 'milestones' && milestones.length > 0 && (
                    <div className="mb-16">
                        <div className="relative max-w-4xl mx-auto">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                                <div className={`relative h-56 ${getEraColor(milestones[currentMilestone]?.era)}`}>
                                    <div className="absolute inset-0 bg-black/20" />
                                    <div className="absolute bottom-4 left-6 text-white">
                                        <div className="text-3xl font-bold">{milestones[currentMilestone]?.year}</div>
                                        <div className="text-xl font-semibold">{milestones[currentMilestone]?.title}</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">{milestones[currentMilestone]?.description}</p>
                                    {milestones[currentMilestone]?.details && (
                                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4">
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{milestones[currentMilestone]?.details}</p>
                                        </div>
                                    )}
                                    {milestones[currentMilestone]?.metric && (
                                        <div className="inline-flex items-center gap-2 text-sm bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full text-green-600 mb-4">
                                            <HiOutlineChartBar className="w-4 h-4" />
                                            <span>{milestones[currentMilestone]?.metric}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex gap-2">
                                            {milestones.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentMilestone(idx)}
                                                    className={`h-2 rounded-full transition-all ${currentMilestone === idx ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'}`}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={prevMilestone}
                                                className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                                            >
                                                <HiOutlineChevronUp className="w-5 h-5 rotate-270" />
                                            </button>
                                            <button
                                                onClick={nextMilestone}
                                                className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                                            >
                                                <HiOutlineChevronUp className="w-5 h-5 rotate-90" />
                                            </button>
                                            <button
                                                onClick={() => setAutoplay(!autoplay)}
                                                className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                                            >
                                                {autoplay ? <HiOutlinePause className="w-4 h-4" /> : <HiOutlinePlay className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <button
                                onClick={() => {
                                    setSelectedMilestone(milestones[currentMilestone]);
                                    setShowMilestoneModal(true);
                                }}
                                className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1"
                            >
                                View Full Details
                                <HiOutlineArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Year by Year Tab */}
                {activeTab === 'yearly' && (
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="space-y-4">
                            {yearlyBreakdown.map((yearData, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                                    <button
                                        onClick={() => toggleYearlyYear(yearData.year)}
                                        className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="text-2xl font-bold text-blue-600">{yearData.year}</div>
                                            <div className="text-sm text-gray-500">{yearData.events.length} events</div>
                                        </div>
                                        <div className="text-blue-500">
                                            {expandedYear === yearData.year ? (
                                                <HiOutlineChevronUp className="w-5 h-5" />
                                            ) : (
                                                <HiOutlineChevronDown className="w-5 h-5" />
                                            )}
                                        </div>
                                    </button>
                                    {expandedYear === yearData.year && (
                                        <div className="border-t border-gray-100 dark:border-gray-700 p-5 space-y-4">
                                            {yearData.events.map((event, idx) => (
                                                <div key={idx} className="flex gap-3">
                                                    <div className="text-2xl shrink-0">{event.icon}</div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">{event.description}</p>
                                                        {event.metric && (
                                                            <div className="mt-1 text-xs text-blue-600">{event.metric}</div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Quotes Tab */}
                {activeTab === 'quotes' && (
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {quotes.map((quote, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6">
                                    <div className="flex items-start gap-3">
                                        <div className="text-3xl">{quote.icon}</div>
                                        <div>
                                            <p className="text-gray-600 dark:text-gray-400 italic mb-3">"{quote.text}"</p>
                                            <div className="font-semibold text-gray-900 dark:text-white">{quote.author}</div>
                                            <div className="text-xs text-gray-500">{quote.title}</div>
                                            <div className="text-xs text-blue-600 mt-1">{quote.year}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Milestone Modal */}
                {showMilestoneModal && selectedMilestone && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowMilestoneModal(false)}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                            <div className={`relative h-32 ${getEraColor(selectedMilestone.era)} rounded-t-3xl`}>
                                <div className="absolute inset-0 bg-black/20 rounded-t-3xl" />
                                <div className="absolute bottom-4 left-6 text-white">
                                    <div className="text-2xl font-bold">{selectedMilestone.year}</div>
                                    <div className="text-lg font-semibold">{selectedMilestone.title}</div>
                                </div>
                                <button
                                    onClick={() => setShowMilestoneModal(false)}
                                    className="absolute top-4 right-4 text-white hover:text-gray-200"
                                >
                                    <HiOutlineX className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedMilestone.description}</p>
                                {selectedMilestone.details && (
                                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Learn More</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{selectedMilestone.details}</p>
                                    </div>
                                )}
                                {selectedMilestone.metric && (
                                    <div className="flex items-center gap-2 text-sm bg-blue-50 dark:bg-blue-900/20 px-3 py-2 rounded-lg text-blue-600">
                                        <HiOutlineChartBar className="w-4 h-4" />
                                        <span>{selectedMilestone.metric}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Future Vision */}
                <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HiOutlineFlag className="w-8 h-8 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">What's Next?</h3>
                    </div>
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
      `}</style>
        </section>
    );
};

export default CompanyTimelineSection3;
