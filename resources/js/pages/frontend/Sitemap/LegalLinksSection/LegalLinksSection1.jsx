// page/frontend/Sitemap/LegalLinksSection/LegalLinksSection1.jsx

// React
import { useState } from 'react';

// Icons
import {
  HiOutlineDocumentText,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlineGlobe,
  HiOutlineDatabase,
  HiOutlineChip,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineSearch,
  HiOutlineChevronRight,
  HiOutlineExternalLink,
  HiOutlineInformationCircle,
  HiOutlineBriefcase,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlinePrinter,
  HiOutlineX,
  HiOutlineFolder,
  HiOutlineFlag,
} from 'react-icons/hi';
import {
  HiOutlineBuildingOffice,
  HiOutlineFingerPrint,
} from 'react-icons/hi2';
import { MdOutlineCookie as HiOutlineCookie, } from "react-icons/md";

const LegalLinksSection1 = ({ config }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Legal categories and links
  const legalCategories = config?.legalCategories || [
    {
      id: 'agreements',
      name: 'Legal Agreements',
      icon: 'document',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Binding legal agreements governing our relationship',
      linkCount: 6,
      links: [
        { name: 'Terms of Service', path: '/legal/terms', description: 'Terms and conditions for using our Services', updated: 'April 8, 2026', version: 'v3.0' },
        { name: 'End User License Agreement (EULA)', path: '/legal/eula', description: 'Software license terms', updated: 'March 15, 2026', version: 'v2.1' },
        { name: 'Master Subscription Agreement', path: '/legal/msa', description: 'Enterprise subscription terms', updated: 'March 1, 2026', version: 'v2.0' },
        { name: 'Data Processing Agreement (DPA)', path: '/legal/dpa', description: 'GDPR-compliant data processing terms', updated: 'April 1, 2026', version: 'v2.0' },
        { name: 'Service Level Agreement (SLA)', path: '/legal/sla', description: 'Service availability commitments', updated: 'February 15, 2026', version: 'v1.5' },
        { name: 'Business Associate Agreement (BAA)', path: '/legal/baa', description: 'HIPAA compliance agreement', updated: 'January 10, 2026', version: 'v1.0' },
      ],
    },
    {
      id: 'privacy',
      name: 'Privacy & Data Protection',
      icon: 'lock',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      description: 'How we collect, use, and protect your data',
      linkCount: 7,
      links: [
        { name: 'Privacy Policy', path: '/legal/privacy', description: 'How we handle your personal information', updated: 'April 8, 2026', version: 'v3.0' },
        { name: 'Cookie Policy', path: '/legal/cookies', description: 'How we use cookies and tracking technologies', updated: 'April 8, 2026', version: 'v2.0' },
        { name: 'GDPR Compliance', path: '/legal/gdpr', description: 'EU data protection compliance', updated: 'April 8, 2026', version: 'v2.0' },
        { name: 'CCPA Compliance', path: '/legal/ccpa', description: 'California Consumer Privacy Act', updated: 'March 20, 2026', version: 'v1.5' },
        { name: 'Data Retention Policy', path: '/legal/data-retention', description: 'How long we keep your data', updated: 'March 10, 2026', version: 'v1.0' },
        { name: 'Data Subject Request Form', path: '/legal/data-request', description: 'Exercise your privacy rights', updated: 'February 28, 2026', version: 'v1.0' },
        { name: 'Privacy Shield Notice', path: '/legal/privacy-shield', description: 'EU-US data transfer framework', updated: 'January 15, 2026', version: 'v1.0' },
      ],
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: 'shield',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      description: 'Security practices and compliance certifications',
      linkCount: 8,
      links: [
        { name: 'Security Policy', path: '/legal/security', description: 'Our security program overview', updated: 'April 5, 2026', version: 'v2.0' },
        { name: 'Acceptable Use Policy', path: '/legal/aup', description: 'Rules for using our Services', updated: 'March 20, 2026', version: 'v1.5' },
        { name: 'Vulnerability Disclosure Program', path: '/security/disclosure', description: 'Report security vulnerabilities', updated: 'April 3, 2026', version: 'v1.0' },
        { name: 'Bug Bounty Program', path: '/security/bug-bounty', description: 'Rewards for security researchers', updated: 'April 2, 2026', version: 'v1.0' },
        { name: 'SOC 2 Type II Report', path: '/legal/soc2', description: 'Service Organization Control report', updated: 'March 15, 2026', version: '2025' },
        { name: 'ISO 27001 Certification', path: '/legal/iso27001', description: 'Information security management', updated: 'March 10, 2026', version: '2025' },
        { name: 'PCI DSS Compliance', path: '/legal/pci', description: 'Payment card industry compliance', updated: 'February 28, 2026', version: 'v1.0' },
        { name: 'Subprocessor List', path: '/legal/subprocessors', description: 'Third-party data processors', updated: 'March 15, 2026', version: 'v2.0' },
      ],
    },
    {
      id: 'policies',
      name: 'Company Policies',
      icon: 'building',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      description: 'Internal and external company policies',
      linkCount: 6,
      links: [
        { name: 'Code of Conduct', path: '/legal/code-of-conduct', description: 'Ethical standards and behavior', updated: 'February 15, 2026', version: 'v1.0' },
        { name: 'Anti-Corruption Policy', path: '/legal/anti-corruption', description: 'Anti-bribery and corruption', updated: 'February 10, 2026', version: 'v1.0' },
        { name: 'Export Control Policy', path: '/legal/export-control', description: 'International trade compliance', updated: 'January 25, 2026', version: 'v1.0' },
        { name: 'Modern Slavery Statement', path: '/legal/modern-slavery', description: 'UK Modern Slavery Act compliance', updated: 'January 20, 2026', version: 'v1.0' },
        { name: 'Environmental Policy', path: '/legal/environmental', description: 'Sustainability commitments', updated: 'January 15, 2026', version: 'v1.0' },
        { name: 'Equal Opportunity Policy', path: '/legal/equal-opportunity', description: 'Non-discrimination statement', updated: 'January 10, 2026', version: 'v1.0' },
      ],
    },
    {
      id: 'intellectual-property',
      name: 'Intellectual Property',
      icon: 'scale',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      description: 'IP rights and usage guidelines',
      linkCount: 5,
      links: [
        { name: 'Copyright Policy', path: '/legal/copyright', description: 'Copyright infringement claims', updated: 'March 5, 2026', version: 'v1.0' },
        { name: 'Trademark Guidelines', path: '/legal/trademark', description: 'Use of our trademarks', updated: 'February 20, 2026', version: 'v1.0' },
        { name: 'DMCA Notice', path: '/legal/dmca', description: 'Digital Millennium Copyright Act', updated: 'February 15, 2026', version: 'v1.0' },
        { name: 'Open Source Attribution', path: '/legal/open-source', description: 'Third-party open source licenses', updated: 'March 28, 2026', version: 'v1.0' },
        { name: 'Patent Notice', path: '/legal/patents', description: 'Patent information', updated: 'January 5, 2026', version: 'v1.0' },
      ],
    },
    {
      id: 'compliance',
      name: 'Regulatory Compliance',
      icon: 'globe',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      description: 'Industry and regional compliance information',
      linkCount: 6,
      links: [
        { name: 'GDPR Compliance Center', path: '/legal/gdpr-center', description: 'GDPR resources and information', updated: 'April 8, 2026', version: 'v1.0' },
        { name: 'CCPA Compliance Center', path: '/legal/ccpa-center', description: 'California privacy rights', updated: 'March 20, 2026', version: 'v1.0' },
        { name: 'HIPAA Compliance', path: '/legal/hipaa', description: 'Healthcare data compliance', updated: 'February 28, 2026', version: 'v1.0' },
        { name: 'FedRAMP Compliance', path: '/legal/fedramp', description: 'Federal risk management', updated: 'February 15, 2026', version: 'v1.0' },
        { name: 'SOC Reports', path: '/legal/soc-reports', description: 'Service Organization Control reports', updated: 'March 15, 2026', version: '2025' },
        { name: 'Compliance Certificates', path: '/legal/certificates', description: 'Security and compliance certificates', updated: 'March 10, 2026', version: '2025' },
      ],
    },
    {
      id: 'disclosures',
      name: 'Legal Disclosures',
      icon: 'info',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      description: 'Required legal disclosures',
      linkCount: 5,
      links: [
        { name: 'Imprint', path: '/legal/imprint', description: 'Legal disclosure information', updated: 'January 1, 2026', version: 'v1.0' },
        { name: 'Terms of Sale', path: '/legal/terms-of-sale', description: 'Purchase terms and conditions', updated: 'February 1, 2026', version: 'v1.0' },
        { name: 'Return Policy', path: '/legal/returns', description: 'Refund and cancellation policy', updated: 'January 15, 2026', version: 'v1.0' },
        { name: 'Warranty Disclaimer', path: '/legal/warranty', description: 'Limited warranty information', updated: 'January 10, 2026', version: 'v1.0' },
        { name: 'Legal Notice', path: '/legal/notice', description: 'Copyright and legal information', updated: 'January 5, 2026', version: 'v1.0' },
      ],
    },
    {
      id: 'reporting',
      name: 'Reporting & Transparency',
      icon: 'flag',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      description: 'Transparency reports and disclosures',
      linkCount: 4,
      links: [
        { name: 'Transparency Report', path: '/legal/transparency', description: 'Government data requests', updated: 'March 1, 2026', version: '2025' },
        { name: 'Government Requests', path: '/legal/gov-requests', description: 'Law enforcement data requests', updated: 'February 15, 2026', version: '2025' },
        { name: 'Copyright Takedown Report', path: '/legal/copyright-report', description: 'DMCA takedown statistics', updated: 'February 1, 2026', version: '2025' },
        { name: 'Data Breach History', path: '/legal/breach-history', description: 'Security incident disclosures', updated: 'January 15, 2026', version: 'v1.0' },
      ],
    },
  ];

  // Filter categories based on search
  const filteredCategories = legalCategories.filter(category => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      category.name.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query) ||
      category.links.some(link =>
        link.name.toLowerCase().includes(query) ||
        link.description.toLowerCase().includes(query)
      )
    );
  });

  // Get total link count
  const totalLinks = legalCategories.reduce((acc, cat) => acc + cat.links.length, 0);

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      scale: <HiOutlineScale className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      mail: <HiOutlineMail className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      database: <HiOutlineDatabase className={className} />,
      chip: <HiOutlineChip className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      search: <HiOutlineSearch className={className} />,
      info: <HiOutlineInformationCircle className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      heart: <HiOutlineHeart className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      folder: <HiOutlineFolder className={className} />,
      flag: <HiOutlineFlag className={className} />,
      cookie: <HiOutlineCookie className={className} />,
      fingerprint: <HiOutlineFingerPrint className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Legal Links Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-indigo-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-indigo-100 dark:border-gray-700">
            <HiOutlineScale className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              {config?.badge || "Legal & Compliance"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Legal"} <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Resources"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Access our legal documents, policies, and compliance information. Find terms of service, privacy policies, security documentation, and more."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineDocumentText className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Total Documents:</strong> {totalLinks}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineFolder className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Categories:</strong> {legalCategories.length}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineCalendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Last Updated:</strong> {lastUpdated}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search legal documents..."
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Legal Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgColor} rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              {/* Category Header */}
              <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${category.color} flex items-center justify-center`}>
                    {getIcon(category.icon, "w-6 h-6 text-white")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500">{category.linkCount} documents</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {category.description}
                </p>
              </div>

              {/* Category Links */}
              <div className="p-5">
                <ul className="space-y-3">
                  {category.links.slice(0, 4).map((link, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => {
                          setSelectedDocument({ ...link, category: category.name });
                          setShowLegalModal(true);
                        }}
                        className="group w-full text-left flex items-center justify-between p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-gray-900 dark:text-white text-sm">
                              {link.name}
                            </p>
                            {link.version && (
                              <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500">
                                {link.version}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                            {link.description}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">Updated: {link.updated}</p>
                        </div>
                        <HiOutlineChevronRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors ml-2 shrink-0" />
                      </button>
                    </li>
                  ))}
                </ul>
                {category.links.length > 4 && (
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                    className="mt-3 w-full text-center text-sm text-indigo-600 hover:text-indigo-700 font-medium py-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  >
                    {expandedCategory === category.id ? 'Show less ↑' : `View all ${category.linkCount} documents →`}
                  </button>
                )}
                {expandedCategory === category.id && (
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <ul className="space-y-3">
                      {category.links.slice(4).map((link, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => {
                              setSelectedDocument({ ...link, category: category.name });
                              setShowLegalModal(true);
                            }}
                            className="group w-full text-left flex items-center justify-between p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-gray-900 dark:text-white text-sm">
                                  {link.name}
                                </p>
                                {link.version && (
                                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500">
                                    {link.version}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                {link.description}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">Updated: {link.updated}</p>
                            </div>
                            <HiOutlineChevronRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors ml-2 shrink-0" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
            <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
            <p className="text-gray-500">No legal documents match your search.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-indigo-600 hover:underline text-sm"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>For legal inquiries, contact us at <a href="mailto:legal@supplychainpro.com" className="text-indigo-600 hover:underline">legal@supplychainpro.com</a></p>
        </div>

        {/* Legal Document Modal */}
        {showLegalModal && selectedDocument && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowLegalModal(false)}>
            <div className="relative max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">{selectedDocument.name}</h3>
                  <button onClick={() => setShowLegalModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedDocument.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Category:</span>
                    <span className="text-gray-900 dark:text-white">{selectedDocument.category}</span>
                  </div>
                  {selectedDocument.version && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Version:</span>
                      <span className="text-gray-900 dark:text-white">{selectedDocument.version}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500">Last Updated:</span>
                    <span className="text-gray-900 dark:text-white">{selectedDocument.updated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Effective Date:</span>
                    <span className="text-gray-900 dark:text-white">{selectedDocument.updated}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={selectedDocument.path}
                    className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    onClick={() => setShowLegalModal(false)}
                  >
                    View Document
                    <HiOutlineExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                  This document is legally binding. Please read carefully.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default LegalLinksSection1;