// page/frontend/Events/TrainingSessionsSection/TrainingSessionsSection1.jsx

/**
 * Training Sessions Section I - Professional Development & Certification Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Training Metrics (Courses, Students, Hours, Certificates)
 * - Hero Section with Featured Training Banner
 * - Training Session Cards with Level/Format Badges
 * - Search and Filter System (by level, format, category)
 * - Tab Navigation for All, Featured, Upcoming, Certification, and My Trainings
 * - Enrollment Modal with Form Validation
 * - Syllabus Modal with Course Outline
 * - Instructor Profile Modal with Bio and Expertise
 * - Certificate Download Modal
 * - Share Modal for Easy Course Promotion
 * - Call-to-Action for Newsletter Subscription
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Fully Responsive Grid and Card Layouts
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineTicket,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineUsers,
  HiOutlineAcademicCap,
  HiOutlineBell,
  HiOutlineMail,
  HiOutlineLink,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineDesktopComputer,
  HiOutlineBadgeCheck,
  HiOutlineDocumentText,
} from 'react-icons/hi';
import { HiOutlineUser, HiOutlineTrophy } from 'react-icons/hi2';

const TrainingSessionsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [viewMode, setViewMode] = useState('grid');
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [shareSession, setShareSession] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [showShareModal, setShowShareModal] = useState(false);
  const [syllabusSession, setSyllabusSession] = useState(null);
  const [enrolledSessions, setEnrolledSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSessionId, setExpandedSessionId] = useState(null);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [certificateSession, setCertificateSession] = useState(null);
  const [showInstructorModal, setShowInstructorModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '', experience: '', phone: '', questions: '', newsletter: false, terms: false, });

  // ====================== REFS =====================
  const modalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const trainingSessions = useMemo(() => config?.trainingSessions || [], [config?.trainingSessions]);
  const stats = config?.stats || [];
  const featuredSessionId = config?.featuredSessionId || (trainingSessions[0]?.id);
  const featuredSession = trainingSessions.find(s => s.id === featuredSessionId) || trainingSessions[0];

  const levels = useMemo(() => {
    const lev = new Set(trainingSessions.map(s => s.level).filter(Boolean));
    return ['all', ...Array.from(lev)];
  }, [trainingSessions]);

  const formats = useMemo(() => {
    const fmt = new Set(trainingSessions.map(s => s.format).filter(Boolean));
    return ['all', ...Array.from(fmt)];
  }, [trainingSessions]);

  const categories = useMemo(() => {
    const cats = new Set(trainingSessions.map(s => s.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [trainingSessions]);

  const tabs = config?.tabs || [
    { id: 'all', label: 'All Trainings', icon: 'academic' },
    { id: 'featured', label: 'Featured', icon: 'star' },
    { id: 'upcoming', label: 'Upcoming', icon: 'calendar' },
    { id: 'certification', label: 'Certification', icon: 'badge' },
    { id: 'enrolled', label: 'My Trainings', icon: 'bookmark' },
  ];

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    const saved = localStorage.getItem('enrolledTrainingSessions');
    if (saved) setEnrolledSessions(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('enrolledTrainingSessions', JSON.stringify(enrolledSessions));
  }, [enrolledSessions]);

  // ==================== HELPER FUNCTIONS ====================
  const filterSessions = (sessionList) => {
    return sessionList.filter((s) => {
      const matchesSearch = searchQuery === '' ||
        s.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.instructor?.name?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = selectedLevel === 'all' || s.level === selectedLevel;
      const matchesFormat = selectedFormat === 'all' || s.format === selectedFormat;
      const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
      return matchesSearch && matchesLevel && matchesFormat && matchesCategory;
    });
  };

  const now = new Date();
  const upcomingSessions = trainingSessions.filter(s => {
    if (!s.startDate) return false;
    return new Date(s.startDate) > now;
  });
  const certificationSessions = trainingSessions.filter(s => s.hasCertification);

  let displayedSessions = [];
  if (activeTab === 'all') {
    displayedSessions = filterSessions(trainingSessions);
  } else if (activeTab === 'featured') {
    displayedSessions = filterSessions(trainingSessions.filter(s => s.isFeatured || s.id === featuredSessionId));
  } else if (activeTab === 'upcoming') {
    displayedSessions = filterSessions(upcomingSessions);
  } else if (activeTab === 'certification') {
    displayedSessions = filterSessions(certificationSessions);
  } else if (activeTab === 'enrolled') {
    displayedSessions = filterSessions(trainingSessions.filter(s => enrolledSessions.includes(s.id)));
  }

  // ==================== FORM HANDLERS ====================
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleEnroll = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.terms) newErrors.terms = 'You must agree to the terms';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (selectedSession && !enrolledSessions.includes(selectedSession.id)) {
      setEnrolledSessions([...enrolledSessions, selectedSession.id]);
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowEnrollModal(false);
      setFormData({
        name: '', email: '', company: '', role: '', experience: '',
        phone: '', questions: '', newsletter: false, terms: false
      });
    }, 3000);
  };

  // ==================== UI HANDLERS ====================
  const isEnrolled = (sessionId) => enrolledSessions.includes(sessionId);

  const shareSessionHandler = (session, e) => {
    e.stopPropagation();
    setShareSession(session);
    setShowShareModal(true);
  };

  const copyLink = () => {
    if (shareSession) {
      navigator.clipboard.writeText(`${window.location.origin}/training/${shareSession.id}`);
      alert('Link copied to clipboard!');
    }
  };

  const formatDateRange = (startDate, endDate) => {
    if (!startDate) return 'TBD';
    const start = new Date(startDate);
    if (!endDate) return start.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const end = new Date(endDate);
    if (start.getMonth() === end.getMonth()) {
      return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.getDate()}, ${end.getFullYear()}`;
    }
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  };

  const getLevelBadge = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'intermediate': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'advanced': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getFormatBadge = (format) => {
    switch (format?.toLowerCase()) {
      case 'online': return 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300';
      case 'in-person': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'hybrid': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getPriceDisplay = (price) => {
    if (!price || price === 0) return 'Free';
    return `$${price}`;
  };

  const downloadCertificate = () => {
    alert('Certificate download started!');
    setShowCertificateModal(false);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Training Sessions Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineAcademicCap className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Professional Development"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Advance Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Supply Chain Career"}</span> {config?.title?.suffix || ""}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Expert-led training sessions, workshops, and certification programs designed to help you master supply chain management and advance your career."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'users' ? <HiOutlineUsers className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                    stat.icon === 'academic' ? <HiOutlineAcademicCap className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                      stat.icon === 'clock' ? <HiOutlineClock className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                        <HiOutlineBadgeCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== FEATURED TRAINING BANNER ==================== */}
        {featuredSession && activeTab !== 'featured' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white" />
            </div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Training</span>
                {featuredSession.hasCertification && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Certificate Included</span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredSession.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredSession.description}</p>

              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredSession.startDate && (
                  <div className="flex items-center gap-2">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span>{formatDateRange(featuredSession.startDate, featuredSession.endDate)}</span>
                  </div>
                )}
                {featuredSession.duration && (
                  <div className="flex items-center gap-2">
                    <HiOutlineClock className="w-4 h-4" />
                    <span>{featuredSession.duration}</span>
                  </div>
                )}
                {featuredSession.format && (
                  <div className="flex items-center gap-2">
                    {featuredSession.format === 'online' ? <HiOutlineDesktopComputer className="w-4 h-4" /> : <HiOutlineLocationMarker className="w-4 h-4" />}
                    <span>{featuredSession.format === 'online' ? 'Online' : featuredSession.location?.city ? `${featuredSession.location.city}, ${featuredSession.location.country}` : 'In-Person'}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setSelectedSession(featuredSession);
                    setShowEnrollModal(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Enroll in this training"
                >
                  <HiOutlineTicket className="w-5 h-5" />
                  Enroll Now
                  <HiOutlineArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setSyllabusSession(featuredSession);
                    setShowSyllabusModal(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                  aria-label="View syllabus"
                >
                  <HiOutlineDocumentText className="w-5 h-5" />
                  View Syllabus
                </button>
                {featuredSession.instructor && (
                  <button
                    onClick={() => {
                      setSelectedInstructor(featuredSession.instructor);
                      setShowInstructorModal(true);
                    }}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                    aria-label="Meet instructor"
                  >
                    <HiOutlineUser className="w-5 h-5" />
                    Meet Instructor
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
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
              {tab.icon === 'academic' ? <HiOutlineAcademicCap className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  tab.icon === 'calendar' ? <HiOutlineCalendar className="w-4 h-4" /> :
                    tab.icon === 'badge' ? <HiOutlineBadgeCheck className="w-4 h-4" /> :
                      <HiOutlineBookmark className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'enrolled' && (
                <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">
                  {enrolledSessions.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== SEARCH AND FILTERS ==================== */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search trainings by title, description, or instructor..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Search trainings"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle filters"
            >
              <HiOutlineFilter className="w-5 h-5" />
              Filters
              {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>

            {/* View Toggle */}
            <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Grid view"
              >
                <HiOutlineViewGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="List view"
              >
                <HiOutlineViewList className="w-5 h-5" />
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by level"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level === 'all' ? 'All Levels' : level}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Format</label>
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by format"
                  >
                    {formats.map((format) => (
                      <option key={format} value={format}>
                        {format === 'all' ? 'All Formats' : format === 'online' ? 'Online' : format === 'in-person' ? 'In-Person' : 'Hybrid'}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by category"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ==================== TRAINING SESSIONS GRID/LIST ==================== */}
        {displayedSessions.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineAcademicCap className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No training sessions found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('all');
                setSelectedFormat('all');
                setSelectedCategory('all');
              }}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              aria-label="Clear filters"
            >
              Clear filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedSessions.map((session) => {
              const enrolled = isEnrolled(session.id);
              const isExpanded = expandedSessionId === session.id;

              return (
                <div
                  key={session.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
                  {/* Card Image */}
                  {session.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={session.image}
                        alt={session.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {session.level && (
                        <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getLevelBadge(session.level)}`}>
                          {session.level}
                        </span>
                      )}
                      {session.format && (
                        <span className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full ${getFormatBadge(session.format)}`}>
                          {session.format === 'online' ? 'Online' : session.format === 'in-person' ? 'In-Person' : 'Hybrid'}
                        </span>
                      )}
                      {session.hasCertification && (
                        <span className="absolute bottom-4 left-4 text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">
                          <HiOutlineBadgeCheck className="w-3 h-3 inline mr-1" />Certificate
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {session.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {session.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      {session.startDate && (
                        <div className="flex items-center gap-2">
                          <HiOutlineCalendar className="w-4 h-4 shrink-0" />
                          <span>{formatDateRange(session.startDate, session.endDate)}</span>
                        </div>
                      )}
                      {session.duration && (
                        <div className="flex items-center gap-2">
                          <HiOutlineClock className="w-4 h-4 shrink-0" />
                          <span>{session.duration}</span>
                        </div>
                      )}
                      {session.instructor && (
                        <div className="flex items-center gap-2">
                          <HiOutlineUser className="w-4 h-4 shrink-0" />
                          <span>Instructor: {session.instructor.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {getPriceDisplay(session.price)}
                      </span>
                      {session.price && session.price > 0 && (
                        <span className="text-xs text-gray-500 ml-1">USD</span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {enrolled ? (
                        <>
                          <button
                            onClick={() => {
                              setCertificateSession(session);
                              setShowCertificateModal(true);
                            }}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                            aria-label="Get certificate"
                          >
                            <HiOutlineBadgeCheck className="w-4 h-4" />
                            Get Certificate
                          </button>
                          <button
                            onClick={() => setExpandedSessionId(isExpanded ? null : session.id)}
                            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                            aria-label={isExpanded ? "Show less details" : "Show more details"}
                          >
                            {isExpanded ? 'Less' : 'More'}
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              setSelectedSession(session);
                              setShowEnrollModal(true);
                            }}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                            aria-label="Enroll in training"
                          >
                            <HiOutlineTicket className="w-4 h-4" />
                            Enroll Now
                          </button>
                          <button
                            onClick={(e) => shareSessionHandler(session, e)}
                            className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
                            aria-label="Share training"
                          >
                            <HiOutlineShare className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                        {session.syllabus && session.syllabus.length > 0 && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">What You'll Learn:</p>
                            <ul className="space-y-1">
                              {session.syllabus.slice(0, 3).map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                  <HiOutlineCheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <button
                          onClick={() => {
                            setSyllabusSession(session);
                            setShowSyllabusModal(true);
                          }}
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                          aria-label="View full syllabus"
                        >
                          View Full Syllabus →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {displayedSessions.map((session) => {
              const enrolled = isEnrolled(session.id);

              return (
                <div
                  key={session.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {session.image && (
                      <div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                        <img src={session.image} alt={session.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{session.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {session.level && (
                              <span className={`text-xs px-2 py-0.5 rounded-full ${getLevelBadge(session.level)}`}>
                                {session.level}
                              </span>
                            )}
                            {session.format && (
                              <span className={`text-xs px-2 py-0.5 rounded-full ${getFormatBadge(session.format)}`}>
                                {session.format === 'online' ? 'Online' : session.format === 'in-person' ? 'In-Person' : 'Hybrid'}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={(e) => shareSessionHandler(session, e)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Share training">
                            <HiOutlineShare className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{session.description}</p>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                        {session.startDate && (
                          <div className="flex items-center gap-1">
                            <HiOutlineCalendar className="w-4 h-4" />
                            <span>{formatDateRange(session.startDate, session.endDate)}</span>
                          </div>
                        )}
                        {session.duration && (
                          <div className="flex items-center gap-1">
                            <HiOutlineClock className="w-4 h-4" />
                            <span>{session.duration}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {enrolled ? (
                          <button onClick={() => { setCertificateSession(session); setShowCertificateModal(true); }} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors" aria-label="Get certificate">
                            Get Certificate
                          </button>
                        ) : (
                          <button onClick={() => { setSelectedSession(session); setShowEnrollModal(true); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors" aria-label="Enroll now">
                            Enroll Now - {getPriceDisplay(session.price)}
                          </button>
                        )}
                        <button onClick={() => { setSyllabusSession(session); setShowSyllabusModal(true); }} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="View syllabus">
                          View Syllabus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== ENROLLMENT MODAL ==================== */}
        {showEnrollModal && selectedSession && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowEnrollModal(false)}
            role="dialog"
            aria-label="Enroll in Training"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Enroll in Training</h3>
                    <p className="text-blue-100 text-xs mt-1 line-clamp-1">{selectedSession.title}</p>
                  </div>
                  <button onClick={() => setShowEnrollModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enrollment Confirmed!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      You've been enrolled in {selectedSession.title}. Check your email for course details and access information.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEnroll} className="space-y-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">{formatDateRange(selectedSession.startDate, selectedSession.endDate)}</span>
                        {selectedSession.duration && <> • {selectedSession.duration}</>}
                        {selectedSession.price && selectedSession.price > 0 && <> • ${selectedSession.price} USD</>}
                      </p>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full name *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        aria-label="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email address *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                        aria-label="Your email address"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Your company name"
                      />
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="Job title"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Your job title"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        aria-label="Years of experience"
                      >
                        <option value="">Experience Level</option>
                        <option value="beginner">Beginner (0-2 years)</option>
                        <option value="intermediate">Intermediate (3-7 years)</option>
                        <option value="advanced">Advanced (8+ years)</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone (optional)"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Your phone number"
                      />
                    </div>

                    <textarea
                      name="questions"
                      value={formData.questions}
                      onChange={handleInputChange}
                      placeholder="Any questions about this training?"
                      rows="2"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 resize-none"
                      aria-label="Any questions about the training"
                    />

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                        aria-label="Subscribe to newsletter"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Subscribe to training updates and new course announcements
                      </span>
                    </label>

                    <label className={`flex items-start gap-2 cursor-pointer ${errors.terms ? 'text-red-500' : ''}`}>
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        className="w-4 h-4 mt-0.5"
                        aria-label="Agree to terms"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> *
                      </span>
                    </label>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      aria-label="Complete enrollment"
                    >
                      Complete Enrollment
                      <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SYLLABUS MODAL ==================== */}
        {showSyllabusModal && syllabusSession && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowSyllabusModal(false)}
            role="dialog"
            aria-label="Course Syllabus"
            aria-modal="true"
          >
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Course Syllabus - {syllabusSession.title}</h3>
                  <button onClick={() => setShowSyllabusModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {syllabusSession.syllabus && syllabusSession.syllabus.length > 0 ? (
                  <div className="space-y-4">
                    {syllabusSession.syllabus.map((item, idx) => (
                      <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                        <p className="text-gray-800 dark:text-gray-200">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <HiOutlineDocumentText className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                    <p className="text-gray-500 dark:text-gray-400">Full syllabus will be available upon enrollment.</p>
                  </div>
                )}
                {syllabusSession.learningObjectives && syllabusSession.learningObjectives.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Learning Objectives:</h4>
                    <ul className="space-y-2">
                      {syllabusSession.learningObjectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== INSTRUCTOR MODAL ==================== */}
        {showInstructorModal && selectedInstructor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowInstructorModal(false)}
            role="dialog"
            aria-label="Instructor Profile"
            aria-modal="true"
          >
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Meet Your Instructor</h3>
                  <button onClick={() => setShowInstructorModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                {selectedInstructor.avatar ? (
                  <img src={selectedInstructor.avatar} alt={selectedInstructor.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <HiOutlineUser className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                )}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{selectedInstructor.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{selectedInstructor.title}, {selectedInstructor.company}</p>
                {selectedInstructor.verified && (
                  <div className="inline-flex items-center gap-1 text-xs text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full mb-3">
                    <HiOutlineBadgeCheck className="w-3 h-3" />
                    Verified Instructor
                  </div>
                )}
                <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedInstructor.bio}</p>
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-left">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Expertise:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedInstructor.expertise?.map((exp, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CERTIFICATE MODAL ==================== */}
        {showCertificateModal && certificateSession && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowCertificateModal(false)}
            role="dialog"
            aria-label="Certificate of Completion"
            aria-modal="true"
          >
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-emerald-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Certificate of Completion</h3>
                  <button onClick={() => setShowCertificateModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineBadgeCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{certificateSession.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Complete the course requirements to earn your certificate of completion.
                </p>
                <button
                  onClick={downloadCertificate}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Download certificate"
                >
                  <HiOutlineDownload className="w-5 h-5" />
                  Download Certificate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SHARE MODAL ==================== */}
        {showShareModal && shareSession && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowShareModal(false)}
            role="dialog"
            aria-label="Share Training Session"
            aria-modal="true"
          >
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Training Session</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareSession.title}</p>
                <div className="flex flex-col gap-3">
                  <button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" aria-label="Copy link">
                    <HiOutlineLink className="w-4 h-4" />Copy Link
                  </button>
                  <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareSession.title)}&body=${encodeURIComponent(`${shareSession.title}\n${shareSession.description}\n\n${window.location.origin}/training/${shareSession.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Share via email">
                    <HiOutlineMail className="w-4 h-4" />Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't Miss Out on Training Opportunities</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our training newsletter and get notified about new courses, early bird discounts, and exclusive workshops.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="Subscribe to updates">
              <HiOutlineMail className="w-5 h-5" />
              Subscribe to Updates
            </button>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
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
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default TrainingSessionsSection1;