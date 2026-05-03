// page/frontend/Careers/ApplicationProcessSection/ApplicationProcessSection1.jsx

/**
 * Application Process Section I - Your Journey to Joining Us
 *
 * Unique Design Elements:
 * - Stats Cards for process metrics (Weeks to Offer, Satisfaction, Response Time, Steps)
 * - Timeline-based Application Steps with Alternating Layout
 * - Step Duration Display with Clock Icon
 * - Expandable Tips Section within Each Step
 * - Candidate Tips Grid with Icon Cards
 * - FAQ Section with Question-Answer Cards
 * - Application Form with Validation and Success Message
 * - Contact Section with Email and Phone
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Timeline Layout
 * - Process Step Progress Indicator
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { useState, useCallback, useMemo } from 'react';

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
  HiOutlineSparkles,
  HiOutlineHome,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';
import { MdOutlineCoffee as HiOutlineCoffee } from "react-icons/md";

const ApplicationProcessSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', experience: '', resume: null, portfolio: '', message: '', agreeToTerms: false });

  // ==================== MEMOIZED DATA ====================
  const steps = useMemo(
    () =>
      config?.steps || [
        {
          id: 1,
          title: "Submit Application",
          description: "Complete the online application form with your resume and cover letter.",
          icon: "document",
          duration: "15-20 min",
          tips: ["Tailor your resume to the role", "Highlight relevant experience", "Proofread before submitting"]
        },
        {
          id: 2,
          title: "Initial Screening",
          description: "Recruiting team reviews applications and reaches out to qualified candidates.",
          icon: "users",
          duration: "3-5 business days",
          tips: ["Check your email regularly", "Be ready to discuss your background", "Prepare questions about the role"]
        },
        {
          id: 3,
          title: "Technical Assessment",
          description: "Complete a skills assessment or technical challenge relevant to the role.",
          icon: "code",
          duration: "2-4 hours",
          tips: ["Review core concepts", "Practice problem-solving", "Show your thought process"]
        },
        {
          id: 4,
          title: "Team Interviews",
          description: "Meet with hiring manager and potential team members to discuss fit and culture.",
          icon: "chat",
          duration: "2-3 rounds",
          tips: ["Research the company", "Prepare examples of your work", "Ask thoughtful questions"]
        },
        {
          id: 5,
          title: "Offer & Onboarding",
          description: "Receive offer and begin the onboarding process to join the team.",
          icon: "gift",
          duration: "1-2 weeks",
          tips: ["Review offer details", "Complete onboarding paperwork", "Connect with your new team"]
        }
      ],
    [config?.steps]
  );

  const faqs = useMemo(
    () =>
      config?.faqs || [
        {
          question: "How long does the application process typically take?",
          answer: "The entire process usually takes 2-4 weeks from application to offer, depending on the role and number of candidates."
        },
        {
          question: "What should I include in my resume?",
          answer: "Include relevant work experience, projects, technical skills, and any accomplishments that demonstrate your impact. Tailor it to the specific role you're applying for."
        },
        {
          question: "Do you provide feedback for rejected applications?",
          answer: "Due to the volume of applications, we're unable to provide individual feedback for all candidates. However, candidates who advance to interviews will receive detailed feedback."
        },
        {
          question: "Can I apply for multiple positions?",
          answer: "Yes, you can apply for multiple positions that match your skills and experience. We recommend focusing on roles where you're most qualified."
        }
      ],
    [config?.faqs]
  );

  const tips = useMemo(
    () =>
      config?.tips || [
        { title: "Research the Company", description: "Understand our mission, values, and products before your interview.", icon: "globe" },
        { title: "Show Your Impact", description: "Use specific examples and metrics to demonstrate your achievements.", icon: "chart" },
        { title: "Ask Questions", description: "Prepare thoughtful questions about the role, team, and company culture.", icon: "chat" },
        { title: "Be Authentic", description: "Be yourself and share what makes you unique as a candidate.", icon: "heart" }
      ],
    [config?.tips]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "2-4", label: "Weeks to Offer", icon: "clock" },
        { value: "95%", label: "Candidate Satisfaction", icon: "star" },
        { value: "24h", label: "Response Time", icon: "bolt" },
        { value: "5", label: "Steps to Join", icon: "check" }
      ],
    [config?.stats]
  );

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
      coffee: <HiOutlineCoffee className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
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
  }, []);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resume: null,
        portfolio: '',
        message: '',
        agreeToTerms: false
      });
    }, 3000);
  }, []);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Application Process - Your Journey to Joining Us"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            {getIcon('document', 'w-4 h-4 text-blue-600 dark:text-blue-400 mr-2')}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'Application Process'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Your Journey to'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Joining Us'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "We've designed a transparent and supportive application process to help you showcase your best self. Here's what to expect when you apply."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                {getIcon(stat.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== PROCESS STEPS ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {config?.stepsTitle || 'How to Apply'}
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800 hidden md:block" />

            <div className="space-y-8 md:space-y-0">
              {steps.map((step, idx) => (
                <div
                  key={step.id}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-blue-600 text-white items-center justify-center z-10 shrink-0">
                    {step.id}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                        }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        {getIcon(step.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {getIcon('clock', 'w-4 h-4')}
                      <span>{step.duration}</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Tips:
                      </p>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIdx) => (
                          <li key={tipIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                            {getIcon('check', 'w-3 h-3 text-emerald-500 mt-0.5 shrink-0')}
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty spacer for even/odd layout */}
                  <div className="hidden md:block w-8 h-8 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== TIPS FOR SUCCESS SECTION ==================== */}
        <div className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {config?.tipsTitle || 'Tips for Success'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, idx) => (
              <div key={idx} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {getIcon(tip.icon, 'w-6 h-6 text-blue-600 dark:text-blue-400')}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {tip.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== FAQ SECTION ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {config?.faqTitle || 'Frequently Asked Questions'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== APPLICATION FORM ==================== */}
        <div
          id="application-form"
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            {getIcon('document', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.formTitle || 'Start Your Application'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {config?.formDescription ||
                'Ready to join us? Complete the form below to begin your application journey.'}
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
              <p className="text-gray-600 dark:text-gray-400">
                Thank you for your application. Our recruiting team will review it and reach out within 3-5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
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
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
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
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Position Interested In *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a position</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="Marketing Manager">Marketing Manager</option>
                    <option value="Sales Representative">Sales Representative</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-7">5-7 years</option>
                    <option value="7-10">7-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Resume / CV *
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-gray-200"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    PDF, DOC, or DOCX (Max 5MB)
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Portfolio / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="https://linkedin.com/in/... or https://portfolio.com/..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Why are you interested in this role?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="Tell us about your interest and what you hope to contribute..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
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

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          {getIcon('mail', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl font-bold mb-4">Questions About the Process?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
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
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                                      linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
                    background-size: 50px 50px;
                }
                .dark .bg-grid-pattern {
                    background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                                      linear-gradient(to bottom, #374151 1px, transparent 1px);
                }
            `}</style>
    </section>
  );
};

export default ApplicationProcessSection1;