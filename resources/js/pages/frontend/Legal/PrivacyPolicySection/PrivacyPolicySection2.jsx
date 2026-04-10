// page/frontend/PrivacyPolicySection/PrivacyPolicySection2.jsx

// React
import { useState, useMemo } from 'react';

// Icons
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineDatabase,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineDocumentText,
  HiOutlineMail,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineUser,
  HiOutlineOfficeBuilding,
  HiOutlineScale,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCreditCard,
  HiOutlineClipboardList,
  HiOutlineTrash,
  HiOutlineRefresh,
  HiOutlineBell,
  HiOutlineViewGrid,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlinePrinter,
} from 'react-icons/hi';
import { HiOutlineShieldExclamation, HiOutlineUserGroup, HiOutlineDocumentDuplicate } from 'react-icons/hi2';

const PrivacyPolicySection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('policy');
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Navigation sections with expanded content
  const sections = useMemo(() => config?.sections || [
    {
      id: 'introduction',
      label: 'Introduction',
      icon: 'document',
      summary: 'Overview of our privacy commitment and policy scope',
      content: {
        title: 'Introduction to Our Privacy Practices',
        paragraphs: [
          'Welcome to SupplyChainPro\'s Privacy Policy. Your privacy is critically important to us. This Privacy Policy applies to all information collected through our mobile application ("App"), website, and related services (collectively, the "Services").',
          'By using our Services, you agree to the collection and use of information in accordance with this policy. We are committed to protecting your personal data and being transparent about how we handle it.',
          'This policy explains what data we collect, why we collect it, how we use it, and the choices you have regarding your information.'
        ],
        keyPoints: [
          'We only collect data necessary for service delivery',
          'You retain ownership of your business data',
          'We never sell your personal information',
          'You can request data deletion at any time'
        ]
      }
    },
    {
      id: 'information-collection',
      label: 'Information We Collect',
      icon: 'database',
      summary: 'Categories of personal and business data we gather',
      content: {
        title: 'Data Collection Categories',
        categories: [
          {
            name: 'Personal Information',
            icon: 'user',
            items: ['Full name and contact information', 'Billing and shipping addresses', 'Company name and job title', 'Government-issued ID for verification']
          },
          {
            name: 'Account Information',
            icon: 'briefcase',
            items: ['Username and password (encrypted)', 'Profile preferences', 'Account activity logs', 'Team member associations']
          },
          {
            name: 'Supply Chain Data',
            icon: 'clipboard',
            items: ['Inventory levels', 'Shipment tracking details', 'Supplier information', 'Order history']
          },
          {
            name: 'Technical Information',
            icon: 'chip',
            items: ['Device information', 'IP address', 'App usage statistics', 'Crash reports']
          }
        ],
        legalBasis: 'We collect this data based on contractual necessity, legal obligations, and legitimate business interests.'
      }
    },
    {
      id: 'usage-of-information',
      label: 'How We Use Your Information',
      icon: 'chip',
      summary: 'Purposes for processing your data',
      content: {
        title: 'Data Usage Purposes',
        purposes: [
          {
            title: 'Service Delivery',
            description: 'To provide, maintain, and improve our supply chain management services',
            items: ['Process shipments and track inventory', 'Generate analytics and reports', 'Sync data across devices', 'Provide customer support']
          },
          {
            title: 'Communication',
            description: 'To communicate with you about your account and our services',
            items: ['Send shipment updates', 'Respond to support inquiries', 'Notify about service changes', 'Share product announcements']
          },
          {
            title: 'Security & Compliance',
            description: 'To protect our services and comply with legal obligations',
            items: ['Detect and prevent fraud', 'Maintain audit logs', 'Enforce terms of service', 'Comply with legal requirements']
          }
        ]
      }
    },
    {
      id: 'data-sharing',
      label: 'Data Sharing & Disclosure',
      icon: 'globe',
      summary: 'When and why we share your information',
      content: {
        title: 'Information Sharing Practices',
        sharingScenarios: [
          {
            title: 'Service Providers',
            description: 'Third parties who help us deliver our services',
            parties: ['Cloud hosting (AWS, Google Cloud)', 'Payment processors (Stripe, PayPal)', 'Customer support platforms', 'Analytics services'],
            safeguards: 'All providers sign data processing agreements and are GDPR/CCPA compliant'
          },
          {
            title: 'Business Partners',
            description: 'Logistics and supply chain partners',
            parties: ['Shipping carriers', 'Supplier platforms', 'Integration partners (ERP, WMS)'],
            safeguards: 'Data shared is limited to operational necessity'
          },
          {
            title: 'Legal Compliance',
            description: 'When required by law or to protect rights',
            parties: ['Law enforcement', 'Regulatory bodies', 'Legal proceedings'],
            safeguards: 'We verify legal requests before compliance'
          }
        ],
        note: 'We NEVER sell your personal information to third parties.'
      }
    },
    {
      id: 'data-security',
      label: 'Data Security',
      icon: 'shield',
      summary: 'How we protect your information',
      content: {
        title: 'Security Measures',
        measures: [
          { name: 'Encryption', description: '256-bit AES for data at rest, TLS 1.3 for data in transit', status: 'Active' },
          { name: 'Access Control', description: 'Role-based access with multi-factor authentication', status: 'Active' },
          { name: 'Monitoring', description: '24/7 security monitoring and intrusion detection', status: 'Active' },
          { name: 'Backups', description: 'Automated daily backups with 30-day retention', status: 'Active' },
          { name: 'Penetration Testing', description: 'Quarterly third-party security audits', status: 'Scheduled' },
          { name: 'Incident Response', description: 'Dedicated response team with 72-hour notification', status: 'Ready' }
        ],
        certifications: ['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', 'CCPA Compliant']
      }
    },
    {
      id: 'user-rights',
      label: 'Your Rights & Choices',
      icon: 'user',
      summary: 'Control over your personal data',
      content: {
        title: 'Data Subject Rights',
        rights: [
          { name: 'Right to Access', description: 'Request a copy of your data', timeframe: '30 days', method: 'Email privacy@supplychainpro.com' },
          { name: 'Right to Rectification', description: 'Correct inaccurate information', timeframe: 'Immediate', method: 'In-app profile settings' },
          { name: 'Right to Deletion', description: 'Request data removal', timeframe: '90 days', method: 'Account deletion settings' },
          { name: 'Right to Restrict Processing', description: 'Limit how we use your data', timeframe: '15 days', method: 'Email request' },
          { name: 'Right to Data Portability', description: 'Export your data', timeframe: '30 days', method: 'Data export tool' },
          { name: 'Right to Object', description: 'Object to specific processing', timeframe: '15 days', method: 'Email request' }
        ],
        howToExercise: 'To exercise any of these rights, contact our Data Protection Officer at privacy@supplychainpro.com or use the in-app privacy center.'
      }
    },
    {
      id: 'cookies',
      label: 'Cookies & Tracking',
      icon: 'eye',
      summary: 'Technologies we use to enhance your experience',
      content: {
        title: 'Cookie Usage',
        cookieTypes: [
          { name: 'Essential Cookies', description: 'Required for basic functionality', duration: 'Session', required: true },
          { name: 'Preference Cookies', description: 'Remember your settings', duration: '1 year', required: false },
          { name: 'Analytics Cookies', description: 'Usage analytics and improvement', duration: '2 years', required: false },
          { name: 'Marketing Cookies', description: 'Personalized advertisements', duration: '90 days', required: false }
        ],
        controlOptions: 'You can manage cookie preferences in your device settings or via our cookie consent manager.'
      }
    },
    {
      id: 'children-privacy',
      label: "Children's Privacy",
      icon: 'user-group',
      summary: 'Our policy regarding users under 13',
      content: {
        title: 'Children Under 13',
        paragraphs: [
          'Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.',
          'If you believe a child has provided us with personal information, please contact us immediately at privacy@supplychainpro.com.',
          'Upon verification, we will take steps to delete that information from our servers.'
        ]
      }
    },
    {
      id: 'international-transfer',
      label: 'International Transfers',
      icon: 'location',
      summary: 'How we handle cross-border data transfers',
      content: {
        title: 'Cross-Border Data Processing',
        paragraphs: [
          'Your information may be transferred to and processed in countries other than your own.',
          'We ensure appropriate safeguards are in place for international data transfers:',
          '• Standard Contractual Clauses (SCCs) for EEA/UK/Switzerland transfers',
          '• Data Processing Agreements with all third-party processors',
          '• Privacy Shield framework adherence (where applicable)',
          '• Regional data hosting options available for enterprise customers'
        ]
      }
    },
    {
      id: 'policy-updates',
      label: 'Updates to This Policy',
      icon: 'refresh',
      summary: 'How we notify you of changes',
      content: {
        title: 'Policy Change Management',
        paragraphs: [
          'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.',
          'Material changes will be notified via:',
          '• Email to registered account holders (30 days prior notice)',
          '• In-app notification with change summary',
          '• Updated "Last Updated" date at the top of this policy',
          'We encourage you to review this policy periodically for any changes.'
        ],
        versionHistory: [
          { version: '3.0.0', date: 'April 8, 2026', changes: 'GDPR compliance updates, new data retention policies' },
          { version: '2.5.0', date: 'January 15, 2026', changes: 'Added cookie preferences, updated sharing disclosures' },
          { version: '2.0.0', date: 'October 1, 2025', changes: 'Major revision for CCPA compliance' }
        ]
      }
    },
    {
      id: 'contact-us',
      label: 'Contact Us',
      icon: 'mail',
      summary: 'How to reach our privacy team',
      content: {
        title: 'Contact Information',
        company: {
          name: 'SupplyChainPro Inc.',
          address: '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
          email: 'privacy@supplychainpro.com',
          phone: '+1 (800) 555-0123',
          dpo: 'Dr. Sarah Chen, Data Protection Officer',
          registration: 'California Consumer Privacy Act (CCPA) compliant'
        },
        responseTime: 'We typically respond to privacy inquiries within 3-5 business days.',
        escalationPath: 'If you are unsatisfied with our response, you have the right to lodge a complaint with your local supervisory authority.'
      }
    }
  ], [config?.sections]);

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

  // Stats / Quick facts
  const quickFacts = config?.quickFacts || [
    { label: 'Data Collection Categories', value: '6', icon: 'database' },
    { label: 'User Rights', value: '6', icon: 'user' },
    { label: 'Security Certifications', value: '4', icon: 'shield' },
    { label: 'Response Time', value: '30 days', icon: 'clock' },
  ];

  const tabs = [
    { id: 'policy', label: 'Privacy Policy', icon: 'document' },
    { id: 'summary', label: 'Quick Summary', icon: 'view-grid' },
    { id: 'faq', label: 'FAQ', icon: 'chat' },
  ];

  // FAQ data
  const faqs = config?.faqs || [
    {
      question: 'How long do you keep my data?',
      answer: 'We retain your personal data for as long as your account is active or as needed to provide you services. After account deletion, we retain certain data for up to 90 days for legal compliance and fraud prevention purposes. You can request earlier deletion in most cases.'
    },
    {
      question: 'Do you sell my personal information?',
      answer: 'No. We never sell your personal information to third parties. We only share data as described in this policy: with service providers who help us operate, with business partners for supply chain operations, or when required by law.'
    },
    {
      question: 'Can I delete my account and all my data?',
      answer: 'Yes. You can delete your account at any time from the app settings. Upon deletion, we will remove your personal information within 30 days, though some data may be retained for legal compliance (e.g., transaction records for tax purposes) for up to 7 years.'
    },
    {
      question: 'Is my data encrypted?',
      answer: 'Yes. We use industry-standard encryption: 256-bit AES for data at rest and TLS 1.3 for data in transit. Your passwords are hashed and never stored in plain text.'
    },
    {
      question: 'Do you comply with GDPR?',
      answer: 'Yes. We are fully GDPR compliant for users in the European Union. This includes the right to access, rectification, erasure, restriction, portability, and objection. We have appointed a Data Protection Officer (DPO) to oversee compliance.'
    },
    {
      question: 'How do I request my data?',
      answer: 'You can request a copy of your data through the in-app Privacy Center or by emailing privacy@supplychainpro.com. We will provide your data in a structured, machine-readable format within 30 days.'
    }
  ];

  const [expandedFaq, setExpandedFaq] = useState(null);

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      database: <HiOutlineDatabase className={className} />,
      chip: <HiOutlineChip className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      user: <HiOutlineUser className={className} />,
      'user-group': <HiOutlineUserGroup className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      'credit-card': <HiOutlineCreditCard className={className} />,
      clipboard: <HiOutlineClipboardList className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      building: <HiOutlineOfficeBuilding className={className} />,
      scale: <HiOutlineScale className={className} />,
      eye: <HiOutlineEye className={className} />,
      trash: <HiOutlineTrash className={className} />,
      'shield-exclamation': <HiOutlineShieldExclamation className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      mail: <HiOutlineMail className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      'view-grid': <HiOutlineViewGrid className={className} />,
      chat: <HiOutlineBell className={className} />,
      clock: <HiOutlineClock className={className} />,
      download: <HiOutlineDownload className={className} />,
      printer: <HiOutlinePrinter className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  // Render policy content based on section
  const renderSectionContent = (section) => {
    const content = section.content;

    if (section.id === 'introduction') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          {content.paragraphs.map((p, idx) => (
            <p key={idx} className="text-gray-600 dark:text-gray-400">{p}</p>
          ))}
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">Key Principles:</p>
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

    if (section.id === 'information-collection') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {content.categories.map((cat, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  {getIcon(cat.icon, "w-5 h-5 text-blue-600")}
                  <h4 className="font-semibold text-gray-900 dark:text-white">{cat.name}</h4>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 italic">{content.legalBasis}</p>
        </div>
      );
    }

    if (section.id === 'usage-of-information') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          <div className="space-y-6">
            {content.purposes.map((purpose, idx) => (
              <div key={idx} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{purpose.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{purpose.description}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {purpose.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (section.id === 'data-sharing') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          <div className="space-y-4">
            {content.sharingScenarios.map((scenario, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{scenario.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{scenario.description}</p>
                <ul className="space-y-1 mb-3">
                  {scenario.parties.map((party, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-3 h-3 text-green-500" />
                      {party}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-blue-600 dark:text-blue-400">{scenario.safeguards}</p>
              </div>
            ))}
          </div>
          <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-300 font-medium">{content.note}</p>
          </div>
        </div>
      );
    }

    if (section.id === 'data-security') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {content.measures.map((measure, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <HiOutlineShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{measure.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{measure.description}</p>
                  <span className={`inline-block text-xs mt-1 px-2 py-0.5 rounded-full ${measure.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {measure.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {content.certifications.map((cert, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-xs text-blue-700 dark:text-blue-300">
                <HiOutlineCheckCircle className="w-3 h-3" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      );
    }

    if (section.id === 'user-rights') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="text-left p-3">Right</th>
                  <th className="text-left p-3">Description</th>
                  <th className="text-left p-3">Timeframe</th>
                  <th className="text-left p-3">Method</th>
                </tr>
              </thead>
              <tbody>
                {content.rights.map((right, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-700">
                    <td className="p-3 font-medium text-gray-900 dark:text-white">{right.name}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{right.description}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{right.timeframe}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{right.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic">{content.howToExercise}</p>
        </div>
      );
    }

    if (section.id === 'cookies') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="text-left p-3">Type</th>
                  <th className="text-left p-3">Description</th>
                  <th className="text-left p-3">Duration</th>
                  <th className="text-left p-3">Required</th>
                </tr>
              </thead>
              <tbody>
                {content.cookieTypes.map((cookie, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-700">
                    <td className="p-3 font-medium text-gray-900 dark:text-white">{cookie.name}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{cookie.description}</td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{cookie.duration}</td>
                    <td className="p-3">
                      {cookie.required ? (
                        <span className="text-green-600">Always</span>
                      ) : (
                        <span className="text-gray-500">Opt-in</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">{content.controlOptions}</p>
        </div>
      );
    }

    if (section.id === 'children-privacy') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          {content.paragraphs.map((p, idx) => (
            <p key={idx} className="text-gray-600 dark:text-gray-400">{p}</p>
          ))}
        </div>
      );
    }

    if (section.id === 'international-transfer') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          {content.paragraphs.map((p, idx) => (
            <p key={idx} className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      );
    }

    if (section.id === 'policy-updates') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          {content.paragraphs.map((p, idx) => (
            <p key={idx} className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <div className="mt-4">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">Version History:</p>
            <div className="space-y-2">
              {content.versionHistory.map((v, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <span className="font-mono text-gray-500">{v.version}</span>
                  <span className="text-gray-400">{v.date}</span>
                  <span className="text-gray-600 dark:text-gray-400">{v.changes}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (section.id === 'contact-us') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-gray-900 dark:text-white">{content.company.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{content.company.address}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Email:</strong> <a href={`mailto:${content.company.email}`} className="text-blue-600 hover:underline">{content.company.email}</a>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Phone:</strong> {content.company.phone}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400"><strong>DPO:</strong> {content.company.dpo}</p>
          </div>
          <p className="text-sm text-gray-500">{content.responseTime}</p>
          <p className="text-sm text-gray-500">{content.escalationPath}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Privacy Policy Center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-6">
            <HiOutlineShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Legal & Compliance"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {config?.title?.prefix || "Privacy"} <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{config?.title?.highlight || "Policy"}</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {config?.description || "At SupplyChainPro, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information."}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineCalendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Last Updated: {lastUpdated}</span>
            </div>
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 transition-colors"
            >
              <HiOutlinePrinter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Print / Download</span>
            </button>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {quickFacts.map((fact, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                {getIcon(fact.icon, "w-4 h-4 text-blue-600")}
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-gray-900 dark:text-white">{fact.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{fact.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        {activeTab === 'policy' && (
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
                placeholder="Search policy sections..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                        {getIcon(section.icon, "w-5 h-5 text-blue-600")}
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

        {/* Summary Tab */}
        {activeTab === 'summary' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy Quick Summary</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {sections.slice(0, 8).map((section) => (
                <div key={section.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    {getIcon(section.icon, "w-4 h-4 text-blue-600")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{section.label}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{section.summary}</p>
                    <button
                      onClick={() => {
                        setActiveTab('policy');
                        setExpandedSection(section.id);
                        setSearchQuery('');
                      }}
                      className="text-xs text-blue-600 hover:underline mt-1"
                    >
                      Read full section →
                    </button>
                  </div>
                </div>
              ))}
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
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Still have questions? Contact our privacy team at{' '}
                <a href="mailto:privacy@supplychainpro.com" className="text-blue-600 font-medium hover:underline">
                  privacy@supplychainpro.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Print Modal */}
        {showPrintModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowPrintModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Download Privacy Policy</h3>
                  <button onClick={() => setShowPrintModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <HiOutlineDocumentDuplicate className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Choose your preferred format to download the complete Privacy Policy.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
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

export default PrivacyPolicySection2;