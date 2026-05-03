// page/frontend/Careers/InternshipProgramsSection/InternshipProgramsSection1.jsx

/**
 * Internship Programs Section I - Early Career Hub
 *
 * Unique Design Elements:
 * - Stats Cards for program metrics (Interns Hired, Conversion Rate, Countries, Rating)
 * - Featured Internship Spotlight with Hero Layout
 * - Program Type Filter Chips with Custom Icons
 * - Location Filter Dropdown for Geographic Targeting
 * - Duration Filter (Summer, Fall, Spring, Year-Round)
 * - Expandable Skills Section with Checkmark List
 * - Save/Bookmark Functionality for Programs
 * - Application Form with Validation and Submission
 * - Success Message on Form Submission
 * - Intern Testimonials Grid with Rating Stars
 * - Contact Section with Email and Phone
 * - Search across program titles, descriptions, and skills
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Grid Layout for Program Cards
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
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineRocketLaunch as HiOutlineRocket } from 'react-icons/hi2';
import { MdOutlineCoffee as HiOutlineCoffee } from "react-icons/md";

const InternshipProgramsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedPrograms, setSavedPrograms] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', university: '', program: '', graduationYear: '', resume: null, message: '' });

  // ==================== MEMOIZED DATA ====================
  const allPrograms = useMemo(() => config?.programs || [], [config?.programs]);

  const programTypes = useMemo(
    () =>
      config?.programTypes || [
        { id: 'all', label: 'All Programs', icon: 'academic', count: allPrograms.length },
        { id: 'engineering', label: 'Software Engineering', icon: 'code' },
        { id: 'product', label: 'Product Management', icon: 'briefcase' },
        { id: 'data', label: 'Data Science & Analytics', icon: 'chart' },
        { id: 'marketing', label: 'Marketing', icon: 'trending' },
        { id: 'sales', label: 'Sales', icon: 'briefcase' },
        { id: 'design', label: 'Product Design', icon: 'template' }
      ],
    [config?.programTypes, allPrograms.length]
  );

  const locations = useMemo(
    () =>
      config?.locations || [
        { id: 'all', label: 'All Locations', flag: '🌐' },
        { id: 'remote', label: 'Remote', flag: '🌍' },
        { id: 'sf', label: 'San Francisco, CA', flag: '🇺🇸' },
        { id: 'nyc', label: 'New York, NY', flag: '🇺🇸' },
        { id: 'london', label: 'London, UK', flag: '🇬🇧' },
        { id: 'bangalore', label: 'Bangalore, India', flag: '🇮🇳' }
      ],
    [config?.locations]
  );

  const durations = useMemo(
    () => [
      { id: 'all', label: 'All Durations' },
      { id: 'summer', label: 'Summer (10-12 weeks)' },
      { id: 'fall', label: 'Fall (12-16 weeks)' },
      { id: 'spring', label: 'Spring (12-16 weeks)' },
      { id: 'year-round', label: 'Year-Round (6-12 months)' }
    ],
    []
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: "200+", label: "Interns Hired", icon: "users" },
        { value: "85%", label: "Conversion Rate", icon: "trophy" },
        { value: "15+", label: "Countries", icon: "globe" },
        { value: "4.9", label: "Program Rating", icon: "star" }
      ],
    [config?.stats]
  );

  const testimonials = useMemo(() => config?.testimonials || [], [config?.testimonials]);

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
      coffee: <HiOutlineCoffee className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineAcademicCap className={className} />;
  }, []);

  /**
   * Returns program configuration with color, icon, and label
   */
  const getProgramConfig = useCallback((programType) => {
    const configs = {
      engineering: { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'code', label: 'Software Engineering', borderColor: 'border-blue-200 dark:border-blue-800' },
      product: { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'briefcase', label: 'Product Management', borderColor: 'border-purple-200 dark:border-purple-800' },
      data: { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'chart', label: 'Data Science & Analytics', borderColor: 'border-emerald-200 dark:border-emerald-800' },
      marketing: { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'trending', label: 'Marketing', borderColor: 'border-orange-200 dark:border-orange-800' },
      sales: { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'briefcase', label: 'Sales', borderColor: 'border-red-200 dark:border-red-800' },
      design: { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'template', label: 'Product Design', borderColor: 'border-indigo-200 dark:border-indigo-800' }
    };
    return configs[programType] || configs.engineering;
  }, []);

  /**
   * Returns location configuration with flag and label
   */
  const getLocationConfig = useCallback((locationId) => {
    const configs = {
      remote: { flag: '🌍', label: 'Remote' },
      sf: { flag: '🇺🇸', label: 'San Francisco, CA' },
      nyc: { flag: '🇺🇸', label: 'New York, NY' },
      london: { flag: '🇬🇧', label: 'London, UK' },
      bangalore: { flag: '🇮🇳', label: 'Bangalore, India' }
    };
    return configs[locationId] || { flag: '🌐', label: locationId || 'Global' };
  }, []);

  /**
   * Toggle save/bookmark status for a program
   */
  const handleSaveProgram = useCallback((programId) => {
    setSavedPrograms((prev) =>
      prev.includes(programId) ? prev.filter((id) => id !== programId) : [...prev, programId]
    );
  }, []);

  /**
   * Toggle expanded state for a program
   */
  const toggleExpanded = useCallback((programId) => {
    setExpandedProgram((prev) => (prev === programId ? null : programId));
  }, []);

  /**
   * Handle form input change
   */
  const handleInputChange = useCallback((e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
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
        university: '',
        program: '',
        graduationYear: '',
        resume: null,
        message: ''
      });
    }, 3000);
  }, []);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedProgram('all');
    setSelectedLocation('all');
    setSelectedDuration('all');
  }, []);

  /**
   * Scroll to application form
   */
  const scrollToForm = useCallback((programTitle) => {
    setFormData((prev) => ({ ...prev, program: programTitle }));
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // ==================== FILTERING LOGIC ====================
  const filteredPrograms = useMemo(() => {
    let programs = [...allPrograms];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      programs = programs.filter(
        (p) =>
          p.title?.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query) ||
          p.skills?.some((skill) => skill.toLowerCase().includes(query))
      );
    }

    if (selectedProgram !== 'all') {
      programs = programs.filter((p) => p.type === selectedProgram);
    }

    if (selectedLocation !== 'all') {
      programs = programs.filter((p) => p.location === selectedLocation);
    }

    if (selectedDuration !== 'all') {
      programs = programs.filter((p) => p.duration === selectedDuration);
    }

    return programs;
  }, [allPrograms, searchQuery, selectedProgram, selectedLocation, selectedDuration]);

  // Update program type counts for display
  const programTypesWithCount = useMemo(() => {
    return programTypes.map((prog) => {
      if (prog.id === 'all') {
        return { ...prog, count: filteredPrograms.length };
      }
      const count = allPrograms.filter((p) => p.type === prog.id).length;
      return { ...prog, count };
    });
  }, [programTypes, allPrograms, filteredPrograms.length]);

  // Get featured program (first marked as featured, otherwise first in filtered list)
  const featuredProgram = useMemo(() => {
    const featured = allPrograms.find((p) => p.isFeatured);
    return featured || filteredPrograms[0];
  }, [allPrograms, filteredPrograms]);

  // Regular programs (excluding featured program)
  const regularPrograms = useMemo(() => {
    if (!featuredProgram) return filteredPrograms;
    return filteredPrograms.filter((p) => p.id !== featuredProgram.id);
  }, [filteredPrograms, featuredProgram]);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Internship Programs - Early Career Hub"
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
            {getIcon('academic', 'w-4 h-4 text-blue-600 dark:text-blue-400 mr-2')}
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'Internship Programs'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Launch Your'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Career'}
            </span>{' '}
            {config?.title?.suffix || 'with Us'}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              'Gain real-world experience, work on impactful projects, and learn from industry experts. Our internship programs are designed to help you grow and succeed.'}
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
              config?.searchPlaceholder || 'Search programs by title, department, or skills...'
            }
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
            aria-label="Search internship programs"
          />
        </div>

        {/* ==================== PROGRAM TYPE FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {programTypesWithCount.map((program) => (
            <button
              key={program.id}
              onClick={() => setSelectedProgram(program.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedProgram === program.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${program.label}`}
            >
              {getIcon(program.icon, 'w-4 h-4')}
              {program.label}
              {program.count !== undefined && (
                <span className="ml-1 text-xs opacity-80">{program.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== LOCATION AND DURATION FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {/* Location Filter Dropdown */}
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
            {getIcon('location', 'w-4 h-4 text-gray-500')}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
              aria-label="Filter by location"
            >
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.label}
                </option>
              ))}
            </select>
          </div>

          {/* Duration Filter Dropdown */}
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
            {getIcon('clock', 'w-4 h-4 text-gray-500')}
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
              aria-label="Filter by duration"
            >
              {durations.map((dur) => (
                <option key={dur.id} value={dur.id}>
                  {dur.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ==================== FEATURED PROGRAM ==================== */}
        {featuredProgram && (
          <div className="mb-16">
            <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl"
                aria-hidden="true"
              />

              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        Featured Internship
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getProgramConfig(featuredProgram.type).color}`}
                        >
                          {getProgramConfig(featuredProgram.type).label}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredProgram.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {featuredProgram.description}
                    </p>

                    {/* Skills Tags */}
                    {featuredProgram.skills && featuredProgram.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProgram.skills.slice(0, 4).map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Details */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('location', 'w-4 h-4')}
                        <span>
                          {getLocationConfig(featuredProgram.location).flag}{' '}
                          {getLocationConfig(featuredProgram.location).label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('clock', 'w-4 h-4')}
                        <span>{featuredProgram.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {getIcon('calendar', 'w-4 h-4')}
                        <span>{featuredProgram.startDate}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => scrollToForm(featuredProgram.title)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Apply Now
                        <HiArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleSaveProgram(featuredProgram.id)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedPrograms.includes(featuredProgram.id)
                          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 text-amber-700 dark:text-amber-400'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                          }`}
                        aria-label={
                          savedPrograms.includes(featuredProgram.id)
                            ? 'Remove from saved'
                            : 'Save for later'
                        }
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                        {savedPrograms.includes(featuredProgram.id) ? 'Saved' : 'Save for Later'}
                      </button>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="relative">
                    <div
                      className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl"
                      aria-hidden="true"
                    />
                    <img
                      src={featuredProgram.image}
                      alt={featuredProgram.title}
                      className="relative rounded-2xl shadow-2xl w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== PROGRAMS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPrograms.map((program) => {
            const programConfig = getProgramConfig(program.type);
            const locationConfig = getLocationConfig(program.location);
            const isExpanded = expandedProgram === program.id;
            const isSaved = savedPrograms.includes(program.id);

            return (
              <div
                key={program.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6">
                  {/* Program Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${programConfig.color} flex items-center justify-center`}
                      >
                        {getIcon(programConfig.icon, 'w-5 h-5')}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {program.title}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${programConfig.color}`}>
                          {programConfig.label}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSaveProgram(program.id)}
                      className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                        }`}
                      aria-label={isSaved ? 'Remove from saved' : 'Save program'}
                    >
                      {getIcon('bookmark', 'w-4 h-4')}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon('location', 'w-4 h-4')}
                      <span>
                        {locationConfig.flag} {locationConfig.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon('clock', 'w-4 h-4')}
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon('calendar', 'w-4 h-4')}
                      <span>{program.startDate}</span>
                    </div>
                  </div>

                  {/* Expandable Skills */}
                  {program.skills && program.skills.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpanded(program.id)}
                        className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                        aria-label={
                          isExpanded
                            ? 'Show less'
                            : `View ${program.skills.length} skills`
                        }
                      >
                        {isExpanded
                          ? 'Show less'
                          : `View ${program.skills.length} skills`}
                        <HiArrowRight className="w-4 h-4" />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 flex flex-wrap gap-2 animate-fadeIn">
                          {program.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button
                      onClick={() => scrollToForm(program.title)}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Apply Now
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400">
                      {program.deadline}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {regularPrograms.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('academic', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No internship programs found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== INTERN TESTIMONIALS ==================== */}
        {testimonials.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              What Our Interns Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        {getIcon("users", "w-6 h-6 text-blue-600 dark:text-blue-400")}
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {testimonial.university}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 italic text-sm">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== APPLICATION FORM ==================== */}
        <div
          id="application-form"
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            {getIcon('academic', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config?.formTitle || 'Apply for Internship'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {config?.formDescription ||
                'Fill out the form below and our recruiting team will review your application.'}
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
                Thank you for your interest. Our recruiting team will review your application and reach out within 5 business days.
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
                    placeholder="john@university.edu"
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
                    University / College *
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="Stanford University"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Program of Interest *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a program</option>
                    {allPrograms.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Graduation Year *
                  </label>
                  <select
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  >
                    <option value="">Select year</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Resume / CV *
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-gray-200"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  PDF, DOC, or DOCX (Max 5MB)
                </p>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Why are you interested in this internship?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  placeholder="Tell us about your interest and what you hope to learn..."
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Application
                  <HiArrowRight className="inline ml-2 w-4 h-4" />
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of application.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          {getIcon('mail', 'w-12 h-12 mx-auto mb-4')}
          <h3 className="text-2xl font-bold mb-4">
            Questions About Internships?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our recruiting team is here to help. Reach out to us directly for any questions about our internship programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:internships@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              aria-label="Email recruiting team"
            >
              {getIcon('mail', 'w-4 h-4')}
              internships@supplychainpro.com
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

export default InternshipProgramsSection1;