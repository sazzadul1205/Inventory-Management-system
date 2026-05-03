// page/frontend/Careers/ApplicationProcessSection/ApplicationProcessSection3.jsx

/**
 * Application Process Section III - Full Application Hub with Stories & Multi-step Form
 *
 * Unique Design Elements:
 * - Multi-tab UI (Process Overview, Apply Now, Candidate Stories, Resources)
 * - Interactive Process Steps Grid with Clickable Cards
 * - Candidate Success Stories Carousel with Auto-play and Manual Navigation
 * - Multi-step Application Form with Progress Indicator
 * - Auto-save Draft to LocalStorage
 * - Step Detail Modal with Pro Tips and Checklist
 * - Video Modal for Step-by-Step Guides
 * - FAQ Accordion Section with Expandable Answers
 * - Resources Grid with Link Cards
 * - Application ID Generation on Successful Submission
 * - Form Validation with Error Messages
 * - Contact Section with Email and Phone
 * - Animated Pulse Badge in Header
 * - Circuit Board Background Pattern
 * - Stats Cards for Key Metrics
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaQuoteLeft as HiOutlineQuote, FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import { FiCoffee } from 'react-icons/fi';
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
  HiOutlineChevronRight,
  HiOutlineLibrary,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineQrcode,
  HiOutlinePrinter,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineClipboard, HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';
import {
  MdOutlineFullscreen as HiOutlineFullscreen,
  MdOutlineClosedCaption as HiOutlineClosedCaption,
} from "react-icons/md";

const ApplicationProcessSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [formStep, setFormStep] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [applicationId, setApplicationId] = useState('');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', location: '', position: '', experience: '', currentCompany: '', linkedin: '', portfolio: '', resume: null, coverLetter: null, referralSource: '', availability: '', salaryExpectation: '', message: '', agreeToTerms: false, subscribeToUpdates: false });

  // ===================== REFS ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== LOCAL STORAGE (AUTO-SAVE DRAFT) ====================
  useEffect(() => {
    const saved = localStorage.getItem('applicationDraft');
    if (saved) {
      const parsed = JSON.parse(saved);
      setFormData(prev => ({ ...prev, ...parsed }));
    }
  }, []);

  useEffect(() => {
    const draft = { ...formData };
    delete draft.resume;
    delete draft.coverLetter;
    localStorage.setItem('applicationDraft', JSON.stringify(draft));
  }, [formData]);

  // ==================== MEMOIZED DATA ====================
  const tabs = useMemo(
    () => [
      { id: 'overview', label: 'Process Overview', icon: 'library' },
      { id: 'apply', label: 'Apply Now', icon: 'document' },
      { id: 'stories', label: 'Candidate Stories', icon: 'users' },
      { id: 'resources', label: 'Resources', icon: 'academic' }
    ],
    []
  );

  const steps = useMemo(
    () =>
      config?.steps || [
        {
          id: 1,
          title: "Submit Application",
          description: "Complete the online application form with your resume and cover letter.",
          icon: "document",
          duration: "15-20 min",
          tips: ["Tailor your resume to the role", "Highlight relevant experience", "Proofread before submitting"],
          checklist: ["Resume uploaded", "Cover letter attached", "Portfolio link added"],
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
          id: 2,
          title: "Initial Screening",
          description: "Recruiting team reviews applications and reaches out to qualified candidates.",
          icon: "users",
          duration: "3-5 business days",
          tips: ["Check your email regularly", "Be ready to discuss your background", "Prepare questions about the role"],
          checklist: ["Application reviewed", "Screening call scheduled", "Availability confirmed"],
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
          id: 3,
          title: "Technical Assessment",
          description: "Complete a skills assessment or technical challenge relevant to the role.",
          icon: "code",
          duration: "2-4 hours",
          tips: ["Review core concepts", "Practice problem-solving", "Show your thought process"],
          checklist: ["Assessment invitation received", "Assessment completed", "Results reviewed"],
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
          id: 4,
          title: "Team Interviews",
          description: "Meet with hiring manager and potential team members to discuss fit and culture.",
          icon: "chat",
          duration: "2-3 rounds",
          tips: ["Research the company", "Prepare examples of your work", "Ask thoughtful questions"],
          checklist: ["Interview scheduled", "Interview completed", "Feedback collected"],
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
          id: 5,
          title: "Offer & Onboarding",
          description: "Receive offer and begin the onboarding process to join the team.",
          icon: "gift",
          duration: "1-2 weeks",
          tips: ["Review offer details", "Complete onboarding paperwork", "Connect with your new team"],
          checklist: ["Offer extended", "Offer accepted", "Onboarding started"],
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
        }
      ],
    [config?.steps]
  );

  const candidateStories = useMemo(() => config?.candidateStories || [], [config?.candidateStories]);
  const resources = useMemo(() => config?.resources || [], [config?.resources]);
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "2-4", label: "Weeks to Offer", icon: "clock", trend: "Fast", trendUp: true },
        { value: "95%", label: "Candidate Satisfaction", icon: "star", trend: "+5%", trendUp: true },
        { value: "24h", label: "Response Time", icon: "bolt", trend: "Average", trendUp: true },
        { value: "85%", label: "Offer Acceptance", icon: "check", trend: "+10%", trendUp: true }
      ],
    [config?.stats]
  );

  const positions = useMemo(
    () =>
      config?.positions || [
        "Software Engineer", "Product Manager", "Data Scientist", "UX Designer",
        "Marketing Manager", "Sales Representative", "Customer Success Manager", "DevOps Engineer"
      ],
    [config?.positions]
  );

  const experienceOptions = useMemo(() => ["0-1 years", "1-3 years", "3-5 years", "5-7 years", "7-10 years", "10+ years"], []);
  const referralOptions = useMemo(() => ["LinkedIn", "Company Website", "Friend Referral", "Conference/Event", "University", "Other"], []);
  const availabilityOptions = useMemo(() => ["Immediately", "2 weeks", "1 month", "2 months", "3+ months"], []);
  const salaryOptions = useMemo(() => ["$50k - $70k", "$70k - $90k", "$90k - $110k", "$110k - $130k", "$130k - $150k", "$150k+"], []);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
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
      'chevron-right': <HiOutlineChevronRight className={className} />,
      library: <HiOutlineLibrary className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <HiOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <HiOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      coffee: <FiCoffee className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />,
      clipboard: <HiOutlineClipboard className={className} />
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  }, []);

  /**
   * Returns step configuration with color, icon, and gradient
   */
  const getStepConfig = useCallback((stepId) => {
    const configs = {
      1: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', borderColor: 'border-blue-200 dark:border-blue-800', icon: 'document', status: 'completed', gradient: 'from-blue-500 to-blue-600' },
      2: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', borderColor: 'border-purple-200 dark:border-purple-800', icon: 'users', status: 'current', gradient: 'from-purple-500 to-purple-600' },
      3: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', borderColor: 'border-emerald-200 dark:border-emerald-800', icon: 'code', status: 'pending', gradient: 'from-emerald-500 to-emerald-600' },
      4: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', borderColor: 'border-orange-200 dark:border-orange-800', icon: 'chat', status: 'pending', gradient: 'from-orange-500 to-orange-600' },
      5: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', borderColor: 'border-indigo-200 dark:border-indigo-800', icon: 'gift', status: 'pending', gradient: 'from-indigo-500 to-indigo-600' }
    };
    return configs[stepId] || configs[1];
  }, []);

  /**
   * Handle form input change
   */
  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  /**
   * Validate current step
   */
  const validateStep = useCallback(() => {
    const newErrors = {};

    if (formStep === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    } else if (formStep === 2) {
      if (!formData.position) newErrors.position = 'Position is required';
    } else if (formStep === 3) {
      if (!formData.resume) newErrors.resume = 'Resume is required';
    } else if (formStep === 4) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formStep, formData]);

  /**
   * Next step
   */
  const nextStep = useCallback(() => {
    if (validateStep()) {
      setFormStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [validateStep]);

  /**
   * Previous step
   */
  const prevStep = useCallback(() => {
    setFormStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /**
   * Generate application ID
   */
  const generateApplicationId = useCallback(() => {
    return `APP-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  }, []);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!validateStep()) return;

      const newId = generateApplicationId();
      setApplicationId(newId);
      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
        setFormStep(1);
        localStorage.removeItem('applicationDraft');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          location: '',
          position: '',
          experience: '',
          currentCompany: '',
          linkedin: '',
          portfolio: '',
          resume: null,
          coverLetter: null,
          referralSource: '',
          availability: '',
          salaryExpectation: '',
          message: '',
          agreeToTerms: false,
          subscribeToUpdates: false
        });
      }, 3000);
    },
    [validateStep, generateApplicationId]
  );

  /**
   * Toggle FAQ expand
   */
  const toggleFaq = useCallback((index) => {
    setExpandedFaq((prev) => (prev === index ? null : index));
  }, []);

  /**
   * Open step modal
   */
  const openStepModal = useCallback((step) => {
    setSelectedStep(step);
    setShowApplicationModal(true);
  }, []);

  // ==================== CAROUSEL NAVIGATION ====================
  const storiesCount = candidateStories.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % storiesCount);
  }, [storiesCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + storiesCount) % storiesCount);
  }, [storiesCount]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && storiesCount > 1 && activeTab === 'stories') {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, storiesCount, activeTab, nextSlide]);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Application Process Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-apply" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80"
                stroke="#9CA3AF"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-apply)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineDocumentText className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Application Process"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Your Journey to"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Joining Us"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "We've designed a transparent and supportive application process to help you showcase your best self. Here's what to expect when you apply."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, "w-4 h-4 text-blue-600 dark:text-blue-400")}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== OVERVIEW TAB - PROCESS STEPS ==================== */}
        {activeTab === 'overview' && (
          <>
            <div className="relative mb-16">
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Our 5-Step Application Process
              </h2>

              {/* Desktop Timeline */}
              <div className="hidden md:block relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2" />
                <div className="relative flex justify-between">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className="flex flex-col items-center text-center w-1/5 cursor-pointer group"
                      onClick={() => openStepModal(step)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openStepModal(step)}
                    >
                      <div
                        className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 bg-linear-to-r ${getStepConfig(step.id).gradient} text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl`}
                      >
                        {getIcon(step.icon, "w-8 h-8")}
                      </div>
                      <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{step.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile View */}
              <div className="md:hidden space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer group"
                    onClick={() => openStepModal(step)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openStepModal(step)}
                  >
                    <div className="p-4 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-linear-to-r ${getStepConfig(step.id).gradient} flex items-center justify-center text-white`}>
                        {getIcon(step.icon, "w-6 h-6")}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{step.duration}</p>
                      </div>
                      <HiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            {faqs.length > 0 && (
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
                        aria-label={`Toggle FAQ: ${faq.question}`}
                      >
                        <span className="font-semibold text-gray-900 dark:text-white pr-4">
                          {faq.question}
                        </span>
                        {getIcon('chevron-down', `w-5 h-5 text-gray-400 transition-transform shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''}`)}
                      </button>
                      {expandedFaq === idx && (
                        <div className="px-5 pb-5 pt-0 animate-fadeIn">
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* ==================== APPLY TAB - APPLICATION FORM ==================== */}
        {activeTab === 'apply' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              {getIcon('document', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {config?.formTitle || "Start Your Application"}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.formDescription || "Complete the form below to begin your journey with us."}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Your progress is saved automatically
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  {getIcon('check', 'w-8 h-8 text-emerald-600 dark:text-emerald-400')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Thank you for your application. Reference ID:{' '}
                  <span className="font-mono text-blue-600 dark:text-blue-400">{applicationId}</span>
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Our recruiting team will review your application and reach out within 3-5 business days.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex justify-between items-center">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex-1 text-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${formStep >= step
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                            }`}
                        >
                          {step}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">
                          {step === 1 && 'Personal'}
                          {step === 2 && 'Professional'}
                          {step === 3 && 'Documents'}
                          {step === 4 && 'Review'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-2">
                    <div className="absolute top-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full w-full" />
                    <div
                      className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-300"
                      style={{ width: `${(formStep - 1) * 33.33}%` }}
                    />
                  </div>
                </div>

                {/* Step 1 - Personal Info */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.firstName
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.lastName
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.email
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                          placeholder="City, Country"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2 - Professional Info */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Professional Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Position *
                        </label>
                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.position
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                        >
                          <option value="">Select a position</option>
                          {positions.map((pos) => (
                            <option key={pos} value={pos}>
                              {pos}
                            </option>
                          ))}
                        </select>
                        {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Years of Experience
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                        >
                          <option value="">Select experience</option>
                          {experienceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Current Company
                        </label>
                        <input
                          type="text"
                          name="currentCompany"
                          value={formData.currentCompany}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          LinkedIn URL
                        </label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Portfolio/GitHub
                        </label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3 - Documents */}
                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Documents
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Resume/CV *
                      </label>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleInputChange}
                        accept=".pdf,.doc,.docx"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl ${errors.resume
                          ? 'border-red-500'
                          : 'border-gray-200 dark:border-gray-600'
                          } text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-gray-200`}
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        PDF, DOC, or DOCX (Max 5MB)
                      </p>
                      {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Cover Letter (optional)
                      </label>
                      <input
                        type="file"
                        name="coverLetter"
                        onChange={handleInputChange}
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4 - Additional */}
                {formStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Additional Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          How did you hear about us?
                        </label>
                        <select
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                        >
                          <option value="">Select an option</option>
                          {referralOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Availability
                        </label>
                        <select
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                        >
                          <option value="">Select availability</option>
                          {availabilityOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Salary Expectation
                        </label>
                        <select
                          name="salaryExpectation"
                          value={formData.salaryExpectation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                        >
                          <option value="">Select range</option>
                          {salaryOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Additional Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500"
                          placeholder="Tell us why you're interested in this role..."
                        />
                      </div>
                      <div className="md:col-span-2 space-y-3">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            I agree to the{' '}
                            <a href="/privacy-policy" className="text-blue-600 hover:underline">
                              privacy policy
                            </a>{' '}
                            and confirm that the information provided is accurate. *
                          </span>
                        </label>
                        {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="subscribeToUpdates"
                            checked={formData.subscribeToUpdates}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Subscribe to updates about new opportunities and career tips.
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  {formStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  {formStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                    >
                      Next
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                    >
                      Submit Application
                      {getIcon('check', 'w-4 h-4')}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        )}

        {/* ==================== STORIES TAB - CANDIDATE STORIES CAROUSEL ==================== */}
        {activeTab === 'stories' && candidateStories.length > 0 && (
          <div className="relative mb-12">
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Candidate Success Stories
            </h2>
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {candidateStories.map((story, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-4 mb-6">
                        {story.avatar ? (
                          <img
                            src={story.avatar}
                            alt={story.name}
                            className="w-16 h-16 rounded-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            {getIcon("users", "w-8 h-8 text-blue-600 dark:text-blue-400")}
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{story.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{story.role}</p>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-400 dark:text-gray-500">
                            <span>Hired: {story.hireDate}</span>
                            <span>•</span>
                            <span>{story.processDuration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex gap-1 text-amber-500 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 italic text-lg">"{story.quote}"</p>
                      </div>
                      {story.tags && story.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {story.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {candidateStories.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Previous slide"
                  >
                    <HiOutlineChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Next slide"
                  >
                    <HiOutlineChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {candidateStories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-400'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ==================== RESOURCES TAB ==================== */}
        {activeTab === 'resources' && resources.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {resources.map((resource, idx) => (
              <Link
                key={idx}
                href={resource.link}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(resource.icon, "w-6 h-6 text-blue-600 dark:text-blue-400")}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
                <div className="mt-3 text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Learn More
                  <HiArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          {getIcon('mail', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl font-bold mb-4">Questions About the Process?</h3>
          <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
            Our recruiting team is here to help. Reach out to us directly for any questions about the application process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:careers@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              aria-label="Email recruiting team"
            >
              {getIcon('mail', 'w-4 h-4')}
              careers@supplychainpro.com
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Call recruiting team"
            >
              {getIcon('phone', 'w-4 h-4')}
              +1 (555) 123-4567
            </a>
          </div>
        </div>

        {/* ==================== STEP DETAIL MODAL ==================== */}
        {showApplicationModal && selectedStep && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setShowApplicationModal(false)}
            role="dialog"
            aria-label="Step details"
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative h-32 bg-linear-to-r ${getStepConfig(selectedStep.id).gradient}`}>
                <button
                  onClick={() => setShowApplicationModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label="Close modal"
                >
                  <HiOutlineX className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="flex items-center gap-2">
                    {getIcon(selectedStep.icon, "w-6 h-6")}
                    <h2 className="text-xl font-bold">{selectedStep.title}</h2>
                  </div>
                  <p className="text-sm text-white/80">{selectedStep.duration}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedStep.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      {getIcon('star', 'w-4 h-4 text-amber-500')}
                      Pro Tips
                    </p>
                    <ul className="space-y-2">
                      {selectedStep.tips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          {getIcon('check', 'w-4 h-4 text-emerald-500 mt-0.5 shrink-0')}
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                      {getIcon('clipboard', 'w-4 h-4')}
                      Checklist
                    </p>
                    <ul className="space-y-2">
                      {selectedStep.checklist.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          {getIcon('check', 'w-4 h-4 text-blue-500')}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedStep.videoUrl && (
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        setCurrentVideo(selectedStep.videoUrl);
                        setShowVideoModal(true);
                        setShowApplicationModal(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Watch video guide"
                    >
                      {getIcon('play', 'w-4 h-4')}
                      Watch Video Guide
                    </button>
                  </div>
                )}

                <button
                  onClick={() => setShowApplicationModal(false)}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && currentVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setShowVideoModal(false)}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
              <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
                .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            `}</style>
    </section>
  );
};

export default ApplicationProcessSection3;