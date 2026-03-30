// page/frontend/Blog/BestPracticesSection/BestPracticesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

// Icons
import {
    HiOutlineLightBulb,
    HiOutlineChartBar,
    HiOutlineTruck,
    HiOutlineCube,
    HiOutlineShieldCheck,
    HiOutlineClock,
    HiOutlineUsers,
    HiOutlineGlobe,
    HiOutlineTrendingUp,
    HiOutlineCheckCircle,
    HiOutlineXCircle,
    HiArrowRight,
    HiOutlineStar,
    HiOutlineEye,
    HiOutlineCalendar,
    HiOutlineTag,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineDownload,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineSparkles,
    HiOutlineFire,
    HiOutlineAcademicCap,
    HiOutlineDocumentText,
    HiOutlinePresentationChartLine,
    HiOutlineClipboardList,
    HiOutlineScale,
    HiOutlineCurrencyDollar,
    HiOutlineRefresh,
    HiOutlineCog,
    HiOutlineCalculator,
    HiOutlineChartPie,
    HiOutlineChartSquareBar,
    HiOutlineClipboardCheck,
    HiOutlineBadgeCheck,
    HiOutlineThumbUp,
    HiOutlineChat,
    HiOutlineExternalLink,
    HiOutlinePlay,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlineNewspaper,
    HiOutlineBookOpen,
    HiOutlineTemplate,
    HiOutlineCode,
    HiOutlineCloudUpload,
    HiOutlineDatabase,
    HiOutlineServer,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineChevronDown,
    HiOutlineMail
} from 'react-icons/hi';


const BestPracticesSection2 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [savedPractices, setSavedPractices] = useState([]);
    const [showCalculator, setShowCalculator] = useState(false);
    const [calculatorInputs, setCalculatorInputs] = useState({
        currentCost: 100000,
        expectedImprovement: 25,
        implementationCost: 25000
    });

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            lightbulb: <HiOutlineLightBulb className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            truck: <HiOutlineTruck className={className} />,
            cube: <HiOutlineCube className={className} />,
            shield: <HiOutlineShieldCheck className={className} />,
            clock: <HiOutlineClock className={className} />,
            users: <HiOutlineUsers className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            xcircle: <HiOutlineXCircle className={className} />,
            star: <HiOutlineStar className={className} />,
            eye: <HiOutlineEye className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            tag: <HiOutlineTag className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            download: <HiOutlineDownload className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            rocket: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            presentation: <HiOutlinePresentationChartLine className={className} />,
            clipboard: <HiOutlineClipboardList className={className} />,
            scale: <HiOutlineScale className={className} />,
            dollar: <HiOutlineCurrencyDollar className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            cog: <HiOutlineCog className={className} />,
            calculator: <HiOutlineCalculator className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            bar: <HiOutlineChartSquareBar className={className} />,
            clipboardCheck: <HiOutlineClipboardCheck className={className} />,
            badgeCheck: <HiOutlineBadgeCheck className={className} />,
            thumbsUp: <HiOutlineThumbUp className={className} />,
            chat: <HiOutlineChat className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            play: <HiOutlinePlay className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            book: <HiOutlineBookOpen className={className} />,
            template: <HiOutlineTemplate className={className} />,
            code: <HiOutlineCode className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
            database: <HiOutlineDatabase className={className} />,
            server: <HiOutlineServer className={className} />
        };
        return icons[iconName] || <HiOutlineLightBulb className={className} />;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'inventory': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'cube', label: 'Inventory Management', borderColor: 'border-blue-200 dark:border-blue-800' },
            'warehouse': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'cube', label: 'Warehouse Operations', borderColor: 'border-purple-200 dark:border-purple-800' },
            'transportation': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'truck', label: 'Transportation', borderColor: 'border-green-200 dark:border-green-800' },
            'fulfillment': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'check', label: 'Order Fulfillment', borderColor: 'border-orange-200 dark:border-orange-800' },
            'sustainability': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Sustainability', borderColor: 'border-emerald-200 dark:border-emerald-800' },
            'technology': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'cog', label: 'Technology & Automation', borderColor: 'border-indigo-200 dark:border-indigo-800' },
            'risk': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'shield', label: 'Risk Management', borderColor: 'border-red-200 dark:border-red-800' }
        };
        return configs[category] || configs.inventory;
    };

    // Calculate ROI
    const calculateROI = useCallback(() => {
        const annualSavings = calculatorInputs.currentCost * (calculatorInputs.expectedImprovement / 100);
        const netBenefit = annualSavings - calculatorInputs.implementationCost;
        const roi = (netBenefit / calculatorInputs.implementationCost) * 100;
        const paybackPeriod = calculatorInputs.implementationCost / (annualSavings / 12);
        return { annualSavings, netBenefit, roi, paybackPeriod };
    }, [calculatorInputs]);

    // Handle save practice
    const handleSavePractice = (practiceId) => {
        setSavedPractices(prev =>
            prev.includes(practiceId)
                ? prev.filter(id => id !== practiceId)
                : [...prev, practiceId]
        );
    };

    // Filter practices
    const getFilteredPractices = useCallback(() => {
        let practices = config?.practices || [];

        if (searchQuery) {
            practices = practices.filter(p =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            practices = practices.filter(p => p.category === selectedCategory);
        }

        return practices;
    }, [config?.practices, searchQuery, selectedCategory]);

    const filteredPractices = getFilteredPractices();
    const categories = config?.categories || [
        { id: 'all', label: 'All Practices', icon: 'sparkles', count: config?.practices?.length || 0 },
        { id: 'inventory', label: 'Inventory', icon: 'cube' },
        { id: 'warehouse', label: 'Warehouse', icon: 'cube' },
        { id: 'transportation', label: 'Transportation', icon: 'truck' },
        { id: 'fulfillment', label: 'Fulfillment', icon: 'check' },
        { id: 'technology', label: 'Technology', icon: 'cog' }
    ];

    // Case studies
    const caseStudies = config?.caseStudies || [];

    // ROI calculator result
    const roiResult = calculateROI();

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Best Practices & Case Studies"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Stats */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
                            <HiOutlineBadgeCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Industry Best Practices"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Proven"} <span className="bg-linear-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">{config?.title?.highlight || "Best Practices"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Data-driven strategies and real-world case studies to help you optimize your supply chain operations."}
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="flex gap-4">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{config?.stats?.practices || 50}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Best Practices</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{config?.stats?.caseStudies || 25}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Case Studies</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-28">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{config?.stats?.companies || "500+"}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Companies Served</div>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={config?.searchPlaceholder || "Search best practices, case studies, or topics..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-label="Search practices"
                        />
                    </div>

                    <div className="flex gap-2">
                        {/* View Mode Toggle */}
                        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="Grid view"
                            >
                                <HiOutlineViewGrid className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="List view"
                            >
                                <HiOutlineViewList className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === category.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                            {category.count !== undefined && (
                                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                    }`}>
                                    {category.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* ROI Calculator Section */}
                {config?.showCalculator && (
                    <div className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <button
                            onClick={() => setShowCalculator(!showCalculator)}
                            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                    <HiOutlineCalculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">ROI Calculator</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Estimate potential savings from implementing best practices</p>
                                </div>
                            </div>
                            <HiOutlineChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showCalculator ? 'rotate-180' : ''}`} />
                        </button>

                        {showCalculator && (
                            <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Current Annual Cost ($)
                                            </label>
                                            <input
                                                type="number"
                                                value={calculatorInputs.currentCost}
                                                onChange={(e) => setCalculatorInputs(prev => ({ ...prev, currentCost: Number(e.target.value) }))}
                                                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Expected Improvement (%)
                                            </label>
                                            <input
                                                type="number"
                                                value={calculatorInputs.expectedImprovement}
                                                onChange={(e) => setCalculatorInputs(prev => ({ ...prev, expectedImprovement: Number(e.target.value) }))}
                                                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Implementation Cost ($)
                                            </label>
                                            <input
                                                type="number"
                                                value={calculatorInputs.implementationCost}
                                                onChange={(e) => setCalculatorInputs(prev => ({ ...prev, implementationCost: Number(e.target.value) }))}
                                                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-linear-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-6">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Your Estimated ROI</h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Annual Savings:</span>
                                                <span className="font-bold text-green-600 dark:text-green-400">${roiResult.annualSavings.toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Net Benefit (Year 1):</span>
                                                <span className={`font-bold ${roiResult.netBenefit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    ${roiResult.netBenefit.toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">ROI:</span>
                                                <span className="font-bold text-blue-600 dark:text-blue-400">{roiResult.roi.toFixed(1)}%</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Payback Period:</span>
                                                <span className="font-bold text-purple-600 dark:text-purple-400">{roiResult.paybackPeriod.toFixed(1)} months</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Case Studies Section */}
                {config?.showCaseStudies && caseStudies.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <HiOutlinePresentationChartLine className="w-6 h-6 text-blue-600" />
                                    Success Stories
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Real results from real companies</p>
                            </div>
                            <Link href="/case-studies" className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                                View all case studies →
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {caseStudies.map((study) => (
                                <div
                                    key={study.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src={study.image}
                                            alt={study.company}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <HiOutlinePlay className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryConfig(study.category).color}`}>
                                                {study.industry}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{study.company}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{study.description}</p>
                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            {study.results?.map((result, idx) => (
                                                <div key={idx} className="text-center">
                                                    <div className="text-sm font-bold text-green-600 dark:text-green-400">{result.value}</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <Link
                                            href={study.link}
                                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            Read case study
                                            <HiArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Practices Grid/List View */}
                <div className={`grid gap-6 mb-12 ${viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                    }`}>
                    {filteredPractices.map((practice) => {
                        const categoryConfig = getCategoryConfig(practice.category);
                        const isSaved = savedPractices.includes(practice.id);

                        return (
                            <div
                                key={practice.id}
                                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                    }`}
                            >
                                {/* Practice Image */}
                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-72 md:shrink-0' : ''}`}>
                                    <img
                                        src={practice.image}
                                        alt={practice.title}
                                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-56 md:h-full' : 'h-48'
                                            }`}
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                            {categoryConfig.label}
                                        </span>
                                    </div>
                                    {practice.impactBadge && (
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2 text-center">
                                                <span className="text-xs font-semibold text-white">{practice.impactBadge}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    {/* Metadata */}
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                            <HiOutlineClock className="w-4 h-4" />
                                            <span>{practice.readTime || '8 min read'}</span>
                                        </div>
                                        <button
                                            onClick={() => handleSavePractice(practice.id)}
                                            className="text-gray-400 hover:text-yellow-500 transition-colors"
                                        >
                                            <HiOutlineBookmark className={`w-4 h-4 ${isSaved ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                                        </button>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        <Link href={practice.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {practice.title}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {practice.description}
                                    </p>

                                    {/* Key Metrics */}
                                    {practice.metrics && (
                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            {practice.metrics.map((metric, idx) => (
                                                <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{metric.value}</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Implementation Steps Preview */}
                                    {practice.steps && practice.steps.length > 0 && (
                                        <div className="mb-4">
                                            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                                                <HiOutlineClipboardList className="w-3 h-3" />
                                                <span>Implementation Steps</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                                {practice.steps.slice(0, 3).map((step, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                        {step}
                                                    </span>
                                                ))}
                                                {practice.steps.length > 3 && (
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">+{practice.steps.length - 3}</span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {practice.tags && practice.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {practice.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer Actions */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={practice.author?.avatar}
                                                alt={practice.author?.name}
                                                className="w-6 h-6 rounded-full object-cover"
                                            />
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{practice.author?.name}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            {practice.downloadable && (
                                                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                                    <HiOutlineDownload className="w-4 h-4" />
                                                </button>
                                            )}
                                            <Link
                                                href={practice.link}
                                                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                            >
                                                Read More
                                                <HiArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredPractices.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineLightBulb className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No practices found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Expert Insights Section */}
                {config?.showExpertInsights && (
                    <div className="mt-12 bg-linear-to-r from-blue-600 to-green-600 dark:from-blue-500 dark:to-green-500 rounded-3xl p-8 md:p-12 text-white">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <HiOutlineAcademicCap className="w-6 h-6" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Expert Insights</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    {config?.expertInsights?.title || "Get personalized recommendations"}
                                </h3>
                                <p className="text-blue-100 mb-6">
                                    {config?.expertInsights?.description || "Schedule a free consultation with our supply chain experts to get tailored best practices for your business."}
                                </p>
                                <Link
                                    href={config?.expertInsights?.link || "/consultation"}
                                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                                >
                                    Talk to an Expert
                                    <HiArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="flex -space-x-4 justify-center">
                                {config?.expertInsights?.experts?.map((expert, idx) => (
                                    <img
                                        key={idx}
                                        src={expert.avatar}
                                        alt={expert.name}
                                        className="w-16 h-16 rounded-full border-2 border-white object-cover"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Get Weekly Best Practices"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive curated best practices, case studies, and implementation guides."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email for best practices newsletter"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                            {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. Get 1-2 emails per week."}
                        </p>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </section>
    );
};

export default BestPracticesSection2;

