// page/frontend/Careers/ApplicationProcessSection/ApplicationProcessSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineUserGroup,
    HiOutlineGlobe,
    HiOutlineChip,
    HiOutlineCloudUpload,
    HiOutlineShieldCheck,
    HiOutlineLightningBolt,
    HiOutlineChartBar,
    HiOutlineUsers,
    HiOutlineCalendar,
    HiOutlineTag,
    HiArrowRight,
    HiOutlineCheckCircle,
    HiOutlineClock,
    HiOutlineEye,
    HiOutlineBell,
    HiOutlineDownload,
    HiOutlinePlay,
    HiOutlineDocumentText,
    HiOutlineCode,
    HiOutlineCog,
    HiOutlineRefresh,
    HiOutlineStar,
    HiOutlineFlag,
    HiOutlineGift,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineExternalLink,
    HiOutlineMail,
    HiOutlineThumbUp,
    HiOutlineChat,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlineNewspaper,
    HiOutlineAcademicCap,
    HiOutlineBriefcase,
    HiOutlineLocationMarker,
    HiOutlineCreditCard,
    HiOutlineChartPie,
    HiOutlineTemplate,
    HiOutlineBadgeCheck,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineHeart,
    HiOutlineSparkles,
    HiOutlineHome,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineTrendingUp,
    HiOutlineFire,
    HiOutlineChevronLeft,
    HiOutlineChevronRight
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy, HiOutlineClipboard } from 'react-icons/hi2';

const ApplicationProcessSection2 = ({ config }) => {
    const [activeStep, setActiveStep] = useState(1);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showApplicationTips, setShowApplicationTips] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        location: '',
        resume: null,
        portfolio: '',
        referralSource: '',
        message: '',
        agreeToTerms: false,
        subscribeToUpdates: false
    });
    const [errors, setErrors] = useState({});

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            usergroup: <HiOutlineUserGroup className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            chip: <HiOutlineChip className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
            shield: <HiOutlineShieldCheck className={className} />,
            bolt: <HiOutlineLightningBolt className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            users: <HiOutlineUsers className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            tag: <HiOutlineTag className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            clock: <HiOutlineClock className={className} />,
            eye: <HiOutlineEye className={className} />,
            bell: <HiOutlineBell className={className} />,
            download: <HiOutlineDownload className={className} />,
            play: <HiOutlinePlay className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            code: <HiOutlineCode className={className} />,
            cog: <HiOutlineCog className={className} />,
            refresh: <HiOutlineRefresh className={className} />,
            star: <HiOutlineStar className={className} />,
            flag: <HiOutlineFlag className={className} />,
            gift: <HiOutlineGift className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            mail: <HiOutlineMail className={className} />,
            'thumbs-up': <HiOutlineThumbUp className={className} />,
            chat: <HiOutlineChat className={className} />,
            quote: <HiOutlineQuote className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            newspaper: <HiOutlineNewspaper className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            briefcase: <HiOutlineBriefcase className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            template: <HiOutlineTemplate className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            phone: <HiOutlinePhone className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            heart: <HiOutlineHeart className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            home: <HiOutlineHome className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />
        };
        return icons[iconName] || <HiOutlineDocumentText className={className} />;
    };

    // Get step configuration
    const getStepConfig = (stepId) => {
        const configs = {
            1: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', borderColor: 'border-blue-200 dark:border-blue-800', icon: 'document', status: 'completed' },
            2: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', borderColor: 'border-purple-200 dark:border-purple-800', icon: 'users', status: 'current' },
            3: { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', borderColor: 'border-green-200 dark:border-green-800', icon: 'code', status: 'pending' },
            4: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', borderColor: 'border-orange-200 dark:border-orange-800', icon: 'chat', status: 'pending' },
            5: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', borderColor: 'border-indigo-200 dark:border-indigo-800', icon: 'gift', status: 'pending' }
        };
        return configs[stepId] || configs[1];
    };

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.position) newErrors.position = 'Position is required';
        if (!formData.resume) newErrors.resume = 'Resume is required';
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                position: '',
                experience: '',
                location: '',
                resume: null,
                portfolio: '',
                referralSource: '',
                message: '',
                agreeToTerms: false,
                subscribeToUpdates: false
            });
        }, 3000);
    };

    // Application steps
    const steps = config?.steps || [
        {
            id: 1,
            title: "Submit Application",
            description: "Complete the online application form with your resume and cover letter.",
            icon: "document",
            duration: "15-20 min",
            tips: ["Tailor your resume to the role", "Highlight relevant experience", "Proofread before submitting"],
            checklist: ["Resume uploaded", "Cover letter attached", "Portfolio link added"]
        },
        {
            id: 2,
            title: "Initial Screening",
            description: "Recruiting team reviews applications and reaches out to qualified candidates.",
            icon: "users",
            duration: "3-5 business days",
            tips: ["Check your email regularly", "Be ready to discuss your background", "Prepare questions about the role"],
            checklist: ["Application reviewed", "Screening call scheduled", "Availability confirmed"]
        },
        {
            id: 3,
            title: "Technical Assessment",
            description: "Complete a skills assessment or technical challenge relevant to the role.",
            icon: "code",
            duration: "2-4 hours",
            tips: ["Review core concepts", "Practice problem-solving", "Show your thought process"],
            checklist: ["Assessment invitation received", "Assessment completed", "Results reviewed"]
        },
        {
            id: 4,
            title: "Team Interviews",
            description: "Meet with hiring manager and potential team members to discuss fit and culture.",
            icon: "chat",
            duration: "2-3 rounds",
            tips: ["Research the company", "Prepare examples of your work", "Ask thoughtful questions"],
            checklist: ["Interview scheduled", "Interview completed", "Feedback collected"]
        },
        {
            id: 5,
            title: "Offer & Onboarding",
            description: "Receive offer and begin the onboarding process to join the team.",
            icon: "gift",
            duration: "1-2 weeks",
            tips: ["Review offer details", "Complete onboarding paperwork", "Connect with your new team"],
            checklist: ["Offer extended", "Offer accepted", "Onboarding started"]
        }
    ];

    // FAQ items
    const faqs = config?.faqs || [
        {
            question: "How long does the application process typically take?",
            answer: "The entire process usually takes 2-4 weeks from application to offer, depending on the role and number of candidates. We aim to provide timely updates at each stage."
        },
        {
            question: "What should I include in my resume?",
            answer: "Include relevant work experience, projects, technical skills, and any accomplishments that demonstrate your impact. Use metrics where possible to quantify your achievements. Tailor it to the specific role you're applying for."
        },
        {
            question: "Do you provide feedback for rejected applications?",
            answer: "Due to the volume of applications, we're unable to provide individual feedback for all candidates. However, candidates who advance to interviews will receive detailed feedback to help with future opportunities."
        },
        {
            question: "Can I apply for multiple positions?",
            answer: "Yes, you can apply for multiple positions that match your skills and experience. We recommend focusing on roles where you're most qualified and customizing your application for each."
        },
        {
            question: "What happens after I submit my application?",
            answer: "You'll receive a confirmation email immediately. Our recruiting team will review your application within 3-5 business days. If there's a match, you'll be contacted for an initial screening call."
        },
        {
            question: "Do you offer remote positions?",
            answer: "Yes! We're a remote-first company with team members across the globe. Most of our roles are fully remote, with some requiring timezone alignment for collaboration."
        }
    ];

    // Application resources
    const resources = config?.resources || [
        { title: "Resume Writing Guide", description: "Tips for crafting an effective resume", icon: "document", link: "/resources/resume-guide" },
        { title: "Interview Preparation", description: "Common questions and how to prepare", icon: "chat", link: "/resources/interview-prep" },
        { title: "Portfolio Best Practices", description: "Showcase your work effectively", icon: "template", link: "/resources/portfolio-guide" },
        { title: "Company Culture Guide", description: "Learn about our values and culture", icon: "heart", link: "/resources/culture-guide" }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "2-4", label: "Weeks to Offer", icon: "clock", trend: "Fast", trendUp: true },
        { value: "95%", label: "Candidate Satisfaction", icon: "star", trend: "+5%", trendUp: true },
        { value: "24h", label: "Response Time", icon: "bolt", trend: "Average", trendUp: true },
        { value: "85%", label: "Offer Acceptance", icon: "check", trend: "+10%", trendUp: true }
    ];

    // Toggle FAQ expand
    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    // Positions available
    const positions = config?.positions || [
        "Software Engineer", "Product Manager", "Data Scientist", "UX Designer",
        "Marketing Manager", "Sales Representative", "Customer Success Manager", "DevOps Engineer"
    ];

    const experienceOptions = ["0-1 years", "1-3 years", "3-5 years", "5-7 years", "7-10 years", "10+ years"];
    const referralOptions = ["LinkedIn", "Company Website", "Friend Referral", "Conference/Event", "University", "Other"];

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Application Process - Detailed Guide"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Stats */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
                            <HiOutlineDocumentText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Application Process"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Your Journey to"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Joining Us"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "We've designed a transparent and supportive application process to help you showcase your best self. Here's what to expect when you apply."}
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                {stat.trend && (
                                    <div className={`text-xs mt-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                                        {stat.trend}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Steps - Timeline View */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Our Application Process</h2>
                    
                    {/* Desktop Timeline */}
                    <div className="hidden md:block relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2" />
                        <div className="relative flex justify-between">
                            {steps.map((step) => {
                                const stepConfig = getStepConfig(step.id);
                                return (
                                    <div key={step.id} className="flex flex-col items-center text-center w-1/5">
                                        <button
                                            onClick={() => setActiveStep(step.id)}
                                            className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${activeStep === step.id
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-110'
                                                : stepConfig.status === 'completed'
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                                                }`}
                                        >
                                            {stepConfig.status === 'completed' ? (
                                                <HiOutlineCheckCircle className="w-6 h-6" />
                                            ) : (
                                                <span className="font-semibold">{step.id}</span>
                                            )}
                                        </button>
                                        <h3 className={`mt-3 font-semibold ${activeStep === step.id ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">{step.duration}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Accordion */}
                    <div className="md:hidden space-y-4">
                        {steps.map((step) => {
                            const stepConfig = getStepConfig(step.id);
                            const isActive = activeStep === step.id;
                            return (
                                <div key={step.id} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                    <button
                                        onClick={() => setActiveStep(isActive ? null : step.id)}
                                        className="w-full p-4 flex items-center justify-between text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stepConfig.color}`}>
                                                {getIcon(step.icon, "w-5 h-5")}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                                                <p className="text-xs text-gray-500">{step.duration}</p>
                                            </div>
                                        </div>
                                        <HiOutlineChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isActive ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isActive && (
                                        <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-700">
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{step.description}</p>
                                            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-3">
                                                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Tips:</p>
                                                <ul className="space-y-1">
                                                    {step.tips.map((tip, tipIdx) => (
                                                        <li key={tipIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                            <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                            <span>{tip}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Active Step Details */}
                    <div className="hidden md:block mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        {steps.find(s => s.id === activeStep) && (
                            <>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${getStepConfig(activeStep).color} flex items-center justify-center`}>
                                        {getIcon(steps.find(s => s.id === activeStep).icon, "w-6 h-6")}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{steps.find(s => s.id === activeStep).title}</h3>
                                        <p className="text-sm text-gray-500">{steps.find(s => s.id === activeStep).duration}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{steps.find(s => s.id === activeStep).description}</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4">
                                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                            <HiOutlineStar className="w-4 h-4 text-yellow-500" />
                                            Pro Tips
                                        </p>
                                        <ul className="space-y-2">
                                            {steps.find(s => s.id === activeStep).tips.map((tip, tipIdx) => (
                                                <li key={tipIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                                        <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                                            <HiOutlineClipboard className="w-4 h-4" />
                                            Checklist
                                        </p>
                                        <ul className="space-y-2">
                                            {steps.find(s => s.id === activeStep).checklist.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <HiOutlineCheckCircle className="w-4 h-4 text-blue-500" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Application Resources */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Helpful Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {resources.map((resource, idx) => (
                            <Link
                                key={idx}
                                href={resource.link}
                                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    {getIcon(resource.icon, "w-6 h-6 text-blue-600")}
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
                                <div className="mt-3 text-blue-600 text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                                    Learn More
                                    <HiArrowRight className="w-3 h-3" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Application Form */}
                <div className="mb-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-8">
                        <HiOutlineDocumentText className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.formTitle || "Start Your Application"}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            {config?.formDescription || "Ready to join us? Complete the form below to begin your application journey."}
                        </p>
                    </div>

                    {formSubmitted ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Thank you for your application. Our recruiting team will review it and reach out within 3-5 business days.</p>
                            <button
                                onClick={() => setShowApplicationTips(true)}
                                className="text-blue-600 hover:underline flex items-center gap-1 justify-center"
                            >
                                <HiOutlineStar className="w-4 h-4" />
                                View Application Tips
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                                        placeholder="John"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.lastName ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                                        placeholder="Doe"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Position *</label>
                                    <select
                                        name="position"
                                        value={formData.position}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.position ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                                    >
                                        <option value="">Select a position</option>
                                        {positions.map(pos => <option key={pos} value={pos}>{pos}</option>)}
                                    </select>
                                    {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Years of Experience</label>
                                    <select
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl"
                                    >
                                        <option value="">Select experience</option>
                                        {experienceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl"
                                        placeholder="City, Country"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">How did you hear about us?</label>
                                    <select
                                        name="referralSource"
                                        value={formData.referralSource}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl"
                                    >
                                        <option value="">Select an option</option>
                                        {referralOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Resume/CV *</label>
                                    <input
                                        type="file"
                                        name="resume"
                                        onChange={handleInputChange}
                                        accept=".pdf,.doc,.docx"
                                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.resume ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                                    />
                                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                                    {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Portfolio / LinkedIn URL</label>
                                    <input
                                        type="url"
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl"
                                        placeholder="https://linkedin.com/in/... or https://portfolio.com/..."
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Why are you interested in this role?</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl"
                                        placeholder="Tell us about your interest and what you hope to contribute..."
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-3">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 text-blue-600 rounded"
                                        />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            I agree to the <a href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</a> and confirm that the information provided is accurate. *
                                        </span>
                                    </label>
                                    {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="subscribeToUpdates"
                                            checked={formData.subscribeToUpdates}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 text-blue-600 rounded"
                                        />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Subscribe to updates about new opportunities and career tips.
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Submit Application
                                    <HiArrowRight className="inline ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        {config?.faqTitle || "Frequently Asked Questions"}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md"
                            >
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full p-5 flex items-center justify-between text-left"
                                >
                                    <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                                    <HiOutlineChevronDown className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === idx && (
                                    <div className="px-5 pb-5">
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">
                        Questions About the Process?
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Our recruiting team is here to help. Reach out to us directly for any questions about the application process.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="mailto:careers@supplychainpro.com"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                            <HiOutlineMail className="w-4 h-4" />
                            careers@supplychainpro.com
                        </a>
                        <a
                            href="tel:+15551234567"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            <HiOutlinePhone className="w-4 h-4" />
                            +1 (555) 123-4567
                        </a>
                    </div>
                </div>

                {/* Application Tips Modal */}
                {showApplicationTips && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowApplicationTips(false)}>
                        <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className="bg-blue-600 p-4">
                                <h3 className="text-white font-bold text-lg">Application Tips</h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300">Tailor your resume to highlight relevant experience</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300">Use specific examples and metrics to demonstrate impact</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300">Proofread your application before submitting</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300">Include a link to your portfolio or GitHub if applicable</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300">Check your email regularly for updates</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => setShowApplicationTips(false)}
                                    className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                                >
                                    Got it
                                </button>
                            </div>
                        </div>
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
      `}</style>
        </section>
    );
};

export default ApplicationProcessSection2;