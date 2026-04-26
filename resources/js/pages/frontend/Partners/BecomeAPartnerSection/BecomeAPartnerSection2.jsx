// page/frontend/Partners/BecomeAPartnerSection/BecomeAPartnerSection2.jsx

/**
 * Become a Partner Section - Partner Application Hub
 *
 * Unique design elements:
 * - Stats cards for partner program metrics
 * - Tabbed interface (Program Overview, Apply Now, Compare Programs)
 * - Multi-step application form with progress indicator
 * - Program selector for different partnership types
 * - Program details with benefits and requirements
 * - Partner tiers comparison section
 * - Comparison table for program features
 * - Form validation with error messages
 * - Multi-select checkboxes for regions and services
 * - Success message on form submission
 * - Responsive progress steps with animated progress bar
 * - Contact section with email and phone
 * - Animated gradient orbs in background
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { useState, useRef, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaQuoteLeft as HiOutlineQuote, FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
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
  HiOutlineDatabase,
  HiOutlineServer,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch } from 'react-icons/hi2';

const BecomeAPartnerSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [formStep, setFormStep] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('technology');
  const [formData, setFormData] = useState({
    // Step 1 - Basic Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    // Step 2 - Program Selection
    programType: 'technology',
    partnerTier: '',
    regions: [],
    // Step 3 - Business Info
    companySize: '',
    yearsInBusiness: '',
    numberOfEmployees: '',
    primaryServices: [],
    // Step 4 - Additional Info
    referralSource: '',
    message: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});

  // ==================== REFERENCE MANAGEMENT ====================
  const formRef = useRef(null);

  // ==================== MEMOIZED DATA ====================

  /**
   * Program details configuration
   */
  const programDetails = useMemo(
    () => ({
      technology: {
        title: 'Technology Partner',
        description: 'Integrate your technology with SupplyChainPro to deliver joint solutions.',
        icon: 'chip',
        benefits: [
          'API access & documentation',
          'Co-marketing opportunities',
          'Technical support',
          'Joint solution validation',
          'Early access to new features',
        ],
        requirements: [
          'Technology integration capability',
          'Development team',
          'API expertise',
          'Commitment to joint solution development',
        ],
      },
      solution: {
        title: 'Solution Partner',
        description: 'Deliver end-to-end supply chain solutions leveraging our platform.',
        icon: 'briefcase',
        benefits: [
          'Sales enablement',
          'Partner training & certification',
          'Lead sharing',
          'Joint go-to-market programs',
          'Solution co-creation',
        ],
        requirements: [
          'Supply chain expertise',
          'Implementation methodology',
          'Customer success track record',
          'Solution consulting team',
        ],
      },
      consulting: {
        title: 'Consulting Partner',
        description: 'Provide expert advisory and implementation services to mutual clients.',
        icon: 'users',
        benefits: [
          'Implementation methodology',
          'Practice development',
          'Co-branding opportunities',
          'Exclusive events',
          'Thought leadership collaboration',
        ],
        requirements: [
          'Consulting practice',
          'Supply chain certifications',
          'Project management expertise',
          'Client references',
        ],
      },
      reseller: {
        title: 'Reseller Partner',
        description: 'Sell and distribute SupplyChainPro solutions to your customer base.',
        icon: 'globe',
        benefits: [
          'Competitive margins',
          'Sales training',
          'Marketing development funds',
          'Dedicated channel support',
          'Volume incentives',
        ],
        requirements: [
          'Sales team',
          'Customer base',
          'Business development capability',
          'Sales process alignment',
        ],
      },
    }),
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '500+', label: 'Active Partners', icon: 'usergroup' },
        { value: '50+', label: 'Countries', icon: 'globe' },
        { value: '$100M+', label: 'Partner Revenue', icon: 'credit' },
        { value: '95%', label: 'Partner Satisfaction', icon: 'star' },
      ],
    [config?.stats]
  );

  const tiers = useMemo(
    () =>
      config?.tiers || [
        {
          name: 'Registered',
          icon: 'badge',
          description: 'Entry level for new partners',
          benefits: ['Basic support', 'Marketing resources', 'Partner portal access'],
        },
        {
          name: 'Advanced',
          icon: 'star',
          description: 'For proven partners with track record',
          benefits: ['Priority support', 'Co-marketing funds', 'Lead sharing', 'Training access'],
        },
        {
          name: 'Premier',
          icon: 'trophy',
          description: 'Top-tier strategic partners',
          benefits: ['Dedicated account manager', 'Joint business planning', 'Executive reviews', 'Exclusive events'],
        },
      ],
    [config?.tiers]
  );

  const comparisonFeatures = useMemo(
    () =>
      config?.comparisonFeatures || [
        { name: 'API Access', technology: true, solution: true, consulting: false, reseller: false },
        { name: 'Partner Training', technology: true, solution: true, consulting: true, reseller: true },
        { name: 'Sales Enablement', technology: false, solution: true, consulting: false, reseller: true },
        { name: 'Lead Sharing', technology: false, solution: true, consulting: true, reseller: false },
        { name: 'Co-marketing Funds', technology: true, solution: true, consulting: false, reseller: true },
        { name: 'Technical Support', technology: true, solution: true, consulting: true, reseller: false },
        { name: 'Implementation Methodology', technology: false, solution: true, consulting: true, reseller: false },
        { name: 'Volume Incentives', technology: false, solution: false, consulting: false, reseller: true },
      ],
    [config?.comparisonFeatures]
  );

  // Options for selects
  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees',
  ];

  const yearsOptions = ['Less than 1 year', '1-3 years', '3-5 years', '5-10 years', '10+ years'];

  const serviceOptions = [
    'Supply Chain Consulting',
    'Implementation Services',
    'Technology Integration',
    'Managed Services',
    'Training & Enablement',
    'Support Services',
  ];

  const regionOptions = ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East & Africa'];

  const referralOptions = [
    'Search Engine',
    'Social Media',
    'Partner Referral',
    'Conference/Event',
    'Webinar',
    'Email Newsletter',
    'Other',
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
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
      database: <HiOutlineDatabase className={className} />,
      server: <HiOutlineServer className={className} />,
      rocket: <HiOutlineRocketLaunch className={className} />,
    };
    return icons[iconName] || <HiOutlineUserGroup className={className} />;
  }, []);

  /**
   * Handle form input change
   */
  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  /**
   * Handle multi-select for regions and services
   */
  const handleMultiSelect = useCallback((name, value) => {
    setFormData((prev) => {
      const current = prev[name];
      if (current.includes(value)) {
        return { ...prev, [name]: current.filter((item) => item !== value) };
      } else {
        return { ...prev, [name]: [...current, value] };
      }
    });
  }, []);

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
      if (!formData.company) newErrors.company = 'Company name is required';
    } else if (formStep === 2) {
      if (!formData.programType) newErrors.programType = 'Please select a program type';
    } else if (formStep === 3) {
      if (!formData.companySize) newErrors.companySize = 'Please select company size';
      if (!formData.primaryServices.length) newErrors.primaryServices = 'Please select at least one service';
    } else if (formStep === 4) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formStep, formData]);

  /**
   * Next step handler
   */
  const nextStep = useCallback(() => {
    if (validateStep()) {
      setFormStep((prev) => prev + 1);
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [validateStep]);

  /**
   * Previous step handler
   */
  const prevStep = useCallback(() => {
    setFormStep((prev) => prev - 1);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (validateStep()) {
        // Simulate API call
        setTimeout(() => {
          setFormSubmitted(true);
          setFormStep(1);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            website: '',
            programType: 'technology',
            partnerTier: '',
            regions: [],
            companySize: '',
            yearsInBusiness: '',
            numberOfEmployees: '',
            primaryServices: [],
            referralSource: '',
            message: '',
            agreeToTerms: false,
          });
        }, 1000);
      }
    },
    [validateStep]
  );

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Become a Partner Application"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              {getIcon('usergroup', 'w-4 h-4 text-blue-600 dark:text-blue-400')}
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || 'Partner Application'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Become a'}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Partner'}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                'Join our global partner ecosystem and accelerate your business growth. Complete the application below to start your journey.'}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'overview'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            aria-label="Show program overview"
          >
            {getIcon('globe', 'w-4 h-4')}
            Program Overview
          </button>
          <button
            onClick={() => setActiveTab('apply')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'apply'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            aria-label="Show application form"
          >
            {getIcon('document', 'w-4 h-4')}
            Apply Now
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'compare'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            aria-label="Show program comparison"
          >
            {getIcon('chart', 'w-4 h-4')}
            Compare Programs
          </button>
        </div>

        {/* ==================== PROGRAM OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <div className="mb-12">
            {/* Program Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['technology', 'solution', 'consulting', 'reseller'].map((program) => (
                <button
                  key={program}
                  onClick={() => setSelectedProgram(program)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedProgram === program
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  aria-label={`Select ${programDetails[program].title}`}
                >
                  {getIcon(programDetails[program].icon || 'briefcase', 'w-4 h-4')}
                  {programDetails[program].title}
                </button>
              ))}
            </div>

            {/* Program Details */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      {getIcon(programDetails[selectedProgram].icon || 'briefcase', 'w-6 h-6 text-blue-600')}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {programDetails[selectedProgram].title}
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {programDetails[selectedProgram].description}
                  </p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {programDetails[selectedProgram].benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          {getIcon('check', 'w-5 h-5 text-emerald-500 mt-0.5 shrink-0')}
                          <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Requirements:</h3>
                  <ul className="space-y-2 mb-6">
                    {programDetails[selectedProgram].requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        {getIcon('star', 'w-5 h-5 text-blue-500 mt-0.5 shrink-0')}
                        <span className="text-gray-600 dark:text-gray-400">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                    {getIcon('badge', 'w-6 h-6 text-blue-600 mb-2')}
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Ready to get started? Apply now and our partner team will reach out within 2 business days.
                    </p>
                    <button
                      onClick={() => setActiveTab('apply')}
                      className="mt-3 inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
                      aria-label="Go to application form"
                    >
                      Apply Now
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Tiers */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Partner Tiers</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {tiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className={`text-center p-6 rounded-2xl border ${idx === 1
                      ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700'
                      }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                      {getIcon(tier.icon, 'w-6 h-6 text-blue-600')}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h4>
                    <p className="text-sm text-gray-500 mb-3">{tier.description}</p>
                    <ul className="text-left space-y-1 text-sm">
                      {tier.benefits.slice(0, 3).map((benefit, bid) => (
                        <li key={bid} className="flex items-center gap-1">
                          {getIcon('check', 'w-3 h-3 text-emerald-500')}
                          <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== COMPARE PROGRAMS TAB ==================== */}
        {activeTab === 'compare' && (
          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 text-left font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                  <th className="p-4 text-center font-semibold text-gray-700 dark:text-gray-300">Technology</th>
                  <th className="p-4 text-center font-semibold text-gray-700 dark:text-gray-300">Solution</th>
                  <th className="p-4 text-center font-semibold text-gray-700 dark:text-gray-300">Consulting</th>
                  <th className="p-4 text-center font-semibold text-gray-700 dark:text-gray-300">Reseller</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-700">
                    <td className="p-4 text-sm font-medium text-gray-900 dark:text-white">{feature.name}</td>
                    <td className="p-4 text-center">
                      {feature.technology && getIcon('check', 'w-5 h-5 text-emerald-500 mx-auto')}
                    </td>
                    <td className="p-4 text-center">
                      {feature.solution && getIcon('check', 'w-5 h-5 text-emerald-500 mx-auto')}
                    </td>
                    <td className="p-4 text-center">
                      {feature.consulting && getIcon('check', 'w-5 h-5 text-emerald-500 mx-auto')}
                    </td>
                    <td className="p-4 text-center">
                      {feature.reseller && getIcon('check', 'w-5 h-5 text-emerald-500 mx-auto')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ==================== APPLICATION FORM TAB ==================== */}
        {activeTab === 'apply' && (
          <div ref={formRef} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
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
                    <span className="text-xs text-gray-500 hidden sm:inline">
                      {step === 1 && 'Basic Info'}
                      {step === 2 && 'Program'}
                      {step === 3 && 'Business'}
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

            {formSubmitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  {getIcon('check', 'w-8 h-8 text-emerald-600')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for your interest. Our partner team will contact you within 2 business days.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 text-blue-600 hover:underline"
                  aria-label="Submit another application"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Step 1 - Basic Information */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                          placeholder="John"
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                          placeholder="Doe"
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.company
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                          placeholder="Your Company"
                        />
                        {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company Website
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                          placeholder="https://www.company.com"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2 - Program Selection */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Program Selection</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Partnership Program *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['technology', 'solution', 'consulting', 'reseller'].map((program) => (
                          <label
                            key={program}
                            className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all duration-300 ${formData.programType === program
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                              }`}
                          >
                            <input
                              type="radio"
                              name="programType"
                              value={program}
                              checked={formData.programType === program}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-blue-600"
                            />
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white">
                                {programDetails[program].title}
                              </div>
                              <div className="text-xs text-gray-500">{programDetails[program].description}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.programType && <p className="text-red-500 text-xs mt-2">{errors.programType}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Target Regions (Select all that apply)
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {regionOptions.map((region) => (
                          <label key={region} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={formData.regions.includes(region)}
                              onChange={() => handleMultiSelect('regions', region)}
                              className="w-4 h-4 text-blue-600 rounded"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{region}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3 - Business Information */}
                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Business Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company Size *
                        </label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.companySize
                            ? 'border-red-500'
                            : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                        >
                          <option value="">Select size</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                        {errors.companySize && <p className="text-red-500 text-xs mt-1">{errors.companySize}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Years in Business
                        </label>
                        <select
                          name="yearsInBusiness"
                          value={formData.yearsInBusiness}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        >
                          <option value="">Select years</option>
                          {yearsOptions.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Number of Employees
                        </label>
                        <input
                          type="text"
                          name="numberOfEmployees"
                          value={formData.numberOfEmployees}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                          placeholder="e.g., 50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Primary Services *
                        </label>
                        <div className="space-y-2">
                          {serviceOptions.map((service) => (
                            <label key={service} className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={formData.primaryServices.includes(service)}
                                onChange={() => handleMultiSelect('primaryServices', service)}
                                className="w-4 h-4 text-blue-600 rounded"
                              />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{service}</span>
                            </label>
                          ))}
                        </div>
                        {errors.primaryServices && <p className="text-red-500 text-xs mt-1">{errors.primaryServices}</p>}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4 - Additional Information */}
                {formStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Additional Information</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
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
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        placeholder="Tell us more about your business and why you're interested in partnering..."
                      />
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 rounded mt-1"
                      />
                      <label className="text-sm text-gray-600 dark:text-gray-400">
                        I agree to the{' '}
                        <a href="/partner-terms" className="text-blue-600 hover:underline">
                          partner program terms and conditions
                        </a>{' '}
                        and confirm that the information provided is accurate.
                      </label>
                    </div>
                    {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  {formStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
                      aria-label="Previous step"
                    >
                      Previous
                    </button>
                  )}
                  {formStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
                      aria-label="Next step"
                    >
                      Next
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto px-6 py-2 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-all duration-300 flex items-center gap-2"
                      aria-label="Submit application"
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

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          {getIcon('mail', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl font-bold mb-4">Questions About Partner Program?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our partner team is here to help. Reach out to us directly for any questions about the program.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:partners@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              aria-label="Email partner team"
            >
              {getIcon('mail', 'w-4 h-4')}
              partners@supplychainpro.com
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Call partner team"
            >
              {getIcon('phone', 'w-4 h-4')}
              +1 (555) 123-4567
            </a>
          </div>
        </div>
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
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
          -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
        }
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BecomeAPartnerSection2;