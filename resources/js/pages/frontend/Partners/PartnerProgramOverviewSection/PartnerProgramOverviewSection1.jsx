// frontend/Partners/PartnerProgramOverviewSection/PartnerProgramOverviewSection1.jsx

import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// Import icons from react-icons
import { FaQuoteLeft, FaCertificate } from 'react-icons/fa';
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
} from 'react-icons/hi';
import {
  HiOutlinePhone,
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
} from 'react-icons/hi2';

const PartnerProgramOverviewSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [expandedPartner, setExpandedPartner] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState('all');

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports multiple react-icon libraries (hi, hi2, fa)
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      // Heroicons (Hi)
      usergroup: <HiOutlineUserGroup className={className} />,
      globe: <HiOutlineGlobe className={className} />,
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
      // FontAwesome (fa)
      quote: <FaQuoteLeft className={className} />,
      certificate: <FaCertificate className={className} />,
      // Heroicons 2 (hi2)
      trophy: <HiOutlineTrophy className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      phone: <HiOutlinePhone className={className} />,
    };
    return icons[iconName] || <HiOutlineUserGroup className={className} />;
  }, []);

  /**
   * Returns program configuration (color, icon, label) based on program type
   */
  const getProgramConfig = useCallback((programType) => {
    const configs = {
      technology: {
        color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
        icon: 'chip',
        label: 'Technology Partner',
      },
      consulting: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'briefcase',
        label: 'Consulting Partner',
      },
      reseller: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Reseller Partner',
      },
      alliance: {
        color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        icon: 'users',
        label: 'Strategic Alliance',
      },
      solution: {
        color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
        icon: 'cog',
        label: 'Solution Partner',
      },
    };
    return configs[programType] || configs.technology;
  }, []);

  // ==================== MEMOIZED DATA ====================
  const allPartners = useMemo(() => config?.partners || [], [config?.partners]);
  const programTypes = useMemo(
    () =>
      config?.programTypes || [
        { id: 'all', label: 'All Programs', icon: 'usergroup' },
        { id: 'technology', label: 'Technology Partners', icon: 'chip' },
        { id: 'consulting', label: 'Consulting Partners', icon: 'briefcase' },
        { id: 'reseller', label: 'Reseller Partners', icon: 'globe' },
        { id: 'alliance', label: 'Strategic Alliances', icon: 'users' },
        { id: 'solution', label: 'Solution Partners', icon: 'cog' },
      ],
    [config?.programTypes]
  );
  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'All Regions' },
        { id: 'north-america', label: 'North America' },
        { id: 'emea', label: 'EMEA' },
        { id: 'apac', label: 'APAC' },
        { id: 'latin-america', label: 'Latin America' },
      ],
    [config?.regions]
  );
  const successMetrics = useMemo(
    () =>
      config?.successMetrics || [
        { value: '500+', label: 'Global Partners', icon: 'usergroup' },
        { value: '50+', label: 'Countries', icon: 'globe' },
        { value: '$100M+', label: 'Partner Revenue', icon: 'credit' },
        { value: '95%', label: 'Partner Satisfaction', icon: 'star' },
      ],
    [config?.successMetrics]
  );
  const programBenefits = useMemo(
    () =>
      config?.programBenefits || [
        {
          title: 'Exclusive Training & Certification',
          description:
            'Access to comprehensive training programs and certifications to enhance your expertise.',
          icon: 'academic',
        },
        {
          title: 'Marketing & Sales Support',
          description:
            'Co-marketing opportunities, sales enablement resources, and lead generation programs.',
          icon: 'chart',
        },
        {
          title: 'Technical Support',
          description: 'Priority technical support and dedicated partner success managers.',
          icon: 'shield',
        },
        {
          title: 'Revenue Sharing',
          description: 'Competitive commission structures and revenue sharing models.',
          icon: 'credit',
        },
      ],
    [config?.programBenefits]
  );
  const featuredPartner = useMemo(
    () => config?.featuredPartner || allPartners[0],
    [config?.featuredPartner, allPartners]
  );

  // ==================== FILTERING LOGIC ====================
  const filteredPartners = useMemo(() => {
    let partners = [...allPartners];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      partners = partners.filter(
        (p) =>
          p.name?.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedProgram !== 'all') {
      partners = partners.filter((p) => p.program === selectedProgram);
    }

    if (selectedRegion !== 'all') {
      partners = partners.filter((p) => p.region === selectedRegion);
    }

    return partners;
  }, [allPartners, searchQuery, selectedProgram, selectedRegion]);

  /**
   * Clears all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedProgram('all');
    setSelectedRegion('all');
  }, []);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Partner Program Overview"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-cyan-200 dark:bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
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
          <div className="inline-flex items-center bg-cyan-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-cyan-100 dark:border-gray-700">
            {getIcon('usergroup', 'w-4 h-4 text-cyan-600 dark:text-cyan-400 mr-2')}
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
              {config?.badge || 'Partner Program'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Grow with'}{' '}
            <span className="bg-linear-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'SupplyChainPro'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              'Join our global partner ecosystem and accelerate your business growth. We provide the tools, resources, and support you need to succeed.'}
          </p>
        </div>

        {/* ==================== SUCCESS METRICS ROW ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {successMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                {getIcon(metric.icon, 'w-5 h-5 text-cyan-600 dark:text-cyan-400')}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== SEARCH BAR ==================== */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {getIcon('search', 'w-5 h-5 text-gray-400')}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              config?.searchPlaceholder || 'Search partners by name, program type, or region...'
            }
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search partners"
          />
        </div>

        {/* ==================== PROGRAM TYPE FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {programTypes.map((program) => (
            <button
              key={program.id}
              onClick={() => setSelectedProgram(program.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedProgram === program.id
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${program.label}`}
            >
              {getIcon(program.icon, 'w-4 h-4')}
              {program.label}
            </button>
          ))}
        </div>

        {/* ==================== REGION FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedRegion === region.id
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {region.label}
            </button>
          ))}
        </div>

        {/* ==================== PROGRAM BENEFITS SECTION ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Why Partner With Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mx-auto mb-4">
                  {getIcon(benefit.icon, 'w-6 h-6 text-cyan-600 dark:text-cyan-400')}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== FEATURED PARTNER SPOTLIGHT ==================== */}
        {featuredPartner && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-cyan-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl"
                aria-hidden="true"
              />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full">
                        Featured Partner
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getProgramConfig(featuredPartner.program).color}`}
                        >
                          {getProgramConfig(featuredPartner.program).label}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      {featuredPartner.logo && (
                        <img
                          src={featuredPartner.logo}
                          alt={featuredPartner.name}
                          className="h-12 w-auto object-contain"
                          loading="lazy"
                        />
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {featuredPartner.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredPartner.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('location', 'w-4 h-4')}
                        <span>{featuredPartner.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('globe', 'w-4 h-4')}
                        <span>
                          {regions.find((r) => r.id === featuredPartner.region)?.label ||
                            featuredPartner.region}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={featuredPartner.link}
                        className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Learn More
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/become-partner"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-cyan-600 hover:text-cyan-600"
                      >
                        Become a Partner
                        <HiOutlineExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative">
                    <div
                      className="absolute -inset-4 bg-cyan-600/20 rounded-2xl blur-2xl"
                      aria-hidden="true"
                    />
                    <img
                      src={featuredPartner.image}
                      alt={featuredPartner.name}
                      className="relative rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== PARTNERS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPartners.map((partner) => {
            const programConfig = getProgramConfig(partner.program);
            const isExpanded = expandedPartner === partner.id;

            return (
              <div
                key={partner.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6">
                  {/* Logo and Program Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-10 w-auto object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className={`w-10 h-10 rounded-xl ${programConfig.color} flex items-center justify-center`}
                        >
                          {getIcon(programConfig.icon, 'w-5 h-5')}
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {partner.name}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${programConfig.color}`}>
                          {programConfig.label}
                        </span>
                      </div>
                    </div>
                    {partner.certified && (
                      <div className="tooltip" title="Certified Partner">
                        {getIcon('badge', 'w-5 h-5 text-cyan-500')}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {partner.description}
                  </p>

                  {/* Location and Region */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {partner.location && (
                      <div className="flex items-center gap-1">
                        {getIcon('location', 'w-4 h-4')}
                        <span>{partner.location}</span>
                      </div>
                    )}
                    {partner.region && (
                      <div className="flex items-center gap-1">
                        {getIcon('globe', 'w-4 h-4')}
                        <span>
                          {regions.find((r) => r.id === partner.region)?.label || partner.region}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Expandable Expertise Section */}
                  {partner.expertise && partner.expertise.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => setExpandedPartner(isExpanded ? null : partner.id)}
                        className="flex items-center gap-1 text-sm text-cyan-600 dark:text-cyan-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={isExpanded ? 'Show less' : 'View expertise areas'}
                      >
                        {isExpanded ? 'Show less' : 'View expertise areas'}
                        <HiArrowRight className="w-4 h-4" />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 animate-fadeIn">
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                            Expertise:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {partner.expertise.map((exp, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                              >
                                {exp}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {partner.tags && partner.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {partner.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={partner.link}
                      className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Learn More
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                    {partner.contactEmail && (
                      <a
                        href={`mailto:${partner.contactEmail}`}
                        className="text-gray-400 hover:text-cyan-600 transition-colors"
                        aria-label="Contact partner"
                      >
                        {getIcon('mail', 'w-4 h-4')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('usergroup', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No partners found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== BECOME A PARTNER CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-cyan-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
          {getIcon('usergroup', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {config?.ctaTitle || 'Ready to Join Our Partner Program?'}
          </h3>
          <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
            {config?.ctaDescription ||
              'Take the first step toward growing your business with SupplyChainPro. Apply today and start your journey as a trusted partner.'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/become-partner"
              className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply Now
              <HiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-sales"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
            >
              Contact Sales
              {getIcon('mail', 'w-4 h-4')}
            </Link>
          </div>
        </div>

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto text-cyan-600 dark:text-cyan-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.newsletter?.title || 'Partner Program Updates'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive partner program news, training opportunities, and exclusive resources.'}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const email = formData.get('email');
                if (email && email.includes('@')) {
                  // Handle subscription logic here
                  e.target.reset();
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Email for partner updates"
                required
              />
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
              {config?.newsletter?.disclaimer ||
                'No spam, unsubscribe anytime. Get 1-2 emails per month.'}
            </p>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .tooltip {
          position: relative;
          cursor: help;
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

export default PartnerProgramOverviewSection1;