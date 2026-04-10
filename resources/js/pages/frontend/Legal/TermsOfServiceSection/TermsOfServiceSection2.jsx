// page/frontend/MobileApp/Legal/TermsOfServiceSection/TermsOfServiceSection2.jsx

// React
import { useState, useMemo } from 'react';

// Icons
import {
  HiOutlineDocumentText,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineUser,
  HiOutlineClock,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineGlobe,
  HiOutlineDatabase,
  HiOutlineCreditCard,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineX,
  HiOutlineArrowRight,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineSearch,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineViewGrid,
  HiOutlineBell,
  HiOutlineHeart,
  HiOutlineStar,
} from 'react-icons/hi';
import { HiOutlineUserGroup, HiOutlineDocumentDuplicate, HiOutlineBuildingOffice } from 'react-icons/hi2';

const TermsOfServiceSection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('terms');
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");
  const [effectiveDate] = useState(config?.effectiveDate || "April 8, 2026");

  // Tabs configuration
  const tabs = [
    { id: 'terms', label: 'Terms of Service', icon: 'document' },
    { id: 'summary', label: 'Quick Summary', icon: 'view-grid' },
    { id: 'faq', label: 'FAQ', icon: 'chat' },
    { id: 'subscriptions', label: 'Plans & Pricing', icon: 'credit-card' },
  ];

  // Quick facts / stats
  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'clock', color: 'blue' },
    { label: 'Effective Date', value: effectiveDate, icon: 'calendar', color: 'indigo' },
    { label: 'Governing Law', value: 'California, USA', icon: 'globe', color: 'purple' },
    { label: 'Free Trial', value: '14 days', icon: 'heart', color: 'green' },
    { label: 'Response Time', value: '24-48 hours', icon: 'clock', color: 'orange' },
    { label: 'User Satisfaction', value: '98%', icon: 'star', color: 'yellow' },
  ];

  // Company information
  const company = useMemo(() => config?.company || {
    name: "SupplyChainPro Inc.",
    legalName: "SupplyChainPro Inc., a Delaware corporation",
    address: "123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105",
    email: "legal@supplychainpro.com",
    phone: "+1 (800) 555-0123",
    registration: "Registered in Delaware, USA",
    ein: "XX-XXXXXXX",
    dpaEmail: "dpa@supplychainpro.com"
  }, [config?.company]);

  // Subscription plans
  const subscriptionPlans = config?.subscriptionPlans || [
    {
      id: 'starter',
      name: "Starter",
      price: "$49",
      period: "per month",
      annualPrice: "$490",
      annualSavings: "$98",
      features: ["Up to 5 users", "1,000 shipments/month", "Basic analytics", "Email support", "48-hour response time"],
      billingCycle: "Monthly",
      color: "from-green-500 to-green-600",
      icon: "briefcase",
      popular: false
    },
    {
      id: 'professional',
      name: "Professional",
      price: "$99",
      period: "per month",
      annualPrice: "$990",
      annualSavings: "$198",
      features: ["Up to 20 users", "10,000 shipments/month", "Advanced analytics", "Priority support", "API access", "24-hour response time", "Custom reports"],
      billingCycle: "Monthly or Annual",
      color: "from-blue-500 to-blue-600",
      icon: "star",
      popular: true
    },
    {
      id: 'enterprise',
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      annualPrice: "Custom",
      annualSavings: "Volume pricing",
      features: ["Unlimited users", "Unlimited shipments", "Custom analytics", "24/7 dedicated support", "SLA agreement", "On-premise option", "SSO integration"],
      billingCycle: "Annual",
      color: "from-purple-500 to-purple-600",
      icon: "building",
      popular: false
    }
  ];

  // Main sections with detailed content
  const sections = useMemo(() => config?.sections || [
    {
      id: 'introduction',
      label: 'Introduction',
      icon: 'document',
      summary: 'Overview of our Terms of Service',
      color: 'from-blue-500 to-blue-600',
      content: {
        paragraphs: [
          'Welcome to SupplyChainPro ("Company," "we," "our," "us"). These Terms of Service ("Terms") govern your access to and use of our mobile application, website, and related services (collectively, the "Services").',
          'By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.',
          'These Terms constitute a legally binding agreement between you and SupplyChainPro regarding your use of our Services.'
        ],
        keyPoints: [
          'These Terms are legally binding',
          'Your use constitutes acceptance',
          'We may modify Terms with notice',
          'Continued use means acceptance'
        ]
      }
    },
    {
      id: 'acceptance',
      label: 'Acceptance of Terms',
      icon: 'check',
      summary: 'How you agree to these terms',
      color: 'from-green-500 to-green-600',
      content: {
        paragraphs: [
          'By creating an account, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, including any future modifications.',
          'If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.',
          'Your continued use of our Services following any changes constitutes your acceptance of those changes.'
        ]
      }
    },
    {
      id: 'eligibility',
      label: 'Eligibility',
      icon: 'user',
      summary: 'Who can use our services',
      color: 'from-teal-500 to-teal-600',
      content: {
        requirements: [
          'Be at least 18 years of age or the age of majority in your jurisdiction',
          'Have the legal capacity to enter into a binding agreement',
          'Not be prohibited from using our Services under applicable laws',
          'Provide accurate and complete registration information',
          'Not be a competitor or using our Services for competitive analysis'
        ]
      }
    },
    {
      id: 'account',
      label: 'Account Registration',
      icon: 'briefcase',
      summary: 'Creating and managing your account',
      color: 'from-cyan-500 to-cyan-600',
      content: {
        responsibilities: [
          'Provide accurate, current, and complete information during registration',
          'Maintain the security of your password and account credentials',
          'Promptly update your information as needed',
          'Accept responsibility for all activities that occur under your account',
          'Notify us immediately of any unauthorized use of your account'
        ],
        security: 'We implement industry-standard security measures, but you are responsible for maintaining the confidentiality of your login credentials.'
      }
    },
    {
      id: 'license',
      label: 'License to Use',
      icon: 'lock',
      summary: 'What we grant you',
      color: 'from-indigo-500 to-indigo-600',
      content: {
        grant: 'Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:',
        permissions: [
          'Download and install our mobile application on your device',
          'Access and use our Services for your internal business purposes',
          'Use our API in accordance with our API documentation'
        ],
        restrictions: [
          'You may not copy, modify, or distribute our software',
          'You may not reverse engineer or decompile our Services',
          'You may not resell or redistribute access to our Services'
        ]
      }
    },
    {
      id: 'obligations',
      label: 'User Obligations',
      icon: 'shield',
      summary: 'Your responsibilities',
      color: 'from-red-500 to-red-600',
      content: {
        responsibilities: [
          'All data, content, and information you upload to our Services',
          'Maintaining the confidentiality of your account credentials',
          'All activities that occur under your account',
          'Complying with our acceptable use policies',
          'Paying all applicable fees on time'
        ]
      }
    },
    {
      id: 'prohibited',
      label: 'Prohibited Activities',
      icon: 'scale',
      summary: 'What you cannot do',
      color: 'from-orange-500 to-orange-600',
      content: {
        activities: [
          'Violating any applicable laws or regulations',
          'Attempting to gain unauthorized access to our systems',
          'Interfering with other users\' use of our Services',
          'Reverse engineering or copying our software',
          'Uploading malicious code or harmful content',
          'Reselling or redistributing our Services without authorization',
          'Using our Services to compete with us',
          'Harvesting user data without consent'
        ]
      }
    },
    {
      id: 'intellectual-property',
      label: 'Intellectual Property',
      icon: 'document',
      summary: 'Ownership of content',
      color: 'from-pink-500 to-pink-600',
      content: {
        ourRights: 'Our Services and their entire contents, features, and functionality are owned by SupplyChainPro and are protected by copyright, trademark, and other intellectual property laws.',
        yourRights: 'You retain ownership of any data or content you submit to our Services. By submitting content, you grant us a license to use, store, and process that content to provide our Services to you.',
        trademarks: 'SupplyChainPro and all related logos are trademarks of SupplyChainPro Inc. You may not use these marks without our prior written consent.'
      }
    },
    {
      id: 'fees',
      label: 'Subscriptions & Fees',
      icon: 'credit-card',
      summary: 'Pricing and payment terms',
      color: 'from-yellow-500 to-yellow-600',
      content: {
        description: 'Certain features of our Services require a paid subscription. By subscribing, you agree to pay all applicable fees as described.',
        paymentTerms: 'Fees are billed in advance on a monthly or annual basis. Payments are non-refundable except as required by law.',
        changes: 'We may change our fees upon 30 days\' notice. Your continued use after changes constitutes acceptance.',
        taxes: 'You are responsible for all applicable taxes associated with your subscription.'
      }
    },
    {
      id: 'privacy',
      label: 'Data & Privacy',
      icon: 'database',
      summary: 'How we handle your data',
      color: 'from-emerald-500 to-emerald-600',
      content: {
        description: 'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information.',
        consent: 'By using our Services, you consent to our data practices as described in our Privacy Policy, including the transfer of your data to countries where we operate.',
        security: 'We implement industry-standard security measures to protect your data. However, no method of transmission is 100% secure.'
      }
    },
    {
      id: 'termination',
      label: 'Termination',
      icon: 'x',
      summary: 'How either party can end the agreement',
      color: 'from-rose-500 to-rose-600',
      content: {
        userTermination: 'You may terminate your account at any time by following the account deletion process in our app.',
        companyTermination: 'We may suspend or terminate your access immediately, without notice, for violation of these Terms, non-payment of fees, illegal conduct, or extended inactivity.',
        effects: 'Upon termination, your right to use our Services will immediately cease, and we may delete your data in accordance with our data retention policies.'
      }
    },
    {
      id: 'liability',
      label: 'Limitations of Liability',
      icon: 'shield',
      summary: 'Our liability to you',
      color: 'from-slate-500 to-slate-600',
      content: {
        disclaimer: 'To the maximum extent permitted by law, SupplyChainPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Services.',
        cap: 'Our total liability for any claims arising from these Terms shall not exceed the amount you paid us in the past 12 months.',
        exclusions: 'Some jurisdictions do not allow certain liability limitations, so some of the above limitations may not apply to you.'
      }
    },
    {
      id: 'indemnification',
      label: 'Indemnification',
      icon: 'scale',
      summary: 'Your obligation to defend us',
      color: 'from-amber-500 to-amber-600',
      content: {
        description: 'You agree to indemnify, defend, and hold harmless SupplyChainPro and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:',
        scenarios: [
          'Your violation of these Terms',
          'Your use of our Services',
          'Your violation of any law or third-party rights',
          'Any content you submit to our Services'
        ]
      }
    },
    {
      id: 'governing-law',
      label: 'Governing Law',
      icon: 'globe',
      summary: 'Which laws apply',
      color: 'from-sky-500 to-sky-600',
      content: {
        law: 'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.',
        venue: 'Any legal action arising from these Terms shall be brought exclusively in the federal or state courts located in San Francisco County, California.',
        disputeResolution: 'Before filing a claim, you agree to contact us to attempt to resolve any dispute informally. If we cannot resolve the dispute within 60 days, either party may initiate formal proceedings.'
      }
    },
    {
      id: 'changes',
      label: 'Changes to Terms',
      icon: 'clock',
      summary: 'How we update these terms',
      color: 'from-lime-500 to-lime-600',
      content: {
        description: 'We reserve the right to modify these Terms at any time. We will notify you of material changes by:',
        notificationMethods: [
          'Posting the updated Terms on our website',
          'Sending an email to registered users',
          'Displaying an in-app notification'
        ],
        acceptance: 'Your continued use of our Services after the effective date constitutes your acceptance of the modified Terms.'
      }
    },
    {
      id: 'contact',
      label: 'Contact Us',
      icon: 'mail',
      summary: 'How to reach us',
      color: 'from-violet-500 to-violet-600',
      content: {
        company,
        responseTime: 'We typically respond to inquiries within 24-48 hours.'
      }
    }
  ], [company, config?.sections]);

  // FAQ data
  const faqs = config?.faqs || [
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. Cancellation will take effect at the end of your current billing cycle. You will not receive a refund for the current period, but you will retain access until the end of your paid term.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'When you cancel your subscription, your data will be retained for 90 days in case you decide to reactivate. After 90 days, your data will be permanently deleted from our active systems. You can request an export of your data before cancellation.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We generally do not offer refunds for unused subscription time. However, if you experience technical issues that prevent you from using our Services, please contact our support team and we will work to resolve the issue or provide a prorated refund.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately with a prorated charge. Downgrades take effect at the end of your current billing cycle.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we implement industry-standard security measures including 256-bit AES encryption for data at rest, TLS 1.3 for data in transit, and regular security audits. We are SOC 2 Type II certified.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card is required to start the trial. You can cancel anytime during the trial period with no charge.'
    }
  ];

  // Filter sections based on search
  const filteredSections = useMemo(() => {
    if (!searchQuery) return sections;
    const query = searchQuery.toLowerCase();
    return sections.filter(section =>
      section.label.toLowerCase().includes(query) ||
      section.summary.toLowerCase().includes(query) ||
      JSON.stringify(section.content).toLowerCase().includes(query)
    );
  }, [sections, searchQuery]);

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      scale: <HiOutlineScale className={className} />,
      user: <HiOutlineUser className={className} />,
      'user-group': <HiOutlineUserGroup className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      database: <HiOutlineDatabase className={className} />,
      'credit-card': <HiOutlineCreditCard className={className} />,
      clock: <HiOutlineClock className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      mail: <HiOutlineMail className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      x: <HiOutlineX className={className} />,
      'view-grid': <HiOutlineViewGrid className={className} />,
      chat: <HiOutlineBell className={className} />,
      heart: <HiOutlineHeart className={className} />,
      star: <HiOutlineStar className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  // Render section content based on section type
  const renderSectionContent = (section) => {
    const content = section.content;

    if (section.id === 'introduction') {
      return (
        <div className="space-y-4">
          {content.paragraphs.map((p, idx) => (
            <p key={idx} className="text-gray-600 dark:text-gray-400">{p}</p>
          ))}
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">Key Points:</p>
            <ul className="space-y-2">
              {content.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    if (section.id === 'eligibility' && content.requirements) {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">To use our Services, you must meet the following requirements:</p>
          <ul className="space-y-2 ml-4">
            {content.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (section.id === 'account') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">You agree to:</p>
          <ul className="space-y-2 ml-4">
            {content.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{resp}</span>
              </li>
            ))}
          </ul>
          <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-300">{content.security}</p>
          </div>
        </div>
      );
    }

    if (section.id === 'license') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">{content.grant}</p>
          <ul className="space-y-2 ml-4">
            {content.permissions.map((perm, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{perm}</span>
              </li>
            ))}
          </ul>
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">Restrictions:</p>
            <ul className="space-y-1">
              {content.restrictions.map((rest, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{rest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    if (section.id === 'obligations') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">You are responsible for:</p>
          <ul className="space-y-2 ml-4">
            {content.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (section.id === 'prohibited') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">The following activities are strictly prohibited:</p>
          <ul className="space-y-2 ml-4">
            {content.activities.map((activity, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (section.id === 'intellectual-property') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">{content.ourRights}</p>
          <p className="text-gray-600 dark:text-gray-400">{content.yourRights}</p>
          <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <p className="text-sm">{content.trademarks}</p>
          </div>
        </div>
      );
    }

    if (section.id === 'fees') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">{content.description}</p>
          <p className="text-gray-600 dark:text-gray-400">{content.paymentTerms}</p>
          <p className="text-gray-600 dark:text-gray-400">{content.changes}</p>
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300">{content.taxes}</p>
          </div>
        </div>
      );
    }

    if (section.id === 'privacy') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">{content.description}</p>
          <p className="text-gray-600 dark:text-gray-400">{content.consent}</p>
          <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <HiOutlineLockClosed className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <p className="text-sm text-green-800 dark:text-green-300">{content.security}</p>
          </div>
        </div>
      );
    }

    if (section.id === 'termination') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400"><strong>By You:</strong> {content.userTermination}</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>By Us:</strong> {content.companyTermination}</p>
          <p className="text-gray-600 dark:text-gray-400">{content.effects}</p>
        </div>
      );
    }

    if (section.id === 'liability') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">{content.disclaimer}</p>
          <p className="text-gray-600 dark:text-gray-400">{content.cap}</p>
          <p className="text-sm text-gray-500">{content.exclusions}</p>
        </div>
      );
    }

    if (section.id === 'indemnification') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">{content.description}</p>
          <ul className="space-y-2 ml-4">
            {content.scenarios.map((scenario, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{scenario}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (section.id === 'governing-law') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">{content.law}</p>
          <p className="text-gray-600 dark:text-gray-400">{content.venue}</p>
          <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <p className="text-sm">{content.disputeResolution}</p>
          </div>
        </div>
      );
    }

    if (section.id === 'changes') {
      return (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">{content.description}</p>
          <ul className="space-y-2 ml-4">
            {content.notificationMethods.map((method, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{method}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 dark:text-gray-400">{content.acceptance}</p>
        </div>
      );
    }

    if (section.id === 'contact') {
      return (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-gray-900 dark:text-white">{content.company.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{content.company.address}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Email:</strong> <a href={`mailto:${content.company.email}`} className="text-indigo-600 hover:underline">{content.company.email}</a>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Phone:</strong> {content.company.phone}</p>
            <p className="text-xs text-gray-500">{content.company.registration}</p>
          </div>
          <p className="text-sm text-gray-500">{content.responseTime}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Terms of Service Center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full px-4 py-2 mb-6">
            <HiOutlineScale className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              {config?.badge || "Legal Agreement"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Terms of"} <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Service"}</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {config?.description || "These Terms of Service govern your use of SupplyChainPro's mobile application, website, and related services. Please read them carefully."}
          </p>

          {/* Quick Facts Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {quickFacts.map((fact, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                <div className={`w-6 h-6 rounded-full bg-${fact.color}-100 dark:bg-${fact.color}-900/30 flex items-center justify-center`}>
                  {getIcon(fact.icon, `w-3 h-3 text-${fact.color}-600`)}
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  <strong>{fact.label}:</strong> {fact.value}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
            >
              <HiOutlineDownload className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-sm font-medium"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Terms of Service Tab */}
        {activeTab === 'terms' && (
          <>
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search terms..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              {filteredSections.map((section) => (
                <div
                  key={section.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                    className="w-full p-6 text-left flex items-start justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-linear-to-r ${section.color} flex items-center justify-center shrink-0`}>
                        {getIcon(section.icon, "w-5 h-5 text-white")}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{section.label}</h3>
                        <p className="text-sm text-gray-500 mt-1">{section.summary}</p>
                      </div>
                    </div>
                    <div className="shrink-0 ml-4">
                      {expandedSection === section.id ? (
                        <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {expandedSection === section.id && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                      {renderSectionContent(section)}
                    </div>
                  )}
                </div>
              ))}

              {filteredSections.length === 0 && (
                <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
                  <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-500">No sections match your search.</p>
                </div>
              )}
            </div>
          </>
        )}

        {/* Quick Summary Tab */}
        {activeTab === 'summary' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Summary of Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.slice(0, 12).map((section) => (
                <div key={section.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer" onClick={() => { setActiveTab('terms'); setExpandedSection(section.id); setSearchQuery(''); }}>
                  <div className={`w-8 h-8 rounded-lg bg-linear-to-r ${section.color} flex items-center justify-center shrink-0`}>
                    {getIcon(section.icon, "w-4 h-4 text-white")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{section.label}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{section.summary}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-center">
              <p className="text-sm text-indigo-800 dark:text-indigo-300">
                This is a summary only. Please review the full Terms of Service for complete details.
              </p>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                    {expandedFaq === idx ? (
                      <HiOutlineChevronUp className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                    ) : (
                      <HiOutlineChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                    )}
                  </button>
                  {expandedFaq === idx && (
                    <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Still have questions? Contact our legal team at{' '}
                <a href="mailto:legal@supplychainpro.com" className="text-indigo-600 font-medium hover:underline">
                  legal@supplychainpro.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Subscriptions Tab */}
        {activeTab === 'subscriptions' && (
          <div className="space-y-8">
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 border ${plan.popular ? 'border-indigo-300 dark:border-indigo-500 ring-2 ring-indigo-500/20' : 'border-gray-200 dark:border-gray-700'}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-xs font-semibold rounded-bl-xl">
                      Most Popular
                    </div>
                  )}
                  <div className={`h-2 bg-linear-to-r ${plan.color}`} />
                  <div className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      {getIcon(plan.icon, "w-8 h-8 text-white")}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                      <span className="text-gray-500">/{plan.period}</span>
                    </div>
                    {plan.annualPrice !== "Custom" && (
                      <p className="text-sm text-green-600 mt-2">Save {plan.annualSavings} with annual billing</p>
                    )}
                    <ul className="mt-6 space-y-2 text-left">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <HiOutlineCheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}>
                      {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                      <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Billing Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Billing & Payment Information</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p className="flex items-start gap-2">
                  <HiOutlineCheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  All subscriptions are billed in advance on a monthly or annual basis.
                </p>
                <p className="flex items-start gap-2">
                  <HiOutlineCheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  You can cancel your subscription at any time from your account settings.
                </p>
                <p className="flex items-start gap-2">
                  <HiOutlineCheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  We accept all major credit cards and PayPal.
                </p>
                <p className="flex items-start gap-2">
                  <HiOutlineCheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  Enterprise customers can request invoice-based billing.
                </p>
              </div>
            </div>

            {/* Free Trial Info */}
            <div className="bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center">
              <HiOutlineHeart className="w-10 h-10 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">14-Day Free Trial</h3>
              <p className="text-green-100 mb-4">No credit card required. Cancel anytime during the trial period.</p>
              <button className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Your Free Trial
                <HiOutlineArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Print/Download Modal */}
        {showPrintModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowPrintModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-indigo-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Download Terms of Service</h3>
                  <button onClick={() => setShowPrintModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <HiOutlineDocumentDuplicate className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Choose your preferred format to download the complete Terms of Service.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                    <HiOutlineDownload className="w-4 h-4" />
                    PDF
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                    <HiOutlinePrinter className="w-4 h-4" />
                    Print
                  </button>
                </div>
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

export default TermsOfServiceSection2;