// page/frontend/TrustSignals/TermsOfServiceSection/TermsOfServiceSection1.jsx

/**
 * Terms of Service Section I - Legal Agreement Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Terms Metrics (Sections, Support, Uptime, Compliance)
 * - Sidebar Navigation with Sticky Positioning
 * - Interactive Terms Sections with Click-to-View
 * - Download Terms of Service PDF Button
 * - Terms Questions Form with Validation
 * - Success Message on Form Submission
 * - Contact Legal Team Section
 * - Effective Date Display
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Two-Column Layout with Sidebar
 * - Section Icons for Visual Navigation
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { useState } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import {
  FaQuoteLeft as HiOutlineQuote,
  FaCertificate as HiOutlineCertificate,
} from 'react-icons/fa';
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineCloudUpload,
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
  HiOutlineScale,
  HiOutlineClipboardList,
  HiOutlineReceiptTax,
  HiOutlineUserGroup,
  HiOutlineX,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from 'react-icons/md';

const TermsOfServiceSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('acceptance');
  const [formData, setFormData] = useState({ name: '', email: '', question: '', agreeToTerms: false });

  // ==================== MEMOIZED DATA ====================

  const sections = config?.sections || [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: 'clipboard',
      content: 'By accessing or using SupplyChainPro\'s platform, services, or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and SupplyChainPro.'
    },
    {
      id: 'definitions',
      title: 'Definitions',
      icon: 'document',
      content: '"Platform" refers to SupplyChainPro\'s software and services. "User" refers to any individual or entity accessing our services. "Account" refers to the user\'s registered account. "Content" refers to any data, information, or materials uploaded or processed through the platform.'
    },
    {
      id: 'account-registration',
      title: 'Account Registration',
      icon: 'users',
      content: 'To access certain features, you must register for an account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.'
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      icon: 'shield',
      content: 'You agree to use our services in compliance with all applicable laws and regulations. You shall not: misuse the platform, attempt to gain unauthorized access, interfere with service operations, or use the platform for any illegal purpose.'
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: 'badge',
      content: 'SupplyChainPro owns all rights, title, and interest in the platform, including software, trademarks, and content. You retain ownership of your data. You grant us a license to use your data to provide and improve our services.'
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: 'credit',
      content: 'Fees for paid services are described on our pricing page. Payments are due in accordance with your subscription plan. Fees are non-refundable except as required by law. We may change fees with notice.'
    },
    {
      id: 'data-privacy',
      title: 'Data Privacy',
      icon: 'lock',
      content: 'Our Privacy Policy governs how we collect, use, and protect your personal information. By using our services, you consent to our data practices as described in the Privacy Policy.'
    },
    {
      id: 'service-level',
      title: 'Service Level',
      icon: 'chart',
      content: 'We strive to maintain high availability and performance. Our service level agreement (SLA) outlines uptime commitments and support response times. We are not liable for downtime caused by factors beyond our control.'
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: 'x',
      content: 'Either party may terminate this agreement. You may cancel your account at any time. We may suspend or terminate your access for violation of these terms. Upon termination, your right to use the service ends immediately.'
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: 'shield',
      content: 'To the maximum extent permitted by law, SupplyChainPro shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by you for the services.'
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: 'globe',
      content: 'These terms shall be governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.'
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms',
      icon: 'refresh',
      content: 'We may update these terms from time to time. We will notify you of material changes via email or through the platform. Your continued use of the service constitutes acceptance of the modified terms.'
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: 'mail',
      content: 'For questions about these Terms of Service, please contact us at legal@supplychainpro.com or by mail at the address provided on our website. Our legal team will respond to inquiries promptly.'
    }
  ];

  const stats = config?.stats || [
    { value: '13', label: 'Sections', icon: 'document' },
    { value: '24/7', label: 'Support', icon: 'chat' },
    { value: '99.9%', label: 'Uptime SLA', icon: 'chart' },
    { value: 'GDPR', label: 'Compliant', icon: 'globe' }
  ];

  const effectiveDate = config?.effectiveDate || 'January 1, 2024';

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = (iconName, className = 'w-5 h-5') => {
    const icons = {
      shield: <HiOutlineShieldCheck className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
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
      scale: <HiOutlineScale className={className} />,
      clipboard: <HiOutlineClipboardList className={className} />,
      receipt: <HiOutlineReceiptTax className={className} />,
      usergroup: <HiOutlineUserGroup className={className} />,
      x: <HiOutlineX className={className} />,
      headphones: <HiOutlineHeadphones className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineScale className={className} />;
  };

  /**
   * Handle form input change
   */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        question: '',
        agreeToTerms: false
      });
    }, 3000);
  };

  /**
   * Handle download PDF
   */
  const handleDownloadPDF = () => {
    // Minimal valid PDF file structure
    const pdfContent = `%PDF-1.1
        1 0 obj
        << /Type /Catalog /Pages 2 0 R >>
        endobj
        2 0 obj
        << /Type /Pages /Kids [3 0 R] /Count 1 >>
        endobj
        3 0 obj
        << /Type /Page /Parent 2 0 R /MediaBox [0 0 300 144] >>
        endobj
        trailer
        << /Root 1 0 R >>
        %%EOF`;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'privacy-policy.pdf';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Terms of Service - Legal Agreement"
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
            <HiOutlineScale className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'Terms of Service'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Our'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Terms'}
            </span>{' '}
            {config?.title?.suffix || 'of Service'}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "These terms govern your use of SupplyChainPro's platform and services. Please read them carefully before using our platform."}
          </p>

          {/* Effective Date */}
          <div className="mt-4 text-sm text-gray-500">Effective Date: {effectiveDate}</div>
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

        {/* ==================== SIDEBAR & CONTENT ==================== */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/30 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">On this page</h3>
              </div>
              <nav className="p-2 max-h-[70vh] overflow-y-auto" aria-label="Terms of service sections">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 ${activeSection === section.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    aria-label={`View ${section.title} section`}
                  >
                    {getIcon(section.icon, 'w-4 h-4')}
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className={`transition-all duration-300 ${activeSection === section.id ? 'block' : 'hidden'}`}
                >
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      {getIcon(section.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                  </div>
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              ))}

              {/* Download PDF Button */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300"
                  aria-label="Download Terms of Service PDF"
                >
                  <HiOutlineDownload className="w-4 h-4" />
                  Download Terms of Service (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== TERMS QUESTIONS FORM ==================== */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Questions About Our Terms?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Submit your questions and our legal team will respond within 5 business days.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Question Submitted!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thank you for reaching out. Our legal team will respond within 5 business days.
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
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
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
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Question *
                  </label>
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="Please describe your question about our terms of service..."
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
                      I have read and understand the terms of service. *
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Question
                  <HiArrowRight className="inline ml-2 w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Contact Our Legal Team</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            If you have questions about these Terms of Service or wish to discuss legal matters, contact our legal
            department.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:legal@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              aria-label="Email legal team"
            >
              <HiOutlineMail className="w-4 h-4" />
              legal@supplychainpro.com
            </a>
            <a
              href="/legal-request"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Submit legal request"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              Submit Legal Request
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
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

export default TermsOfServiceSection1;